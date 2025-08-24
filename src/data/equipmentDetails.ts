export interface EquipmentSpecification {
  name: string;
  value: string;
}

export interface EquipmentDetails {
  id: string;
  name: string;
  description: string;
  brand: string;
  category: string;
  subcategory?: string;
  images: string[];
  price: number;
  currency: string;
  rating?: number;
  reviewCount?: number;
  inStock: boolean;
  expectedShipping?: string;
  specifications: EquipmentSpecification[];
  features: string[];
  warranty?: string;
  returnPolicy?: string;
}

export const EQUIPMENT_DETAILS: Record<string, EquipmentDetails> = {
  "pro-camera-x1000": {
    id: "pro-camera-x1000",
    name: "Pro Camera X1000",
    description: "Professional-grade cinema camera with 8K resolution, advanced color science, and exceptional low-light performance. Designed for feature films, high-end commercials, and documentary production. Includes comprehensive shooting modes, customizable settings, and industry-leading dynamic range.",
    brand: "CineTech",
    category: "Equipment",
    subcategory: "Cameras",
    images: [
      "/images/equipment-placeholder.svg",
      "/images/equipment-placeholder.svg",
      "/images/equipment-placeholder.svg"
    ],
    price: 6999,
    currency: "$",
    rating: 4.9,
    reviewCount: 87,
    inStock: true,
    expectedShipping: "3-5 business days",
    specifications: [
      { name: "Sensor", value: "Full-frame CMOS (36 x 24 mm)" },
      { name: "Resolution", value: "8K (8192 x 4320)" },
      { name: "Dynamic Range", value: "16+ stops" },
      { name: "ISO Range", value: "100-51,200 (expandable to 50-204,800)" },
      { name: "Recording Format", value: "RAW, ProRes, H.265" },
      { name: "Frame Rates", value: "Up to 120fps at 4K, 60fps at 8K" },
      { name: "Storage", value: "Dual CFexpress Type B" },
      { name: "Battery Life", value: "~3 hours continuous recording" },
      { name: "Weight", value: "4.5 lbs (body only)" },
      { name: "Connectivity", value: "HDMI 2.1, USB-C, Wi-Fi, Bluetooth" }
    ],
    features: [
      "Advanced 8K full-frame sensor",
      "16+ stops of dynamic range",
      "Internal RAW recording",
      "Dual native ISO technology",
      "5-axis in-body image stabilization",
      "AI-powered autofocus with subject tracking",
      "Weather-sealed magnesium alloy body",
      "Multiple assist tools: false color, waveform, vectorscope",
      "Anamorphic de-squeeze options",
      "Custom 3D LUT support"
    ],
    warranty: "2 years manufacturer warranty",
    returnPolicy: "30-day return policy for unused items in original packaging"
  },
  "audio-mixer-pro": {
    id: "audio-mixer-pro",
    name: "AudioMixer Pro Digital Mixing Console",
    description: "Professional digital mixing console designed for studio recording, live sound mixing, and post-production applications. Features 32 channels, premium preamps, extensive routing options, and intuitive control interface.",
    brand: "AudioTech",
    category: "Equipment",
    subcategory: "Audio",
    images: [
      "/images/equipment-placeholder.svg",
      "/images/equipment-placeholder.svg"
    ],
    price: 3499,
    currency: "$",
    rating: 4.8,
    reviewCount: 42,
    inStock: true,
    expectedShipping: "5-7 business days",
    specifications: [
      { name: "Channels", value: "32 input channels" },
      { name: "Faders", value: "16 motorized faders" },
      { name: "Preamps", value: "24 premium mic preamps" },
      { name: "Sampling Rate", value: "Up to 96kHz" },
      { name: "EQ", value: "4-band parametric per channel" },
      { name: "Dynamics", value: "Compressor/Gate on all channels" },
      { name: "Effects", value: "8 stereo effects processors" },
      { name: "Recording", value: "64-channel USB interface" },
      { name: "Weight", value: "32 lbs" }
    ],
    features: [
      "32-channel digital mixer with 24 premium mic preamps",
      "16 motorized faders with touch-sensitive control",
      "7-inch high-resolution color touchscreen",
      "Comprehensive routing matrix",
      "Onboard multi-track recording to USB",
      "iOS and Android remote control app",
      "Configurable user layers",
      "8 DCA groups and 6 mute groups",
      "Integrated WiFi for wireless control"
    ],
    warranty: "3 years manufacturer warranty",
    returnPolicy: "21-day return policy for items in original condition"
  }
};
