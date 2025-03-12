// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";
// import { LucideIcon } from "lucide-react";

// interface MessageCardProps {
//   item: Omit<NavigationItem, 'icon'> & {
//     icon: LucideIcon;
//   };
// }

// const MessageCard = ({ item }: MessageCardProps) => {
//   const navigate = useNavigate();
//   const Icon = item.icon;

//   return (
//     <Card 
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group h-[160px] ${item.width} ${item.animation}`}
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
//       </CardContent>
//     </Card>
//   );
// };

// export default MessageCard;

// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";

// interface MessageCardProps {
//   item: NavigationItem;
// }

// const MessageCard = ({ item }: MessageCardProps) => {
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
        
//         {item.messages && item.messages.length > 0 && (
//           <div className="mt-2">
//             {item.messages.slice(0, 1).map((message, index) => (
//               <div key={`message-${index}`} className="text-xs text-white/80 truncate">
//                 {message.sender}: {message.content}
//               </div>
//             ))}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default MessageCard;

// import { Card, CardContent } from "@/components/ui/card";
// import { useNavigate } from "react-router-dom";
// import { NavigationItem } from "./navigationData";

// interface MessageCardProps {
//   item: NavigationItem;
// }

// const MessageCard = ({ item }: MessageCardProps) => {
//   const navigate = useNavigate();
//   const Icon = item.icon;
  
//   return (
//     <Card 
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
//       <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
//         <div className="rounded-full bg-white/20 p-4 mb-4 group-hover:scale-110 transition-transform">
//           <Icon className="h-6 w-6 text-white" />
//         </div>
//         <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//         <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
        
//         {item.messages && item.messages.length > 0 && (
//           <div className="mt-2 md:hidden sm:block">
//             {item.messages.slice(0, 1).map((message, index) => (
//               <div key={`message-${index}`} className="text-xs text-white/80 truncate">
//                 {message.sender}: {message.content}
//               </div>
//             ))}
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

// export default MessageCard;
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { NavigationItem } from "./navigationData";

interface MessageCardProps {
  item: NavigationItem;
}

const MessageCard = ({ item }: MessageCardProps) => {
  const navigate = useNavigate();
  const Icon = item.icon;
  
  return (
    <Card 
      className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.width} ${item.animation}`}
      onClick={() => navigate(item.path)}
    >
      <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
      <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
        <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-white">{item.title}</h3>
        <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
        
        {item.messages && item.messages.length > 0 && (
          <div className="mt-2 md:hidden hidden ">
            {item.messages.slice(0, 1).map((message, index) => (
              <div key={`message-${index}`} className="text-xs text-white/80 truncate">
                {message.sender}: {message.content}
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default MessageCard;