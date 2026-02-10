import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background font-paragraph">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Terms</h1>
        <p className="text-muted-foreground mb-6">
          These Terms govern your use of this website and any inquiries submitted through our forms. By using the site,
          you agree to these Terms.
        </p>

        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="font-heading text-2xl mb-2">Use of the Site</h2>
            <p className="text-muted-foreground">
              You may use this site to learn about our services and to contact us. Do not attempt to disrupt, scrape, or
              misuse the site or its content.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">No Service Contract</h2>
            <p className="text-muted-foreground">
              Information on this site is for general purposes and does not create a binding service agreement. Service
              terms, pricing, and schedules are confirmed in writing with property management.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">Limitation of Liability</h2>
            <p className="text-muted-foreground">
              To the extent permitted by law, we are not liable for indirect or incidental damages related to your use of
              the site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">Updates</h2>
            <p className="text-muted-foreground">
              We may update these Terms from time to time. Continued use of the site means you accept any changes.
            </p>
          </section>
        </div>

        <p className="text-xs text-muted-foreground mt-10">
          Note: This is a general template for small business websites and is not legal advice.
        </p>
      </main>
      <Footer />
    </div>
  );
}
