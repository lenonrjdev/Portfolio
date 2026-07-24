export const portfolioContent = {
  title: "Meu Trabalho",
  description: "OLÁ, EU SOU O LENON, UM DESENVOLVEDOR FULL STACK.",
  callToAction: {
    label: "VER PROJETO",
    href: "#portfolio-grid",
  },
  carousels: [
    {
      id: "editorial-details",
      position: "left",
      label: "Detalhes editoriais",
      images: [
        {
          src: "https://images.unsplash.com/photo-1771947887644-0a3b20d2c85a?auto=format&fit=crop&w=1400&q=85",
          alt: "Close-up monocromático de um olho humano",
        },
        {
          src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1400&q=85",
          alt: "Retrato editorial feminino em luz suave",
        },
        {
          src: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=1400&q=85",
          alt: "Retrato artístico em composição minimalista",
        },
        {
          src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1400&q=85",
          alt: "Retrato em preto e branco com enquadramento fechado",
        },
        {
          src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=1400&q=85",
          alt: "Retrato masculino monocromático",
        },
      ],
    },
    {
      id: "objects-and-form",
      position: "center",
      label: "Objetos e formas",
      images: [
        {
          src: "https://images.unsplash.com/photo-1483412468200-72182dbbc544?auto=format&fit=crop&w=1400&q=85",
          alt: "Óculos pretos fotografados em preto e branco",
        },
        {
          src: "https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&w=1400&q=85",
          alt: "Composição de interiores com formas geométricas",
        },
        {
          src: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=1400&q=85",
          alt: "Materiais criativos organizados sobre uma mesa",
        },
        {
          src: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?auto=format&fit=crop&w=1400&q=85",
          alt: "Ambiente contemporâneo de linguagem minimalista",
        },
        {
          src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1400&q=85",
          alt: "Arquitetura e luz em composição editorial",
        },
      ],
    },
    {
      id: "human-stories",
      position: "right",
      label: "Histórias humanas",
      images: [
        {
          src: "https://images.unsplash.com/photo-1649289887707-4131abd76276?auto=format&fit=crop&w=1400&q=85",
          alt: "Casal abraçado em fotografia preto e branco",
        },
        {
          src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?auto=format&fit=crop&w=1400&q=85",
          alt: "Casal em momento espontâneo e intimista",
        },
        {
          src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1400&q=85",
          alt: "Casal em uma cena editorial ao ar livre",
        },
        {
          src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
          alt: "Retrato de moda com atitude contemporânea",
        },
        {
          src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85",
          alt: "Retrato feminino em composição natural",
        },
      ],
    },
  ],
} as const;

export type PortfolioCarousel = (typeof portfolioContent.carousels)[number];
