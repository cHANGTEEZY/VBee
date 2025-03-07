import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import ContactUs from "@/components/contact-us/contact";

const Contact = () => {
  return (
    <section>
      <Header />
      <div className="max-w-1600px border-b-1 mb-5">
        <ContactUs />
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
