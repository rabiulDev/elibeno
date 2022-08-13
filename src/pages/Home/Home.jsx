import EasySectionForUse from "../../components/EasySectionForUse/EasySectionForUse";
import ExploreNft from "../../components/ExploreNft/ExploreNft";
import ExploreNft2 from "../../components/ExploreNft2/ExploreNft2";
import Hero from "../../components/Hero/Hero";
import LiveAction from "../../components/LiveAction/LiveAction";
import Navbar from "../../components/Navbar/Navbar";
import Platform from "../../components/Platform/Platform";
import TopSeller from "../../components/TopSeller/TopSeller";

const Home = () => {
  return (
    <>
      {/* HERO SECTION  */}
      <header className="fixed top-0 left-0 right-0 z-30">
        <Navbar />
      </header>

      <section className="bg-bgHero bg-cover bg-no-repeat bg-left-top">
        <Hero />
      </section>

      {/* EXPLORE SECTION */}

      <section className="container mx-auto">
        <ExploreNft />
      </section>

      {/* PLATFORM SECTION */}
      <section>
        <Platform />
      </section>

      {/* PLATFORM 2 SECTION */}
      <section className="container mx-auto">
        <ExploreNft2 />

        {/* TOP SELLER SECTION */}
        <TopSeller />
      </section>

      {/* EASY SECTION FOR USE */}
      <section className="bg-easyStepBg bg-cover bg-right-top">
        <EasySectionForUse />
      </section>

      {/* LIVE ACTION */}
      <section className="container mx-auto">
        <LiveAction />
      </section>
    </>
  );
};

export default Home;
