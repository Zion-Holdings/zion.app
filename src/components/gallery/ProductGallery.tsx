import React, { useState, Suspense } from 'react';
import Image from 'next/image'; // Import next/image
import { OptimizedImage } from '@/components/ui/OptimizedImage';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ReactPlayer = React.lazy(() => import('react-player'));
const ModelViewer = React.lazy(async () => {
  await import('@google/model-viewer');
  return {
    default: (props: any) => (
      React.createElement('model-viewer', props)
    ),
  };
});

interface ProductGalleryProps {
  images: string[];
  videoUrl?: string;
  modelUrl?: string;
}

export function ProductGallery({ images, videoUrl, modelUrl }: ProductGalleryProps) {
  const [selected, setSelected] = useState(0);
  const [zoomOpen, setZoomOpen] = useState(false);
  const [zoomed, setZoomed] = useState(false);
  const poster = images[0];

  return (
    <Dialog open={zoomOpen} onOpenChange={(o) => { setZoomOpen(o); if (!o) setZoomed(false); }}>
      <Tabs defaultValue="images" className="w-full">
      <TabsList className="grid grid-cols-3 bg-zion-blue-dark border border-zion-blue-light">
        <TabsTrigger value="images">Images</TabsTrigger>
        {videoUrl && <TabsTrigger value="video">Video</TabsTrigger>}
        {modelUrl && <TabsTrigger value="model">3D</TabsTrigger>}
      </TabsList>

      <TabsContent value="images" className="pt-4">
        <div className="aspect-video w-full relative">
          <DialogTrigger asChild>
            <OptimizedImage
              src={images[selected] || images[0] || ''}
              alt={`Product image ${selected + 1}`}
              className="w-full h-full object-contain bg-zion-blue-light/10 p-4 cursor-zoom-in"
              fill
            />
          </DialogTrigger>
        </div>
        {images.length > 1 && (
          <div className="flex p-4 gap-2 overflow-x-auto">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => setSelected(idx)}
                className={`relative w-20 h-20 flex-shrink-0 cursor-pointer rounded overflow-hidden border-2 ${idx === selected ? 'border-zion-purple' : 'border-transparent'}`}
              >
                <OptimizedImage
                  src={img}
                  alt={`Thumbnail image ${idx + 1}`}
                  className="w-full h-full object-cover"
                  fill
                />
              </div>
            ))}
          </div>
        )}
      </TabsContent>

      {videoUrl && (
        <TabsContent value="video" className="pt-4">
          <AspectRatio ratio={16 / 9} className="relative bg-black"> {/* Added relative and bg for fallback */}
            <Suspense
              fallback={
                poster ? (
                  <Image
                    src={poster}
                    alt="Video preview"
                    fill
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                ) : <div className="w-full h-full bg-muted animate-pulse" />
              }
            >
              <ReactPlayer url={videoUrl} width="100%" height="100%" controls />
            </Suspense>
          </AspectRatio>
        </TabsContent>
      )}

      {modelUrl && (
        <TabsContent value="model" className="pt-4">
          <AspectRatio ratio={16 / 9} className="relative bg-black"> {/* Added relative and bg for fallback */}
            <Suspense
              fallback={
                poster ? (
                  <Image
                    src={poster}
                    alt="3D model preview"
                    fill
                    style={{ objectFit: "cover" }}
                    priority={false}
                  />
                ) : <div className="w-full h-full bg-muted animate-pulse" />
              }
            >
              <ModelViewer src={modelUrl} alt="3d model" camera-controls style={{ width: '100%', height: '100%' }} />
            </Suspense>
          </AspectRatio>
        </TabsContent>
      )}
    </Tabs>
    {images.length > 0 && (
      <DialogContent className="max-w-3xl p-0">
        {/* For zoomed view, ensure parent has defined dimensions if using fill */}
        <div
          className={`w-full h-full overflow-auto ${zoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'} relative`} // Added relative for Image fill
          onClick={() => setZoomed(!zoomed)}
          style={{ height: '80vh' }} // Example height, adjust as needed for modal
        >
          <Image
            src={images[selected] || images[0] || ""}
            alt="Zoomed view"
            fill
            style={{ objectFit: "contain", transform: zoomed ? 'scale(1.5)' : 'scale(1)' }} // Apply transform via style
            className={`transition-transform duration-300`} // Smooth transition
          />
        </div>
      </DialogContent>
    )}
    </Dialog>
  );
}
