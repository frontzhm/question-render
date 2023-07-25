import { IQuestionInfo } from './IQuestionInfo';
import React from 'react';
import Analysis from './components/Analysis';
import Answer from './components/Answer';
import OptionList from './components/OptionList';
// import OtherInfo from './components/OtherInfo';
import Stem from './components/Stem';
import TypeName from './components/TypeName';
import './index.less';

const Question: React.FC<{
  info: IQuestionInfo;
}> = ({ info }) => {
  if (!info) {
    return null;
  }
  const StemAndOptionList = ({ info }: { info: IQuestionInfo }) => (
    <>
      <Stem info={info} style={{ marginTop: '10px' }} />
      <OptionList info={info} />
    </>
  );
  const smallQuestions = info?.smallQuestions?.map((item) => {
    let parentStructureType = item?.structureType?.split('_')[0];
    let structureType = item?.structureType?.split('_')[1];
    const smallInfo = {
      ...item,
      isSmallQuestion: true,
      structureType,
      parentStructureType,
    };
    return smallInfo;
  });

  return (
    <section className="question-box" style={{ marginBottom: '20px' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TypeName info={info} />
        {/* <OtherInfo info={info} /> */}
      </header>
      <StemAndOptionList info={info} />
      {/* 有小题的话，小题的题干和选项需要额外再渲染，目前主要针对复合题和完形题 */}
      {smallQuestions?.map((item) => (
        <StemAndOptionList key={item.questionId} info={item} />
      ))}
      <Answer info={info} />
      <Analysis info={info} />
    </section>
  );
};

export default Question;
