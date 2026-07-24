export const footerContent = {
  testimonial: {
    text: "Seja para criar um site impressionante, fortalecer sua marca ou gerar resultados mensuráveis, estamos aqui para ajudar.",
    author: "Lenon Cunha",
    role: "Ceo & Fundador Ateliux Studio",
    email: "contato@ateliux.com.br",
  },

  newsletter: {
    title: "Assine Nossa Plataforma",
    description:
      "Faça parte da nossa comunidade Ateliux, e receba atualizações ou crie um projeto conosco.",
    fields: {
      name: "Seu Nome *",
      email: "Seu Email *",
    },
    button: "Inscreva-se",
  },

  navigation: [
    { label: "Home", href: "#top" },
    { label: "Projetos", href: "#about" },
    { label: "Sobre", href: "#projects" },
    { label: "Experiência", href: "#blog" },
  ],

  socials: [
    { label: "Twitter", href: "https://twitter.com/ateliux" },
    { label: "Instagram", href: "https://instagram.com/ateliux" },
    { label: "Facebook", href: "https://facebook.com/ateliux" },
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