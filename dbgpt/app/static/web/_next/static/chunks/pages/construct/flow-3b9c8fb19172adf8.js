(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[657],{69274:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(42096),o=n(38497),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"},l=n(55032),i=o.forwardRef(function(e,t){return o.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:a}))})},72097:function(e,t,n){"use strict";n.d(t,{Z:function(){return i}});var r=n(42096),o=n(38497),a={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"}}]},name:"left",theme:"outlined"},l=n(55032),i=o.forwardRef(function(e,t){return o.createElement(l.Z,(0,r.Z)({},e,{ref:t,icon:a}))})},42041:function(e,t,n){"use strict";function r(e){return["small","middle","large"].includes(e)}function o(e){return!!e&&"number"==typeof e&&!Number.isNaN(e)}n.d(t,{T:function(){return o},n:function(){return r}})},87674:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(38497),o=n(26869),a=n.n(o),l=n(63346),i=n(38083),s=n(60848),c=n(90102),d=n(74934);let u=e=>{let{componentCls:t,sizePaddingEdgeHorizontal:n,colorSplit:r,lineWidth:o,textPaddingInline:a,orientationMargin:l,verticalMarginInline:c}=e;return{[t]:Object.assign(Object.assign({},(0,s.Wf)(e)),{borderBlockStart:`${(0,i.bf)(o)} solid ${r}`,"&-vertical":{position:"relative",top:"-0.06em",display:"inline-block",height:"0.9em",marginInline:c,marginBlock:0,verticalAlign:"middle",borderTop:0,borderInlineStart:`${(0,i.bf)(o)} solid ${r}`},"&-horizontal":{display:"flex",clear:"both",width:"100%",minWidth:"100%",margin:`${(0,i.bf)(e.dividerHorizontalGutterMargin)} 0`},[`&-horizontal${t}-with-text`]:{display:"flex",alignItems:"center",margin:`${(0,i.bf)(e.dividerHorizontalWithTextGutterMargin)} 0`,color:e.colorTextHeading,fontWeight:500,fontSize:e.fontSizeLG,whiteSpace:"nowrap",textAlign:"center",borderBlockStart:`0 ${r}`,"&::before, &::after":{position:"relative",width:"50%",borderBlockStart:`${(0,i.bf)(o)} solid transparent`,borderBlockStartColor:"inherit",borderBlockEnd:0,transform:"translateY(50%)",content:"''"}},[`&-horizontal${t}-with-text-left`]:{"&::before":{width:`calc(${l} * 100%)`},"&::after":{width:`calc(100% - ${l} * 100%)`}},[`&-horizontal${t}-with-text-right`]:{"&::before":{width:`calc(100% - ${l} * 100%)`},"&::after":{width:`calc(${l} * 100%)`}},[`${t}-inner-text`]:{display:"inline-block",paddingBlock:0,paddingInline:a},"&-dashed":{background:"none",borderColor:r,borderStyle:"dashed",borderWidth:`${(0,i.bf)(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dashed`]:{"&::before, &::after":{borderStyle:"dashed none none"}},[`&-vertical${t}-dashed`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},"&-dotted":{background:"none",borderColor:r,borderStyle:"dotted",borderWidth:`${(0,i.bf)(o)} 0 0`},[`&-horizontal${t}-with-text${t}-dotted`]:{"&::before, &::after":{borderStyle:"dotted none none"}},[`&-vertical${t}-dotted`]:{borderInlineStartWidth:o,borderInlineEnd:0,borderBlockStart:0,borderBlockEnd:0},[`&-plain${t}-with-text`]:{color:e.colorText,fontWeight:"normal",fontSize:e.fontSize},[`&-horizontal${t}-with-text-left${t}-no-default-orientation-margin-left`]:{"&::before":{width:0},"&::after":{width:"100%"},[`${t}-inner-text`]:{paddingInlineStart:n}},[`&-horizontal${t}-with-text-right${t}-no-default-orientation-margin-right`]:{"&::before":{width:"100%"},"&::after":{width:0},[`${t}-inner-text`]:{paddingInlineEnd:n}}})}};var m=(0,c.I$)("Divider",e=>{let t=(0,d.IX)(e,{dividerHorizontalWithTextGutterMargin:e.margin,dividerHorizontalGutterMargin:e.marginLG,sizePaddingEdgeHorizontal:0});return[u(t)]},e=>({textPaddingInline:"1em",orientationMargin:.05,verticalMarginInline:e.marginXS}),{unitless:{orientationMargin:!0}}),p=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n},f=e=>{let{getPrefixCls:t,direction:n,divider:o}=r.useContext(l.E_),{prefixCls:i,type:s="horizontal",orientation:c="center",orientationMargin:d,className:u,rootClassName:f,children:g,dashed:h,variant:b="solid",plain:v,style:x}=e,y=p(e,["prefixCls","type","orientation","orientationMargin","className","rootClassName","children","dashed","variant","plain","style"]),j=t("divider",i),[w,$,O]=m(j),C=!!g,k="left"===c&&null!=d,N="right"===c&&null!=d,E=a()(j,null==o?void 0:o.className,$,O,`${j}-${s}`,{[`${j}-with-text`]:C,[`${j}-with-text-${c}`]:C,[`${j}-dashed`]:!!h,[`${j}-${b}`]:"solid"!==b,[`${j}-plain`]:!!v,[`${j}-rtl`]:"rtl"===n,[`${j}-no-default-orientation-margin-left`]:k,[`${j}-no-default-orientation-margin-right`]:N},u,f),S=r.useMemo(()=>"number"==typeof d?d:/^\d+$/.test(d)?Number(d):d,[d]),Z=Object.assign(Object.assign({},k&&{marginLeft:S}),N&&{marginRight:S});return w(r.createElement("div",Object.assign({className:E,style:Object.assign(Object.assign({},null==o?void 0:o.style),x)},y,{role:"separator"}),g&&"vertical"!==s&&r.createElement("span",{className:`${j}-inner-text`,style:Z},g)))}},13419:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var r=n(38497),o=n(71836),a=n(26869),l=n.n(a),i=n(77757),s=n(55598),c=n(63346),d=n(62971),u=n(4558),m=n(74156),p=n(27691),f=n(5496),g=n(61261),h=n(44306),b=n(83387),v=n(90102);let x=e=>{let{componentCls:t,iconCls:n,antCls:r,zIndexPopup:o,colorText:a,colorWarning:l,marginXXS:i,marginXS:s,fontSize:c,fontWeightStrong:d,colorTextHeading:u}=e;return{[t]:{zIndex:o,[`&${r}-popover`]:{fontSize:c},[`${t}-message`]:{marginBottom:s,display:"flex",flexWrap:"nowrap",alignItems:"start",[`> ${t}-message-icon ${n}`]:{color:l,fontSize:c,lineHeight:1,marginInlineEnd:s},[`${t}-title`]:{fontWeight:d,color:u,"&:only-child":{fontWeight:"normal"}},[`${t}-description`]:{marginTop:i,color:a}},[`${t}-buttons`]:{textAlign:"end",whiteSpace:"nowrap",button:{marginInlineStart:s}}}}};var y=(0,v.I$)("Popconfirm",e=>x(e),e=>{let{zIndexPopupBase:t}=e;return{zIndexPopup:t+60}},{resetStyle:!1}),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let w=e=>{let{prefixCls:t,okButtonProps:n,cancelButtonProps:a,title:l,description:i,cancelText:s,okText:d,okType:b="primary",icon:v=r.createElement(o.Z,null),showCancel:x=!0,close:y,onConfirm:j,onCancel:w,onPopupClick:$}=e,{getPrefixCls:O}=r.useContext(c.E_),[C]=(0,g.Z)("Popconfirm",h.Z.Popconfirm),k=(0,m.Z)(l),N=(0,m.Z)(i);return r.createElement("div",{className:`${t}-inner-content`,onClick:$},r.createElement("div",{className:`${t}-message`},v&&r.createElement("span",{className:`${t}-message-icon`},v),r.createElement("div",{className:`${t}-message-text`},k&&r.createElement("div",{className:`${t}-title`},k),N&&r.createElement("div",{className:`${t}-description`},N))),r.createElement("div",{className:`${t}-buttons`},x&&r.createElement(p.ZP,Object.assign({onClick:w,size:"small"},a),s||(null==C?void 0:C.cancelText)),r.createElement(u.Z,{buttonProps:Object.assign(Object.assign({size:"small"},(0,f.nx)(b)),n),actionFn:j,close:y,prefixCls:O("btn"),quitOnNullishReturnValue:!0,emitEvent:!0},d||(null==C?void 0:C.okText))))};var $=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let O=r.forwardRef((e,t)=>{var n,a;let{prefixCls:u,placement:m="top",trigger:p="click",okType:f="primary",icon:g=r.createElement(o.Z,null),children:h,overlayClassName:b,onOpenChange:v,onVisibleChange:x}=e,j=$(e,["prefixCls","placement","trigger","okType","icon","children","overlayClassName","onOpenChange","onVisibleChange"]),{getPrefixCls:O}=r.useContext(c.E_),[C,k]=(0,i.Z)(!1,{value:null!==(n=e.open)&&void 0!==n?n:e.visible,defaultValue:null!==(a=e.defaultOpen)&&void 0!==a?a:e.defaultVisible}),N=(e,t)=>{k(e,!0),null==x||x(e),null==v||v(e,t)},E=O("popconfirm",u),S=l()(E,b),[Z]=y(E);return Z(r.createElement(d.Z,Object.assign({},(0,s.Z)(j,["title"]),{trigger:p,placement:m,onOpenChange:(t,n)=>{let{disabled:r=!1}=e;r||N(t,n)},open:C,ref:t,overlayClassName:S,content:r.createElement(w,Object.assign({okType:f,icon:g},e,{prefixCls:E,close:e=>{N(!1,e)},onConfirm:t=>{var n;return null===(n=e.onConfirm)||void 0===n?void 0:n.call(void 0,t)},onCancel:t=>{var n;N(!1,t),null===(n=e.onCancel)||void 0===n||n.call(void 0,t)}})),"data-popover-inject":!0}),h))});O._InternalPanelDoNotUseOrYouWillBeFired=e=>{let{prefixCls:t,placement:n,className:o,style:a}=e,i=j(e,["prefixCls","placement","className","style"]),{getPrefixCls:s}=r.useContext(c.E_),d=s("popconfirm",t),[u]=y(d);return u(r.createElement(b.ZP,{placement:n,className:l()(d,o),style:a,content:r.createElement(w,Object.assign({prefixCls:d},i))}))};var C=O},10755:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(38497),o=n(26869),a=n.n(o),l=n(10469),i=n(42041),s=n(63346),c=n(80214);let d=r.createContext({latestIndex:0}),u=d.Provider;var m=e=>{let{className:t,index:n,children:o,split:a,style:l}=e,{latestIndex:i}=r.useContext(d);return null==o?null:r.createElement(r.Fragment,null,r.createElement("div",{className:t,style:l},o),n<i&&a&&r.createElement("span",{className:`${t}-split`},a))},p=n(26578),f=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let g=r.forwardRef((e,t)=>{var n,o,c;let{getPrefixCls:d,space:g,direction:h}=r.useContext(s.E_),{size:b=null!==(n=null==g?void 0:g.size)&&void 0!==n?n:"small",align:v,className:x,rootClassName:y,children:j,direction:w="horizontal",prefixCls:$,split:O,style:C,wrap:k=!1,classNames:N,styles:E}=e,S=f(e,["size","align","className","rootClassName","children","direction","prefixCls","split","style","wrap","classNames","styles"]),[Z,_]=Array.isArray(b)?b:[b,b],I=(0,i.n)(_),P=(0,i.n)(Z),z=(0,i.T)(_),T=(0,i.T)(Z),B=(0,l.Z)(j,{keepEmpty:!0}),M=void 0===v&&"horizontal"===w?"center":v,R=d("space",$),[W,H,A]=(0,p.Z)(R),D=a()(R,null==g?void 0:g.className,H,`${R}-${w}`,{[`${R}-rtl`]:"rtl"===h,[`${R}-align-${M}`]:M,[`${R}-gap-row-${_}`]:I,[`${R}-gap-col-${Z}`]:P},x,y,A),F=a()(`${R}-item`,null!==(o=null==N?void 0:N.item)&&void 0!==o?o:null===(c=null==g?void 0:g.classNames)||void 0===c?void 0:c.item),L=0,K=B.map((e,t)=>{var n,o;null!=e&&(L=t);let a=(null==e?void 0:e.key)||`${F}-${t}`;return r.createElement(m,{className:F,key:a,index:t,split:O,style:null!==(n=null==E?void 0:E.item)&&void 0!==n?n:null===(o=null==g?void 0:g.styles)||void 0===o?void 0:o.item},e)}),G=r.useMemo(()=>({latestIndex:L}),[L]);if(0===B.length)return null;let U={};return k&&(U.flexWrap="wrap"),!P&&T&&(U.columnGap=Z),!I&&z&&(U.rowGap=_),W(r.createElement("div",Object.assign({ref:t,className:D,style:Object.assign(Object.assign(Object.assign({},U),null==g?void 0:g.style),C)},S),r.createElement(u,{value:G},K)))});g.Compact=c.ZP;var h=g},36647:function(e,t){"use strict";t.Z=e=>({[e.componentCls]:{[`${e.antCls}-motion-collapse-legacy`]:{overflow:"hidden","&-active":{transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}},[`${e.antCls}-motion-collapse`]:{overflow:"hidden",transition:`height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`}}})},33445:function(e,t,n){"use strict";n.d(t,{Fm:function(){return f}});var r=n(38083),o=n(60234);let a=new r.E4("antMoveDownIn",{"0%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),l=new r.E4("antMoveDownOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, 100%, 0)",transformOrigin:"0 0",opacity:0}}),i=new r.E4("antMoveLeftIn",{"0%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),s=new r.E4("antMoveLeftOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(-100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),c=new r.E4("antMoveRightIn",{"0%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),d=new r.E4("antMoveRightOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(100%, 0, 0)",transformOrigin:"0 0",opacity:0}}),u=new r.E4("antMoveUpIn",{"0%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0},"100%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1}}),m=new r.E4("antMoveUpOut",{"0%":{transform:"translate3d(0, 0, 0)",transformOrigin:"0 0",opacity:1},"100%":{transform:"translate3d(0, -100%, 0)",transformOrigin:"0 0",opacity:0}}),p={"move-up":{inKeyframes:u,outKeyframes:m},"move-down":{inKeyframes:a,outKeyframes:l},"move-left":{inKeyframes:i,outKeyframes:s},"move-right":{inKeyframes:c,outKeyframes:d}},f=(e,t)=>{let{antCls:n}=e,r=`${n}-${t}`,{inKeyframes:a,outKeyframes:l}=p[t];return[(0,o.R)(r,a,l,e.motionDurationMid),{[`
        ${r}-enter,
        ${r}-appear
      `]:{opacity:0,animationTimingFunction:e.motionEaseOutCirc},[`${r}-leave`]:{animationTimingFunction:e.motionEaseInOutCirc}}]}},49030:function(e,t,n){"use strict";n.d(t,{Z:function(){return Z}});var r=n(38497),o=n(26869),a=n.n(o),l=n(55598),i=n(55853),s=n(35883),c=n(55091),d=n(37243),u=n(63346),m=n(38083),p=n(51084),f=n(60848),g=n(74934),h=n(90102);let b=e=>{let{paddingXXS:t,lineWidth:n,tagPaddingHorizontal:r,componentCls:o,calc:a}=e,l=a(r).sub(n).equal(),i=a(t).sub(n).equal();return{[o]:Object.assign(Object.assign({},(0,f.Wf)(e)),{display:"inline-block",height:"auto",marginInlineEnd:e.marginXS,paddingInline:l,fontSize:e.tagFontSize,lineHeight:e.tagLineHeight,whiteSpace:"nowrap",background:e.defaultBg,border:`${(0,m.bf)(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,borderRadius:e.borderRadiusSM,opacity:1,transition:`all ${e.motionDurationMid}`,textAlign:"start",position:"relative",[`&${o}-rtl`]:{direction:"rtl"},"&, a, a:hover":{color:e.defaultColor},[`${o}-close-icon`]:{marginInlineStart:i,fontSize:e.tagIconSize,color:e.colorTextDescription,cursor:"pointer",transition:`all ${e.motionDurationMid}`,"&:hover":{color:e.colorTextHeading}},[`&${o}-has-color`]:{borderColor:"transparent",[`&, a, a:hover, ${e.iconCls}-close, ${e.iconCls}-close:hover`]:{color:e.colorTextLightSolid}},"&-checkable":{backgroundColor:"transparent",borderColor:"transparent",cursor:"pointer",[`&:not(${o}-checkable-checked):hover`]:{color:e.colorPrimary,backgroundColor:e.colorFillSecondary},"&:active, &-checked":{color:e.colorTextLightSolid},"&-checked":{backgroundColor:e.colorPrimary,"&:hover":{backgroundColor:e.colorPrimaryHover}},"&:active":{backgroundColor:e.colorPrimaryActive}},"&-hidden":{display:"none"},[`> ${e.iconCls} + span, > span + ${e.iconCls}`]:{marginInlineStart:l}}),[`${o}-borderless`]:{borderColor:"transparent",background:e.tagBorderlessBg}}},v=e=>{let{lineWidth:t,fontSizeIcon:n,calc:r}=e,o=e.fontSizeSM,a=(0,g.IX)(e,{tagFontSize:o,tagLineHeight:(0,m.bf)(r(e.lineHeightSM).mul(o).equal()),tagIconSize:r(n).sub(r(t).mul(2)).equal(),tagPaddingHorizontal:8,tagBorderlessBg:e.defaultBg});return a},x=e=>({defaultBg:new p.C(e.colorFillQuaternary).onBackground(e.colorBgContainer).toHexString(),defaultColor:e.colorText});var y=(0,h.I$)("Tag",e=>{let t=v(e);return b(t)},x),j=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let w=r.forwardRef((e,t)=>{let{prefixCls:n,style:o,className:l,checked:i,onChange:s,onClick:c}=e,d=j(e,["prefixCls","style","className","checked","onChange","onClick"]),{getPrefixCls:m,tag:p}=r.useContext(u.E_),f=m("tag",n),[g,h,b]=y(f),v=a()(f,`${f}-checkable`,{[`${f}-checkable-checked`]:i},null==p?void 0:p.className,l,h,b);return g(r.createElement("span",Object.assign({},d,{ref:t,style:Object.assign(Object.assign({},o),null==p?void 0:p.style),className:v,onClick:e=>{null==s||s(!i),null==c||c(e)}})))});var $=n(86553);let O=e=>(0,$.Z)(e,(t,n)=>{let{textColor:r,lightBorderColor:o,lightColor:a,darkColor:l}=n;return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:r,background:a,borderColor:o,"&-inverse":{color:e.colorTextLightSolid,background:l,borderColor:l},[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}});var C=(0,h.bk)(["Tag","preset"],e=>{let t=v(e);return O(t)},x);let k=(e,t,n)=>{let r=function(e){if("string"!=typeof e)return e;let t=e.charAt(0).toUpperCase()+e.slice(1);return t}(n);return{[`${e.componentCls}${e.componentCls}-${t}`]:{color:e[`color${n}`],background:e[`color${r}Bg`],borderColor:e[`color${r}Border`],[`&${e.componentCls}-borderless`]:{borderColor:"transparent"}}}};var N=(0,h.bk)(["Tag","status"],e=>{let t=v(e);return[k(t,"success","Success"),k(t,"processing","Info"),k(t,"error","Error"),k(t,"warning","Warning")]},x),E=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};let S=r.forwardRef((e,t)=>{let{prefixCls:n,className:o,rootClassName:m,style:p,children:f,icon:g,color:h,onClose:b,bordered:v=!0,visible:x}=e,j=E(e,["prefixCls","className","rootClassName","style","children","icon","color","onClose","bordered","visible"]),{getPrefixCls:w,direction:$,tag:O}=r.useContext(u.E_),[k,S]=r.useState(!0),Z=(0,l.Z)(j,["closeIcon","closable"]);r.useEffect(()=>{void 0!==x&&S(x)},[x]);let _=(0,i.o2)(h),I=(0,i.yT)(h),P=_||I,z=Object.assign(Object.assign({backgroundColor:h&&!P?h:void 0},null==O?void 0:O.style),p),T=w("tag",n),[B,M,R]=y(T),W=a()(T,null==O?void 0:O.className,{[`${T}-${h}`]:P,[`${T}-has-color`]:h&&!P,[`${T}-hidden`]:!k,[`${T}-rtl`]:"rtl"===$,[`${T}-borderless`]:!v},o,m,M,R),H=e=>{e.stopPropagation(),null==b||b(e),e.defaultPrevented||S(!1)},[,A]=(0,s.Z)((0,s.w)(e),(0,s.w)(O),{closable:!1,closeIconRender:e=>{let t=r.createElement("span",{className:`${T}-close-icon`,onClick:H},e);return(0,c.wm)(e,t,e=>({onClick:t=>{var n;null===(n=null==e?void 0:e.onClick)||void 0===n||n.call(e,t),H(t)},className:a()(null==e?void 0:e.className,`${T}-close-icon`)}))}}),D="function"==typeof j.onClick||f&&"a"===f.type,F=g||null,L=F?r.createElement(r.Fragment,null,F,f&&r.createElement("span",null,f)):f,K=r.createElement("span",Object.assign({},Z,{ref:t,className:W,style:z}),L,A,_&&r.createElement(C,{key:"preset",prefixCls:T}),I&&r.createElement(N,{key:"status",prefixCls:T}));return B(D?r.createElement(d.Z,{component:"Tag"},K):K)});S.CheckableTag=w;var Z=S},31988:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/construct/flow",function(){return n(18419)}])},76592:function(e,t,n){"use strict";var r=n(96469),o=n(97818),a=n(27691),l=n(26869),i=n.n(l),s=n(56841);t.Z=function(e){let{className:t,error:n,description:l,refresh:c}=e,{t:d}=(0,s.$G)();return(0,r.jsx)(o.Z,{image:"/empty.png",imageStyle:{width:320,height:196,margin:"0 auto",maxWidth:"100%",maxHeight:"100%"},className:i()("flex items-center justify-center flex-col h-full w-full",t),description:n?(0,r.jsx)(a.ZP,{type:"primary",onClick:c,children:d("try_again")}):null!=l?l:d("no_data")})}},26953:function(e,t,n){"use strict";var r=n(96469),o=n(67901),a=n(42834),l=n(38497);t.Z=e=>{let{width:t,height:n,scene:i}=e,s=(0,l.useCallback)(()=>{switch(i){case"chat_knowledge":return o.je;case"chat_with_db_execute":return o.zM;case"chat_excel":return o.DL;case"chat_with_db_qa":case"chat_dba":return o.RD;case"chat_dashboard":return o.In;case"chat_agent":return o.si;case"chat_normal":return o.O7;default:return}},[i]);return(0,r.jsx)(a.Z,{className:"w-".concat(t||7," h-").concat(n||7),component:s()})}},52903:function(e,t,n){"use strict";n.d(t,{TH:function(){return g},ZS:function(){return h}});var r=n(96469),o=n(52896),a=n(60205),l=n(87674),i=n(85851),s=n(80335),c=n(26869),d=n.n(c),u=n(83930),m=n(23852),p=n.n(m);n(38497);var f=n(26953);n(96768);let g=e=>{let{onClick:t,Icon:n="/pictures/card_chat.png",text:o=(0,u.t)("start_chat")}=e;return"string"==typeof n&&(n=(0,r.jsx)(p(),{src:n,alt:n,width:17,height:15})),(0,r.jsxs)("div",{className:"flex items-center gap-1 text-default",onClick:e=>{e.stopPropagation(),t&&t()},children:[n,(0,r.jsx)("span",{children:o})]})},h=e=>{let{menu:t}=e;return(0,r.jsx)(s.Z,{menu:t,getPopupContainer:e=>e.parentNode,placement:"bottomRight",autoAdjustOverflow:!1,children:(0,r.jsx)(o.Z,{className:"p-2 hover:bg-white hover:dark:bg-black rounded-md"})})};t.ZP=e=>{let{RightTop:t,Tags:n,LeftBottom:o,RightBottom:s,onClick:c,rightTopHover:u=!0,logo:m,name:g,description:h,className:b,scene:v,code:x}=e;return"string"==typeof h&&(h=(0,r.jsx)("p",{className:"line-clamp-2 relative bottom-4 text-ellipsis min-h-[42px] text-sm text-[#525964] dark:text-[rgba(255,255,255,0.65)]",children:h})),(0,r.jsx)("div",{className:d()("hover-underline-gradient flex justify-center mt-6 relative group w-1/3 px-2 mb-6",b),children:(0,r.jsxs)("div",{onClick:c,className:"backdrop-filter backdrop-blur-lg cursor-pointer  bg-white bg-opacity-70 border-2 border-white rounded-lg shadow p-4 relative w-full h-full dark:border-[#6f7f95] dark:bg-[#6f7f95] dark:bg-opacity-60",children:[(0,r.jsxs)("div",{className:"flex items-end relative bottom-8 justify-between w-full",children:[(0,r.jsxs)("div",{className:"flex items-end gap-4 w-11/12  flex-1",children:[(0,r.jsx)("div",{className:"bg-white rounded-lg shadow-sm w-14 h-14 flex items-center p-3",children:v?(0,r.jsx)(f.Z,{scene:v,width:14,height:14}):m&&(0,r.jsx)(p(),{src:m,width:44,height:44,alt:g,className:"w-8 min-w-8 rounded-full max-w-none"})}),(0,r.jsx)("div",{className:"flex-1",children:g.length>6?(0,r.jsx)(a.Z,{title:g,children:(0,r.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:g})}):(0,r.jsx)("span",{className:"line-clamp-1 text-ellipsis font-semibold text-base",style:{maxWidth:"60%"},children:g})})]}),(0,r.jsx)("span",{className:d()("shrink-0",{hidden:u,"group-hover:block":u}),onClick:e=>{e.stopPropagation()},children:t})]}),h,(0,r.jsx)("div",{className:"relative bottom-2",children:n}),(0,r.jsxs)("div",{className:"flex justify-between items-center",children:[(0,r.jsx)("div",{children:o}),(0,r.jsx)("div",{children:s})]}),x&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Z,{className:"my-3"}),(0,r.jsx)(i.Z.Text,{copyable:!0,className:"absolute bottom-1 right-4 text-xs text-gray-500",children:x})]})]})})}},86059:function(e,t,n){"use strict";var r=n(96469);n(38497);var o=n(42518),a=n(5996),l=n(83930),i=n(31183),s=n(51382),c=n(42834),d=n(43738),u=n(92026),m=n(61760),p=n(94918),f=n(67901),g=n(87313);n(41748),t.Z=function(e){let{children:t}=e,n=[{key:"app",name:(0,l.t)("App"),path:"/app",icon:(0,r.jsx)(i.Z,{})},{key:"flow",name:(0,l.t)("awel_flow"),icon:(0,r.jsx)(s.Z,{}),path:"/flow"},{key:"models",name:(0,l.t)("model_manage"),path:"/models",icon:(0,r.jsx)(c.Z,{component:f.IN})},{key:"database",name:(0,l.t)("Database"),icon:(0,r.jsx)(d.Z,{}),path:"/database"},{key:"knowledge",name:(0,l.t)("Knowledge_Space"),icon:(0,r.jsx)(u.Z,{}),path:"/knowledge"},{key:"prompt",name:(0,l.t)("Prompt"),icon:(0,r.jsx)(m.Z,{}),path:"/prompt"},{key:"dbgpts",name:(0,l.t)("dbgpts_community"),path:"/dbgpts",icon:(0,r.jsx)(p.Z,{})}],h=(0,g.useRouter)(),b=h.pathname.split("/")[2];return window.matchMedia("(prefers-color-scheme: dark)").matches,(0,r.jsx)("div",{className:"flex flex-col h-full w-full  dark:bg-gradient-dark bg-gradient-light bg-cover bg-center",children:(0,r.jsx)(o.ZP,{theme:{components:{Button:{},Segmented:{itemSelectedBg:"#2867f5",itemSelectedColor:"white"}}},children:(0,r.jsx)(a.Z,{activeKey:b,items:n.map(e=>({key:e.key,label:e.name,children:t,icon:e.icon})),onTabClick:e=>{h.push("/construct/".concat(e))}})})})}},18419:function(e,t,n){"use strict";n.r(t);var r=n(96469),o=n(52903),a=n(86059),l=n(45277),i=n(27623),s=n(76592),c=n(97511),d=n(16602),u=n(70351),m=n(55360),p=n(42786),f=n(27691),g=n(13419),h=n(49030),b=n(91320),v=n(79839),x=n(71841),y=n(29223),j=n(83930),w=n(61671),$=n.n(w),O=n(87313),C=n(97323),k=n.n(C),N=n(38497),E=n(56841);t.default=function(){var e,t;let n=(0,O.useRouter)(),{model:w}=(0,N.useContext)(l.p),[C,S]=u.ZP.useMessage(),[Z]=m.default.useForm(),[_,I]=(0,N.useState)([]),P=(0,N.useRef)(),[z,T]=(0,N.useState)(!1),[B,M]=(0,N.useState)(!1),[R,W]=(0,N.useState)(!1),H=(0,N.useRef)(),A=(0,N.useRef)(null),{run:D,loading:F}=(0,d.Z)(async e=>await (0,i.Vx)((0,i.Wf)({page:1,page_size:12,...e})),{cacheKey:"query-flow-list",onSuccess:e=>{let[,t]=e;I((null==t?void 0:t.items)||[]),H.current={current_page:(null==t?void 0:t.page)||1,total_count:(null==t?void 0:t.total_count)||0,total_page:(null==t?void 0:t.total_pages)||0}},throttleWait:300}),{i18n:L}=(0,E.$G)(),K=async e=>{let[,t]=await (0,i.Vx)((0,i.sW)({chat_mode:"chat_agent"}));if(t){let r=k().stringify({scene:"chat_flow",id:t.conv_uid,model:w,select_param:e.uid});n.push("/chat?".concat(r))}};async function G(e){let[,,t]=await (0,i.Vx)((0,i.Jq)(e.uid));(null==t?void 0:t.success)&&I(t=>t.filter(t=>t.uid!==e.uid))}let U=e=>{P.current=e,Z.setFieldValue("label","".concat(e.label," Copy")),Z.setFieldValue("name","".concat(e.name,"_copy")),M(!0),W(!0),T(!0)},V=async e=>{if(!P.current)return;let{source:t,uid:n,dag_id:r,gmt_created:o,gmt_modified:a,state:l,...s}=P.current,c={...s,editable:R,state:B?"deployed":"developing",...e},[d]=await (0,i.Vx)((0,i.zd)(c));d||(C.success((0,j.t)("save_flow_success")),T(!1),D({}))};return(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(p.Z,{spinning:F,children:(0,r.jsxs)("div",{className:"relative h-screen w-full p-4 md:p-6 overflow-y-auto",ref:A,children:[(0,r.jsxs)("div",{className:"flex justify-between items-center mb-6",children:[(0,r.jsx)("div",{className:"flex items-center gap-4"}),(0,r.jsx)("div",{className:"flex items-center gap-4",children:(0,r.jsx)(f.ZP,{className:"border-none text-white bg-button-gradient",icon:(0,r.jsx)(c.Z,{}),onClick:()=>{n.push("/construct/flow/canvas")},children:(0,j.t)("create_flow")})})]}),(0,r.jsxs)("div",{className:"flex flex-wrap mx-[-8px] pb-12 justify-start items-stretch flex-1",children:[_.map(e=>(0,r.jsx)(o.ZP,{description:e.description,name:e.name,logo:"/pictures/flow.png",onClick:()=>{n.push("/construct/flow/canvas?id="+e.uid)},RightTop:(0,r.jsx)(o.ZS,{menu:{items:[{key:"copy",label:(0,r.jsx)("span",{onClick:()=>{U(e)},children:(0,j.t)("Copy_Btn")})},{key:"del",label:(0,r.jsx)(g.Z,{title:"Are you sure to delete this flow?",onConfirm:()=>G(e),children:(0,r.jsx)("span",{className:"text-red-400",children:(0,j.t)("Delete_Btn")})})}]}}),rightTopHover:!1,Tags:(0,r.jsxs)("div",{children:[(0,r.jsx)(h.Z,{color:"DBGPT-WEB"===e.source?"green":"blue",children:e.source}),(0,r.jsx)(h.Z,{color:e.editable?"green":"gray",children:e.editable?"Editable":"Can not Edit"}),(0,r.jsx)(h.Z,{color:"load_failed"===e.state?"red":"running"===e.state?"green":"blue",children:e.state})]}),LeftBottom:(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("span",{children:null==e?void 0:e.nick_name}),(0,r.jsx)("span",{children:"•"}),(null==e?void 0:e.gmt_modified)&&(0,r.jsx)("span",{children:$()(null==e?void 0:e.gmt_modified).fromNow()+" "+(0,j.t)("update")})]},L.language+"flow"),RightBottom:(0,r.jsx)(o.TH,{onClick:()=>{K(e)},text:(0,j.t)("start_chat")})},e.uid)),0===_.length&&(0,r.jsx)(s.Z,{description:"No flow found"}),(0,r.jsx)("div",{className:"w-full flex justify-end shrink-0 pb-12",children:(0,r.jsx)(b.Z,{total:(null===(e=H.current)||void 0===e?void 0:e.total_count)||0,pageSize:12,current:null===(t=H.current)||void 0===t?void 0:t.current_page,onChange:async(e,t)=>{await D({page:e})}})})]})]})}),(0,r.jsx)(v.default,{open:z,title:"Copy AWEL Flow",onCancel:()=>{T(!1)},footer:!1,children:(0,r.jsxs)(m.default,{form:Z,onFinish:V,className:"mt-6",children:[(0,r.jsx)(m.default.Item,{name:"name",label:"Name",rules:[{required:!0}],children:(0,r.jsx)(x.default,{})}),(0,r.jsx)(m.default.Item,{name:"label",label:"Label",rules:[{required:!0}],children:(0,r.jsx)(x.default,{})}),(0,r.jsx)(m.default.Item,{label:"editable",children:(0,r.jsx)(y.Z,{value:R,checked:R,onChange:e=>{let t=e.target.checked;W(t)}})}),(0,r.jsx)(m.default.Item,{label:"deploy",children:(0,r.jsx)(y.Z,{value:B,checked:B,onChange:e=>{let t=e.target.checked;M(t)}})}),(0,r.jsx)("div",{className:"flex justify-end",children:(0,r.jsx)(f.ZP,{type:"primary",htmlType:"submit",children:(0,j.t)("Submit")})})]})})]})}},96768:function(){},41748:function(){},97323:function(e){!function(){"use strict";var t={815:function(e){e.exports=function(e,n,r,o){n=n||"&",r=r||"=";var a={};if("string"!=typeof e||0===e.length)return a;var l=/\+/g;e=e.split(n);var i=1e3;o&&"number"==typeof o.maxKeys&&(i=o.maxKeys);var s=e.length;i>0&&s>i&&(s=i);for(var c=0;c<s;++c){var d,u,m,p,f=e[c].replace(l,"%20"),g=f.indexOf(r);(g>=0?(d=f.substr(0,g),u=f.substr(g+1)):(d=f,u=""),m=decodeURIComponent(d),p=decodeURIComponent(u),Object.prototype.hasOwnProperty.call(a,m))?t(a[m])?a[m].push(p):a[m]=[a[m],p]:a[m]=p}return a};var t=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)}},577:function(e){var t=function(e){switch(typeof e){case"string":return e;case"boolean":return e?"true":"false";case"number":return isFinite(e)?e:"";default:return""}};e.exports=function(e,a,l,i){return(a=a||"&",l=l||"=",null===e&&(e=void 0),"object"==typeof e)?r(o(e),function(o){var i=encodeURIComponent(t(o))+l;return n(e[o])?r(e[o],function(e){return i+encodeURIComponent(t(e))}).join(a):i+encodeURIComponent(t(e[o]))}).join(a):i?encodeURIComponent(t(i))+l+encodeURIComponent(t(e)):""};var n=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)};function r(e,t){if(e.map)return e.map(t);for(var n=[],r=0;r<e.length;r++)n.push(t(e[r],r));return n}var o=Object.keys||function(e){var t=[];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.push(n);return t}}},n={};function r(e){var o=n[e];if(void 0!==o)return o.exports;var a=n[e]={exports:{}},l=!0;try{t[e](a,a.exports,r),l=!1}finally{l&&delete n[e]}return a.exports}r.ab="//";var o={};o.decode=o.parse=r(815),o.encode=o.stringify=r(577),e.exports=o}()}},function(e){e.O(0,[2394,2003,5677,1841,5722,5851,2786,335,9069,5360,5996,1320,9223,9774,2888,179],function(){return e(e.s=31988)}),_N_E=e.O()}]);