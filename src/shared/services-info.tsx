import {
  CodeIcon,
  GearIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

export interface ServiceDetail {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  iconPath: React.ReactNode;
}

export const servicesInfo: ServiceDetail[] = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "Criação rápida e performática de Landing pages para o seu negócio.",
    fullDescription:
      "Sua presença digital não deve ser um labirinto para o visitante. Projeto interfaces que dissipam a dúvida e guiam o olhar com clareza, transformando curiosidade em confiança através de uma navegação fluida.",
    benefits: ["Navegação Intuitiva", "Código Limpo", "Foco em Conversão"],
    iconPath: <RocketIcon width={20} height={20} color="#fafafa" />,
  },
  {
    id: 2,
    title: "Desenvolvimento de Software",
    description:
      "Criação de softwares para as mais diversas finalidades, como softwares de gestão, organização etc.",
    iconPath: <CodeIcon width={20} height={20} color="#fafafa" />,
    fullDescription:
      "Desenvolvo sistemas sólidos e escaláveis que organizam o caos operacional, permitindo que você retome o controle estratégico do seu próprio convés, se livre de planilhas e controles manuais.",
    benefits: [
      "Arquitetura Sólida",
      "Escalabilidade",
      "Segurança Técnica",
      "Ganho de Produtividade",
    ],
  },
  {
    id: 3,
    title: "Bots para Telegram",
    description:
      "Desenvolvimento de bots para gestão de conteúdos, assinaturas, disparo de notificações etc.",
    iconPath: <LightningBoltIcon width={20} height={20} color="#fafafa" />,
    fullDescription:
      "A ineficiência é a neblina da produtividade. Crio sentinelas digitais que operam com precisão técnica 24/7, automatizando diálogos, notificações, assinaturas etc., para que nenhuma oportunidade se perca na escuridão.",
    benefits: [
      "Disponibilidade Total",
      "Automação Inteligente",
      "Redução de Ruído",
    ],
  },
  {
    id: 4,
    title: "Automação de Processos",
    description:
      "Desenvolvimento de scripts para automatizar tarefas repetitivas.",
    iconPath: <GearIcon width={20} height={20} color="#fafafa" />,
    fullDescription:
      "Tarefas repetitivas são âncoras que impedem o crescimento. Implemento automações silenciosas que conectam suas ferramentas, garantindo que a informação flua sem barreiras e você possa focar no que realmente importa, deixando a rotina operacional para as máquinas.",
    benefits: [
      "Sincronia de Dados",
      "Eliminação de Erros",
      "Ganho de Tempo Real",
    ],
  },
];
