"use strict";(self.webpackChunkforus_labs_engineering_docs=self.webpackChunkforus_labs_engineering_docs||[]).push([[253],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return s}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function A(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?A(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):A(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},A=Object.keys(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var A=Object.getOwnPropertySymbols(e);for(r=0;r<A.length;r++)n=A[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,A=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),s=a,m=c["".concat(i,".").concat(s)]||c[s]||d[s]||A;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var A=n.length,l=new Array(A);l[0]=c;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<A;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1646:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return p},default:function(){return c}});var r=n(7462),a=n(3366),A=(n(7294),n(3905)),l=["components"],o={id:"git-gud",title:"Git Gud",sidebar_label:"Git Gud"},i=void 0,u={unversionedId:"collaboration/git-gud",id:"collaboration/git-gud",title:"Git Gud",description:"An introduction to Forus Labs' Git workflow.",source:"@site/docs/collaboration/git-gud.md",sourceDirName:"collaboration",slug:"/collaboration/git-gud",permalink:"/docs/collaboration/git-gud",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/collaboration/git-gud.md",tags:[],version:"current",frontMatter:{id:"git-gud",title:"Git Gud",sidebar_label:"Git Gud"},sidebar:"main",previous:{title:"The First Mile",permalink:"/docs/getting-started/the-first-mile"},next:{title:"Development Etiquette",permalink:"/docs/collaboration/development-etiquette"}},p=[{value:"The <code>master</code> Branch",id:"the-master-branch",children:[],level:2},{value:"Ephemeral Branches",id:"ephemeral-branches",children:[],level:2}],d={toc:p};function c(e){var t=e.components,o=(0,a.Z)(e,l);return(0,A.kt)("wrapper",(0,r.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,A.kt)("p",null,(0,A.kt)("em",{parentName:"p"},"An introduction to Forus Labs' Git workflow.")),(0,A.kt)("p",null,"Forus Labs' Git workflow is modelled after the ",(0,A.kt)("a",{parentName:"p",href:"https://trunkbaseddevelopment.com/"},"trunk-based development model")," albeit with a few adjustments."),(0,A.kt)("h2",{id:"the-master-branch"},"The ",(0,A.kt)("inlineCode",{parentName:"h2"},"master")," Branch"),(0,A.kt)("p",null,"Each Git repository contains a permanent ",(0,A.kt)("inlineCode",{parentName:"p"},"master")," branch with production-ready code. During deployment to production,\na commit on ",(0,A.kt)("inlineCode",{parentName:"p"},"master")," is tagged and a corresponding GitHub release is created. This tagged commit is then subsequently deployed."),(0,A.kt)("h2",{id:"ephemeral-branches"},"Ephemeral Branches"),(0,A.kt)("p",null,"Ephemeral branches contain new features and improvements that are being worked on. As the name suggests, ephemeral branches\nare temporary, short-lived branches which aid in the concurrent development of new features. They are created from either ",(0,A.kt)("inlineCode",{parentName:"p"},"master"),"\nor other ephemeral branches and always merged back into ",(0,A.kt)("inlineCode",{parentName:"p"},"master"),"."),(0,A.kt)("p",null,(0,A.kt)("img",{alt:"Branching Model",src:n(2446).Z})),(0,A.kt)("p",{class:"caption"},"Forus Labs' Git workflow"),(0,A.kt)("p",null,"There are two different types of ephemeral branches:"),(0,A.kt)("table",null,(0,A.kt)("thead",{parentName:"table"},(0,A.kt)("tr",{parentName:"thead"},(0,A.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,A.kt)("th",{parentName:"tr",align:"left"},"Prefix"),(0,A.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,A.kt)("tbody",{parentName:"table"},(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:"left"},"feature"),(0,A.kt)("td",{parentName:"tr",align:"left"},(0,A.kt)("inlineCode",{parentName:"td"},"feature/...")),(0,A.kt)("td",{parentName:"tr",align:"left"},"contains new features and enhancements")),(0,A.kt)("tr",{parentName:"tbody"},(0,A.kt)("td",{parentName:"tr",align:"left"},"fix"),(0,A.kt)("td",{parentName:"tr",align:"left"},(0,A.kt)("inlineCode",{parentName:"td"},"fix/...")),(0,A.kt)("td",{parentName:"tr",align:"left"},"contains bug fixes")))),(0,A.kt)("p",null,"An ephemeral branch name starts with a prefix, followed by a description. The description should be a short summary of what\nchanges the branch contains. Spaces in the description are replaced with hyphens."),(0,A.kt)("p",null,"For example, an ephemeral branch that adds laser beams should be named ",(0,A.kt)("inlineCode",{parentName:"p"},"feature/laser-beams")," while a branch that fixes exploding\nbuttons should be named ",(0,A.kt)("inlineCode",{parentName:"p"},"fix/exploding-buttons"),"."),(0,A.kt)("p",null,"To request feedback on a feature's progress or when a feature is ready, open a pull request. The pull request will then be\ncommented on and reviewed. If the pull request is approved, the ephemeral branch is merged into ",(0,A.kt)("inlineCode",{parentName:"p"},"master")," by the reviewer\nand deleted by the pull request author."))}c.isMDXComponent=!0},2446:function(e,t){t.Z="data:image/png;base64,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"}}]);