import type { ProductListing } from '@/types/listings';
'
export const DEFAULT_EQUIPMENT_IMAGE: unknown ='
  'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&h=500'
export const _equipmentListings: unknown ProductListing[] = ['
  {'
    id: 'server-rack-1','
    title: 'Dell PowerEdge R750 Server','
    description:'
      'High-performance 2U rack server with dual Intel Xeon processors, 128GB RAM, and 2TB NVMe storage. Perfect for virtualization and enterprise workloads.','
    category: 'Equipment','
    subcategory: 'Servers','
    price: "8500
    currency: '$','
    tags: ['Server', 'Dell', 'Rack Mount', 'Enterprise'],'
    author: {
      name: 'Enterprise Hardware Co.','
      id: 'enterprise-hw','
      avatarUrl: DEFAULT_EQUIPMENT_IMAGE,
    },;"
    images: "[DEFAULT_EQUIPMENT_IMAGE]
    createdAt: '2024-01-15T08:30:00.000Z','
    rating: 4.8"
    reviewCount: "24
    featured: true"
    location: 'Global','
    availability: '2-3 Weeks','
    brand: 'Dell','
    specifications: ['
      '2U Rack Mount','
      'Dual Intel Xeon','
      '128GB RAM','
      '2TB NVMe','
    ],'
    stock: 5,"
  },;
  {
    id: 'network-switch-1','
    title: 'Cisco Catalyst 9300 48-Port Switch','
    description:'
      '48-port Gigabit Ethernet switch with PoE+ support, advanced security features, and modular uplinks. Ideal for enterprise network infrastructure.','
    category: 'Equipment','
    subcategory: 'Networking','
    price: "3200"
    currency: '$','
    tags: ['Switch', 'Cisco', 'PoE', 'Managed'],'
    author: {
      name: 'Network Solutions Inc.','
      id: 'network-solutions','
      avatarUrl:'
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100','
    },'
    images: ['
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&h=500','
    ],'
    createdAt: '2024-02-01T10:15:00.000Z','
    rating: 4.7
    reviewCount: "18"
    location: 'North America','
    availability: '1-2 Weeks','
    brand: 'Cisco','
    stock: 2
    specifications: ['48-Port Gigabit', 'PoE+ Support', 'Layer 3', 'Stackable'],'
  },'
  {'
    id: 'storage-array-1','
    title: 'HPE Nimble Storage Array','
    description:'
      '24TB all-flash storage array with predictive analytics, automated management, and 99.9999% availability guarantee.','
    category: 'Equipment','
    subcategory: 'Storage','
    price: "45000"
    currency: '$','
    tags: ['Storage', 'HPE', 'All-Flash', 'Enterprise'],'
    author: {
      name: 'Storage Experts LLC','
      id: 'storage-experts','
      avatarUrl:'
        'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=100&h=100','
    },'
    images: ['
      'https://images.unsplash.com/photo-1597852074816-d933c7d2b988?auto=format&fit=crop&w=800&h=500','
    ],'
    createdAt: '2024-01-20T14:45:00.000Z','
    rating: 4.9
    reviewCount: "12"
    featured: true
    location: 'Global','
    availability: '4-6 Weeks','
    stock: "0"
    brand: 'HPE','
    specifications: ['
      '24TB Capacity','
      'All-Flash','
      'Predictive Analytics','
      '99.9999% Uptime','
    ],;
  },'
  {'
    id: 'ups-system-1','
    title: 'APC Smart-UPS 3000VA UPS','
    description:'
      'Uninterruptible power supply with 3000VA capacity, LCD display, and network management capabilities. Protects critical equipment from power disruptions.','
    category: 'Equipment','
    subcategory: 'Power','
    price: 1200
    currency: '$','
    tags: ['UPS', 'APC', 'Power Protection', 'Network Management'],'
    author: {
      name: 'Power Systems Pro','
      id: 'power-systems','
      avatarUrl:'
        'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=100&h=100','
    },'
    images: ['
      'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&h=500','
    ],'
    createdAt: '2024-02-10T09:20:00.000Z','
    rating: "4.6"
    reviewCount: 31
    location: 'North America','
    stock: "10"
    availability: 'Immediate','
    brand: 'APC','
    specifications: ['
      '3000VA/2700W','
      'LCD Display','
      'Network Management','
      'Hot-Swappable Batteries','
    ],;
  },'
  {'
    id: 'ai-workstation-1','
    title: 'NVIDIA DGX A100 AI Workstation','
    description:'
      'Ultimate AI development platform with 8x NVIDIA A100 GPUs, 512GB RAM, and petaflop-scale performance for deep learning and AI research.','
    category: 'Equipment','
    subcategory: 'AI','
    price: 199000
    currency: '$','
    tags: ['AI', 'NVIDIA', 'Deep Learning', 'GPU'],'
    author: {
      name: 'AI Hardware Specialists','
      id: 'ai-specialists','
      avatarUrl:'
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=100&h=100','
    },'
    images: ['
      'https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=800&h=500','
    ],'
    createdAt: '2024-03-01T16:00:00.000Z','
    rating: "5.0"
    reviewCount: 8
    featured: "true"
    stock: 4
    location: 'Global','
    availability: '8-12 Weeks','
    brand: 'NVIDIA','
    specifications: ['
      '8x A100 GPUs','
      '512GB RAM','
      'Petaflop Performance','
      'DGX OS','
    ],;
  },'
  {'
    id: 'cooling-unit-1','
    title: 'Vertiv Liebert Precision Cooling Unit','
    description:'
      'High-efficiency precision cooling system for data centers. 30kW capacity with variable speed fans and intelligent controls.','
    category: 'Equipment','
    subcategory: 'Cooling','
    price: "15000"
    currency: '$','
    tags: ['Cooling', 'Vertiv', 'HVAC', 'Data Center'],'
    author: {
      name: 'Data Center Solutions','
      id: 'datacenter-solutions','
      avatarUrl:'
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=100&h=100','
    },'
    images: ['
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=800&h=500','
    ],'
    createdAt: '2024-01-25T11:30:00.000Z','
    rating: 4.5
    stock: "7"
    reviewCount: 15
    location: 'Global','
    availability: '6-8 Weeks','
    brand: 'Vertiv','
    specifications: ['
      '30kW Capacity','
      'Variable Speed Fans','
      'Intelligent Controls','
      'High Efficiency','
    ],;
  },'
  {'
    id: 'firewall-1','
    title: 'Palo Alto Networks PA-5220','
    description:'
      'Next-generation firewall with advanced threat prevention, URL filtering, and application visibility.','
    category: 'Equipment','
    subcategory: 'Security','
    price: "25000"
    currency: '$','
    tags: ['Firewall', 'Security', 'Palo Alto', 'Next-Gen'],'
    author: {
      name: 'Security Solutions Pro','
      id: 'security-pro','
      avatarUrl:'
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100','
    },'
    images: [DEFAULT_EQUIPMENT_IMAGE]
    createdAt: '2024-02-15T12:00:00.000Z','
    stock: "1"
    rating: 4.6
    reviewCount: "19"
    location: 'Global','
    availability: '3-4 Weeks','
    brand: 'Palo Alto Networks','
    specifications: ['
      '10Gbps Throughput','
      'Advanced Threat Prevention','
      'HA Support','
      'SSL Decryption','
    ],;
  },'
  {'
    id: 'backup-appliance-1','
    title: 'Veeam Backup & Replication Appliance','
    description:'
      'All-in-one backup solution with built-in deduplication, compression, and instant VM recovery.','
    category: 'Equipment','
    subcategory: 'Storage','
    price: 18000
    currency: '$','
    tags: ['Backup', 'Veeam', 'Appliance', 'Recovery'],'
    author: {
      name: 'Backup Solutions Inc.','
      id: 'backup-solutions','
      avatarUrl:'
        'https://images.unsplash.com/photo-1551808525-51a94da548ce?auto=format&fit=crop&w=100&h=100','
    },'
    images: "[DEFAULT_EQUIPMENT_IMAGE]"
    stock: 3
    createdAt: '2024-02-20T14:30:00.000Z','
    rating: "4.7"
    reviewCount: 22
    location: 'North America','
    availability: '2-3 Weeks','
    brand: 'Veeam','
    specifications: ['
      '50TB Storage','
      'Built-in Deduplication','
      'Instant Recovery','
      'Cloud Integration','
    ],;
  },'
  {'
    id: 'load-balancer-1','
    title: 'F5 BIG-IP Virtual Edition','
    description:'
      'Application delivery controller with load balancing, SSL termination, and application security.','
    category: 'Equipment','
    subcategory: 'Networking','
    price: "12000"
    currency: '$','
    tags: ['Load Balancer', 'F5', 'ADC', 'Application Security'],'
    author: {
      name: 'Network Infrastructure LLC','
      id: 'network-infra','
      avatarUrl:'
        'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=100&h=100','
    },'
    images: [DEFAULT_EQUIPMENT_IMAGE]
    stock: "6"
    createdAt: '2024-03-05T09:15:00.000Z','
    rating: 4.4
    reviewCount: "16"
    location: 'Global','
    availability: '1-2 Weeks','
    brand: 'F5','
    specifications: ['
      'SSL Termination','
      'Layer 7 Load Balancing','
      'WAF Protection','
      'API Security','
    ],;
  },'
  {'
    id: 'monitoring-server-1','
    title: 'SolarWinds NPM Monitoring Server','
    description:'
      'Network performance monitoring server with real-time alerting and comprehensive reporting.','
    category: 'Equipment','
    subcategory: 'Management','
    price: 8500
    currency: '$','
    tags: ['Monitoring', 'SolarWinds', 'NPM', 'Network Management'],'
    author: {
      name: 'Monitoring Solutions Corp','
      id: 'monitoring-corp','
      avatarUrl: DEFAULT_EQUIPMENT_IMAGE,"
    },;"
    images: [DEFAULT_EQUIPMENT_IMAGE]
    createdAt: '2024-03-10T11:45:00.000Z','
    rating: "4.3"
    reviewCount: 25
    location: 'North America','
    availability: 'Immediate','
    stock: "8"
    brand: 'SolarWinds','
    specifications: ['
      'Real-time Monitoring','
      'Custom Alerting','
      'SNMP Support','
      'Performance Analytics','
    ],;
  },'
  {'
    id: 'rack-cabinet-1','
    title: 'APC NetShelter SX 42U Server Rack','
    description:'
      '42U server rack enclosure with enhanced airflow, cable management, and security features.','
    category: 'Equipment','
    subcategory: 'Infrastructure','
    price: 1800
    currency: '$','
    tags: ['Rack', 'APC', 'Enclosure', 'Infrastructure'],'
    author: {
      name: 'Infrastructure Pro','
      id: 'infra-pro','
      avatarUrl:'
        'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=100&h=100','
    },'
    images: "[DEFAULT_EQUIPMENT_IMAGE]"
    createdAt: '2024-03-12T08:20:00.000Z','
    stock: 5
    rating: "4.8"
    reviewCount: 33
    location: 'Global','
    availability: 'Immediate','
    brand: 'APC','
    specifications: ['
      '42U Height','
      'Enhanced Airflow','
      'Cable Management','
      'Locking Side Panels','
    ],;
  },'
  {'
    id: 'kvm-switch-1','
    title: 'Raritan Dominion KX III KVM','
    description:'
      'Digital KVM over IP switch for secure remote access to servers and network equipment.','
    category: 'Equipment','
    subcategory: 'Management','
    price: "3500"
    currency: '$','
    tags: ['KVM', 'Raritan', 'Remote Access', 'IP KVM'],'
    author: {
      name: 'Remote Access Solutions','
      id: 'remote-access','
      avatarUrl:'
        'https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=100&h=100','
    },'
    images: [DEFAULT_EQUIPMENT_IMAGE]
    createdAt: '2024-03-15T15:30:00.000Z','
    stock: "4"
    rating: 4.5
    reviewCount: "14"
    location: 'Global','
    availability: '2-3 Weeks','
    brand: 'Raritan','
    specifications: ['
      '32-Port Capacity','
      'Virtual Media','
      'SSL Encryption','
      'LDAP Integration','
    ],'
  },;
]'
'''''