import React from 'react';
import { IQuestionInfo } from '../../../IQuestionInfo';
import RichTextShow from '../../RichTextShow';

// 答案直接展示的题型，单选、多选、主观等 answer:'AB'
const OtherAnswer: React.FC<{ info: IQuestionInfo }> = ({ info }) => {

  return <RichTextShow content={info?.questionInfo?.answer || '暂无'}/>;
};
export default OtherAnswer;
