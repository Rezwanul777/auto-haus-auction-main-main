


// export interface Message {
//   sender: string;
//   content: string;
//   time: string;
// }

// export interface NavigationItem {
//   title: string;
//   subtitle: string;
//   path: string;
//   icon: LucideIcon;
//   color: string;
//   width: string;
//   animation: string;
//   messages?: Message[];
// }

// export const navigationItems: NavigationItem[] = [
//   {
//     title: "Lägg upp annons/Värderabilen",
//     subtitle: "Skapa en ny annons",
//     path: "/car-valuation",
//     icon: Plus,
//     color: "from-[#FF7B7B] to-[#FFB17B]",
//     width: "md:col-span-3 sm:col-span-1",
//     animation: "animate-fade-in"
//   },
//   {
//     title: "Meddelanden",
//     subtitle: "2 nya",
//     path: "/messages",
//     icon: MessageSquare,
//     color: "from-[#007AFF] to-[#0A84FF]",
//     width: "col-span-1",
//     animation: "animate-fade-in delay-75",
//     messages: [
//       {
//         sender: "Johan Andersson",
//         content: "Hej! Är bilen fortfarande tillgänglig?",
//         time: "14:30"
//       },
//       {
//         sender: "Maria Nilsson",
//         content: "När kan vi boka en visning?",
//         time: "13:45"
//       }
//     ]
//   },
//   {
//     title: "Annonser",
//     subtitle: "Se aktiva",
//     path: "/auctions",
//     icon: ListOrdered,
//     color: "from-[#3DD598] to-[#49B8AD]",
//     width: "col-span-2",
//     animation: "animate-fade-in delay-150"
//   },
//   {
//     title: "Ekonomi",
//     subtitle: "Se översikt",
//     path: "/economy",
//     icon: PieChart,
//     color: "from-[#4CD964] to-[#4CAF50]",
//     width: "col-span-2",
//     animation: "animate-fade-in delay-100"
//   },
//   {
//     title: "Inställningar",
//     subtitle: "Hantera dina inställningar",
//     path: "/settings",
//     icon: Settings,
//     color: "from-[#6B78E5] to-[#5A4CB0]",
//     width: "col-span-1",
//     animation: "animate-fade-in delay-150"
//   },
//   {
//     title: "Support",
//     subtitle: "Få hjälp",
//     path: "/support",
//     icon: Headphones,
//     color: "from-[#FF8A48] to-[#FF6B00]",
//     width: "col-span-3",
//     animation: "animate-fade-in delay-200"
//   }
// ];

export interface Message {
  sender: string;
  content: string;
  time: string;
}

export interface NavigationItem {
  title: string;
  subtitle: string;
  path: string;
  icon: LucideIcon;
  color: string;
  width: string;
  animation: string;
  messages?: Message[];
}
import { 
  Plus, 
  ListOrdered, 
  MessageSquare, 
  PieChart, 
  Settings,
  Headphones,
  LucideIcon
} from "lucide-react";



export const navigationItems: NavigationItem[] = [
  {
    title: "Lägg upp annons/Värdera bilen",
    subtitle: "Skapa en ny annons",
    path: "/car-valuation",
    icon: Plus,
    color: "from-[#FF7B7B] to-[#FFB17B]",
    width: "col-span-1 sm:col-span-1 md:col-span-3", // Updated width classes
    animation: "animate-fade-in"
  },
  {
    title: "Meddelanden",
    subtitle: "2 nya",
    path: "/messages",
    icon: MessageSquare,
    color: "from-[#007AFF] to-[#0A84FF]",
    width: "col-span-1", // Full width on mobile, 1 column on larger screens
    animation: "animate-fade-in delay-75",
    messages: [
      {
        sender: "Johan Andersson",
        content: "Hej! Är bilen fortfarande tillgänglig?",
        time: "14:30"
      },
      {
        sender: "Maria Nilsson",
        content: "När kan vi boka en visning?",
        time: "13:45"
      }
    ]
  },
  {
    title: "Annonser",
    subtitle: "Se aktiva",
    path: "/auctions",
    icon: ListOrdered,
    color: "from-[#3DD598] to-[#49B8AD]",
    width: "col-span-1 sm:col-span-2", // Full width on mobile, 2 columns on larger screens
    animation: "animate-fade-in delay-150"
  },
  {
    title: "Ekonomi",
    subtitle: "Se översikt",
    path: "/economy",
    icon: PieChart,
    color: "from-[#4CD964] to-[#4CAF50]",
    width: "col-span-1 sm:col-span-2", // Full width on mobile, 2 columns on larger screens
    animation: "animate-fade-in delay-100"
  },
  {
    title: "Inställningar",
    subtitle: "Hantera dina inställningar",
    path: "/settings",
    icon: Settings,
    color: "from-[#6B78E5] to-[#5A4CB0]",
    width: "col-span-1", // Full width on mobile, 1 column on larger screens
    animation: "animate-fade-in delay-150"
  },
  {
    title: "Support",
    subtitle: "Få hjälp",
    path: "/support",
    icon: Headphones,
    color: "from-[#FF8A48] to-[#FF6B00]",
    width: "col-span-1 sm:col-span-3", // Full width on mobile, 3 columns on larger screens
    animation: "animate-fade-in delay-200"
  }
];