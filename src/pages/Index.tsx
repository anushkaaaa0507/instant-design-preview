
import Hero from "../components/Hero";
import TrendingStyles from "../components/TrendingStyles";
import ProductCatalog from "../components/ProductCatalog";
import MoodBoard from "../components/MoodBoard";
import DesignRequest from "../components/DesignRequest";
import InspirationHub from "../components/InspirationHub";
import Navigation from "../components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-sage-light via-sage-medium to-sage-light">
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
