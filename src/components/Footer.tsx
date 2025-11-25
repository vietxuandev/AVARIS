import logo from "@/assets/logo.png";
import { Globe, Mail, Phone } from "lucide-react";
import Image from "next/image";
import { AnimatedBlobs } from "./animated";

/**
 * Footer - Server Component (SEO-friendly)
 * Animations handled by client components
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-br from-cyan-950 via-blue-950 to-blue-900">
      {/* Floating liquid glass blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <AnimatedBlobs />
      </div>

      <div className="relative z-10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src={logo}
                  alt="AVARIS Logo"
                  className="h-14 w-auto drop-shadow-lg"
                  quality={90}
                  sizes="(max-width: 768px) 100px, 150px"
                />
              </div>
              <p className="text-cyan-100/80 leading-relaxed">
                Nước uống cao cấp trong chai thủy tinh tái sử dụng - Định hình
                đẳng cấp thương hiệu của bạn
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl mb-6 text-white tracking-wide">
                Liên kết nhanh
              </h3>
              <ul className="space-y-3">
                {[
                  { label: "Giới thiệu", href: "#about" },
                  { label: "Lợi ích chai thủy tinh", href: "#impact" },
                  { label: "Quy trình sản xuất", href: "#process" },
                  { label: "Liên hệ", href: "#contact" },
                ].map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-cyan-100/70 hover:text-cyan-100 transition-colors duration-200 inline-block hover:translate-x-1 transform"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-xl mb-6 text-white tracking-wide">
                Thông tin liên hệ
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <Globe className="w-4 h-4 text-cyan-200" />
                  </div>
                  <a
                    href="https://avariswater.com"
                    className="text-cyan-100/70 hover:text-cyan-100 transition-colors duration-200"
                  >
                    avariswater.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <Mail className="w-4 h-4 text-cyan-200" />
                  </div>
                  <a
                    href="mailto:info@avariswater.com"
                    className="text-cyan-100/70 hover:text-cyan-100 transition-colors duration-200"
                  >
                    info@avariswater.com
                  </a>
                </li>
                <li className="flex items-center gap-3 group">
                  <div className="w-8 h-8 bg-linear-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center group-hover:from-cyan-500/30 group-hover:to-blue-600/30 transition-all duration-300">
                    <Phone className="w-4 h-4 text-cyan-200" />
                  </div>
                  <a
                    href="tel:0868869910"
                    className="text-cyan-100/70 hover:text-cyan-100 transition-colors duration-200"
                  >
                    0868.869.910
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider with gradient */}
          <div className="h-px my-8 bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

          {/* Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-cyan-100/60 text-sm">
            <p>© {currentYear} AVARIS. All rights reserved.</p>
            <p>Designed with care for the environment 🌊</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
