export const site = {
  name: "Lord Overtone",
  fullName: "Lord Overtone Ministry",
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
    youtube: "https://youtube.com",
    facebook: "https://facebook.com",
  },
  podcast: {
    spotify: "https://open.spotify.com",
    apple: "https://podcasts.apple.com",
  },
} as const;

export const episodes = [
  {
    id: "featured",
    title: "Kupembedza Mulengi mwa chikhalidwe chathu",
    subtitle: "Featured Episode · 42 min",
    description:
      "An exploration of honoring the Creator through the rich tapestry of our cultural heritage. This deep dive into tradition and faith examines how our roots amplify our spiritual communication.",
    duration: 42 * 60,
    image: "/5.jpeg",
    featured: true,
  },
  {
    id: "ep-42",
    title: "The Quiet Voice",
    subtitle: "Episode 42 · 16 min",
    description: "Learning to discern the divine whisper amidst the noise of modern life.",
    duration: 16 * 60,
    image: "/2.jpeg",
    featured: false,
  },
  {
    id: "ep-41",
    title: "Faith in Action",
    subtitle: "Episode 41 · 34 min",
    description: "Real stories of community impact driven by deep-rooted spiritual conviction.",
    duration: 34 * 60,
    image: "/1.jpeg",
    featured: false,
  },
  {
    id: "ep-40",
    title: "Frequencies of Peace",
    subtitle: "Episode 40 · 28 min",
    description: "How celestial stillness restores clarity when the world feels loud and heavy.",
    duration: 28 * 60,
    image: "/6.jpeg",
    featured: false,
  },
] as const;

export const testimonials = [
  {
    name: "Sarah M.",
    role: "Community Leader",
    location: "Lagos, Nigeria",
    quote:
      "The Lord Overtone podcasts have been a sanctuary for my soul. Listening to 'Kupembedza Mulengi' changed how I view my cultural identity within my faith.",
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
      "As a young seeker, I found clarity through the podcast episodes. The cultural perspective on faith is exactly what my generation needs to hear.",
    avatar: "JP",
    image: "/avatar-john.png",
  },
  {
    name: "Grace Banda",
    role: "Worship Leader",
    location: "Lilongwe, Malawi",
    quote:
      "Every message carries weight and warmth. The ministry helped me lead with more courage and a deeper sense of divine purpose.",
    avatar: "GB",
    image: "/avatar-sarah.png",
  },
  {
    name: "Michael O.",
    role: "Entrepreneur",
    location: "Accra, Ghana",
    quote:
      "I listen before dawn. The teachings steady my week and remind me that clarity is possible even in pressure.",
    avatar: "MO",
    image: "/avatar-david.png",
  },
  {
    name: "Thandiwe N.",
    role: "Nurse",
    location: "Johannesburg, SA",
    quote:
      "After long shifts, these episodes restore me. The voice of this ministry feels like guidance wrapped in peace.",
    avatar: "TN",
    image: "/avatar-john.png",
  },
] as const;

export const pillars = [
  "Authentic Representation",
  "Authoritative Clarity",
  "Grounded Stewardship",
] as const;

export const galleryImages = [
  { src: "/1.jpeg", alt: "Greeting the community" },
  { src: "/2.jpeg", alt: "Lord Overtone in session" },
  { src: "/5.jpeg", alt: "Speaking the Word" },
  { src: "/6.jpeg", alt: "Ministry at the podium" },
  { src: "/3.jpeg", alt: "Ministry gathering" },
  { src: "/4.jpeg", alt: "Fellowship moment" },
  { src: "/7.jpeg", alt: "Community celebration" },
  { src: "/8.jpeg", alt: "Worship and witness" },
] as const;

export function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}
