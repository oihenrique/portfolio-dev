import { useState } from "react";
import * as Select from "@radix-ui/react-select";
import CardServicesWithPhoto from "./card-services-with-photo";
import { Container, Dialog } from "@radix-ui/themes";
import Image from "next/image";
import { projectsInfo } from "@/shared/projects-info";
import ProjectModal from "./project-modal";

export default function ProjectsSection() {
  const [servicoSelecionado, setServicoSelecionado] = useState("todos");

  const projetosFiltrados = projectsInfo.filter(
    (p) => servicoSelecionado === "todos" || p.category === servicoSelecionado,
  );

  return (
    <Container id="projetos" className="scroll-mt-20">
      <section className="pb-12 space-y-8">
        <div className="space-y-4">
          <h2 className="text-2xl text-gray-700 text-center font-bold">
            Meus projetos
          </h2>

          <div className="flex gap-4 items-center justify-center">
            <div className="flex flex-col gap-1 items-center">
              <span className="text-xs text-gray-400 ml-1">
                Filtrar por serviço
              </span>

              <Select.Root
                value={servicoSelecionado}
                onValueChange={setServicoSelecionado}
              >
                <Select.Trigger className="inline-flex items-center justify-between gap-2 rounded-lg border border-primary-200 bg-white px-4 py-2 text-sm font-medium text-primary-700 shadow-sm transition-all hover:border-secondary-400 focus:outline-none focus:ring-2 focus:ring-secondary-200 min-w-[200px] cursor-pointer">
                  <Select.Value />
                  <Select.Icon className="text-primary-400">
                    <svg
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1 1L5 5L9 1"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </Select.Icon>
                </Select.Trigger>

                <Select.Portal>
                  <Select.Content
                    className="z-50 overflow-hidden bg-white rounded-xl border border-primary-100 shadow-lg animate-in fade-in zoom-in-95"
                    position="popper"
                    sideOffset={5}
                  >
                    <Select.Viewport className="p-1">
                      <SelectItem value="todos">Todos os serviços</SelectItem>
                      <SelectItem value="sistemas">Sistemas</SelectItem>
                      <SelectItem value="automacao">Automações</SelectItem>
                      <SelectItem value="bots">Bots Telegram</SelectItem>
                    </Select.Viewport>
                  </Select.Content>
                </Select.Portal>
              </Select.Root>
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <div className="hidden lg:block w-1/4 px-4 mr-12">
            <Image
              src="/HTC_Heritage Library_Nautical Nation 02Element 1.png"
              width={250}
              height={250}
              alt="pedestal com livro"
            />
          </div>

          <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {projetosFiltrados.map((s) => (
              <Dialog.Root key={s.id}>
                <Dialog.Trigger>
                  <div className="h-full">
                    <CardServicesWithPhoto
                      title={s.title}
                      description={s.description}
                      imagePath={s.imagePath ?? ""}
                    />
                  </div>
                </Dialog.Trigger>
                <ProjectModal project={s} />
              </Dialog.Root>
            ))}
          </div>
        </div>

        {projetosFiltrados.length === 0 && (
          <p className="text-center text-gray-500 italic mt-8">
            Nenhuma rota traçada para este serviço ainda.
          </p>
        )}
      </section>
    </Container>
  );
}

function SelectItem({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) {
  return (
    <Select.Item
      value={value}
      className="relative flex items-center px-8 py-2 text-sm text-primary-600 rounded-md cursor-pointer outline-none transition-colors data-[highlighted]:bg-secondary-100 data-[highlighted]:text-secondary-700 data-[state=checked]:font-semibold"
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-2 inline-flex items-center">
        <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
      </Select.ItemIndicator>
    </Select.Item>
  );
}
