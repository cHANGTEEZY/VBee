import { Button } from "@/components/ui/button";
import { Code, Cpu, Globe } from "lucide-react";
import dev from "../../assets/dev.jpg";

export default function HeroSection() {
  return (
    <section className="w-full border- py-10 md:py-24 lg:py-32 xl:py-20 bg-gradient-to-b from-background to-muted ">
      <div className="container mx-auto px-4 text-center max-w-[1300px]">
        <div className="flex flex-col items-center space-y-8">
          <div className="space-y-4 max-w-[800px]">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-7xl/none">
              Transforming Ideas Into Powerful Software Solutions
            </h1>
            <p className="text-muted-foreground md:text-xl">
              We build custom software that solves complex problems and drives
              business growth. Our expert team delivers innovative solutions
              tailored to your unique needs.
            </p>
          </div>

          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
            <Button size="lg" className="w-full">
              <a href="#contact">Get Started</a>
            </Button>
            <Button variant="outline" size="lg" className="w-full ">
              <a href="#services">Our Services</a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <div className="flex items-center space-x-1">
              <Cpu className="h-4 w-4" />
              <span>Tailored Software Development</span>
            </div>
            <div className="flex items-center space-x-1">
              <Code className="h-4 w-4" />
              <span>Agile Development</span>
            </div>
            <div className="flex items-center space-x-1">
              <Globe className="h-4 w-4" />
              <span>Globally Trusted</span>
            </div>
          </div>

          <div className="mt-8 max-w-[600px]">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg">
              <img
                src={dev}
                alt="Software development illustration"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
