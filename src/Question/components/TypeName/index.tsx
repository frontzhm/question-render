/**
import TypeName from '@/components/TypeName'
<TypeName info={questionInfo}/>
 */
import React from 'react';
import { IQuestionInfo } from '../../IQuestionInfo';

const TypeName: React.FC<{
  info?: IQuestionInfo;
}> = ({ info }) => {
  if (!info) {
    return null;
  }
  const { questionIndex, structureTypeName } = info;
  const style = {
    fontSize: '14px',
    fontWeight: '700',
    color: '#444',
    lineHeight: '16px',
  };
  return (
    <div className="question-type" style={style}>
      {questionIndex}. {structureTypeName || ''}
    </div>
  );
};

export default TypeName;
