
// import { Newspaper } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import NewsCard from "./news/NewsCard";
// import { newsItems } from "./news/newsData";
// import { Newspaper } from "lucide-react";

// const NewsCarousel = () => {
//   return (
//     <div className="w-full">
//       <div className="flex items-center mb-6">
//         <div className="flex items-center gap-2">
//           <Newspaper className="h-5 w-5 text-white" />
//           <h2 className="text-xl font-semibold text-white">Senaste nytt</h2>
//         </div>
//       </div>
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent className="-ml-4">
//           {newsItems.map((news, index) => (
//             <CarouselItem 
//               key={news.id} 
//               className="pl-4 basis-full md:basis-1/2 lg:basis-1/2 xl:basis-1/3"
//             >
//               <NewsCard news={news} index={index} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         {/* Improved positioning and responsiveness for navigation buttons */}
//         <CarouselPrevious className="hidden md:flex -left-4 lg:-left-6 text-white border-white/20 bg-black/40 hover:bg-black/60" />
//         <CarouselNext className="hidden md:flex -right-4 lg:-right-6 text-white border-white/20 bg-black/40 hover:bg-black/60" />
//       </Carousel>
//     </div>
//   );
// };

// export default NewsCarousel;

// import { Newspaper } from "lucide-react";
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel";
// import NewsCard from "./news/NewsCard";
// import { newsItems } from "./news/newsData";

// const NewsCarousel = () => {
//   return (
//     <div className="w-full">
//       <div className="flex items-center mb-6">
//         <div className="flex items-center gap-2">
//           <Newspaper className="h-5 w-5 text-white" />
//           <h2 className="text-xl font-semibold text-white">Senaste nytt</h2>
//         </div>
//       </div>
//       <Carousel
//         opts={{
//           align: "start",
//           loop: true,
//         }}
//         className="w-full"
//       >
//         <CarouselContent className="-ml-4">
//           {newsItems.map((news, index) => (
//             <CarouselItem 
//               key={news.id} 
//               /* 
//                 Key fix: Show 2 cards per view between 768px and 1399px,
//                 then 3 cards per view at 1400px and above 
//               */
//               className="pl-4 basis-full md:basis-1/2 2xl:basis-1/3"
//             >
//               <NewsCard news={news} index={index} />
//             </CarouselItem>
//           ))}
//         </CarouselContent>
//         {/* Improved positioning for navigation buttons */}
//         <CarouselPrevious className="hidden md:flex -left-4 lg:-left-5 text-white border-white/20 bg-black/40 hover:bg-black/60" />
//         <CarouselNext className="hidden md:flex -right-4 lg:-right-5 text-white border-white/20 bg-black/40 hover:bg-black/60" />
//       </Carousel>
//     </div>
//   );
// };

// export default NewsCarousel;

import { Newspaper } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import NewsCard from "./news/NewsCard";
import { newsItems } from "./news/newsData";

const NewsCarousel = () => {
  return (
    <div className="w-full">
      <div className="flex items-center mb-6">
        <div className="flex items-center gap-2">
          <Newspaper className="h-5 w-5 text-white" />
          <h2 className="text-xl font-semibold text-white">Senaste nytt</h2>
        </div>
      </div>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-4">
          {newsItems.map((news, index) => (
            <CarouselItem 
              key={news.id} 
              // Show 1 card on mobile, 2 cards on medium, 2 cards on large, 3 cards on 1400px+
              className="pl-4 basis-full sm:basis-1/2 md:basis-1/2 lg:basis-1/2 2xl:basis-1/3"
            >
              <NewsCard news={news} index={index} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-5 text-white border-white/20 bg-black/40 hover:bg-black/60" />
        <CarouselNext className="hidden md:flex -right-4 lg:-right-5 text-white border-white/20 bg-black/40 hover:bg-black/60" />
      </Carousel>
    </div>
  );
};

export default NewsCarousel;