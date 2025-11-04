import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";

const kidsProducts = [
  { id: 4, name: "Kids Air Max Pro", price: "$90", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop", category: "Kids' Shoes" },
  { id: 19, name: "Junior Running Star", price: "$75", image: "https://images.unsplash.com/photo-1514989940723-e8e51635b782?w=800&h=800&fit=crop", category: "Kids' Shoes" },
  { id: 20, name: "Youth Sport Classic", price: "$80", image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&h=800&fit=crop", category: "Kids' Shoes" },
  { id: 21, name: "Kids Comfort Walker", price: "$65", image: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?w=800&h=800&fit=crop", category: "Kids' Shoes" },
  { id: 22, name: "Junior Street Style", price: "$70", image: "https://images.unsplash.com/photo-1560769629-975ec94e6a86?w=800&h=800&fit=crop", category: "Kids' Shoes" },
  { id: 23, name: "Youth Performance", price: "$85", image: "https://images.unsplash.com/photo-1627225924765-552d49cf47ad?w=800&h=800&fit=crop", category: "Kids' Shoes" },
];

const Kids = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-12 bg-muted/30">
          <div className="container">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Kids Collection</h1>
            <p className="text-lg text-muted-foreground">Comfort and fun for active kids</p>
          </div>
        </section>

        <section className="py-12">
          <div className="container">
            <div className="flex items-center justify-between mb-8">
              <p className="text-muted-foreground">{kidsProducts.length} Products</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {kidsProducts.map((product) => (
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

export default Kids;
