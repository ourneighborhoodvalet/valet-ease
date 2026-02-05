import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { BaseCrudService } from '@/integrations';
import type { CareerOpportunities } from '@/entities';
import { format } from 'date-fns';

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

export default function CareersPage() {
  const navigate = useNavigate();
  const [careers, setCareers] = useState<CareerOpportunities[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadCareers();
  }, []);

  const loadCareers = async () => {
    try {
      const result = await BaseCrudService.getAll<CareerOpportunities>('careers');
      setCareers(result.items);
    } catch (error) {
      console.error('Error loading careers:', error);
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
                Join Our Team
              </h1>
              <p className="text-xl text-white/90">
                Build a rewarding career with the industry leader in multifamily amenity services
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Why Work With Us */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">
                Why Work at Valet Living
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a company that values its employees and provides opportunities for growth and development
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Competitive Pay',
                  description: 'Industry-leading compensation packages'
                },
                {
                  title: 'Career Growth',
                  description: 'Clear paths for advancement and development'
                },
                {
                  title: 'Flexible Schedules',
                  description: 'Work-life balance that fits your lifestyle'
                },
                {
                  title: 'Great Culture',
                  description: 'Supportive team environment and recognition'
                }
              ].map((benefit, index) => (
                <Card 
                  key={index}
                  className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white"
                >
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

      {/* Job Listings */}
      <section className="py-20 bg-gradient-to-b from-secondary/30 to-background min-h-[400px]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl mb-4 text-foreground">
              Current Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our open positions and find the perfect role for you
            </p>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <LoadingSpinner />
            </div>
          ) : careers.length > 0 ? (
            <AnimatedSection>
              <div className="max-w-4xl mx-auto space-y-6">
                {careers.map((job) => (
                  <Card 
                    key={job._id}
                    className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-[1.02] bg-white"
                  >
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-start gap-3 mb-3">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                            <Briefcase className="text-primary" size={24} />
                          </div>
                          <div>
                            <h3 className="font-heading text-2xl mb-2 text-foreground">
                              {job.jobTitle}
                            </h3>
                            <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                              {job.department && (
                                <span className="inline-flex items-center px-3 py-1 bg-primary/10 text-primary rounded-full">
                                  {job.department}
                                </span>
                              )}
                              {job.employmentType && (
                                <span className="inline-flex items-center gap-1">
                                  <Clock size={16} />
                                  {job.employmentType}
                                </span>
                              )}
                              {job.location && (
                                <span className="inline-flex items-center gap-1">
                                  <MapPin size={16} />
                                  {job.location}
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                        
                        {job.jobDescription && (
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {job.jobDescription}
                          </p>
                        )}
                        
                        {job.datePosted && (
                          <p className="text-sm text-muted-foreground">
                            Posted: {format(new Date(job.datePosted), 'MMM d, yyyy')}
                          </p>
                        )}
                      </div>
                      
                      <Button 
                        className="bg-primary hover:bg-primary/90 text-white whitespace-nowrap"
                        onClick={() => {
                          if (job.applicationUrl) {
                            window.open(job.applicationUrl, '_blank');
                          } else {
                            navigate('/contact');
                          }
                        }}
                      >
                        Apply Now
                        <ArrowRight className="ml-2" size={16} />
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </AnimatedSection>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-muted-foreground mb-6">
                No open positions at this time. Check back soon for new opportunities!
              </p>
              <Button 
                variant="outline"
                onClick={() => navigate('/contact')}
              >
                Contact Us About Future Opportunities
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-[#005C56] to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join our team and help us deliver exceptional service to communities nationwide
            </p>
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 transition-all hover:scale-105"
              onClick={() => navigate('/contact')}
            >
              Get In Touch
            </Button>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
