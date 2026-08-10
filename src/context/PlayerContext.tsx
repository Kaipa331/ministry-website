import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { episodes } from "../data/content";

type Episode = (typeof episodes)[number];

interface PlayerContextValue {
  current: Episode;
  playing: boolean;
  progress: number;
  muted: boolean;
  play: (episode?: Episode) => void;
  pause: () => void;
  toggle: (episode?: Episode) => void;
  seek: (ratio: number) => void;
  skip: (delta: number) => void;
  toggleMute: () => void;
}

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState<Episode>(episodes[0]);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = window.setInterval(() => {
      setProgress((p) => {
        if (p >= current.duration) {
          setPlaying(false);
          return current.duration;
        }
        return p + 1;
      });
    }, 1000);
    return () => window.clearInterval(id);
  }, [playing, current.duration]);

  const value = useMemo<PlayerContextValue>(
    () => ({
      current,
      playing,
      progress,
      muted,
      play: (episode) => {
        if (episode && episode.id !== current.id) {
          setCurrent(episode);
          setProgress(0);
        }
        setPlaying(true);
      },
      pause: () => setPlaying(false),
      toggle: (episode) => {
        if (episode && episode.id !== current.id) {
          setCurrent(episode);
          setProgress(0);
          setPlaying(true);
          return;
        }
        setPlaying((p) => !p);
      },
      seek: (ratio) => setProgress(Math.max(0, Math.min(1, ratio)) * current.duration),
      skip: (delta) =>
        setProgress((p) => Math.max(0, Math.min(current.duration, p + delta))),
      toggleMute: () => setMuted((m) => !m),
    }),
    [current, playing, progress, muted],
  );

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>;
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used within PlayerProvider");
  return ctx;
}
