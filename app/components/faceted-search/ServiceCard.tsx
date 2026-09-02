"use client";

import React from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

interface Service {
  id: string;
  title: string;
  description: string;
  industry: string;
  category: string;
  useCase: string;
  icon?: string;
}

interface ServiceCardProps {
  service: Service;
  onClick: () => void;
}

export default function ServiceCard({ service, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer group bg-slate-800/50 rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/30 transition-all duration-200 hover:shadow-lg hover:shadow-purple-500/10"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center flex-shrink-0">
          <span className="text-white font-bold text-xl">{service.title[0]}</span>
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-400 transition-colors">
            {service.title}
          </h3>
          <p className="text-slate-400 text-sm mt-1 line-clamp-2">{service.description}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <span className="px-2 py-1 text-xs rounded-full bg-blue-500/20 text-blue-300">
              {service.category}
            </span>
            <span className="px-2 py-1 text-xs rounded-full bg-green-500/20 text-green-300">
              {service.industry}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}