import Button from "@/components/UI/Button";
import PageHeader from "@/components/UI/PageHeader.jsx";
import TechIcons from "@/components/UI/TechIcons.jsx";
import WaterMark from "@/components/UI/WaterMark.jsx";
import certificationsData from "@/JSON/certificates.json";

export const metadata = {
  title: "Certificates",
};

export default function Certificates() {
  const VerifiedIcon = TechIcons["verified"];
  const DefaultCertIcon = TechIcons["certificates"];

  return (
    <>
      <WaterMark text={"Badge"} />
      <section
        id="certificates"
        className="w-full mx-auto flex-1 flex flex-col items-center justify-center text-text-main relative max-[769px]:pb-[clamp(3rem,6vw,6rem)] px-[clamp(1rem,4.5vw,4rem)] md:pl-[clamp(6rem,9vw,8rem)] select-none overflow-hidden fade-left"
      >
        <PageHeader
          title="Credentials"
          subtitle="Verified professional certifications, hackathon entries, and project excellence milestones"
        />

        {/* ⚡ FLEX WRAP RESPONSIVE ENGINE: Fits cards beautifully based on content width caps */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-[repeat(auto-fit,minmax(clamp(260px,30vw,320px),1fr))] justify-items-center items-center gap-[clamp(1.5rem,3vw,2.5rem)] mt-[clamp(2rem,4vw,3.5rem)] pb-[clamp(3rem,5vw,5rem)] fade-down">
          {certificationsData.map((cert, index) => {
            const TargetBrandIcon = TechIcons[cert.techKey] || DefaultCertIcon;

            // 🎨 Custom Status Badges Color Handler based on award ranks
            const isWinner =
              cert.status.toLowerCase().includes("winner") ||
              cert.status.toLowerCase().includes("place");
            const statusStyles = isWinner
              ? "bg-brand-cyan/10 border-brand-cyan/20 text-brand-cyan-light"
              : "bg-emerald-500/10 border-emerald-500/20 text-emerald-400";

            return (
              <div
                key={index}
                className="w-full bg-[#1e252b]/80 border border-border-subtle/30 p-[clamp(1.25rem,2.5vw,1.75rem)] rounded-[28px] flex flex-col justify-between shadow-2xl backdrop-blur-md group hover:border-brand-cyan/40 hover:-translate-y-1.5 transition-all duration-300 shrink-0"
              >
                <div>
                  {/* Card Header Elements */}
                  <div className="flex items-center justify-between w-full mb-[clamp(1rem,2vw,1.5rem)]">
                    <div
                      className={`w-[clamp(2rem,4vw,2.5rem)] h-[clamp(2rem,4vw,2.5rem)] opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300 ${isWinner ? "text-brand-cyan" : "text-text-muted"}`}
                    >
                      {TargetBrandIcon && (
                        <TargetBrandIcon className="w-full h-full" />
                      )}
                    </div>

                    {/* Badge status dynamic colors pipeline */}
                    <div
                      className={`flex items-center gap-1.5 border px-3 py-1 rounded-full ${statusStyles}`}
                    >
                      {VerifiedIcon && (
                        <VerifiedIcon className="w-3 h-3 text-inherit" />
                      )}
                      <span className="font-mono text-[10px] text-inherit uppercase tracking-wider font-semibold">
                        {cert.status}
                      </span>
                    </div>
                  </div>

                  {/* Main Heading Text Fields */}
                  <h3 className="font-ubuntu text-[clamp(1.15rem,1.8vw,1.35rem)] font-bold tracking-wide text-white leading-snug mb-1 group-hover:text-brand-cyan transition-colors duration-300">
                    {cert.title}
                  </h3>

                  <p className="font-mono text-[11px] text-text-dim/80 mb-[clamp(1.25rem,2.5vw,1.75rem)]">
                    {cert.provider} • {cert.issueDate}
                  </p>

                  {/* Sub-skills tracking list arrays */}
                  <div className="flex flex-col gap-2.5 border-t border-white/5 pt-4 mb-6">
                    {cert.skillsLearned.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="flex items-center gap-2 text-text-muted/70 text-[13px] font-ubuntu font-light"
                      >
                        <span className="w-1 h-1 bg-brand-cyan rounded-full shrink-0" />
                        <span className="truncate w-full text-left">
                          {skill}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 📂 Card Bottom Action Trigger: Directly views or downloads the local Public PDF */}

                <Button
                  text="View Certificate PDF"
                  href={cert.pdfPath}
                  variant="secondary"
                />
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
