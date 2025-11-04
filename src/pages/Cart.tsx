import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus, Trash2, ShoppingBag, ArrowLeft } from "lucide-react";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-1 py-12">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center py-16">
              <ShoppingBag className="h-24 w-24 mx-auto text-muted-foreground mb-6" />
              <h1 className="text-3xl font-bold mb-4">Keranjang Belanja Kosong</h1>
              <p className="text-muted-foreground mb-8">
                Belum ada produk di keranjang belanja Anda. Mulai belanja sekarang!
              </p>
              <Link to="/">
                <Button size="lg" data-testid="button-continue-shopping">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Lanjut Belanja
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-2" data-testid="text-cart-title">Keranjang Belanja</h1>
              <p className="text-muted-foreground">
                {cart.length} item{cart.length !== 1 ? 's' : ''} di keranjang Anda
              </p>
            </div>
            <Button variant="outline" onClick={clearCart} data-testid="button-clear-cart">
              <Trash2 className="mr-2 h-4 w-4" />
              Hapus Semua
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <Card key={`${item.id}-${item.size || 'default'}`} className="p-4" data-testid={`card-cart-item-${index}`}>
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                        data-testid={`img-cart-item-${index}`}
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <div>
                          <h3 className="font-semibold line-clamp-1" data-testid={`text-cart-item-name-${index}`}>
                            {item.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{item.category}</p>
                          {item.size && (
                            <p className="text-sm text-muted-foreground">
                              Size: {item.size}
                            </p>
                          )}
                        </div>
                        <Button
                          variant="ghost"
                          size="icon"
                          onClick={() => removeFromCart(item.id, item.size)}
                          data-testid={`button-remove-item-${index}`}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                        {item.description}
                      </p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity - 1, item.size)}
                            data-testid={`button-decrease-quantity-${index}`}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-8 text-center font-medium" data-testid={`text-quantity-${index}`}>
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            className="h-8 w-8"
                            onClick={() => updateQuantity(item.id, item.quantity + 1, item.size)}
                            data-testid={`button-increase-quantity-${index}`}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-bold text-lg" data-testid={`text-item-total-${index}`}>
                            ${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {item.price} each
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div className="lg:col-span-1">
              <Card className="p-6 sticky top-4">
                <h2 className="text-xl font-bold mb-4">Ringkasan Pesanan</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium" data-testid="text-subtotal">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Ongkos Kirim</span>
                    <span className="font-medium">Gratis</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between">
                    <span className="font-bold text-lg">Total</span>
                    <span className="font-bold text-lg" data-testid="text-total-price">
                      ${getTotalPrice().toFixed(2)}
                    </span>
                  </div>
                </div>

                <Button className="w-full mb-3" size="lg" data-testid="button-checkout">
                  Checkout Sekarang
                </Button>
                
                <Link to="/">
                  <Button variant="outline" className="w-full" data-testid="button-continue-shopping-2">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Lanjut Belanja
                  </Button>
                </Link>

                <div className="mt-6 pt-6 border-t">
                  <h3 className="font-semibold mb-2 text-sm">Keuntungan Berbelanja:</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>✓ Gratis ongkir untuk semua pesanan</li>
                    <li>✓ Garansi 30 hari</li>
                    <li>✓ Produk original 100%</li>
                    <li>✓ Pembayaran aman</li>
                  </ul>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
