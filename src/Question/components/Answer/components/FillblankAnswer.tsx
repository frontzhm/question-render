import RichTextShow from '../../RichTextShow';
import { IQuestionInfo } from '../../../IQuestionInfo';
import React from 'react';

interface IAnswer {
  blankId: string;
  hasAnswer: number;
  index: number;
  tklen: number;
  answers: string[];
}
/* 
[
  {
    "blankId": "18436968530634700",
    "answers": [
      "1$\\sqrt[{2}] {1}$",
      "111111"
    ],
    "index": 0
  },]
   */
  // https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/fillblank_answer.png
  // 每个空可能有多个答案用|隔开，空与空之间用;隔开
const FillblankAnswer: React.FC<{ info: IQuestionInfo }> = ({ info }) => {
  const answers = info?.questionInfo?.answer?.map((item: IAnswer) =>
    item.answers.join(' | ')
  );
  return <RichTextShow key={info.questionId} content={answers.join('<span>&nbsp;;&nbsp;<span>')} />;
};
export default FillblankAnswer;
