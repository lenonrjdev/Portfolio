# Ateliux Landing Page — Hero, Portfolio e Design Showcase Clean

Landing page em Next.js 16, React 19, TypeScript, Tailwind CSS v4 e Poppins.

## Seções

1. Hero principal da Ateliux.
2. Portfólio com três carrosséis independentes de cinco imagens.
3. Design Showcase inspirado na referência enviada, com fundo preto, conteúdo editorial à esquerda, título vertical central e retrato monocromático à direita. Nesta versão, toda a escala tipográfica foi reduzida e os pesos, contrastes e espaçamentos foram refinados para uma composição mais clean.

A terceira seção não adiciona menu, ícones sociais ou controles laterais próprios. Ela reutiliza somente a identidade fixa global do projeto e não possui a seta lateral da referência.

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

Todo o estilo visual é aplicado com classes Tailwind nos componentes. O arquivo `app/tailwind.css` contém apenas a importação do Tailwind.
