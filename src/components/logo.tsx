import Image from "next/image";
import { cn } from "@/lib/utils";
export default function Logo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2 select-none pointer-events-none",
        className,
      )}
    >
      <Image
        src="/logo.svg"
        alt="Webdesignify"
        className="rounded-sm"
        width={32}
        height={32}
      />
      <span className="font-semibold text-xl">Webdesignify</span>
    </div>
  );
}
