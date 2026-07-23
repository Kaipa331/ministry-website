import { useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Podcast from "./pages/Podcast";
import ContactUs from "./pages/ContactUs";

type Page = "home" | "about" | "podcast" | "contact";

export default function App() {
  const [page, setPage] = useState<Page>("home");

  const handleNavigate = (p: Page) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#faf8ff]">
      <Nav currentPage={page} onNavigate={handleNavigate} />
      <main className="flex-1">
        {page === "home" && <Home />}
        {page === "about" && <AboutUs />}
        {page === "podcast" && <Podcast />}
        {page === "contact" && <ContactUs />}
      </main>
      {page !== "podcast" && <Footer />}
    </div>
  );
}
