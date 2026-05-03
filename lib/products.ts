export type Product = {
  id: number;
  name: string;
  price: string;
  category: string;
  desc: string;
  tag?: string;
};

export const productCatalog: Product[] = [
  {
    id: 1,
    name: "Samsung A03",
    price: "$120",
    category: "phones",
    desc: "Reliable budget smartphone with long battery life.",
    tag: "Budget",
  },
  {
    id: 2,
    name: "Samsung A15",
    price: "$180",
    category: "phones",
    desc: "Smooth performance with great display.",
    tag: "Popular",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: "$45",
    category: "audio",
    desc: "Powerful sound with deep bass.",
    tag: "Best Deal",
  },
  {
    id: 4,
    name: "Wireless Headphones",
    price: "$30",
    category: "audio",
    desc: "Comfortable and immersive sound.",
  },
  {
    id: 5,
    name: "Fast Charger",
    price: "$15",
    category: "accessories",
    desc: "Quick charge for all devices.",
  },
  {
    id: 6,
    name: "Laptop HP",
    price: "$250",
    category: "computers",
    desc: "Reliable laptop for daily work.",
  },
  {
    id: 7,
    name: "Screen Repair",
    price: "$80",
    category: "repairs",
    desc: "Fast and professional repair service.",
  },
  {
    id: 8,
    name: "Guitar",
    price: "$90",
    category: "gears",
    desc: "Perfect for beginners and pros.",
  },
];
