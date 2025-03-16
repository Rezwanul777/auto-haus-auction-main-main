// import AuthCard from "@/components/auth/AuthCard";
// import NewsSection from "@/components/auth/NewsSection";
// import RainBackground from "@/components/auth/RainBackground";
// import { Separator } from "@radix-ui/react-separator";

// const Auth = () => {
//   return (
//     <div className="min-h-screen flex items-center relative overflow-hidden">
//       <RainBackground />
//       {/* Main container - flex column on mobile, row on desktop */}
//       <div className="min-h-screen w-full flex flex-col md:flex-row">
//         {/* News section - full width on mobile, half width on desktop */}
//         <div className="w-full md:w-1/2 h-screen md:h-screen order-2 md:order-1 relative">
//           <NewsSection />
//         </div>

//         {/* Separator - only visible on desktop */}
//         <div className="hidden md:block w-px h-full bg-white/10 absolute left-1/2 transform -translate-x-1/2 z-10" />

//         {/* Auth container - full width on mobile, half width on desktop */}
//         <div className="w-full md:w-1/2 min-h-screen flex items-center justify-center order-1 md:order-2 bg-black/50 backdrop-blur-sm p-4 md:p-6">
//           <Separator orientation="vertical" className="h-[400px] bg-white/10" />
//           <div className="w-full max-w-md">
//             <AuthCard />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import { Separator } from "@/components/ui/separator";
// import NewsSection from "@/components/auth/NewsSection";
// import AuthCard from "@/components/auth/AuthCard";
// import RainBackground from "@/components/auth/RainBackground";

// const Auth = () => {
//   return (
//     <div className="min-h-screen flex items-center relative overflow-hidden">
//       <RainBackground />
//       <NewsSection />
//       <Separator orientation="vertical" className="h-[400px] bg-white/10" />
//       <div className="w-1/2 flex items-center justify-center p-4 bg-black/50">
//         <AuthCard />
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import { Separator } from "@/components/ui/separator";
// import NewsSection from "@/components/auth/NewsSection";
// import AuthCard from "@/components/auth/AuthCard";
// import RainBackground from "@/components/auth/RainBackground";

// const Auth = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden flex flex-col md:flex-row">
//       <RainBackground />
      
//       {/* On mobile: AuthCard first (top), NewsSection second (bottom) */}
//       <div className="w-full md:w-1/2 order-2 md:order-1 z-10">
//         <NewsSection />
//       </div>
      
//       {/* Separator - only visible on md screens and up */}
//       <Separator orientation="vertical" className="hidden md:block h-[400px] bg-white/10 z-10" />
      
//       {/* On mobile: AuthCard goes on top */}
//       <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-black/50 order-1 md:order-2 z-10">
//         <AuthCard />
//       </div>
//     </div>
//   );
// };

// export default Auth;


// import { Separator } from "@/components/ui/separator";
// import NewsSection from "@/components/auth/NewsSection";
// import AuthCard from "@/components/auth/AuthCard";
// import RainBackground from "@/components/auth/RainBackground";

// const Auth = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden md:space-x-2 md:space-y-4">
//       <RainBackground />
      
//       {/* Mobile view: stack vertically with login on top */}
//       <div className="flex flex-col md:flex-row md:items-center">
//         {/* News section - below on mobile, left side on desktop */}
//         <div className="w-full md:w-1/2 order-2 md:order-1">
//           <NewsSection />
//         </div>
        
//         {/* Separator - only visible on md screens and up */}
//         <Separator orientation="vertical" className="hidden md:block h-[400px] bg-white/10" />
        
//         {/* Auth Card - top on mobile, right side on desktop */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-black/50 order-1 md:order-2">
//           <AuthCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

// import { Separator } from "@/components/ui/separator";
// import NewsSection from "@/components/auth/NewsSection";
// import AuthCard from "@/components/auth/AuthCard";
// import RainBackground from "@/components/auth/RainBackground";

// const Auth = () => {
//   return (
//     <div className="min-h-screen relative overflow-hidden">
//       <RainBackground />
      
//       {/* Mobile view: stack vertically with login on top */}
//       <div className="flex flex-col md:flex-row md:items-center">
//         {/* News section - below on mobile, left side on desktop */}
//         <div className="w-full order-2 md:order-1 md:w-1/2 flex justify-center">
//           <div className="w-full max-w-lg md:w-auto md:max-w-none">
//             <NewsSection />
//           </div>
//         </div>
        
//         {/* Separator - only visible on md screens and up */}
//         <Separator orientation="vertical" className="hidden md:block h-[400px] bg-white/10" />
        
//         {/* Auth Card - top on mobile, right side on desktop */}
//         <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-black/50 order-1 md:order-2">
//           <AuthCard />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Auth;

import { Separator } from "@/components/ui/separator";
import NewsSection from "@/components/auth/NewsSection";
import AuthCard from "@/components/auth/AuthCard";
import RainBackground from "@/components/auth/RainBackground";

const Auth = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <RainBackground />
      
      <div className="flex flex-col md:flex-row md:items-center">
        {/* News section - below on mobile, left side on desktop */}
        <div className="w-full order-2 md:order-1 md:w-1/2">
          <NewsSection />
        </div>
        
        {/* Separator - only visible on md screens and up */}
        <Separator orientation="vertical" className="hidden md:block h-[400px] bg-white/10" />
        
        {/* Auth Card - top on mobile, right side on desktop */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-4 bg-black/50 order-1 md:order-2">
          <AuthCard />
        </div>
      </div>
    </div>
  );
};

export default Auth;