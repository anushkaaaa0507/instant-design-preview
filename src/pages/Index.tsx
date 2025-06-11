
import Hero from "../components/Hero";
import TrendingStyles from "../components/TrendingStyles";
import ProductCatalog from "../components/ProductCatalog";
import MoodBoard from "../components/MoodBoard";
import DesignRequest from "../components/DesignRequest";
import InspirationHub from "../components/InspirationHub";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-cream-50 to-purple-100">
      <Navigation />
      <Hero />
      <TrendingStyles />
      <ProductCatalog />
      <MoodBoard />
      <DesignRequest />
      <InspirationHub />
    </div>
  );
};

export default Index;
