import html from './browser-adaptor.html';

function bowserSupport(): boolean {
  const userAgent = navigator.userAgent;
  // ie 小于 11 （0, 10] 不包含11
  const ieLessThan11 = userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1;
  // 旧版Edge 浏览器
  const oldEdge = userAgent.indexOf('Edge') > -1;
  return !oldEdge && !ieLessThan11;
}

function browserAdaptor() {
  if (!bowserSupport()) {
    // 插入样式
    require('./browser-adaptor.less');
    // 插入html
    const body = document.getElementsByTagName('body')[0];
    body.innerHTML = html;
  }
}

browserAdaptor();
