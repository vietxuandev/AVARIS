"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useCallback, useEffect, useState } from "react";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Trang chủ", href: "#hero" },
  { name: "Giới thiệu", href: "#about" },
  { name: "Lợi ích", href: "#impact" },
  { name: "Quy trình", href: "#process" },
  { name: "Liên hệ", href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-2xl" : "bg-transparent"
      }`}
    >
      {/* Top highlight when scrolled */}
      {isScrolled && (
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo text only */}
          <motion.a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#hero");
            }}
            className="relative group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span
              className={`text-2xl relative z-10 transition-all duration-300 ${
                isScrolled
                  ? "text-ocean-900 drop-shadow-[0_2px_8px_rgba(255,255,255,0.8)]"
                  : "text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.6)]"
              }`}
            >
              AVARIS
            </span>

            {/* Glow effect on hover */}
            <div
              className={`absolute inset-0 rounded-2xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-300 ${
                isScrolled
                  ? "bg-linear-to-r from-cyan-400 to-blue-500"
                  : "bg-white/50"
              }`}
            />
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`relative group transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-700 hover:text-cyan-600"
                    : "text-white/95 hover:text-white drop-shadow-lg"
                }`}
                whileHover={{ y: -2 }}
              >
                {link.name}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 rounded-full w-0 transition-all duration-300 ${
                    isScrolled
                      ? "bg-linear-to-r from-cyan-400 to-blue-500 group-hover:w-full"
                      : "bg-white group-hover:w-full"
                  }`}
                />
              </motion.a>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              className={`px-8 py-2 rounded-3xl transition-all duration-500 hover:scale-105 relative overflow-hidden group ${
                isScrolled
                  ? "glass-card shadow-lg hover:shadow-2xl"
                  : "glass-button text-white"
              }`}
            >
              {/* Button highlight */}
              <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent rounded-3xl pointer-events-none" />

              <span
                className={`relative z-10 ${
                  isScrolled
                    ? "bg-linear-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent"
                    : ""
                }`}
              >
                Liên hệ ngay
              </span>

              {!isScrolled && (
                <div className="absolute inset-0 bg-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              )}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-xl transition-all duration-300 relative overflow-hidden ${
              isScrolled ? "glass-card" : "glass-button text-white"
            }`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-white/20 to-transparent rounded-xl pointer-events-none" />
            {isOpen ? (
              <X className="w-6 h-6 relative z-10" />
            ) : (
              <Menu className="w-6 h-6 relative z-10" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden overflow-hidden glass-card rounded-4xl mt-4 mb-4 relative"
            >
              {/* Top highlight */}
              <div className="absolute top-0 left-0 right-0 h-16 bg-linear-to-b from-white/30 to-transparent rounded-t-4xl pointer-events-none" />

              <div className="py-4 space-y-2">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="block px-6 py-3 text-gray-700 hover:bg-white/50 rounded-2xl mx-3 transition-all duration-200"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <div className="px-6 pt-2">
                  <Button
                    onClick={() => scrollToSection("#contact")}
                    className="w-full glass-button text-gray-700 rounded-3xl hover:bg-white/60 transition-all duration-300 relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent rounded-3xl pointer-events-none" />
                    <span className="relative z-10">Liên hệ ngay</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
