const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./docx-preview-rR7HURBr.js","./chunk-CMxvf4Kt.js","./jszip.min-DWCzc6bk.js"])))=>i.map(i=>d[i]);
import{o as e}from"./chunk-CMxvf4Kt.js";import{A as t,C as n,E as r,M as i,O as a,T as o,w as s}from"./package-B2iKzpAe.js";import{o as c,s as l}from"./assets-TfB0CIc-.js";import{t as u}from"./preload-helper-kNaey6uv.js";var d={width:794,height:1123},f=2,p=5e3,m=new Set([`file:`,`about:`,`data:`]),h=.24,g=3,_=.15,v=9525,y=20555,b=e=>{let t=e,n=t?.default,r=[t?.default,n?.default,t?.JSZip,e].find(e=>!!e&&typeof e==`object`&&typeof e.loadAsync==`function`);if(!r)throw Error(`JSZip module does not expose loadAsync.`);return r},x=(()=>{let e={module:null,async load(){return this.module||=u(()=>import(`./docx-preview-rR7HURBr.js`),__vite__mapDeps([0,1,2]),import.meta.url),this.module}};return async()=>await e.load()})(),S=e=>{if((e.byteLength>=4?new DataView(e).getUint16(0,!1):0)!==y)throw Error(`文件不是有效的 DOCX/OOXML 压缩包，可能下载不完整或被服务端错误内容替换，请重新上传或检查文件源。`)},C=e=>e.ownerDocument.defaultView,ee=e=>{let t=[e.ownerDocument.URL,C(e)?.location?.href,globalThis.location?.href].filter(Boolean);for(let e of t)try{return new URL(e).protocol}catch{}return``},w=(e,t)=>t?.worker===!1?!1:t?.worker===!0?!0:C(e)?.Worker??globalThis.Worker?!m.has(ee(e)):!1,te=(e,t,n)=>{let r=t?.options?.docx,i=e.ownerDocument.URL||void 0,a=w(e,r),o=r?.visualPagination===!0;return{debug:!1,experimental:!1,useWorker:a,workerUrl:a?l(r,i):void 0,workerJsZipUrl:a?c(r,i):void 0,workerFallback:!0,workerTimeout:r?.workerTimeout??p,renderPageBatchSize:r?.renderPageBatchSize??(r?.progressive===!1?2**53-1:f),renderYieldEveryMs:r?.renderYieldEveryMs??16,strictWordCompatibility:r?.strictWordCompatibility??!0,paginationTolerance:r?.paginationTolerance??2,breakPages:o,maxDynamicPaginationPasses:o?r?.maxDynamicPaginationPasses??1e3:0,awaitLayout:r?.awaitLayout??o,preserveComplexFieldResults:r?.preserveComplexFieldResults??!0,updatePageReferences:r?.updatePageReferences??!1,hideWebHiddenContent:r?.hideWebHiddenContent??!1,ignoreLastRenderedPageBreak:r?.ignoreLastRenderedPageBreak??!o,progress:e=>{(e.phase===`render`||e.phase===`layout`||e.phase===`done`)&&n()}}},T=(e,t)=>{let n=C(t)?.HTMLElement;return n?e instanceof n:e instanceof HTMLElement},ne=e=>e?.options?.docx?.visualPagination===!0,re=`
.docx-fit-viewer {
  box-sizing: border-box;
  height: 100%;
  overflow: auto;
  background: #ececec;
}
.docx-fit-viewer .docx-wrapper {
  box-sizing: border-box;
  min-width: 0 !important;
  width: 100% !important;
  padding: 24px 14px 40px !important;
  background: #e7e9ec !important;
}
.docx-fit-viewer .docx-page-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 24px;
  overflow: visible;
}
.docx-fit-viewer .docx-flow-frame {
  position: relative;
  width: 100%;
  min-width: 0;
  margin: 0 auto 28px;
  overflow: visible;
}
.docx-fit-viewer .docx-page-frame > section.docx,
.docx-fit-viewer .docx-flow-frame > section.docx {
  position: absolute;
  top: 0;
  left: 50%;
  margin: 0 !important;
  background: #ffffff !important;
  box-shadow: 0 2px 14px rgba(25, 35, 48, 0.18);
  box-sizing: border-box;
  color: #111827;
  overflow: hidden;
  transform-origin: top center;
}
.docx-fit-viewer .docx-flow-frame > section.docx {
  height: auto !important;
  min-height: 0 !important;
  overflow: visible !important;
}
.docx-fit-viewer .docx-page-frame > section.docx > article,
.docx-fit-viewer .docx-flow-frame > section.docx > article {
  position: relative;
  z-index: 1;
}
.docx-fit-viewer .docx-vml-watermark {
  position: absolute;
  inset: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.28;
  filter: saturate(0.72) brightness(1.24);
  pointer-events: none;
  user-select: none;
}
.docx-fit-viewer .docx-vml-fallback,
.docx-fit-viewer .docx-chart-fallback {
  display: block;
  max-width: 100%;
  margin: 12px auto;
  break-inside: avoid;
  page-break-inside: avoid;
}
.docx-fit-viewer .docx-vml-fallback {
  text-align: center;
}
	.docx-fit-viewer .docx-vml-fallback img {
	  display: block;
	  max-width: 100%;
	  height: auto;
	  margin: 0 auto;
	}
	.docx-fit-viewer .docx-math-fallback {
	  display: inline-block;
	  max-width: 100%;
	  margin: 0 4px;
	  padding: 1px 6px 2px;
	  border-bottom: 1px solid currentColor;
	  color: #111827;
	  font-family: "Cambria Math", "Times New Roman", serif;
	  font-size: 0.95em;
	  line-height: 1.15;
	  text-align: right;
	  white-space: pre;
	  vertical-align: middle;
	}
	.docx-fit-viewer figure.docx-math-fallback {
	  display: table;
	  margin: 4px auto;
	}
	.docx-fit-viewer .docx-chart-fallback {
	  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid #d7dee8;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 1px 6px rgba(15, 23, 42, 0.08);
}
.docx-fit-viewer .docx-chart-fallback svg {
  display: block;
  width: 100%;
  height: auto;
}
`;function E(e){return e.localName||e.tagName.split(`:`).pop()||e.tagName}function D(e,t){return Array.from(e.querySelectorAll(`*`)).filter(e=>E(e)===t)}function O(e,t){return D(e,t)[0]}function k(e,t,n){return(n?e.getAttributeNS(n,t):null)||e.getAttribute(t)||e.getAttribute(`r:${t}`)}function A(e){return e?(e.textContent||``).replace(/\s+/g,` `).trim():``}function j(e,t){let n=e?.parentElement||null;for(;n;){if(E(n)===t)return n;n=n.parentElement}return null}function M(e){let t=E(e)===`p`?e:j(e,`p`);if(!t)return;let n=0,r=t.previousElementSibling;for(;r;)E(r)===`p`&&(n+=1),r=r.previousElementSibling;return n}function N(e,t){let n=C(t)?.DOMParser||globalThis.DOMParser;if(!n)return null;let r=new n().parseFromString(e,`application/xml`);return r.querySelector(`parsererror`)?null:r}function P(e){let t=[];return e.split(`/`).forEach(e=>{if(!(!e||e===`.`)){if(e===`..`){t.pop();return}t.push(e)}}),t.join(`/`)}function F(e){let t=e.lastIndexOf(`/`);return t>=0?e.slice(0,t):``}function I(e){let t=F(e);return P(`${t}/_rels/${e.slice(t?t.length+1:0)}.rels`)}function L(e,t){return t.startsWith(`/`)?P(t.slice(1)):P(`${F(e)}/${t}`)}function ie(e){switch(R(e)){case`png`:return`image/png`;case`jpg`:case`jpeg`:return`image/jpeg`;case`gif`:return`image/gif`;case`bmp`:return`image/bmp`;case`webp`:return`image/webp`;case`svg`:return`image/svg+xml`;default:return`application/octet-stream`}}function R(e){return e.split(`.`).pop()?.toLowerCase()||``}function ae(e){let t=R(e);return t===`wmf`||t===`emf`}function oe(e){if(typeof TextDecoder<`u`)return new TextDecoder(`latin1`).decode(e);let t=``,n=32768;for(let r=0;r<e.length;r+=n)t+=String.fromCharCode(...e.slice(r,r+n));return t}function z(e){let t=e.replace(/\s+/g,` `).trim();return/^[\d.,+\-\s]+$/.test(t)?t.replace(/\s+/g,``):t}function se(e){let t=[];return e.replace(/(?:\\\\\s*)?([+\-])?\s*\\text\{([^}]*)\}/g,(e,n,r)=>{let i=z(r);return i&&t.push(`${n||``}${i}`),``}),t.length?t.join(`
`):e.replace(/\\frac\{([^{}]+)\}\{([^{}]+)\}/g,`($1)/($2)`).replace(/\\text\{([^}]*)\}/g,`$1`).replace(/\\begin\{[^}]+\}|\\end\{[^}]+\}/g,``).replace(/\\underline\{([^{}]*)\}/g,`$1`).replace(/\\\\/g,`
`).replace(/\\[a-zA-Z]+\*?/g,``).replace(/[{}]/g,``).split(`
`).map(e=>z(e)).filter(Boolean).join(`
`)}function ce(e){let t=oe(e),n=t.indexOf(`fjTeX Input Language`),r=n>=0?t.slice(n+20):t,i=r.search(/\\(?:underline|begin|frac|text|sqrt|sum|int|[a-zA-Z]+)/);if(i<0)return;let a=r.slice(i).split(`\0`)[0].replace(/[\u0001-\u0008\u000b\u000c\u000e-\u001f\u007f]+/g,``).trim();if(!(!a||a.length>3e3))return se(a)||void 0}function B(e){if(!e)return;let t=e.trim().match(/^(-?\d+(?:\.\d+)?)(px|pt|in|cm|mm)?$/i);if(!t)return;let n=Number(t[1]);if(!(!Number.isFinite(n)||n<=0))switch((t[2]||`px`).toLowerCase()){case`pt`:return n*96/72;case`in`:return n*96;case`cm`:return n*96/2.54;case`mm`:return n*96/25.4;default:return n}}function V(e){let t=new Map;return e&&e.split(`;`).forEach(e=>{let n=e.indexOf(`:`);n<=0||t.set(e.slice(0,n).trim().toLowerCase(),e.slice(n+1).trim())}),t}function H(e){let t=V(e);return{width:B(t.get(`width`)),height:B(t.get(`height`))}}function U(e){let t=j(e,`inline`)||j(e,`anchor`),n=t?O(t,`extent`):void 0,r=Number(n?.getAttribute(`cx`)),i=Number(n?.getAttribute(`cy`));return{width:Number.isFinite(r)&&r>0?r/v:void 0,height:Number.isFinite(i)&&i>0?i/v:void 0}}async function W(e,t,n){let r=e.file(I(t)),i=new Map;if(!r)return i;let a=N(await r.async(`text`),n);return a&&D(a,`Relationship`).forEach(e=>{let t=e.getAttribute(`Id`),n=e.getAttribute(`Target`);!t||!n||i.set(t,{id:t,type:e.getAttribute(`Type`)||``,target:n,targetMode:e.getAttribute(`TargetMode`)||void 0})}),i}async function G(e,t){let n=await e.async(`base64`);return`data:${ie(t)};base64,${n}`}async function le(e){return ce(await e.async(`uint8array`))}async function ue(e,t){let n=e.file(t);if(n){if(ae(t)){let e=await le(n);return e?{kind:`math-text`,text:e}:void 0}return{kind:`image`,dataUrl:await G(n,t)}}}function de(e){return Object.keys(e.files).filter(e=>e===`word/document.xml`||/^word\/header\d+\.xml$/i.test(e)||/^word\/footer\d+\.xml$/i.test(e)).sort((e,t)=>e===`word/document.xml`?-1:t===`word/document.xml`?1:e.localeCompare(t))}function fe(e,t,n){let r=`${t?.getAttribute(`id`)||``} ${t?.getAttribute(`o:spid`)||``}`.toLowerCase(),i=(n||``).toLowerCase();return e.includes(`/header`)&&(r.includes(`watermark`)||i.includes(`z-index:-`)||i.includes(`mso-position-horizontal:center`))?`watermark`:t?.getAttribute(`o:ole`)===`t`||t?.getAttribute(`ole`)===`t`?`ole-preview`:`vml-image`}async function pe(e,t){let n=[],r=new Set;for(let i of de(e)){let a=e.file(i);if(!a)continue;let o=N(await a.async(`text`),t);if(!o)continue;let s=await W(e,i,t);for(let t of D(o,`imagedata`)){let a=k(t,`id`,`http://schemas.openxmlformats.org/officeDocument/2006/relationships`),o=a?s.get(a):void 0;if(!o||o.targetMode===`External`||!o.type.includes(`/image`))continue;let c=L(i,o.target),l=await ue(e,c);if(!l)continue;let u=j(t,`shape`),d=u?.getAttribute(`style`)||void 0,f=fe(i,u,d),p=f===`watermark`?`${f}:${c}`:`${f}:${i}:${c}:${M(t)??`end`}`;r.has(p)||(r.add(p),n.push({role:f,key:p,...l,sourcePath:c,partPath:i,title:t.getAttribute(`o:title`)||t.getAttribute(`title`)||void 0,style:d,...H(d),paragraphIndex:i===`word/document.xml`?M(t):void 0}))}}return n}function K(e){return e?D(e,`pt`).sort((e,t)=>Number(e.getAttribute(`idx`)||0)-Number(t.getAttribute(`idx`)||0)).map(e=>A(O(e,`v`))).filter(Boolean):[]}function me(e){let t=K(O(O(e,`tx`)||e,`strCache`))[0]||K(O(O(e,`tx`)||e,`numCache`))[0]||`Series`,n=K(O(O(e,`cat`)||e,`strCache`)),r=K(O(O(e,`cat`)||e,`numCache`)),i=K(O(O(e,`val`)||e,`numCache`)).map(e=>Number(e)).filter(e=>Number.isFinite(e));return{name:t,categories:n.length?n:r,values:i}}function he(e,t,n,r){let i=[`lineChart`,`barChart`,`pieChart`,`areaChart`,`scatterChart`].map(t=>D(e,t)[0]).find(Boolean),a=i?E(i):`chart`,o=A(O(O(e,`title`)||e,`t`))||t.split(`/`).pop()||`Chart`,s=D(i||e,`ser`).map(me).filter(e=>e.values.length),{width:c,height:l}=U(n);if(s.length)return{key:`chart:${t}:${r??`end`}`,title:o,type:a,sourcePath:t,series:s,width:c,height:l,paragraphIndex:r}}async function ge(e,t){let n=`word/document.xml`,r=e.file(n);if(!r)return[];let i=N(await r.async(`text`),t);if(!i)return[];let a=await W(e,n,t),o=[],s=new Set;for(let r of D(i,`chart`)){let i=k(r,`id`,`http://schemas.openxmlformats.org/officeDocument/2006/relationships`),c=i?a.get(i):void 0;if(!c||c.targetMode===`External`||!c.type.includes(`/chart`))continue;let l=L(n,c.target),u=e.file(l);if(!u)continue;let d=N(await u.async(`text`),t),f=M(r),p=d?he(d,l,r,f):void 0;!p||s.has(p.key)||(s.add(p.key),o.push(p))}return o}function q(e){return e.replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function _e(e){let t=Math.max(360,Math.round(e.width||520)),n=Math.max(220,Math.round(e.height||320)),r={top:52,right:30,bottom:56,left:54},i=t-r.left-r.right,a=n-r.top-r.bottom,o=e.series.flatMap(e=>e.values),s=Math.max(...o,1),c=Math.min(...o,0),l=Math.max(s-c,1),u=[`#2563eb`,`#10b981`,`#f97316`,`#8b5cf6`,`#ef4444`],d=Math.max(...e.series.map(e=>e.values.length),1),f=e=>r.left+(d===1?i/2:e*i/(d-1)),p=e=>r.top+a-(e-c)/l*a,m=e.series.map((e,t)=>{let n=u[t%u.length];return`<polyline points="${e.values.map((e,t)=>`${f(t).toFixed(1)},${p(e).toFixed(1)}`).join(` `)}" fill="none" stroke="${n}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>${e.values.map((t,r)=>`<circle cx="${f(r).toFixed(1)}" cy="${p(t).toFixed(1)}" r="3.5" fill="${n}"><title>${q(e.name)}: ${q(String(t))}</title></circle>`).join(``)}`}).join(``),h=(e.series.find(e=>e.categories.length)?.categories||[]).slice(0,d).map((e,t)=>{let r=f(t),i=e.length>14?`${e.slice(0,13)}...`:e;return`<text x="${r.toFixed(1)}" y="${n-22}" text-anchor="middle" fill="#64748b" font-size="11">${q(i)}</text>`}).join(``),g=e.series.slice(0,5).map((e,t)=>`<g transform="translate(${r.left+t*98} 30)"><rect width="10" height="10" rx="2" fill="${u[t%u.length]}"/><text x="15" y="9" fill="#475569" font-size="11">${q(e.name)}</text></g>`).join(``);return`<svg viewBox="0 0 ${t} ${n}" role="img" aria-label="${q(e.title)}">
    <rect x="0" y="0" width="${t}" height="${n}" rx="8" fill="#ffffff"/>
    <text x="${r.left}" y="22" fill="#0f172a" font-size="15" font-weight="700">${q(e.title)}</text>
    ${g}
    <line x1="${r.left}" y1="${r.top+a}" x2="${r.left+i}" y2="${r.top+a}" stroke="#cbd5e1"/>
    <line x1="${r.left}" y1="${r.top}" x2="${r.left}" y2="${r.top+a}" stroke="#cbd5e1"/>
    <text x="${r.left-8}" y="${r.top+4}" text-anchor="end" fill="#64748b" font-size="11">${q(s.toFixed(1))}</text>
    <text x="${r.left-8}" y="${r.top+a}" text-anchor="end" fill="#64748b" font-size="11">${q(c.toFixed(1))}</text>
    ${m}
    ${h}
  </svg>`}function ve(e){return Array.from(e.querySelectorAll(`section.docx`))}function ye(e){return Array.from(e.querySelectorAll(`section.docx > article`))}function J(e,t){if(t===void 0)return;let n=Array.from(e.querySelectorAll(`section.docx > article p`));return n[Math.min(Math.max(t,0),Math.max(n.length-1,0))]}function Y(e,t,n){let r=J(e,n);if(r){r.after(t);return}let i=ye(e)[0];i&&i.appendChild(t)}function be(e){let t=(e.getAttribute(`alt`)||``).toLowerCase(),n=(e.getAttribute(`src`)||``).toLowerCase();return t.includes(`embedded object`)||n.startsWith(`data:application/octet-stream`)||n.startsWith(`data:image/wmf`)||n.startsWith(`data:image/x-wmf`)||n.startsWith(`data:image/emf`)||n.startsWith(`data:image/x-emf`)}function xe(e,t,n){let r=J(e,n);if(!r)return!1;let i=Array.from(r.querySelectorAll(`img`)).find(e=>!e.dataset.docxFallbackReplaced&&be(e));return i?(i.dataset.docxFallbackReplaced=`true`,i.replaceWith(t),!0):!1}function Se(e,t){let n=e.ownerDocument.createElement(`span`);return n.className=`docx-math-fallback`,n.dataset.docxFallback=t.key,n.setAttribute(`role`,`img`),n.setAttribute(`aria-label`,t.title||`MathType equation`),n.textContent=t.text||``,t.width&&(n.style.minWidth=`${Math.round(Math.min(t.width,180))}px`),n}function Ce(e,t){let n=ve(e);n.length&&t.forEach(t=>{if(t.role===`watermark`){let r=t.dataUrl;if(!r)return;n.forEach(n=>{let i=e.ownerDocument.createElement(`img`);i.className=`docx-vml-watermark`,i.src=r,i.alt=t.title||``,i.dataset.docxFallback=t.key,n.prepend(i)});return}if(t.kind===`math-text`){if(!xe(e,Se(e,t),t.paragraphIndex)){let n=e.ownerDocument.createElement(`figure`);n.className=`docx-math-fallback`,n.dataset.docxFallback=t.key,n.textContent=t.text||``,Y(e,n,t.paragraphIndex)}return}if(!t.dataUrl)return;let r=e.ownerDocument.createElement(`figure`);r.className=`docx-vml-fallback`,r.dataset.docxFallback=t.key,t.width&&(r.style.width=`${Math.round(t.width)}px`);let i=e.ownerDocument.createElement(`img`);i.src=t.dataUrl,i.alt=t.title||(t.role===`ole-preview`?`Embedded object preview`:`Document image`),t.width&&(i.style.width=`${Math.round(t.width)}px`),t.height&&(i.style.height=`${Math.round(t.height)}px`),r.appendChild(i),Y(e,r,t.paragraphIndex)})}function we(e,t){t.forEach(t=>{let n=e.ownerDocument.createElement(`figure`);n.className=`docx-chart-fallback`,n.dataset.docxFallback=t.key,t.width&&(n.style.width=`${Math.round(t.width)}px`),n.innerHTML=_e(t),Y(e,n,t.paragraphIndex)})}async function Te(t,n){try{let r=await b(await u(()=>import(`./jszip.min-DWCzc6bk.js`).then(t=>e(t.t(),1)),__vite__mapDeps([2,1]),import.meta.url)).loadAsync(t.slice(0)),[i,a]=await Promise.all([pe(r,n),ge(r,n)]);i.length&&Ce(n,i),a.length&&we(n,a)}catch(e){console.warn(`[file-viewer] DOCX 兼容增强解析失败，已保留 @file-viewer/docx 原始渲染结果。`,e)}}function Ee(e){let t=e.ownerDocument.createElement(`style`);return t.textContent=re,e.prepend(t),t}function X(e,t,n){let r=e.cloneNode(!1);r.innerHTML=``,r.dataset.docxPaginated=`true`,r.style.minHeight=`${n}px`,r.style.height=`${n}px`,r.style.overflow=`hidden`;let i=t.cloneNode(!1);return r.appendChild(i),Array.from(e.children).forEach(e=>{e!==t&&r.appendChild(e.cloneNode(!0))}),{page:r,article:i}}function De(e){let t=e.ownerDocument.defaultView?.getComputedStyle(e),n=t?parseFloat(t.minHeight):0;return Number.isFinite(n)&&n>0?n:e.offsetHeight}function Oe(e){let t=e.querySelector(`.docx-wrapper`);t&&Array.from(t.children).forEach(t=>{if(!T(t,e)||!t.matches(`section.docx`))return;let n=t.querySelector(`:scope > article`);if(!T(n,e))return;let r=De(t),i=Array.from(n.childNodes);if(!r||i.length<2||t.scrollHeight<=r*1.15)return;let a=X(t,n,r);t.before(a.page),i.forEach(e=>{a.article.appendChild(e),!(a.page.scrollHeight<=r+1||a.article.childNodes.length===1)&&(a.article.removeChild(e),a=X(t,n,r),t.before(a.page),a.article.appendChild(e))}),t.remove()})}function ke(e,t){let n=e.querySelector(`.docx-wrapper`);return n?Array.from(n.children).flatMap(n=>{if(!T(n,e)||!n.matches(`section.docx`))return[];let r=e.ownerDocument.createElement(`div`);return r.className=t?`docx-page-frame`:`docx-flow-frame`,n.before(r),r.appendChild(n),[r]}):[]}function Ae(e,n){e.classList.add(`docx-fit-viewer`);let r=Ee(e),o=ne(n);o&&Oe(e);let s=ke(e,o),c=C(e),l=c?.ResizeObserver,u=0,d=1,f=1,p=1,m=a(),v=e=>Math.min(g,Math.max(h,Number(e.toFixed(2)))),y=()=>{c&&(c.cancelAnimationFrame(u),u=c.requestAnimationFrame(()=>{let t=1;s.forEach(n=>{let r=n.firstElementChild;if(!T(r,e))return;r.style.transform=`translateX(-50%)`;let i=r.offsetWidth,a=o?r.offsetHeight:Math.max(r.scrollHeight,r.offsetHeight);if(!i||!a)return;let s=Math.max(e.clientWidth-28,120),c=Math.min(1,Math.max(h,s/i)),l=v(c*d);t=l,p=c,r.style.transform=`translateX(-50%) scale(${l})`,n.style.width=`${Math.ceil(Math.max(i*l,e.clientWidth-28,120))}px`,n.style.maxWidth=`none`,n.style.height=`${Math.ceil(a*l)}px`}),f=t,m.emit()}))},b=()=>({scale:f,label:`${Math.round(f*100)}%`,canZoomIn:f<g,canZoomOut:f>h,canReset:d!==1,minScale:h,maxScale:g}),x=e=>(d=Math.min(6,Math.max(.2,Number(e.toFixed(2)))),y(),b());e.dataset.viewerZoomProvider=`docx`,t(e,{zoomIn:()=>x(d+_),zoomOut:()=>x(d-_),resetZoom:()=>x(1),setZoom:e=>x(e/Math.max(p,.01)),getState:b,subscribe:m.subscribe});let S=l?new l(y):null;return S?.observe(e),s.forEach(e=>{let t=Z(e);t&&S?.observe(t)}),y(),()=>{c?.cancelAnimationFrame(u),S?.disconnect(),i(e),r.remove(),e.classList.remove(`docx-fit-viewer`)}}function Z(e){let t=e.firstElementChild,n=e.ownerDocument.defaultView?.HTMLElement;return n&&t instanceof n?t:null}function Q(e){return!!e?.classList.contains(`docx-flow-frame`)}function $(e){let t=e?Z(e):null;if(!t)return d;let n=r(t,d);return Q(e)?{width:n.width,height:Math.max(t.scrollHeight||0,t.offsetHeight||0,d.height)}:n}function je(e,t){let r=Q(e),i=o(t.width),a=o(t.height);n(e,t,{heightMode:r?`min`:`fixed`}),e.style.margin=`0 auto 18px`;let s=Z(e);s&&(s.style.position=`relative`,s.style.top=`auto`,s.style.left=`auto`,s.style.width=i,s.style.maxWidth=`none`,s.style.minHeight=r?`0`:a,s.style.height=r?`auto`:a,s.style.margin=`0 auto`,s.style.transform=`none`,s.style.transformOrigin=`top left`,s.style.overflow=r?`visible`:`hidden`,s.style.boxShadow=`none`)}function Me(e){let t=e.querySelector(`.docx-page-frame, .docx-flow-frame`),n=$(t||void 0);return s({selector:t?.classList.contains(`docx-flow-frame`)?`.viewer-export-content .docx-flow-frame`:`.viewer-export-content .docx-page-frame`,width:n.width,height:t?.classList.contains(`docx-flow-frame`)?d.height:n.height,heightMode:t?.classList.contains(`docx-flow-frame`)?`min`:`fixed`})}function Ne(e){let t=Array.from(e.querySelectorAll(`.docx-page-frame, .docx-flow-frame`)),n=e.cloneNode(!0),r=e.ownerDocument.createElement(`div`);r.className=`docx-print-document`;let i=Array.from(n.querySelectorAll(`style`)).filter(e=>!e.textContent?.includes(`.docx-fit-viewer`)).map(e=>e.outerHTML).join(``);return n.querySelectorAll(`.docx-page-frame, .docx-flow-frame`).forEach((e,n)=>{je(e,$(t[n])),r.appendChild(e.cloneNode(!0))}),r.childElementCount?`${i}${r.outerHTML}`:n.innerHTML}async function Pe(e,t,n){var r;S(e);let i=!1,a=()=>{var e;i||(i=!0,(e=n?.onProgressiveRender)==null||e.call(n))},o=te(t,n,a),{defaultOptions:s,renderAsync:c}=await x();t.dataset.docxWorker=o.useWorker?`self`:`false`,await c(e,t,void 0,{...s,...o}),a(),await Te(e,t);let l=Ae(t,n);return(r=n?.registerExportAdapter)==null||r.call(n,{includeDocumentStyles:!1,beforeSnapshot:()=>{let e=C(t);e&&e.dispatchEvent(new e.Event(`resize`))},printStyle:()=>Me(t),toHtml:()=>Ne(t)}),{$el:t,unmount(){var e;(e=n?.registerExportAdapter)==null||e.call(n,null),l(),delete t.dataset.docxWorker,t.innerHTML=``}}}export{Pe as default};