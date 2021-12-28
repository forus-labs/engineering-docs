"use strict";(self.webpackChunkforus_labs_engineering_documentation=self.webpackChunkforus_labs_engineering_documentation||[]).push([[547],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return r?n.createElement(g,o(o({ref:t},p),{},{components:r})):n.createElement(g,o({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9631:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"pair-programming",title:"Pair Programming",sidebar_label:"Pair Programming"},s=void 0,c={unversionedId:"collaboration/pair-programming",id:"collaboration/pair-programming",title:"Pair Programming",description:"Useful tips for pair programming.",source:"@site/docs/collaboration/pair-programming.md",sourceDirName:"collaboration",slug:"/collaboration/pair-programming",permalink:"/docs/collaboration/pair-programming",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/collaboration/pair-programming.md",tags:[],version:"current",frontMatter:{id:"pair-programming",title:"Pair Programming",sidebar_label:"Pair Programming"},sidebar:"main",previous:{title:"Common Pull Request Issues",permalink:"/docs/collaboration/common-pull-request-issues"},next:{title:"Further Reading",permalink:"/docs/further-reading"}},p=[{value:"Environment",id:"environment",children:[],level:2},{value:"Interaction",id:"interaction",children:[],level:2}],u={toc:p};function m(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Useful tips for pair programming.")),(0,i.kt)("p",null,"Collated below is a non-exhaustive list of tips for pair programming. By collating these tips, it is our intention that\ndevelopers will be better equipped for pair programming."),(0,i.kt)("h2",{id:"environment"},"Environment"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have a comfortable and inviting environment."),(0,i.kt)("li",{parentName:"ul"},"Avoid esoteric desktop setups, i.e. custom keybindings and non-standard shells. Stick with the defaults."),(0,i.kt)("li",{parentName:"ul"},"Disable notifications, i.e. Discord messages, email pop-ups. Pairing with someone distracted by such notifications can be a frustrating experience.")),(0,i.kt)("h2",{id:"interaction"},"Interaction"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Have one developer drive and another navigate. The driver will mostly be typing while the navigator mostly discusses what to do."),(0,i.kt)("li",{parentName:"ul"},"Regularly switch between roles. As a rule of thumb, a switch should occur every ~15 minutes. If one person seems like engaged, switch roles."),(0,i.kt)("li",{parentName:"ul"},"Take frequent breaks. Recognize that people respond to pair programming in different ways and cannot last the entire day."),(0,i.kt)("li",{parentName:"ul"},"Do not be afraid to make and show mistakes. Some people are fearful that others will see all mistakes they make during pair programming.\nDemonstrate that everyone makes mistakes, show your mistakes and how they iteratively get fixed as you go."),(0,i.kt)("li",{parentName:"ul"},'Avoid closed discussions when there is a disagreement with an approach, e.g. "That\'s not good" or "I don\'t like it".\nThis will shut down someone and encourage the avoidance of sharing opinions or dreading pair programming.'),(0,i.kt)("li",{parentName:"ul"},'Ask open questions such as "What are the benefits and trade-offs of doing it this way?" or "Are there any alternatives that we can explore?".'),(0,i.kt)("li",{parentName:"ul"},"Moments of silence are perfectly acceptable."),(0,i.kt)("li",{parentName:"ul"},"Spend time together away from code. Build rapport, trust, laugh about things. Discussing ideas away from the code can sometimes\nhelp see the bigger picture.")))}m.isMDXComponent=!0}}]);