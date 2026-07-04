// ─────────────────────────────────────────────────────────────
// Conteúdo editável do projeto Thera Belle.
// Troque textos, valores e o número de WhatsApp aqui — não precisa
// mexer nos componentes.
// ─────────────────────────────────────────────────────────────

// ⚠️ TROCAR pelo seu WhatsApp real antes de publicar
export const WHATSAPP_NUMBER = '5511951007967'
export const WHATSAPP_MESSAGE = 'Olá! Vi o projeto da Thera Belle e quero conversar sobre a proposta.'
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

export const hero = {
  eyebrow: 'Projeto personalizado',
  title: ['O conteúdo que a', 'Thera Belle', 'merece'],
  subtitle:
    'Uma proposta pensada para mostrar, de verdade, os procedimentos e o cuidado que só a Júlia e a equipe da clínica sabem entregar.',
  ctaPrimary: 'Falar no WhatsApp',
  ctaSecondary: 'Ver o projeto completo',
}

export const problem = {
  eyebrow: 'O que muda',
  title: ['Menos conteúdo genérico.', 'Mais Thera Belle de verdade.'],
  paragraphs: [
    'Frase de efeito e post motivacional qualquer clínica tem. O que constrói confiança é mostrar a técnica, o cuidado e os resultados reais que só acontecem dentro da Thera Belle.',
    'A proposta aqui é simples: cada post existe pra reforçar autoridade — o procedimento, os bastidores, o antes e depois — não pra encher o feed.',
  ],
}

export const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    text: 'Entendemos a rotina da clínica, os procedimentos mais buscados e o que já funciona no perfil.',
  },
  {
    number: '02',
    title: 'Produção',
    text: 'Criativos e vídeos com foco nos atendimentos reais, sempre dentro da identidade visual da Thera Belle.',
  },
  {
    number: '03',
    title: 'Publicação',
    text: 'Postagens organizadas em calendário — sem depender de lembrar o que postar, nem quando.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Ajustes mensais de acordo com o crescimento da página e da clínica.',
  },
]

export const plans = [
  {
    name: 'Essencial',
    price: 'R$ 500',
    period: 'pagamento único',
    description: 'A página que fica no link da bio — no estilo que a Júlia já pediu.',
    features: [
      'Página única, responsiva (computador e celular)',
      'Identidade visual assinada Thera Belle',
      'Botão direto para o WhatsApp da clínica',
      'Hospedagem e entrega prontas para publicar',
    ],
    highlight: false,
  },
  {
    name: 'Presença',
    price: 'R$ 800',
    period: '/ mês',
    description: 'Conteúdo mensal focado em mostrar os procedimentos reais da clínica.',
    features: [
      'Criativos e vídeos dos atendimentos reais',
      'Roteiro, produção e edição inclusos',
      'Calendário de postagens organizado',
      'Produção acompanha o ritmo da clínica, sem número fixo',
    ],
    highlight: true,
  },
  {
    name: 'Thera Belle Studio',
    price: 'R$ 1.800',
    period: '/ mês',
    description: 'Tudo do Presença, mais atendimento automático para a clínica.',
    features: [
      'Tudo do plano Presença',
      'Atendimento e agendamento automático no WhatsApp',
      'Relatório mensal de performance',
      'Prioridade em novas demandas',
    ],
    highlight: false,
  },
]

export const finalCta = {
  eyebrow: 'Próximo passo',
  title: ['Vamos colocar', 'esse projeto no ar?'],
  quote: 'Cuidar da imagem da clínica é, também, um ato de cuidado com quem confia nela.',
  cta: 'Falar no WhatsApp',
}

export const footer = {
  studio: 'Projeto desenvolvido por Nova IA Solutions',
}
