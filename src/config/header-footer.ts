//Liens du header
export const headerLinks = [
  { text: 'Accueil', href: '/' },
  { text: 'À propos', href: '/about' },
  { text: 'Blog', href: '/blog' },
  { 
    text: 'Documentation', 
    children: [
      { text: 'Bien démarrer', href: '/documentation/demarrer-mdxforge' },
      { text: 'Modules MDXForge', href: '/documentation/modules-mdxforge' },
    ]
  },
  { text: 'Contact', href: '/contact' },
  { text: 'Recherche', href: '/search' },
];

// Configuration du CTA dans le header
export const headerCTA = {
  text: 'Installer MDXForge',
  href: 'https://github.com/benchambolle/mdxforge-starter'
};

//Liens du footer
export const footerLinks = [
  { href: '/mentions-legales', text: 'Mentions légales' },
  { href: '/politique-de-confidentialite', text: 'Politique de confidentialité' },
  { href: '/sitemap-index.xml', text: 'Plan du site' },
];

//Liens des réseaux sociaux
export const socialLinks = [
  { href: 'https://x.com/votrecompte', icon: 'xTwitter', label: 'X (anciennement Twitter)' },
  { href: 'https://facebook.com/votrecompte', icon: 'facebook', label: 'Facebook' },
  { href: 'https://linkedin.com/company/votrecompte', icon: 'linkedin', label: 'LinkedIn' },
  { href: 'https://instagram.com/votrecompte', icon: 'instagram', label: 'Instagram' },
  { href: 'https://github.com/votrecompte', icon: 'github', label: 'GitHub' },
  { href: 'https://youtube.com/votrecompte', icon: 'youtube', label: 'YouTube' },
  { href: 'https://pinterest.com/votrecompte', icon: 'pinterest', label: 'Pinterest' },
];
