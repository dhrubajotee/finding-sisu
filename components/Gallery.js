import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

export default function Gallery({ images = [] }) {
  if (!images.length) return null;

  return (
    <div className="grid grid-cols-2 gap-3">
      {images.map((img, i) => (
        <div
          key={img.src || i}
          className={`relative overflow-hidden rounded-[var(--radius-card)] ${
            img.orientation === "landscape"
              ? "col-span-2 aspect-[16/10]"
              : "aspect-[3/4]"
          }`}
        >
          {img.src ? (
            <Image
              src={img.src}
              alt={img.alt || ""}
              fill
              sizes="(max-width: 1024px) 90vw, 380px"
              className="object-cover"
            />
          ) : (
            <PlaceholderImage seed={i} className="h-full w-full" />
          )}
        </div>
      ))}
    </div>
  );
}
