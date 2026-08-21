import { StrictMode } from "react";
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
import { AuthProvider } from "./admin/AuthProvider";
import AdminLayout from "./admin/AdminLayout";
import Overview from "./pages/admin/Overview";
import VideosAdmin from "./pages/admin/VideosAdmin";
import AudioAdmin from "./pages/admin/AudioAdmin";
import AnnouncementsAdmin from "./pages/admin/AnnouncementsAdmin";
import TestimonialsAdmin from "./pages/admin/TestimonialsAdmin";
import GalleryAdmin from "./pages/admin/GalleryAdmin";
import TeamAdmin from "./pages/admin/TeamAdmin";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="/admin"
          element={
            <AuthProvider>
              <AdminLayout />
            </AuthProvider>
          }
        >
          <Route index element={<Overview />} />
          <Route path="videos" element={<VideosAdmin />} />
          <Route path="audio" element={<AudioAdmin />} />
          <Route path="announcements" element={<AnnouncementsAdmin />} />
          <Route path="testimonials" element={<TestimonialsAdmin />} />
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
