import Seo from "../components/Seo";
import Hero from "../components/home/Hero";
import FeatureCards from "../components/home/FeatureCards";
import LatestBlogs from "../components/home/LatestBlogs";
import MoneyTips from "../components/home/MoneyTips";
import Testimonials from "../components/home/Testimonials";
import Newsletter from "../components/home/Newsletter";
import SectionHeading from "../components/ui/SectionHeading";
import FaqAccordion from "../components/faq/FaqAccordion";
import AdSlot from "../components/monetize/AdSlot";
import FadeIn from "../components/motion/FadeIn";
import { faqs } from "../data/faqs";

export default function Home() {
  return (
    <>
      <Seo
        title="Smart Money Decisions Start Here"
        description="PocketProfit is a premium fintech website for Indian users: calculators, finance blogs, and credit card comparisons."
        path="/"
      />

      <Hero />
      <FeatureCards />

      <div className="mt-14 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <LatestBlogs />
        </div>
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <AdSlot label="Sticky Sidebar Ad" />
            <div className="mt-4">
              <AdSlot label="Affiliate Banner Placeholder" />
            </div>
          </div>
        </div>
      </div>

      <MoneyTips />
      <Testimonials />

      <section className="mt-14">
        <SectionHeading
          kicker="FAQ"
          title="Common questions"
          subtitle="Clear answers so you can move forward confidently."
        />
        <div className="mt-8 max-w-3xl">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="mt-14">
        <FadeIn>
          <AdSlot label="In-content Ad Slot" />
        </FadeIn>
      </section>

      <Newsletter />
    </>
  );
}

