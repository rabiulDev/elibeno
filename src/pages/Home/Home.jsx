import EasySectionForUse from "../../components/EasySectionForUse/EasySectionForUse"
import ExploreNft from "../../components/ExploreNft/ExploreNft"
import ExploreNft2 from "../../components/ExploreNft2/ExploreNft2"
import Hero from "../../components/Hero/Hero"
import LiveAction from "../../components/LiveAction/LiveAction"
import Navbar from "../../components/Navbar/Navbar"
import Platform from "../../components/Platform/Platform"
import TopSeller from "../../components/TopSeller/TopSeller"

const Home = () => {
    return (
        <section>
            {/* HERO SECTION  */}
            <header className=" relative overflow-x-hidden bg-bgHero bg-cover bg-left-top ">
                <Navbar />
                <Hero />
            </header>

            {/* EXPLORE SECTION */}
            <section className="container mx-auto">
                <ExploreNft />
            </section>

            {/* PLATFORM SECTION */}
            <section>
                <Platform />
            </section>

            {/* PLATFORM 2 SECTION */}
            <section className="container mx-auto" >
                <ExploreNft2 />

                {/* TOP SELLER SECTION */}
                <TopSeller />

            </section>


            <section className="bg-easyStepBg bg-cover bg-right-top">
                {/* EASY SECTION FOR USE */}
                <EasySectionForUse />
            </section>

            {/* LIVE ACTION */}
            <section className="container mx-auto" >
                <LiveAction />
            </section>
        </section>
    )
}

export default Home