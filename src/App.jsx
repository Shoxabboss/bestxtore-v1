import { Routes, Route, Navigate } from "react-router-dom";
import BoshSahifa from "./pages/BoshSahifa/BoshSahifa";
import Shop from "./pages/Shop/Shop";
import Blog from "./pages/Blog/Blog";

const shopData = {
  shopMahsulotlar: [
    {
      id: 101,
      nom: "Macbook Air 2023 8GB RAM - 256GB SSD",
      narx: 825,
      eski: 965,
      reyting: 4.7,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Smartphone",
      sub: "iPhone",
      brand: "Apple",
      rang: "black",
      xotira: "256GB",
      rasm: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 102,
      nom: "Apple iPhone 14 - 128GB Midnight",
      narx: 125,
      eski: 145,
      reyting: 4.6,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Smartphone",
      sub: "iPhone",
      brand: "Apple",
      rang: "gray",
      xotira: "128GB",
      rasm: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 103,
      nom: "Apple Watch Series 8 GPS - Aluminum Case",
      narx: 425,
      eski: 485,
      reyting: 4.5,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Watches",
      sub: "Apple Watch",
      brand: "Apple",
      rang: "white",
      xotira: "64GB",
      rasm: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 104,
      nom: "AirPods (3rd generation) - Lightning Charging Case",
      narx: 65,
      eski: 85,
      reyting: 4.6,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Audio",
      sub: "Headphones",
      brand: "Apple",
      rang: "white",
      xotira: "64GB",
      rasm: "https://images.unsplash.com/photo-1606746448655-6d7d999ebf31?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 105,
      nom: "Apple iPad Pro 11 M1 2021 WiFi 128GB",
      narx: 825,
      eski: 935,
      reyting: 4.7,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Tablet",
      sub: "iPad",
      brand: "Apple",
      rang: "gray",
      xotira: "128GB",
      rasm: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 106,
      nom: "Smart TV Samsung 4K 75 inch UHD",
      narx: 425,
      eski: 485,
      reyting: 4.4,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "TV",
      sub: "TV",
      brand: "Samsung",
      rang: "black",
      xotira: "512GB",
      rasm: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 107,
      nom: "MX MASTER 3S Performance Wireless Mouse",
      narx: 125,
      eski: 145,
      reyting: 4.6,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Accessory",
      sub: "Accessory",
      brand: "Dell",
      rang: "black",
      xotira: "64GB",
      rasm: "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 108,
      nom: "Logitech K650 Wireless Solar Keyboard",
      narx: 105,
      eski: 150,
      reyting: 4.5,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Laptop",
      sub: "Laptop",
      brand: "Lenovo",
      rang: "gray",
      xotira: "1TB",
      rasm: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 109,
      nom: "JBL WH-CH520 Wireless Bluetooth Headphones",
      narx: 225,
      eski: 265,
      reyting: 4.6,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Audio",
      sub: "Headphones",
      brand: "Nokia",
      rang: "blue",
      xotira: "128GB",
      rasm: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: 110,
      nom: "Canon EOS 450D Lens Kit 18-55mm",
      narx: 105,
      eski: 150,
      reyting: 4.4,
      sharh: 12,
      belgi: "New",
      chegirma: "10%",
      kategoriya: "Cameras",
      sub: "Cameras",
      brand: "Dell",
      rang: "black",
      xotira: "256GB",
      rasm: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=900&q=80",
    },
  ],
  shopRanglar: [
    { id: "white", nom: "White" },
    { id: "gray", nom: "Gray" },
    { id: "black", nom: "Black" },
    { id: "blue", nom: "Blue" },
    { id: "green", nom: "Green" },
    { id: "orange", nom: "Orange" },
  ],
  shopXotira: ["64GB", "128GB", "256GB", "512GB", "1TB"],
  shopBrandlar: ["Apple", "Samsung", "Dell", "Nokia", "Lenovo"],
  shopKategoriya: [
    { nom: "Smartphone", sub: ["iPhone", "Samsung", "Nokia", "Oppo"] },
    { nom: "Laptop", sub: ["Laptop"] },
    { nom: "TV", sub: ["TV"] },
    { nom: "Audio", sub: ["Headphones"] },
    { nom: "Tablet", sub: ["iPad"] },
    { nom: "Accessory", sub: ["Accessory"] },
  ],
  shopTopRated: [
    { id: 1, narx: 55, nom: "JBL bluetooth", reyting: 4.7, sharh: 12 },
    { id: 2, narx: 895, nom: "Mac mini M2 512GB", reyting: 4.8, sharh: 12 },
    { id: 3, narx: 85, nom: "iPhone 14 Pro Max", reyting: 4.6, sharh: 12 },
  ],
};

const blogData = {
  blogKategoriyalar: [
    {
      nom: "Tips (96)",
      sub: ["All (96)", "Smartphone (14)", "MacBook (15)", "AirPods (23)", "iPad (35)"],
    },
    {
      nom: "Technology Knowledge (56)",
      sub: ["News (16)", "iPad (34)", "MacBook (54)", "Laptop (12)"],
    },
  ],
  blogPostlar: [
    {
      id: 1,
      rasm: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Tips", "Smartphone", "iPhone"],
      sarlavha: "How to use effective, easy-to-remember keyboard shortcuts for MacBook",
      katta: true,
    },
    {
      id: 2,
      rasm: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Tips", "MacBook"],
      sarlavha: "How to Force Restart a MacBook, MacBook Air, and MacBook Pro",
    },
    {
      id: 3,
      rasm: "https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80",
      teglar: ["MacBook"],
      sarlavha: "MacBook Air vs. MacBook Pro Buyer's Guide",
    },
    {
      id: 4,
      rasm: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Smartphone", "iPhone"],
      sarlavha: "How to Change App Icons on Your iPhone's Home Screen",
    },
    {
      id: 5,
      rasm: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      teglar: ["TV"],
      sarlavha: "YouTube TV Announces New Smart TV App With Apple TV",
    },
    {
      id: 6,
      rasm: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Apple Watch"],
      sarlavha: "Apple Watch SE 2 vs. Apple Watch Series 8 Buyer's Guide",
    },
    {
      id: 7,
      rasm: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Tips", "AirPods"],
      sarlavha: "Apple's new second-generation noise-canceling AirPods",
    },
    {
      id: 8,
      rasm: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=1200&q=80",
      teglar: ["iPad"],
      sarlavha: "M1 vs. M2 MacBook Air Buyer's Guide: Is It Worth Upgrading?",
    },
    {
      id: 9,
      rasm: "https://images.unsplash.com/photo-1551721434-8b94ddff0e6d?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Tips", "Smartphone", "iPhone"],
      sarlavha: "How to Passcode Lock an App on iPhone",
    },
    {
      id: 10,
      rasm: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Tips", "Headset"],
      sarlavha: "Twelve South Debuts 'Fermata' Headphone Charging Stand",
    },
    {
      id: 11,
      rasm: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=1200&q=80",
      teglar: ["Tips", "Headset"],
      sarlavha: "Lightning Headphones: Are They Better or Just an Inconvenience?",
    },
    {
      id: 12,
      rasm: "https://images.unsplash.com/photo-1605901309584-818e25960a8f?auto=format&fit=crop&w=1200&q=80",
      teglar: ["PlayStation"],
      sarlavha: "Sony Announces PlayStation 4, Second-Screen Experience PlayStation",
    },
  ],
  blogYangiPostlar: [
    {
      id: 101,
      rasm: "https://images.unsplash.com/photo-1526481280695-3c687fd643ed?auto=format&fit=crop&w=900&q=80",
      teglar: ["Tips", "Keyboard"],
      matn: "Lorem ipsum dolor sit amet consectetur ulla pretium.",
    },
    {
      id: 102,
      rasm: "https://images.unsplash.com/photo-1527443154391-507e9dc6c5cc?auto=format&fit=crop&w=900&q=80",
      teglar: ["Camera", "Webcam"],
      matn: "Lorem ipsum dolor sit amet consectetur ulla pretium.",
    },
  ],
};

const maketData = (() => {
  const rasm = {
    logo: "https://i.ibb.co/twydS4g4/LOGO-1.png",
    heroFon: "https://i.ibb.co/VYbX1Fs4/BACKGROUND.png",
    newArrivalsBanner: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=80",
    macbookBanner: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1800&q=80",
    kartRasm1: "https://images.unsplash.com/photo-1641893978985-a0c233b14f9b?auto=format&fit=crop&w=900&q=80",
    kartRasm2: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?auto=format&fit=crop&w=900&q=80",
    kartRasm3: "https://images.unsplash.com/photo-1517059224940-d4af9eec41b7?auto=format&fit=crop&w=900&q=80",
    telefonQora: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?auto=format&fit=crop&w=900&q=80",
  };

  const ikon = {
    yurak: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/heart.svg",
    solishtir: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/arrow-left-right.svg",
    savat: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/cart.svg",
    odam: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/person.svg",
    qidiruv: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/search.svg",
    lokatsiya: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/geo-alt.svg",
    instagram: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/instagram.svg",
    yulduz: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/star-fill.svg",
  };

  const menyu = ["Product", "Flash Sale", "Best Sellers", "Specials Offers", "Blog", "About Us", "Contact Us"];

  const xizmatlar = [
    { nom: "FREE SHIPPING", izoh: "Orders $50 or more", rang: "yashil", belgi: "🚚" },
    { nom: "CONFIRM ORDER PAYMENT", izoh: "Fast and safe checkout", rang: "qora", belgi: "✓" },
    { nom: "TAX FREE IN USA", izoh: "New arrivals every week", rang: "yashil", belgi: "⏱" },
    { nom: "FREE DISCOUNT CODE", izoh: "Weekly deals for you", rang: "qora", belgi: "🎫" },
  ];

  const flashSale = [
    {
      id: 1,
      nom: "Logitech K120 Keyboard",
      narx: 29.99,
      eski: 39.99,
      reyting: 4.7,
      sotuv: "Hot",
      chegirma: "-20%",
      rasm: rasm.kartRasm1,
    },
    {
      id: 2,
      nom: "Apple EarPods (Original)",
      narx: 29.99,
      eski: 39.99,
      reyting: 4.8,
      sotuv: "New",
      chegirma: "-20%",
      rasm: rasm.kartRasm2,
    },
  ];

  const kategoriyalar = [
    { id: 1, nom: "Smartphones", items: ["iPhone", "Android", "Accessories"] },
    { id: 2, nom: "Cameras", items: ["DSLR", "Action Cam", "Lenses"] },
    { id: 3, nom: "Watches", items: ["Apple Watch", "Smart Watch", "Bands"] },
    { id: 4, nom: "Headphones", items: ["AirPods", "Gaming", "Studio"] },
    { id: 5, nom: "Tablet", items: ["iPad", "Android Tab", "Stylus"] },
    { id: 6, nom: "Laptop", items: ["Ultrabook", "Gaming", "Accessories"] },
  ];

  const newArrivals = [
    { id: 11, nom: "Macbook 2023", narx: 250, eski: 299, reyting: 4.6, belgi: "New", rasm: rasm.kartRasm3 },
    { id: 12, nom: "iPhone 14 Pro", narx: 545, eski: 599, reyting: 4.7, belgi: "New", rasm: rasm.telefonQora },
    { id: 13, nom: "Apple Watch Ultra", narx: 825, eski: 899, reyting: 4.5, belgi: "Sale", rasm: rasm.kartRasm2 },
    { id: 14, nom: "Camera Lens Pro", narx: 165, eski: 199, reyting: 4.4, belgi: "New", rasm: rasm.kartRasm1 },
    { id: 15, nom: "AirPods Max", narx: 475, eski: 529, reyting: 4.6, belgi: "Sale", rasm: rasm.kartRasm3 },
    { id: 16, nom: "Gaming Mouse", narx: 135, eski: 169, reyting: 4.5, belgi: "New", rasm: rasm.kartRasm2 },
  ];

  const bestSellers = [
    { id: 21, nom: "Sony Controller", narx: 89, eski: 109, reyting: 4.6, belgi: "New", rasm: rasm.kartRasm1 },
    { id: 22, nom: "MacBook Air 2023", narx: 425, eski: 489, reyting: 4.7, belgi: "New", rasm: rasm.kartRasm3 },
    { id: 23, nom: "Apple Watch Series", narx: 265, eski: 299, reyting: 4.5, belgi: "Sale", rasm: rasm.kartRasm2 },
    { id: 24, nom: "Logitech Keyboard Set", narx: 165, eski: 199, reyting: 4.4, belgi: "New", rasm: rasm.kartRasm1 },
  ];

  const topRated = [
    { id: 31, nom: "iPhone 14 Plus", narx: 599, eski: 699, reyting: 4.8, rasm: rasm.telefonQora },
    { id: 32, nom: "Camera Pro", narx: 245, eski: 299, reyting: 4.7, rasm: rasm.kartRasm1 },
    { id: 33, nom: "Wireless Headphone", narx: 155, eski: 199, reyting: 4.6, rasm: rasm.kartRasm2 },
  ];

  return { rasm, ikon, menyu, xizmatlar, flashSale, kategoriyalar, newArrivals, bestSellers, topRated };
})();

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<BoshSahifa data={maketData} />} />
      <Route path="/shop" element={<Shop data={shopData} ui={maketData} />} />
      <Route path="/blog" element={<Blog data={blogData} ui={maketData} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
