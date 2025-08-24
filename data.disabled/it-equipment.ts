export type Availability = {
  buy: boolean;
  rent: boolean;
};

export type Product = {
  id: string;
  name: string;
  category: 'Laptop' | 'Monitor' | 'Router' | 'Server' | 'Switch' | 'Printer' | 'UPS';
  specs: string[];
  availability: Availability;
  priceBuyUsd?: number; // one-time buy price
  priceRentUsdPerMonth?: number; // monthly rent price
  image: string; // path under public
};

export const products: Product[] = [
  {
    id: 'laptop-pro-15',
    name: 'Pro Laptop 15"',
    category: 'Laptop',
    specs: ['Intel i7', '16GB RAM', '512GB SSD', 'Wi‑Fi 6'],
    availability: { buy: true, rent: true },
    priceBuyUsd: 1499,
    priceRentUsdPerMonth: 69,
    image: '/images/it/laptop.svg',
  },
  {
    id: 'monitor-27-uhd',
    name: '27" 4K UHD Monitor',
    category: 'Monitor',
    specs: ['3840×2160', 'IPS', 'HDR10', 'USB‑C'],
    availability: { buy: true, rent: false },
    priceBuyUsd: 329,
    image: '/images/it/monitor.svg',
  },
  {
    id: 'router-ax6000',
    name: 'AX6000 Wi‑Fi 6 Router',
    category: 'Router',
    specs: ['802.11ax', '8× LAN', 'MU‑MIMO', 'OFDMA'],
    availability: { buy: true, rent: true },
    priceBuyUsd: 249,
    priceRentUsdPerMonth: 19,
    image: '/images/it/router.svg',
  },
  {
    id: 'rack-server-g12',
    name: 'Rack Server G12',
    category: 'Server',
    specs: ['2× Xeon Silver', '64GB RAM', '4× 2TB SSD', 'iDRAC'],
    availability: { buy: true, rent: true },
    priceBuyUsd: 4999,
    priceRentUsdPerMonth: 249,
    image: '/images/it/server.svg',
  },
  {
    id: 'switch-48p-poe',
    name: '48‑Port PoE+ Switch',
    category: 'Switch',
    specs: ['48× Gigabit', '8× SFP+', 'Layer 3', '740W PoE+'],
    availability: { buy: true, rent: true },
    priceBuyUsd: 1299,
    priceRentUsdPerMonth: 79,
    image: '/images/it/switch.svg',
  },
  {
    id: 'color-laser-pro',
    name: 'Color Laser Printer Pro',
    category: 'Printer',
    specs: ['35 ppm', 'Duplex', 'Ethernet', 'AirPrint'],
    availability: { buy: true, rent: false },
    priceBuyUsd: 449,
    image: '/images/it/printer.svg',
  },
  {
    id: 'ups-1500va',
    name: 'UPS 1500VA Line‑Interactive',
    category: 'UPS',
    specs: ['900W', '8 Outlets', 'AVR', 'LCD'],
    availability: { buy: true, rent: true },
    priceBuyUsd: 239,
    priceRentUsdPerMonth: 15,
    image: '/images/it/ups.svg',
  },
];