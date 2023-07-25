/**
import RichTextShow from '@/components/RichTextShow'
<RichTextShow content={questionInfo.stem}/>
 */
// @ts-nocheck
import React, { CSSProperties, useEffect, useRef } from 'react';
import './index.css';
/**
 * initMathjaxConfig进行配置
 */
function initMathjaxConfig() {
  const MathJax = window.MathJax;
  if (!MathJax || window?.isConfigMathJax) {
    return;
  }

  MathJax.Hub.Config({
    // 'HTML-CSS': { linebreaks: { automatic: true } },
    jax: ['input/TeX', 'output/PreviewHTML'],
    PreviewHTML: {
      scale: 120,
      linebreaks: { automatic: true },
    },
    tex2jax: {
      inlineMath: [
        ['$', '$'],
        ['\\\\(', '\\\\)'],
      ],
      displayMath: [
        ['$$', '$$'],
        ['\\\\[', '\\\\]'],
      ],
      skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code', 'a'],
      ignoreClass: 'htmlTag|el-tabs|ignore-bracket',
    },
    TeX: {
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'extpfeil.js', 'mhchem.js'],
    },
  });

  MathJax.Hub.Register.StartupHook('End Jax', function () {
    var jax = 'PreviewHTML';
    return MathJax.Hub.setRenderer(jax);
  });
  window.isConfigMathJax = true;
}

initMathjaxConfig();
const MathJaxComponent: React.FC<{
  content: string;
  style?: CSSProperties;
}> = ({ content, style }) => {
  const mathRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    console.log(window.MathJax)
    if (window.MathJax) {
      window.MathJax.Hub.Queue([
        'Typeset',
        window.MathJax.Hub,
        mathRef?.current,
      ]);
      // window.MathJax.Hub.Typeset(mathRef?.current);
    }
  }, [content]);
  if (!window.MathJax) {
    return null; // 如果 MathJax 还未加载，不渲染组件
  }
  style = {
    maxWidth: 'calc(100% - 10px)',
    overflowWrap: 'break-word',
    wordBreak: 'break-all',
    overflowX: 'auto',
    ...style,
  };
  return (
    <div
      style={style || {}}
      ref={mathRef}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default MathJaxComponent;
