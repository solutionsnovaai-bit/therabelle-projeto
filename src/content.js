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
    'Uma proposta pensada para mostrar, com leveza, os procedimentos e o cuidado que só a Júlia e a equipe da clínica sabem entregar — com tecnologia como aliada nesse processo.',
  ctaPrimary: 'Falar no WhatsApp',
  ctaSecondary: 'Ver o projeto completo',
}

export const problem = {
  eyebrow: 'O que muda',
  title: ['Menos conteúdo genérico.', 'Mais Thera Belle de verdade.'],
  paragraphs: [
    'O que constrói confiança é mostrar a técnica, o cuidado e os resultados reais que só acontecem dentro da Thera Belle — com apoio de tecnologia para tornar esse processo mais leve e constante.',
    'A proposta aqui é simples: cada post existe pra reforçar autoridade — o procedimento, os bastidores, o antes e depois — de um jeito natural, no ritmo da clínica.',
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
    text: 'Edições de vídeos e criativos com foco nos atendimentos reais, sempre dentro da identidade visual da Thera Belle.',
  },
  {
    number: '03',
    title: 'Publicação',
    text: 'Postagens organizadas e consistentes — sem a clínica precisar parar pra pensar no que postar.',
  },
  {
    number: '04',
    title: 'Acompanhamento',
    text: 'Ajustes mensais de acordo com o crescimento da página e da clínica.',
  },
]

export const about = {
  eyebrow: 'Thera Belle',
  title: ['Tecnologia a serviço', 'do cuidado real'],
  paragraphs: [
    'Por trás de cada post, existe também um trabalho de bastidor: agentes de IA que ajudam a clínica a responder mais rápido no WhatsApp e no Instagram, sem perder o tom humano do atendimento.',
    'É a tecnologia facilitando o que importa — o contato direto entre a Thera Belle e quem já está pronto pra agendar.',
  ],
}

export const plans = [
  {
    name: 'Essencial',
    price: 'R$ 500',
    period: 'pagamento único',
    description: 'A página que fica no link da bio, com a identidade visual da Thera Belle.',
    features: [
      'Página única, responsiva (computador e celular)',
      'Identidade visual assinada Thera Belle',
      'Botão direto para o WhatsApp da clínica',
      'Possibilidade de domínio próprio',
    ],
    highlight: false,
  },
  {
    name: 'Presença',
    price: 'R$ 800',
    originalPrice: 'R$ 1.200',
    period: '/ mês',
    description: 'Conteúdo mensal focado em mostrar os procedimentos reais da clínica.',
    features: [
      'Criativos focados em conversão',
      'Produção e edição de conteúdos inclusos',
      'Relatórios mensais de desempenho com métricas atualizadas',
      'Agente de IA no WhatsApp/Instagram para recepção de leads e engajamento',
    ],
    highlight: true,
  },
  {
    name: 'TheraBelle Studio',
    price: 'R$ 1.300',
    originalPrice: 'R$ 1.700',
    period: '/ mês',
    description: 'Tudo do plano Presença, com um studio digital próprio para clínica.',
    features: [
      'Tudo do plano Presença',
      'Studio/Dashboard exclusivo com calendário editorial e métricas de alcance/engajamento',
      'Assistente de IA personalizada para crescimento e apoio no dia a dia',
      'Automações com IA sob medida para a clínica',
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
