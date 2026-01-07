export interface Feedback {
  name: string
  comment: string
}

export interface Service {
  title: string
  description: string
}

export const getMasterInfo = () => ({
  name: "Mestre Arkan",
  tagline: "Narrativas imersivas, decisões reais e consequências memoráveis.",
  description:
    "Mestre de RPG com anos de experiência em campanhas narrativas focadas em personagens, escolhas e emoção."
})

export const getFeedbacks = (): Feedback[] => [
  { name: "João", comment: "Uma das melhores mesas que já joguei!" },
  { name: "Maria", comment: "História profunda e personagens vivos." },
  { name: "Lucas", comment: "Cada sessão parecia um episódio de série." }
]

export const getServices = (): Service[] => [
  {
    title: "Campanhas Longas",
    description: "Narrativas profundas com desenvolvimento de personagens."
  },
  {
    title: "One-shots",
    description: "Sessões fechadas para eventos ou grupos iniciantes."
  },
  {
    title: "Consultoria Narrativa",
    description: "Ajuda para mestres criarem mundos e histórias."
  }
]
