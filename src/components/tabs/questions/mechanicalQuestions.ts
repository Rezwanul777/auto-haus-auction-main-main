
import { Question } from '../types';

export const mechanicalQuestions: Question[] = [
  {
    id: 'vibrations',
    question: 'Känner du skakningar i bilen?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
    followUp: {
      condition: 'yes',
      id: 'vibrationType',
      question: 'Var känner du skakningarna?',
      options: [
        { value: 'steering', label: 'I ratten' },
        { value: 'seat', label: 'I sätet' },
        { value: 'pedals', label: 'I pedalerna' },
        { value: 'other', label: 'Annat' },
      ],
      allowCustomInput: true,
    },
  },
  {
    id: 'leakage',
    question: 'Finns det läckage?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
    followUp: {
      condition: 'yes',
      id: 'leakageType',
      question: 'Vilken typ av läckage?',
      options: [
        { value: 'oil', label: 'Olja' },
        { value: 'coolant', label: 'Kylarvätska' },
        { value: 'fuel', label: 'Bränsle' },
        { value: 'other', label: 'Annat' },
      ],
      allowCustomInput: true,
    },
  },
  {
    id: 'strangeNoises',
    question: 'Hör du konstiga ljud?',
    options: [
      { value: 'yes', label: 'Ja' },
      { value: 'no', label: 'Nej' },
    ],
    followUp: {
      condition: 'yes',
      id: 'noiseType',
      question: 'Var kommer ljudet ifrån?',
      options: [
        { value: 'engine', label: 'Från motorn' },
        { value: 'suspension', label: 'Från hjulupphängningen' },
        { value: 'brakes', label: 'Från bromsarna' },
        { value: 'other', label: 'Annat' },
      ],
      allowCustomInput: true,
    },
  },
];
