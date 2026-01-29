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
      <section className="flex gap-8 items-center">
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium text-gray-500">
            Olá, sou o{" "}
            <span className="font-bold text-secondary-500">Henrique</span>!
          </p>
          <h1 className="text-4xl font-bold text-gray-700">
            Desenvolvo soluções que iluminam o caminho para o seu negócio
            crescer
          </h1>
          <p className="text-gray-600">
            Acredito que a tecnologia seja um dos faróis que guiam empresas e
            pessoas em direção aos seus objetivos.{" "}
            <strong>
              Eu te ajudo a traçar a rota, desenvolvendo software, sites e
              automações para melhorar processos.
            </strong>{" "}
            Minha missão é garantir que você navegue com segurança, clareza e
            eficiência.
          </p>
          <div className="flex gap-4 mt-2 ">
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
        <div className="max-w-2xl w-full">
          <Image
            src={`${prefix}/HTC_Heritage Library_Nautical Nation 02Element 6.png`}
            width={400}
            height={400}
            alt="Desenho de um farol"
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
