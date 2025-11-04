import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share2 } from "lucide-react";
import { getProductById } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useState } from "react";

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<string>("9");

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 py-12">
          <div className="container text-center">
            <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
            <Link to="/">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Shop
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, selectedSize);
  };

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
                      <Button 
                        key={size} 
                        variant={selectedSize === size ? "default" : "outline"} 
                        className="w-full"
                        onClick={() => setSelectedSize(size)}
                        data-testid={`button-size-${size}`}
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1 bg-accent hover:bg-accent/90"
                    onClick={handleAddToCart}
                    data-testid="button-add-to-cart-detail"
                  >
                    Add to Cart
                  </Button>
                  <Button size="lg" variant="outline" data-testid="button-favorite">
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" data-testid="button-share">
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
