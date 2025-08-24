type Manifesto = {
  title: string;
  videoProvider: 'youtube' | 'ipfs';
  videoIdOrCid: string;
  text: string;
};

export default function WelcomeManifesto({ manifesto }: { manifesto: Manifesto }) {
  return (
    <section className="grid md:grid-cols-2 gap-6 items-start">
      <div className="aspect-video w-full rounded-lg overflow-hidden border">
        {manifesto.videoProvider === 'youtube' ? (
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${manifesto.videoIdOrCid}`}
            title={manifesto.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video className="w-full h-full" controls src={`https://ipfs.io/ipfs/${manifesto.videoIdOrCid}`} />
        )}
      </div>
      <div className="prose dark:prose-invert max-w-none">
        <h1>{manifesto.title}</h1>
        <p>{manifesto.text}</p>
      </div>
    </section>
  );
}