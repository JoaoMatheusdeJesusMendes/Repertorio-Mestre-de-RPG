export interface Feedback {
  name: string
  comment: string
}

export interface Service {
  title: string
  description: string
}

export const getMasterInfo = () => ({
  name: "Mestre Biel",
  tagline: "Narrativas imersivas, decisões reais.",
  description:
    "Mestre de RPG focado em experiências narrativas profundas.",
  heroImage: "public/images/master_image.png"
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
export interface Contact {
  label: string
  value: string
  link: string
}

export const getContacts = (): Contact[] => [
  {
    label: "WhatsApp",
    value: "(15) 99148-9779",
    link: "https://wa.me/5515991489779"
  },
  {
    label: "Discord",
    value: "gbpastorello",
    link: "https://discord.com"
  },
  {
    label: "Email",
    value: "gabrielbpastorello@gmail.com",
    link: "mailto:gabrielbpastorello@gmail.com"
  }
]

