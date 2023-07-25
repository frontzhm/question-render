import * as React from 'react';

// Question重新命名为QuestionInner
import Question from './Question';

import { IQuestionInfo } from './Question/IQuestionInfo';
export const QuestionRender = ({ info }: { info: IQuestionInfo }) => {
  return <Question info={info} />;
};
