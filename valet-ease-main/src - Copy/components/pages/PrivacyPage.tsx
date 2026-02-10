import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background font-paragraph">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Privacy</h1>
        <p className="text-muted-foreground mb-6">
          This Privacy Notice explains what information we collect, how we use it, and the choices you have.
        </p>

        <div className="space-y-6 text-foreground">
          <section>
            <h2 className="font-heading text-2xl mb-2">Information We Collect</h2>
            <p className="text-muted-foreground">
              If you submit a form, we may collect your name, phone number, email, and message details. We may also
              collect basic analytics such as device and page views to improve the site.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">How We Use Information</h2>
            <p className="text-muted-foreground">
              We use information to respond to requests, provide quotes, coordinate service, and improve customer
              support and site performance.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell your personal information. We may share information with service providers who help operate
              our website and communication tools, only as needed to provide service.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">Retention</h2>
            <p className="text-muted-foreground">
              We keep information only as long as needed to respond to inquiries and for legitimate business purposes.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl mb-2">Contact</h2>
            <p className="text-muted-foreground">
              If you have questions about this notice, contact us using the contact page.
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
