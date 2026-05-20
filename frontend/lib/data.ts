import type { Product } from "@/types/commerce";

export const products: Product[] = [
  {
    id: "p001",
    slug: "architect-coat",
    title: "Architect Wool Coat",
    category: "Outerwear",
    collection: "Monolith",
    price: 46500,
    color: "Ink",
    colors: ["#111111", "#E7E5E4", "#B8A07E"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Double-faced Italian wool",
    images: [
      "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "A sharply cut wrap coat with a quiet shoulder, long belt, and hand-finished seams.",
    rating: 4.9,
    stock: 14
  },
  {
    id: "p002",
    slug: "column-knit-dress",
    title: "Column Knit Dress",
    category: "Dresses",
    collection: "Still Life",
    price: 28900,
    color: "Bone",
    colors: ["#F5F5F3", "#1A1A1A"],
    sizes: ["XS", "S", "M", "L"],
    material: "Merino rib knit",
    images: [
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "A long, fluid knit dress shaped with restraint and finished with a clean neckline.",
    rating: 4.8,
    stock: 21
  },
  {
    id: "p003",
    slug: "gallery-trouser",
    title: "Gallery Pleated Trouser",
    category: "Tailoring",
    collection: "Monolith",
    price: 22500,
    color: "Charcoal",
    colors: ["#1A1A1A", "#D6C3A5"],
    sizes: ["28", "30", "32", "34", "36"],
    material: "Wool twill",
    images: [
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "A relaxed pleated trouser with a long break and refined internal construction.",
    rating: 4.7,
    stock: 32
  },
  {
    id: "p004",
    slug: "atelier-shirt",
    title: "Atelier Poplin Shirt",
    category: "Shirts",
    collection: "Essentials",
    price: 14900,
    color: "White",
    colors: ["#FFFFFF", "#000000", "#E7E5E4"],
    sizes: ["XS", "S", "M", "L", "XL"],
    material: "Organic cotton poplin",
    images: [
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "An oversized shirt with a crisp collar, elongated cuff, and polished shell buttons.",
    rating: 4.8,
    stock: 40
  },
  {
    id: "p005",
    slug: "sculptural-blazer",
    title: "Sculptural Single Blazer",
    category: "Tailoring",
    collection: "Still Life",
    price: 38500,
    color: "Black",
    colors: ["#000000", "#B8A07E"],
    sizes: ["XS", "S", "M", "L"],
    material: "Virgin wool gabardine",
    images: [
      "https://images.unsplash.com/photo-1604467715878-83e57e8bc129?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1592301933927-35b597393c0a?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "A precise, elongated blazer with internal shaping and a single covered button.",
    rating: 4.9,
    stock: 11
  },
  {
    id: "p006",
    slug: "crescent-bag",
    title: "Crescent Leather Bag",
    category: "Accessories",
    collection: "Objects",
    price: 31500,
    color: "Sand",
    colors: ["#D6C3A5", "#000000"],
    sizes: ["OS"],
    material: "Calf leather",
    images: [
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=1400&q=85",
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1400&q=85"
    ],
    description: "A compact crescent bag with a sculpted strap, suede lining, and concealed hardware.",
    rating: 4.6,
    stock: 18
  }
];

export const categories = ["All", "Outerwear", "Dresses", "Tailoring", "Shirts", "Accessories"];

export const editorials = [
  {
    title: "A Study in Quiet Silhouettes",
    image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=1600&q=85"
  },
  {
    title: "The Monolith Collection",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=1600&q=85"
  },
  {
    title: "Object, Body, Space",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1600&q=85"
  }
];
