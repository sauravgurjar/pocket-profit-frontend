import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import Button from "../components/ui/Button";
import Card from "../components/ui/Card";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-2xl px-4 py-20">
      <Seo
        title="Page Not Found"
        description="The page you’re looking for does not exist."
        path="/404"
      />
      <Card className="text-center">
        <h1 className="text-2xl font-extrabold tracking-tight">404 — Not found</h1>
        <p className="mt-3 text-sm text-slate-600 dark:text-white/65">
          Try heading back home or explore calculators and guides.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <Button as={Link} to="/">
            Go Home
          </Button>
          <Button variant="secondary" as={Link} to="/calculators">
            Explore Calculators
          </Button>
          <Button variant="secondary" as={Link} to="/blog">
            Read Guides
          </Button>
        </div>
      </Card>
    </div>
  );
}

