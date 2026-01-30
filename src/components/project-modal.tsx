import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Heading, Text } from "@radix-ui/themes";
import { ProjectDetail } from "@/shared/projects-info";

export default function ProjectModal({ project }: { project: ProjectDetail }) {
  return (
    <Dialog.Portal>
      <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
      <Dialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[95vw] sm:w-[90vw] max-w-2xl bg-[#FAF3F3] p-4 sm:p-6 rounded-2xl shadow-xl z-50 focus:outline-none max-h-[90vh] overflow-y-auto">
        {/* Cabeçalho */}
        <div className="flex justify-between items-start mb-4">
          <Dialog.Title>
            <Heading size="6" className="text-primary-500 pr-4">
              {project.title}
            </Heading>
          </Dialog.Title>
          <Dialog.Close asChild>
            <button className="cursor-pointer text-primary-400 hover:text-primary-700 p-1">
              <Cross2Icon width={24} height={24} />
            </button>
          </Dialog.Close>
        </div>

        {/* Vídeo Embed do YouTube */}
        {project.videoUrl && (
          <div className="relative w-full aspect-video rounded-xl overflow-hidden mb-6 border border-primary-100 shadow-md">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${project.videoUrl}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Detalhes do Projeto */}
        <div className="space-y-6">
          <div>
            <Heading size="3" className="text-primary-700 mb-2">
              Sobre o Projeto
            </Heading>
            <Text as="p" size="3" className="text-primary-600 leading-relaxed">
              {project.fullDescription}
            </Text>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-semibold rounded-full border border-primary-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <hr className="my-6 border-primary-100" />

        <div className="flex justify-center">
          <Text size="2" className="text-primary-400 italic">
            &quot;A tecnologia é a luz que revela o caminho.&quot;
          </Text>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  );
}
