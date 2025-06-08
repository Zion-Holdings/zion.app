export const initGA = () => {
  const measurementId = process.env.NEXT_PUBLIC_GA_ID;
  if (!measurementId) {
    console.error("VITE_GA_ID is not defined. GA4 initialization skipped.");
    return;
  }

  const doNotTrack = navigator.doNotTrack;
  if (doNotTrack === "1" || doNotTrack === "yes") {
    console.log("Do Not Track is enabled. GA4 initialization skipped.");
    return;
  }

  // Initialize GA4
  window.gtag('config', measurementId);
};

export const fireEvent = (eventName: string, eventParams?: Record<string, any>) => {
  if (!window.gtag) {
    console.error("gtag is not defined. Make sure GA4 is initialized.");
    return;
  }
  window.gtag('event', eventName, eventParams);
};
