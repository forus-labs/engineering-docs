"use strict";(self.webpackChunkforus_labs_engineering_docs=self.webpackChunkforus_labs_engineering_docs||[]).push([[942],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4774:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={id:"development-etiquette",title:"Development Etiquette",sidebar_label:"Development Etiquette"},s=void 0,u={unversionedId:"collaboration/development-etiquette",id:"collaboration/development-etiquette",title:"Development Etiquette",description:"A guide to good development etiquette.",source:"@site/docs/collaboration/development-etiquette.md",sourceDirName:"collaboration",slug:"/collaboration/development-etiquette",permalink:"/docs/collaboration/development-etiquette",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/collaboration/development-etiquette.md",tags:[],version:"current",frontMatter:{id:"development-etiquette",title:"Development Etiquette",sidebar_label:"Development Etiquette"},sidebar:"main",previous:{title:"Git Gud",permalink:"/docs/collaboration/git-gud"},next:{title:"Crafting a Good Pull Request",permalink:"/docs/collaboration/crafting-a-good-pull-request"}},c=[{value:"Soliciting Feedback",id:"soliciting-feedback",children:[],level:2},{value:"The Definition of &quot;Done&quot;",id:"the-definition-of-done",children:[],level:2}],p={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A guide to good development etiquette.")),(0,i.kt)("p",null,"This document contains engineering conventions and practices that we consider to be good practice.\nIn essence, the conventions and practices outlined in this document can be summarised as ",(0,i.kt)("em",{parentName:"p"},'"Work hard to make things easier"'),"."),(0,i.kt)("h2",{id:"soliciting-feedback"},"Soliciting Feedback"),(0,i.kt)("p",null,"During verbal discussions on a feature, an accompanying draft pull request should be submitted. It is common for both\nparties to forget the contents of the discussion. By inscribing important sections of the discussion in the draft pull\nrequest, it becomes an indispensable archive for future reference."),(0,i.kt)("p",null,"It is important to note that a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"draft"))," pull request should be created instead of a ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("em",{parentName:"strong"},"normal"))," pull request. This helps\nother developers distinguish between pull requests soliciting feedback and those ready for review."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Draft Pull Request Button",src:n(5242).Z})),(0,i.kt)("p",{class:"caption"},"How to create a draft pull request"),(0,i.kt)("h2",{id:"the-definition-of-done"},'The Definition of "Done"'),(0,i.kt)("p",null,"The definition of ",(0,i.kt)("em",{parentName:"p"},'"Done"')," is highly subjective especially in the context of pull requests. By providing a standardised\ndefinition of ",(0,i.kt)("em",{parentName:"p"},'"Done"'),", we seek to avoid misunderstandings in what constitutes a pull request that is ready for review."),(0,i.kt)("p",null,"By our definition, a ",(0,i.kt)("em",{parentName:"p"},'"Done"')," pull request satisfies all the following criteria:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"It is feature-complete"),(0,i.kt)("li",{parentName:"ul"},"It is thoroughly tested and nothing is expected to break"),(0,i.kt)("li",{parentName:"ul"},"It is prepared cleanly and thoroughly to the best of the author's ability")),(0,i.kt)("p",null,"Sometimes, developers may be overwhelmed by the pressure to ship pull requests fast and skip the last two points. However,\nthis is counterproductive and often leads to a net decrease in development velocity. The decrease in velocity can be attributed\nto the latency of the constant ping-ponging between author and reviewer. Furthermore, it can be a frustrating experience\nfor the reviewer."),(0,i.kt)("p",null,"To avoid such situations, it is recommended for developers to perform a cursory self-review at least once. A self-review\nshould address common mistakes such as grammatical and spelling errors."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"/docs/collaboration/common-pull-request-issues"},"common pull request issues")," for more information."))}d.isMDXComponent=!0},5242:function(e,t,n){t.Z=n.p+"assets/images/draft-pull-requests-40f204a8bb1fddd383126685345b182c.png"}}]);