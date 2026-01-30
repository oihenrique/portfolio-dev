import { DoubleArrowDownIcon, Link2Icon } from "@radix-ui/react-icons";
import { Button, Container } from "@radix-ui/themes";
import Image from "next/image";
import { useState } from "react";

const isProd = process.env.NODE_ENV === "production";
const prefix = isProd ? "/portfolio-dev" : "";

export default function HeroSection() {
  const [copiado, setCopiado] = useState(false);

  const copiarLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiado(true);

    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <Container id="inicio" className="scroll-mt-20">
      <section className="flex flex-col lg:flex-row gap-8 items-center py-0 md:py-16 lg:py-32">
        <div className="text-center flex flex-col gap-2  lg:text-left order-2 lg:order-1">
          <p className="text-sm md:text-md lg:text-xl font-medium text-gray-500">
            Olá, sou o{" "}
            <span className="font-bold text-secondary-500">Henrique</span>!
          </p>
          <h1 className="text-center lg:text-start text-2xl md:text-3xl lg:text-3xl max-w-lg md:max-w-xl lg:max-w-7xl  font-bold text-gray-700">
            Desenvolvo soluções que iluminam o caminho para o seu negócio
            crescer
          </h1>
          <p className="text-gray-600 lg:text-start px-4 md:px-0 md:mx-auto lg:mx-0 md:text-md text-sm my-4 md:my-2 lg:mb-0 max-w-lg">
            Acredito que a tecnologia seja um dos faróis que guiam empresas e
            pessoas em direção aos seus objetivos.{" "}
            <strong>
              Eu te ajudo a traçar a rota, desenvolvendo software, sites e
              automações para melhorar processos.
            </strong>{" "}
            Minha missão é garantir que você navegue com segurança, clareza e
            eficiência.
          </p>
          <div className="flex flex-wrap gap-4 mt-2 justify-center lg:justify-start">
            <a href="#servicos">
              <Button className="!cursor-pointer">
                <DoubleArrowDownIcon />
                Explore novas soluções
              </Button>
            </a>
            <Button
              variant="outline"
              className="!cursor-pointer transition-all duration-200"
              onClick={copiarLink}
            >
              {copiado ? (
                <>Link Copiado!</>
              ) : (
                <>
                  <Link2Icon />
                  Copiar Link
                </>
              )}
            </Button>
            {/* <Button>
              <LinkedInLogoIcon /> LinkedIn
            </Button>
            <Button variant="outline">
              <GitHubLogoIcon />
              Github
            </Button> */}
          </div>
        </div>
        <div className="max-w-xs lg:max-w-2xl w-full order-1 lg:order-2">
          <Image
            src={`${prefix}/HTC_Heritage Library_Nautical Nation 02Element 6.png`}
            width={400}
            height={400}
            alt="Desenho de um farol"
            className="mx-auto"
          />
          <p className="text-center text-xs text-gray-400 mt-2">
            Designed by{" "}
            <a href="https://www.heritagetype.com/" target="_blank">
              Heritage Type
            </a>
          </p>
        </div>
      </section>
    </Container>
  );
}
