// lib/products.ts

export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  brand?: string;
  desc: string;
  tag?: string;
  imagSrc?: string;
};

export const productCatalog: Product[] = [
  // ======================
  // PHONES
  // ======================

  {
    id: 1,
    name: "Android",
    price: "From $89",
    category: "phones",
    desc: "Affordable Samsung smartphones with reliable performance and long battery life.",
    tag: "Budget",
    imagSrc: "/categories/phones/samsungs.jpeg",
  },

  {
    id: 2,
    name: "iPhone",
    price: "From $135",
    category: "phones",
    desc: "Popular iPhones with smooth performance, premium design, and great cameras.",
    tag: "Popular",
    imagSrc: "/categories/phones/iphones.jpeg",
  },

  {
    id: 3,
    name: "Tablets",
    price: "From $89",
    category: "phones",
    desc: "Portable tablets perfect for entertainment, browsing, and everyday use.",
    tag: "Popular",
    imagSrc: "/categories/phones/tablets.jpeg",
  },

  // ======================
  // BLUETOOTH SPEAKERS
  // ======================

  {
    id: 4,
    name: "Gemini",
    price: "From $35",
    category: "bluetooth-speakers",
    desc: "Portable speakers with loud sound and party-ready performance.",
    tag: "Best Deal",
    imagSrc: "/categories/bluetooth-speakers/gemini.jpg",
  },

  {
    id: 5,
    name: "JBL Speaker",
    price: "From $35",
    category: "bluetooth-speakers",
    desc: "Premium JBL speakers with powerful bass and crystal-clear audio.",
    tag: "Popular",
    imagSrc: "/categories/bluetooth-speakers/jbl-speaker.jpg",
  },

  {
    id: 6,
    name: "Worry-Free",
    price: "$35",
    category: "bluetooth-speakers",
    desc: "Affordable wireless speakers built for everyday listening.",
    tag: "Budget",
    imagSrc: "/categories/bluetooth-speakers/worry-free.jpg",
  },

  {
    id: 7,
    name: "QFX",
    price: "$35",
    category: "bluetooth-speakers",
    desc: "Compact Bluetooth speakers with strong sound and LED party effects.",
    tag: "Best Deal",
    imagSrc: "/categories/bluetooth-speakers/qfx.jpg",
  },

  {
    id: 8,
    name: "Shure",
    price: "$35",
    category: "bluetooth-speakers",
    desc: "Professional-quality audio equipment trusted by performers and DJs.",
    tag: "Premium",
    imagSrc: "/categories/bluetooth-speakers/shure.jpg",
  },

  // ======================
  // ACCESSORIES
  // ======================

  {
    id: 9,
    name: "Portable Chargers",
    price: "$10",
    category: "accessories",
    desc: "Fast portable charging solutions for phones, tablets, and devices.",
    tag: "Budget",
    imagSrc: "/categories/accessories/chargers.jpg",
  },

  {
    id: 10,
    name: "Bluetooth Watches",
    price: "$45",
    category: "accessories",
    desc: "Smart Bluetooth watches with fitness tracking and mobile connectivity.",
    tag: "Popular",
    imagSrc: "/categories/accessories/bt-watches.jpg",
  },

  {
    id: 11,
    name: "Samsung Bluetooth Watches",
    price: "$45",
    category: "accessories",
    desc: "Samsung smartwatches with sleek design and advanced mobile features.",
    tag: "Premium",
    imagSrc: "/categories/accessories/samsung-bt-watches.jpg",
  },

  {
    id: 12,
    name: "JBL Microphone",
    price: "$45",
    category: "accessories",
    desc: "Clear and reliable microphones for music, events, and performances.",
    tag: "Popular",
    imagSrc: "/categories/accessories/jbl-microphone.jpg",
  },

  {
    id: 13,
    name: "AirPods",
    price: "$95",
    category: "accessories",
    desc: "Wireless earbuds with immersive sound and seamless connectivity.",
    tag: "Premium",
    imagSrc: "/categories/accessories/airpods.jpg",
  },

  {
    id: 14,
    name: "TV Remotes",
    price: "$45",
    category: "accessories",
    desc: "Replacement TV remotes compatible with most major brands.",
    tag: "Best Deal",
    imagSrc: "/categories/accessories/tv-remotes.jpg",
  },

  // ======================
  // TVS
  // ======================

  {
    id: 15,
    name: "Samsung TVs",
    price: "From $129",
    category: "tvs",
    desc: "Smart Samsung TVs with vivid picture quality and modern features.",
    tag: "Popular",
    imagSrc: "/categories/tvs/samsung-tv.jpg",
  },

  {
    id: 16,
    name: "LG TVs",
    price: "From $129",
    category: "tvs",
    desc: "Reliable LG televisions with sharp visuals and smooth streaming.",
    tag: "Popular",
    imagSrc: "/categories/tvs/lg-tv.jpg",
  },

  {
    id: 17,
    name: "Hisense TVs",
    price: "From $129",
    category: "tvs",
    desc: "Affordable smart TVs with large displays and excellent value.",
    tag: "Budget",
    imagSrc: "/categories/tvs/hisense-tv.jpg",
  },

  // ======================
  // LAPTOPS
  // ======================

  {
    id: 18,
    name: "HP",
    price: "From $175",
    category: "laptops",
    desc: "Reliable HP laptops for work, school, and daily productivity.",
    tag: "Popular",
    imagSrc: "/categories/laptops/hp.jpg",
  },

  {
    id: 19,
    name: "Dell",
    price: "From $175",
    category: "laptops",
    desc: "Dell computers designed for performance, multitasking, and reliability.",
    tag: "Popular",
    imagSrc: "/categories/laptops/dell.jpg",
  },

  {
    id: 20,
    name: "Lenovo",
    price: "From $175",
    category: "laptops",
    desc: "Lenovo laptops with durable design and efficient everyday performance.",
    tag: "Budget",
    imagSrc: "/categories/laptops/lenovo.jpg",
  },

  // ======================
  // CAR AUDIO
  // ======================

  {
    id: 21,
    name: "Commandos",
    price: "From $49",
    category: "car-audio",
    desc: "High-performance car audio systems built for loud and powerful sound.",
    tag: "Popular",
    imagSrc: "/categories/car-audio/comando.jpg",
  },

  {
    id: 22,
    name: "B&C",
    price: "From $49",
    category: "car-audio",
    desc: "Professional-grade speakers engineered for premium audio performance.",
    tag: "Premium",
    imagSrc: "/categories/car-audio/b-c.jpg",
  },

  {
    id: 23,
    name: "Pioneer",
    price: "From $49",
    category: "car-audio",
    desc: "Trusted Pioneer audio systems with deep bass and clear sound quality.",
    tag: "Popular",
    imagSrc: "/categories/car-audio/pioneer.jpg",
  },

  {
    id: 24,
    name: "DS18",
    price: "From $49",
    category: "car-audio",
    desc: "DS18 car audio equipment designed for extreme sound performance.",
    tag: "Premium",
    imagSrc: "/categories/car-audio/ds18.jpg",
  },

  {
    id: 25,
    name: "XT Audio",
    price: "From $49",
    category: "car-audio",
    desc: "Powerful car audio solutions for custom sound system builds.",
    tag: "Popular",
    imagSrc: "/categories/car-audio/xt-audio.jpg",
  },

  {
    id: 26,
    name: "TARAMPS",
    price: "From $49",
    category: "car-audio",
    desc: "High-power amplifiers and audio equipment for serious sound enthusiasts.",
    tag: "Premium",
    imagSrc: "/categories/car-audio/taramps.jpg",
  },

  {
    id: 27,
    name: "18 Sound",
    price: "From $49",
    category: "car-audio",
    desc: "Premium loudspeakers built for powerful and professional audio setups.",
    tag: "Premium",
    imagSrc: "/categories/car-audio/sound18.jpg",
  },

  {
    id: 28,
    name: "Kicker",
    price: "$49",
    category: "car-audio",
    desc: "Kicker speakers and subwoofers delivering rich bass and clean sound.",
    tag: "Popular",
    imagSrc: "/categories/car-audio/kicker.jpg",
  },

  {
    id: 29,
    name: "Massive Audio",
    price: "$49",
    category: "car-audio",
    desc: "Heavy-duty audio systems designed for loud and immersive performance.",
    tag: "Premium",
    imagSrc: "/categories/car-audio/massive-audio.jpg",
  },

  {
    id: 30,
    name: "Clarion",
    price: "$49",
    category: "car-audio",
    desc: "Reliable car entertainment systems with modern audio features.",
    tag: "Popular",
    imagSrc: "/categories/car-audio/clarion.jpg",
  },

  {
    id: 31,
    name: "YR Audio",
    price: "$49",
    category: "car-audio",
    desc: "Affordable sound equipment for custom vehicle audio installations.",
    tag: "Budget",
    imagSrc: "/categories/car-audio/yr-audio.jpg",
  },

  // ======================
  // CAR ALARMS
  // ======================

  {
    id: 32,
    name: "Compustar",
    price: "$120",
    category: "car-alarms",
    desc: "Advanced car security and remote-start systems for everyday protection.",
    tag: "Popular",
    imagSrc: "/categories/car-alarms/compustar.jpg",
  },

  {
    id: 33,
    name: "Avatar",
    price: "$120",
    category: "car-alarms",
    desc: "Reliable vehicle alarm systems designed for added security and convenience.",
    tag: "Popular",
    imagSrc: "/categories/car-alarms/avatar.jpg",
  },

  // ======================
  // GAMING
  // ======================

  {
    id: 34,
    name: "PS5",
    price: "$245",
    category: "gaming",
    desc: "Next-generation PlayStation gaming with stunning graphics and fast performance.",
    tag: "Popular",
    imagSrc: "/categories/gaming/ps5.png",
  },

  {
    id: 35,
    name: "VR2",
    price: "$245",
    category: "gaming",
    desc: "Gaming accessories and entertainment systems for immersive gameplay.",
    tag: "Best Deal",
    imagSrc: "/categories/gaming/vr2.png",
  },

  {
    id: 36,
    name: "Xbox",
    price: "$245",
    category: "gaming",
    desc: "Xbox consoles and gaming gear built for smooth online and offline gaming.",
    tag: "Popular",
    imagSrc: "/categories/gaming/xbox.png",
  },

  {
    id: 37,
    name: "PS5 Remote Control",
    price: "$45",
    category: "gaming",
    desc: "Wireless PS5 controllers designed for responsive and immersive gameplay.",
    tag: "Popular",
    imagSrc: "/categories/gaming/ps5-remote.jpg",
  },

  {
    id: 38,
    name: "Xbox Remote Control",
    price: "$45",
    category: "gaming",
    desc: "Comfortable Xbox controllers with precision controls for competitive gaming.",
    tag: "Popular",
    imagSrc: "/categories/gaming/xbox-remote.jpg",
  },

  // ======================
  // HEADPHONES
  // ======================

  {
    id: 39,
    name: "JBL Wireless Headphones",
    price: "$From 49",
    category: "headphones",
    desc: "Comfortable wireless headphones with strong bass and all-day listening.",
    tag: "Popular",
    imagSrc: "/categories/headphones/jbl-headphones.jpg",
  },
  {
    id: 40,
    name: "Skullcandy Headphones",
    price: "From $49",
    category: "headphones",
    desc: "Stylish over-ear headphones with powerful sound and deep bass response.",
    tag: "Popular",
    imagSrc: "/categories/headphones/skullcandy.jpg",
  },
  {
    id: 41,
    name: "Apple AirPods",
    price: "From $49",
    category: "headphones",
    desc: "Premium wireless earbuds with clear sound and seamless Apple connectivity.",
    tag: "Premium",
    imagSrc: "/categories/accessories/airpods.jpg",
  },
  {
    id: 42,
    name: "Sony Bluetooth Headphones",
    price: "From $95",
    category: "headphones",
    desc: "Reliable Sony headphones with balanced audio and comfortable fit.",
    tag: "Popular",
    imagSrc: "/categories/headphones/sony-headphones.jpg",
  },
  {
    id: 43,
    name: "MONICA Wireless Earbuds",
    price: "From $35",
    category: "headphones",
    desc: "Affordable Bluetooth earbuds perfect for music, calls, and daily use.",
    tag: "Budget",
    imagSrc: "/categories/headphones/monica-earbuds.jpg",
  },
  {
    id: 44,
    name: "RCA Bluetooth Headphones",
    price: "From $55",
    category: "headphones",
    desc: "Wireless RCA headphones with crisp sound and long battery life.",
    tag: "Budget",
    imagSrc: "/categories/headphones/rca-headphones.jpg",
  },

  // ======================
  // DJ STUFF
  // ======================

  {
    id: 45,
    name: "Professional XLR Audio Cables",
    price: "From $15",
    category: "dj-stuff",
    desc: "Durable DJ and studio audio cables designed for clean, reliable sound connections.",
    tag: "Popular",
    imagSrc: "/categories/dj-stuff/xlr-cables.jpg",
  },
  {
    id: 46,
    name: "RCA & Audio Connector Cables",
    price: "From $15",
    category: "dj-stuff",
    desc: "Essential DJ and speaker connection cables for mixers, amplifiers, and sound systems.",
    tag: "Popular",
    imagSrc: "/categories/dj-stuff/audio-cables.jpg",
  },
  {
    id: 47,
    name: "DJ Speaker System",
    price: "From $320",
    category: "dj-stuff",
    desc: "High-powered DJ speakers with deep bass and loud, clear sound for events and parties.",
    tag: "Premium",
    imagSrc: "/categories/dj-stuff/dj-speaker-sys.jpg",
  },

  // ======================
  // EBIKES
  // ======================

  {
    id: 48,
    name: "Fat Tire Electric Bike",
    price: "$499",
    category: "ebikes",
    desc: "Powerful electric bike with fat tires, LED lights, and long-range battery performance.",
    tag: "Popular",
    imagSrc: "/categories/ebikes/flat-tire-bike.jpg",
  },
  {
    id: 49,
    name: "Compact City E-Bike",
    price: "$1099",
    category: "ebikes",
    desc: "Comfortable foldable-style electric bike built for city riding and everyday commuting.",
    tag: "Popular",
    imagSrc: "/categories/ebikes/compact-bike.jpg",
  },

  // ======================
  // SCOOTERS
  // ======================

  {
    id: 50,
    name: "Electric Kick Scooter",
    price: "$499",
    category: "scooters",
    desc: "Portable electric scooter with strong motor power and smooth urban riding.",
    tag: "Popular",
    imagSrc: "/categories/scooters/electric-kick.jpg",
  },
  {
    id: 51,
    name: "T-Pro Motor Scooter",
    price: "$1899",
    category: "scooters",
    desc: "Street-ready motor scooter designed for reliable transportation and comfortable riding.",
    tag: "Premium",
    imagSrc: "/categories/scooters/motor.jpg",
  },
  {
    id: 52,
    name: "Sport Electric Scooter",
    price: "$1599",
    category: "scooters",
    desc: "Modern sporty scooter with aggressive styling, LED lighting, and smooth acceleration.",
    tag: "Premium",
    imagSrc: "/categories/scooters/sport-electric.jpg",
  },
  // ======================
  // MUSIC GEAR
  // ======================

  {
    id: 53,
    name: "Acoustic Guitar",
    price: "$249",
    category: "music-gear",
    desc: "Classic acoustic guitar with rich sound, perfect for beginners and casual players.",
    tag: "Popular",
    imagSrc: "/categories/music-gear/guitar.jpg",
  },
  {
    id: 54,
    name: "Professional DJ Mixer",
    price: "$599",
    category: "music-gear",
    desc: "Multi-channel DJ mixer designed for smooth transitions, live events, and studio sessions.",
    tag: "Premium",
    imagSrc: "/categories/music-gear/dj-mixer.jpg",
  },
  {
    id: 55,
    name: "Studio Microphone Kit",
    price: "$179",
    category: "music-gear",
    desc: "High-quality condenser microphone kit ideal for recording vocals, podcasts, and streaming.",
    tag: "Best Deal",
    imagSrc: "/categories/music-gear/studio-microphone-kit.jpg",
  },
  // ======================
  // REPAIRS
  // ======================

  {
    id: 56,
    name: "Phone Screen Repair",
    price: "$89",
    category: "repairs",
    desc: "Fast screen replacement service for cracked or damaged smartphone displays.",
    tag: "Popular",
    imagSrc: "/categories/repairs/screen-repair.jpg",
  },
  {
    id: 57,
    name: "Battery Replacement",
    price: "$69",
    category: "repairs",
    desc: "Restore battery life and performance with professional battery replacement service.",
    tag: "Best Deal",
    imagSrc: "/categories/repairs/battery-replacement.jpg",
  },
  {
    id: 58,
    name: "Charging Port Repair",
    price: "$79",
    category: "repairs",
    desc: "Repair faulty charging ports to keep your device powered and connected.",
    tag: "Reliable",
    imagSrc: "/categories/repairs/charging-port.jpg",
  },
  {
    id: 59,
    name: "Laptop Diagnostic Service",
    price: "$49",
    category: "repairs",
    desc: "Professional troubleshooting service to identify hardware and software issues quickly.",
    tag: "Service",
    imagSrc: "/categories/repairs/laptop-diagnostic.jpg",
  },
];
