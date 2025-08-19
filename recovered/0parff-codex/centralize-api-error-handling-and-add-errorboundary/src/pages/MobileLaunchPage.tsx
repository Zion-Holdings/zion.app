
import React from "react";
import { SEO } from "@/components/SEO";
import { MobileLaunchHero } from "@/components/mobile-app/MobileLaunchHero";
import { MobileFeatureShowcase } from "@/components/mobile-app/MobileFeatureShowcase";
import { AppTestimonials } from "@/components/mobile-app/AppTestimonials";
import { MobileEmailCapture } from "@/components/mobile-app/MobileEmailCapture";
import { AppStoreBanner } from "@/components/mobile-app/AppStoreBanner";
import { QrCodeDownload } from "@/components/mobile-app/QrCodeDownload";
import { CommunityTrust } from "@/components/mobile-app/CommunityTrust";

const MobileLaunchPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Get the Zion App - AI Marketplace in Your Pocket"
        description="Download the Zion mobile app for iOS and Android. Hire AI talent, find tech jobs, and manage projects on the go."
        keywords="Zion mobile app, AI talent app, tech job app, project management app, iOS app, Android app"
        canonical="/mobile-launch"
      />
      
      <MobileLaunchHero />
      
      <MobileFeatureShowcase />
      
      <QrCodeDownload />
      
      <CommunityTrust />
      
      <AppTestimonials />

      <MobileEmailCapture />

      <AppStoreBanner />
    </>
  );
};

export default MobileLaunchPage;
