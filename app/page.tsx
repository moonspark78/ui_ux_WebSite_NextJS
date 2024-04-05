import Cta from "./components/Cta";
import Faq from "./components/Faq";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Price from "./components/Price";

export default function Home() {
  return (
      <div>
        <Hero/>
        <div className="px-[20px] lg:container lg:px-20 mx-auto">
          <Features/>
          <Faq/>
          <Price/>
          <Cta/>
          <Footer/>
        </div>
      </div>
  );
}
