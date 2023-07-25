import { IQuestionInfo } from '../../../IQuestionInfo';
import React from 'react';
// https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/cloze_answer.png

const ClozeAnswer: React.FC<{ info: IQuestionInfo }> = ({ info }) => {
  return (
    <div>
      {info.smallQuestions?.map((itemInfo: IQuestionInfo) => (
        <span key={itemInfo.questionId} style={{ marginRight: '15px' }}>
          ({itemInfo.questionIndex}) {itemInfo?.questionInfo?.answer || '暂无'}
        </span>
      ))}
    </div>
  );
};
export default ClozeAnswer;
