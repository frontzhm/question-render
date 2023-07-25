import { IQuestionInfo } from '../../../IQuestionInfo';
import React from 'react';
import * as AllTypeAnswer from '../allTypeAnswer';
// https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/fuhe_answer.png
// 复合题主要是展示小题答案，而小题答案主要用现成的组件，注意加题号
const FuheAnswer: React.FC<{ info: IQuestionInfo }> = ({ info }) => {
  // fuhe_danxuan => DanxuanAnswer
  function formatCpName(structureType: string) {
    const type = structureType.split('_')[1];
    return type[0].toUpperCase() + type.slice(1) + 'Answer';
  }

  const smallQuestions = info.smallQuestions;
  return (
    <div>
      {smallQuestions.map((itemInfo: IQuestionInfo) => {
        // @ts-ignore
        const Component = (AllTypeAnswer as any)[formatCpName(itemInfo?.structureType)] || AllTypeAnswer.OtherAnswer;
        return (
          <div style={{ display: 'flex', marginBottom: '5px' }} key={itemInfo.questionId}>
            <span style={{ marginRight: '5px' }}>({itemInfo.questionIndex})</span>
            <Component info={itemInfo} />
          </div>
        );
      })}
    </div>
  );

};
export default FuheAnswer;
