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
  heroImage: "images/master_image.png"
})

export const getFeedbacks = (): Feedback[] => [
  { name: "@Remi", comment: "Mano eu joguei uma mesa com Biel e cara ele é muito desenvolvendo a história, ele te envolve e te ouve, acho o jeito que ele narra muito agradável, além de imersivo te envolve e não te exclui, todo mundo tem seu tempo de tela e se pah foi uma das melhores campanhas que joguei foi com ele narrando." },
  { name: "@ray", comment: "Cara, eu joguei poucas mesas suas. No entanto eu consigo perceber nessas duas em que joguei que você é um mestre excelente em questões como trabalhar com a história dos jogadores e criar sistemas que aumentem a imersão e que balanceiam os combates na mesa. Uma coisa que acho muito boa em você como mestre é a versatilidade de suas mesas, com você sendo mais mente aberta com homebrews e até mesmo ajudando os jogadores a criar suas classes e raças em caso da pessoa não gostar das que tem no sistema oficial, por exemplo, quando você me ajudou a criar a trilha de valhalla para o bárbaro. Definitivamente você sabe muito bem como tornar uma campanha mais divertida." },
  { name: "@pietro", comment: "Já joguei com o Gabriel e foi sempre muito bom, mestre dedicado e que escuta o que os players querem/esperam em uma campanha. Recomendo demais!!" }
]

export const getServices = (): Service[] => [
  {
    title: "Campanhas Longas",
    description: "Deseja entrar em uma mesa de longa duração? Tenho campanhas contínuas para jogadores dedicados, com histórias ricas e desenvolvimento de personagens."
  },
  {
    title: "One-shots",
    description: "Quer experimentar uma aventura rápida? Ofereço one-shots temáticas, perfeitas para eventos ou para quem quer uma experiência única sem compromisso de longo prazo."
  },
  {
    title: "Consultoria Narrativa",
    description: "Precisa de ajuda para criar sua própria campanha? Posso ajudar a desenvolver enredos, personagens e mundos para mestres que desejam aprimorar suas habilidades narrativas."
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

