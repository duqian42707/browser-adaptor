export function readStyle(): string {
  return '.browser-adaptor * {\n' +
    '    margin: 0;\n' +
    '    padding: 0;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor {\n' +
    '    box-sizing: border-box;\n' +
    '    max-width: 1200px;\n' +
    '    padding: 0 20px;\n' +
    '    margin: 0 auto;\n' +
    '    background: #fff;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .title-tip {\n' +
    '    font-size: 16px;\n' +
    '    text-align: left;\n' +
    '    padding: 16px 24px;\n' +
    '    line-height: 30px;\n' +
    '    border: 1px solid #1990fc;\n' +
    '    border-radius: 5px;\n' +
    '    background: #e6f7ff;\n' +
    '    color: #0086ff;\n' +
    '    margin: 56px auto 0;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .title-tip a {\n' +
    '    font-weight: bold;\n' +
    '    color: #2196ff;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .title-tip a:hover, .title-tip a:focus, .title-tip a:active {\n' +
    '    color: #0673d6;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-list {\n' +
    '    margin: 40px auto;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-list ul {\n' +
    '    display: flex;\n' +
    '    flex-wrap: wrap;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-list ul li {\n' +
    '    list-style: none;\n' +
    '    width: 232px;\n' +
    '    height: 85px;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-list ul li a {\n' +
    '    display: block;\n' +
    '    height: 40px;\n' +
    '    line-height: 40px;\n' +
    '    overflow: hidden;\n' +
    '    width: 86%;\n' +
    '    margin: 6px auto;\n' +
    '    padding: 15px 5%;\n' +
    '    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .1);\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-list ul li:hover a {\n' +
    '    box-shadow: 0 0 5px 1px rgba(0, 0, 0, .18);\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-download .browser-logo {\n' +
    '    width: 40px;\n' +
    '    height: 40px;\n' +
    '    float: left;\n' +
    '}\n' +
    '\n' +
    '.browser-adaptor .browser-adaptor-list ul li span {\n' +
    '    float: left;\n' +
    '    margin: 0 0 0 10px;\n' +
    '    color: #444;\n' +
    '    font-size: 14px;\n' +
    '}\n';

}

export function readHtml(): string {
  return '<div class="browser-adaptor">\n' +
    '  <div class="browser-adaptor-download">\n' +
    '    <div class="title-tip">\n' +
    '      您的浏览器版本过低，无法浏览网站内容。建议您使用当前主流浏览器，以获得最佳的浏览体验。\n' +
    '    </div>\n' +
    '    <div class="browser-adaptor-list">\n' +
    '      <ul>\n' +
    '        <li>\n' +
    '          <a href="https://www.google.cn/intl/zh-CN/chrome/" target="_blank">\n' +
    '            <svg class="browser-logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"  width="200" height="200">\n' +
    '              <defs>\n' +
    '                <style type="text/css"/>\n' +
    '              </defs>\n' +
    '              <path d="M123.648 178.346667C361.642667-98.602667 802.986667-43.946667 967.936 279.68h-396.501333c-71.424 0-117.546667-1.621333-167.509334 24.661333-58.709333 30.933333-102.997333 88.234667-118.485333 155.52L123.648 178.389333z"\n' +
    '                    fill="#EA4335"/>\n' +
    '              <path d="M341.674667 512c0 93.866667 76.330667 170.24 170.154666 170.24 93.866667 0 170.154667-76.373333 170.154667-170.24s-76.330667-170.24-170.154667-170.24c-93.866667 0-170.154667 76.373333-170.154666 170.24z"\n' +
    '                    fill="#4285F4"/>\n' +
    '              <path d="M577.877333 734.848c-95.530667 28.373333-207.274667-3.114667-268.501333-108.8-46.762667-80.64-170.24-295.765333-226.346667-393.557333-196.565333 301.226667-27.136 711.808 329.685334 781.866666l165.12-279.509333z"\n' +
    '                    fill="#34A853"/>\n' +
    '              <path d="M669.866667 341.76a233.130667 233.130667 0 0 1 43.008 286.634667c-40.576 69.973333-170.154667 288.682667-232.96 394.581333 367.658667 22.656 635.733333-337.664 514.645333-681.258667H669.866667z"\n' +
    '                    fill="#FBBC05"/>\n' +
    '            </svg>\n' +
    '            <span>Google Chrome</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a href="https://www.mozilla.org/zh-CN/firefox/new/" target="_blank">\n' +
    '            <svg class="browser-logo"\n' +
    '                    xmlns:dc="http://purl.org/dc/elements/1.1/"\n' +
    '                    xmlns:cc="http://creativecommons.org/ns#"\n' +
    '                    xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"\n' +
    '                    xmlns:svg="http://www.w3.org/2000/svg"\n' +
    '                    xmlns="http://www.w3.org/2000/svg"\n' +
    '                    height="81.96698"\n' +
    '                    width="87.418564"\n' +
    '                    id="svg1008"\n' +
    '                    version="1.1"\n' +
    '                    viewBox="0 0 87.418564 81.96698">\n' +
    '              <metadata\n' +
    '                      id="metadata1012">\n' +
    '                <rdf:RDF>\n' +
    '                  <cc:Work\n' +
    '                          rdf:about="">\n' +
    '                    <dc:format>image/svg+xml</dc:format>\n' +
    '                    <dc:type\n' +
    '                            rdf:resource="http://purl.org/dc/dcmitype/StillImage" />\n' +
    '                    <dc:title></dc:title>\n' +
    '                  </cc:Work>\n' +
    '                </rdf:RDF>\n' +
    '              </metadata>\n' +
    '              <defs\n' +
    '                      id="defs978">\n' +
    '                <linearGradient\n' +
    '                        gradientTransform="translate(3.7,-0.0040855)"\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        y2="74.468002"\n' +
    '                        x2="6.447"\n' +
    '                        y1="12.393"\n' +
    '                        x1="70.786003"\n' +
    '                        id="a">\n' +
    '                  <stop\n' +
    '                          id="stop834"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".048" />\n' +
    '                  <stop\n' +
    '                          id="stop836"\n' +
    '                          stop-color="#ffe847"\n' +
    '                          offset=".111" />\n' +
    '                  <stop\n' +
    '                          id="stop838"\n' +
    '                          stop-color="#ffc830"\n' +
    '                          offset=".225" />\n' +
    '                  <stop\n' +
    '                          id="stop840"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".368" />\n' +
    '                  <stop\n' +
    '                          id="stop842"\n' +
    '                          stop-color="#ff8b16"\n' +
    '                          offset=".401" />\n' +
    '                  <stop\n' +
    '                          id="stop844"\n' +
    '                          stop-color="#ff672a"\n' +
    '                          offset=".462" />\n' +
    '                  <stop\n' +
    '                          id="stop846"\n' +
    '                          stop-color="#ff3647"\n' +
    '                          offset=".534" />\n' +
    '                  <stop\n' +
    '                          id="stop848"\n' +
    '                          stop-color="#e31587"\n' +
    '                          offset=".705" />\n' +
    '                </linearGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="80.796997"\n' +
    '                        cy="-8515.1211"\n' +
    '                        cx="-7907.187"\n' +
    '                        id="b">\n' +
    '                  <stop\n' +
    '                          id="stop851"\n' +
    '                          stop-color="#ffbd4f"\n' +
    '                          offset=".129" />\n' +
    '                  <stop\n' +
    '                          id="stop853"\n' +
    '                          stop-color="#ffac31"\n' +
    '                          offset=".186" />\n' +
    '                  <stop\n' +
    '                          id="stop855"\n' +
    '                          stop-color="#ff9d17"\n' +
    '                          offset=".247" />\n' +
    '                  <stop\n' +
    '                          id="stop857"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".283" />\n' +
    '                  <stop\n' +
    '                          id="stop859"\n' +
    '                          stop-color="#ff563b"\n' +
    '                          offset=".403" />\n' +
    '                  <stop\n' +
    '                          id="stop861"\n' +
    '                          stop-color="#ff3750"\n' +
    '                          offset=".467" />\n' +
    '                  <stop\n' +
    '                          id="stop863"\n' +
    '                          stop-color="#f5156c"\n' +
    '                          offset=".71" />\n' +
    '                  <stop\n' +
    '                          id="stop865"\n' +
    '                          stop-color="#eb0878"\n' +
    '                          offset=".782" />\n' +
    '                  <stop\n' +
    '                          id="stop867"\n' +
    '                          stop-color="#e50080"\n' +
    '                          offset=".86" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="80.796997"\n' +
    '                        cy="-8482.0889"\n' +
    '                        cx="-7936.7109"\n' +
    '                        id="c">\n' +
    '                  <stop\n' +
    '                          id="stop870"\n' +
    '                          stop-color="#960e18"\n' +
    '                          offset=".3" />\n' +
    '                  <stop\n' +
    '                          id="stop872"\n' +
    '                          stop-opacity=".74"\n' +
    '                          stop-color="#b11927"\n' +
    '                          offset=".351" />\n' +
    '                  <stop\n' +
    '                          id="stop874"\n' +
    '                          stop-opacity=".343"\n' +
    '                          stop-color="#db293d"\n' +
    '                          offset=".435" />\n' +
    '                  <stop\n' +
    '                          id="stop876"\n' +
    '                          stop-opacity=".094"\n' +
    '                          stop-color="#f5334b"\n' +
    '                          offset=".497" />\n' +
    '                  <stop\n' +
    '                          id="stop878"\n' +
    '                          stop-opacity="0"\n' +
    '                          stop-color="#ff3750"\n' +
    '                          offset=".53" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="58.534"\n' +
    '                        cy="-8533.457"\n' +
    '                        cx="-7926.9702"\n' +
    '                        id="d">\n' +
    '                  <stop\n' +
    '                          id="stop881"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".132" />\n' +
    '                  <stop\n' +
    '                          id="stop883"\n' +
    '                          stop-color="#ffdc3e"\n' +
    '                          offset=".252" />\n' +
    '                  <stop\n' +
    '                          id="stop885"\n' +
    '                          stop-color="#ff9d12"\n' +
    '                          offset=".506" />\n' +
    '                  <stop\n' +
    '                          id="stop887"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".526" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="38.471001"\n' +
    '                        cy="-8460.9844"\n' +
    '                        cx="-7945.6479"\n' +
    '                        id="e">\n' +
    '                  <stop\n' +
    '                          id="stop890"\n' +
    '                          stop-color="#3a8ee6"\n' +
    '                          offset=".353" />\n' +
    '                  <stop\n' +
    '                          id="stop892"\n' +
    '                          stop-color="#5c79f0"\n' +
    '                          offset=".472" />\n' +
    '                  <stop\n' +
    '                          id="stop894"\n' +
    '                          stop-color="#9059ff"\n' +
    '                          offset=".669" />\n' +
    '                  <stop\n' +
    '                          id="stop896"\n' +
    '                          stop-color="#c139e6"\n' +
    '                          offset="1" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="matrix(0.972,-0.235,0.275,1.138,10095.002,7833.7939)"\n' +
    '                        r="20.396999"\n' +
    '                        cy="-8491.5459"\n' +
    '                        cx="-7935.6201"\n' +
    '                        id="f">\n' +
    '                  <stop\n' +
    '                          id="stop899"\n' +
    '                          stop-opacity="0"\n' +
    '                          stop-color="#9059ff"\n' +
    '                          offset=".206" />\n' +
    '                  <stop\n' +
    '                          id="stop901"\n' +
    '                          stop-opacity=".064"\n' +
    '                          stop-color="#8c4ff3"\n' +
    '                          offset=".278" />\n' +
    '                  <stop\n' +
    '                          id="stop903"\n' +
    '                          stop-opacity=".45"\n' +
    '                          stop-color="#7716a8"\n' +
    '                          offset=".747" />\n' +
    '                  <stop\n' +
    '                          id="stop905"\n' +
    '                          stop-opacity=".6"\n' +
    '                          stop-color="#6e008b"\n' +
    '                          offset=".975" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="27.676001"\n' +
    '                        cy="-8518.4268"\n' +
    '                        cx="-7937.731"\n' +
    '                        id="g">\n' +
    '                  <stop\n' +
    '                          id="stop908"\n' +
    '                          stop-color="#ffe226"\n' +
    '                          offset="0" />\n' +
    '                  <stop\n' +
    '                          id="stop910"\n' +
    '                          stop-color="#ffdb27"\n' +
    '                          offset=".121" />\n' +
    '                  <stop\n' +
    '                          id="stop912"\n' +
    '                          stop-color="#ffc82a"\n' +
    '                          offset=".295" />\n' +
    '                  <stop\n' +
    '                          id="stop914"\n' +
    '                          stop-color="#ffa930"\n' +
    '                          offset=".502" />\n' +
    '                  <stop\n' +
    '                          id="stop916"\n' +
    '                          stop-color="#ff7e37"\n' +
    '                          offset=".732" />\n' +
    '                  <stop\n' +
    '                          id="stop918"\n' +
    '                          stop-color="#ff7139"\n' +
    '                          offset=".792" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="118.081"\n' +
    '                        cy="-8535.9814"\n' +
    '                        cx="-7915.9771"\n' +
    '                        id="h">\n' +
    '                  <stop\n' +
    '                          id="stop921"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".113" />\n' +
    '                  <stop\n' +
    '                          id="stop923"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".456" />\n' +
    '                  <stop\n' +
    '                          id="stop925"\n' +
    '                          stop-color="#ff5634"\n' +
    '                          offset=".622" />\n' +
    '                  <stop\n' +
    '                          id="stop927"\n' +
    '                          stop-color="#ff3647"\n' +
    '                          offset=".716" />\n' +
    '                  <stop\n' +
    '                          id="stop929"\n' +
    '                          stop-color="#e31587"\n' +
    '                          offset=".904" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="matrix(0.105,0.995,-0.653,0.069,-4680.304,8470.1869)"\n' +
    '                        r="86.499001"\n' +
    '                        cy="-8522.8594"\n' +
    '                        cx="-7927.165"\n' +
    '                        id="i">\n' +
    '                  <stop\n' +
    '                          id="stop932"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset="0" />\n' +
    '                  <stop\n' +
    '                          id="stop934"\n' +
    '                          stop-color="#ffe847"\n' +
    '                          offset=".06" />\n' +
    '                  <stop\n' +
    '                          id="stop936"\n' +
    '                          stop-color="#ffc830"\n' +
    '                          offset=".168" />\n' +
    '                  <stop\n' +
    '                          id="stop938"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".304" />\n' +
    '                  <stop\n' +
    '                          id="stop940"\n' +
    '                          stop-color="#ff8b16"\n' +
    '                          offset=".356" />\n' +
    '                  <stop\n' +
    '                          id="stop942"\n' +
    '                          stop-color="#ff672a"\n' +
    '                          offset=".455" />\n' +
    '                  <stop\n' +
    '                          id="stop944"\n' +
    '                          stop-color="#ff3647"\n' +
    '                          offset=".57" />\n' +
    '                  <stop\n' +
    '                          id="stop946"\n' +
    '                          stop-color="#e31587"\n' +
    '                          offset=".737" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="73.720001"\n' +
    '                        cy="-8508.1758"\n' +
    '                        cx="-7938.3828"\n' +
    '                        id="j">\n' +
    '                  <stop\n' +
    '                          id="stop949"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".137" />\n' +
    '                  <stop\n' +
    '                          id="stop951"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".48" />\n' +
    '                  <stop\n' +
    '                          id="stop953"\n' +
    '                          stop-color="#ff5634"\n' +
    '                          offset=".592" />\n' +
    '                  <stop\n' +
    '                          id="stop955"\n' +
    '                          stop-color="#ff3647"\n' +
    '                          offset=".655" />\n' +
    '                  <stop\n' +
    '                          id="stop957"\n' +
    '                          stop-color="#e31587"\n' +
    '                          offset=".904" />\n' +
    '                </radialGradient>\n' +
    '                <radialGradient\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        gradientTransform="translate(7978.7,8523.9959)"\n' +
    '                        r="80.685997"\n' +
    '                        cy="-8503.8613"\n' +
    '                        cx="-7918.9229"\n' +
    '                        id="k">\n' +
    '                  <stop\n' +
    '                          id="stop960"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".094" />\n' +
    '                  <stop\n' +
    '                          id="stop962"\n' +
    '                          stop-color="#ffe141"\n' +
    '                          offset=".231" />\n' +
    '                  <stop\n' +
    '                          id="stop964"\n' +
    '                          stop-color="#ffaf1e"\n' +
    '                          offset=".509" />\n' +
    '                  <stop\n' +
    '                          id="stop966"\n' +
    '                          stop-color="#ff980e"\n' +
    '                          offset=".626" />\n' +
    '                </radialGradient>\n' +
    '                <linearGradient\n' +
    '                        gradientTransform="translate(3.7,-0.0040855)"\n' +
    '                        gradientUnits="userSpaceOnUse"\n' +
    '                        y2="66.806"\n' +
    '                        x2="15.267"\n' +
    '                        y1="12.061"\n' +
    '                        x1="70.013"\n' +
    '                        id="l">\n' +
    '                  <stop\n' +
    '                          id="stop969"\n' +
    '                          stop-opacity=".8"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".167" />\n' +
    '                  <stop\n' +
    '                          id="stop971"\n' +
    '                          stop-opacity=".634"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".266" />\n' +
    '                  <stop\n' +
    '                          id="stop973"\n' +
    '                          stop-opacity=".217"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".489" />\n' +
    '                  <stop\n' +
    '                          id="stop975"\n' +
    '                          stop-opacity="0"\n' +
    '                          stop-color="#fff44f"\n' +
    '                          offset=".6" />\n' +
    '                </linearGradient>\n' +
    '              </defs>\n' +
    '              <path\n' +
    '                      style="fill:url(#a)"\n' +
    '                      id="path980"\n' +
    '                      d="m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 l 0.007,0.065 c -4.382,-10.925 -11.813,-15.33 -17.882,-24.9220005 -0.307,-0.485 -0.614,-0.971 -0.913,-1.484 -0.171,-0.293 -0.308,-0.557 -0.427,-0.8 a 7.053,7.053 0 0 1 -0.578,-1.535 0.1,0.1 0 0 0 -0.088,-0.1 0.138,0.138 0 0 0 -0.073,0 c -0.005,0 -0.013,0.009 -0.019,0.011 -0.006,0.002 -0.019,0.011 -0.028,0.015 l 0.015,-0.026 c -9.735,5.7 -13.038,16.2520005 -13.342,21.5300005 a 19.387,19.387 0 0 0 -10.666,4.111 11.587,11.587 0 0 0 -1,-0.758 17.968,17.968 0 0 1 -0.109,-9.473 28.705,28.705 0 0 0 -9.329,7.21 h -0.018 c -1.536,-1.947 -1.428,-8.367 -1.34,-9.708 a 6.928,6.928 0 0 0 -1.294,0.687 28.225,28.225 0 0 0 -3.788,3.245 33.845,33.845 0 0 0 -3.623,4.347 v 0.006 -0.007 a 32.733,32.733 0 0 0 -5.2,11.743 l -0.052,0.256 c -0.073,0.341 -0.336,2.049 -0.381,2.42 0,0.029 -0.006,0.056 -0.009,0.085 A 36.937,36.937 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z m -44.67,30.338 c 0.181,0.087 0.351,0.181 0.537,0.264 l 0.027,0.017 q -0.282,-0.135 -0.564,-0.281 z m 8.878,-23.376 z m 31.952,-4.934 v -0.037 l 0.007,0.041 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#b)"\n' +
    '                      id="path982"\n' +
    '                      d="m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 v 0.037 l 0.007,0.041 a 35.1,35.1 0 0 1 -1.206,26.158 c -4.442,9.531 -15.194,19.3 -32.024,18.825 -18.185,-0.515 -34.2,-14.009 -37.194,-31.683 -0.545,-2.787 0,-4.2 0.274,-6.465 A 28.876,28.876 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#c)"\n' +
    '                      id="path984"\n' +
    '                      d="m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 v 0.037 l 0.007,0.041 a 35.1,35.1 0 0 1 -1.206,26.158 c -4.442,9.531 -15.194,19.3 -32.024,18.825 -18.185,-0.515 -34.2,-14.009 -37.194,-31.683 -0.545,-2.787 0,-4.2 0.274,-6.465 A 28.876,28.876 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#d)"\n' +
    '                      id="path986"\n' +
    '                      d="m 60.782,31.382915 c 0.084,0.059 0.162,0.118 0.241,0.177 a 21.1,21.1 0 0 0 -3.6,-4.695 C 45.377,14.816915 54.266,0.7419145 55.765,0.0269145 l 0.015,-0.022 c -9.735,5.7 -13.038,16.2520005 -13.342,21.5300005 0.452,-0.031 0.9,-0.069 1.362,-0.069 a 19.56,19.56 0 0 1 16.982,9.917 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#e)"\n' +
    '                      id="path988"\n' +
    '                      d="m 43.825,33.788915 c -0.064,0.964 -3.47,4.289 -4.661,4.289 -11.021,0 -12.81,6.667 -12.81,6.667 0.488,5.614 4.4,10.238 9.129,12.684 0.216,0.112 0.435,0.213 0.654,0.312 q 0.569,0.252 1.138,0.466 a 17.235,17.235 0 0 0 5.043,0.973 c 19.317,0.906 23.059,-23.1 9.119,-30.066 a 13.38,13.38 0 0 1 9.345,2.269 19.56,19.56 0 0 0 -16.982,-9.917 c -0.46,0 -0.91,0.038 -1.362,0.069 a 19.387,19.387 0 0 0 -10.666,4.111 c 0.591,0.5 1.258,1.168 2.663,2.553 2.63,2.591 9.375,5.275 9.39,5.59 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#f)"\n' +
    '                      id="path990"\n' +
    '                      d="m 43.825,33.788915 c -0.064,0.964 -3.47,4.289 -4.661,4.289 -11.021,0 -12.81,6.667 -12.81,6.667 0.488,5.614 4.4,10.238 9.129,12.684 0.216,0.112 0.435,0.213 0.654,0.312 q 0.569,0.252 1.138,0.466 a 17.235,17.235 0 0 0 5.043,0.973 c 19.317,0.906 23.059,-23.1 9.119,-30.066 a 13.38,13.38 0 0 1 9.345,2.269 19.56,19.56 0 0 0 -16.982,-9.917 c -0.46,0 -0.91,0.038 -1.362,0.069 a 19.387,19.387 0 0 0 -10.666,4.111 c 0.591,0.5 1.258,1.168 2.663,2.553 2.63,2.591 9.375,5.275 9.39,5.59 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#g)"\n' +
    '                      id="path992"\n' +
    '                      d="m 29.965,24.356915 c 0.314,0.2 0.573,0.374 0.8,0.531 a 17.968,17.968 0 0 1 -0.109,-9.473 28.705,28.705 0 0 0 -9.329,7.21 c 0.189,-0.005 5.811,-0.106 8.638,1.732 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#h)"\n' +
    '                      id="path994"\n' +
    '                      d="m 5.354,42.158915 c 2.991,17.674 19.009,31.168 37.194,31.683 16.83,0.476 27.582,-9.294 32.024,-18.825 a 35.1,35.1 0 0 0 1.206,-26.158 v -0.037 c 0,-0.029 -0.006,-0.046 0,-0.037 l 0.007,0.065 c 1.375,8.977 -3.191,17.674 -10.329,23.555 l -0.022,0.05 c -13.908,11.327 -27.218,6.834 -29.912,5 q -0.282,-0.135 -0.564,-0.281 c -8.109,-3.876 -11.459,-11.264 -10.741,-17.6 a 9.953,9.953 0 0 1 -9.181,-5.775 14.618,14.618 0 0 1 14.249,-0.572 19.3,19.3 0 0 0 14.552,0.572 c -0.015,-0.315 -6.76,-3 -9.39,-5.59 -1.405,-1.385 -2.072,-2.052 -2.663,-2.553 a 11.587,11.587 0 0 0 -1,-0.758 c -0.23,-0.157 -0.489,-0.327 -0.8,-0.531 -2.827,-1.838 -8.449,-1.737 -8.635,-1.732 h -0.018 c -1.536,-1.947 -1.428,-8.367 -1.34,-9.708 a 6.928,6.928 0 0 0 -1.294,0.687 28.225,28.225 0 0 0 -3.788,3.245 33.845,33.845 0 0 0 -3.638,4.337 v 0.006 -0.007 a 32.733,32.733 0 0 0 -5.2,11.743 c -0.019,0.079 -1.396,6.099 -0.717,9.221 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#i)"\n' +
    '                      id="path996"\n' +
    '                      d="m 57.425,26.864915 a 21.1,21.1 0 0 1 3.6,4.7 c 0.213,0.161 0.412,0.321 0.581,0.476 8.787,8.1 4.183,19.55 3.84,20.365 7.138,-5.881 11.7,-14.578 10.329,-23.555 -4.384,-10.93 -11.815,-15.335 -17.884,-24.9270005 -0.307,-0.485 -0.614,-0.971 -0.913,-1.484 -0.171,-0.293 -0.308,-0.557 -0.427,-0.8 a 7.053,7.053 0 0 1 -0.578,-1.535 0.1,0.1 0 0 0 -0.088,-0.1 0.138,0.138 0 0 0 -0.073,0 c -0.005,0 -0.013,0.009 -0.019,0.011 -0.006,0.002 -0.019,0.011 -0.028,0.015 -1.499,0.711 -10.388,14.7860005 1.66,26.8340005 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#j)"\n' +
    '                      id="path998"\n' +
    '                      d="m 61.6,32.035915 c -0.169,-0.155 -0.368,-0.315 -0.581,-0.476 -0.079,-0.059 -0.157,-0.118 -0.241,-0.177 a 13.38,13.38 0 0 0 -9.345,-2.269 c 13.94,6.97 10.2,30.972 -9.119,30.066 a 17.235,17.235 0 0 1 -5.043,-0.973 q -0.569,-0.213 -1.138,-0.466 c -0.219,-0.1 -0.438,-0.2 -0.654,-0.312 l 0.027,0.017 c 2.694,1.839 16,6.332 29.912,-5 l 0.022,-0.05 c 0.347,-0.81 4.951,-12.263 -3.84,-20.36 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#k)"\n' +
    '                      id="path1000"\n' +
    '                      d="m 26.354,44.744915 c 0,0 1.789,-6.667 12.81,-6.667 1.191,0 4.6,-3.325 4.661,-4.289 a 19.3,19.3 0 0 1 -14.552,-0.572 14.618,14.618 0 0 0 -14.249,0.572 9.953,9.953 0 0 0 9.181,5.775 c -0.718,6.337 2.632,13.725 10.741,17.6 0.181,0.087 0.351,0.181 0.537,0.264 -4.733,-2.445 -8.641,-7.069 -9.129,-12.683 z" />\n' +
    '              <path\n' +
    '                      style="fill:url(#l)"\n' +
    '                      id="path1002"\n' +
    '                      d="m 79.616,26.826915 c -1.684,-4.052 -5.1,-8.427 -7.775,-9.81 a 40.266,40.266 0 0 1 3.925,11.764 l 0.007,0.065 c -4.382,-10.925 -11.813,-15.33 -17.882,-24.9220005 -0.307,-0.485 -0.614,-0.971 -0.913,-1.484 -0.171,-0.293 -0.308,-0.557 -0.427,-0.8 a 7.053,7.053 0 0 1 -0.578,-1.535 0.1,0.1 0 0 0 -0.088,-0.1 0.138,0.138 0 0 0 -0.073,0 c -0.005,0 -0.013,0.009 -0.019,0.011 -0.006,0.002 -0.019,0.011 -0.028,0.015 l 0.015,-0.026 c -9.735,5.7 -13.038,16.2520005 -13.342,21.5300005 0.452,-0.031 0.9,-0.069 1.362,-0.069 a 19.56,19.56 0 0 1 16.982,9.917 13.38,13.38 0 0 0 -9.345,-2.269 c 13.94,6.97 10.2,30.972 -9.119,30.066 a 17.235,17.235 0 0 1 -5.043,-0.973 q -0.569,-0.213 -1.138,-0.466 c -0.219,-0.1 -0.438,-0.2 -0.654,-0.312 l 0.027,0.017 q -0.282,-0.135 -0.564,-0.281 c 0.181,0.087 0.351,0.181 0.537,0.264 -4.733,-2.446 -8.641,-7.07 -9.129,-12.684 0,0 1.789,-6.667 12.81,-6.667 1.191,0 4.6,-3.325 4.661,-4.289 -0.015,-0.315 -6.76,-3 -9.39,-5.59 -1.405,-1.385 -2.072,-2.052 -2.663,-2.553 a 11.587,11.587 0 0 0 -1,-0.758 17.968,17.968 0 0 1 -0.109,-9.473 28.705,28.705 0 0 0 -9.329,7.21 h -0.018 c -1.536,-1.947 -1.428,-8.367 -1.34,-9.708 a 6.928,6.928 0 0 0 -1.294,0.687 28.225,28.225 0 0 0 -3.788,3.245 33.845,33.845 0 0 0 -3.623,4.347 v 0.006 -0.007 a 32.733,32.733 0 0 0 -5.2,11.743 l -0.052,0.256 c -0.073,0.341 -0.4,2.073 -0.447,2.445 0,0.028 0,-0.029 0,0 A 45.094,45.094 0 0 0 5,41.041915 v 0.2 a 38.759,38.759 0 0 0 76.954,6.554 c 0.065,-0.5 0.118,-0.995 0.176,-1.5 a 39.857,39.857 0 0 0 -2.514,-19.469 z m -3.845,1.991 0.007,0.041 z" />\n' +
    '            </svg>\n' +
    '            <span>火狐浏览器</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a href="https://www.microsoft.com/zh-cn/edge/" target="_blank">\n' +
    '            <svg class="browser-logo" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"\n' +
    '                 width="200" height="200">\n' +
    '              <defs>\n' +
    '                <style type="text/css"/>\n' +
    '              </defs>\n' +
    '              <path d="M923.69886 761.758375a328.212997 328.212997 0 0 1-41.986312 18.793873 408.90669 408.90669 0 0 1-143.553199 25.991526c-189.138338 0-353.884628-129.957632-353.884629-297.10314a125.479092 125.479092 0 0 1 65.578621-109.16441c-171.144204 7.197653-215.129864 185.539511-215.129865 289.905486 0 295.503661 272.311222 325.493884 331.092059 325.493884 31.589701 0 79.174188-9.197002 107.964802-18.394003l5.198305-1.599479a511.833134 511.833134 0 0 0 266.313178-211.131168 15.994785 15.994785 0 0 0-4.798436-21.99283 16.834512 16.834512 0 0 0-16.794524-0.799739z"\n' +
    '                    fill="#0F5197"/>\n' +
    '              <path d="M422.662206 965.29202A317.816387 317.816387 0 0 1 331.891798 880.119787a322.734783 322.734783 0 0 1 117.961543-479.843563 132.47681 132.47681 0 0 1 61.979793-15.994786 130.317514 130.317514 0 0 1 102.766497 51.983053 128.79801 128.79801 0 0 1 25.591657 74.775622c0-0.799739 97.968061-318.29623-319.895709-318.296231-175.54277 0-319.895709 166.745638-319.895709 312.698056a521.50998 521.50998 0 0 0 48.384226 223.926996 512.113043 512.113043 0 0 0 625.396111 268.312526 303.02121 303.02121 0 0 1-251.518001-32.38944z"\n' +
    '                    fill="#0C88DA"/>\n' +
    '              <path d="M609.001456 595.412606c-3.198957 3.998696-13.195698 9.996741-13.195698 22.792569 0 10.396611 6.797784 20.393351 18.793873 28.790614 57.581228 39.986964 165.945899 34.788658 166.345769 34.788659a238.922108 238.922108 0 0 0 121.160499-33.18918 245.120087 245.120087 0 0 0 121.56037-211.531038c1.199609-89.570799-31.989571-149.151374-45.185269-175.54277a440.496391 440.496391 0 0 0-83.732702-113.842886 493.639066 493.639066 0 0 0-142.673486-97.088347A582.530086 582.530086 0 0 0 511.833134 0.006718 511.833134 511.833134 0 0 0 0 504.642199c1.999348-145.952417 147.152026-263.91396 319.895709-263.91396 13.995437 0 93.969365 1.199609 167.945247 40.386833 65.178751 34.388789 99.567539 75.575361 123.159848 116.761934 24.791917 42.786051 29.190483 96.368582 29.190484 117.961543s-10.79648 53.182662-31.189832 79.574057z"\n' +
    '                    fill="#2CC3D5"/>\n' +
    '              <path d="M649.548237 15.12179s372.638514 385.154434-48.544174 593.246592c0 0-27.231122 45.225256 102.846471 68.61763 0 0 215.489747 46.824734 302.461393-142.513538 17.51429-59.380641 33.109206-151.390644-13.195698-253.797259a427.860511 427.860511 0 0 0-76.974905-113.682937 546.381871 546.381871 0 0 0-113.083134-94.68913c-68.457682-34.988593-153.509953-57.181358-153.509953-57.181358z"\n' +
    '                    fill="#49D668"/>\n' +
    '            </svg>\n' +
    '            <span>Microsoft Edge</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a href="https://browser.360.cn/se/" target="_blank">\n' +
    '            <img class="browser-logo" src="img/360-se.svg" alt=""/>\n' +
    '            <span>360安全浏览器</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a href="https://browser.360.cn/ee/" target="_blank">\n' +
    '            <img class="browser-logo" src="img/360-ee.svg" alt=""/>\n' +
    '            <span>360急速浏览器</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a href="https://browser.qq.com/" target="_blank">\n' +
    '            <img class="browser-logo" src="img/QQ.svg" alt=""/>\n' +
    '            <span>QQ浏览器</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '        <li>\n' +
    '          <a href="https://ie.sogou.com/" target="_blank">\n' +
    '            <img class="browser-logo" src="img/sougo.svg" alt=""/>\n' +
    '            <span>搜狗浏览器</span>\n' +
    '          </a>\n' +
    '        </li>\n' +
    '      </ul>\n' +
    '    </div>\n' +
    '  </div>\n' +
    '</div>';
}

// export function readHtml2(): string {
//   const origin = fs.readFileSync('./src/index.html');
// const min = minify(origin, {
//   removeComments: true,
//   collapseWhitespace: true,
// });
// console.log(origin, min);
// return origin;
// }


export function insertStyle(): void {
  const head = document.head || document.getElementsByTagName('head')[0];
  const style = document.createElement('style');
  head.appendChild(style);
  style.innerHTML = readStyle();
}

export function insertHtml(): void {
  const body = document.getElementsByTagName('body')[0];
  body.innerHTML = readHtml();
}

export function main() {
  console.log('browser-adaptor version 0.0.0');
  if (true) {
    insertStyle();
    insertHtml();
  }
}

main();
