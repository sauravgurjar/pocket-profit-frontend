import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/nav/Navbar";
import Footer from "../components/Footer";
import ScrollTopButton from "../components/ScrollTopButton";

export default function MainLayout({ children }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Ensure layout scrolls to top on full page navigations (not on hash links)
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [pathname]);

  return (
    <div className="min-h-dvh">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
      <ScrollTopButton />
    </div>
  );
}
