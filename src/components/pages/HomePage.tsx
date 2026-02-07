// WI-HPI
import { useEffect, useRef, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Users, 
  Building2, 
  Recycle, 
  TrendingUp, 
  Play, 
  ChevronRight,
  Star,
  Quote,
  ArrowUpRight
} from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Badge } from '@/components/ui/badge';

// --- ANIMATION COMPONENTS ---

const AnimatedSection: React.FC<{ 
  children: React.ReactNode; 
  className?: string; 
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'fade';
}> = ({ children, className = '', delay = 0, direction = 'up' }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case 'up': return 'translate-y-8';
        case 'left': return '-translate-x-8';
        case 'right': return 'translate-x-8';
        default: return '';
      }
    }
    return 'translate-x-0 translate-y-0';
  };

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};

// --- DATA CONSTANTS ---

const PARTNER_LOGOS = [
  "https://www.valetliving.com/wp-content/uploads/2021/10/Abbey-A-Logo-Circle_Black-vector-1-height-1-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/06/AR-logo-Blend-small-v-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/ari-height-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/AVL-logo-height-1.png",
  "https://www.valetliving.com/wp-content/uploads/2022/01/BainbridgeCompanies-white.png",
  "https://www.valetliving.com/wp-content/uploads/2021/06/Bell-Partners-small-v-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/06/bh-management-small-v-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/carter-funds-height-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/CuW_Logo_White-height-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/Dolben_Logo_Blue294_Vector-height-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/Embrey-Logo-2019-White-EPS-file-1-ai-height-1.png",
  "https://www.valetliving.com/wp-content/uploads/2021/10/francis32png_422x175-height-1.png"
];

const SERVICES = [
  {
    id: 'trash',
    icon: Recycle,
    title: 'Doorstep Trash Collection',
    description: 'The #1 amenity resident request. We collect trash 5 nights a week, keeping your community clean and residents happy.',
    link: '/services/trash'
  },
  {
    id: 'management',
    icon: Building2,
    title: 'Property Management',
    description: 'Comprehensive solutions that streamline operations, reduce workload for your team, and increase net operating income.',
    link: '/services/management'
  },
  {
    id: 'resident',
    icon: Users,
    title: 'Resident Services',
    description: 'From pet parks to package management, we provide the premium amenities that attract and retain quality residents.',
    link: '/services/residents'
  },
  {
    id: 'ops',
    icon: TrendingUp,
    title: 'Operational Excellence',
    description: 'Data-driven insights and proven systems that deliver consistent, reliable results for communities of all sizes.',
    link: '/services/operations'
  }
];

const BENEFITS = [
  'Industry-leading service reliability (99.8% pickup rate)',
  'Proven track record with major property management companies',
  'Enhanced resident satisfaction and retention scores',
  'Streamlined waste management operations',
  'Professional, background-checked, and uniformed service teams',
  'Flexible service options tailored to your community needs'
];

export default function HomePage() {
  const navigate = useNavigate();
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-paragraph overflow-x-hidden selection:bg-primary/20 selection:text-primary">
      <Header />
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        {/* Background Image with Parallax Feel */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://static.wixstatic.com/media/e622ff_07851b8bdf4949319123806fe9252bda~mv2.png?originWidth=1280&originHeight=704" 
            alt="Valet Living Office" 
            className="w-full h-full object-cover scale-105 animate-slow-zoom"
          />
          {/* Heavy Green Overlay matching screenshot */}
          <div className="absolute inset-0 bg-[#005C56]/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#005C56] via-[#005C56]/80 to-transparent opacity-90" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10 pt-20">
          <div className="max-w-4xl">
            <AnimatedSection delay={100}>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-7xl text-white mb-8 leading-[1.1] tracking-tight drop-shadow-lg">Neighborhood Valet Trash & Amenity Services for Apartments, Condos & Multifamily Communities</h1>
            </AnimatedSection>
            
            <AnimatedSection delay={300}>
              <p className="text-xl md:text-2xl text-white/90 mb-10 font-light max-w-2xl leading-relaxed drop-shadow-md">
                The premier provider of the most used amenity services in the multifamily industry.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={500}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-12">
                <button 
                  onClick={() => setIsVideoModalOpen(true)}
                  className="group flex items-center space-x-4 text-white hover:text-accent transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Play className="text-primary ml-1 fill-primary" size={24} />
                  </div>
                  <span className="text-lg font-semibold tracking-wide border-b-2 border-transparent group-hover:border-accent pb-0.5">
                    Let us show you.
                  </span>
                </button>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={700}>
              <div className="flex flex-col sm:flex-row gap-5">
                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white text-lg px-10 py-7 rounded-sm transition-all hover:translate-y-[-2px] shadow-xl font-semibold tracking-wide"
                  onClick={() => navigate('/property-managers')}
                >
                  Property Managers
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#005C56] text-lg px-10 py-7 rounded-sm transition-all hover:translate-y-[-2px] backdrop-blur-sm font-semibold tracking-wide"
                  onClick={() => navigate('/residents')}
                >
                  Residents
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>

        {/* Decorative Bottom Curve/Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
      </section>
      {/* --- PARTNERS MARQUEE --- */}
      <section className="py-16 bg-background border-b border-border/40">
        <div className="container mx-auto px-4 mb-10">
          <AnimatedSection>
            <h2 className="font-heading text-2xl md:text-3xl text-center text-foreground/80">
              Our Community Partners
            </h2>
          </AnimatedSection>
        </div>
        
        <div className="relative w-full overflow-hidden bg-background">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
          
          <div className="flex animate-scroll whitespace-nowrap py-4">
            {/* Triple duplication for smooth infinite scroll */}
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS, ...PARTNER_LOGOS].map((logo, index) => (
              <div 
                key={index}
                className="inline-flex items-center justify-center mx-8 w-40 h-20 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer"
              >
                <Image 
                  src={logo}
                  alt="Partner Logo"
                  className="max-w-full max-h-full object-contain"
                  width={160}
                  height={80}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* --- SERVICES SECTION --- */}
      <section className="py-24 bg-secondary/30 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <AnimatedSection>
              <Badge className="mb-4 bg-primary/10 text-primary hover:bg-primary/20 px-4 py-1 text-sm uppercase tracking-wider">
                What We Do
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6">
                Comprehensive Amenity Services
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We provide essential services that enhance the living experience for residents and streamline operations for property managers, setting the standard for multifamily living.
              </p>
            </AnimatedSection>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <AnimatedSection key={service.id} delay={index * 100} className="h-full">
                <Link to={service.link} className="block h-full group">
                  <Card className="h-full border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white overflow-hidden relative">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                    <CardContent className="p-8 flex flex-col h-full">
                      <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                        <service.icon className="text-primary w-8 h-8" />
                      </div>
                      <h3 className="font-heading text-xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">
                        {service.description}
                      </p>
                      <div className="flex items-center text-primary font-semibold text-sm mt-auto group-hover:translate-x-2 transition-transform duration-300">
                        Learn More <ArrowRight className="ml-2 w-4 h-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mt-16">
            <AnimatedSection delay={400}>
              <Button 
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-10 py-6 rounded-full shadow-lg hover:shadow-primary/30 transition-all hover:scale-105"
                onClick={() => navigate('/services')}
              >
                View All Services
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* --- WHY CHOOSE US --- */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection direction="right">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-[2rem] blur-lg -z-10" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] group">
                  <Image 
                    src="https://static.wixstatic.com/media/e622ff_6f800a7fd97144f8b4bfa29de51b1676~mv2.png?originWidth=1152&originHeight=896" 
                    alt="Valet Living Team Member" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  
                  {/* Floating Stat Card */}
                  <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md p-6 rounded-xl shadow-lg border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Communities Served</p>
                        <p className="text-4xl font-bold text-primary font-heading">1,000+</p>
                      </div>
                      <div className="h-12 w-12 bg-accent/10 rounded-full flex items-center justify-center">
                        <Building2 className="text-accent w-6 h-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection direction="left">
              <div>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-8 text-foreground leading-tight">
                  Why Property Managers Choose <span className="text-primary">Valet Living</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-10">
                  We don't just collect trash; we provide peace of mind. Our services are designed to integrate seamlessly into your community, adding value from day one.
                </p>
                
                <div className="space-y-6 mb-10">
                  {BENEFITS.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                        <CheckCircle className="text-accent w-4 h-4 group-hover:text-white transition-colors" />
                      </div>
                      <p className="text-foreground/80 group-hover:text-foreground transition-colors">{benefit}</p>
                    </div>
                  ))}
                </div>

                <Button 
                  size="lg"
                  className="bg-accent hover:bg-accent/90 text-white px-8 py-6 text-lg rounded-sm shadow-md hover:shadow-xl transition-all hover:-translate-y-1"
                  onClick={() => navigate('/property-managers')}
                >
                  Learn More About Our Solutions
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      {/* --- TESTIMONIAL / QUOTE --- */}
      <section className="py-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection>
            <Quote className="w-16 h-16 mx-auto mb-8 text-white/30" />
            <h3 className="font-heading text-2xl md:text-4xl lg:text-5xl max-w-4xl mx-auto leading-tight mb-10">
              "Valet Living has completely transformed how we manage waste at our properties. The residents love the convenience, and my team loves the reliability."
            </h3>
            <div className="flex items-center justify-center space-x-4">
              <div className="text-right">
                <p className="font-bold text-xl">Sarah Jenkins</p>
                <p className="text-white/80">Regional Property Manager</p>
              </div>
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                <Star className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
      {/* --- CTA SECTION --- */}
      <section className="py-24 bg-gradient-to-br from-[#005C56] to-[#004a45] relative overflow-hidden">
        {/* Abstract shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection>
            <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
              Ready to Enhance Your Community?
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto font-light">
              Join thousands of satisfied property managers and residents who trust Valet Living for their amenity services.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg"
                className="bg-white text-[#005C56] hover:bg-gray-100 text-lg px-10 py-7 rounded-sm transition-all hover:scale-105 shadow-2xl font-bold min-w-[200px]"
                onClick={() => navigate('/contact')}
              >
                Request A Quote
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="bg-transparent border-2 border-white/30 text-white hover:bg-white/10 hover:border-white text-lg px-10 py-7 rounded-sm transition-all hover:scale-105 backdrop-blur-sm min-w-[200px]"
                onClick={() => navigate('/careers')}
              >
                Explore Careers
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
      <Footer />
      {/* Video Modal (Mock) */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 animate-in fade-in duration-300">
          <div className="relative w-full max-w-5xl aspect-video bg-black rounded-xl overflow-hidden shadow-2xl border border-white/10">
            <button 
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 bg-black/50 p-2 rounded-full"
            >
              <span className="sr-only">Close</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            </button>
            <div className="w-full h-full flex items-center justify-center text-white">
              <div className="text-center">
                <Play className="w-20 h-20 mx-auto mb-4 opacity-50" />
                <p className="text-xl">Video Player Placeholder</p>
                <p className="text-sm text-white/50 mt-2">Click close to return</p>
              </div>
            </div>
          </div>
        </div>
      )}
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        @keyframes slow-zoom {
          0% { transform: scale(1.05); }
          100% { transform: scale(1.15); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s alternate infinite ease-in-out;
        }
      `}</style>
    </div>
  );
}