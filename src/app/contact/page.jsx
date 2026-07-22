"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";
import PageHeader from "@/components/UI/PageHeader";
import WaterMark from "@/components/UI/WaterMark.jsx";
import TechIcons from "@/components/UI/TechIcons.jsx";
import profile from "@/JSON/profile.json";
import FloatingInput from "@/components/UI/FloatingInput";
import { useToast } from "@/components/UI/Toaster";
import Button from "@/components/UI/Button";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [formStartTime] = useState(Date.now());
  const [website, setWebsite] = useState("");
  const { showToast } = useToast();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loading) return;
    if (website.trim()) {
      console.warn("Bot detected.");
      return;
    }

    if (Date.now() - formStartTime < 3000) {
      showToast({
        type: "info",
        title: "Slow Down",
        message: "Please wait a few seconds before sending another message.",
      });

      return;
    }

    const user_name = formData?.name?.replace(/\s+/g, " ").trim();
    const user_email = formData?.email?.replace(/\s+/g, " ").trim();
    const user_message = formData?.message?.replace(/\s+/g, " ").trim();

    if (!user_name || !user_email || !user_message) {
      showToast({
        type: "warning",
        title: "Missing Fields",
        message: "Please fill out all required fields.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(user_email)) {
      showToast({
        type: "warning",
        title: "Invalid Email",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setLoading(true);
    try {
      const templateParams = { user_name, user_email, user_message };
      const service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const contact_template_id =
        process.env.NEXT_PUBLIC_EMAILJS_CONTACT_TEMPLATE_ID;
      const public_key = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      if (!service_id || !contact_template_id || !public_key) {
        showToast({
          type: "error",
          title: "Configuration Error",
          message: "Email service is not configured correctly.",
        });
        return;
      }

      // Message to you
      await emailjs.send(
        service_id,
        contact_template_id,
        templateParams,
        public_key
      );

      setFormData({
        name: "",
        email: "",
        message: "",
      });

      showToast({
        type: "success",
        title: "Message Sent",
        message: "Your message has been delivered successfully 🚀",
      });
    } catch (error) {
      showToast({
        type: "error",
        title: "Message Failed",
        message: "Unable to send your message. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  const PaperPlane = TechIcons["paperPlane"];
  const Location = TechIcons["location"];

  return (
    <>
      <WaterMark text={"Contact Me !"} />
      <section className="text-text-main flex flex-1 flex-col items-center justify-center relative pb-5 max-[770px]:pb-[clamp(4rem,10vw,7.5rem)] px-[clamp(1rem,4.5vw,4rem)] md:pl-[clamp(6rem,9vw,8rem)] select-none overflow-hidden capitalize fade-left">
        {/* Structural Entry Slide Header */}
        <PageHeader
          title="Contact"
          subtitle="I'm currently available for work"
        />

        <div className="w-full flex justify-center mb-[clamp(1rem,2vw,3rem)] mt-[clamp(1rem,2vw,3rem)] fade-right">
          <div className="relative border border-brand-cyan/40 hover:border-brand-cyan px-[clamp(1.5rem,4vw,3.5rem)] py-[clamp(0.75rem,1.5vw,1.25rem)] rounded-tl-4xl rounded-br-4xl shadow-[0_0_25px_rgba(18,247,214,0.04)] hover:shadow-[0_0_30px_rgba(18,247,214,0.12)] bg-[#1e252b]/60 backdrop-blur-md transition-all duration-500">
            <h3 className="font-ubuntu font-medium text-[clamp(1.1rem,2.2vw,1.65rem)] text-brand-cyan tracking-wide">
              Get In Touch
            </h3>
          </div>
        </div>

        {/* Main Structural Layout Matrix */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-12 gap-[clamp(2rem,4vw,3.5rem)] items-stretch">
          {/* Left Form Block Board */}
          <div className="lg:col-span-7 bg-[#1e252b]/30 border border-white/10 rounded-4xl p-[clamp(1.5rem,4vw,3rem)] shadow-[0_15px_35px_rgba(0,0,0,0.2)] hover:border-white/20 backdrop-blur-md flex flex-col justify-between fade-left">
            <form
              onSubmit={handleSubmit}
              className="w-full flex flex-col gap-[clamp(2.5rem,5vw,3.5rem)]"
            >
              {/* Input Row Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-[clamp(2.5rem,5vw,3.5rem)]">
                {/* Name Field */}

                <FloatingInput
                  label="Your Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />

                {/* Email Field */}
                <FloatingInput
                  label="Your Email"
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              {/* Message Field (Fixed UX Textarea) */}
              <FloatingInput
                label="Your Message"
                type="textarea"
                name="message"
                rows={3}
                value={formData.message}
                onChange={handleChange}
              />

              <div className="absolute left-[-9999px]" aria-hidden="true">
                <label htmlFor="website">Leave this field empty</label>

                <input
                  id="website"
                  type="text"
                  name="website"
                  aria-hidden="true"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  autoComplete="off"
                  tabIndex={-1}
                />
              </div>

              {/* Action Button */}
              <Button
                type="submit"
                text="Send Message"
                text2="Sending..."
                icon={PaperPlane}
                disabled={loading}
              />
            </form>
          </div>

          {/* Right Info & Map System */}
          <div className="lg:col-span-5 flex flex-col gap-5 fade-right">
            {/* Base Meta Element */}
            <div className="bg-[#1e252b]/30 border border-white/10 hover:border-brand-cyan/30 rounded-2xl p-5 flex items-center gap-4 shadow-sm backdrop-blur-md transition-all duration-500 group/loc fade-right">
              <div className="w-10 h-10 rounded-xl bg-brand-cyan/10 flex items-center justify-center text-brand-cyan border border-brand-cyan/20 group-hover/loc:bg-brand-cyan group-hover/loc:text-bg-primary transition-all duration-300">
                <Location className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[11px] font-mono text-text-dim/50 uppercase tracking-widest">
                  Base Location
                </p>
                <p className="text-[14px] font-ubuntu font-medium text-text-main group-hover/loc:text-brand-cyan transition-colors duration-300">
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${profile?.location}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {profile?.location}
                  </a>
                </p>
              </div>
            </div>

            {/* Interactive Map Block */}
            <div className="w-full flex-1 min-h-80 rounded-4xl overflow-hidden border border-white/10 relative shadow-[0_15px_35px_rgba(0,0,0,0.3)] group/map hover:border-brand-cyan/40 fade-right">
              <div className="absolute inset-0 bg-linear-to-t from-[#12161a]/90 via-[#1a1e23]/30 to-transparent opacity-60 group-hover/map:opacity-20 pointer-events-none z-10 transition-opacity duration-500" />
              <iframe
                src={`https://www.google.com/maps?q=${encodeURIComponent(profile.location)}&output=embed`}
                className="w-full h-full border-0 opacity-80 contrast-[1.1] saturate-[0.7] group-hover/map:opacity-85 group-hover/map:contrast-100 group-hover/map:saturate-100 transition-all duration-700 ease-out scale-[1.04] group-hover/map:scale-100"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
