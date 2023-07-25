import React from 'react';
import { IOption, IQuestionInfo } from '../../../IQuestionInfo';

/**
 * "answer": "9z4z",
    "options": [
      {
        "optCode": "9z4z",
        "htmlCode": "正确",
        "title": "",
        "flagAnswer": "1"
      },
      {
        "optCode": "ibdv",
        "htmlCode": "错误",
        "title": "",
        "flagAnswer": "0"
      }
      判断题，只展示正确，错误。但是需要从options找到值
 */
// https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/panduan_answer.png

const PanduanAnswer: React.FC<{ info: IQuestionInfo }> = ({ info }) => {
  const answerText = info?.questionInfo?.options.find(
    (item: IOption) => item.optCode === info?.questionInfo?.answer,
  ).htmlCode;
  return <div>{answerText || '暂无'}</div>;
};
export default PanduanAnswer;
