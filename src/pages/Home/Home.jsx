import ExploreNft from "../../components/ExploreNft/ExploreNft"
import Hero from "../../components/Hero/Hero"
import Navbar from "../../components/Navbar/Navbar"

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


        </section>
    )
}

export default Home