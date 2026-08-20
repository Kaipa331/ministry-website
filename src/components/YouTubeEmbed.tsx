interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  autoplay?: boolean;
}

export default function YouTubeEmbed({ videoId, title, className = "", autoplay = false }: YouTubeEmbedProps) {
  const src = `https://www.youtube.com/embed/${videoId}?rel=0${autoplay ? "&autoplay=1" : ""}`;

  return (
    <div className={`relative aspect-video overflow-hidden rounded-xl bg-[#001a4d] shadow-[0px_8px_24px_rgba(0,26,77,0.12)] md:rounded-[20px] ${className}`}>
      <iframe
        src={src}
        title={title}
        className="absolute inset-0 h-full w-full border-0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        referrerPolicy="strict-origin-when-cross-origin"
      />
    </div>
  );
}
