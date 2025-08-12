export default function LoaderOverlay() {
  return (
    <div
      data-testid="loader-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
    >
      {/*
        Use a simple CSS spinner so the overlay still works even if lucide-react
        icons fail to load. This prevents a blank black screen when dependencies
        are missing or scripts fail to load.
      */}
      <div className="h-12 w-12 border-4 border-primary border-t-transparent rounded-full animate-spin" />
    </div>
  );
}
