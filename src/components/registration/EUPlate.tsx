import { Star } from "lucide-react";

interface EUPlateProps {
  countryCode: string;
}

export const EUPlate = ({ countryCode }: EUPlateProps) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <div className="absolute left-0 top-0 bottom-0 w-[24px] flex flex-col items-center">
        <div className="relative w-[24px] h-[24px] mt-1">
          {[...Array(12)].map((_, index) => {
            const angle = (index * 30) * Math.PI / 180;
            const radius = 10;
            const x = 12 + radius * Math.cos(angle - Math.PI/2);
            const y = 12 + radius * Math.sin(angle - Math.PI/2);
            return (
              <Star 
                key={index} 
                className="w-[3px] h-[3px] text-[#FFD700] absolute"
                style={{
                  left: `${x}px`,
                  top: `${y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
                fill="#FFD700"
              />
            );
          })}
        </div>
        <span className="text-white font-bold text-[14px] font-serif mt-auto mb-2">{countryCode}</span>
      </div>
    </div>
  );
};