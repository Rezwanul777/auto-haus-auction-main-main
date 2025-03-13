
import { Question } from './types';
import { speedQuestions } from './questions/speedQuestions';
import { mechanicalQuestions } from './questions/mechanicalQuestions';
import { systemQuestions } from './questions/systemQuestions';
import { conditionQuestions } from './questions/conditionQuestions';
import { brakesAndTiresQuestions } from './questions/brakesAndTiresQuestions';

export const questions: Question[] = [
  ...speedQuestions,
  ...mechanicalQuestions,
  ...systemQuestions,
  ...conditionQuestions,
  ...brakesAndTiresQuestions,
];

