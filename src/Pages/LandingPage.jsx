import AboutProgrammesTU from "../components/AboutUs";
import CampusLifeCard from "../components/CampusLifeCard";
import EngineeringHero from "../components/EngineeringHero";
import EventCalendar from "../components/EventCalendar";
import HeroTU from "../components/Hero";
import Navbar from "../components/navbar";
import NewsletterSubscribe from "../components/NewsletterSubscribe";
import SchoolsDesignReplica from "../components/SchoolsDesignCards";
import SearchProgrammes from "../components/SearchProgrammes";
import TaglineHero from "../components/TaglineHero";
import UniversityFooter from "../components/Footer";
import WhyTcet from "../components/WhyTcet";
import GlobalCollaborations from "../components/GlobalCollaborations";
import Accreditation from "../components/Accreditation";

export default function LandingPage() {
  return (
    <>
      <HeroTU />
      <AboutProgrammesTU />
      {/* <SchoolsDesignReplica/> */}
      <EngineeringHero />
      <SearchProgrammes />
      <CampusLifeCard />

      <EventCalendar />
      <GlobalCollaborations />
      <Accreditation />

      <TaglineHero />
      <NewsletterSubscribe />
      <UniversityFooter />
    </>
  );
}
