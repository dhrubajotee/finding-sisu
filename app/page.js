import Hero from "@/components/Hero";
import RecentPosts from "@/components/RecentPosts";
import ExploreThemes from "@/components/ExploreThemes";
import AboutMe from "@/components/AboutMe";
import ContactSection from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentPosts />
      <ExploreThemes />
      <AboutMe />
      <ContactSection />
    </>
  );
}
