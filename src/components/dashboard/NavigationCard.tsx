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
// //       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
// //       onClick={() => navigate(item.path)}
// //     >
// //       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
// //       <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
// //         <div className="flex justify-between items-start">
// //           <h3 className="text-xl font-semibold text-white">{item.title}</h3>
// //           <div className="rounded-full bg-white/20 p-2 group-hover:scale-110 transition-transform">
// //             <Icon className="h-5 w-5 text-white" />
// //           </div>
// //         </div>
// //         <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
// //       </CardContent>
// //     </Card>
// //   );
// // };

// // export default NavigationCard;


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

//18.03.25
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
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 w-full h-full aspect-auto ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
     
//       {isSettingsCard ? (
//         // Center layout for settings card
//         <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-center items-center text-center">
//           <div className="rounded-full bg-white/20 p-3 mb-3 group-hover:scale-110 transition-transform">
//             <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
//           </div>
//           <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white">
//             {item.title}
//           </h3>
//           <p className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">
//             {item.subtitle}
//           </p>
//         </CardContent>
//       ) : (
//         // Standard layout for other cards
//         <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white">
//               {item.title}
//             </h3>
//             <div className="rounded-full bg-white/20 p-2 md:p-3 group-hover:scale-110 transition-transform">
//               <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
//             </div>
//           </div>
//           <p className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">
//             {item.subtitle}
//           </p>
//         </CardContent>
//       )}
//     </Card>
//   );
// };

//  export default NavigationCard;
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
//   const isAnnonsCard = item.path === "/auctions";
  
//   return (
//     <Card
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 w-full h-full ${
//         isSettingsCard ? 'settings-card' : ''
//       } ${isAnnonsCard ? 'annonser-card' : ''}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
     
//       {isSettingsCard ? (
//         // Center layout for settings card with additional responsive adjustments
//         <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-center items-center text-center">
//           <div className="rounded-full bg-white/20 p-3 mb-3 group-hover:scale-110 transition-transform">
//             <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
//           </div>
//           <h3 className="text-base lg:text-lg font-semibold text-white whitespace-normal">
//             {/* Break title into two lines for medium screens */}
//             <span className="lg:hidden">
//               {item.title.split(' ')[0]}
//               <br />
//               {item.title.split(' ').slice(1).join(' ')}
//             </span>
//             <span className="hidden lg:inline">{item.title}</span>
//           </h3>
//           <p className="text-xs lg:text-sm text-white/80 mt-1 lg:mt-2 whitespace-normal">
//             {/* Shorten subtitle for medium screens */}
//             <span className="lg:hidden">
//               {item.subtitle.length > 20
//                 ? `${item.subtitle.substring(0, 20)}...`
//                 : item.subtitle}
//             </span>
//             <span className="hidden lg:inline">{item.subtitle}</span>
//           </p>
//         </CardContent>
//       ) : (
//         // Standard layout for other cards
//         <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <h3 className={`text-base md:text-lg font-semibold text-white ${
//               isAnnonsCard ? 'max-w-[70%]' : ''
//             }`}>
//               {item.title}
//             </h3>
//             <div className="rounded-full bg-white/20 p-2 md:p-3 group-hover:scale-110 transition-transform flex-shrink-0">
//               <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
//             </div>
//           </div>
//           <p className="text-xs md:text-sm text-white/80 mt-1 md:mt-2">
//             {item.subtitle}
//           </p>
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default NavigationCard;

// Updated NavigationCard.tsx with responsive text handling
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
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
     
//       {isSettingsCard ? (
//         <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
//           <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:scale-110 transition-transform">
//             <Icon className="h-6 w-6 text-white" />
//           </div>
//           <h3 className="text-xl font-semibold text-white lg:text-lg">{item.title}</h3>
//           <p className="text-sm text-white/80 mt-2 lg:line-clamp-2">{item.subtitle}</p>
//         </CardContent>
//       ) : (
//         <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
//           <div className="flex justify-between items-start">
//             <h3 className="text-xl font-semibold text-white lg:text-lg lg:line-clamp-2">{item.title}</h3>
//             <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
//               <Icon className="h-6 w-6 text-white" />
//             </div>
//           </div>
//           <p className="text-sm text-white/80 mt-2 lg:line-clamp-2">{item.subtitle}</p>
//         </CardContent>
//       )}
//     </Card>
//   );
// };

// export default NavigationCard;

// new update from github

import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { NavigationItem } from "./navigationData";

interface NavigationCardProps {
  item: NavigationItem;
}

const NavigationCard = ({ item }: NavigationCardProps) => {
  const navigate = useNavigate();
  const Icon = item.icon;
  
  // Check if this is the "Inställningar" card
  const isSettingsCard = item.path === "/settings";
  
  return (
    <Card 
      className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
      onClick={() => navigate(item.path)}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
      
      {isSettingsCard ? (
        <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
          <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:scale-110 transition-transform">
            <Icon className="h-6 w-6 text-white" />
          </div>
          <h3 className="text-xl font-semibold text-white">{item.title}</h3>
          <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
        </CardContent>
      ) : (
        <CardContent className="p-6 relative z-10 h-full flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <h3 className="text-xl font-semibold text-white">{item.title}</h3>
            <div className="rounded-full bg-white/20 p-3 group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 text-white" />
            </div>
          </div>
          <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
        </CardContent>
      )}
    </Card>
  );
};

export default NavigationCard;