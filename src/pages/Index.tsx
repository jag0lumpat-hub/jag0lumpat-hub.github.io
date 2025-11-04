import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gift, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const featuredProducts = [
  { id: 1, name: "Air Force Classic White", price: "$120", image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 2, name: "Jordan Retro High", price: "$180", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 3, name: "Ultra Boost Runner", price: "$150", image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&h=800&fit=crop", category: "Women's Shoes" },
  { id: 4, name: "Kids Air Max Pro", price: "$90", image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&h=800&fit=crop", category: "Kids' Shoes" },
  { id: 5, name: "Street Style Low", price: "$110", image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=800&h=800&fit=crop", category: "Men's Shoes" },
  { id: 6, name: "Performance Training", price: "$130", image: "https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=800&h=800&fit=crop", category: "Women's Shoes" },
];

const giftCategories = [
  { title: "For Him", icon: TrendingUp, link: "/mens", description: "Trending styles" },
  { title: "For Her", icon: Sparkles, link: "/womens", description: "Latest collection" },
  { title: "For Kids", icon: Gift, link: "/kids", description: "Fun & comfort" },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative h-[600px] flex items-center justify-center bg-[image:var(--hero-gradient)] text-primary-foreground">
          <div className="container text-center space-y-6 px-4">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              Gift Guide 2024
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
              Find the perfect kicks for everyone on your list
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Shop Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-primary-foreground/20 bg-transparent hover:bg-primary-foreground/10 text-primary-foreground">
                Explore Collections
              </Button>
            </div>
          </div>
        </section>

        {/* Gift Categories */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {giftCategories.map((category) => (
                <Link
                  key={category.title}
                  to={category.link}
                  className="group relative overflow-hidden rounded-lg bg-card border border-border p-8 text-center transition-all hover:border-accent hover:shadow-[var(--shadow-hover)]"
                >
                  <category.icon className="h-12 w-12 mx-auto mb-4 text-accent" />
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground">{category.description}</p>
                  <ArrowRight className="absolute bottom-4 right-4 h-5 w-5 opacity-0 transform translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-accent" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="py-16">
          <div className="container">
            <div className="flex items-center justify-between mb-12">
              <h2 className="text-3xl font-bold">Featured Gifts</h2>
              <Link to="/mens">
                <Button variant="ghost">
                  View All <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-4xl font-bold mb-4">Can't Decide?</h2>
            <p className="text-xl mb-8 text-primary-foreground/90">Get a gift card and let them choose their perfect pair</p>
            <Button size="lg" variant="secondary">
              Buy Gift Cards
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
