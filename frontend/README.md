# Hero Home — Ateliux Clean

Projeto completo em Next.js 16, React 19, TypeScript e Tailwind CSS v4.

## Ajustes desta versão

- Logo branca da Ateliux no lugar do monograma antigo.
- Poppins configurada como fonte principal com `next/font/google`.
- Texto acima do título (`I AM`) convertido para texto HTML normal em Poppins, sem SVG, compressão ou achatamento.
- Texto abaixo do título (`UI/UX DESIGNER`) aumentado e refinado para melhorar leitura e hierarquia.
- Microtextos com peso, espaçamento entre letras, contraste e alinhamento mais limpos.
- Título principal e composição visual original preservados.
- Ícones de Facebook, Instagram e Twitter com 28 px.
- Indicador `SCROLL` removido.
- Estilos visuais escritos somente com classes Tailwind CSS.
- `app/tailwind.css` contém apenas `@import "tailwindcss";`.

## Estrutura

```text
app/
  layout.tsx
  page.tsx
  tailwind.css
components/
  home/
    hero/
      fitted-text.tsx
      hero-header.tsx
      hero-identity.tsx
      hero-socials.tsx
      home-hero.tsx
content/
  home/
    hero.ts
public/
  ateliux-logo-white.png
```

## Executar

```bash
npm install
npm run dev
```

Abra `http://localhost:3000`.
