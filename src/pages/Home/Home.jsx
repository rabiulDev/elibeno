import ExploreNft from "../../components/ExploreNft/ExploreNft"
import ExploreNft2 from "../../components/ExploreNft2/ExploreNft2"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"
import Platform from "../../components/Platform/Platform"

const Home = () => {
    return (
        <section>
            {/* HERO SECTION  */}
            <header className=" relative overflow-x-hidden bg-bgHero bg-cover bg-left-top ">
                <Navbar />
                <Hero />
            </header>

            {/* EXPLORE SECTION */}
            <section className="container mx-auto px-4 lg:px-16">
                <ExploreNft />
            </section>

            {/* PLATFORM SECTION */}
            <section>
                <Platform />
            </section>

            {/* PLATFORM 2 SECTION */}
            <section className="container mx-auto px-4 lg:px-16" >
                <ExploreNft2 />
            </section>
        </section>
    )
}

export default Home