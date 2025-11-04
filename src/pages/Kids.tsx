import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { getKidsProducts } from "@/data/products";

const kidsProducts = getKidsProducts();

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
