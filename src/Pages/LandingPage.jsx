import AboutProgrammesTU from "../components/AboutUs";
import CampusLifeCard from "../components/CampusLifeCard";
import EngineeringHero from "../components/EngineeringHero";
import EventCalendar from "../components/EventCalendar";
import HeroTU from "../components/Hero";
import Navbar from "../components/navbar";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import SearchProgrammes from "../components/SearchProgrammes";
import TaglineHero from "../components/TaglineHero";
import UniversityFooter from "../components/UniversityFooter";
import WhyTcet from "../components/WhyTcet";


export default function LandingPage() {
  return (
    <>
      <HeroTU />
      <AboutProgrammesTU/>
      <EngineeringHero/>
      <SearchProgrammes/>
      <CampusLifeCard/>
      <EventCalendar/>
      <WhyTcet/>
      <TaglineHero/>
      <NewsletterSubscribe/>
      <UniversityFooter/>
    </>
  )
}
