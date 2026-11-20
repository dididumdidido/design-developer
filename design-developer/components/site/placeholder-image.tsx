import Image from "next/image";
import { ImageIcon } from "lucide-react";

import type { ImageSlot } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Swappable image slot for 3D glass-and-metal objects.
 * - With `slot.src`: renders the transparent PNG with a gentle float + violet glow.
 * - Without: renders a labeled glass placeholder so you know what goes there.
 */
export function PlaceholderImage({
  slot,
  className,
  float = true,
  priority = false,
  aspect = "aspect-square",
  rounded = "rounded-[32px]",
}: {
  slot: ImageSlot;
  className?: string;
  float?: boolean;
  priority?: boolean;
  aspect?: string;
  rounded?: string;
}) {
  return (
    <div className={cn("relative isolate w-full", aspect, className)}>
      {/* violet glow behind the object */}
      <div
        aria-hidden
        className="absolute inset-[8%] -z-10 rounded-full bg-[radial-gradient(closest-side,rgb(168_85_247/0.35),rgb(243_232_255/0.5)_55%,transparent_75%)] blur-2xl"
      />
      <div className={cn("relative h-full w-full", float && "animate-float")}>
        {slot.src ? (
          <Image
            src={slot.src}
            alt={slot.alt ?? slot.label}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 45vw, 90vw"
            className="object-contain drop-shadow-[0_30px_40px_rgb(124_58_237/0.25)]"
          />
        ) : (
          <div
            role="img"
            aria-label={`Placeholder: ${slot.label}`}
            className={cn(
              "flex h-full w-full flex-col items-center justify-center gap-5 border border-dashed border-violet-brand/30 bg-white/40 p-6 text-center backdrop-blur-md",
              rounded
            )}
          >
            {/* faux glass & chrome orb */}
            <div className="relative aspect-square w-[38%] max-w-44">
              <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_210deg,#e4e4e7,#ffffff,#a1a1aa,#f4f4f5,#d4d4d8,#e4e4e7)] shadow-[0_20px_40px_-12px_rgb(63_63_70/0.35)]" />
              <div className="absolute inset-[10%] rounded-full bg-gradient-to-br from-white/90 via-lavender/70 to-violet-bright/40 backdrop-blur" />
              <div className="absolute left-[22%] top-[16%] h-[22%] w-[34%] rounded-full bg-white/90 blur-[2px]" />
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-brand/80">
              <ImageIcon className="size-3.5" /> Image slot
            </div>
            <p className="max-w-[16rem] text-sm leading-snug text-silver">{slot.label}</p>
          </div>
        )}
      </div>
    </div>
  );
}
