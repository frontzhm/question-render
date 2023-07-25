import RichTextShow from '../RichTextShow';
import { IQuestionInfo } from '../../IQuestionInfo';
import React from 'react';
import './index.less';
import './index.css';
// @ts-nocheck
const Analysis: React.FC<{ info: IQuestionInfo }> = ({ info }) => {
  const hasSmallQuestions = info?.smallQuestions?.length > 0;
  // 没有小题时候的显示
  const SimpleAnalysis = ({ info }: { info: IQuestionInfo }) => (
    <RichTextShow content={info?.questionInfo?.analysis || '暂无'} />
  );
  // 小题的话，显示小题的解析，需要加题号
  const SmallQuestionsAnalysis= () => {
    const smallQuestions = info.smallQuestions;
    return <>{smallQuestions.map((itemInfo: IQuestionInfo) => (
      <div
        style={{ display: 'flex', marginBottom: '5px' }}
        key={itemInfo.questionId}
      >
        【小题{itemInfo.questionIndex}】<SimpleAnalysis info={itemInfo} />
      </div>
    ))}</>;
  };

  return (
    <div className="question-analysis-box">
      <div className="title">
        <img
          className="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAD+klEQVRIS8WVfUhddRjHv8/v3HvT0LUm/VOQEIv9EaxgIUErkhgrWgsh3GhXc82WW2lIE2tBMxaxUbM2WGqZOvRO5kgWNZOKIuiVDaRWQf8UvVFErJFMd+89v+cb59x79ar33HuKwPPXefmd5/M83+dNsEyXLBMXocHj77MqarCRFrcIUU2iEoJZCH6B4ktjMLlpg3wfNpCS4LExxi67Ek1CbCPheIap8+aVALOPIvjUVXTX3yO/l3KgKHhigiuSDl4SxRrPkAfJXf5t9pmEL533SMVFAvvrN8vHxeCB4LNnGf35D/QqMtC5sLzbLFA189qH5jtFWBHs3XKffBIEDwSPn2YLgbhn2eZJS2CGwClafOs4cFVxgxB3kriaPl2QOc7ZlJ1p2F5fUVD2guCxSa6SFMYViMx5rIARnE5Onz8aj1f9vTiSkTH3fhNx2qgw9HMiUOrnjVucPYWiLgg++RYbVbHTi9YrpKyKn22tQ6eI5MW/0OTICd5qwYO++FntxUhDY738sBheEHx83L4sNDf7BBJiRJOCzdvr5EKpah0atfuhUptLuZKjO+LO0XDgN/RtUlbmWofAVEO9tJaCet8TCVZfIhNZnz3Jv2pukN2hwCMn9D0C5bkeFXD4wa1OXxiwd+bVIfdNgamCX2Zm+uEmc3co8NCovgNI5VzjkqNNBeQKcqRv0E0ITLWqQgSzjzwU2RAKPJCwr5CyNiOX57Uz1dwQTurBQZal1E4oEcum6sLunZFNocCvDdtdorItAzX+P2KkpblRvi4ld29/+naX8vx8R/BMW0u0PRS479jMtcKy414vqQf2RhTk3JrrTGttrbhB8O4xlsf+0h5SV3stle2onrZdEb/Y8q/AydX7uj1Acn3usD+PRaYqy8zT8bgsGSCexNNJtwsq69WrSiOgZRpupK69fWkbBoIHBnjVjLXDJCr8WZydRgL+SZhJq+ZD457/zXFWXeFq6jYY5wFV+i3o59bTSDjU/lisv5BCRbdTT3+qxlpzQDVTKLntlHNifjN4ss5vCaqAot+sWxt9NCg1JffxkR7WWLVdUK7Ilz1zL74S+evSfytyjmlnT0eHXAyqh6Lgw728XtN2tU3OnDGx8sdJ3AEiM6wXrsGc/RRVjtWscxLFijDjcpHrxcPpbipqRPCR2EhvNAomNb1RFTcJzDUky6kyDfBHFf2iIhZ7t61taeH9qxwfOpS60Yr4wz2bPm9Xnex8InakVC+H+R4Y8cFu26JW4wvbCc881RH9IIzhUmcCwc+9cOleQ6fTn0B+2PLd3k6nWUTyslvKfPD3QPC+fYzEyrRVqXcB8qtrUl3PPnn5T/8dtfDPku30f4EW21k28D+rPeAsrW9nVwAAAABJRU5ErkJggg=="
        ></img>
        解析
      </div>
      {hasSmallQuestions ? (
        <SmallQuestionsAnalysis />
      ) : (
        <SimpleAnalysis info={info} />
      )}
    </div>
  );
};

export default Analysis;
