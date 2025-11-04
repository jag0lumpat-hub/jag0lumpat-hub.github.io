import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2 } from "lucide-react";

const allProducts = [
  { id: 1, name: "Air Force Classic White", price: "$120", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop", category: "Men's Shoes", description: "Timeless design meets modern comfort. Perfect for everyday wear." },
  { id: 2, name: "Jordan Retro High", price: "$180", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop", category: "Men's Shoes", description: "Iconic basketball heritage in a premium high-top silhouette." },
  { id: 3, name: "Ultra Boost Runner", price: "$150", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop", category: "Women's Shoes", description: "Energy-returning cushioning for your best run yet." },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === Number(id)) || allProducts[0];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <Link to="/" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-8">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Shop
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="aspect-square bg-muted rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <p className="text-3xl font-bold text-accent">{product.price}</p>
              </div>

              <p className="text-lg text-muted-foreground">
                {product.description}
              </p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Size</label>
                  <div className="grid grid-cols-5 gap-2">
                    {['7', '8', '9', '10', '11'].map((size) => (
                      <Button key={size} variant="outline" className="w-full">
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button size="lg" className="flex-1 bg-accent hover:bg-accent/90">
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>
              </div>

              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Product Details</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Premium materials</li>
                    <li>• Cushioned insole</li>
                    <li>• Durable rubber outsole</li>
                    <li>• Available in multiple colors</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetail;
