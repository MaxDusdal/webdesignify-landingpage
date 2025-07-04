"use client";

import {
  LucideIcon,
  ArrowRight,
  Mail,
  Server,
  Link,
  Cloud,
  Calendar,
  HelpCircle,
  DollarSign,
  CheckCircle,
  UserCheck,
  Lock,
  Monitor,
  Shield,
  TrendingUp,
  Globe,
  MessageCircle,
  BarChart2,
  Star,
  MapPin,
  MoreHorizontal,
  Search,
  Building2,
  FileText,
  PanelTop,
  ShoppingCart,
  Cpu,
  Layers,
  LineChart,
  FileEdit,
  Target,
  Smartphone,
  Link2,
  Zap,
  Wrench,
  MessageSquare,
} from "lucide-react";
import { motion } from "framer-motion";

// Define a map of icon names to icon components
const iconMap: Record<string, LucideIcon> = {
  ArrowRight,
  Mail,
  Server,
  Link,
  Cloud,
  Calendar,
  HelpCircle,
  DollarSign,
  CheckCircle,
  UserCheck,
  Lock,
  Monitor,
  Shield,
  TrendingUp,
  Globe,
  MessageCircle,
  BarChart2,
  Star,
  MapPin,
  MoreHorizontal,
  Search,
  Building2,
  FileText,
  PanelTop,
  ShoppingCart,
  Cpu,
  Layers,
  LineChart,
  FileEdit,
  Target,
  Smartphone,
  Link2,
  Zap,
  Wrench,
  MessageSquare,
};

interface SubService {
  icon: string; // Changed from LucideIcon to string
  title: string;
  description: string;
}

interface SubservicesProps {
  services: SubService[];
  animate?: boolean;
}

export default function Subservices({
  services,
  animate = true,
}: SubservicesProps) {
  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 70 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 + i * 0.05,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="w-full">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            // Get the icon component from the map using the icon name
            const Icon = iconMap[service.icon];

            return (
              <motion.div
                key={index}
                className="flex flex-col h-full rounded-lg p-6"
                initial={animate ? "hidden" : "visible"}
                animate="visible"
                variants={fadeInUp}
                custom={index}
              >
                <div className="mb-4 rounded-full bg-secondary erp-3 w-12 h-12 flex items-center justify-center">
                  {Icon && (
                    <Icon className="h-6 w-6 text-secondary-foreground" />
                  )}
                </div>

                <h3 className="text-2xl text-secondary font-bold mb-2">
                  {service.title}
                </h3>

                <p className="text-muted-foreground">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
