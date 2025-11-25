import underwaterLightRays from "@/assets/underwater-light-rays.jpg";
import {
  CheckCircle2,
  Droplet,
  Filter,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";
import Image from "next/image";
import {
  AnimatedProcessStep,
  AnimatedProcessTimeline,
  AnimatedCertBadge,
  AnimatedParallaxBackground,
  AnimatedBlobs,
  AnimatedSection,
} from "./animated";

const processSteps = [
  {
    icon: Droplet,
    title: "Nguồn nước",
    description: "Lựa chọn nguồn nước sạch, đạt tiêu chuẩn",
  },
  {
    icon: Filter,
    title: "Lọc & Xử lý",
    description: "Quy trình lọc hiện đại, ISO 9001 & HACCP",
  },
  {
    icon: Package,
    title: "Đóng chai",
    description: "Đóng chai tự động trong môi trường vô trùng",
  },
  {
    icon: CheckCircle2,
    title: "Kiểm tra",
    description: "Kiểm soát chất lượng nghiêm ngặt",
  },
  {
    icon: Truck,
    title: "Vận chuyển",
    description: "Giao hàng đến tận nơi, đúng hẹn",
  },
  {
    icon: RotateCcw,
    title: "Thu hồi",
    description: "Thu hồi chai rỗng để tái sử dụng",
  },
];

/**
 * ProcessSection - Server Component (SEO-optimized)
 * All animations are handled by client components
 */
export function ProcessSection() {
  return (
    <section
      id="process"
      className="py-32 relative overflow-hidden bg-linear-to-br from-blue-950 via-cyan-950 to-blue-900"
    >
      {/* Underwater light rays background with parallax */}
      <AnimatedParallaxBackground speed={0.2}>
        <div className="absolute inset-0 opacity-25">
          <Image
            src={underwaterLightRays}
            alt="Underwater light rays"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-cyan-950/80 to-blue-900/70" />
      </AnimatedParallaxBackground>

      {/* Floating liquid glass blobs - CSS animations */}
      <AnimatedBlobs />

      {/* Flowing water effect - CSS animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-15 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px h-full bg-linear-to-b from-transparent via-cyan-300/40 to-transparent"
            style={{
              left: `${15 + i * 14}%`,
              animation: `water-flow ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 0.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-24">
          <div className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100">
            <Droplet className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              Our Process
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            Quy trình sản xuất <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              & vận hành bền vững
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90 max-w-3xl mx-auto">
            Từ nguồn nước đến tay khách hàng - Chu trình bền vững
          </p>
        </AnimatedSection>

        {/* Process Timeline */}
        <div className="max-w-7xl mx-auto mb-24">
          {/* Steps Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative">
            {/* Flowing progress line - Desktop */}
            <AnimatedProcessTimeline />

            {processSteps.map((step, index) => (
              <AnimatedProcessStep
                key={index}
                index={index}
                title={step.title}
                description={step.description}
              >
                <step.icon className="w-full h-full" />
              </AnimatedProcessStep>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <AnimatedSection delay={1.8}>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute -inset-4 bg-linear-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 rounded-[3rem] blur-3xl" />

              {/* Glass card */}
              <div className="glass-dark rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
                {/* Top reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-[3rem] pointer-events-none" />

                <div className="relative z-10 text-center">
                  <div className="w-20 h-20 mx-auto mb-8 glass-button rounded-2xl flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-cyan-300" />
                  </div>

                  <h4 className="text-3xl md:text-4xl mb-6 text-white">
                    Chứng nhận chất lượng quốc tế
                  </h4>

                  <p className="text-lg mb-10 max-w-2xl mx-auto text-cyan-100/80">
                    Được công nhận bởi các tổ chức chứng nhận hàng đầu thế giới
                  </p>

                  <div className="flex flex-wrap justify-center gap-6 items-center">
                    {[
                      { name: "ISO 9001", desc: "Quản lý chất lượng" },
                      { name: "HACCP", desc: "An toàn thực phẩm" },
                    ].map((cert, i) => (
                      <AnimatedCertBadge
                        key={i}
                        index={i}
                        name={cert.name}
                        description={cert.desc}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
