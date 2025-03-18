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
//       <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
//         <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:scale-110 transition-transform">
//           <Icon className="h-6 w-6 text-white" />
//         </div>
//         <h3 className="text-xl font-semibold text-white">{item.title}</h3>
//         <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
        
//         {item.messages && item.messages.length > 0 && (
//           <div className="mt-2 md:hidden hidden ">
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

//18.03.25

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
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 w-full h-full ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
      
//       <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-between">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-base md:text-lg lg:text-xl font-semibold text-white">{item.title}</h3>
//             <p className="text-xs md:text-sm text-white/80 mt-1">{item.subtitle}</p>
//           </div>
//           <div className="rounded-full bg-white/20 p-2 md:p-3 group-hover:scale-110 transition-transform">
//             <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
//           </div>
//         </div>
        
//         {item.messages && item.messages.length > 0 && (
//           <div className="mt-2 bg-black/10 rounded-md p-2 text-white/90">
//             <div className="flex justify-between text-xs">
//               <span className="font-medium truncate max-w-[70%]">{item.messages[0].sender}</span>
//               <span>{item.messages[0].time}</span>
//             </div>
//             <p className="text-xs mt-1 truncate">{item.messages[0].content}</p>
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
//       className="hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 w-full h-full message-card"
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
      
//       <CardContent className="p-4 md:p-5 relative z-10 h-full flex flex-col justify-between">
//         <div className="flex justify-between items-start">
//           <div>
//             <h3 className="text-base md:text-lg font-semibold text-white">{item.title}</h3>
//             <p className="text-xs md:text-sm text-white/80 mt-1">{item.subtitle}</p>
//           </div>
//           <div className="rounded-full bg-white/20 p-2 md:p-3 group-hover:scale-110 transition-transform">
//             <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
//           </div>
//         </div>
        
//         {item.messages && item.messages.length > 0 && (
//           <div className="mt-auto pt-3">
//             <div className="bg-black/10 rounded-md p-2 text-white/90">
//               <div className="flex justify-between text-xs">
//                 <span className="font-medium truncate max-w-[60%]">{item.messages[0].time}</span>
//                 <span className="text-white/70">{ }</span>
//               </div>
//               <p className="text-xs mt-1 text-white/90 leading-snug">
//                 {/* Shorter message text for small screens */}
//                 <span className="font-medium">{item.messages[0].sender}: </span>
//                 <span className="message-content">
//                   {item.messages[0].content.length > 20 
//                     ? `${item.messages[0].content.substring(0, 20)}...` 
//                     : item.messages[0].content}
//                 </span>
//               </p>
//             </div>
//           </div>
//         )}
//       </CardContent>
//     </Card>
//   );
// };

//  export default MessageCard;

// Updated MessageCard.tsx with responsive text handling
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
//       className={`hover:shadow-lg transition-all cursor-pointer overflow-hidden relative group border-0 h-[160px] ${item.animation}`}
//       onClick={() => navigate(item.path)}
//     >
//       <div className={`absolute inset-0 bg-gradient-to-r ${item.color}`} />
//       <CardContent className="p-6 relative z-10 h-full flex flex-col justify-center items-center text-center">
//         <div className="rounded-full bg-white/20 p-3 mb-4 group-hover:scale-110 transition-transform">
//           <Icon className="h-6 w-6 text-white" />
//         </div>
//         <h3 className="text-xl font-semibold text-white lg:text-lg">{item.title}</h3>
//         <p className="text-sm text-white/80 mt-2">{item.subtitle}</p>
       
//         {item.messages && item.messages.length > 0 && (
//           <div className="mt-2 md:hidden hidden">
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


// new update from github
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