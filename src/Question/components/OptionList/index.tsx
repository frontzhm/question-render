/**
import OptionList from '@/components/OptionList';
<OptionList info={info}>
 */
import RichTextShow from '../RichTextShow';
import { IOption, IQuestionInfo } from '../../IQuestionInfo';
import React from 'react';
import { cloze, panduan } from '../../allType';
import './index.less';

const OptionList: React.FC<{ info?: IQuestionInfo }> = ({ info }) => {
  const isHideOptionList =
    !info ||
    info?.structureType === panduan ||
    !info.questionInfo?.options ||
    info?.questionInfo?.options?.length === 0;
  if (isHideOptionList) {
    return null;
  }
  const options: IOption[] = info?.questionInfo?.options || [];
  const Option = ({ item }: { item: IOption }) => (
    <div className="option-item" key={item.optCode}>
      {item.title}.<RichTextShow content={item.htmlCode} />
    </div>
  );
  const isClozeSmallQuestion = info?.parentStructureType === cloze;
  const classNames = 'question-option-list ' + (isClozeSmallQuestion ? 'cloze-option-list' : '')

  return (
    // @ts-ignore
    <div className={classNames}>
      {isClozeSmallQuestion && (
        <div className="cloze-question-index">({info?.questionIndex})</div>
      )}
      {options.map((item: IOption) => (
        <Option item={item} key={item.optCode} />
      ))}
    </div>
  );
};

export default OptionList;
