import YoutubeEmbed from '@/components/YoutubeEmbed';

interface ProductVideoSectionProps {
  className?: string;
  style?: React.CSSProperties;
}

export function ProductVideoSection({
  className,
  style,
}: ProductVideoSectionProps) {
  return (
    <section
      className={`py-16 bg-zion-blue-dark ${className ?? ''}`}
      style={style}
    >
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Product Demo</h2>
        <p className="text-zion-slate-light mb-8 max-w-2xl mx-auto">
          See Zion in action with a quick overview of our marketplace features.
        </p>
        <YoutubeEmbed
          videoId="dQw4w9WgXcQ"
          title="Zion Product Demo"
          poster="/images/blog-placeholder.svg"
        />
      </div>
    </section>
  );
}

export default ProductVideoSection;
