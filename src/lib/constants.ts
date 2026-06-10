export const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Book', href: '#books' },
  { label: 'Speaking', href: '#speaking' },
  { label: 'Contact', href: '#contact' },
] as const;

export const SOCIAL_LINKS = {
  youtube: 'https://www.youtube.com/@RajShamani',
  instagram: 'https://www.instagram.com/rajshamani/',
  twitter: 'https://x.com/rajshamani',
  linkedin: 'https://www.linkedin.com/in/rajshamani/',
  spotify: 'https://open.spotify.com/show/figuringout',
} as const;

export const ACHIEVEMENTS = [
  { value: 200, suffix: '+', label: 'Global Keynotes', prefix: '' },
  { value: 26, suffix: '+', label: 'Countries', prefix: '' },
  { value: 11, suffix: 'M+', label: 'YouTube Subscribers', prefix: '' },
  { value: 400, suffix: 'M+', label: 'Yearly Views', prefix: '' },
  { value: 200, suffix: 'Cr', label: 'Business Built', prefix: '₹' },
] as const;

export const MILESTONES = [
  'UN Assembly Speaker',
  'Top 5 Young Influencer (YourStory)',
  'Top 10 Young Entrepreneur (Asian Age)',
  'Youngest Indian at UN',
] as const;

export const SPEAKING_TOPICS = [
  {
    title: 'Entrepreneurship',
    description: 'Building businesses from zero to scale in the digital age',
    icon: 'Rocket',
  },
  {
    title: 'Personal Branding',
    description: 'Creating authentic influence and authority in your niche',
    icon: 'Sparkles',
  },
  {
    title: 'Content Creation',
    description: 'Mastering storytelling across platforms for maximum impact',
    icon: 'Video',
  },
  {
    title: 'Business Growth',
    description: 'Strategic scaling, revenue optimization, and market expansion',
    icon: 'TrendingUp',
  },
  {
    title: 'Mental Health',
    description: 'Resilience, mindset, and well-being for high performers',
    icon: 'Heart',
  },
] as const;

export const PAST_STAGES = [
  'TEDx',
  'United Nations',
  'Global Startup Summit',
] as const;

export const TESTIMONIALS = [
  {
    quote: 'Raj has an incredible ability to connect with young entrepreneurs and inspire them to take action. His energy on stage is unmatched.',
    author: 'Event Director',
    role: 'Global Startup Summit',
  },
  {
    quote: 'One of the most dynamic young speakers in India. Raj brings data, stories, and real-world experience together beautifully.',
    author: 'Head of Programming',
    role: 'TEDx Organizer',
  },
  {
    quote: 'Figuring Out has become the go-to podcast for anyone serious about entrepreneurship in India. Raj asks the right questions.',
    author: 'Senior Editor',
    role: 'Forbes India',
  },
  {
    quote: 'Raj Shamani represents the new generation of Indian entrepreneurs who build in public and inspire millions along the way.',
    author: 'Journalist',
    role: 'Economic Times',
  },
] as const;

export const PRESS_BADGES = [
  'Forbes',
  'YourStory',
  'TEDx',
  'Asian Age',
  'Economic Times',
] as const;

export const CONTACT_SUBJECTS = [
  'Speaking',
  'Collaboration',
  'Brand Partnership',
  'Other',
] as const;

export const HOUSEOF_X_FEATURES = [
  {
    title: 'Creator Growth',
    description: 'Strategic content consulting and audience growth frameworks',
    icon: 'TrendingUp',
  },
  {
    title: 'Brand Building',
    description: 'End-to-end personal brand development and positioning',
    icon: 'Crown',
  },
  {
    title: 'Monetization',
    description: 'Revenue diversification through products, courses, and partnerships',
    icon: 'BadgeDollarSign',
  },
  {
    title: 'Community',
    description: 'Building engaged communities that drive lasting impact',
    icon: 'Users',
  },
] as const;
