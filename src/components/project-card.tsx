import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  tags,
}: ProjectCardProps) {
  return (
    <div className="group bg-blue-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-blue-800/50 hover:border-blue-600/50 transition-all hover:shadow-lg hover:shadow-blue-600/20">
      <div className="relative aspect-video overflow-hidden">
        {/* <Image
          src={image || "/placeholder.svg"}
          alt={title}
          width={800}
          height={600}
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        /> */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 to-transparent opacity-60"></div>
        <div className="absolute bottom-0 left-0 p-4">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-blue-800/70 text-blue-200 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="p-4">
        <p className="text-blue-200 mb-4">{description}</p>
        <div className="flex justify-end">
          <Button
            variant="ghost"
            size="sm"
            className="text-blue-300 hover:text-blue-100"
          >
            View Project <ExternalLink className="ml-1 h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
