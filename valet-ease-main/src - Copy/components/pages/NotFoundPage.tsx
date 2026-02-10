import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-background font-paragraph">
      <Header />
      <main className="container mx-auto px-4 py-20 text-center">
        <p className="text-sm text-muted-foreground mb-3">404</p>
        <h1 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Page not found</h1>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          The page you’re looking for doesn’t exist or may have moved.
        </p>
        <Button asChild size="lg">
          <Link to="/">Back to Home</Link>
        </Button>
      </main>
      <Footer />
    </div>
  );
}
