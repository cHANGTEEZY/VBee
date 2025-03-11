import contactDetails from "@/constants/contacts";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import ContactForm from "./contactForm";

const ContactUsHeroSection = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full text-center">
      <div className="flex flex-col items-center gap-3 p-10">
        <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
          Contact our friendly team
        </h1>
        <p className="text-slate-600 text-sm md:text-xl lg:text-2xl">
          Let us know how we can help.
        </p>
      </div>
    </div>
  );
};

const ContactDetailsCard = () => {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-5 justify-center items-center text-center">
      {contactDetails.map((contact, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.39, 0.24, 0.3, 3],
          }}
        >
          <Card className="md:w-[350px] w-[400px] mx-auto transition-all duration-200 ease-in-out hover:shadow-xl">
            <CardHeader>
              <CardTitle className="flex gap-2 content-center items-center justify-center text-center md:items-start md:justify-start">
                {<contact.icon className="w-5 h-5" />} {contact.title}
              </CardTitle>
              <CardDescription className="flex flex-col items-center justify-center text-center md:items-start md:justify-start">
                {contact.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="flex flex-col items-center justify-center text-center md:items-start md:justify-start">
              {contact.contactInfo}
            </CardFooter>
          </Card>
        </motion.div>
      ))}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div className="w-full max-w-[1200px]  flex flex-col items-center justify-center mx-auto text-center gap-10 py-10 ">
      <ContactUsHeroSection />
      <ContactDetailsCard />
      <ContactForm />
    </div>
  );
};

export default ContactUs;
