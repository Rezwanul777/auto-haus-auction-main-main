
// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { OrdersView } from "@/components/economy/OrdersView";
// import { VATRefundForm } from "@/components/economy/VATRefundForm";
// import { VouchersView } from "@/components/economy/VouchersView";
// import { useState } from "react";

// const Economy = () => {
//   const navigate = useNavigate();
//   const [currentView, setCurrentView] = useState<'orders' | 'vouchers' | 'vat'>('orders');

//   const renderContent = () => {
//     switch (currentView) {
//       case 'orders':
//         return <OrdersView />;
//       case 'vouchers':
//         return <VouchersView />;
//       case 'vat':
//         return <VATRefundForm />;
//       default:
//         return <OrdersView />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black relative animate-fade-in">
//       <div className="fixed inset-0 pointer-events-none" 
//         style={{
//           background: `
//             radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.15) 0%, transparent 35%),
//             radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.12) 0%, transparent 35%),
//             radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
//             radial-gradient(circle at 15% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 30%),
//             radial-gradient(circle at 85% 85%, rgba(34, 197, 94, 0.12) 0%, transparent 35%)
//           `
//         }}
//       />
//       <div className="container mx-auto px-4 py-6 relative z-10">
//         <Button 
//           variant="ghost" 
//           onClick={() => navigate('/dashboard')}
//           className="mb-6 flex items-center gap-2 text-white hover:bg-white/10"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Tillbaka till dashboard
//         </Button>

//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Navigation Menu */}
//           <div className="md:w-64 flex-shrink-0">
//             <h2 className="text-2xl font-bold text-green-500 mb-4">Ekonomi</h2>
//             <nav className="flex flex-row md:flex-col overflow-x-auto scrollbar-hide space-x-2 md:space-x-0 md:space-y-2 pb-4 md:pb-0">
//               <button
//                 onClick={() => setCurrentView('orders')}
//                 className={`whitespace-nowrap text-left py-2 px-4 rounded-md transition-colors ${
//                   currentView === 'orders' 
//                     ? 'text-white bg-white/5 md:border-l-2 border-green-500' 
//                     : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                 }`}
//               >
//                 Ordrar
//               </button>
//               <button
//                 onClick={() => setCurrentView('vouchers')}
//                 className={`whitespace-nowrap text-left py-2 px-4 rounded-md transition-colors ${
//                   currentView === 'vouchers' 
//                     ? 'text-white bg-white/5 md:border-l-2 border-green-500' 
//                     : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                 }`}
//               >
//                 Kuponger
//               </button>
//               <button
//                 onClick={() => setCurrentView('vat')}
//                 className={`whitespace-nowrap text-left py-2 px-4 rounded-md transition-colors ${
//                   currentView === 'vat' 
//                     ? 'text-white bg-white/5 md:border-l-2 border-green-500' 
//                     : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                 }`}
//               >
//                 Moms-återbäring
//               </button>
//             </nav>
//           </div>

//           {/* Main Content Area */}
//           <div className="flex-1 animate-fade-in">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Economy;


// import { Button } from "@/components/ui/button";
// import { ArrowLeft } from "lucide-react";
// import { useNavigate } from "react-router-dom";
// import { OrdersView } from "@/components/economy/OrdersView";
// import { VATRefundForm } from "@/components/economy/VATRefundForm";
// import { VouchersView } from "@/components/economy/VouchersView";
// import { useState } from "react";

// const Economy = () => {
//   const navigate = useNavigate();
//   const [currentView, setCurrentView] = useState<'orders' | 'vouchers' | 'vat'>('orders');

//   const renderContent = () => {
//     switch (currentView) {
//       case 'orders':
//         return <OrdersView />;
//       case 'vouchers':
//         return <VouchersView />;
//       case 'vat':
//         return <VATRefundForm />;
//       default:
//         return <OrdersView />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-black relative animate-fade-in">
//       <div className="fixed inset-0 pointer-events-none"
//         style={{
//           background: `
//             radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.15) 0%, transparent 35%),
//             radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.12) 0%, transparent 35%),
//             radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
//             radial-gradient(circle at 15% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 30%),
//             radial-gradient(circle at 85% 85%, rgba(34, 197, 94, 0.12) 0%, transparent 35%)
//           `
//         }}
//       />
//       <div className="container mx-auto px-4 py-6 relative z-10">
//         <Button
//           variant="ghost"
//           onClick={() => navigate('/dashboard')}
//           className="mb-6 flex items-center gap-2 text-white hover:bg-white/10"
//         >
//           <ArrowLeft className="h-4 w-4" />
//           Tillbaka till dashboard
//         </Button>
//         <div className="flex flex-col md:flex-row gap-8">
//           {/* Left Navigation Menu */}
//           <div className="md:w-64 flex-shrink-0">
//             <h2 className="text-2xl font-bold text-green-500 mb-4">Ekonomi</h2>
//             <div className="overflow-x-auto pb-2 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
//               <nav className="flex flex-row md:flex-col min-w-fit md:min-w-0 space-x-1 md:space-x-0 md:space-y-2">
//                 <button
//                   onClick={() => setCurrentView('orders')}
//                   className={`whitespace-nowrap text-left py-2 px-3 sm:px-4 rounded-md transition-colors flex-shrink-0 ${
//                     currentView === 'orders'
//                       ? 'text-white bg-white/5 md:border-l-2 border-green-500'
//                       : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                   }`}
//                 >
//                   Ordrar
//                 </button>
//                 <button
//                   onClick={() => setCurrentView('vouchers')}
//                   className={`whitespace-nowrap text-left py-2 px-3 sm:px-4 rounded-md transition-colors flex-shrink-0 ${
//                     currentView === 'vouchers'
//                       ? 'text-white bg-white/5 md:border-l-2 border-green-500'
//                       : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                   }`}
//                 >
//                   Kuponger
//                 </button>
//                 <button
//                   onClick={() => setCurrentView('vat')}
//                   className={`whitespace-nowrap text-left py-2 px-3 sm:px-4 rounded-md transition-colors flex-shrink-0 text-xs sm:text-sm md:text-base ${
//                     currentView === 'vat'
//                       ? 'text-white bg-white/5 md:border-l-2 border-green-500'
//                       : 'text-gray-400 hover:bg-white/5 hover:text-white'
//                   }`}
//                 >
//                   Moms-återbäring
//                 </button>
//               </nav>
//             </div>
//           </div>
//           {/* Main Content Area */}
//           <div className="flex-1 animate-fade-in">
//             {renderContent()}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Economy;

//updated

import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { OrdersView } from "@/components/economy/OrdersView";
import { VATRefundForm } from "@/components/economy/VATRefundForm";
import { VouchersView } from "@/components/economy/VouchersView";
import { useState } from "react";

const Economy = () => {
  const navigate = useNavigate();
  const [currentView, setCurrentView] = useState<'orders' | 'vouchers' | 'vat'>('orders');

  const renderContent = () => {
    switch (currentView) {
      case 'orders':
        return <OrdersView />;
      case 'vouchers':
        return <VouchersView />;
      case 'vat':
        return <VATRefundForm />;
      default:
        return <OrdersView />;
    }
  };

  return (
    <div className="min-h-screen bg-black relative animate-fade-in">
      <div className="fixed inset-0 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at 75% 25%, rgba(34, 197, 94, 0.15) 0%, transparent 35%),
            radial-gradient(circle at 25% 75%, rgba(34, 197, 94, 0.12) 0%, transparent 35%),
            radial-gradient(circle at 50% 50%, rgba(34, 197, 94, 0.1) 0%, transparent 40%),
            radial-gradient(circle at 15% 25%, rgba(34, 197, 94, 0.08) 0%, transparent 30%),
            radial-gradient(circle at 85% 85%, rgba(34, 197, 94, 0.12) 0%, transparent 35%)
          `
        }}
      />
      {/* Improved container width handling */}
      <div className="container mx-auto px-4 py-6 relative z-10 max-w-full xl:max-w-7xl">
        <Button
          variant="ghost"
          onClick={() => navigate('/dashboard')}
          className="mb-6 flex items-center gap-2 text-white hover:bg-white/10"
        >
          <ArrowLeft className="h-4 w-4" />
          Tillbaka till dashboard
        </Button>
        {/* Added better responsive column handling */}
        <div className="flex flex-col lg:flex-row gap-4 lg:gap-8">
          {/* Left Navigation Menu */}
          <div className="lg:w-64 flex-shrink-0">
            <h2 className="text-2xl font-bold text-green-500 mb-4">Ekonomi</h2>
            <div className="overflow-x-auto pb-2 lg:pb-0 -mx-4 px-4 lg:mx-0 lg:px-0">
              <nav className="flex flex-row lg:flex-col min-w-fit lg:min-w-0 space-x-1 lg:space-x-0 lg:space-y-2">
                <button
                  onClick={() => setCurrentView('orders')}
                  className={`whitespace-nowrap text-left py-2 px-3 sm:px-4 rounded-md transition-colors flex-shrink-0 ${
                    currentView === 'orders'
                      ? 'text-white bg-white/5 lg:border-l-2 border-green-500'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Ordrar
                </button>
                <button
                  onClick={() => setCurrentView('vouchers')}
                  className={`whitespace-nowrap text-left py-2 px-3 sm:px-4 rounded-md transition-colors flex-shrink-0 ${
                    currentView === 'vouchers'
                      ? 'text-white bg-white/5 lg:border-l-2 border-green-500'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Kuponger
                </button>
                <button
                  onClick={() => setCurrentView('vat')}
                  className={`whitespace-nowrap text-left py-2 px-3 sm:px-4 rounded-md transition-colors flex-shrink-0 text-xs sm:text-sm lg:text-base ${
                    currentView === 'vat'
                      ? 'text-white bg-white/5 lg:border-l-2 border-green-500'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  Moms-återbäring
                </button>
              </nav>
            </div>
          </div>
          {/* Main Content Area */}
          <div className="flex-1 animate-fade-in">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Economy;
