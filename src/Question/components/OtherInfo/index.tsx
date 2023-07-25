/**
import OtherInfo from '@/components/OtherInfo'
<OtherInfo info={questionInfo}/>
<OtherInfo questionIndex={1} structureTypeName='单选题'/>
 */
import React from 'react';
import {IQuestionInfo} from '../../IQuestionInfo'
// @ts-ignore
import { Rate } from 'antd';

const OtherInfo: React.FC<{info?: IQuestionInfo}> = ({
  info
}) => {
  
  if(!info || info?.isSmallQuestion) return null
  const styleLeft = {marginLeft:'15px'};
  return (
    <div style={{color: '#8e8e8e',fontSize: '12px'}}>
      <span>难度：<Rate style={{fontSize:'14px'}} disabled defaultValue={info?.difficulty || 0}  /></span>
      <span style={styleLeft}>作答次数：{info?.answeredCount || '-'}</span>
      <span style={styleLeft}>作答正确率：{!info?.percentCorrect?'-': `${info?.percentCorrect}%`}</span>
    </div>
  );
};

export default OtherInfo;
