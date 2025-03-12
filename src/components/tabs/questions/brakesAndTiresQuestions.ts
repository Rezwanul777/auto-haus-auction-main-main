
import { Question } from '../types';

export const brakesAndTiresQuestions: Question[] = [
  {
    id: 'brakesSameForAll',
    question: 'Bromsar',
    options: [
      { value: 'true', label: 'Samma för alla fyra bromsar' },
    ],
    followUp: {
      condition: 'true',
      id: 'brakesConditionAll',
      question: 'Bromseffektivitet',
      options: [
        { value: '10-30', label: '10-30%' },
        { value: '40-60', label: '40-60%' },
        { value: '70-100', label: '70-100%' },
      ],
    },
    alternateFollowUp: {
      condition: 'false',
      questions: [
        {
          id: 'brakesConditionFront',
          question: 'Bromseffektivitet fram',
          options: [
            { value: '10-30', label: '10-30%' },
            { value: '40-60', label: '40-60%' },
            { value: '70-100', label: '70-100%' },
          ],
        },
        {
          id: 'brakesConditionBack',
          question: 'Bromseffektivitet bak',
          options: [
            { value: '10-30', label: '10-30%' },
            { value: '40-60', label: '40-60%' },
            { value: '70-100', label: '70-100%' },
          ],
        },
      ],
    },
  },
  {
    id: 'tireTreadSameForAll',
    question: 'Däckmönsterdjup (nuvarande däck)',
    options: [
      { value: 'true', label: 'Samma för alla fyra däck' },
    ],
    followUp: {
      condition: 'true',
      id: 'tireTreadAll',
      question: 'Mönsterdjup',
      options: [
        { value: '1-2', label: '1-2 mm' },
        { value: '3-4', label: '3-4 mm' },
        { value: '5-6', label: '5-6 mm' },
        { value: '7-8', label: '7-8 mm' },
        { value: '8+', label: '8+ mm' },
      ],
    },
    alternateFollowUp: {
      condition: 'false',
      questions: [
        {
          id: 'tireTreadFront',
          question: 'Mönsterdjup fram',
          options: [
            { value: '1-2', label: '1-2 mm' },
            { value: '3-4', label: '3-4 mm' },
            { value: '5-6', label: '5-6 mm' },
            { value: '7-8', label: '7-8 mm' },
            { value: '8+', label: '8+ mm' },
          ],
        },
        {
          id: 'tireTreadBack',
          question: 'Mönsterdjup bak',
          options: [
            { value: '1-2', label: '1-2 mm' },
            { value: '3-4', label: '3-4 mm' },
            { value: '5-6', label: '5-6 mm' },
            { value: '7-8', label: '7-8 mm' },
            { value: '8+', label: '8+ mm' },
          ],
        },
      ],
    },
  },
];
