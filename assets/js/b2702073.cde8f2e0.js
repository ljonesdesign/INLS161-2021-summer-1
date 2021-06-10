(self.webpackChunkinls_161_2021_summer_1=self.webpackChunkinls_161_2021_summer_1||[]).push([[9806],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},p=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=o,g=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},7404:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return s},default:function(){return u}});var r=t(2122),o=t(9756),i=(t(7294),t(3905)),a={slug:"responsive-google-form-embed",title:"Responsive Google Form Embed",author:"Lawrence Jones",tags:["responsive","google form"]},l={permalink:"/INLS161-2021-summer-1/blog/responsive-google-form-embed",editUrl:"https://github.com/ljonesdesign/INLS161-2021-summer-1/edit/main/blog/2021-06-09.md",source:"@site/blog/2021-06-09.md",title:"Responsive Google Form Embed",description:"If you want your Google Form to validate without any errors or warnings, you can make these changes:",date:"2021-06-09T00:00:00.000Z",formattedDate:"June 9, 2021",tags:[{label:"responsive",permalink:"/INLS161-2021-summer-1/blog/tags/responsive"},{label:"google form",permalink:"/INLS161-2021-summer-1/blog/tags/google-form"}],readingTime:.45,truncated:!1,nextItem:{title:"File Naming Conventions",permalink:"/INLS161-2021-summer-1/blog/file-naming-conventions"}},s=[],c={toc:s};function u(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"If you want your Google Form to validate without any errors or warnings, you can make these changes: "),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Add this to any CSS file that is linked in your HTML head: ")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},".g-form-container {    \n   position: relative; \n   width: 100%; \n   overflow: hidden; \n   padding-top: 100%; /* 1:1 Aspect Ratio */ \n   } \n   \n .responsive-iframe { \n   position: absolute; \n   top: 0; left: 0; \n   bottom: 0; \n   right: 0; \n   width: 100%; \n   height: 100%; \n   border: none; \n   } \n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"In your index.html, replace your Google Form embed with this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'<div class="g-form-container"><iframe class="responsive-iframe" src="PUT YOUR EMBED LINK HERE"></iframe></div>\n')))}u.isMDXComponent=!0}}]);