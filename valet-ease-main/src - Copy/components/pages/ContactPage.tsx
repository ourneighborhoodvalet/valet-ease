import { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { SITE } from "@/config/site";
import { toast } from "@/hooks/use-toast";
import { BaseCrudService } from "@/integrations/cms/service";

const AnimatedSection: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`opacity-0 translate-y-8 transition-all duration-700 ${className || ""}`}>
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

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  // honeypot (hidden from real users)
  company: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    company: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Honeypot: bots often fill hidden fields
    if (formData.company.trim().length > 0) {
      setSubmitSuccess(true);
      return;
    }

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim(),
        subject: formData.subject.trim(),
        message: formData.message.trim(),
        submittedAt: new Date().toISOString(),
        pageUrl: window.location.href,
      };

      // Save to Wix CMS (collection ID in SITE.contactCollectionId).
      // If Wix CMS isn't configured/available, this will throw and we fall back.
      await BaseCrudService.create(SITE.contactCollectionId, payload);

      setSubmitSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "", company: "" });

      toast({
        title: "Message sent",
        description: "Thanks — we’ll get back to you shortly.",
      });

      setTimeout(() => setSubmitSuccess(false), 6000);
    } catch (err) {
      console.error("Contact form submit error:", err);

      toast({
        title: "Couldn’t send your message",
        description: `Please call/text ${SITE.phoneDisplay} and we’ll take care of you.`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background font-paragraph">
      <Header />

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-br from-secondary to-background overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="font-heading text-4xl md:text-6xl text-foreground mb-6">
                Contact <span className="text-primary">Neighborhood Valet</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get a quote, request a walkthrough, or ask a quick question. We respond fast and keep communication clear.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Methods */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Phone className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground">Call / Text</h3>
                  <p className="text-muted-foreground">
                    <a href={`tel:${SITE.phoneE164}`} className="hover:text-primary transition-colors">
                      {SITE.phoneDisplay}
                    </a>
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Mail className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground">Email</h3>
                  <p className="text-muted-foreground">
                    {SITE.email ? (
                      <a href={`mailto:${SITE.email}`} className="hover:text-primary transition-colors">
                        {SITE.email}
                      </a>
                    ) : (
                      <span>Use the form below</span>
                    )}
                  </p>
                </Card>

                <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <MapPin className="text-primary" size={28} />
                  </div>
                  <h3 className="font-heading text-xl mb-3 text-foreground">Service Area</h3>
                  <p className="text-muted-foreground">{SITE.serviceArea}</p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contact Form */}
      <AnimatedSection>
        <section className="py-20 bg-secondary/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="p-8 md:p-12 shadow-xl">
                <div className="text-center mb-10">
                  <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Send a Message</h2>
                  <p className="text-lg text-muted-foreground">
                    Tell us what you need — we’ll confirm details and next steps.
                  </p>
                </div>

                {submitSuccess && (
                  <div className="mb-8 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800 text-center">
                    Thanks — your message was sent. We’ll get back to you shortly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (hidden) */}
                  <div className="hidden">
                    <Label htmlFor="company">Company</Label>
                    <Input id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@email.com"
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="(843) 555-1234"
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Pricing, onboarding, missed pickup, etc."
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your community and what you're looking for..."
                      rows={6}
                      required
                      className="mt-2 resize-none"
                    />
                  </div>

                  <div className="text-center">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="bg-primary hover:bg-primary/90 text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message <Send className="ml-2" size={20} />
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground mt-4">
                      For urgent issues, call/text {SITE.phoneDisplay}.
                    </p>
                  </div>
                </form>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Service Area Block (replaces template address map) */}
      <AnimatedSection>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center px-6">
                    <MapPin className="text-primary mx-auto mb-4" size={48} />
                    <p className="text-2xl font-heading text-foreground">Serving {SITE.serviceArea}</p>
                    <p className="text-lg text-muted-foreground mt-2">
                      Doorstep collection for apartments, condos, and townhome communities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* CTA */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-r from-[#005C56] to-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-heading text-3xl md:text-4xl text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let’s set up a simple rollout plan that fits your community and reduces complaints from day one.
            </p>
            <Button asChild size="lg" variant="secondary" className="px-10 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <a href={`tel:${SITE.phoneE164}`}>Call/Text {SITE.phoneDisplay}</a>
            </Button>
          </div>
        </section>
      </AnimatedSection>

      <Footer />
    </div>
  );
}
