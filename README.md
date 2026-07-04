# Thera Belle — Projeto

Página única (Vite + React + Tailwind v4) com a proposta de conteúdo pra Clínica Thera Belle.

## Antes de publicar

Abra `src/content.js` e ajuste:

1. **`WHATSAPP_NUMBER`** — troque pelo seu número real (formato `55DDDNNNNNNNNN`, sem espaços/símbolos). Esse é o único ponto obrigatório antes do deploy.
2. **`plans`** — os 3 valores (`Essencial R$500`, `Presença R$800/mês`, `Studio R$1.800/mês`) e os itens de cada plano, caso queira ajustar.
3. Qualquer texto de `hero`, `problem`, `steps` ou `finalCta` — está tudo centralizado nesse arquivo, não precisa mexer nos componentes.

As imagens do hero (`public/hero-desktop.jpg` e `public/hero-mobile.jpg`) já são as artes aprovadas com a logo da Thera Belle.

## Rodar localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
```

Gera a pasta `dist/` pronta pra qualquer hospedagem estática.

## Deploy no Vercel

1. Suba esta pasta pra um repositório no GitHub
2. Importe o repositório no [vercel.com/new](https://vercel.com/new)
3. Framework preset: **Vite** (detecta automático)
4. Deploy — pronto

Ou, direto pelo terminal (com a Vercel CLI instalada):

```bash
npx vercel
```
