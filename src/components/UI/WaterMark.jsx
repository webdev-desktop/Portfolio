export default function WaterMark({ text }) {
  const watermarkText = text ? `${text} • ` : "Developer • ";

  return (
    <div className="fixed inset-0 w-screen h-screen overflow-hidden select-none pointer-events-none -z-10">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300%] h-[300%] flex flex-col gap-10 md:gap-14 justify-center items-center opacity-[0.05] font-ubuntu font-extrabold text-[clamp(3rem,8vw,10rem)] uppercase tracking-widest -rotate-45">
        {/* Loop lagakar bar-bar div likhne se bachein, ye desktop aur mobile dono pe wrap hokar poora cover karega */}
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="whitespace-nowrap linear loop-text">
              {Array(20).fill(watermarkText).join("")}
            </div>
          ))}
      </div>
    </div>
  );
}
