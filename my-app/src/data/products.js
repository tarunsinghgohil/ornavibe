const productsData = [
  {
    id: 1,
    name: "Diamond Eternity Ring",
    category: "rings",
    price: 1299.99,
    description: "A stunning diamond eternity ring featuring 2 carats of brilliant-cut diamonds set in 18k white gold. This timeless piece symbolizes never-ending love and makes a perfect anniversary gift or statement piece.",
    features: [
      "2 carats of brilliant-cut diamonds",
      "18k white gold setting",
      "Available in sizes 5-9",
      "Comes with certificate of authenticity"
    ],
    images: [
      "/diamond-eternity-ring-main.jpg",
      "/diamond-eternity-ring-angle.jpg",
      "/diamond-eternity-ring-worn.jpg"
    ],
    material: "18k White Gold",
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 4.9,
    reviews: 124
  },
  {
    id: 2,
    name: "Sapphire Pendant Necklace",
    category: "necklaces",
    price: 899.99,
    description: "An elegant sapphire pendant necklace featuring a 1.5 carat oval blue sapphire surrounded by a halo of diamonds, suspended on an 18k white gold chain. This stunning piece adds a touch of sophistication to any outfit.",
    features: [
      "1.5 carat oval blue sapphire",
      "0.25 carats of diamonds in halo setting",
      "18k white gold chain (18 inches)",
      "Lobster clasp closure"
    ],
    images: [
      "/sapphire-pendant-main.jpg",
      "/sapphire-pendant-detail.jpg",
      "/sapphire-pendant-worn.jpg"
    ],
    material: "18k White Gold",
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.8,
    reviews: 86
  },
  {
    id: 3,
    name: "Pearl Drop Earrings",
    category: "earrings",
    price: 499.99,
    description: "Timeless pearl drop earrings featuring 8mm South Sea pearls suspended from 14k gold leverbacks with small diamond accents. These versatile earrings transition effortlessly from day to evening wear.",
    features: [
      "8mm genuine South Sea pearls",
      "Diamond accents (0.1 carats total)",
      "14k gold leverback closures",
      "Handcrafted by master jewelers"
    ],
    images: [
      "/pearl-earrings-main.jpg",
      "/pearl-earrings-detail.jpg",
      "/pearl-earrings-worn.jpg"
    ],
    material: "14k Gold",
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.7,
    reviews: 59
  },
  {
    id: 4,
    name: "Emerald Tennis Bracelet",
    category: "bracelets",
    price: 2499.99,
    description: "A luxurious emerald tennis bracelet featuring 5 carats of vivid green emeralds alternating with brilliant-cut diamonds set in 18k white gold. This statement piece adds a pop of color to any ensemble.",
    features: [
      "5 carats of natural emeralds",
      "2 carats of diamonds",
      "18k white gold setting",
      "Box clasp with safety catch",
      "7.5 inches in length"
    ],
    images: [
      "/emerald-bracelet-main.jpg",
      "/emerald-bracelet-detail.jpg",
      "/emerald-bracelet-worn.jpg"
    ],
    material: "18k White Gold",
    inStock: true,
    isNew: true,
    isFeatured: true,
    rating: 5.0,
    reviews: 42
  },
  {
    id: 5,
    name: "Vintage Gold Locket",
    category: "necklaces",
    price: 349.99,
    description: "A beautifully crafted vintage-inspired gold locket featuring intricate engraving and a small diamond accent. This sentimental piece opens to hold two small photos and comes with a delicate 18k gold chain.",
    features: [
      "14k gold locket with engraved details",
      "Small diamond accent (0.05 carats)",
      "Opens to hold two photos",
      "18k gold chain (20 inches)",
      "Spring ring clasp"
    ],
    images: [
      "/gold-locket-main.jpg",
      "/gold-locket-open.jpg",
      "/gold-locket-worn.jpg"
    ],
    material: "14k Gold",
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.6,
    reviews: 38
  },
  {
    id: 6,
    name: "Men's Onyx Signet Ring",
    category: "rings",
    price: 599.99,
    description: "A sophisticated men's signet ring featuring a black onyx stone set in solid 14k gold with subtle diamond accents. This modern take on a classic design makes a bold statement while remaining timeless.",
    features: [
      "Black onyx center stone",
      "Diamond accents (0.15 carats total)",
      "14k gold setting",
      "Available in sizes 8-13",
      "Can be engraved upon request"
    ],
    images: [
      "/onyx-signet-main.jpg",
      "/onyx-signet-angle.jpg",
      "/onyx-signet-worn.jpg"
    ],
    material: "14k Gold",
    inStock: true,
    isNew: true,
    isFeatured: false,
    rating: 4.8,
    reviews: 27
  },
  {
    id: 7,
    name: "Ruby Stud Earrings",
    category: "earrings",
    price: 799.99,
    description: "Vibrant ruby stud earrings featuring 1 carat total weight of round-cut rubies set in 14k white gold with secure screw backs. These classic earrings add a touch of color to any outfit.",
    features: [
      "1 carat total weight of natural rubies",
      "14k white gold settings",
      "Secure screw back closures",
      "Comes with certificate of authenticity"
    ],
    images: [
      "/ruby-studs-main.jpg",
      "/ruby-studs-detail.jpg",
      "/ruby-studs-worn.jpg"
    ],
    material: "14k White Gold",
    inStock: true,
    isNew: false,
    isFeatured: false,
    rating: 4.7,
    reviews: 53
  },
  {
    id: 8,
    name: "Diamond Solitaire Pendant",
    category: "necklaces",
    price: 999.99,
    description: "A classic diamond solitaire pendant featuring a 1 carat round brilliant-cut diamond suspended on an 18k white gold chain. This timeless piece is perfect for everyday elegance or special occasions.",
    features: [
      "1 carat round brilliant-cut diamond (VS clarity, F color)",
      "18k white gold setting and chain",
      "18-inch chain length",
      "Spring ring clasp"
    ],
    images: [
      "/diamond-pendant-main.jpg",
      "/diamond-pendant-detail.jpg",
      "/diamond-pendant-worn.jpg"
    ],
    material: "18k White Gold",
    inStock: true,
    isNew: false,
    isFeatured: true,
    rating: 4.9,
    reviews: 78
  }
];

export const products = productsData;

const categoriesData = [
  {
    id: "rings",
    name: "Rings",
    description: "From statement pieces to subtle elegance",
    image: "/category-rings.jpg"
  },
  {
    id: "necklaces",
    name: "Necklaces",
    description: "Pendants and chains for every occasion",
    image: "/category-necklaces.jpg"
  },
  {
    id: "earrings",
    name: "Earrings",
    description: "Studs, hoops, and drops that dazzle",
    image: "/category-earrings.jpg"
  },
  {
    id: "bracelets",
    name: "Bracelets",
    description: "Tennis bracelets, bangles, and more",
    image: "/category-bracelets.jpg"
  }
];

export const categories = categoriesData;

const testimonialsData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Loyal Customer",
    content: "The diamond eternity ring I purchased exceeded all my expectations. The craftsmanship is impeccable, and it sparkles beautifully in any light. I receive compliments every time I wear it!",
    avatar: "/testimonial-1.jpg"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Anniversary Gift Buyer",
    content: "I bought the sapphire pendant for my wife's anniversary gift, and she absolutely loves it. The color is vibrant, and the quality is outstanding. The packaging was also elegant and perfect for gifting.",
    avatar: "/testimonial-2.jpg"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Bride-to-be",
    content: "My fiancé proposed with a ring from this collection, and I couldn't be happier. The attention to detail and the way the diamonds catch the light is simply magical. I'll treasure it forever.",
    avatar: "/testimonial-3.jpg"
  }
];

export const testimonials = testimonialsData;

export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getRelatedProducts = (id, category, limit = 4) => {
  return products
    .filter(product => product.id !== parseInt(id) && product.category === category)
    .slice(0, limit);
};

export const getFeaturedProducts = (limit = 4) => {
  return products
    .filter(product => product.isFeatured)
    .slice(0, limit);
};

export const getNewArrivals = (limit = 4) => {
  return products
    .filter(product => product.isNew)
    .slice(0, limit);
};

export const getProductsByCategory = (categoryId) => {
  return products.filter(product => product.category === categoryId);
};