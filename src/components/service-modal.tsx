import * as Dialog from "@radix-ui/react-dialog";
import {
  ChatBubbleIcon,
  Cross2Icon,
  PaperPlaneIcon,
} from "@radix-ui/react-icons";
import { Button, Text, Heading } from "@radix-ui/themes";
import { ServiceDetail } from "@/shared/services-info";

export default function ServiceModal({ service }: { service: ServiceDetail }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-xs z-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] max-w-xl bg-background p-5 sm:p-8 rounded-2xl shadow-xl z-50 focus:outline-none max-h-[95vh] overflow-y-auto">
        {/* Cabeçalho */}
        <div className="flex justify-between items-center">
          <Dialog.Title className="text-xl">
            <Heading className="text-primary-500">{service.title}</Heading>
          </Dialog.Title>
          <Dialog.Close asChild>
            <button className="cursor-pointer text-primary-400 hover:text-primary-700">
              <Cross2Icon width={24} height={24} />
            </button>
          </Dialog.Close>
        </div>

        {/* Descrição e Benefícios */}
        <Dialog.Description className="text-sm text-gray-700 leading-relaxed">
          <Text as="p">{service.fullDescription}</Text>
        </Dialog.Description>

        <hr className="text-gray-300 my-4" />

        <div className="space-y-4 my-2">
          <Text as="p" weight="bold" className="text-primary-500">
            Benefícios:
          </Text>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 text-sm text-gray-700">
            {service.benefits.map((benefit, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-sm text-primary-600"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
                {benefit}
              </li>
            ))}
          </ul>
        </div>

        <hr className="text-gray-300 my-4" />

        {/* CTA */}
        <div className="mt-8 p-6 bg-gray-50 rounded-2xl border border-primary-100/60 text-center space-y-6">
          <div className="space-y-2">
            <Heading size="4" className="text-primary-700">
              Gostou desta solução?
            </Heading>
            <Text as="p" className="text-gray-700 text-sm">
              Inicie uma conversa agora para alinhar os detalhes do seu projeto.
            </Text>
          </div>

          <div className="flex flex-col gap-3">
            {/* WhatsApp */}
            <Button
              size="3"
              className="!bg-secondary-500 !text-white !cursor-pointer !rounded-lg font-bold shadow-md hover:!bg-secondary-400 transition-all !w-64 md:!w-md !px-6 !py-3 !mx-auto !flex !items-center !justify-center !gap-2 !text-[10px] sm:!text-sm lg:!text-base !text-wrap"
              onClick={() =>
                window.open(
                  `https://wa.me/5583996124107?text=Olá Henrique! Gostaria de saber mais sobre: ${service.title}`,
                  "_blank",
                )
              }
            >
              <ChatBubbleIcon width={16} height={16} className="shrink-0" />
              <span className="leading-tight">
                Falar sobre {service.title} agora
              </span>
            </Button>

            {/* E-mail Direto */}
            <Button
              size="3"
              variant="outline"
              className="!border-1 !border-primary-200 !text-primary-500 !cursor-pointer !rounded-lg hover:!bg-primary-50 transition-all !w-64 md:!w-md !px-6 !py-3 !mx-auto !flex !items-center !justify-center !gap-2 !text-[10px] sm:!text-sm lg:!text-base !text-wrap"
              onClick={() =>
                (window.location.href = `mailto:oi.henriquegomes@gmail.com?subject=Proposta: ${service.title}`)
              }
            >
              <PaperPlaneIcon width={16} height={16} className="shrink-0" />
              <span className="leading-tight">
                Solicitar proposta por e-mail
              </span>
            </Button>
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
