import { Link } from "react-router-dom";
import { formatTime } from "../data/content";
import { usePlayer } from "../context/PlayerContext";

export default function MiniPlayer() {
  const { current, playing, progress, muted, toggle, skip, seek, toggleMute } = usePlayer();
  const ratio = current.duration ? progress / current.duration : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex items-center gap-3 bg-[#1a1b20] px-3 py-2.5 shadow-[0px_-4px_24px_rgba(0,0,0,0.3)] md:gap-6 md:px-16 md:py-3">
      <img
        src={current.image}
        alt=""
        className="h-9 w-9 shrink-0 rounded-md object-cover md:h-11 md:w-11 md:rounded-lg"
      />
      <div className="min-w-[120px] flex-1 flex-col md:min-w-[160px] md:flex-none">
        <p className="truncate font-sans text-[11px] font-semibold text-white md:text-[13px]">{current.title}</p>
        <p className="font-sans text-[10px] text-[#757682] md:text-[11px]">{current.subtitle}</p>
      </div>

      <button
        type="button"
        onClick={() => toggle()}
        className="ml-auto flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white transition-colors hover:bg-[#e8e4ff] sm:hidden"
        aria-label={playing ? "Pause" : "Play"}
      >
        {playing ? (
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
            <rect x="3" y="2" width="2.5" height="10" rx="0.5" fill="#001A4D" />
            <rect x="8.5" y="2" width="2.5" height="10" rx="0.5" fill="#001A4D" />
          </svg>
        ) : (
          <svg width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden>
            <path d="M2.5 1.5L11.5 7L2.5 12.5V1.5Z" fill="#001A4D" />
          </svg>
        )}
      </button>

      <div className="hidden items-center gap-3 sm:flex md:gap-4">
        <button type="button" onClick={() => skip(-15)} className="font-sans text-[11px] text-[#757682] transition-colors hover:text-white" aria-label="Back 15 seconds">
          −15
        </button>
        <button
          type="button"
          onClick={() => toggle()}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white transition-colors hover:bg-[#e8e4ff] md:h-9 md:w-9"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <rect x="3" y="2" width="2.5" height="10" rx="0.5" fill="#001A4D" />
              <rect x="8.5" y="2" width="2.5" height="10" rx="0.5" fill="#001A4D" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
              <path d="M2.5 1.5L11.5 7L2.5 12.5V1.5Z" fill="#001A4D" />
            </svg>
          )}
        </button>
        <button type="button" onClick={() => skip(15)} className="font-sans text-[11px] text-[#757682] transition-colors hover:text-white" aria-label="Forward 15 seconds">
          +15
        </button>
      </div>

      <div className="ml-4 hidden flex-1 items-center gap-2 md:flex">
        <span className="w-8 font-sans text-[11px] text-[#757682]">{formatTime(progress)}</span>
        <button
          type="button"
          className="relative h-[3px] flex-1 rounded-full bg-[#444650]"
          aria-label="Seek"
          onClick={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            seek((e.clientX - rect.left) / rect.width);
          }}
        >
          <span className="absolute left-0 top-0 h-full rounded-full bg-white" style={{ width: `${ratio * 100}%` }} />
        </button>
        <span className="w-8 font-sans text-[11px] text-[#757682]">{formatTime(current.duration)}</span>
      </div>

      <div className="ml-4 hidden items-center gap-2 lg:flex">
        <button type="button" onClick={toggleMute} aria-label={muted ? "Unmute" : "Mute"} className="text-[#757682] hover:text-white">
          <svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden>
            {muted ? (
              <path d="M3 7v6h3l4 4V3L6 7H3Zm11.5 3 2.5 2.5-.7.7L13.8 10.7l-2.5 2.5-.7-.7L13.1 10l-2.5-2.5.7-.7 2.5 2.5 2.5-2.5.7.7L14.5 10Z" fill="currentColor" />
            ) : (
              <path d="M3 7v6h3l4 4V3L6 7H3Zm10 3a3 3 0 0 0-1.5-2.6v5.2A3 3 0 0 0 13 10Zm-1.5-6.5v1.6A5 5 0 0 1 15 10a5 5 0 0 1-3.5 4.8v1.6A6.5 6.5 0 0 0 16.5 10a6.5 6.5 0 0 0-5-6.5Z" fill="currentColor" />
            )}
          </svg>
        </button>
        <Link to="/podcast" className="font-sans text-[11px] text-[#ffd700] hover:text-[#ffca00]">
          Open
        </Link>
      </div>
    </div>
  );
}
