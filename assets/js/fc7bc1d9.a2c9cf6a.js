(self.webpackChunkinls_161_2021_summer_1=self.webpackChunkinls_161_2021_summer_1||[]).push([[2194],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),u=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return n?o.createElement(h,r(r({ref:t},p),{},{components:n})):o.createElement(h,r({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var u=2;u<i;u++)r[u]=n[u];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1774:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return r},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var o=n(2122),a=n(9756),i=(n(7294),n(3905)),r={title:"Command Line",sidebar_label:"05-20 Thu | Command Line",sidebar_position:2},l={unversionedId:"basics/command-line",id:"basics/command-line",isDocsHomePage:!1,title:"Command Line",description:"The file naming conventions detailed in the last session are copied over from the INLS 161 lectures and are fine. I follow web development recommendations, so my personal preferences are different. Here is a post about my file naming conventions.",source:"@site/docs/01-basics/02-command-line.md",sourceDirName:"01-basics",slug:"/basics/command-line",permalink:"/INLS161-2021-summer-1/docs/basics/command-line",editUrl:"https://github.com/ljonesdesign/INLS161-2021-summer-1/edit/main/docs/01-basics/02-command-line.md",version:"current",sidebar_label:"05-20 Thu | Command Line",sidebarPosition:2,frontMatter:{title:"Command Line",sidebar_label:"05-20 Thu | Command Line",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Basics Intro",permalink:"/INLS161-2021-summer-1/docs/basics/basics-intro"},next:{title:"SFTP and editors",permalink:"/INLS161-2021-summer-1/docs/basics/sftp-editors"}},s=[{value:"Eduroam or VPN",id:"eduroam-or-vpn",children:[]},{value:"Viewing your Public OPAL directory",id:"viewing-your-public-opal-directory",children:[]},{value:"Get to Know the Tilde",id:"get-to-know-the-tilde",children:[]},{value:"Learning Objectives",id:"learning-objectives",children:[{value:"To login to OPAL with on the Command Line",id:"to-login-to-opal-with-on-the-command-line",children:[]}]},{value:"Viewing Your Webpage",id:"viewing-your-webpage",children:[]},{value:"Task 01.04: Create a Directory",id:"task-0104-create-a-directory",children:[]},{value:"Helpful Links",id:"helpful-links",children:[]},{value:"Basics: Command Line Cheat Sheet",id:"basics-command-line-cheat-sheet",children:[]},{value:"Excellent YouTube Command line demos for Mac &amp; PC",id:"excellent-youtube-command-line-demos-for-mac--pc",children:[]},{value:"Extra File extension?",id:"extra-file-extension",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The file naming conventions detailed in the last session are copied over from the INLS 161 lectures and are fine. I follow web development recommendations, so my personal preferences are different. Here is a ",(0,i.kt)("a",{parentName:"p",href:"/blog/file-naming-conventions"},"post about my file naming conventions"),"."),(0,i.kt)("h2",{id:"eduroam-or-vpn"},"Eduroam or VPN"),(0,i.kt)("p",null,"Before we try to log into OPAL with a command line interface (CLI) you must have your VPN client installed and connected."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"vpn image",src:n(3893).Z})),(0,i.kt)("h2",{id:"viewing-your-public-opal-directory"},"Viewing your Public OPAL directory"),(0,i.kt)("h2",{id:"get-to-know-the-tilde"},"Get to Know the Tilde"),(0,i.kt)("p",null,"To view your ",(0,i.kt)("inlineCode",{parentName:"p"},"public_html")," file with a web browser, you need to use the ",(0,i.kt)("inlineCode",{parentName:"p"},"~")," character"),(0,i.kt)("p",null,"It's the ",(0,i.kt)("kbd",null,"shift + backtick")," under, or near, the ",(0,i.kt)("kbd",null,"esc")," key:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"tilde",src:n(9189).Z}),"."),(0,i.kt)("p",null,"Open a browser and replace your ",(0,i.kt)("strong",{parentName:"p"},"onyen")," with your personal onyen. Example: ",(0,i.kt)("strong",{parentName:"p"},"opal.ils.unc.edu/~kellyd.")," "),(0,i.kt)("p",null,"Mine is opal.ils.unc.edu/~lblakej: "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"browser with opal",src:n(874).Z})),(0,i.kt)("p",null,"I have an account and I have set my permissions, so you can see my site directory: ",(0,i.kt)("a",{parentName:"p",href:"https://opal.ils.unc.edu/~lblakej"},"https://opal.ils.unc.edu/~lblakej")),(0,i.kt)("p",null,"If you see ",(0,i.kt)("strong",{parentName:"p"},"Forbidden")," message, that means you have an account, but you have permission problems. Let me know in the Zoom chat if\nthis is that case for you. This semester, the permissions should have been set for you."),(0,i.kt)("p",null,"Darth Vader ",(0,i.kt)("strong",{parentName:"p"},"does not")," have an account on opal, so he ",(0,i.kt)("strong",{parentName:"p"},"can't be found"),": ",(0,i.kt)("a",{parentName:"p",href:"https://opal.ils.unc.edu/~darthv"},"https://opal.ils.unc.edu/~darthv")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"The requested URL /~darthv was not found on this server.\n")),(0,i.kt)("p",null,"There is nothing at the opal main page: ",(0,i.kt)("a",{parentName:"p",href:"https://opal.ils.unc.edu/"},"https://opal.ils.unc.edu/"),"; you will just see a blank browser window."),(0,i.kt)("h2",{id:"learning-objectives"},"Learning Objectives"),(0,i.kt)("p",null,"log into OPAL ",(0,i.kt)("inlineCode",{parentName:"p"},"ssh onyen@opal.ils.unc.edu")),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"create a directory named ",(0,i.kt)("inlineCode",{parentName:"li"},"task-screenshots")),(0,i.kt)("li",{parentName:"ol"},"Practice some basic LINUX skills")),(0,i.kt)("p",null,'When you create websites, you should verify your sites with Chrome and/or Firefox. At least use one of these to check/verify your coding. If you are only using Safari, then you are only seeing your site through a Mac "lens." If you are only using Microsoft Explorer or Edge, your are only seeing it as a "PC" user. Also, you need to understand that browsers "cache" pages to save network resources. So it may be necessary to view your website changes in private (Firefox) or incognito (Chrome) mode to see website updates.'),(0,i.kt)("h3",{id:"to-login-to-opal-with-on-the-command-line"},"To login to OPAL with on the Command Line"),(0,i.kt)("p",null,"You can log into your OPAL account with current permission settings. "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If you are curious about permissions, here is a permissions calculator to help you grasp the number system ",(0,i.kt)("a",{parentName:"p",href:"http://permissions-calculator.org/"},"Permissions Calculator"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Mac Users: Use Terminal"),(0,i.kt)("li",{parentName:"ul"},"PC Users: Use PowerShell or Command Prompt or GitBash")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"You need to be on eduroam to login on campus, and you need to have VPN and DUO installed to log in, if you don\u2019t have access to eduroam.")),(0,i.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The terminal password prompt does not give you feedback. You just have to type carefully and hit enter. If you mess up, it will give you a few more chances to get in. If you make a lot of mistakes, it will make you put in the ssh command again."))),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"type ",(0,i.kt)("inlineCode",{parentName:"li"},"ssh _***onyen**_@opal.ils.unc.edu  then <enter>"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"*Replace ",(0,i.kt)("em",{parentName:"strong"},(0,i.kt)("inlineCode",{parentName:"em"},"onyen")," and put in your ",(0,i.kt)("inlineCode",{parentName:"em"},"onyen"),"."))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},(0,i.kt)("em",{parentName:"strong"},"Example:")," "),(0,i.kt)("inlineCode",{parentName:"li"},"ssh smithj@opal.ils.unc.edu")))),(0,i.kt)("li",{parentName:"ol"},"Accept and Save the host key, if requested. (This is the encryption key that lets ITS identify you)."),(0,i.kt)("li",{parentName:"ol"},"You will be prompted for your ONYEN password. Enter the password at the prompt, which might be a key or a dot or a rectangle or a ",(0,i.kt)("inlineCode",{parentName:"li"},"$"),".")),(0,i.kt)("h2",{id:"viewing-your-webpage"},"Viewing Your Webpage"),(0,i.kt)("p",null,"After you have uploaded your files and set the correct permissions, your webpage will be viewable at ",(0,i.kt)("a",{parentName:"p",href:"https://opal.ils.unc.edu/~onyen/"},"https://opal.ils.unc.edu/~onyen/")," . This will take you to the index page in your public_html folder; you can also navigate directly to other pages or subfolders you've added, such as ",(0,i.kt)("a",{parentName:"p",href:"https://opal.ils.unc.edu/~lblakej/website-helps/"},"https://opal.ils.unc.edu/~lblakej/website-helps/")),(0,i.kt)("h2",{id:"task-0104-create-a-directory"},"Task 01.04: Create a Directory"),(0,i.kt)("p",null,"If not yet logged in to your OPAL account, use a terminal connection program and enter a temporary shell session at the command prompt (it should be $ in Unix)."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ssh onyen@opal.ils.unc.edu\n")),(0,i.kt)("p",null,"Change to your public_html directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd public_html\n")),(0,i.kt)("p",null,"Create a new subdirectory within public_html "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"mkdir task-screenshots")),(0,i.kt)("p",null,"You are now ready to use SFTP to place your screenshots in this directory."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Grading rubric:")," You must follow file naming conventions: ",(0,i.kt)("strong",{parentName:"p"},"NO SPACES"),"; no strange characters. Use hyphens or periods where you would have spaces. Try to stick with lowercase letters. After you have created your directory, open the related assignment and paste your link in the submission box."),(0,i.kt)("h2",{id:"helpful-links"},"Helpful Links"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://files.fosswire.com/2007/08/fwunixref.pdf"},"Fosswire Unix/Linux Command Reference")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/ljonesdesign/161-recitations/blob/master/docs/files/unc-unix-help.pdf"},"UNC ITS help sheet")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://lifehacker.com/a-command-line-primer-for-beginners-5633909"},"A Command Line Primer for Beginners"))),(0,i.kt)("h2",{id:"basics-command-line-cheat-sheet"},"Basics: Command Line Cheat Sheet"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Bash_(Unix_shell)"},"What is the Bash Shell?")),(0,i.kt)("h2",{id:"excellent-youtube-command-line-demos-for-mac--pc"},"Excellent YouTube Command line demos for Mac & PC"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"These are optional, but highly recommended if you are interested in pursuing any type of web development.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=aKRYQsKR46I"},"Absolute Beginner Guide to the Mac OS Terminal")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=sw9kdFka8rA"},"Command Line Interface Tutorial (with GitBash)"))),(0,i.kt)("p",null,"If you decide to download ",(0,i.kt)("a",{parentName:"p",href:"https://gitforwindows.org"},"git for windows")," to tryout GitBash, just install with all of the default items.  "),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The Git GUI will be installed, but you won't need that for this tutorial, and you probably will not ever use it. I don't ever use it. So that could be the one item that you uncheck and don't install.")),(0,i.kt)("p",null,"GitBash is the easiest way to get to play with command line tools like you would on a Mac. Git is another thing altogether, and this video does not get into git or github. It is also possible now to install ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"Linux Ubuntu as a Subsystem on Windows 10"),", but it is too complicated to include in this course."),(0,i.kt)("h2",{id:"extra-file-extension"},"Extra File extension?"),(0,i.kt)("p",null,"Today we will post some of your screenshots on OPAL. If you see an extra ",(0,i.kt)("inlineCode",{parentName:"p"},".PNG")," on your file, like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"lastname-firstname-vpn.png.PNG\n")),(0,i.kt)("p",null,"Then your file extensions are hidden on your laptop, and you added an extra file extension without realizing it. (The OPAL server does not hide extensions.)"),(0,i.kt)("p",null,"This will not really be an issue when you are coding with a robust text editor like ",(0,i.kt)("a",{parentName:"p",href:"https://atom.io/"},"Atom"),", or ",(0,i.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," as extensions will always show up in the sidebar of the app, and you can rename files in the sidebar. However, if you are curious about how to show or hide extensions, here are some videos:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=PoTah9YBG2Y"},"Windows help")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.youtube.com/watch?v=ylbme95jnEo"},"Mac Help"))))}p.isMDXComponent=!0},3893:function(e,t,n){"use strict";t.Z=n.p+"assets/images/active-vpn-example-6b29ced0093b513c5b8ca04e279b2092.png"},874:function(e,t,n){"use strict";t.Z=n.p+"assets/images/browser-opal-47c78d916b1f0b8682cd4e3124e5ff84.png"},9189:function(e,t,n){"use strict";t.Z=n.p+"assets/images/tilde-204c2e210a33617d88f4c5f18d6a829c.png"}}]);