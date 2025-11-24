"use client";

import glassBottleWater from "@/assets/glass-bottle-water-droplets.jpg";
import { Droplet, Heart, Leaf, Recycle, Shield, Sparkles } from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

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

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax scrolling for background
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      className="py-32 relative overflow-hidden bg-linear-to-br from-cyan-50 via-blue-50 to-cyan-100"
    >
      {/* Background image with parallax - glass bottle */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-15">
          <Image
            src={glassBottleWater}
            alt="Glass bottle with water"
            className="w-full h-[120%] object-cover"
          />
        </div>
      </motion.div>

      {/* Floating liquid glass blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 80, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-linear-to-br from-cyan-300/20 to-blue-400/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -70, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-linear-to-br from-blue-400/20 to-cyan-300/15 rounded-full blur-[140px]"
        />
      </div>

      {/* Water ripple circles */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-cyan-400/30"
            style={{
              width: 300 + i * 150,
              height: 300 + i * 150,
              left: "50%",
              top: "50%",
              x: "-50%",
              y: "-50%",
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.4, 0.1, 0.4],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
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
          <p className="tracking-[0.3em] uppercase mb-8 text-sm text-cyan-600">
            Glass Bottle Impact
          </p>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-cyan-950">
            Tại sao chọn <br />
            <span className="bg-linear-to-r from-cyan-600 via-blue-600 to-cyan-700 bg-clip-text text-transparent">
              chai thủy tinh?
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-cyan-800 max-w-3xl mx-auto leading-relaxed"
          >
            Chai thủy tinh tái sử dụng không chỉ là lựa chọn cao cấp mà còn là
            trách nhiệm với môi trường và sức khỏe cộng đồng
          </motion.p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, y: 40 }}
              animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.1,
                type: "spring",
              }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="relative group"
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/40 to-blue-500/40 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Glass card */}
              <div className="glass-card rounded-4xl p-8 relative overflow-hidden h-full">
                {/* Top reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/60 to-transparent rounded-t-4xl pointer-events-none" />

                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="relative mb-6"
                >
                  <div className="w-14 h-14 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-xl relative overflow-hidden">
                    <div className="absolute inset-0 bg-linear-to-br from-white/30 to-transparent" />
                    <stat.icon className="w-7 h-7 text-white relative z-10" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="text-center relative z-10">
                  <div className="text-5xl mb-3 bg-linear-to-br from-cyan-700 to-blue-700 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-lg mb-2 text-cyan-900">{stat.label}</div>
                  <div className="text-sm text-cyan-700">
                    {stat.description}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="relative group"
            >
              {/* Hover glow */}
              <div className="absolute -inset-1 bg-linear-to-br from-cyan-400/30 to-blue-500/30 rounded-4xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

              {/* Glass card */}
              <div className="glass-card rounded-4xl p-8 relative overflow-hidden h-full">
                {/* Top reflection */}
                <div className="absolute top-0 left-0 right-0 h-1/3 bg-linear-to-b from-white/60 to-transparent rounded-t-4xl pointer-events-none" />

                {/* Shimmer */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                  animate={{ x: ["0%", "200%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                />

                {/* Icon */}
                <div className="relative mb-6">
                  <motion.div
                    className="w-16 h-16 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent" />
                    <benefit.icon className="w-8 h-8 text-white relative z-10" />
                  </motion.div>
                </div>

                {/* Content */}
                <h3 className="text-2xl mb-4 relative z-10 text-cyan-950">
                  {benefit.title}
                </h3>
                <p className="leading-relaxed relative z-10 text-cyan-800">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
