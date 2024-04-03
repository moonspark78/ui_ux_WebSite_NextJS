import Faq from "./components/Faq";
import Features from "./components/Features";
import Hero from "./components/Hero";

export default function Home() {
  return (
      <div>
        <Hero/>
        <div className="px-[20px] lg:container lg:px-20 mx-auto">
          <Features/>
          <Faq/>
        </div>
      </div>
  );
}
