
import { RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { QuestionOption as QuestionOptionType } from './types';

interface QuestionOptionProps {
  option: QuestionOptionType;
  questionId: string;
}

export const QuestionOption = ({ option, questionId }: QuestionOptionProps) => {
  const optionId = `${questionId}-${option.value}`;
  
  return (
    <Label
      htmlFor={optionId}
      className="flex items-center space-x-2 border rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-all active:scale-[0.98]"
    >
      <RadioGroupItem value={option.value} id={optionId} />
      <span>{option.label}</span>
    </Label>
  );
};
