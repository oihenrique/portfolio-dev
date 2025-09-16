import { Container } from "@radix-ui/themes";
import CardServices from "./card-services";
import { servicesInfo } from "@/shared/services-info";

export default function ServicesSection() {
  const services = servicesInfo;

  return (
    <Container>
      <section className="py-12 space-y-8">
        <h2 className="text-2xl text-background text-center font-bold">
          Serviços disponíveis
        </h2>
        <div className="grid grid-rows-1 grid-cols-4 gap-4">
          {services.map((s) => (
            <CardServices
              key={s.id ?? s.title}
              title={s.title}
              description={s.description}
              iconPath={s.iconPath}
              action={s.action}
            />
          ))}
        </div>
      </section>
    </Container>
  );
}
