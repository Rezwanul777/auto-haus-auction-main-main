// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";

// interface NavigationCardProps {
//   item: NavigationItem;
// }

// const NavigationCard = ({ item }: NavigationCardProps) => {
//   const navigate = useNavigate();
//   const Icon = item.icon;

//   return (
//     <Card 
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
//       <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
//         <div className="flex justify-between items-start">
//           <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//           <div className="rounded-full bg-white/20 p-2 group-hover:scale-110 transition-transform">
//             <Icon className="h-5 w-5 text-white" />
//           </div>
//         </div>
//         <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
//       </CardContent>
//     </Card>
//   );
// };

// export default NavigationCard;


// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";

// interface NavigationCardProps {
//   item: NavigationItem;
// }

// const NavigationCard = ({ item }: NavigationCardProps) => {
//   const navigate = useNavigate();
//   const Icon = item.icon;

//   return (
//     <Card 
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
//       <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
//         <div className="flex justify-between items-start">
//           <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//           <div className="rounded-full bg-white/20 p-2 group-hover:scale-110 transition-transform">
//             <Icon className="h-5 w-5 text-white" />
//           </div>
//         </div>
//         <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
//       </CardContent>
//     </Card>
//   );
// };

// export default NavigationCard;

// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";

// interface NavigationCardProps {
//   item: NavigationItem;
// }

// const NavigationCard = ({ item }: NavigationCardProps) => {
//   const navigate = useNavigate();
//   const Icon = item.icon;
  
//   // Check if this is the "Inställningar" card
//   const isSettingsCard = item.path === "/settings";
  
//   return (
//     <Card 
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
//       <CardContent className={`p-6 relative z-10 h-full flex flex-col ${isSettingsCard ? 'justify-center items-center text-center' : 'justify-between'}`}>
//         {isSettingsCard ? (
//           <>
//             <div className="rounded-full bg-white/20 p-4 mb-4 group-hover:scale-110 transition-transform">
//               <Icon className="h-6 w-6 text-white" />
//             </div>
//             <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//             <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
//           </>
//         ) : (
//           <>
//             <div className="flex justify-between items-start">
//               <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//               <div className="rounded-full bg-white/20 p-2 group-hover:scale-110 transition-transform">
//                 <Icon className="h-5 w-5 text-white" />
//               </div>
//             </div>
//             <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
//           </>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default NavigationCard;
// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";

// interface NavigationCardProps {
//   item: NavigationItem;
// }

// const NavigationCard = ({ item }: NavigationCardProps) => {
//   const navigate = useNavigate();
//   const Icon = item.icon;
  
//   // Check if this is the "Inställningar" card
//   const isSettingsCard = item.path === "/settings";
  
//   return (
//     <Card 
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
      
//       {isSettingsCard ? (
//         <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
//           <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:scale-110 transition-transform">
//             <Icon className="h-6 w-6 text-white" />
//           </div>
//           <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//           <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
//         </CardContent>
//       ) : (
//         <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//             <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
//               <Icon className="h-6 w-6 text-white" />
//             </div>
//           </div>
//           <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default NavigationCard;

import NavigationCard from "./NavigationCard";
import MessageCard from "./MessageCard";
import { navigationItems } from "./navigationData";
import TestCard from "./TestCard";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Bookmark } from "lucide-react";

const NavigationCards = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-2">
      {/* Top row - single column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
        {navigationItems.slice(0, 3).map((item, index) => (
          item.path === "/messages" ? (
            <MessageCard key={`nav-${index}`} item={item} />
          ) : (
            <NavigationCard key={`nav-${index}`} item={item} />
          )
        ))}
      </div>

      {/* Bottom row - single column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-2 mb-2">
        {navigationItems.slice(3).map((item, index) => (
          <NavigationCard key={`nav-bottom-${index}`} item={item} />
        ))}
      </div>

      {/* Last row - single column on mobile */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        <TestCard />
        <Card 
          className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[120px] animate-fade-in"
          onClick={() => navigate('/favorites')}
        >
          <div className="absolute inset-0 bg-[#ea384c]" />
          <CardContent className="p-4 relative z-10 h-full flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold text-white">Favoriter</h3>
                <p className="text-xs text-white/80 mt-1">Se dina favoriter</p>
              </div>
              <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
                <Bookmark className="h-6 w-6 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default NavigationCards;