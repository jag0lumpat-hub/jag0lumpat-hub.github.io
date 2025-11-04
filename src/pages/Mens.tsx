import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";

const mensProducts = [
  { id: 1, name: "Air Force Classic White", price: "$120", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 2, name: "Jordan Retro High", price: "$180", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 5, name: "Street Style Low", price: "$110", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 7, name: "Classic Leather High-Top", price: "$140", image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 8, name: "Running Elite Pro", price: "$160", image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 9, name: "Urban Street Sneaker", price: "$95", image: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 10, name: "Basketball Legend", price: "$200", image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 11, name: "Casual Canvas Low", price: "$85", image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 12, name: "Performance Trainer", price: "$125", image: "https://images.unsplash.com/photo-1595341888016-a392ef81b7de?w=800&h=800&fit=crop", category: "Men's Shoes" },
];

const Mens = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Men's Collection</h1>
            <p className="text-lg text-muted-foreground">Discover the latest styles and trending kicks</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">{mensProducts.length} Products</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {mensProducts.map((product) => (
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

export default Mens;
