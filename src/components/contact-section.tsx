import { Container, Heading, Button } from "@radix-ui/themes";
import { PaperPlaneIcon, ChatBubbleIcon } from "@radix-ui/react-icons";

export default function ContactSection() {
  return (
    <section
      id="contato"
      className="py-24 bg-gray-100 relative overflow-hidden"
    >
      <Container className="relative z-10 px-4">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <div className="space-y-4">
            <Heading
              size="8"
              className="tracking-tight text-primary-500 font-bold"
            >
              Pronto para iluminar o próximo passo?
            </Heading>
            <p className="text-primary-400 text-lg max-w-xl mx-auto">
              Seja para automatizar um processo manual ou construir um sistema
              do zero, estou pronto para ser o seu guia técnico.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button
              size="4"
              className="!bg-secondary-500 hover:!bg-secondary-400 !text-white !cursor-pointer !rounded-xl font-bold shadow-lg shadow-secondary-500/20 transition-all transform hover:-translate-y-1 !flex !items-center !justify-center !gap-2 !text-[16px] sm:!text-sm lg:!text-base !text-wrap"
              onClick={() =>
                window.open("https://wa.me/+5583996124107", "_blank")
              }
            >
              <span className="leading-tight">
                <ChatBubbleIcon width={20} height={20} className="shrink-0" />
              </span>
              Iniciar conversa no WhatsApp
            </Button>

            <Button
              size="4"
              variant="outline"
              className="!border-primary-200 !text-primary-500 hover:!bg-primary-50 !cursor-pointer !rounded-xl transition-all !flex !items-center !justify-center !gap-2 !text-[16px] sm:!text-sm lg:!text-base !text-wrap"
              onClick={() =>
                (window.location.href = "mailto:oi.henriquegomes@gmail.com")
              }
            >
              <PaperPlaneIcon width={20} height={20} />
              Enviar E-mail
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
