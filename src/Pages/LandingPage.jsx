import AboutProgrammesTU from "../components/AboutUs";
import CampusLifeCard from "../components/CampusLifeCard";
import EngineeringHero from "../components/EngineeringHero";
import HeroTU from "../components/Hero";
import Navbar from "../components/navbar";


export default function LandingPage() {
  return (
    <>
      <HeroTU />
      <AboutProgrammesTU/>
      <EngineeringHero/>
      {/* <CampusLifeCard/> */}
    </>
  )
}
