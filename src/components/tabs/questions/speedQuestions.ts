
import { Question } from '../types';

export const speedQuestions: Question[] = [
  {
    id: 'speed',
    question: 'Vilken hastighet testade du bilen i?',
    options: [
      { value: '30', label: '30 km/h' },
      { value: '50', label: '50 km/h' },
      { value: '100', label: '100 km/h' },
    ],
  },
];
