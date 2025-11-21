import { motion, useScroll, useTransform } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Droplets, Award, Shield, Leaf, Sparkles, Users } from "lucide-react";
import oceanWavesUnderwater from "@/assets/ocean-water-waves-underwater.jpg";

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

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax effect for background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-15%"]);

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-blue-900"
    >
      {/* Underwater background image with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-30">
          <img
            src={oceanWavesUnderwater}
            alt="Underwater waves"
            className="w-full h-[120%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/60 via-blue-950/80 to-blue-900/60" />
      </motion.div>

      {/* Floating liquid glass blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -90, 0],
            y: [0, 70, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 left-1/3 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/20 to-cyan-400/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Animated water caustics effect */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-full bg-gradient-to-b from-transparent via-cyan-200/30 to-transparent"
            style={{
              left: `${10 + i * 12}%`,
              transform: `rotate(${5 + i * 2}deg)`,
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
              x: [-15, 15, -15],
            }}
            transition={{
              duration: 6 + i * 1.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100"
          >
            <Droplets className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              About AVARIS
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            Giải pháp nước uống <br />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              cao cấp & bền vững
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-cyan-100/90 max-w-3xl mx-auto leading-relaxed"
          >
            AVARIS cung cấp dịch vụ nước uống đóng chai thủy tinh cao cấp, kết
            hợp hoàn hảo giữa chất lượng vượt trội và trách nhiệm với môi trường
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-400/30 to-blue-500/30 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Glass card */}
              <div className="glass-dark rounded-[2rem] p-8 relative overflow-hidden h-full border border-white/10">
                {/* Top light reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-gradient-to-b from-white/5 to-transparent rounded-t-[2rem] pointer-events-none" />

                {/* Shimmer on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent -translate-x-full opacity-0 group-hover:opacity-100"
                  animate={{ x: ["0%", "200%"] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatDelay: 2,
                  }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent" />
                    <feature.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-4 text-white">{feature.title}</h3>
                <p className="text-cyan-100/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24"
        >
          <div className="relative max-w-5xl mx-auto">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 rounded-[3rem] blur-3xl" />

            {/* Glass card */}
            <div className="relative glass-dark rounded-[3rem] p-12 md:p-16 overflow-hidden border border-white/10">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-white/10 to-transparent rounded-t-[3rem] pointer-events-none" />

              {/* Stats grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
                {[
                  { value: "7+", label: "Năm kinh nghiệm" },
                  { value: "500+", label: "Đối tác tin tưởng" },
                  { value: "100%", label: "Cam kết chất lượng" },
                  { value: "24/7", label: "Hỗ trợ tận tâm" },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={isInView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                    className="text-center"
                  >
                    <div className="text-5xl md:text-6xl mb-3 bg-gradient-to-br from-cyan-300 via-blue-300 to-cyan-400 bg-clip-text text-transparent">
                      {stat.value}
                    </div>
                    <div className="text-cyan-100/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
