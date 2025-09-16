import { PlusIcon } from "@radix-ui/react-icons";
import { Card, Text } from "@radix-ui/themes";

interface CardProps {
  title: string;
  description: string;
  iconPath?: React.ReactNode;
  action?: () => unknown;
}

export default function CardServices({
  title,
  description,
  iconPath,
  action,
}: CardProps) {
  const iconExists = iconPath !== "" && iconPath !== undefined;
  return (
    <button className="cursor-pointer" onClick={action}>
      <Card
        size="2"
        className="!flex flex-col justify-between w-3xs h-60 rounded-2xl border
       border-primary-100/60 bg-background/80 shadow-sm transition-all 
       duration-200 hover:scale-[1.02] transform-gpu hover:border-primary-200/80 focus-within:ring-2
       focus-within:ring-secondary-200"
      >
        {iconExists && iconPath}

        <div>
          <h3 className="mb-1 text-base font-semibold tracking-tight text-primary-700">
            {title}
          </h3>
          <Text
            className="text-primary-600 leading-relaxed line-clamp-3"
            as="p"
            size="2"
            wrap="pretty"
          >
            {description}
          </Text>
        </div>

        <p className="mt-2 flex items-center gap-1 text-sm font-medium text-primary-700 transition-colors hover:text-secondary-700">
          <PlusIcon /> Mais informações
        </p>
      </Card>
    </button>
  );
}
