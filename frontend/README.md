# Ateliux Landing Page — Seções Integradas

Landing page em Next.js 16, React 19, TypeScript, Tailwind CSS v4 e Poppins.

## Seções

1. Hero principal da Ateliux.
2. Portfólio com três carrosséis independentes de cinco imagens.
3. Design Showcase com conteúdo editorial, título vertical e retrato monocromático.

## Transições visuais

- Todas as seções compartilham o mesmo fundo preto contínuo.
- A textura e a iluminação ambiente são globais, evitando mudanças bruscas entre blocos.
- As bordas e linhas externas que separavam as seções foram removidas.
- Gradientes superiores e inferiores unem uma seção à seguinte sem criar faixas visíveis.
- A fotografia da seção Design Showcase desaparece suavemente no preto nas laterais, no topo e na base.
- Foi mantido o scroll suave para os links internos do menu.

## Executar

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Organização principal

```text
app/
components/
  home/
    hero/
    portfolio/
    design/
  layout/
content/
  home/
public/
```

Todo o estilo visual está em classes Tailwind nos componentes. O arquivo `app/tailwind.css` contém somente a importação do Tailwind.
