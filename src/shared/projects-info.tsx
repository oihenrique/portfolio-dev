import {
  CodeIcon,
  GearIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

function handleAction() {
  console.log("click");
}

export const projectsInfo = [
  {
    id: 1,
    title: "Automação de relatório",
    description:
      "Este projeto gera relatórios personalizados para várias lojas e gerentes diferentes a partir de uma lista de vendas canceladas e os envia por e-mail para cada uma, facilitando a análise por loja.",
    imagePath: "/automacao_relatorios.png",
    action: handleAction,
  },
  {
    id: 2,
    title: "Desenvolvimento de software",
    description:
      "Criação de softwares para as mais diversas finalidades, como softwares de gestão, organização etc.",
    iconPath: <CodeIcon width={20} height={20} color="#fafafa" />,
    action: handleAction,
  },
  {
    id: 3,
    title: "Bot para telegram",
    description:
      "Desenvolvimento de bots para gestão de conteúdos, assinaturas, disparo de notificações etc.",
    iconPath: <LightningBoltIcon width={20} height={20} color="#fafafa" />,
    action: handleAction,
  },
  {
    id: 4,
    title: "Automação de processos",
    description:
      "Desenvolvimento de scripts para automatizar tarefas repetitivas.",
    iconPath: <GearIcon width={20} height={20} color="#fafafa" />,
    action: handleAction,
  },
];
