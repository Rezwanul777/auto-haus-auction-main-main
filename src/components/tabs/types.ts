export interface TestAnswer {
  speed: string;
  vibrations: string;
  vibrationType?: string;
  vibrationTypeCustom?: string;
  leakage: string;
  leakageType?: string;
  leakageTypeCustom?: string;
  strangeNoises: string;
  noiseType?: string;
  noiseTypeCustom?: string;
  gearboxWorking: string;
  crashHistory: string;
  acWorking: string;
  dashboardWorking: string;
  dashboardIssues?: string;
  dashboardIssuesCustom?: string;
  windshieldCracked: string;
  brakesSameForAll: string;
  brakesConditionAll?: string;
  brakesConditionFront?: string;
  brakesConditionBack?: string;
  tireTreadSameForAll: string;
  tireTreadAll?: string;
  tireTreadFront?: string;
  tireTreadBack?: string;
  comments?: string;
}

export interface QuestionOption {
  value: string;
  label: string;
}

export interface FollowUpQuestion {
  id: string;
  question: string;
  options: QuestionOption[];
}

export interface Question {
  id: keyof TestAnswer;
  question: string;
  options: QuestionOption[];
  followUp?: {
    condition: string;
    id: string;
    question: string;
    options: QuestionOption[];
    allowCustomInput?: boolean;
  };
  alternateFollowUp?: {
    condition: string;
    questions: Array<{
      id: string;
      question: string;
      options: QuestionOption[];
    }>;
  };
}
