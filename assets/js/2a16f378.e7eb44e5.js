"use strict";(self.webpackChunkforus_labs_engineering_documentation=self.webpackChunkforus_labs_engineering_documentation||[]).push([[68],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=o,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return c},default:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],s={id:"common-pull-request-issues",title:"Common Pull Request Issues",sidebar_label:"Common Pull Request Issues"},l=void 0,u={unversionedId:"collaboration/common-pull-request-issues",id:"collaboration/common-pull-request-issues",title:"Common Pull Request Issues",description:"A non-exhaustive list of frequently encountered pull request issues.",source:"@site/docs/collaboration/common-pull-request-issues.md",sourceDirName:"collaboration",slug:"/collaboration/common-pull-request-issues",permalink:"/docs/collaboration/common-pull-request-issues",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/collaboration/common-pull-request-issues.md",tags:[],version:"current",frontMatter:{id:"common-pull-request-issues",title:"Common Pull Request Issues",sidebar_label:"Common Pull Request Issues"},sidebar:"main",previous:{title:"Reviewing a Pull Request",permalink:"/docs/collaboration/reviewing-a-pull-request"},next:{title:"Pair Programming",permalink:"/docs/collaboration/pair-programming"}},c=[{value:"Grammatical Mistakes and Awkward Phrasing in Documentation",id:"grammatical-mistakes-and-awkward-phrasing-in-documentation",children:[],level:2},{value:"Import Ordering",id:"import-ordering",children:[],level:2}],m={toc:c};function p(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"A non-exhaustive list of frequently encountered pull request issues.")),(0,i.kt)("p",null,"Collated below is a non-exhaustive list of frequently encountered pull request issues. By collating these issues, it is\nour intention that developers recognize what issues to look out for when performing a self-review."),(0,i.kt)("h2",{id:"grammatical-mistakes-and-awkward-phrasing-in-documentation"},"Grammatical Mistakes and Awkward Phrasing in Documentation"),(0,i.kt)("p",null,"One common issue is grammatical mistakes and awkward phrasing in the documentation of code. To minimize the occurrence of\nthese issues, it is recommended to perform the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consider using a grammar checker such as Grammarly or switching to Android Studio/IntelliJ which contain a built-in grammar checker"),(0,i.kt)("li",{parentName:"ul"},"Refer to existing documentation in the same project. It is likely that the project contains similar abstractions. Emulating\nthe existing documentation is a great method of ensuring that documentation is consistent."),(0,i.kt)("li",{parentName:"ul"},"Refer to how a language's standard library phrases similar concepts. Using phrasing and terminology consistent with the language's\nreduces the cognitive burden of those reading the documentation"),(0,i.kt)("li",{parentName:"ul"},"Repeatedly read through the documentation.")),(0,i.kt)("p",null,"See Google's ",(0,i.kt)("a",{parentName:"p",href:"https://developers.google.com/tech-writing"},"technical writing guide")," for more information."),(0,i.kt)("h2",{id:"import-ordering"},"Import Ordering"),(0,i.kt)("p",null,"Most IDEs place suggested import statements either at the top of the file or in alphabetical order. Neither of which confirm\nto our style guide. "),(0,i.kt)("p",null,"If the project uses Dart/Flutter, consider running the following command to sort all import statements:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"flutter pub run import_sorter:main\n")))}p.isMDXComponent=!0}}]);