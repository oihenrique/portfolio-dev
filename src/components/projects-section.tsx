import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@radix-ui/react-select";
import CardServicesWithPhoto from "./card-services-with-photo";
import { Container } from "@radix-ui/themes";
import Image from "next/image";
import { projectsInfo } from "@/shared/projects-info";

export default function ProjectsSection() {
  const services = projectsInfo;

  return (
    <Container id="projetos" className="scroll-mt-20">
      <section className="pb-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-700 text-center font-bold">
            Meu trabalho
          </h2>
          <div className="flex gap-4 items-center justify-center">
            <Select defaultValue="sistemas">
              <SelectTrigger>Tipo</SelectTrigger>
              <SelectContent>
                <SelectItem value="sistemas">Sistemas</SelectItem>
              </SelectContent>
            </Select>
            <Select defaultValue="sistemas">
              <SelectTrigger>Tecnologia</SelectTrigger>
              <SelectContent>
                <SelectItem value="sistemas">Sistemas</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="flex items-center">
          <div className="w-1/4 px-4 mr-12">
            <Image
              // className="scale-x-[-1]"
              src="/HTC_Heritage Library_Nautical Nation 02Element 1.png"
              width={250}
              height={250}
              alt="pedestal com livro"
            />
          </div>
          <div className="w-3/4 grid grid-rows-2 grid-cols-3 gap-4">
            {services.map((s) => (
              <CardServicesWithPhoto
                key={s.id ?? s.title}
                title={s.title}
                description={s.description}
                imagePath={s.imagePath ?? ""}
                action={s.action}
              />
            ))}
          </div>
        </div>
      </section>
    </Container>
  );
}
