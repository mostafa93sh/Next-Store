import hero1 from "@/public/images/hero1.jpg";
import hero2 from "@/public/images/hero2.jpg";
import hero3 from "@/public/images/hero3.jpg";
import hero4 from "@/public/images/hero4.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

import { Card, CardContent } from "../ui/card";
import Image from "next/image";

const carsoulImages = [hero1, hero2, hero3, hero4];
function HeroCarousel() {
  return (
    <div className="hidden lg:block max-w-full">
      <Carousel>
        <CarouselContent>
          {carsoulImages.map((image, idx) => (
            <CarouselItem key={idx}>
              <Card>
                <CardContent className="p-2">
                  <Image
                    src={image}
                    alt="hero"
                    className="w-full object-contain h-96 rounded-md"
                  />
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
export default HeroCarousel;
