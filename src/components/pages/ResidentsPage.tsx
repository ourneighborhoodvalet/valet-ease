import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Clock, MapPin, Smile, Leaf, Shield, Calendar } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  
  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ${className || ''}`}>
      <style>{`
        .is-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
      {children}
    </div>
  );
};

export default function ResidentsPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-[#005C56] to-primary overflow-hidden">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-white mb-6">
                Convenient Living Made Simple
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Enjoy hassle-free doorstep trash collection and premium amenity services designed to make your life easier
              </p>
              <Button 
                size="lg"
                className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Learn More
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* How It Works */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">
                How Valet Trash Works
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Simple, convenient service that fits seamlessly into your daily routine
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                {
                  step: '1',
                  title: 'Place Your Trash',
                  description: 'Set your bagged trash outside your door by the designated time'
                },
                {
                  step: '2',
                  title: 'We Collect',
                  description: 'Our professional team collects and disposes of your trash'
                },
                {
                  step: '3',
                  title: 'Enjoy Your Time',
                  description: 'No more trips to the dumpster - spend your time on what matters'
                }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg">
                    {item.step}
                  </div>
                  <h3 className="font-heading text-2xl mb-3 text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Benefits Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">
                Benefits for Residents
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience the convenience and peace of mind that comes with our premium services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: 'Save Time',
                  description: 'No more late-night trips to the dumpster or fitting trash runs into your busy schedule'
                },
                {
                  icon: Smile,
                  title: 'Convenience',
                  description: 'Simply place your trash outside your door and we handle the rest'
                },
                {
                  icon: Shield,
                  title: 'Safety & Security',
                  description: 'Avoid walking to dumpsters in the dark or bad weather conditions'
                },
                {
                  icon: Leaf,
                  title: 'Eco-Friendly',
                  description: 'Proper waste disposal and recycling practices for a cleaner community'
                },
                {
                  icon: Calendar,
                  title: 'Regular Service',
                  description: 'Consistent collection schedule you can rely on every week'
                },
                {
                  icon: MapPin,
                  title: 'Community Cleanliness',
                  description: 'Keeps common areas clean and free from overflowing dumpsters'
                }
              ].map((benefit, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                    <benefit.icon className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {benefit.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Service Details */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
                  What to Expect
                </h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="font-heading text-xl mb-2 text-foreground">Service Schedule</h3>
                    <p className="text-muted-foreground">
                      Collection typically occurs Sunday through Thursday evenings. Check with your property management for specific times at your community.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2 text-foreground">What We Collect</h3>
                    <p className="text-muted-foreground">
                      We collect bagged household trash placed outside your door. Items must be properly bagged and within size/weight limits specified by your community.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-heading text-xl mb-2 text-foreground">Professional Service</h3>
                    <p className="text-muted-foreground">
                      Our trained, uniformed team members provide reliable, courteous service while maintaining the cleanliness and appearance of your community.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <h3 className="font-heading text-2xl mb-4 text-foreground">Resident Portal</h3>
                  <p className="text-muted-foreground mb-6">
                    Access service schedules, submit requests, and manage your account through our convenient online portal.
                  </p>
                  <Button 
                    className="w-full bg-primary hover:bg-primary/90 text-white"
                    onClick={() => navigate('/contact')}
                  >
                    Access Portal
                  </Button>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                  <h3 className="font-heading text-2xl mb-4 text-foreground">Questions?</h3>
                  <p className="text-muted-foreground mb-6">
                    Our customer service team is here to help with any questions or concerns about your service.
                  </p>
                  <Button 
                    variant="outline"
                    className="w-full hover:bg-accent hover:text-white"
                    onClick={() => navigate('/contact')}
                  >
                    Contact Support
                  </Button>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-[#005C56] to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Experience the Convenience
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied residents who enjoy hassle-free living with Valet Living services
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Learn More
            </Button>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
