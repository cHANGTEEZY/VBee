import AboutUsComponent from "@/components/about-us/AboutUs";
import TeamMembers from "@/components/about-us/TeamMembers";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

const AboutUs = () => {
  return (
    <>
      <Header />
      <AboutUsComponent />
      <TeamMembers />
      <Footer />
    </>
  );
};

export default AboutUs;
