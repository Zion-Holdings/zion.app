interface CardProps {
  title: string;
  description: string;
  href?: string;
  className?: string;
}

export default function Card({ title, description, href, className = '' }: CardProps) {
  const CardContent = (
    <div className={`bg-white/5 border border-white/10 rounded-lg p-6 hover:border-cyan-400/30 transition-all ${className}`}>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      {href && (
        <a 
          href={href}
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          Learn more <span aria-hidden>→</span>
        </a>
      )}
    </div>
  );
  
  if (href) {
    return (
      <a href={href} className="block hover:scale-105 transition-transform">
        {CardContent}
      </a>
    );
  }
  
  return CardContent;
}