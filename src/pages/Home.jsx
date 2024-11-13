import Counter from "../components/Counter/Counter"
import Customer from "../components/Customer/Customer"
import Footer from "../components/Footer/Footer"
import Map from "../components/Map/Map"
import Plan from "../components/Plan/Plan"
import Provide from "../components/Provide/Provide"
import Banner from "./Bannar/Banner"

const Home = () => {
  return (
    <>
    <Banner/>
    <Counter/>
    <Provide/>
    <Plan/>
    <Map/>
    <Customer/>
    <Footer/>
    </>
  )
}

export default Home