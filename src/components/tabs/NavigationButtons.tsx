// import { Button } from "@/components/ui/button";
// import { motion } from "framer-motion";
// import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

// interface NavigationButtonsProps {
//   currentQuestion: number;
//   totalQuestions: number;
//   canMoveNext: boolean;
//   onPrevious: () => void;
//   onNext: () => void;
// }

// export const NavigationButtons = ({
//   currentQuestion,
//   totalQuestions,
//   canMoveNext,
//   onPrevious,
//   onNext,
// }: NavigationButtonsProps) => {
//   // Calculate progress percentage
//   const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  
//   return (
//     <div className="mt-10 space-y-4">
//       {/* Progress bar */}
//       <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
//         <motion.div 
//           className="bg-gradient-to-r from-[#D4AF37] to-[#C09C2C] h-full rounded-full"
//           initial={{ width: '0%' }}
//           animate={{ width: `${progress}%` }}
//           transition={{ duration: 0.5, ease: "easeInOut" }}
//         />
//       </div>
      
//       <div className="flex justify-between items-center">
//         <div className="text-sm text-gray-500 dark:text-gray-400">
//           Fråga {currentQuestion + 1} av {totalQuestions}
//         </div>
//         <div className="text-sm font-medium text-[#D4AF37]">
//           {Math.round(progress)}% Slutfört
//         </div>
//       </div>
      
//       <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
//         <motion.div 
//           whileHover={{ scale: currentQuestion === 0 ? 1 : 1.03 }}
//           whileTap={{ scale: currentQuestion === 0 ? 1 : 0.97 }}
//           className="w-full sm:w-auto"
//         >
//           <Button 
//             variant="outline"
//             onClick={onPrevious}
//             disabled={currentQuestion === 0}
//             className={`w-full sm:w-auto border-2 flex gap-2 items-center px-6 py-3 ${
//               currentQuestion === 0 
//                 ? 'border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-600 cursor-not-allowed'
//                 : 'border-gray-300 text-gray-700 hover:border-[#D4AF37] hover:text-[#D4AF37] dark:border-gray-700 dark:text-gray-300 dark:hover:border-[#D4AF37] dark:hover:text-[#D4AF37] transition-colors duration-300'
//             }`}
//           >
//             <ChevronLeft className={`h-4 w-4 ${currentQuestion === 0 ? '' : 'group-hover:animate-pulse'}`} />
//             Föregående
//           </Button>
//         </motion.div>
        
//         <motion.div 
//           whileHover={{ 
//             scale: !canMoveNext || currentQuestion === totalQuestions - 1 ? 1 : 1.03,
//             boxShadow: !canMoveNext || currentQuestion === totalQuestions - 1 ? 'none' : '0 0 15px rgba(212, 175, 55, 0.3)'
//           }}
//           whileTap={{ scale: !canMoveNext || currentQuestion === totalQuestions - 1 ? 1 : 0.97 }}
//           className="w-full sm:w-auto"
//         >
//           <Button 
//             onClick={onNext}
//             disabled={!canMoveNext || currentQuestion === totalQuestions - 1}
//             className={`w-full sm:w-auto flex gap-2 items-center px-6 py-3 ${
//               !canMoveNext || currentQuestion === totalQuestions - 1
//                 ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
//                 : 'bg-[#D4AF37] hover:bg-[#C09C2C] text-black font-medium transition-colors duration-300'
//             }`}
//           >
//             Nästa
//             <motion.div
//               animate={canMoveNext && currentQuestion !== totalQuestions - 1 ? { x: [0, 3, 0] } : {}}
//               transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.8 }}
//             >
//               <ChevronRight className="h-4 w-4" />
//             </motion.div>
//           </Button>
//         </motion.div>
//       </div>
//     </div>
//   );
// };
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonsProps {
  currentQuestion: number;
  totalQuestions: number;
  canMoveNext: boolean;
  onPrevious: () => void;
  onNext: () => void;
}

export const NavigationButtons = ({
  currentQuestion,
  totalQuestions,
  canMoveNext,
  onPrevious,
  onNext,
}: NavigationButtonsProps) => {
  // Calculate progress percentage
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
 
  return (
    <div className="mt-10 space-y-4">
      {/* Progress bar */}
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-[#D4AF37] to-[#C09C2C] h-full rounded-full"
          initial={{ width: '0%' }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
     
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Fråga {currentQuestion + 1} av {totalQuestions}
        </div>
        <div className="text-sm font-medium text-[#D4AF37]">
          {Math.round(progress)}% Slutfört
        </div>
      </div>
     
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-2">
        <motion.div
          whileHover={{ scale: currentQuestion === 0 ? 1 : 1.03 }}
          whileTap={{ scale: currentQuestion === 0 ? 1 : 0.97 }}
          className="w-full sm:w-auto"
        >
          <Button
            variant="outline"
            onClick={onPrevious}
            disabled={currentQuestion === 0}
            className={`w-full sm:w-auto border-2 flex gap-2 items-center px-6 py-3 ${
              currentQuestion === 0
                ? 'border-gray-200 text-gray-400 dark:border-gray-700 dark:text-gray-600 cursor-not-allowed'
                : 'border-gray-300 text-gray-700 hover:border-[#D4AF37] hover:text-black dark:border-gray-700 dark:text-gray-300 dark:hover:border-[#D4AF37] dark:hover:text-black transition-colors duration-300'
            }`}
          >
            <ChevronLeft className="h-4 w-4" />
            Föregående
          </Button>
        </motion.div>
       
        <motion.div
          whileHover={{
            scale: canMoveNext && currentQuestion !== totalQuestions - 1 ? 1.03 : 1,
            boxShadow: canMoveNext && currentQuestion !== totalQuestions - 1 ? '0 0 15px rgba(212, 175, 55, 0.3)' : 'none'
          }}
          whileTap={{ scale: canMoveNext && currentQuestion !== totalQuestions - 1 ? 0.97 : 1 }}
          className="w-full sm:w-auto"
        >
          <Button
            onClick={onNext}
            disabled={!canMoveNext || currentQuestion === totalQuestions - 1}
            className={`w-full sm:w-auto flex gap-2 items-center px-6 py-3 ${
              !canMoveNext || currentQuestion === totalQuestions - 1
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed dark:bg-gray-800 dark:text-gray-600'
                : 'bg-[#D4AF37] hover:bg-[#C09C2C] text-black hover:text-black font-medium transition-colors duration-300'
            }`}
          >
            Nästa
            <motion.div
              animate={canMoveNext && currentQuestion !== totalQuestions - 1 ? { x: [0, 3, 0] } : {}}
              transition={{ repeat: Infinity, repeatDelay: 1.5, duration: 0.8 }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};