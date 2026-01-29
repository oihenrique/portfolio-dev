import { CodeIcon, GearIcon, LightningBoltIcon } from "@radix-ui/react-icons";

export interface ProjectDetail {
  id: number;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  videoUrl?: string;
  technologies: string[];
  imagePath: string;
}

export const projectsInfo: ProjectDetail[] = [
  {
    id: 1,
    title: "Automação de Relatórios para Lojas",
    description:
      "Geração e distribuição automatizada de relatórios de vendas canceladas para múltiplas filiais.",
    fullDescription:
      "Projetei esta solução para uma rede com mais de 40 filiais que processava manualmente relatórios diários de cancelamentos. O script atua como um guia automático: integra-se ao ERP, extrai e processa os dados, gera relatórios personalizados por loja e os entrega diretamente aos gerentes via e-mail. O resultado foi a eliminação de erros manuais e a recuperação de horas produtivas, tudo operado através de uma interface simplificada.",
    category: "automacao",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Python", "Pandas", "SMTP", "OpenPyXL"],
    imagePath: "/automacao_relatorios.png",
  },
  {
    id: 2,
    title: "Sistema de Reservas Sunset Hotel",
    description:
      "Gerenciamento estruturado de clientes, quartos e fluxos de reservas hoteleiras.",
    fullDescription:
      "A essência do projeto Sunset Hotel foi estabelecer uma estrutura para gerenciar reservas de um hotel. Desenvolvido dentro do ecossistema Oracle One Next (Alura), o sistema organiza o fluxo de hóspedes, a disponibilidade de quartos e o controle de usuários.",
    category: "sistemas",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Java", "MySQL", "Swing"],
    imagePath: "/assets/runningProjectHotel1.gif",
  },
  {
    id: 3,
    title: "Bot de Curadoria de Vagas",
    description:
      "Agregador inteligente que monitora, filtra e centraliza oportunidades de emprego via Telegram.",
    fullDescription:
      "Este bot foi concebido para dissipar o ruído na busca por oportunidades em diversas plataformas. Utilizando técnicas de web scraping e integração de APIs, ele monitora fontes distintas 24 horas por dia. O diferencial está no algoritmo de score, que filtra as vagas com precisão técnica antes de distribuí-las em canais específicos do Telegram. Uma solução que organiza vagas de diferentes áreas em um único serviço e distribui para diversos canais.",
    category: "bots",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Python", "Playwright", "Telegram API", "SQLite", "Docker"],
    imagePath: "/assets/telegram-bot-vagas.png",
  },
];
