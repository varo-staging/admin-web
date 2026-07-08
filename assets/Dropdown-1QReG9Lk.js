import{c as e}from"./http-oc4Xe0gb.js";import{$ as t,An as n,Ft as r,In as i,It as a,Ln as o,Lt as s,Mn as c,Nn as l,Nt as u,On as d,Q as f,Rt as p,St as m,Wn as h,Yn as g,_n as _,_t as v,bt as y,cr as b,fr as x,gt as S,h as C,i as w,m as T,n as E,or as D,pt as O,sr as k,un as A,ut as j,xn as M,xt as N,yt as P,zt as F}from"./Scrollbar-DD8T2-fz.js";import{a as I,b as L,g as R,h as z,i as B,m as V,n as H,o as ee,t as U}from"./Popover-qsiJi5gB.js";import{C as te,E as ne,b as re,c as ie,o as ae,s as W,y as G}from"./Tag-C9hkpr7n.js";import{o as oe}from"./get-BSWmRkJD.js";function K(e={},t){let n=D({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:c}=e,l=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},u=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}c!==void 0&&Object.keys(c).forEach(t=>{if(t!==e.key)return;let n=c[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},d=()=>{(t===void 0||t.value)&&(s(`keydown`,document,l),s(`keyup`,document,u)),t!==void 0&&g(t,e=>{e?(s(`keydown`,document,l),s(`keyup`,document,u)):(a(`keydown`,document,l),a(`keyup`,document,u))})};return ne()?(i(d),o(()=>{(t===void 0||t.value)&&(a(`keydown`,document,l),a(`keyup`,document,u))})):d(),k(n)}function se(e,t,n){if(!t)return e;let r=b(e.value),i=null;return g(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function q(e){return t=>{t?e.value=t.$el:e.value=null}}var J=d({name:`ChevronRight`,render(){return n(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},n(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),ce={padding:`4px 0`,optionIconSizeSmall:`14px`,optionIconSizeMedium:`16px`,optionIconSizeLarge:`16px`,optionIconSizeHuge:`18px`,optionSuffixWidthSmall:`14px`,optionSuffixWidthMedium:`14px`,optionSuffixWidthLarge:`16px`,optionSuffixWidthHuge:`16px`,optionIconSuffixWidthSmall:`32px`,optionIconSuffixWidthMedium:`32px`,optionIconSuffixWidthLarge:`36px`,optionIconSuffixWidthHuge:`36px`,optionPrefixWidthSmall:`14px`,optionPrefixWidthMedium:`14px`,optionPrefixWidthLarge:`16px`,optionPrefixWidthHuge:`16px`,optionIconPrefixWidthSmall:`36px`,optionIconPrefixWidthMedium:`36px`,optionIconPrefixWidthLarge:`40px`,optionIconPrefixWidthHuge:`40px`};function le(e){let{primaryColor:t,textColor2:n,dividerColor:r,hoverColor:i,popoverColor:a,invertedColor:o,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,heightSmall:f,heightMedium:m,heightLarge:h,heightHuge:g,textColor3:_,opacityDisabled:v}=e;return Object.assign(Object.assign({},ce),{optionHeightSmall:f,optionHeightMedium:m,optionHeightLarge:h,optionHeightHuge:g,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:r,suffixColor:n,prefixColor:n,optionColorHover:i,optionColorActive:p(t,{alpha:.1}),groupHeaderTextColor:_,optionTextColorInverted:`#BBB`,optionTextColorHoverInverted:`#FFF`,optionTextColorActiveInverted:`#FFF`,optionTextColorChildActiveInverted:`#FFF`,colorInverted:o,dividerColorInverted:`#BBB`,suffixColorInverted:`#BBB`,prefixColorInverted:`#BBB`,optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:`#AAA`,optionOpacityDisabled:v})}var Y=T({name:`Dropdown`,common:w,peers:{Popover:I},self:le}),ue={padding:`8px 14px`};function de(e){let{borderRadius:t,boxShadow2:n,baseColor:r}=e;return Object.assign(Object.assign({},ue),{borderRadius:t,boxShadow:n,color:F(r,`rgba(0, 0, 0, .85)`),textColor:r})}var fe=T({name:`Tooltip`,common:w,peers:{Popover:I},self:de}),pe=Object.assign(Object.assign({},H),C.props),me=d({name:`Tooltip`,props:pe,slots:Object,__popover__:!0,setup(e){let{mergedClsPrefixRef:n}=t(e),r=C(`Tooltip`,`-tooltip`,void 0,fe,e,n),i=b(null);return Object.assign(Object.assign({},{syncPosition(){i.value.syncPosition()},setShow(e){i.value.setShow(e)}}),{popoverRef:i,mergedTheme:r,popoverThemeOverrides:M(()=>r.value.self)})},render(){let{mergedTheme:e,internalExtraClass:t}=this;return n(U,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),X=u(`n-dropdown-menu`),Z=u(`n-dropdown`),he=u(`n-dropdown-option`),ge=d({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return n(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),_e=d({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=c(X),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=c(Z);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:r,nodeProps:i,renderLabel:a,renderOption:o}=this,{rawNode:s}=this.tmNode,c=n(`div`,Object.assign({class:`${e}-dropdown-option`},i?.(s)),n(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},n(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,r&&`${e}-dropdown-option-body__prefix--show-icon`]},W(s.icon)),n(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},a?a(s):W(s.title??s[this.labelField])),n(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return o?o({node:c,option:s}):c}});function ve(e){let{textColorBase:t,opacity1:n,opacity2:r,opacity3:i,opacity4:a,opacity5:o}=e;return{color:t,opacity1Depth:n,opacity2Depth:r,opacity3Depth:i,opacity4Depth:a,opacity5Depth:o}}var ye={name:`Icon`,common:w,self:ve},be=v(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[y(`color-transition`,{transition:`color .3s var(--n-bezier)`}),y(`depth`,{color:`var(--n-color)`},[S(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),S(`svg`,{height:`1em`,width:`1em`})]),xe=Object.assign(Object.assign({},C.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Se=d({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:xe,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=t(e),i=C(`Icon`,`-icon`,be,ye,e,n),a=M(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:i}=r;return{"--n-bezier":n,"--n-color":e,"--n-opacity":i}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=r?f(`icon`,M(()=>`${e.depth||`d`}`),a,e):void 0;return{mergedClsPrefix:n,mergedStyle:M(()=>{let{size:t,color:n}=e;return{fontSize:oe(t),color:n}}),cssVars:r?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:r,component:i,onRender:a,themeClass:o}=this;return e?.$options?._n_icon__&&O(`icon`,"don't wrap `n-icon` inside `n-icon`"),a?.(),n(`i`,l(this.$attrs,{role:`img`,class:[`${r}-icon`,o,{[`${r}-icon--depth`]:t,[`${r}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),i?n(i):this.$slots)}});function Q(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function Ce(e){return e.type===`group`}function we(e){return e.type===`divider`}function Te(e){return e.type===`render`}var Ee=d({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=c(Z),{hoverKeyRef:n,keyboardKeyRef:i,lastToggledSubmenuKeyRef:a,pendingKeyPathRef:o,activeKeyPathRef:s,animatedRef:l,mergedShowRef:u,renderLabelRef:d,renderIconRef:f,labelFieldRef:p,childrenFieldRef:m,renderOptionRef:g,nodePropsRef:_,menuPropsRef:v}=t,y=c(he,null),x=c(X),S=c(G),C=M(()=>e.tmNode.rawNode),w=M(()=>{let{value:t}=m;return Q(e.tmNode.rawNode,t)}),T=M(()=>{let{disabled:t}=e.tmNode;return t}),E=se(M(()=>{if(!w.value)return!1;let{key:t,disabled:r}=e.tmNode;if(r)return!1;let{value:s}=n,{value:c}=i,{value:l}=a,{value:u}=o;return s===null?c===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,M(()=>i.value===null&&!l.value)),D=M(()=>!!y?.enteringSubmenuRef.value),O=b(!1);h(he,{enteringSubmenuRef:O});function k(){O.value=!0}function A(){O.value=!1}function j(){let{parentKey:t,tmNode:r}=e;r.disabled||u.value&&(a.value=t,i.value=null,n.value=r.key)}function N(){let{tmNode:t}=e;t.disabled||u.value&&n.value!==t.key&&j()}function P(t){if(e.tmNode.disabled||!u.value)return;let{relatedTarget:r}=t;r&&!L({target:r},`dropdownOption`)&&!L({target:r},`scrollbarRail`)&&(n.value=null)}function F(){let{value:n}=w,{tmNode:r}=e;u.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:p,renderLabel:d,renderIcon:f,siblingHasIcon:x.showIconRef,siblingHasSubmenu:x.hasSubmenuRef,menuProps:v,popoverBody:S,animated:l,mergedShowSubmenu:M(()=>E.value&&!D.value),rawNode:C,hasSubmenu:w,pending:r(()=>{let{value:t}=o,{key:n}=e.tmNode;return t.includes(n)}),childActive:r(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:r(()=>{let{value:t}=s,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:g,nodeProps:_,handleClick:F,handleMouseMove:N,handleMouseEnter:j,handleMouseLeave:P,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:A}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:r,clsPrefix:i,siblingHasIcon:a,siblingHasSubmenu:o,renderLabel:s,renderIcon:c,renderOption:u,nodeProps:d,props:f,scrollable:p}=this,m=null;if(r){let e=this.menuProps?.call(this,t,t.children);m=n(ke,Object.assign({},e,{clsPrefix:i,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let h={class:[`${i}-dropdown-option-body`,this.pending&&`${i}-dropdown-option-body--pending`,this.active&&`${i}-dropdown-option-body--active`,this.childActive&&`${i}-dropdown-option-body--child-active`,this.mergedDisabled&&`${i}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},g=d?.(t),_=n(`div`,Object.assign({class:[`${i}-dropdown-option`,g?.class],"data-dropdown-option":!0},g),n(`div`,l(h,f),[n(`div`,{class:[`${i}-dropdown-option-body__prefix`,a&&`${i}-dropdown-option-body__prefix--show-icon`]},[c?c(t):W(t.icon)]),n(`div`,{"data-dropdown-option":!0,class:`${i}-dropdown-option-body__label`},s?s(t):W(t[this.labelField]??t.title)),n(`div`,{"data-dropdown-option":!0,class:[`${i}-dropdown-option-body__suffix`,o&&`${i}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?n(Se,null,{default:()=>n(J,null)}):null)]),this.hasSubmenu?n(R,null,{default:()=>[n(z,null,{default:()=>n(`div`,{class:`${i}-dropdown-offset-container`},n(V,{show:this.mergedShowSubmenu,placement:this.placement,to:p&&this.popoverBody||void 0,teleportDisabled:!p},{default:()=>n(`div`,{class:`${i}-dropdown-menu-wrapper`},e?n(A,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>m}):m)}))})]}):null);return u?u({node:_,option:t}):_}}),De=d({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:r}=this,{children:i}=e;return n(_,null,n(_e,{clsPrefix:r,tmNode:e,key:e.key}),i?.map(e=>{let{rawNode:i}=e;return i.show===!1?null:we(i)?n(ge,{clsPrefix:r,key:e.key}):e.isGroup?(O(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):n(Ee,{clsPrefix:r,tmNode:e,parentKey:t,key:e.key})}))}}),Oe=d({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return n(`div`,t,[e?.()])}}),ke=d({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=c(Z);h(X,{showIconRef:M(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:M(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Q(e,t));let{rawNode:n}=e;return Q(n,t)})})});let r=b(null);return h(re,null),h(te,null),h(G,r),{bodyRef:r}},render(){let{parentKey:e,clsPrefix:t,scrollable:r}=this,i=this.tmNodes.map(i=>{let{rawNode:a}=i;return a.show===!1?null:Te(a)?n(Oe,{tmNode:i,key:i.key}):we(a)?n(ge,{clsPrefix:t,key:i.key}):Ce(a)?n(De,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key}):n(Ee,{clsPrefix:t,tmNode:i,parentKey:e,key:i.key,props:a.props,scrollable:r})});return n(`div`,{class:[`${t}-dropdown-menu`,r&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},r?n(E,{contentClass:`${t}-dropdown-menu__content`},{default:()=>i}):i,this.showArrow?B({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ae=v(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ae(),v(`dropdown-option`,`
 position: relative;
 `,[S(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[S(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),v(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[S(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),N(`disabled`,[y(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[P(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),S(`&::before`,`background-color: var(--n-option-color-hover);`)]),y(`active`,`
 color: var(--n-option-text-color-active);
 `,[P(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),S(`&::before`,`background-color: var(--n-option-color-active);`)]),y(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[P(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),y(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),y(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[P(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[y(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),P(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[y(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),v(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),P(`label`,`
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `),P(`suffix`,`
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `,[y(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),v(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),v(`dropdown-menu`,`pointer-events: all;`)]),v(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),v(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),v(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),S(`>`,[v(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),N(`scrollable`,`
 padding: var(--n-padding);
 `),y(`scrollable`,[P(`content`,`
 padding: var(--n-padding);
 `)])]),je={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},Me=Object.keys(H),$=Object.assign(Object.assign(Object.assign({},H),je),C.props),Ne=d({name:`Dropdown`,inheritAttrs:!1,props:$,setup(n){let i=b(!1),a=e(x(n,`show`),i),o=M(()=>{let{keyField:e,childrenField:t}=n;return ee(n.options,{getKey(t){return t[e]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[t]}})}),s=M(()=>o.value.treeNodes),c=b(null),l=b(null),u=b(null),d=M(()=>c.value??l.value??u.value??null),p=M(()=>o.value.getPath(d.value).keyPath),_=M(()=>o.value.getPath(n.value).keyPath),v=r(()=>n.keyboard&&a.value);K({keydown:{ArrowUp:{prevent:!0,handler:F},ArrowRight:{prevent:!0,handler:P},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:L},Escape:A}},v);let{mergedClsPrefixRef:y,inlineThemeDisabled:S,mergedComponentPropsRef:w}=t(n),T=M(()=>n.size||w?.value?.Dropdown?.size||`medium`),E=C(`Dropdown`,`-dropdown`,Ae,Y,n,y);h(Z,{labelFieldRef:x(n,`labelField`),childrenFieldRef:x(n,`childrenField`),renderLabelRef:x(n,`renderLabel`),renderIconRef:x(n,`renderIcon`),hoverKeyRef:c,keyboardKeyRef:l,lastToggledSubmenuKeyRef:u,pendingKeyPathRef:p,activeKeyPathRef:_,animatedRef:x(n,`animated`),mergedShowRef:a,nodePropsRef:x(n,`nodeProps`),renderOptionRef:x(n,`renderOption`),menuPropsRef:x(n,`menuProps`),doSelect:D,doUpdateShow:O}),g(a,e=>{!n.animated&&!e&&k()});function D(e,t){let{onSelect:r}=n;r&&j(r,e,t)}function O(e){let{"onUpdate:show":t,onUpdateShow:r}=n;t&&j(t,e),r&&j(r,e),i.value=e}function k(){c.value=null,l.value=null,u.value=null}function A(){O(!1)}function N(){z(`left`)}function P(){z(`right`)}function F(){z(`up`)}function I(){z(`down`)}function L(){let e=R();e?.isLeaf&&a.value&&(D(e.key,e.rawNode),O(!1))}function R(){let{value:e}=o,{value:t}=d;return!e||t===null?null:e.getNode(t)??null}function z(e){let{value:t}=d,{value:{getFirstAvailableNode:n}}=o,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=R();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(c.value=null,l.value=r)}let B=M(()=>{let{inverted:e}=n,t=T.value,{common:{cubicBezierEaseInOut:r},self:i}=E.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[m(`optionIconSuffixWidth`,t)]:l,[m(`optionSuffixWidth`,t)]:u,[m(`optionIconPrefixWidth`,t)]:d,[m(`optionPrefixWidth`,t)]:f,[m(`fontSize`,t)]:p,[m(`optionHeight`,t)]:h,[m(`optionIconSize`,t)]:g}=i,_={"--n-bezier":r,"--n-font-size":p,"--n-padding":a,"--n-border-radius":s,"--n-option-height":h,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":g,"--n-divider-color":o,"--n-option-opacity-disabled":c};return e?(_[`--n-color`]=i.colorInverted,_[`--n-option-color-hover`]=i.optionColorHoverInverted,_[`--n-option-color-active`]=i.optionColorActiveInverted,_[`--n-option-text-color`]=i.optionTextColorInverted,_[`--n-option-text-color-hover`]=i.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=i.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=i.prefixColorInverted,_[`--n-suffix-color`]=i.suffixColorInverted,_[`--n-group-header-text-color`]=i.groupHeaderTextColorInverted):(_[`--n-color`]=i.color,_[`--n-option-color-hover`]=i.optionColorHover,_[`--n-option-color-active`]=i.optionColorActive,_[`--n-option-text-color`]=i.optionTextColor,_[`--n-option-text-color-hover`]=i.optionTextColorHover,_[`--n-option-text-color-active`]=i.optionTextColorActive,_[`--n-option-text-color-child-active`]=i.optionTextColorChildActive,_[`--n-prefix-color`]=i.prefixColor,_[`--n-suffix-color`]=i.suffixColor,_[`--n-group-header-text-color`]=i.groupHeaderTextColor),_}),V=S?f(`dropdown`,M(()=>`${T.value[0]}${n.inverted?`i`:``}`),B,n):void 0;return{mergedClsPrefix:y,mergedTheme:E,mergedSize:T,tmNodes:s,mergedShow:a,handleAfterLeave:()=>{n.animated&&k()},doUpdateShow:O,cssVars:S?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){let e=(e,t,r,i,a)=>{var o;let{mergedClsPrefix:s,menuProps:c}=this;(o=this.onRender)==null||o.call(this);let u=c?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},d={ref:q(t),class:[e,`${s}-dropdown`,`${s}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:s,tmNodes:this.tmNodes,style:[...r,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:i,onMouseleave:a};return n(ke,l(this.$attrs,d,u))},{mergedTheme:t}=this,r={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return n(U,Object.assign({},ie(this.$props,Me),r),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{me as a,Y as c,K as d,xe as i,J as l,$ as n,pe as o,Se as r,fe as s,Ne as t,q as u};