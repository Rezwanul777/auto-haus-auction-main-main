
import { Question } from '../types';

export const systemQuestions: Question[] = [
  {
    id: 'gearboxWorking',
    question: 'Växlar bilen som den ska?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
  },
  {
    id: 'acWorking',
    question: 'Fungerar AC?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
  },
  {
    id: 'dashboardWorking',
    question: 'Fungerar instrumentpanelen?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
    followUp: {
      condition: 'no',
      id: 'dashboardIssues',
      question: 'Vilka problem finns?',
      options: [
        { value: 'lights', label: 'Varningslampor' },
        { value: 'display', label: 'Display' },
        { value: 'gauges', label: 'Mätare' },
        { value: 'other', label: 'Annat' },
      ],
      allowCustomInput: true,
    },
  },
];
