import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Award, BarChart3, CheckCircle, DollarSign, TrendingUp, Users } from 'lucide-react';
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

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

export default function PropertyManagersPage() {
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
                Solutions for Property Managers
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Enhance your community with industry-leading amenity services that residents love and property managers trust
              </p>
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Request A Quote
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Benefits Section */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">
                Why Property Managers Choose Neighborhood Valet
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive solutions that drive value for your properties and satisfaction for your residents
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: TrendingUp,
                  title: 'Increase Property Value',
                  description: 'Premium amenities that differentiate your properties in competitive markets'
                },
                {
                  icon: Users,
                  title: 'Boost Resident Retention',
                  description: 'Services that residents love lead to higher renewal rates and satisfaction'
                },
                {
                  icon: DollarSign,
                  title: 'Revenue Generation',
                  description: 'Turn amenities into profit centers with our proven service models'
                },
                {
                  


                },
                {
                  icon: BarChart3,
                  title: 'Operational Efficiency',
                  description: 'Streamline operations and reduce staff workload with our services'
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

      {/* Features Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-b from-secondary/30 to-background">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl mb-6 text-foreground">
                  Comprehensive Service Solutions
                </h2>
                <div className="space-y-4">
                  {[
                    'Doorstep valet trash collection services',
                    'Customizable service schedules to fit your community',
                    'Professional, uniformed service teams',
                    'Full insurance and liability coverage',
                    'Real-time service tracking and reporting',
                    'Dedicated account management support',
                    'Flexible contract terms',
                    'Proven ROI and resident satisfaction metrics'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="text-accent flex-shrink-0 mt-1" size={24} />
                      <p className="text-lg text-foreground">{feature}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">1000+</div>
                  <p className="text-xl font-heading text-foreground">Communities Served</p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
                  <div className="text-5xl font-bold text-accent mb-2">95%</div>
                  <p className="text-xl font-heading text-foreground">Client Satisfaction Rate</p>
                </Card>
                <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
                  <div className="text-5xl font-bold text-primary mb-2">20+</div>
                  <p className="text-xl font-heading text-foreground">Years of Experience</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Testimonial Section */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 bg-gradient-to-br from-secondary/30 to-background border-border/50">
                <div className="text-center">
                  <div className="text-6xl text-primary mb-6">&ldquo;</div>
                  <p className="text-xl md:text-2xl text-foreground mb-6 italic">
                    Neighborhood Valet has been an invaluable partner for our properties. Their service quality is exceptional, and our residents consistently rate it as one of their favorite amenities.
                  </p>
                  <div className="font-heading text-lg text-primary">
                    Property Management Professional
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-[#005C56] to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Let&apos;s Discuss Your Community&apos;s Needs
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Schedule a consultation to learn how Neighborhood Valet can enhance your properties
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Request A Quote
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-6 transition-all hover:scale-105"
                onClick={() => navigate('/services')}
              >
                View Services
              </Button>
            </div>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
