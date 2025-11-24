"use client";

import underwaterLightRays from "@/assets/underwater-light-rays.jpg";
import {
  CheckCircle2,
  Droplet,
  Filter,
  Package,
  RotateCcw,
  Truck,
} from "lucide-react";
import { motion, useInView, useScroll, useTransform } from "motion/react";
import Image from "next/image";
import { useRef } from "react";

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

export function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  // Parallax scrolling
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section
      ref={ref}
      id="process"
      className="py-32 relative overflow-hidden bg-linear-to-br from-blue-950 via-cyan-950 to-blue-900"
    >
      {/* Underwater light rays background with parallax */}
      <motion.div className="absolute inset-0" style={{ y: bgY }}>
        <div className="absolute inset-0 opacity-25">
          <Image
            src={underwaterLightRays}
            alt="Underwater light rays"
            className="w-full h-[120%] object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-b from-blue-950/70 via-cyan-950/80 to-blue-900/70" />
      </motion.div>

      {/* Floating liquid glass blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 90, 0],
            y: [0, -70, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-10 right-1/3 w-[500px] h-[500px] bg-linear-to-br from-cyan-400/15 to-blue-500/15 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            x: [0, -80, 0],
            y: [0, 90, 0],
            scale: [1, 1.4, 1],
          }}
          transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-1/4 w-[600px] h-[600px] bg-linear-to-br from-blue-500/15 to-cyan-400/10 rounded-full blur-[140px]"
        />
      </div>

      {/* Flowing water effect - animated lines */}
      <div className="absolute inset-0 overflow-hidden opacity-15">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-px h-full bg-linear-to-b from-transparent via-cyan-300/40 to-transparent"
            style={{
              left: `${15 + i * 14}%`,
            }}
            animate={{
              opacity: [0.2, 0.5, 0.2],
              y: ["-100%", "100%"],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.5,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-3 glass-button px-8 py-4 rounded-full mb-10 text-cyan-100"
          >
            <Droplet className="w-5 h-5" />
            <span className="text-sm tracking-[0.3em] uppercase">
              Our Process
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 text-white">
            Quy trình sản xuất <br />
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              & vận hành bền vững
            </span>
          </h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl text-cyan-100/90 max-w-3xl mx-auto"
          >
            Từ nguồn nước đến tay khách hàng - Chu trình bền vững
          </motion.p>
        </motion.div>

        {/* Process Timeline */}
        <div className="max-w-7xl mx-auto mb-24">
          {/* Steps Container */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 relative">
            {/* Flowing progress line - Desktop */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-1 z-0">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : {}}
                transition={{ duration: 2, delay: 0.5 }}
                className="h-full origin-left relative overflow-hidden"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(34,211,238,0.3) 0%, rgba(6,182,212,0.8) 50%, rgba(34,211,238,0.3) 100%)",
                }}
              >
                {/* Flowing animation */}
                <motion.div
                  className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-300/50 to-transparent"
                  animate={{
                    x: ["-100%", "200%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </motion.div>
            </div>

            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.15 }}
                className="flex flex-col items-center relative z-10"
              >
                {/* Icon Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.8 + index * 0.15,
                    type: "spring",
                  }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="relative mb-6"
                >
                  {/* Glass outer ring */}
                  <div className="relative w-32 h-32 glass-dark rounded-full p-1 shadow-2xl border border-white/10">
                    {/* Inner gradient circle with icon */}
                    <div className="w-full h-full rounded-full bg-linear-to-br from-cyan-500 to-blue-600 flex items-center justify-center relative overflow-hidden">
                      {/* Top reflection */}
                      <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/30 to-transparent rounded-t-full" />
                      <step.icon
                        className="w-12 h-12 text-white relative z-10"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Text Content */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.6, delay: 1 + index * 0.15 }}
                  className="text-center"
                >
                  <h3 className="text-lg mb-2 text-white">{step.title}</h3>
                  <p className="text-sm leading-relaxed text-cyan-100/80">
                    {step.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Certifications Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative">
            {/* Outer glow */}
            <div className="absolute -inset-4 bg-linear-to-r from-cyan-400/20 via-blue-500/20 to-cyan-400/20 rounded-[3rem] blur-3xl" />

            {/* Glass card */}
            <div className="glass-dark rounded-[3rem] p-12 md:p-16 relative overflow-hidden border border-white/10">
              {/* Top reflection */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-linear-to-b from-white/10 to-transparent rounded-t-[3rem] pointer-events-none" />

              <div className="relative z-10 text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2, type: "spring" }}
                  className="w-20 h-20 mx-auto mb-8 glass-button rounded-2xl flex items-center justify-center"
                >
                  <CheckCircle2 className="w-10 h-10 text-cyan-300" />
                </motion.div>

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
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : {}}
                      transition={{
                        duration: 0.5,
                        delay: 2.2 + i * 0.1,
                        type: "spring",
                      }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="glass-button rounded-2xl px-10 py-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/10"
                    >
                      <p className="text-2xl mb-2 text-cyan-200">{cert.name}</p>
                      <p className="text-sm text-cyan-100/70">{cert.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
