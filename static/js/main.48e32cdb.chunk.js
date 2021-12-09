(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{15:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3TSdQ",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__3eQLT"}},16:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2nbMW",Modal:"Modal_Modal__1T08j"}},17:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__3wn5G",CloseBtn:"ImageGallery_CloseBtn__afuTb"}},20:function(e,t,a){e.exports={Button:"Button_Button__3Rd_H"}},22:function(e,t,a){e.exports={Loader:"Loader_Loader__1YHIa"}},24:function(e,t,a){e.exports={App:"App_App__YsujT"}},29:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(5),o=a.n(c),s=(a(29),a(3)),i=a(4),u=(a(19),a(6)),l=a.n(u),b=a(1);function m(e){var t=e.onFormSubmit,a=Object(n.useState)(""),r=Object(s.a)(a,2),c=r[0],o=r[1],u=function(){o("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("header",{className:l.a.Searchbar,children:Object(b.jsxs)("form",{className:l.a.SearchForm,onSubmit:function(e){if(e.preventDefault(),""===c.trim())return i.b.warn("Please specify your request!"),void u();t(c.toLowerCase().trim()),u()},children:[Object(b.jsx)("button",{type:"submit",className:l.a.SearchFormButton,children:Object(b.jsx)("span",{className:l.a.SearchFormButtonLabel,children:"Search"})}),Object(b.jsx)("input",{className:l.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:function(e){o(e.currentTarget.value)},value:c})]})}),Object(b.jsx)(i.a,{})]})}var j=a(13),h=a(15),p=a.n(h);var d=function(e){var t=e.webformatURL,a=e.largeImageURL,n=e.tags,r=e.onClickProps;return Object(b.jsx)("li",{className:p.a.ImageGalleryItem,onClick:function(e){r(a,n)},children:Object(b.jsx)("img",{className:p.a.ImageGalleryItemImage,src:t,alt:n,srcSet:a})})},f=a(16),O=a.n(f),g=document.getElementById("modal-root");function _(e){var t=e.onClose,a=e.children;Object(n.useEffect)((function(){return window.addEventListener("keydown",r),function(){window.removeEventListener("keydown",r)}}));var r=function(e){"Escape"===e.code&&t()};return Object(c.createPortal)(Object(b.jsx)("div",{className:O.a.Overlay,onClick:function(e){e.currentTarget===e.target&&t()},children:Object(b.jsx)("div",{className:O.a.Modal,children:a})}),g)}var x=a(9),y=a(10),S=a(12),I=a(11),v=a(20),B=a.n(v),w=function(e){Object(S.a)(a,e);var t=Object(I.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return Object(b.jsx)("button",{type:"submit",className:B.a.Button,onClick:this.props.onClick,children:Object(b.jsx)("span",{className:"button-label",children:"LoadMore"})})}}]),a}(n.Component),C=w,k=a(21),F=a.n(k),L=(a(51),a(22)),G=a.n(L),N=function(e){Object(S.a)(a,e);var t=Object(I.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(y.a)(a,[{key:"render",value:function(){return Object(b.jsx)("div",{className:G.a.Loader,children:Object(b.jsx)(F.a,{type:"Circles",color:"#3f51b5",height:150,width:150,timeout:3e3})})}}]),a}(n.Component),M=N,R=a(17),E=a.n(R),T=a(18),U=a.n(T),A=a(23);function P(){return(P=Object(A.a)(U.a.mark((function e(t,a){var n,r,c;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"23474268-70d851d8204f5902d9e83a665","https://pixabay.com/api/",n="?q=".concat(t,"&page=").concat(a,"&key=").concat("23474268-70d851d8204f5902d9e83a665","&image_type=photo&orientation=horizontal&per_page=12"),r="https://pixabay.com/api/"+n,e.next=6,fetch(r).then((function(e){return e.json()}));case 6:return c=e.sent,e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Q(e){var t=e.submitValue,a=Object(n.useState)([]),r=Object(s.a)(a,2),c=r[0],o=r[1],u=Object(n.useState)(""),l=Object(s.a)(u,2),m=l[0],h=l[1],p=Object(n.useState)(""),f=Object(s.a)(p,2),O=f[0],g=f[1],x=Object(n.useState)(1),y=Object(s.a)(x,2),S=y[0],I=y[1],v=Object(n.useState)(!1),B=Object(s.a)(v,2),w=B[0],k=B[1],F=Object(n.useState)(!1),L=Object(s.a)(F,2),G=L[0],N=L[1];Object(n.useEffect)((function(){""!==t&&(N(!0),function(e,t){return P.apply(this,arguments)}(t,S).then((function(e){1===S?(o(Object(j.a)(e.hits)),console.log(e.hits)):o([].concat(Object(j.a)(c),Object(j.a)(e.hits))),e.hits.length>=1?i.b.success("Search successfull!"):0===e.hits.length&&i.b.error("Oops, nothing found!")})).catch((function(e){i.b.error("Fetch error!"),console.log(e)})).finally((function(){return N(!1)})))}),[S,t]);var R=function(e){h(e)},T=function(){k(!w),h(""),g("")};return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("ul",{className:E.a.ImageGallery,children:[G&&Object(b.jsx)(M,{}),c.map((function(e){var t=e.id,a=e.webformatURL,n=e.largeImageURL,r=e.tags;return Object(b.jsx)(d,{webformatURL:a,largeImageURL:n,tags:r,onClickProps:R},t)})),0!==c.length&&Object(b.jsx)(C,{onClick:function(){I(S+1)}})]}),m&&Object(b.jsxs)(_,{onClose:T,children:[Object(b.jsx)("button",{type:"button",className:E.a.CloseBtn,onClick:T,children:"X"}),Object(b.jsx)("img",{src:m,alt:O})]})]})}var Y=a(24),q=a.n(Y);function H(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],r=t[1];return Object(b.jsxs)("div",{className:q.a.App,children:[Object(b.jsx)(m,{onFormSubmit:function(e){r(e)}}),Object(b.jsx)(Q,{submitValue:a})]})}o.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(H,{})}),document.getElementById("root"))},6:function(e,t,a){e.exports={Searchbar:"SearchBar_Searchbar__3bYy5",SearchForm:"SearchBar_SearchForm__2Iam_",SearchFormButton:"SearchBar_SearchFormButton__Sjn3Q",SearchFormButtonLabel:"SearchBar_SearchFormButtonLabel__1AuZR",SearchFormInput:"SearchBar_SearchFormInput__1bbGK"}}},[[53,1,2]]]);
//# sourceMappingURL=main.48e32cdb.chunk.js.map