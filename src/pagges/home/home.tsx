import Hero from "../../components/hero/hero"
import Navbar from "../../components/navbar/navbar"
import './home.css'

const Home = () => {
  return (
    <section className="  home relative">
      <Navbar />
      <div className="home-hero-section  ">
        <Hero />
      </div>
      <div className="absolute top-0 h-full w-full  rectangle">

      </div>
    </section>
  )
}

export default Home