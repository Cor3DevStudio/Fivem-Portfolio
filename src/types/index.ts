export interface NavLinkItem {
  path: string;
  label: string;
}

export interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  imageAlt: string;
}

export interface SocialLink {
  label: string;
  href: string;
  ariaLabel: string;
}

export const NAV_LINKS: NavLinkItem[] = [
  { path: '/', label: 'Home' },
  { path: '/store', label: 'Store' },
  { path: '/skills', label: 'Skills' },
  { path: '/projects', label: 'Projects' },
  { path: '/pricing', label: 'Pricing' },
  { path: '/contact', label: 'Contact' },
];

export const GITHUB_USERNAME = 'keeydi';
export const CONTACT_EMAIL = 'keeeeeeeeydi@gmail.com';

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', href: `https://github.com/${GITHUB_USERNAME}`, ariaLabel: 'GitHub' },
  { label: 'Instagram', href: 'https://www.instagram.com/cyrrileric', ariaLabel: 'Instagram' },
  { label: 'Discord', href: 'https://discord.gg/udwwWmxqGw', ariaLabel: 'Discord' },
  { label: 'YouTube', href: 'https://www.youtube.com/@praryooo', ariaLabel: 'YouTube' },
];

export const TECH_STACK = [
  'LUA',
  'Next.js',
  'React',
  'Tailwind',
  'MySQL',
  'C#',
  'Node.js',
  'Laravel',
];

export const TOP_PRODUCTS: Product[] = [
  {
    id: 'death-cam',
    title: 'Death Cam (Lifetime)',
    description:
      'Valorant inspired death cam script. Detailed combat reporting, customizable avatars, backgrounds, banners, and badges.',
    price: '$29.99',
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/9af2c8f05bcd9b512a43722d43df8954423be2e8.png',
    imageAlt: 'Death Cam (Lifetime)',
  },
  {
    id: 'clothing-monthly',
    title: 'Exclusive Clothing Permissions (Monthly)',
    description: 'Restrict or grant access to specific clothing items for individual players in FiveM.',
    price: '$9.99',
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/540e2f1395969f093e351b73500ca98b9360bd3f.png',
    imageAlt: 'Exclusive Clothing Permissions (Monthly)',
  },
  {
    id: 'clothing-lifetime',
    title: 'Exclusive Clothing Permissions (Lifetime)',
    description: 'Lifetime access to exclusive clothing permissions in FiveM.',
    price: '$69.99',
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/540e2f1395969f093e351b73500ca98b9360bd3f.png',
    imageAlt: 'Exclusive Clothing Permissions (Lifetime)',
  },
  {
    id: 'death-screen',
    title: 'Death Screen (Lifetime)',
    description:
      'Sleek death system with custom spawn locations, UI controls, and cfx-praryo-deathcam integration.',
    price: '$24.99',
    image: 'https://dunb17ur4ymx4.cloudfront.net/packages/images/20ada2eb0d40e95d0590058b05d301551e42b28b.png',
    imageAlt: 'Death Screen (Lifetime)',
  },
];
