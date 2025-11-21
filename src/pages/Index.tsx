import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Summary from "@/components/Summary";
import CoreIdeas from "@/components/CoreIdeas";
import Chapters from "@/components/Chapters";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Summary />
      <CoreIdeas />
      <Chapters />
      <Team />
      <Footer />
    </div>
  );
};

export default Index;
