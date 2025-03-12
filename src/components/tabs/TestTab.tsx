import { useState } from "react";
// import { TestAnswer } from "./test/types";
// import { questions } from "./test/questions";
// import { NavigationButtons } from "./test/NavigationButtons";
// import { CompletedTestQuestions } from "./test/CompletedTestQuestions";
// import { QuestionForm } from "./test/QuestionForm";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { TestAnswer } from "./types";
import { questions } from "./questions";
import { CompletedTestQuestions } from "./CompletedTestQuestions";
import { QuestionForm } from "./QuestionForm";
import { NavigationButtons } from "./NavigationButtons";

export const TestTab = () => {
  const [answers, setAnswers] = useState<TestAnswer>({
    speed: "",
    vibrations: "",
    vibrationType: "",
    vibrationTypeCustom: "",
    leakage: "",
    leakageType: "",
    leakageTypeCustom: "",
    strangeNoises: "",
    noiseType: "",
    noiseTypeCustom: "",
    gearboxWorking: "",
    crashHistory: "",
    acWorking: "",
    dashboardWorking: "",
    dashboardIssues: "",
    dashboardIssuesCustom: "",
    windshieldCracked: "",
    brakesSameForAll: "true",
    brakesConditionAll: "",
    brakesConditionFront: "",
    brakesConditionBack: "",
    tireTreadSameForAll: "true",
    tireTreadAll: "",
    tireTreadFront: "",
    tireTreadBack: "",
    comments: "",
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleAnswerChange = (key: keyof TestAnswer, value: string) => {
    setAnswers((prev) => {
      const newAnswers = {
        ...prev,
        [key]: value,
      };

      // Reset follow-up answers if the parent answer changes
      const question = questions.find((q) => q.id === key);
      if (question?.followUp) {
        if (value !== question.followUp.condition) {
          const followUpId = question.followUp.id;
          newAnswers[followUpId as keyof TestAnswer] = "";
        }
      }

      // Handle brake-specific logic
      if (key === "brakesSameForAll") {
        // Reset brake condition answers when toggling
        newAnswers.brakesConditionAll = "";
        newAnswers.brakesConditionFront = "";
        newAnswers.brakesConditionBack = "";
      }

      return newAnswers;
    });

    const question = questions.find((q) => q.id === key);
    const isMainQuestion =
      !key.includes("Type") &&
      !key.includes("Custom") &&
      !key.includes("Issues") &&
      !key.includes("Condition");

    if (isMainQuestion) {
      // For brakes, only move to next question when all relevant fields are filled
      if (key === "brakesSameForAll") {
        const shouldAdvance =
          value === "true"
            ? Boolean(answers.brakesConditionAll)
            : Boolean(
                answers.brakesConditionFront && answers.brakesConditionBack
              );

        if (shouldAdvance) {
          setCurrentQuestion((prev) =>
            Math.min(prev + 1, questions.length - 1)
          );
        }
      } else if (!question?.followUp || value !== question.followUp.condition) {
        setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1));
      }
    }
  };

  const handleCustomInputChange = (followUpId: string, value: string) => {
    setAnswers((prev) => ({
      ...prev,
      [`${followUpId}Custom`]: value,
    }));
  };

  const handleCommentsChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswers((prev) => ({
      ...prev,
      comments: e.target.value,
    }));
  };

  const currentQ = questions[currentQuestion];
  const showFollowUp =
    currentQ.followUp && answers[currentQ.id] === currentQ.followUp.condition;

  const showAlternateFollowUp =
    currentQ.alternateFollowUp &&
    answers[currentQ.id] === currentQ.alternateFollowUp.condition;

  const canMoveNext =
    Boolean(answers[currentQ.id]) &&
    (!showFollowUp ||
      Boolean(answers[currentQ.followUp!.id as keyof TestAnswer])) &&
    (!showAlternateFollowUp ||
      (Boolean(answers.brakesConditionFront) &&
        Boolean(answers.brakesConditionBack)));

  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <div className="space-y-8">
      <CompletedTestQuestions
        answers={answers}
        onEdit={() => setCurrentQuestion(0)}
      />

      <QuestionForm
        question={currentQ}
        answers={answers}
        onAnswerChange={handleAnswerChange}
        onCustomInputChange={handleCustomInputChange}
      />

      {isLastQuestion && (
        <div className="space-y-2 mt-8">
          <Label htmlFor="comments">Övriga kommentarer</Label>
          <Textarea
            id="comments"
            value={answers.comments}
            onChange={handleCommentsChange}
            placeholder="Skriv eventuella övriga kommentarer här..."
            className="min-h-[100px]"
          />
        </div>
      )}

      <NavigationButtons
        currentQuestion={currentQuestion}
        totalQuestions={questions.length}
        canMoveNext={canMoveNext}
        onPrevious={() => setCurrentQuestion((prev) => Math.max(prev - 1, 0))}
        onNext={() =>
          setCurrentQuestion((prev) => Math.min(prev + 1, questions.length - 1))
        }
      />
    </div>
  );
};
