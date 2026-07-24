export const footerContent = {
  testimonial: {
    text: "Whether you're looking to build a stunning website, boost your brand, or drive measurable results, we're here to help.",
    author: "George Stern",
    role: "Client Success Manager",
    phone: "(312) 555-2468",
    email: "hello@ateliux.com",
  },

  newsletter: {
    title: "Newsletter",
    description:
      "Join our newsletter and stay updated on the latest trends in digital design.",
    fields: {
      name: "Your name *",
      email: "E-mail *",
    },
    button: "Subscribe",
  },

  navigation: [
    { label: "Home", href: "#top" },
    { label: "Studio", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Blog", href: "#blog" },
  ],

  socials: [
    { label: "Twitter", href: "https://twitter.com/" },
    { label: "Instagram", href: "https://instagram.com/" },
    { label: "Dribbble", href: "https://dribbble.com/" },
  ],

  brand: {
    name: "ateliux®",
    subname: "Studio",
  },

  legal: {
    copyright: "© 2025 Ateliux Studio. All rights reserved.",
    links: [
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Terms of Service", href: "#terms" },
      { label: "Built in Ateliux", href: "#built" },
    ],
  },
} as const;