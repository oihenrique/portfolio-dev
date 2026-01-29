import * as React from "react";
import Link from "next/link"; // optional — if not using Next.js, swap for <a>
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@radix-ui/react-navigation-menu";

/**
 * Tailwind notes:
 * - Uses data-* attributes Radix sets (e.g., data-[state=open]) for transitions.
 * - Adjust colors to match your Tailwind theme (light/dark friendly).
 */

export default function Navbar() {
  return (
    <nav className="w-full mb-12 sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link href="#inicio" className="font-semibold tracking-tight">
            henrique.dev
          </Link>

          <NavigationMenu className="relative">
            <NavigationMenuList className="flex items-center gap-1">
              {/* Início */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#inicio"
                    className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 data-[active]:bg-gray-100"
                  >
                    Início
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Sobre mim */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#sobre"
                    className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                  >
                    Sobre mim
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Serviços (dropdown) */}
              {/* <NavigationMenuItem>
                <NavigationMenuTrigger className="group inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 data-[state=open]:bg-gray-100">
                  Serviços
                  <svg
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                    className="h-4 w-4 transition-transform duration-200 group-data-[state=open]:rotate-180"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 0 1 1.06.02L10 11.186l3.71-3.955a.75.75 0 1 1 1.08 1.04l-4.24 4.52a.75.75 0 0 1-1.08 0L5.21 8.27a.75.75 0 0 1 .02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="absolute right-0 mt-2 w-[min(90vw,28rem)] rounded-xl border bg-white p-3 shadow-lg data-[motion=from-start]:animate-in data-[motion=from-start]:fade-in data-[motion=from-start]:zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95">
                  <ul className="grid gap-2 sm:grid-cols-2">
                    <ListCard
                      title="Landing Page"
                      href="#servicos/landing-page"
                      description="Criação rápida e performática com SEO básico e analytics."
                    />
                    <ListCard
                      title="Bot Telegram"
                      href="#servicos/bot-telegram"
                      description="Bots para automações, integrações e atendimento."
                    />
                    <ListCard
                      title="E-commerce"
                      href="#servicos/ecommerce"
                      description="Loja integrada com pagamentos e gestão de pedidos."
                    />
                    <ListCard
                      title="Integrações API"
                      href="#servicos/integracoes"
                      description="Conexões estáveis entre sistemas (REST/GraphQL)."
                    />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem> */}

              {/* Projetos */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#projetos"
                    className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                  >
                    Projetos
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Contato */}
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link
                    href="#contato"
                    className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400"
                  >
                    Contato
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>

            {/* Optional visual affordances */}
            <NavigationMenuIndicator className="absolute top-full z-10 flex h-2 translate-y-1 items-end justify-center overflow-hidden data-[state=hidden]:animate-out data-[state=hidden]:fade-out" />
            <div className="perspective-[2000px] absolute left-0 top-full w-full">
              <NavigationMenuViewport className="relative origin-top-center rounded-xl border bg-white shadow-lg data-[state=closed]:scale-95 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=open]:zoom-in-95" />
            </div>
          </NavigationMenu>
        </div>
      </div>
    </nav>
  );
}

/**
 * Small helper card used inside the dropdown grid
 */
function ListCard({
  title,
  href,
  description,
}: {
  title: string;
  href: string;
  description: string;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group block rounded-xl border p-4 transition 
                    hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-none 
                    focus-visible:ring-2 focus-visible:ring-gray-400"
        >
          <div className="mb-1 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-gray-800">{title}</h3>
            <span
              className="translate-x-1 opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100"
              aria-hidden
            >
              →
            </span>
          </div>
          <p className="text-xs text-gray-500">{description}</p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
