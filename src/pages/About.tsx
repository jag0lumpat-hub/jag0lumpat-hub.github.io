import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Award, TrendingUp, Users } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        <section className="py-20 bg-muted/30">
          <div className="container text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About KICKZ</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted destination for the latest and greatest in sneaker culture since 2020
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <Award className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-2">Premium Quality</h3>
                <p className="text-muted-foreground">
                  Only authentic products from authorized retailers
                </p>
              </div>
              <div className="text-center p-6">
                <TrendingUp className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-2">Latest Trends</h3>
                <p className="text-muted-foreground">
                  Stay ahead with the newest releases and collections
                </p>
              </div>
              <div className="text-center p-6">
                <Users className="h-12 w-12 mx-auto mb-4 text-accent" />
                <h3 className="text-2xl font-bold mb-2">Community First</h3>
                <p className="text-muted-foreground">
                  Join thousands of sneaker enthusiasts worldwide
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="container max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, KICKZ started with a simple mission: to bring the world's best sneakers to enthusiasts everywhere. What began as a small online store has grown into a thriving community of sneakerheads who share our passion for quality footwear.
              </p>
              <p>
                We believe that the right pair of shoes can transform not just your outfit, but your entire day. That's why we carefully curate our selection, working directly with top brands to bring you exclusive releases and timeless classics.
              </p>
              <p>
                Today, we're proud to serve customers in over 50 countries, offering everything from limited-edition drops to everyday essentials. Our commitment to authenticity, quality, and customer satisfaction remains at the heart of everything we do.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
