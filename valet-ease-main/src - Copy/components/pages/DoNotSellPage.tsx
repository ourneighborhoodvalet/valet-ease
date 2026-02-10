import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function DoNotSellPage() {
  return (
    <div className="min-h-screen bg-background font-paragraph">
      <Header />
      <main className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-6">Do Not Sell My Personal Information</h1>
        <p className="text-muted-foreground mb-6">
          We do not sell personal information. If you have questions about data practices, please contact us using the
          contact page.
        </p>

        <div className="space-y-4 text-muted-foreground">
          <p>
            If you are a California resident and believe you have rights under the California Consumer Privacy Act
            (CCPA/CPRA), you may contact us to request information about the categories of personal information we
            collect and how we use it.
          </p>
          <p>
            We will verify requests as required and respond within applicable timeframes.
          </p>
        </div>

        <p className="text-xs text-muted-foreground mt-10">
          Note: This is a general template for small business websites and is not legal advice.
        </p>
      </main>
      <Footer />
    </div>
  );
}
