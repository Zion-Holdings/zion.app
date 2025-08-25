import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  className?: string;
}

export function ServiceCard({ title, description, icon, className = '' }: ServiceCardProps) {
  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg hover:scale-105 ${className}`}>
      <CardHeader>
        <div className="text-center">
          <div className="text-4xl mb-4">{icon}</div>
          <CardTitle className="text-xl font-semibold text-white">
            {title}
          </CardTitle>
          <CardDescription className="mt-2 text-gray-300">
            {description}
          </CardDescription>
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-center">
          <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
            Learn More
          </button>
        </div>
      </CardContent>
    </Card>
  );
}