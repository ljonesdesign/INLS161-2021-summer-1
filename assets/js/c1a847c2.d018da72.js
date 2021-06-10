(self.webpackChunkinls_161_2021_summer_1=self.webpackChunkinls_161_2021_summer_1||[]).push([[1024],{3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),p=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(t),f=a,d=m["".concat(l,".").concat(f)]||m[f]||c[f]||o;return t?r.createElement(d,i(i({ref:n},u),{},{components:t})):r.createElement(d,i({ref:n},u))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4804:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=t(2122),a=t(9756),o=(t(7294),t(3905)),i={slug:"file-naming-conventions",title:"File Naming Conventions",author:"Lawrence Jones",tags:["unix","linux","file names"]},s={permalink:"/INLS161-2021-summer-1/blog/file-naming-conventions",editUrl:"https://github.com/ljonesdesign/INLS161-2021-summer-1/edit/main/blog/2021-03-31.md",source:"@site/blog/2021-03-31.md",title:"File Naming Conventions",description:"File names with umlauts, accents, etc, can cause issues on older systems. They should work fine on newer systems that are up-to-date.",date:"2021-03-31T00:00:00.000Z",formattedDate:"March 31, 2021",tags:[{label:"unix",permalink:"/INLS161-2021-summer-1/blog/tags/unix"},{label:"linux",permalink:"/INLS161-2021-summer-1/blog/tags/linux"},{label:"file names",permalink:"/INLS161-2021-summer-1/blog/tags/file-names"}],readingTime:1.44,truncated:!1,prevItem:{title:"Responsive Google Form Embed",permalink:"/INLS161-2021-summer-1/blog/responsive-google-form-embed"}},l=[],p={toc:l};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"File names with umlauts, accents, etc, can cause issues on older systems. They should work fine on newer systems that are up-to-date."),(0,o.kt)("p",null,"The safest approach is to completely avoid using any special characters."),(0,o.kt)("p",null,"Generally, I don\u2019t use any characters for file naming outside of these: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"numbers "),(0,o.kt)("li",{parentName:"ul"},"lowercase English characters"),(0,o.kt)("li",{parentName:"ul"},"hyphens ",(0,o.kt)("inlineCode",{parentName:"li"},"-"),", and sometimes an "),(0,o.kt)("li",{parentName:"ul"},"underscore ",(0,o.kt)("inlineCode",{parentName:"li"},"_"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"1-2-3-4-5-6-7-8-9-0-a-b-c-d-e-f-g-h-i-j-k-l-m-n-o-p-q-r-s-t-u-v-w-x-y-z.jpg")),(0,o.kt)("p",null,"I avoid using the period except for separating the filename from a file name extension. "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Here is Google's developer guide for file naming: ",(0,o.kt)("a",{parentName:"li",href:"https://developers.google.com/style/filenames"},"https://developers.google.com/style/filenames")," ")),(0,o.kt)("p",null,"In this URL the period denotes the subdomain ",(0,o.kt)("inlineCode",{parentName:"p"},"developers"),". This is another reason to not use periods indiscriminately. Periods are usually used for very specific reasons."),(0,o.kt)("p",null,"I always use hyphens to fill in spaces unless specifically directed to use underscores. Underscores are better than spaces, but hyphens are better than underscores because Search Engine Optimization (SEO) algorithims perfer hyphens. For that reason, I don't usually use ",(0,o.kt)("inlineCode",{parentName:"p"},"CamelCase")," and stick to all lower case and hyphens.  "),(0,o.kt)("p",null,"Underscores used to be more common before SEO became an issue. I have noticed that php developers will still use underscores for system files that are included in other files. Another situation where a specific character is used in a very specific situation. SQL database names will not allow spaces or a hyphen, only an underscore. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"_init.php\n_main.php\n_uikit.php\nadmin.php\n")),(0,o.kt)("p",null,"Here is a ",(0,o.kt)("a",{parentName:"p",href:"https://www.paho.org/par/index.php?option=com_docman&view=download&alias=560-guide-to-proper-file-naming&category_slug=organizacion-de-la-representacion&Itemid=253"},"nice file naming overview from the Pan Health Organization"),". (They obviously must deal with multiple language character sets all the time)."),(0,o.kt)("p",null,"This pdf file below from the University of Aberdeen contains good information, but I find it ironic that the pdf file name does not use file naming conventions. (Note the four separate ",(0,o.kt)("inlineCode",{parentName:"p"},"@20"),"s that are inserted in the empty spaces.\n",(0,o.kt)("a",{parentName:"p",href:"https://www.abdn.ac.uk/staffnet/documents/policy-zone-information-policies/File%20Naming%20Conventions%20July%202017.pdf"},"https://www.abdn.ac.uk/staffnet/documents/policy-zone-information-policies/File%20Naming%20Conventions%20July%202017.pdf")))}u.isMDXComponent=!0}}]);