import * as React from 'react';
import Question from './Question';
import { fillblankInfo } from './Question/MockQuestionInfo';
// const loadScript = (url: string) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = url;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.body.appendChild(script);
//   });
// };
// loadScript('https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full')

// Delete me
export const Thing = () => {
  return <Question info={fillblankInfo} />;
};
