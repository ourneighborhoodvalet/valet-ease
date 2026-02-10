import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Recycle, Truck, Clock, Shield } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import type { Services } from '@/entities';
import { Image } from '@/components/ui/image';

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

export default function ServicesPage() {
  const navigate = useNavigate();
  const [services, setServices] = useState<Services[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadServices();
  }, []);

  const loadServices = async () => {
    try {
      const result = await BaseCrudService.getAll<Services>('services');
      setServices(result.items);
    } catch (error) {
      console.error('Error loading services:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
                Our Services
              </h1>
              <p className="text-xl text-white/90">
                Comprehensive amenity solutions designed to enhance your multifamily community experience
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 min-h-[400px]">
        <div className="container mx-auto px-4">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner />
            </div>
          ) : services.length > 0 ? (
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service) => (
                  <Card 
                    key={service._id}
                    className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105 bg-white"
                  >
                    {service.serviceImage && (
                      <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 overflow-hidden">
                        <Image src={service.serviceImage} alt={service.serviceName || 'Service'} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                      </div>
                    )}
                    <div className="p-6">
                      {service.serviceCategory && (
                        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm rounded-full mb-3">
                          {service.serviceCategory}
                        </span>
                      )}
                      <h3 className="font-heading text-2xl mb-3 text-foreground">
                        {service.serviceName}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {service.shortDescription}
                      </p>
                      {service.detailedDescription && (
                        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                          {service.detailedDescription}
                        </p>
                      )}
                      <Button 
                        variant="outline"
                        className="w-full hover:bg-primary hover:text-white transition-all"
                        onClick={() => navigate('/contact')}
                      >
                        Learn More
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground">No services available at this time.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">
                Why Choose Our Services
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We deliver exceptional service quality that sets the standard in the multifamily industry
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Clock,
                  title: 'Reliable Service',
                  description: 'Consistent, on-time service you can count on'
                },
                {
                  icon: Shield,
                  title: 'Fully Insured',
                  description: 'Complete coverage for peace of mind'
                },
                {
                  icon: Truck,
                  title: 'Professional Team',
                  description: 'Trained and vetted service professionals'
                },
                {
                  icon: Recycle,
                  title: 'Eco-Friendly',
                  description: 'Sustainable waste management practices'
                }
              ].map((feature, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="text-primary" size={32} />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-[#005C56] to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contact us today to learn how our services can benefit your community
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Request A Quote
            </Button>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
