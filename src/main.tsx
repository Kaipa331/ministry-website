import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Podcast from "./pages/Podcast";
import ContactUs from "./pages/ContactUs";
import Gallery from "./pages/Gallery";
import News from "./pages/News";
import { Privacy, Terms } from "./pages/Legal";
import "./index.css";

// The dashboard is only ever opened by the ministry admin, so it is kept out of
// the bundle that visitors download.
const AuthProvider = lazy(() => import("./admin/AuthProvider").then((m) => ({ default: m.AuthProvider })));
const AdminLayout = lazy(() => import("./admin/AdminLayout"));
const Overview = lazy(() => import("./pages/admin/Overview"));
const VideosAdmin = lazy(() => import("./pages/admin/VideosAdmin"));
const AudioAdmin = lazy(() => import("./pages/admin/AudioAdmin"));
const AnnouncementsAdmin = lazy(() => import("./pages/admin/AnnouncementsAdmin"));
const GalleryAdmin = lazy(() => import("./pages/admin/GalleryAdmin"));
const TeamAdmin = lazy(() => import("./pages/admin/TeamAdmin"));

const adminFallback = (
  <div className="flex min-h-screen items-center justify-center bg-[#faf8ff]">
    <p className="font-sans text-[14px] text-[#757682]">Loading dashboard…</p>
  </div>
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <Suspense fallback={adminFallback}>
              <AuthProvider>
                <AdminLayout />
              </AuthProvider>
            </Suspense>
          }
        >
          <Route index element={<Overview />} />
          <Route path="videos" element={<VideosAdmin />} />
          <Route path="audio" element={<AudioAdmin />} />
          <Route path="announcements" element={<AnnouncementsAdmin />} />
          <Route path="gallery" element={<GalleryAdmin />} />
          <Route path="team" element={<TeamAdmin />} />
        </Route>

        <Route element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="podcast" element={<Podcast />} />
          <Route path="news" element={<News />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="contact" element={<ContactUs />} />
          <Route path="privacy" element={<Privacy />} />
          <Route path="terms" element={<Terms />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
