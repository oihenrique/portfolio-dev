import { Container, Dialog } from "@radix-ui/themes";
import CardServices from "./card-services";
import { servicesInfo } from "@/shared/services-info";
import ServiceModal from "./service-modal";

export default function ServicesSection() {
  return (
    <Container id="servicos" className="scroll-mt-20">
      <section className="py-12 space-y-8">
        <h2 className="text-2xl text-background text-center font-bold">
          Serviços disponíveis
        </h2>
        <div className="grid grid-rows-1 grid-cols-4 gap-4">
          {servicesInfo.map((s) => (
            <Dialog.Root key={s.id}>
              <Dialog.Trigger>
                <div>
                  {" "}
                  {/* Wrapper para o gatilho */}
                  <CardServices
                    title={s.title}
                    description={s.description}
                    iconPath={s.iconPath}
                  />
                </div>
              </Dialog.Trigger>
              <ServiceModal service={s} />
            </Dialog.Root>
          ))}
        </div>
      </section>
    </Container>
  );
}
