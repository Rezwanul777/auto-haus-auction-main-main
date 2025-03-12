
import { RadioGroup } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Question, TestAnswer } from "./types";
import { QuestionOption } from "./QuestionOption";

interface QuestionFormProps {
  question: Question;
  answers: TestAnswer;
  onAnswerChange: (key: keyof TestAnswer, value: string) => void;
  onCustomInputChange: (followUpId: string, value: string) => void;
}

export const QuestionForm = ({ 
  question, 
  answers, 
  onAnswerChange, 
  onCustomInputChange 
}: QuestionFormProps) => {
  const showFollowUp = question.followUp && 
    answers[question.id] === question.followUp.condition;

  const showAlternateFollowUp = question.alternateFollowUp && 
    answers[question.id] === question.alternateFollowUp.condition;

  const showCustomInput = (questionId: string, selectedValue: string) => {
    const followUpQuestion = question.followUp?.id === questionId ? question.followUp : undefined;
    return followUpQuestion?.allowCustomInput && selectedValue === 'other';
  };

  if (question.id === 'brakesSameForAll' || question.id === 'tireTreadSameForAll') {
    return (
      <div className="space-y-6">
        <div className="space-y-3">
          <Label className="text-lg font-medium">{question.question}</Label>
          
          <div className="flex items-center space-x-2 mb-4">
            <Checkbox 
              id={`${question.id}-same`}
              checked={answers[question.id] === 'true'}
              onCheckedChange={(checked) => {
                onAnswerChange(question.id, checked ? 'true' : 'false');
              }}
            />
            <Label htmlFor={`${question.id}-same`}>Samma för alla fyra {question.id === 'brakesSameForAll' ? 'bromsar' : 'däck'}</Label>
          </div>

          {answers[question.id] === 'true' ? (
            <div className="space-y-3">
              <Label className="text-lg font-medium">
                {question.id === 'brakesSameForAll' ? 'Bromseffektivitet' : 'Mönsterdjup'}
              </Label>
              <RadioGroup
                value={answers[question.followUp!.id as keyof TestAnswer]}
                onValueChange={(value) => onAnswerChange(question.followUp!.id as keyof TestAnswer, value)}
                className="grid grid-cols-1 sm:grid-cols-3 gap-4"
              >
                {question.followUp!.options.map((option) => (
                  <QuestionOption
                    key={option.value}
                    option={option}
                    questionId={question.followUp!.id}
                  />
                ))}
              </RadioGroup>
            </div>
          ) : (
            <div className="space-y-6">
              {question.alternateFollowUp!.questions.map((followUpQ) => (
                <div key={followUpQ.id} className="space-y-3">
                  <Label className="text-lg font-medium">{followUpQ.question}</Label>
                  <RadioGroup
                    value={answers[followUpQ.id as keyof TestAnswer]}
                    onValueChange={(value) => onAnswerChange(followUpQ.id as keyof TestAnswer, value)}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-4"
                  >
                    {followUpQ.options.map((option) => (
                      <QuestionOption
                        key={option.value}
                        option={option}
                        questionId={followUpQ.id}
                      />
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Label className="text-lg font-medium">{question.question}</Label>
        <RadioGroup
          value={answers[question.id]}
          onValueChange={(value) => onAnswerChange(question.id, value)}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4"
        >
          {question.options.map((option) => (
            <QuestionOption
              key={option.value}
              option={option}
              questionId={question.id}
            />
          ))}
        </RadioGroup>
      </div>

      {showFollowUp && (
        <div className="pl-6 border-l-2 border-gray-200 mt-3">
          <div className="space-y-3">
            <Label className="text-lg font-medium">{question.followUp!.question}</Label>
            <RadioGroup
              value={answers[question.followUp!.id as keyof TestAnswer]}
              onValueChange={(value) => onAnswerChange(question.followUp!.id as keyof TestAnswer, value)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {question.followUp!.options.map((option) => (
                <QuestionOption
                  key={option.value}
                  option={option}
                  questionId={question.followUp!.id}
                />
              ))}
            </RadioGroup>
            
            {showCustomInput(question.followUp!.id, answers[question.followUp!.id as keyof TestAnswer]) && (
              <div className="mt-3">
                <Input
                  placeholder="Ange annat..."
                  value={answers[`${question.followUp!.id}Custom` as keyof TestAnswer] || ''}
                  onChange={(e) => onCustomInputChange(question.followUp!.id, e.target.value)}
                  className="max-w-md"
                />
              </div>
            )}
          </div>
        </div>
      )}

      {showAlternateFollowUp && question.alternateFollowUp!.questions.map((followUpQ) => (
        <div key={followUpQ.id} className="pl-6 border-l-2 border-gray-200 mt-3">
          <div className="space-y-3">
            <Label className="text-lg font-medium">{followUpQ.question}</Label>
            <RadioGroup
              value={answers[followUpQ.id as keyof TestAnswer]}
              onValueChange={(value) => onAnswerChange(followUpQ.id as keyof TestAnswer, value)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4"
            >
              {followUpQ.options.map((option) => (
                <QuestionOption
                  key={option.value}
                  option={option}
                  questionId={followUpQ.id}
                />
              ))}
            </RadioGroup>
          </div>
        </div>
      ))}
    </div>
  );
};
