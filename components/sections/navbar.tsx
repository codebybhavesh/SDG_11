"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ChevronDown, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const plantsMenuItems = [
    { name: "Indoor Plants", href: "/plants/indoor" },
    { name: "Outdoor Plants", href: "/plants/outdoor" },
    { name: "Gardening Services", href: "/services" },
    { name: "Gardening Equipment", href: "/equipment" },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-md border-b border-green-100 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative w-30 h-30">
              <Image
                src="https://res.cloudinary.com/dfgtpljtq/image/upload/v1768739961/logo_xmvx7t.png"
                alt="Shree Durvankur Greens"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-green-800 tracking-tight">
                Shree Durvankur Greens
              </span>
              <span className="text-xs text-green-600 font-medium">
                Nursery | Wholesale & Retail
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center">
            <NavigationMenu>
              <NavigationMenuList className="space-x-2">
                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all hover:after:w-3/4">
                      Home
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/about" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all hover:after:w-3/4">
                      About Nursery
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-gray-700 hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 data-[state=open]:bg-green-50 data-[state=open]:text-green-700">
                    <Leaf className="w-4 h-4 mr-2" />
                    Plants & Gardening
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] bg-white rounded-lg shadow-xl border border-green-100">
                      {plantsMenuItems.map((item) => (
                        <li key={item.href}>
                          <NavigationMenuLink asChild>
                            <Link href={item.href} className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 group">
                              <div className="flex items-center space-x-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                                <div className="text-sm font-medium leading-none">
                                  {item.name}
                                </div>
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink asChild>
                    <Link href="/#contact" className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-green-50 hover:text-green-700 focus:bg-green-50 focus:text-green-700 focus:outline-none disabled:pointer-events-none disabled:opacity-50 relative after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-green-600 after:transition-all hover:after:w-3/4">
                      Contact
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="lg:hidden">
              <button
                className="p-2 rounded-md text-gray-700 hover:bg-green-50 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="w-[300px] sm:w-[400px] bg-white"
            >
              <SheetHeader>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-4">
                <Link
                  href="/"
                  className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  About Nursery
                </Link>

                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="plants" className="border-none">
                    <AccordionTrigger className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md hover:no-underline font-medium">
                      <div className="flex items-center">
                        <Leaf className="w-4 h-4 mr-2" />
                        Plants & Gardening
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pl-6 space-y-2 pt-2">
                      {plantsMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                <Link
                  href="/#contact"
                  className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-md transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
