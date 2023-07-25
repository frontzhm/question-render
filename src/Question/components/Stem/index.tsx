/**
import Stem from '@/components/Stem';
<Stem info={info}>
 */
import RichTextShow from '../RichTextShow';
import React, { CSSProperties } from 'react';
import { IQuestionInfo } from '../../IQuestionInfo';
interface StemProps {
  info?: IQuestionInfo;
  style?: CSSProperties;
}

const Stem: React.FC<StemProps> = ({ info, style }) => {
  if(!info || !info?.questionInfo?.stem){
    return null
  }
  
  const richStyle: CSSProperties = {
    paddingLeft: info?.isSmallQuestion?'10px':'18px',
    width: 'calc(100% - 10px)',
    overflowWrap: 'break-word',
    wordBreak: 'break-word',
    overflow: 'auto',
    overflowY: 'hidden',
    fontSize: '14px',
    color: '#333',
    lineHeight: '1.5',
  };
  const stemStyle = {
    display:'flex',
    ...style
  }

  return (
    <div className="stem" style={stemStyle}>
      {info?.isSmallQuestion ? <div style={{paddingLeft:'18px'}}>({info.questionIndex})</div> : ''}<div style={richStyle}>
        <RichTextShow content={info?.questionInfo?.stem || ''} />
      </div>
    </div>
  );
};

export default Stem;
