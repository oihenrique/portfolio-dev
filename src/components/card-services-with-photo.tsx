import { PlusIcon } from "@radix-ui/react-icons";
import { Card, Inset, Text } from "@radix-ui/themes";
import Image from "next/image";

interface CardProps {
  title: string;
  description: string;
  imagePath: string;
  action?: () => unknown;
}

export default function CardServicesWithPhoto({
  title,
  description,
  imagePath,
  action,
}: CardProps) {
  return (
    <button className="cursor-pointer" onClick={action}>
      <Card
        size="2"
        className="!flex flex-col gap-1 justify-between w-3xs h-60 rounded-2xl border
       border-primary-100/60 bg-background/80 shadow-sm transition-all 
       duration-200 hover:scale-[1.02] transform-gpu hover:border-primary-200/80 focus-within:ring-2
       focus-within:ring-secondary-200"
      >
        <Inset
          clip="padding-box"
          side="top"
          pb="current"
          className="overflow-hidden"
        >
          <div className="relative w-full aspect-[16/9]">
            <Image
              src={imagePath}
              alt="imagem representativa do card"
              fill
              className="object-cover object-center"
              sizes="(min-width: 1024px) 33vw, 100vw"
            />
          </div>
        </Inset>

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
