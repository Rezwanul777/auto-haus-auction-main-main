import { CompletedSectionHeader } from "../valuation/form-section/CompletedSectionHeader";
import { questions } from "./questions";
import { TestAnswer } from "./types";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ChevronRight, Clock } from "lucide-react";

interface CompletedTestQuestionsProps {
  answers: TestAnswer;
  onEdit: () => void;
}

export const CompletedTestQuestions = ({ answers, onEdit }: CompletedTestQuestionsProps) => {
  const getAnswerText = (questionId: keyof TestAnswer) => {
    const question = questions.find(q => q.id === questionId);
    if (!question) return "";

    const answer = answers[questionId];
    const option = question.options.find(opt => opt.value === answer);
    
    if (!option) return "";

    let text = option.label;

    // Add follow-up answer if exists
    if (question.followUp && answer === question.followUp.condition) {
      const followUpId = question.followUp.id as keyof TestAnswer;
      const followUpAnswer = answers[followUpId];
      if (followUpAnswer) {
        if (followUpAnswer === 'other') {
          const customAnswer = answers[`${followUpId}Custom` as keyof TestAnswer];
          if (customAnswer) {
            text += ` - ${customAnswer}`;
          }
        } else {
          const followUpOption = question.followUp.options.find(opt => opt.value === followUpAnswer);
          if (followUpOption) {
            text += ` - ${followUpOption.label}`;
          }
        }
      }
    }

    return text;
  };

  // Filter out unanswered questions and maintain original question order
  const completedQuestions = questions
    .filter(q => Boolean(answers[q.id]) && answers[q.id] !== '')
    .map(q => ({
      question: q.question,
      answer: getAnswerText(q.id)
    }));

  if (completedQuestions.length === 0) return null;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 24
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-4 max-w-3xl mx-auto"
    >
      <motion.div 
        className="flex items-center justify-between mb-4 px-1"
        variants={itemVariants}
      >
        <div className="flex items-center text-[#D4AF37] gap-2">
          <CheckCircle className="h-5 w-5" />
          <h3 className="font-semibold text-lg">Besvarade frågor</h3>
        </div>
        <div className="text-sm text-gray-500 flex items-center gap-1">
          <Clock className="h-4 w-4" />
          <span>{completedQuestions.length} av {questions.length} slutförda</span>
        </div>
      </motion.div>

      {completedQuestions.map((q, index) => (
        <motion.div 
          key={index}
          variants={itemVariants}
          whileHover={{ 
            scale: 1.01, 
            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
            borderColor: "#D4AF37" 
          }}
          className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300"
        >
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
            <div className="space-y-1 flex-1">
              <div className="font-medium text-gray-700 dark:text-gray-200">
                {q.question}
              </div>
              <div className="text-[#D4AF37] font-medium flex items-center gap-1">
                <ChevronRight className="h-4 w-4 flex-shrink-0" />
                <span>{q.answer}</span>
              </div>
            </div>
            
            <motion.button
              onClick={onEdit}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(212, 175, 55, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="text-sm text-[#D4AF37] hover:text-[#C09C2C] py-1 px-3 rounded-full border border-[#D4AF37] hover:border-[#C09C2C] transition-colors duration-300 flex-shrink-0 self-end sm:self-center"
            >
              Redigera
            </motion.button>
          </div>
        </motion.div>
      ))}
      
      <motion.div 
        variants={itemVariants}
        className="flex justify-center mt-6"
      >
        <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-[#D4AF37]"
            initial={{ width: '0%' }}
            animate={{ 
              width: `${(completedQuestions.length / questions.length) * 100}%`,
            }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};