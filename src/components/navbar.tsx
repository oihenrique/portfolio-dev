import * as React from "react";
import Link from "next/link";
import * as Dialog from "@radix-ui/react-dialog";
import { HamburgerMenuIcon, Cross2Icon } from "@radix-ui/react-icons";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@radix-ui/react-navigation-menu";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const navLinks = [
    { href: "#inicio", label: "Início" },
    { href: "#sobre", label: "Sobre mim" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <nav className="w-full mb-6 lg:mb-12 sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          <Link
            href="#inicio"
            className="font-semibold tracking-tight text-primary-600"
          >
            henrique.dev
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden md:block relative">
            <NavigationMenuList className="flex items-center gap-1">
              {navLinks.map((link) => (
                <NavigationMenuItem key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className="inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Dialog.Root open={open} onOpenChange={setOpen}>
              <Dialog.Trigger asChild>
                <button className="p-2 text-primary-600 hover:bg-gray-100 rounded-lg outline-none">
                  <HamburgerMenuIcon width={24} height={24} />
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm animate-in fade-in" />
                <Dialog.Content className="fixed inset-y-0 right-0 z-50 w-3/4 max-w-xs bg-white p-6 shadow-xl animate-in slide-in-from-right duration-300">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-bold text-primary-600">Menu</span>
                    <Dialog.Close asChild>
                      <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-lg">
                        <Cross2Icon width={24} height={24} />
                      </button>
                    </Dialog.Close>
                  </div>

                  <nav className="flex flex-col gap-4">
                    {navLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className="text-lg font-medium text-gray-700 hover:text-secondary-500 py-2 border-b border-gray-50 transition-colors"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </nav>

                  <div className="absolute bottom-8 left-6 right-6">
                    <p className="text-xs text-center text-gray-400">
                      &quot;A tecnologia é a luz que revela o caminho.&quot;
                    </p>
                  </div>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
          </div>
        </div>
      </div>
    </nav>
  );
}
