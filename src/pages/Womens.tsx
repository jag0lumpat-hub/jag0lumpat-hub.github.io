import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";

const womensProducts = [
  { id: 3, name: "Ultra Boost Runner", price: "$150", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 6, name: "Performance Training", price: "$130", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 13, name: "Classic White Low", price: "$115", image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 14, name: "Fashion Sport Hybrid", price: "$145", image: "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 15, name: "Lifestyle Comfort Plus", price: "$105", image: "https://images.unsplash.com/photo-1603808033192-082d6919d3e1?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 16, name: "Running Cloud Elite", price: "$155", image: "https://images.unsplash.com/photo-1612902376937-0d9e1755fe9f?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 17, name: "Urban Chic Sneaker", price: "$125", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 18, name: "Athletic Performance", price: "$140", image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&h=800&fit=crop", category: "Women's Shoes" },
];

const Womens = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Women's Collection</h1>
            <p className="text-lg text-muted-foreground">Style meets performance in every step</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">{womensProducts.length} Products</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {womensProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Womens;
