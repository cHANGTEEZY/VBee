import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { services } from "@/constants/services";

export default function ServicesPage() {
  return (
    <div
      id="services"
      className="bg-[#0d1a1e] text-white h-screen md:h-auto   p-8 md:p-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="text-sm uppercase tracking-wider mb-2">OUR SERVICE</p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What <span className="text-emerald-400">Services</span>
              <br /> We're Offering
            </h1>
          </div>
          <div className="self-center">
            <p className="text-gray-300 text-sm md:text-base">
              We offer services that can help businesses improve their
              visibility and business reputation online, expand market reach,
              and increase turnover through effective digital strategies.
              Following are the services we provide.
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full">
            {services.map((service) => (
              <AccordionItem key={service.title} value={service.title}>
                <AccordionTrigger className="text-3xl font-medium cursor-pointer">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className=" text-gray-300 text-[15px] md:text-[18px]">
                  {service.description}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
