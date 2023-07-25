import { IQuestionInfo } from '../../IQuestionInfo';
import React from 'react';
import './index.less';
// 新加提醒的话，需要在这里添加
import * as AllTypeAnswer from './allTypeAnswer'

const Answer: React.FC<{ info: IQuestionInfo }> = ({ info }) => {
  if (info.isSmallQuestion) {
    return null;
  }
  // danxuan => DanxuanAnswer
  function formatCpName(structureType: string) {
    return structureType[0].toUpperCase() + structureType.slice(1) + 'Answer';
  }
  // @ts-ignore
  const Component = (AllTypeAnswer as any)[formatCpName(info?.structureType)] || AllTypeAnswer.OtherAnswer;

  return (
    <div className="question-answer-box">
      <div className="title">
        <img
          className="icon"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAcCAYAAAB2+A+pAAAEYklEQVRIS+2WXUwcVRiG3292lwLr0kIXjaTaKAVjFeJtY9DW4I0hUWNjatq0Qau2WtNAJMGGGLnxJ9Vq0mglEG1ritHUljRIf5DUpkm90xhsLFFqEOSisi3Lys4MzJzPnHNmYALLdPGmN87VzsyZ9/l+3vOdJdyii24RF/+Dl6x870UuZRuPQmADCGsBrJaLGUixixEh8EMsgQsNdXQjn/bdtNTnz/NtmRlsB7AZhAJmBQMEIPzfXgQAbMH4huM4+uwm+icsgFDwyQGuNGbxDggVLLTMQpgMRD0XXkD6fpwF3tjyNA0vBV8SfPwcV0Vm8QkTipSWB1gE8t/5770AmGEy45Wtm+m3XPCcYNlPO4PPwCj3Qaq0Pj8YhASxfCcfajl29QIC/Y1iPL+1YXHfc4KPn+JWATT4kfpwJWgQ2PVBWl6RQUiWIZ7JsG1a5AhmFQqDehu30LsLs14E7unhu2xCt1RSel5vdVZSKZCZajiBiPHIw1RVVMgryCAMXOCh7DRmFZjABYKe27aNxoLwReCvTvAOwXhRG9eDSH0J8bkgyIzkZQDYVEfViQSKSxKIX7+B9I8/8+jIGNLKcWoFde7cQUdCwcdO8CEI1CiI6h+DIqB711LptQlMT06y7QsQAY/VobokQQpqWTAn0zD7+vlX2Q5dagHBNLirMbI7FHz0a9FDjKQykmei+jqqisdR6Lrgn37h0T/HkJZ51G+ch5omrHSGzbPfiSvWjKTN7wTAmNi103gqFHzkS/E9g6Jyw3pcPPE4rb+9HKXSLxMpnhq8TKPV6/iOkhKdqWnBSk/BPHPOHbJtuLK8MlPlC1b2c159KboxFPx5tzgpBMp1P3WP7lmDlbU1tCa5GqskPHUdU7EYoitLJJTtTIayfWfdIdOSUECaX5pH+0K6HqnXdkefDAV3feF+CkEPaqi2j/xdWRkprbkfFeVJrPIFLAv2ZAbZb0+7Q6apofMGZJWtBLPA5aY90ZdDwZ2HnRcYRqOQYGEoh/klr1pnlNU+QHdKuGXDTqfZ7D2DK9ms60qA2rtCDQ5lSgWVRRd8+PW9BV2h4I6O7N0cKexW7vDncGAc3ldFZQ/VUoVtwznd7/6eNcmZL6nvCzlk9EeybhHhbG9uLroaCpYvP+5w32Liel9QR6+NoqeIn5Efm75X29Yvj7criNDf0hRrD0K1Qo6rq4vLso57DIyEGhRCl0yOIams9mdgqnmzJdBfQBYfQDqKaGNLC13LCywXHTxo1ziIHABQJLMJnsFBkbk5LuPzx6tyGGaMqNjb2rxiMFdyoefxBx/Zzwg2mhaCFp5Yc06e+5NAKZfctjdbc0OXLLUP2v/h7H5mbAiC5vdM4Iz2jkxpYDKMPkMYnfv2USpXpv6z0IzfO+Accl1Wc1s3cHFvGcgQaIRZXDI4NtDWRn+FAfMCv/2+vR4O7QEbxWzwHy7TcFREhpmnryaT8cz4OJz2dprJB5S3uf6L2HK+uem/zOWILWftv5LPZDvkqzTfAAAAAElFTkSuQmCC"
        />
        答案
      </div>
      <Component info={info} />
    </div>
  );
};

export default Answer;
