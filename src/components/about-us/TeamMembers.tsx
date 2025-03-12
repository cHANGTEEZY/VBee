import { teamMembers } from "@/constants/abouts";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const TeamMembers = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };

  return (
    <section className="bg-background py-15 px-4 border-[1px]">
      <div className="max-w-[1300px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Meet Our Team
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto sm:text-1xl md:text-2xl">
            Our talented team of professionals is dedicated to delivering
            exceptional results and innovative solutions.
          </p>
        </motion.div>

        <Carousel
          className="w-full p-4"
          opts={{
            loop: true,
            align: "start",
            skipSnaps: false,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {teamMembers.map((member, index) => (
              <CarouselItem
                key={member.id}
                className="pl-2 md:pl-4 sm:basis-1/1 md:basis-1/2 lg:basis-1/3"
              >
                <motion.div
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  className="h-full pb-10"
                >
                  <Card className="h-full overflow-hidden   bg-card/50 backdrop-blur-sm p-0 dark:shadow-blue-50/ hover:shadow-xl duration-200 ease-in-out">
                    <CardHeader className="p-0">
                      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-primary/10 to-primary/30">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 scale-100"
                        />
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 text-center">
                      <Avatar className="h-24 w-24 border-4 border-background mx-auto -mt-16 mb-4 relative z-10">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p>{member.position}</p>
                      <p className="text-muted-foreground text-sm line-clamp-3">
                        {member.bio ||
                          "Team member with expertise in their field, contributing to our company's success through dedication and innovation."}
                      </p>
                    </CardContent>
                    <CardFooter className="flex justify-center gap-2 p-6 pt-0"></CardFooter>
                  </Card>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default TeamMembers;
