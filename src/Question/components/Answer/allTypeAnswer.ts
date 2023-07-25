
// 单选 多选 判断 的 答案显示逻辑一致，直接用otherAnswer。
// 如果显示的答案需要处理，则需要新建题型。
// export { default as DanxuanAnswer } from './components/DanxuanAnswer';
// export { default as DuoxuanAnswer } from './components/DuoxuanAnswer';
// export { default as ZhuguanAnswer } from './components/ZhuguanAnswer';
export { default as PanduanAnswer } from './components/PanduanAnswer';
export { default as FillblankAnswer } from './components/FillblankAnswer';
export { default as CompletionAnswer } from './components/CompletionAnswer';
export { default as ClozeAnswer } from './components/ClozeAnswer';
export { default as FuheAnswer } from './components/FuheAnswer';

export { default as OtherAnswer } from './components/OtherAnswer';


// danxuan, duoxuan, panduan, zhuguan, completion, fillblank, cloze, fuhe
// 单选题, 多选题, 判断题, 主观题, 填空题, 补全题, 完形填空, 复合题, 