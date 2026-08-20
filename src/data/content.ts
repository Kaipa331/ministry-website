export const site = {
  name: "Headstone",
  fullName: "Headstone Prophetic Ministry International",
  organization: "Headstone Prophetic Ministry International",
  tagline: "Divine Frequencies",
  email: "ministry@lordovertone.org",
  hours: {
    weekdays: "Mon – Fri: 9:00 AM – 5:00 PM",
    sunday: "Sun: 8:00 AM – 1:00 PM",
  },
  liveSession: "Every Sunday at 9:00 PM (GMT+2)",
  social: {
    twitter: "https://twitter.com",
    instagram: "https://instagram.com",
    youtube: "https://www.youtube.com/channel/UC492MhKkjf0oerPCcy48fPQ",
    facebook: "https://facebook.com",
  },
} as const;

/** Curated messages from the official YouTube channel */
export const videos = [
  {
    id: "TIK2av4Xy8Y",
    title: "Sunday Service",
    subtitle: "Latest · Headstone Prophetic Ministry International",
    description:
      "Join the latest Sunday service with Lord Overtone — prophetic teaching and worship from Headstone Prophetic Ministry International.",
    featured: true,
  },
  {
    id: "UzyAoVRcfrA",
    title: "The Spirit of The Creator in Different Men in Different Dispensations",
    subtitle: "Moatize · 26 July 2026",
    description:
      "A teaching on how the Spirit of the Creator has moved through different men across dispensations.",
    featured: false,
  },
  {
    id: "YJOxTuHRfm4",
    title: "Mphamvu Ya Namalenga Ndi Yokhayo Imeme Izigwira Ntchito Basi",
    subtitle: "Moatize · 25 July 2026",
    description:
      "A Chichewa message on the power of the Creator — that His power alone is enough to accomplish the work.",
    featured: false,
  },
  {
    id: "JyydcYFR33M",
    title: "Lilongwe Sunday — 2nd August 2026",
    subtitle: "Lilongwe Service",
    description: "Sunday gathering in Lilongwe with teaching and ministry from Lord Overtone.",
    featured: false,
  },
  {
    id: "xY4WlPd2tdQ",
    title: "Lilongwe Sunday — 2nd August 2026 (Part 2)",
    subtitle: "Lilongwe Service · Part 2",
    description: "Continuation of the Lilongwe Sunday service — part two of the message.",
    featured: false,
  },
  {
    id: "GxxCF10Xys4",
    title: "Sunday Service",
    subtitle: "Worship & Word",
    description: "Another recent Sunday service from Headstone Prophetic Ministry International.",
    featured: false,
  },
] as const;

export function youtubeWatchUrl(videoId: string) {
  return `https://www.youtube.com/watch?v=${videoId}`;
}

export function youtubeEmbedUrl(videoId: string) {
  return `https://www.youtube.com/embed/${videoId}`;
}

export function youtubeThumb(videoId: string) {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;
}

/** @deprecated Prefer `videos` — kept as alias for older imports */
export const episodes = videos;

export const pillars = [
  "Love for one another",
  "Respect each other",
  "Appreciate when others do well",
  "Above all, respect the Creator",
] as const;

/** Only reviewed testimonies appear on the site — nothing is published without moderation. */
export const approvedTestimonials = [
  {
    name: "Sarah M.",
    role: "Community Leader",
    location: "Lagos, Nigeria",
    quote:
      "The Lord Overtone messages have been a sanctuary for my soul. Listening to 'Kupembedza Mulengi' changed how I view my cultural identity within my faith.",
    avatar: "SM",
    image: "/avatar-sarah.png",
  },
  {
    name: "David K.",
    role: "Educator",
    location: "Nairobi, Kenya",
    quote:
      "Finding content that is both intellectually stimulating and spiritually nourishing is rare. This ministry hits that perfect balance every single time.",
    avatar: "DK",
    image: "/avatar-david.png",
  },
  {
    name: "John Phiri",
    role: "Student",
    location: "Blantyre, Malawi",
    quote:
      "As a young seeker, I found clarity through these teachings. The cultural perspective on faith is exactly what my generation needs to hear.",
    avatar: "JP",
    image: "/avatar-john.png",
  },
] as const;

/** @deprecated Use approvedTestimonials */
export const testimonials = approvedTestimonials;

export const newsItems = [
  {
    id: "news-1",
    category: "News" as const,
    date: "10 Aug 2026",
    title: "Latest Sunday service now on YouTube",
    summary:
      "The most recent Sunday service from Headstone Prophetic Ministry International is available to watch on our channel and on this ministry website.",
  },
  {
    id: "news-2",
    category: "News" as const,
    date: "2 Aug 2026",
    title: "Lilongwe gathering recorded in two parts",
    summary:
      "Messages from the Lilongwe Sunday meeting are published for the wider ministry family who could not attend in person.",
  },
] as const;

export const upcomingMeetings = [
  {
    id: "meet-1",
    category: "Upcoming" as const,
    date: "Sundays · 9:00 PM (GMT+2)",
    title: "Weekly live session",
    summary:
      "Join the ministry live on YouTube for teaching, prayer, and prophetic clarity every Sunday evening.",
  },
  {
    id: "meet-2",
    category: "Upcoming" as const,
    date: "Announced on YouTube",
    title: "Special ministry gatherings",
    summary:
      "Dates for city gatherings and special meetings are announced on the Headstone Prophetic Ministry International channel.",
  },
] as const;

export const recentEvents = [
  {
    id: "event-1",
    category: "Event" as const,
    date: "26 Jul 2026",
    title: "Moatize teaching — The Spirit of The Creator",
    summary:
      "A standout teaching on how the Spirit of the Creator has moved through different men in different dispensations.",
  },
  {
    id: "event-2",
    category: "Event" as const,
    date: "25 Jul 2026",
    title: "Moatize — Mphamvu Ya Namalenga",
    summary:
      "A powerful Chichewa message affirming that the Creator’s power alone is enough to accomplish the work.",
  },
  {
    id: "event-3",
    category: "Event" as const,
    date: "2 Aug 2026",
    title: "Lilongwe Sunday ministry",
    summary: "A memorable Sunday gathering in Lilongwe — now available to rewatch in parts on YouTube.",
  },
] as const;

export const galleryImages = [
  { src: "/photos/hero.jpg", alt: "Lord Overtone speaking at the Headstone podium" },
  { src: "/photos/headstone-podium.jpg", alt: "Sunday message from the Headstone pulpit" },
  { src: "/photos/speaking-july.jpg", alt: "Lord Overtone teaching the Word" },
  { src: "/photos/portrait-july.jpg", alt: "Lord Overtone in session" },
  { src: "/photos/portrait-navy.jpg", alt: "A formal ministry portrait" },
  { src: "/photos/portrait-about.jpg", alt: "Lord Overtone — Headstone Prophetic Ministry" },
  { src: "/photos/portrait-chair.jpg", alt: "The Mighty Angel in fellowship" },
  { src: "/photos/speaking-flowers.jpg", alt: "Speaking from the podium" },
  { src: "/photos/speaking-portrait.jpg", alt: "Malaika Mwenye Nguvu — Bwana Overtone" },
  { src: "/photos/prayer.jpg", alt: "Prayer and commissioning" },
  { src: "/photos/gathering.jpg", alt: "Ministry gathering" },
  { src: "/photos/outdoor-banner.jpg", alt: "Headstone Prophetic Ministry International" },
] as const;

