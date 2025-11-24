import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import {
  organizationSchema,
  websiteSchema,
  localBusinessSchema,
} from "@/lib/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0e7490" },
    { media: "(prefers-color-scheme: dark)", color: "#164e63" },
  ],
};

export const metadata: Metadata = {
  title: {
    default: "AVARIS - Nước Uống Đóng Chai Thủy Tinh Cao Cấp & Bền Vững",
    template: "%s | AVARIS",
  },
  description:
    "AVARIS cung cấp dịch vụ nước uống đóng chai thủy tinh cao cấp, kết hợp hoàn hảo giữa chất lượng vượt trội và trách nhiệm với môi trường. Cam kết 100% chai thủy tinh tái sử dụng, giảm thiểu rác thải nhựa đại dương.",
  keywords: [
    "nước uống đóng chai",
    "chai thủy tinh",
    "nước khoáng cao cấp",
    "nước uống bền vững",
    "AVARIS",
    "chai thủy tinh tái sử dụng",
    "nước uống thân thiện môi trường",
    "dịch vụ nước uống",
    "tùy chỉnh thương hiệu",
    "nước uống an toàn",
    "ISO 9001",
    "HACCP",
  ],
  authors: [{ name: "AVARIS" }],
  creator: "AVARIS",
  publisher: "AVARIS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://avariswater.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AVARIS - Nước Uống Đóng Chai Thủy Tinh Cao Cấp & Bền Vững",
    description:
      "AVARIS cung cấp dịch vụ nước uống đóng chai thủy tinh cao cấp, kết hợp hoàn hảo giữa chất lượng vượt trội và trách nhiệm với môi trường.",
    url: "https://avariswater.com",
    siteName: "AVARIS",
    locale: "vi_VN",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AVARIS - Nước Uống Đóng Chai Thủy Tinh Cao Cấp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AVARIS - Nước Uống Đóng Chai Thủy Tinh Cao Cấp & Bền Vững",
    description:
      "Cam kết 100% chai thủy tinh tái sử dụng, giảm thiểu rác thải nhựa đại dương.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with actual verification code
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
