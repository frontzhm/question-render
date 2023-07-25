import * as React from 'react';
// import RichTextShow from './RichTextShow';
import './index.css';
// 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full'
// 加载脚本，返回promise
// const loadScript = (url: string) => {
//   return new Promise((resolve, reject) => {
//     const script = document.createElement('script');
//     script.src = url;
//     script.onload = resolve;
//     script.onerror = reject;
//     document.body.appendChild(script);
//   });
// };

// const tex = '<p>$\\infty 12x=\\frac {-3\\pm \\sqrt {{2}^{2}-4a=2c}} {2a}$</p>';
// Delete me
export const Thing = () => {
  // const [loaded, setLoaded] = React.useState(false);
  // React.useEffect(() => {
  //   loadScript(
  //     'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-AMS-MML_HTMLorMML-full'
  //   ).then(() => setLoaded(true));
  // }, []);

  // return loaded ? <RichTextShow content={tex}/> : null;
  return <div className="box">111</div>;
};
