// ==============================================================================
// CONFIGURAÇÃO CENTRAL DA CLIENTE: STUDIO HELENA LINS (JOÃO PESSOA)
// Toda a personalização do site fica neste arquivo.
// Fontes: bio do Instagram @studiohelenalins e ficha do perfil (endereço no
// Bairro das Indústrias, WhatsApp, horários seg-sex 09h-16h e sáb 08h-16h).
// ATENÇÃO: os valores abaixo são uma ESTIMATIVA para a demo. Trocar pelos
// valores reais da Helena antes da entrega.
// ==============================================================================

export const studioConfig = {
  name: "Helena Lins",
  ownerName: "Helena",
  nameSuffix: "Studio",
  fullName: "Studio Helena Lins",
  tagline: "Alongamento na fibra de vidro, manicure e pedicure",
  subtitle:
    "Especialista em alongamento na fibra de vidro, no Bairro das Indústrias. Escolha o serviço, veja o valor e reserve seu horário em poucos toques.",
  city: "João Pessoa, PB",
  neighborhood: "Bairro das Indústrias",
  addressShort: "R. Cidade de Borborema, 18",
  address: "R. Cidade de Borborema, 18 - Bairro das Indústrias, João Pessoa - PB, 58083-564",
  addressNote: "",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=R.+Cidade+de+Borborema,+18,+Bairro+das+Indústrias,+João+Pessoa+-+PB",
  whatsappNumber: "5583987420601", // Apenas dígitos com DDI e DDD
  whatsappDisplay: "(83) 98742-0601",
  instagramHandle: "@studiohelenalins",
  instagramUrl: "https://www.instagram.com/studiohelenalins",
  // Link do Calendly. Na demo usamos a agenda de teste; na entrega vai o da Helena.
  calendlyUrl: "https://calendly.com/carbosalarissa/30min",
  workingHours: [
    { days: "Segunda a Sexta", hours: "09h às 16h" },
    { days: "Sábado", hours: "08h às 16h" },
    { days: "Domingo", hours: "Fechado" },
  ],
  workingHoursShort: "Seg a sex 09h às 16h, sáb 08h às 16h",
  // Dias sem atendimento (0 = domingo ... 6 = sábado). Vazio = abre todos os dias.
  closedWeekdays: [0],
  periods: [
    { id: "Manhã (08h às 12h)", label: "Manhã", sub: "08h às 12h (sábado) / 09h às 12h" },
    { id: "Tarde (13h às 16h)", label: "Tarde", sub: "13h às 16h" },
  ],
  paymentNote: "Os valores podem variar conforme o comprimento e a decoração. A Helena confirma tudo pelo WhatsApp.",
  // Avisos que a cliente confirma antes de agendar
  bookingNotes: [
    "Chegue 5 minutinhos antes do seu horário.",
    "Se precisar desmarcar, avise com antecedência para liberar a vaga.",
    "Decorações, flores e fio dourado têm valor à parte.",
  ],
  decoratedNote: "Fio dourado, flores, efeito perolado e nail art têm valor à parte. É só escrever nas observações.",

  // Sobre a profissional
  about: {
    photo: "/images/helena-lins.webp",
    title: "Nail designer especialista em fibra de vidro",
    text: "A Helena atende no próprio studio, no Bairro das Indústrias. O forte dela é o alongamento na fibra de vidro: unha fina, natural e resistente. Também faz esmaltação em gel, manicure e pedicure, sempre com cutilagem caprichada.",
    highlights: ["Fibra de vidro", "Esmaltação em gel", "Manicure e pedicure"],
    coursesText: "",
  },

  // Categorias de serviço (cada uma com suas opções e valores)
  categories: [
    {
      id: "alongamento",
      title: "Alongamento na Fibra",
      short: "Fibra de Vidro",
      description: "A especialidade da casa. Unha fina, leve e resistente, no formato que combina com a sua mão.",
      image: "/images/francesinha-fio-dourado.webp",
      duration: "2h a 2h30",
      maintenance: "Manutenção indicada a cada 20 a 25 dias",
      notes: ["Inclui cutilagem", "Francesinha sem custo extra"],
      items: [
        { id: "along-fibra", title: "Alongamento na fibra de vidro", price: 150, popular: true },
        { id: "manut-fibra", title: "Manutenção da fibra", price: 100 },
        { id: "blindagem", title: "Blindagem na unha natural", price: 80 },
      ],
    },
    {
      id: "gel",
      title: "Esmaltação em Gel",
      short: "Gel",
      description: "Brilho que dura semanas, nas mãos ou nos pés. Cores lisas, perolado ou efeito magnético.",
      image: "/images/chocolate-quadrada.webp",
      duration: "1h a 1h30",
      maintenance: "Dura de 15 a 20 dias",
      notes: ["Inclui cutilagem"],
      items: [
        { id: "gel-mao", title: "Esmaltação em gel nas mãos", price: 60, popular: true },
        { id: "gel-pe", title: "Esmaltação em gel nos pés", price: 60 },
        { id: "gel-pe-mao", title: "Gel nas mãos e nos pés", price: 110 },
      ],
    },
    {
      id: "tradicionais",
      title: "Manicure e Pedicure",
      short: "Pé e Mão",
      description: "O cuidado do dia a dia, com cutilagem caprichada e esmaltação comum.",
      image: "/images/pedicure-perolado.webp",
      duration: "1h",
      maintenance: "",
      notes: ["Esmaltação comum inclusa"],
      items: [
        { id: "mao", title: "Manicure", price: 25 },
        { id: "pe", title: "Pedicure", price: 30 },
        { id: "pe-mao", title: "Pé e mão", price: 50, popular: true },
      ],
    },
  ],

  // Adicionais que podem ser somados no agendamento
  addons: [
    { id: "nail-art", name: "Decoração simples (por unha)", price: 5 },
    { id: "flor-fio", name: "Flor ou fio dourado (por unha)", price: 8 },
    { id: "remocao", name: "Remoção de gel ou alongamento", price: 30 },
  ],

  // Informações importantes
  policies: [
    {
      title: "Pontualidade",
      description: "Chegue 5 minutinhos antes. Assim o seu horário rende e ninguém fica esperando.",
    },
    {
      title: "Desmarcar",
      description: "Imprevisto acontece. Avise com antecedência para a vaga ir para outra cliente.",
    },
    {
      title: "Decorações",
      description: "Flores, fio dourado e nail art têm valor à parte. Mande a foto da inspiração no WhatsApp.",
    },
    {
      title: "Manutenção",
      description: "Para a fibra durar bonita, marque a manutenção entre 20 e 25 dias.",
    },
  ],

  // Galeria de fotos de resultados (fotos reais do Instagram da Helena)
  gallery: [
    { url: "/images/francesinha-fio-dourado.webp", tag: "Francesinha com fio dourado" },
    { url: "/images/caramelo-flor-branca.webp", tag: "Caramelo com flor branca" },
    { url: "/images/nude-caramelo-flor.webp", tag: "Nude, caramelo e glitter dourado" },
    { url: "/images/perolado-aurora.webp", tag: "Perolado aurora" },
    { url: "/images/chocolate-quadrada.webp", tag: "Chocolate em gel" },
    { url: "/images/preto-magnetico.webp", tag: "Preto magnético" },
    { url: "/images/pedicure-perolado.webp", tag: "Pedicure perolado com flor" },
    { url: "/images/pedicure-gel.webp", tag: "Esmaltação em gel nos pés" },
  ],
};

// Lista "achatada" de todos os serviços, usada no agendamento
export const allServices = studioConfig.categories.flatMap((cat) =>
  cat.items.map((item) => ({
    ...item,
    category: cat.title,
    categoryId: cat.id,
    duration: item.duration || cat.duration,
  }))
);

export const formatPrice = (value) =>
  value === null || value === undefined
    ? "Sob consulta"
    : `R$ ${Number(value).toFixed(2).replace(".", ",")}`;
