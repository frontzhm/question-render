
import React from 'react';
import {  IQuestionInfo } from '../../../IQuestionInfo';

// [['0','1']]
// https://blog-huahua.oss-cn-beijing.aliyuncs.com/blog/code/completion_answer.png
const CompletionAnswer: React.FC<{info:IQuestionInfo}> = ({ info }) => {
  const answer: string[] = info?.questionInfo?.answer[0] || [];
  return  (
    <div>
      {answer.map((item: string, index: number) => (
        <span style={{ marginRight: '15px' }} key={index}>
          {`(${index + 1}) ${item || '暂无'}`}
        </span>
      ))}
    </div>
  )
    
}
export default CompletionAnswer
