import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { site } from "./data/content";

const titles: Record<string, string> = {
  "/": `${site.name} Ministry`,
  "/about": `About · ${site.fullName}`,
  "/podcast": `Watch · ${site.fullName}`,
  "/news": `News & Events · ${site.fullName}`,
  "/gallery": `Gallery · ${site.fullName}`,
  "/contact": `Contact · ${site.fullName}`,
  "/privacy": `Privacy · ${site.fullName}`,
  "/terms": `Terms · ${site.fullName}`,
};

function DocumentTitle() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] ?? site.fullName;
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <DocumentTitle />
      <div className="flex min-h-screen flex-col bg-[#faf8ff]">
        <Nav />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
}
