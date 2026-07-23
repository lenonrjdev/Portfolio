# Ateliux Landing — Hero + Portfolio Carousels

Projeto completo em Next.js 16, React 19, TypeScript e Tailwind CSS v4.

## Esta versão inclui

- Hero principal com logo branca da Ateliux.
- Poppins como fonte principal por `next/font/google`.
- Header fixo com links `PROJECTS` e `CONTACT`.
- Ícones sociais de Facebook, Instagram e Twitter.
- Segunda seção `MY PORTFOLIO` fiel à composição visual enviada.
- Três imagens independentes transformadas em carrosséis.
- Cinco imagens em cada carrossel, totalizando quinze imagens.
- O looping começa somente quando o mouse passa sobre a respectiva imagem.
- O looping também funciona ao navegar por teclado e focar uma imagem.
- Cada imagem se move discretamente para cima durante a interação.
- Transição por crossfade, brilho e zoom interno sutil.
- O card permanece recortado por `overflow-hidden`, evitando que a imagem escape de sua área.
- O título, descrição e botão ficam em uma camada superior (`z-40`), sempre à frente das imagens.
- Nenhum estilo visual personalizado em CSS global: apenas Tailwind CSS.

## Estrutura principal

```text
app/
  layout.tsx
  page.tsx
  tailwind.css
components/
  home/
    hero/
      fitted-text.tsx
      hero-identity.tsx
      home-hero.tsx
    portfolio/
      portfolio-carousel-card.tsx
      portfolio-gallery.tsx
      portfolio-section.tsx
  layout/
    site-header.tsx
    site-socials.tsx
content/
  home/
    hero.ts
    portfolio.ts
public/
  ateliux-logo-white.png
```

## Alterar as imagens

As três listas, cada uma com cinco imagens, estão em:

```text
content/home/portfolio.ts
```

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.
