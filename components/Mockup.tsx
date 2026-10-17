import Image from "next/image";
import { phoneShot, type Project } from "@/lib/projects";

/* A composed view of a build: the desktop screen in a browser window on a soft tint,
   with the phone screen in front. Used on the home cards and the Work list. */
export function Mockup({ p, sizes, className = "" }: { p: Project; sizes: string; className?: string }) {
  const phone = phoneShot(p);
  return (
    <div className={`mock ${className}`} style={{ ["--tint" as string]: p.tint }}>
      <div className="mock-browser">
        <div className="mock-bar" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        <Image src={p.hero.src} alt={p.hero.alt} width={p.hero.w} height={p.hero.h} sizes={sizes} />
      </div>
      {phone ? (
        <div className="mock-phone">
          <Image src={phone.src} alt="" width={phone.w} height={phone.h} sizes="180px" />
        </div>
      ) : null}
    </div>
  );
}
