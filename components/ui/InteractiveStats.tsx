import React, { useState, useEffect, useRef } from 'react';

interface Stat {
  value: number;
  label: string;
  icon: string;
  suffix?: string;
  prefix?: string;
  color?: 'blue' | 'purple' | 'green' | 'pink';
}

interface InteractiveStatsProps {
  stats: Stat[];
  className?: string;
  animated?: boolean;
  delay?: number;
}

const InteractiveStats: React.FC<InteractiveStatsProps> = ({
  stats,
  className = '',
  animated = true,
  delay = 0
}) => {
  const [counters, setCounters] = useState<number[]>(stats.map(() => 0));
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || !animated) return;

    const timer = setTimeout(() => {
      const intervals = stats.map((stat, index) => {
        const duration = 2000; // 2 seconds
        const steps = 60;
        const increment = stat.value / steps;
        const stepDuration = duration / steps;

        return setInterval(() => {
          setCounters(prev => {
            const newCounters = [...prev];
            if (newCounters[index] < stat.value) {
              newCounters[index] = Math.min(newCounters[index] + increment, stat.value);
            }
            return newCounters;
          });
        }, stepDuration);
      });

      return () => {
        intervals.forEach(interval => clearInterval(interval));
      };
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, animated, stats, delay]);

  const colorClasses = {
    blue: 'text-neon-blue',
    purple: 'text-neon-purple',
    green: 'text-neon-green',
    pink: 'text-neon-pink'
  };

  return (
    <div ref={ref} className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ${className}`}>
      {stats.map((stat, index) => (
        <div
          key={index}
          className="text-center group"
        >
          <div className="relative">
            {/* Icon */}
            <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
              {stat.icon}
            </div>
            
            {/* Animated Counter */}
            <div className={`text-4xl lg:text-5xl font-bold mb-2 ${colorClasses[stat.color || 'blue']}`}>
              {stat.prefix || ''}
              {animated ? Math.floor(counters[index]) : stat.value}
              {stat.suffix || ''}
            </div>
            
            {/* Label */}
            <div className="text-gray-300 text-lg font-medium">
              {stat.label}
            </div>
            
            {/* Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-purple/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InteractiveStats;
