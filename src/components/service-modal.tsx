import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Button, Text, Heading, TextField, TextArea } from "@radix-ui/themes";
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

        {/* Formulário com a tag <form> semântica */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("Formulário submetido para:", service.title);
          }}
          className="flex flex-col gap-4 mt-6 p-4 sm:p-6 bg-gray-50 rounded-xl border border-primary-100/60"
        >
          <Heading size="3" className="text-primary-700 mb-2">
            Solicitar uma proposta de projeto
          </Heading>

          <div className="space-y-4">
            <div className="space-y-1">
              <Text
                as="label"
                htmlFor="name"
                size="2"
                weight="medium"
                className="text-primary-600"
              >
                Seu Nome ou Empresa *
              </Text>
              <TextField.Root
                id="name"
                name="name"
                required
                variant="surface"
                className="!rounded-sm"
              />
            </div>

            <div className="space-y-1">
              <Text
                as="label"
                htmlFor="email"
                size="2"
                weight="medium"
                className="text-primary-600"
              >
                E-mail *
              </Text>
              <TextField.Root
                id="email"
                name="email"
                type="email"
                required
                variant="surface"
                className="!rounded-sm"
              />
            </div>

            <div className="space-y-1">
              <Text
                as="label"
                htmlFor="deadline"
                size="2"
                weight="medium"
                className="text-primary-600"
              >
                Prazo (Opcional)
              </Text>
              <TextField.Root
                id="deadline"
                name="deadline"
                variant="surface"
                className="!rounded-sm"
              />
            </div>

            <div className="space-y-1">
              <Text
                as="label"
                htmlFor="message"
                size="2"
                weight="medium"
                className="text-primary-600"
              >
                Mensagem *
              </Text>
              <TextArea
                id="message"
                name="message"
                required
                className="min-h-[80px] !rounded-sm"
              />
            </div>
            <div className="text-center text-sm">
              <Button
                type="submit"
                className="!cursor-pointer !py-2 !p-3 !rounded-sm"
                variant="solid"
                color="teal"
              >
                Enviar solicitação
              </Button>
            </div>
          </div>
        </form>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
