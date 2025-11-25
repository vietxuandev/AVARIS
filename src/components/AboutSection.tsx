import oceanWavesUnderwater from "@/assets/ocean-water-waves-underwater.jpg";
import { Award, Droplets, Leaf, Shield, Sparkles, Users } from "lucide-react";
import Image from "next/image";
import {
  AnimatedBackground,
  AnimatedBlobs,
  AnimatedCaustics,
  AnimatedFeatureCard,
  AnimatedIcon,
  AnimatedSection,
  AnimatedStat,
} from "./animated";

const features = [
  {
    icon: Droplets,
    title: "Trách nhiệm môi trường",
    description:
      "Cam kết 100% chai thủy tinh tái sử dụng, giảm thiểu rác thải nhựa đại dương",
  },
  {
    icon: Award,
    title: "Chất lượng đẳng cấp",
    description:
      "Đạt chuẩn ISO 9001 & HACCP, đảm bảo nước uống tinh khiết tuyệt đối",
  },
  {
    icon: Shield,
    title: "An toàn sức khỏe",
    description:
      "0% BPA và hóa chất độc hại, an toàn tuyệt đối cho người tiêu dùng",
  },
  {
    icon: Leaf,
    title: "Bảo vệ đại dương",
    description: "Góp phần giảm thiểu ô nhiễm nhựa, bảo vệ hệ sinh thái biển",
  },
  {
    icon: Sparkles,
    title: "Tùy chỉnh thương hiệu",
    description:
      "Thiết kế chai theo yêu cầu, in logo và thông điệp thương hiệu của bạn",
  },
  {
    icon: Users,
    title: "Đối tác đáng tin cậy",
    description: "Đồng hành cùng doanh nghiệp xây dựng hình ảnh bền vững",
  },
];

const STATS = [
  { end: 7, label: "Năm kinh nghiệm", suffix: "+" },
  { end: 500, label: "Đối tác tin tưởng", suffix: "+" },
  { end: 100, label: "Cam kết chất lượng", suffix: "%" },
  { end: 24, label: "Hỗ trợ tận tâm", suffix: "/7" },
];

/**
 * AboutSection - Server Component (SEO-friendly)
 * All animations are handled by client components
 */
export function AboutSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-950 via-blue-950 to-blue-900">
      {/* Underwater background image with parallax */}
      <AnimatedBackground className="absolute inset-0">
        <div className="absolute inset-0 opacity-30">
          <Image
            src={oceanWavesUnderwater}
            alt="Underwater waves"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-cyan-950/60 via-blue-950/80 to-blue-900/60" />
      </AnimatedBackground>

      {/* Floating liquid glass blobs */}
      <AnimatedBlobs />

      {/* Animated water caustics effect */}
      <AnimatedCaustics className="absolute inset-0 opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100">
            <Droplets className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              About AVARIS
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            Giải pháp nước uống <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              cao cấp & bền vững
            </span>
          </h2>

          <p className="text-xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed">
            AVARIS cung cấp dịch vụ nước uống đóng chai thủy tinh cao cấp, kết
            hợp hoàn hảo giữa chất lượng vượt trội và trách nhiệm với môi trường
          </p>
        </AnimatedSection>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <AnimatedFeatureCard key={index} index={index}>
              {/* Icon */}
              <AnimatedIcon>
                <feature.icon className="w-full h-full" />
              </AnimatedIcon>

              {/* Content */}
              <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
              <p className="text-cyan-100/80 leading-relaxed">
                {feature.description}
              </p>
            </AnimatedFeatureCard>
          ))}
        </div>

        {/* Stats CTA */}
        <AnimatedSection className="mt-24" delay={0.8}>
          <div className="relative max-w-5xl mx-auto">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 rounded-[3rem] blur-3xl" />

            {/* Glass card */}
            <div className="relative glass-dark rounded-[3rem] p-12 md:p-16 overflow-hidden border border-white/10">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-[3rem] pointer-events-none" />

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {STATS.map((stat, i) => (
                  <AnimatedStat
                    key={i}
                    end={stat.end}
                    suffix={stat.suffix}
                    label={stat.label}
                    index={i}
                  />
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
