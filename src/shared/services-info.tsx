import {
  CodeIcon,
  GearIcon,
  LightningBoltIcon,
  RocketIcon,
} from "@radix-ui/react-icons";

function handleAction() {
  console.log("click");
}
export const servicesInfo = [
  {
    id: 1,
    title: "Landing Pages",
    description:
      "Criação rápida e performática de Landing pages para o seu negócio.",
    iconPath: <RocketIcon width={20} height={20} color="#59657a" />,
    action: handleAction,
  },
  {
    id: 2,
    title: "Desenvolvimento de software",
    description:
      "Criação de softwares para as mais diversas finalidades, como softwares de gestão, organização etc.",
    iconPath: <CodeIcon width={20} height={20} color="#59657a" />,
    action: handleAction,
  },
  {
    id: 3,
    title: "Bot para telegram",
    description:
      "Desenvolvimento de bots para gestão de conteúdos, assinaturas, disparo de notificações etc.",
    iconPath: <LightningBoltIcon width={20} height={20} color="#59657a" />,
    action: handleAction,
  },
  {
    id: 4,
    title: "Automação de processos",
    description:
      "Desenvolvimento de scripts para automatizar tarefas repetitivas.",
    iconPath: <GearIcon width={20} height={20} color="#59657a" />,
    action: handleAction,
  },
];
