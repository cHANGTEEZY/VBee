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
      className="bg-[var(--background)] text-[var(--foreground)] md:h-auto p-8 md:p-16"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-16">
          <div>
            <p className="text-sm uppercase tracking-wider mb-2 text-[var(--secondary-foreground)]">
              OUR SERVICE
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              What <span className="text-[var(--primary)]">Services</span>
              <br /> We're Offering
            </h1>
          </div>
          <div className="self-center">
            <p className="text-sm md:text-base">
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
                <AccordionTrigger className="text-3xl font-medium cursor-pointer text-[var(--primary)]">
                  {service.title}
                </AccordionTrigger>
                <AccordionContent className="text-[var(--secondary-foreground)] text-[15px] md:text-[18px]">
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
