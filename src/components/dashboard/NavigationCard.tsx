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

