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
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-4 gap-x-8 justify-items-center lg:max-w-6xl max-w-lg">
          {servicesInfo.map((s) => (
            <Dialog.Root key={s.id}>
              <Dialog.Trigger>
                <div>
                  {" "}
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
