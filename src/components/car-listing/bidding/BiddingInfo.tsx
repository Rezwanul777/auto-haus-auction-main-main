
// import { Card } from "@/components/ui/card";
// import { Progress } from "@/components/ui/progress";
// import CurrentBid from "./CurrentBid";
// import TimeRemaining from "./TimeRemaining";
// import BiddingButtons from "./BiddingButtons";
// import BiddingDetails from "./BiddingDetails";
// import { useIsMobile } from "@/hooks/use-mobile";
// import { useEffect, useState } from "react";

// interface BiddingInfoProps {
//   currentBid: number;
//   nextMinBid: number;
//   timeLeft: string;
//   car: {
//     price: number;
//     taxType: string;
//   };
//   location: string;
// }

// const BiddingInfo = ({ currentBid, nextMinBid, timeLeft, car, location }: BiddingInfoProps) => {
//   const isMobile = useIsMobile();
//   const [isVisible, setIsVisible] = useState(false);

  
//   return (
//     <Card className={`glass-card animate-fade-in ring-1 ring-accent/50 shadow-[0_0_15px_rgba(212,175,55,0.15)] ${
//       isMobile ? 'fixed bottom-0 left-0 right-0 rounded-none z-50' : 'sticky top-6 mb-6'
//     }`}>
   
//       <div className={`p-4 md:p-6 space-y-4 md:space-y-6 ${isMobile ? 'pb-safe' : ''}`}>
//         <CurrentBid currentBid={currentBid} taxType={car.taxType} />
//         <TimeRemaining timeLeft={timeLeft} />
//         <Progress value={65} className="h-2 bg-black/20" />
//         <BiddingButtons 
//           nextMinBid={nextMinBid} 
//           buyNowPrice={car.price * 1.2} 
//           currentBid={currentBid}
//           location={location}
//         />
//         {!isMobile && (
//           <BiddingDetails currentBid={currentBid} location={location} />
//         )}
//       </div>
//     </Card>
//   );
// };

// export default BiddingInfo;



import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import CurrentBid from "./CurrentBid";
import TimeRemaining from "./TimeRemaining";
import BiddingButtons from "./BiddingButtons";
import BiddingDetails from "./BiddingDetails";
import { useIsMobile } from "@/hooks/use-mobile";
import { useEffect, useState, useRef } from "react";

interface BiddingInfoProps {
  currentBid: number;
  nextMinBid: number;
  timeLeft: string;
  car: {
    price: number;
    taxType: string;
  };
  location: string;
}

const BiddingInfo = ({ currentBid, nextMinBid, timeLeft, car, location }: BiddingInfoProps) => {
  const isMobile = useIsMobile();
  const [isVisible, setIsVisible] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const stickyRef = useRef(null);
  const containerRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(0);

  // Effect for width calculation and intersection observer
  useEffect(() => {
    // Set initial width
    if (containerRef.current) {
      setCardWidth(containerRef.current.offsetWidth);
    }

    // Handle resize
    const handleResize = () => {
      if (containerRef.current) {
        setCardWidth(containerRef.current.offsetWidth);
      }
    };

    // Only set up sticky behavior on desktop
    if (!isMobile && stickyRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsSticky(!entry.isIntersecting);
        },
        { threshold: 0, rootMargin: "-1px 0px 0px 0px" }
      );

      observer.observe(stickyRef.current);
      window.addEventListener('resize', handleResize);

      return () => {
        if (stickyRef.current) {
          observer.unobserve(stickyRef.current);
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [isMobile]);

  // Animate entrance effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
   
    return () => clearTimeout(timer);
  }, []);

  // Styles for fixed positioning when sticky
  const cardStyle = !isMobile && isSticky ? {
    position: 'fixed',
    top: '110px',
    width: `${cardWidth}px`,
    zIndex: 40
  } : {};

  return (
    <div ref={containerRef} className="bidding-container">
      {/* Sticky sentinel - when this exits viewport, we make the card sticky */}
      {!isMobile && <div ref={stickyRef} className="sticky-sentinel" />}
      
      <Card 
        style={cardStyle}
        // className={`glass-card animate-fade-in ring-1 ring-accent/50 shadow-[0_0_15px_rgba(212,175,55,0.15)] ${
        //   isMobile 
        //     ? 'fixed bottom-0 left-0 right-0 rounded-none z-50' 
        //     : ''
        // } ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className={`p-4 md:p-6 space-y-4 md:space-y-6 ${isMobile ? 'pb-safe' : ''}`}>
          <CurrentBid currentBid={currentBid} taxType={car.taxType} />
          <TimeRemaining timeLeft={timeLeft} />
          <Progress value={65} className="h-2 bg-black/20" />
          <BiddingButtons
            nextMinBid={nextMinBid}
            buyNowPrice={car.price * 1.2}
            currentBid={currentBid}
            location={location}
          />
          {!isMobile && (
            <BiddingDetails currentBid={currentBid} location={location} />
          )}
        </div>
      </Card>
      
      {/* Spacer div to prevent layout shift when card becomes fixed */}
      {!isMobile && isSticky && (
        <div style={{ 
          height: `${stickyRef.current?.parentElement?.querySelector('.glass-card')?.offsetHeight || 0}px` 
        }} />
      )}
    </div>
  );
};

export default BiddingInfo;

