import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import ContactForm from "./contactForm";
import { Clock } from "lucide-react";
import contactDetails from "@/constants/contacts";
import { ContactUsHeroSection } from "./contactUsHero";

const ContactDetailsCard = () => {
  return (
    <div className="container grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
      {contactDetails.map((contact, index) => (
        <motion.div
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.39, 0.24, 0.3, 0.95],
          }}
        >
          <Card className="h-full transition-all duration-300 ease-in-out hover:shadow-lg hover:border-primary/20">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <contact.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>{contact.title}</CardTitle>
              </div>
              <CardDescription className="pt-2">
                {contact.description}
              </CardDescription>
            </CardHeader>
            <CardFooter className="font-medium">
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
    <div className="flex flex-col items-center justify-center m-auto  w-full gap-16 py-10">
      <ContactUsHeroSection />
      <ContactDetailsCard />

      <div className=" py-10 ">
        <div className="container mb-10">
          <div className="flex flex-col items-center justify-center text-center mb-10">
            <div className="inline-flex items-center justify-center p-1 px-3 mb-4 text-sm rounded-full bg-primary/10 text-primary">
              <Clock className="mr-1 h-3 w-3" />
              <span>Response time: within 24 hours</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">
              Need immediate assistance?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Our team is ready to help you with any questions or concerns
            </p>
          </div>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUs;
