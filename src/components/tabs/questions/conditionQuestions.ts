
import { Question } from '../types';

export const conditionQuestions: Question[] = [
  {
    id: 'crashHistory',
    question: 'Har bilen varit med om krock?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
  },
  {
    id: 'windshieldCracked',
    question: 'Är vindrutan sprucken?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
  },
];
