import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MiniPlayer from "./components/MiniPlayer";
import ScrollToTop from "./components/ScrollToTop";
import { PlayerProvider } from "./context/PlayerContext";
import { site } from "./data/content";

const titles: Record<string, string> = {
  "/": site.name,
  "/about": `About · ${site.name}`,
  "/podcast": `Podcast · ${site.name}`,
  "/gallery": `Gallery · ${site.name}`,
  "/contact": `Contact · ${site.name}`,
  "/privacy": `Privacy · ${site.name}`,
  "/terms": `Terms · ${site.name}`,
};

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? site.fullName;
  }, [pathname]);
  return null;
}

export default function App() {
  const { pathname } = useLocation();
  const showPlayer = pathname === "/podcast" || pathname === "/";

  return (
    <PlayerProvider>
      <ScrollToTop />
      <DocumentTitle />
      <div className={`flex min-h-screen flex-col bg-[#faf8ff] ${showPlayer ? "pb-16" : ""}`}>
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
        {showPlayer && <MiniPlayer />}
      </div>
    </PlayerProvider>
  );
}
