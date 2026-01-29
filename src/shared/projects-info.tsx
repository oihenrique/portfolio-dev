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

export const projectsInfo = [
  {
    id: 1,
    title: "Automação de relatório",
    description:
      "Este projeto gera relatórios personalizados para várias lojas e gerentes diferentes a partir de uma lista de vendas canceladas e os envia por e-mail para cada uma, facilitando a análise por loja.",
    fullDescription:
      "Desenvolvi uma solução que elimina a névoa operacional ao transformar dados brutos de vendas canceladas em relatórios estratégicos. O sistema centraliza informações de múltiplas unidades e as entrega diretamente aos gestores, garantindo precisão e economia de tempo real.",
    category: "automacao",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Python", "Pandas", "SMTP"],
    imagePath: "/automacao_relatorios.png",
  },
  {
    id: 2,
    title: "Desenvolvimento de software",
    description:
      "Criação de softwares para as mais diversas finalidades, como softwares de gestão, organização etc.",
    fullDescription:
      "Sistemas sólidos são o alicerce de qualquer negócio eficiente. Projeto arquiteturas personalizadas que organizam fluxos de trabalho complexos, removendo âncoras técnicas e permitindo que a empresa navegue com foco total em seus objetivos estratégicos.",
    iconPath: <CodeIcon width={20} height={20} color="#fafafa" />,
    category: "sistemas",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Python", "Pandas", "SMTP"],
    imagePath: "/automacao_relatorios.png",
  },
  {
    id: 3,
    title: "Bot para telegram",
    description:
      "Desenvolvimento de bots para gestão de conteúdos, assinaturas, disparo de notificações etc.",
    fullDescription:
      "Criei sentinelas digitais capazes de automatizar a interação e a gestão de comunidades. Estes bots dissipam a necessidade de intervenção manual constante, operando 24/7 para garantir que a informação e o atendimento cheguem ao destino sem ruídos.",
    iconPath: <LightningBoltIcon width={20} height={20} color="#fafafa" />,
    category: "bots",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Python", "Pandas", "SMTP"],
    imagePath: "/automacao_relatorios.png",
  },
  {
    id: 4,
    title: "Automação de processos",
    description:
      "Desenvolvimento de scripts para automatizar tarefas repetitivas.",
    fullDescription:
      "A ineficiência é uma barreira invisível para o crescimento. Implementei scripts de automação que conectam ferramentas isoladas, permitindo que os dados fluam livremente e eliminando erros humanos em processos críticos de rotina.",
    iconPath: <GearIcon width={20} height={20} color="#fafafa" />,
    category: "automacao",
    videoUrl: "dQw4w9WgXcQ",
    technologies: ["Python", "Pandas", "SMTP"],
    imagePath: "/automacao_relatorios.png",
  },
];
