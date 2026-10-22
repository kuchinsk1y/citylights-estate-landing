export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'Apartments', href: '#apartments' },
  { label: 'Gallery', href: '#gallery' },
] as const;

export const apartmentOptions = [
  'Studio apartment',
  '1 bedroom',
  '2 bedrooms',
  'Penthouse',
] as const;

export const stats = [
  {
    title: 'Current projects',
    items: [
      { value: 1, pad: 2, label: 'Total buildings' },
      { value: 248, label: 'Total units' },
      { value: 1, suffix: 'M', label: 'Portfolio value ($)' },
      { value: 1, suffix: 'K', label: 'M2 built' },
    ],
  },
  {
    title: 'Future projects',
    items: [
      { value: 2, pad: 2, label: 'Total buildings' },
      { value: 368, label: 'Total units' },
      { value: 2, suffix: 'M', label: 'Portfolio value ($)' },
      { value: 1, suffix: 'K', label: 'M2 build' },
    ],
  },
] as const;

const featureText =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas a neque mollis, varius velit at, dolor sit.';

export const features = [
  { title: 'Privileged Locations', text: featureText },
  { title: 'Authentic Design', text: featureText },
  { title: 'Premium Productions', text: featureText },
  { title: 'Quality Living', text: featureText },
] as const;

export const highlights = [
  {
    title: 'Luxury and Convenience Converge',
    image: '/images/why/lobby.webp',
    href: '#apartments',
  },
  {
    title: 'Location, Community, Quality Living. It Starts Here!',
    image: '/images/why/city.webp',
    href: '#apartments',
  },
  {
    title: 'Beauty, Passion, Breathtaking Apartments',
    image: '/images/why/stairs.webp',
    href: '#apartments',
  },
] as const;

export const apartments = [
  {
    title: 'Sunny room - Studio',
    subtitle: 'Complex modern apartment in WA',
    image: '/images/apartments/featured.webp',
  },
  {
    title: 'Skyline Penthouse',
    subtitle: 'Panoramic penthouse in downtown LA',
    image: '/images/apartments/a1.webp',
  },
  {
    title: 'Garden Residence',
    subtitle: 'Bright two-bedroom with a green view',
    image: '/images/apartments/a2.webp',
  },
  {
    title: 'Urban Loft',
    subtitle: 'Open-plan loft in the city centre',
    image: '/images/apartments/a3.webp',
  },
  {
    title: 'Cozy Corner Suite',
    subtitle: 'Warm interior with a private balcony',
    image: '/images/apartments/a4.webp',
  },
  {
    title: 'Minimal Retreat',
    subtitle: 'Calm minimalist studio near the park',
    image: '/images/apartments/a5.webp',
  },
] as const;

export const articles = [
  {
    title: 'Enjoy the finer things in life with luxury real estate.',
    image: '/images/news/n1.webp',
    href: '#',
  },
  {
    title: "There's no place like home... Especially when it's a luxury estate!",
    image: '/images/news/n2.webp',
    href: '#',
  },
  {
    title: 'Get the best home for your family with the help of a real estate agent!',
    image: '/images/news/n3.webp',
    href: '#',
  },
] as const;

export const contact = {
  site: 'Dotcreativemarket.com',
  email: 'info@dotcreativemarket.com',
} as const;

export const socials = [
  { label: 'Twitter', icon: '/icons/twitter.svg', href: '#' },
  { label: 'Instagram', icon: '/icons/instagram.svg', href: '#' },
  { label: 'TikTok', icon: '/icons/tiktok.svg', href: '#' },
  { label: 'Medium', icon: '/icons/medium.svg', href: '#' },
] as const;
