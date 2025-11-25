import glassBottleWater from "@/assets/glass-bottle-water-droplets.jpg";
import { Droplet, Heart, Leaf, Recycle, Shield, Sparkles } from "lucide-react";
import Image from "next/image";
import {
  AnimatedImpactCard,
  AnimatedBenefitCard,
  AnimatedSectionHeader,
  AnimatedParallaxBackground,
  AnimatedBlobs,
} from "./animated";

const stats = [
  {
    number: "100%",
    label: "Tái sử dụng",
    description: "Chai thủy tinh vô hạn lần",
    icon: Recycle,
  },
  {
    number: "0%",
    label: "BPA & độc hại",
    description: "An toàn tuyệt đối",
    icon: Shield,
  },
  {
    number: "∞",
    label: "Giữ nguyên vị",
    description: "Chất lượng hoàn hảo",
    icon: Sparkles,
  },
  {
    number: "100%",
    label: "Thân thiện",
    description: "Bảo vệ môi trường",
    icon: Leaf,
  },
];

const benefits = [
  {
    icon: Recycle,
    title: "Tái sử dụng bền vững",
    description:
      "Chai thủy tinh có thể thu hồi và tái sử dụng vô số lần, giảm thiểu rác thải nhựa và bảo vệ hệ sinh thái biển",
  },
  {
    icon: Sparkles,
    title: "Chất lượng cao cấp",
    description:
      "Thủy tinh không thấm, không chứa hóa chất, giữ nguyên độ tinh khiết và hương vị tự nhiên của nước",
  },
  {
    icon: Shield,
    title: "An toàn tuyệt đối",
    description:
      "Không chứa BPA, phthalates hay các chất độc hại từ nhựa, đảm bảo sức khỏe cho người tiêu dùng",
  },
  {
    icon: Leaf,
    title: "Bảo vệ đại dương",
    description:
      "Giảm lượng nhựa thải ra biển, góp phần bảo vệ hệ sinh thái và tạo ra tương lai xanh bền vững",
  },
  {
    icon: Droplet,
    title: "Giữ nhiệt tốt",
    description:
      "Thủy tinh duy trì nhiệt độ nước lâu hơn, mang lại trải nghiệm uống nước tốt nhất",
  },
  {
    icon: Heart,
    title: "Trách nhiệm xã hội",
    description:
      "Thể hiện cam kết của doanh nghiệp với môi trường và sức khỏe cộng đồng",
  },
];

/**
 * ImpactSection - Server Component (SEO-optimized)
 * All animations are handled by client components
 */
export function ImpactSection() {
  return (
    <section className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-50 via-blue-50 to-cyan-100">
      {/* Background image with parallax - glass bottle */}
      <AnimatedParallaxBackground speed={0.2}>
        <div className="absolute inset-0 opacity-15">
          <Image
            src={glassBottleWater}
            alt="Glass bottle with water"
            className="w-full h-[120%] object-cover"
            quality={70}
            sizes="100vw"
            placeholder="blur"
          />
        </div>
      </AnimatedParallaxBackground>

      {/* Floating liquid glass blobs - CSS animations */}
      <AnimatedBlobs />

      {/* Water ripple circles - CSS only, no JS */}
      <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none">
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-cyan-400/30"
            style={{
              width: 300 + i * 150,
              height: 300 + i * 150,
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              animation: `water-ripple ${6 + i * 2}s ease-in-out infinite`,
              animationDelay: `${i * 1.5}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <AnimatedSectionHeader
          badge="Glass Bottle Impact"
          description="Chai thủy tinh tái sử dụng không chỉ là lựa chọn cao cấp mà còn là trách nhiệm với môi trường và sức khỏe cộng đồng"
        >
          Tại sao chọn <br />
          <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
            chai thủy tinh?
          </span>
        </AnimatedSectionHeader>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <AnimatedImpactCard
              key={index}
              index={index}
              number={stat.number}
              label={stat.label}
              description={stat.description}
            >
              <stat.icon className="w-full h-full" />
            </AnimatedImpactCard>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <AnimatedBenefitCard
              key={index}
              index={index}
              title={benefit.title}
              description={benefit.description}
            >
              <benefit.icon className="w-full h-full" />
            </AnimatedBenefitCard>
          ))}
        </div>
      </div>
    </section>
  );
}
