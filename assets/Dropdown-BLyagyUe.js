import{c as e}from"./http-imLOML67.js";import{$ as t,Ft as n,Gn as r,It as i,Ln as a,Lt as o,Nn as s,Nt as c,Pn as l,Q as u,Rn as d,Rt as f,St as p,Xn as m,_n as h,_t as g,bt as _,cr as v,gt as y,h as b,i as x,jn as S,kn as C,lr as w,m as T,n as E,pr as D,pt as O,sr as k,un as A,ut as j,xn as M,xt as N,yt as P,zt as F}from"./Scrollbar-Cez1ZaA9.js";import{a as I,b as L,g as R,h as z,i as B,m as V,n as H,o as ee,t as U}from"./Popover-S_SROyew.js";import{C as te,E as ne,b as re,c as ie,o as ae,s as W,y as G}from"./Tag-DcBDod3-.js";import{o as oe}from"./get-Dr78Eyw-.js";function K(e={},t){let n=k({ctrl:!1,command:!1,win:!1,shift:!1,tab:!1}),{keydown:r,keyup:s}=e,c=e=>{switch(e.key){case`Control`:n.ctrl=!0;break;case`Meta`:n.command=!0,n.win=!0;break;case`Shift`:n.shift=!0;break;case`Tab`:n.tab=!0;break}r!==void 0&&Object.keys(r).forEach(t=>{if(t!==e.key)return;let n=r[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},l=e=>{switch(e.key){case`Control`:n.ctrl=!1;break;case`Meta`:n.command=!1,n.win=!1;break;case`Shift`:n.shift=!1;break;case`Tab`:n.tab=!1;break}s!==void 0&&Object.keys(s).forEach(t=>{if(t!==e.key)return;let n=s[t];if(typeof n==`function`)n(e);else{let{stop:t=!1,prevent:r=!1}=n;t&&e.stopPropagation(),r&&e.preventDefault(),n.handler(e)}})},u=()=>{(t===void 0||t.value)&&(o(`keydown`,document,c),o(`keyup`,document,l)),t!==void 0&&m(t,e=>{e?(o(`keydown`,document,c),o(`keyup`,document,l)):(i(`keydown`,document,c),i(`keyup`,document,l))})};return ne()?(a(u),d(()=>{(t===void 0||t.value)&&(i(`keydown`,document,c),i(`keyup`,document,l))})):u(),v(n)}function se(e,t,n){if(!t)return e;let r=w(e.value),i=null;return m(e,e=>{i!==null&&window.clearTimeout(i),e===!0?n&&!n.value?r.value=!0:i=window.setTimeout(()=>{r.value=!0},t):r.value=!1}),r}function q(e){return t=>{t?e.value=t.$el:e.value=null}}var J=C({name:`ChevronRight`,render(){return S(`svg`,{viewBox:`0 0 16 16`,fill:`none`,xmlns:`http://www.w3.org/2000/svg`},S(`path`,{d:`M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z`,fill:`currentColor`}))}}),ce={padding:`4px 0`,optionIconSizeSmall:`14px`,optionIconSizeMedium:`16px`,optionIconSizeLarge:`16px`,optionIconSizeHuge:`18px`,optionSuffixWidthSmall:`14px`,optionSuffixWidthMedium:`14px`,optionSuffixWidthLarge:`16px`,optionSuffixWidthHuge:`16px`,optionIconSuffixWidthSmall:`32px`,optionIconSuffixWidthMedium:`32px`,optionIconSuffixWidthLarge:`36px`,optionIconSuffixWidthHuge:`36px`,optionPrefixWidthSmall:`14px`,optionPrefixWidthMedium:`14px`,optionPrefixWidthLarge:`16px`,optionPrefixWidthHuge:`16px`,optionIconPrefixWidthSmall:`36px`,optionIconPrefixWidthMedium:`36px`,optionIconPrefixWidthLarge:`40px`,optionIconPrefixWidthHuge:`40px`};function le(e){let{primaryColor:t,textColor2:n,dividerColor:r,hoverColor:i,popoverColor:a,invertedColor:o,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,heightSmall:p,heightMedium:m,heightLarge:h,heightHuge:g,textColor3:_,opacityDisabled:v}=e;return Object.assign(Object.assign({},ce),{optionHeightSmall:p,optionHeightMedium:m,optionHeightLarge:h,optionHeightHuge:g,borderRadius:s,fontSizeSmall:c,fontSizeMedium:l,fontSizeLarge:u,fontSizeHuge:d,optionTextColor:n,optionTextColorHover:n,optionTextColorActive:t,optionTextColorChildActive:t,color:a,dividerColor:r,suffixColor:n,prefixColor:n,optionColorHover:i,optionColorActive:f(t,{alpha:.1}),groupHeaderTextColor:_,optionTextColorInverted:`#BBB`,optionTextColorHoverInverted:`#FFF`,optionTextColorActiveInverted:`#FFF`,optionTextColorChildActiveInverted:`#FFF`,colorInverted:o,dividerColorInverted:`#BBB`,suffixColorInverted:`#BBB`,prefixColorInverted:`#BBB`,optionColorHoverInverted:t,optionColorActiveInverted:t,groupHeaderTextColorInverted:`#AAA`,optionOpacityDisabled:v})}var Y=T({name:`Dropdown`,common:x,peers:{Popover:I},self:le}),ue={padding:`8px 14px`};function de(e){let{borderRadius:t,boxShadow2:n,baseColor:r}=e;return Object.assign(Object.assign({},ue),{borderRadius:t,boxShadow:n,color:F(r,`rgba(0, 0, 0, .85)`),textColor:r})}var fe=T({name:`Tooltip`,common:x,peers:{Popover:I},self:de}),pe=Object.assign(Object.assign({},H),b.props),me=C({name:`Tooltip`,props:pe,slots:Object,__popover__:!0,setup(e){let{mergedClsPrefixRef:n}=t(e),r=b(`Tooltip`,`-tooltip`,void 0,fe,e,n),i=w(null);return Object.assign(Object.assign({},{syncPosition(){i.value.syncPosition()},setShow(e){i.value.setShow(e)}}),{popoverRef:i,mergedTheme:r,popoverThemeOverrides:M(()=>r.value.self)})},render(){let{mergedTheme:e,internalExtraClass:t}=this;return S(U,Object.assign(Object.assign({},this.$props),{theme:e.peers.Popover,themeOverrides:e.peerOverrides.Popover,builtinThemeOverrides:this.popoverThemeOverrides,internalExtraClass:t.concat(`tooltip`),ref:`popoverRef`}),this.$slots)}}),X=c(`n-dropdown-menu`),Z=c(`n-dropdown`),he=c(`n-dropdown-option`),ge=C({name:`DropdownDivider`,props:{clsPrefix:{type:String,required:!0}},render(){return S(`div`,{class:`${this.clsPrefix}-dropdown-divider`})}}),_e=C({name:`DropdownGroupHeader`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0}},setup(){let{showIconRef:e,hasSubmenuRef:t}=s(X),{renderLabelRef:n,labelFieldRef:r,nodePropsRef:i,renderOptionRef:a}=s(Z);return{labelField:r,showIcon:e,hasSubmenu:t,renderLabel:n,nodeProps:i,renderOption:a}},render(){let{clsPrefix:e,hasSubmenu:t,showIcon:n,nodeProps:r,renderLabel:i,renderOption:a}=this,{rawNode:o}=this.tmNode,s=S(`div`,Object.assign({class:`${e}-dropdown-option`},r?.(o)),S(`div`,{class:`${e}-dropdown-option-body ${e}-dropdown-option-body--group`},S(`div`,{"data-dropdown-option":!0,class:[`${e}-dropdown-option-body__prefix`,n&&`${e}-dropdown-option-body__prefix--show-icon`]},W(o.icon)),S(`div`,{class:`${e}-dropdown-option-body__label`,"data-dropdown-option":!0},i?i(o):W(o.title??o[this.labelField])),S(`div`,{class:[`${e}-dropdown-option-body__suffix`,t&&`${e}-dropdown-option-body__suffix--has-submenu`],"data-dropdown-option":!0})));return a?a({node:s,option:o}):s}});function ve(e){let{textColorBase:t,opacity1:n,opacity2:r,opacity3:i,opacity4:a,opacity5:o}=e;return{color:t,opacity1Depth:n,opacity2Depth:r,opacity3Depth:i,opacity4Depth:a,opacity5Depth:o}}var ye={name:`Icon`,common:x,self:ve},be=g(`icon`,`
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
`,[_(`color-transition`,{transition:`color .3s var(--n-bezier)`}),_(`depth`,{color:`var(--n-color)`},[y(`svg`,{opacity:`var(--n-opacity)`,transition:`opacity .3s var(--n-bezier)`})]),y(`svg`,{height:`1em`,width:`1em`})]),xe=Object.assign(Object.assign({},b.props),{depth:[String,Number],size:[Number,String],color:String,component:[Object,Function]}),Se=C({_n_icon__:!0,name:`Icon`,inheritAttrs:!1,props:xe,setup(e){let{mergedClsPrefixRef:n,inlineThemeDisabled:r}=t(e),i=b(`Icon`,`-icon`,be,ye,e,n),a=M(()=>{let{depth:t}=e,{common:{cubicBezierEaseInOut:n},self:r}=i.value;if(t!==void 0){let{color:e,[`opacity${t}Depth`]:i}=r;return{"--n-bezier":n,"--n-color":e,"--n-opacity":i}}return{"--n-bezier":n,"--n-color":``,"--n-opacity":``}}),o=r?u(`icon`,M(()=>`${e.depth||`d`}`),a,e):void 0;return{mergedClsPrefix:n,mergedStyle:M(()=>{let{size:t,color:n}=e;return{fontSize:oe(t),color:n}}),cssVars:r?void 0:a,themeClass:o?.themeClass,onRender:o?.onRender}},render(){let{$parent:e,depth:t,mergedClsPrefix:n,component:r,onRender:i,themeClass:a}=this;return e?.$options?._n_icon__&&O(`icon`,"don't wrap `n-icon` inside `n-icon`"),i?.(),S(`i`,l(this.$attrs,{role:`img`,class:[`${n}-icon`,a,{[`${n}-icon--depth`]:t,[`${n}-icon--color-transition`]:t!==void 0}],style:[this.cssVars,this.mergedStyle]}),r?S(r):this.$slots)}});function Q(e,t){return e.type===`submenu`||e.type===void 0&&e[t]!==void 0}function Ce(e){return e.type===`group`}function we(e){return e.type===`divider`}function Te(e){return e.type===`render`}var Ee=C({name:`DropdownOption`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null},placement:{type:String,default:`right-start`},props:Object,scrollable:Boolean},setup(e){let t=s(Z),{hoverKeyRef:i,keyboardKeyRef:a,lastToggledSubmenuKeyRef:o,pendingKeyPathRef:c,activeKeyPathRef:l,animatedRef:u,mergedShowRef:d,renderLabelRef:f,renderIconRef:p,labelFieldRef:m,childrenFieldRef:h,renderOptionRef:g,nodePropsRef:_,menuPropsRef:v}=t,y=s(he,null),b=s(X),x=s(G),S=M(()=>e.tmNode.rawNode),C=M(()=>{let{value:t}=h;return Q(e.tmNode.rawNode,t)}),T=M(()=>{let{disabled:t}=e.tmNode;return t}),E=se(M(()=>{if(!C.value)return!1;let{key:t,disabled:n}=e.tmNode;if(n)return!1;let{value:r}=i,{value:s}=a,{value:l}=o,{value:u}=c;return r===null?s===null?l===null?!1:u.includes(t):u.includes(t)&&u[u.length-1]!==t:u.includes(t)}),300,M(()=>a.value===null&&!u.value)),D=M(()=>!!y?.enteringSubmenuRef.value),O=w(!1);r(he,{enteringSubmenuRef:O});function k(){O.value=!0}function A(){O.value=!1}function j(){let{parentKey:t,tmNode:n}=e;n.disabled||d.value&&(o.value=t,a.value=null,i.value=n.key)}function N(){let{tmNode:t}=e;t.disabled||d.value&&i.value!==t.key&&j()}function P(t){if(e.tmNode.disabled||!d.value)return;let{relatedTarget:n}=t;n&&!L({target:n},`dropdownOption`)&&!L({target:n},`scrollbarRail`)&&(i.value=null)}function F(){let{value:n}=C,{tmNode:r}=e;d.value&&!n&&!r.disabled&&(t.doSelect(r.key,r.rawNode),t.doUpdateShow(!1))}return{labelField:m,renderLabel:f,renderIcon:p,siblingHasIcon:b.showIconRef,siblingHasSubmenu:b.hasSubmenuRef,menuProps:v,popoverBody:x,animated:u,mergedShowSubmenu:M(()=>E.value&&!D.value),rawNode:S,hasSubmenu:C,pending:n(()=>{let{value:t}=c,{key:n}=e.tmNode;return t.includes(n)}),childActive:n(()=>{let{value:t}=l,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r<t.length-1}),active:n(()=>{let{value:t}=l,{key:n}=e.tmNode,r=t.findIndex(e=>n===e);return r===-1?!1:r===t.length-1}),mergedDisabled:T,renderOption:g,nodeProps:_,handleClick:F,handleMouseMove:N,handleMouseEnter:j,handleMouseLeave:P,handleSubmenuBeforeEnter:k,handleSubmenuAfterEnter:A}},render(){let{animated:e,rawNode:t,mergedShowSubmenu:n,clsPrefix:r,siblingHasIcon:i,siblingHasSubmenu:a,renderLabel:o,renderIcon:s,renderOption:c,nodeProps:u,props:d,scrollable:f}=this,p=null;if(n){let e=this.menuProps?.call(this,t,t.children);p=S(ke,Object.assign({},e,{clsPrefix:r,scrollable:this.scrollable,tmNodes:this.tmNode.children,parentKey:this.tmNode.key}))}let m={class:[`${r}-dropdown-option-body`,this.pending&&`${r}-dropdown-option-body--pending`,this.active&&`${r}-dropdown-option-body--active`,this.childActive&&`${r}-dropdown-option-body--child-active`,this.mergedDisabled&&`${r}-dropdown-option-body--disabled`],onMousemove:this.handleMouseMove,onMouseenter:this.handleMouseEnter,onMouseleave:this.handleMouseLeave,onClick:this.handleClick},h=u?.(t),g=S(`div`,Object.assign({class:[`${r}-dropdown-option`,h?.class],"data-dropdown-option":!0},h),S(`div`,l(m,d),[S(`div`,{class:[`${r}-dropdown-option-body__prefix`,i&&`${r}-dropdown-option-body__prefix--show-icon`]},[s?s(t):W(t.icon)]),S(`div`,{"data-dropdown-option":!0,class:`${r}-dropdown-option-body__label`},o?o(t):W(t[this.labelField]??t.title)),S(`div`,{"data-dropdown-option":!0,class:[`${r}-dropdown-option-body__suffix`,a&&`${r}-dropdown-option-body__suffix--has-submenu`]},this.hasSubmenu?S(Se,null,{default:()=>S(J,null)}):null)]),this.hasSubmenu?S(R,null,{default:()=>[S(z,null,{default:()=>S(`div`,{class:`${r}-dropdown-offset-container`},S(V,{show:this.mergedShowSubmenu,placement:this.placement,to:f&&this.popoverBody||void 0,teleportDisabled:!f},{default:()=>S(`div`,{class:`${r}-dropdown-menu-wrapper`},e?S(A,{onBeforeEnter:this.handleSubmenuBeforeEnter,onAfterEnter:this.handleSubmenuAfterEnter,name:`fade-in-scale-up-transition`,appear:!0},{default:()=>p}):p)}))})]}):null);return c?c({node:g,option:t}):g}}),De=C({name:`NDropdownGroup`,props:{clsPrefix:{type:String,required:!0},tmNode:{type:Object,required:!0},parentKey:{type:[String,Number],default:null}},render(){let{tmNode:e,parentKey:t,clsPrefix:n}=this,{children:r}=e;return S(h,null,S(_e,{clsPrefix:n,tmNode:e,key:e.key}),r?.map(e=>{let{rawNode:r}=e;return r.show===!1?null:we(r)?S(ge,{clsPrefix:n,key:e.key}):e.isGroup?(O(`dropdown`,"`group` node is not allowed to be put in `group` node."),null):S(Ee,{clsPrefix:n,tmNode:e,parentKey:t,key:e.key})}))}}),Oe=C({name:`DropdownRenderOption`,props:{tmNode:{type:Object,required:!0}},render(){let{rawNode:{render:e,props:t}}=this.tmNode;return S(`div`,t,[e?.()])}}),ke=C({name:`DropdownMenu`,props:{scrollable:Boolean,showArrow:Boolean,arrowStyle:[String,Object],clsPrefix:{type:String,required:!0},tmNodes:{type:Array,default:()=>[]},parentKey:{type:[String,Number],default:null}},setup(e){let{renderIconRef:t,childrenFieldRef:n}=s(Z);r(X,{showIconRef:M(()=>{let n=t.value;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>n?n(e):e.icon);let{rawNode:t}=e;return n?n(t):t.icon})}),hasSubmenuRef:M(()=>{let{value:t}=n;return e.tmNodes.some(e=>{if(e.isGroup)return e.children?.some(({rawNode:e})=>Q(e,t));let{rawNode:n}=e;return Q(n,t)})})});let i=w(null);return r(re,null),r(te,null),r(G,i),{bodyRef:i}},render(){let{parentKey:e,clsPrefix:t,scrollable:n}=this,r=this.tmNodes.map(r=>{let{rawNode:i}=r;return i.show===!1?null:Te(i)?S(Oe,{tmNode:r,key:r.key}):we(i)?S(ge,{clsPrefix:t,key:r.key}):Ce(i)?S(De,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key}):S(Ee,{clsPrefix:t,tmNode:r,parentKey:e,key:r.key,props:i.props,scrollable:n})});return S(`div`,{class:[`${t}-dropdown-menu`,n&&`${t}-dropdown-menu--scrollable`],ref:`bodyRef`},n?S(E,{contentClass:`${t}-dropdown-menu__content`},{default:()=>r}):r,this.showArrow?B({clsPrefix:t,arrowStyle:this.arrowStyle,arrowClass:void 0,arrowWrapperClass:void 0,arrowWrapperStyle:void 0}):null)}}),Ae=g(`dropdown-menu`,`
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`,[ae(),g(`dropdown-option`,`
 position: relative;
 `,[y(`a`,`
 text-decoration: none;
 color: inherit;
 outline: none;
 `,[y(`&::before`,`
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]),g(`dropdown-option-body`,`
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `,[y(`&::before`,`
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `),N(`disabled`,[_(`pending`,`
 color: var(--n-option-text-color-hover);
 `,[P(`prefix, suffix`,`
 color: var(--n-option-text-color-hover);
 `),y(`&::before`,`background-color: var(--n-option-color-hover);`)]),_(`active`,`
 color: var(--n-option-text-color-active);
 `,[P(`prefix, suffix`,`
 color: var(--n-option-text-color-active);
 `),y(`&::before`,`background-color: var(--n-option-color-active);`)]),_(`child-active`,`
 color: var(--n-option-text-color-child-active);
 `,[P(`prefix, suffix`,`
 color: var(--n-option-text-color-child-active);
 `)])]),_(`disabled`,`
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `),_(`group`,`
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `,[P(`prefix`,`
 width: calc(var(--n-option-prefix-width) / 2);
 `,[_(`show-icon`,`
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]),P(`prefix`,`
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `,[_(`show-icon`,`
 width: var(--n-option-icon-prefix-width);
 `),g(`icon`,`
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
 `,[_(`has-submenu`,`
 width: var(--n-option-icon-suffix-width);
 `),g(`icon`,`
 font-size: var(--n-option-icon-size);
 `)]),g(`dropdown-menu`,`pointer-events: all;`)]),g(`dropdown-offset-container`,`
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]),g(`dropdown-divider`,`
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `),g(`dropdown-menu-wrapper`,`
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `),y(`>`,[g(`scrollbar`,`
 height: inherit;
 max-height: inherit;
 `)]),N(`scrollable`,`
 padding: var(--n-padding);
 `),_(`scrollable`,[P(`content`,`
 padding: var(--n-padding);
 `)])]),je={animated:{type:Boolean,default:!0},keyboard:{type:Boolean,default:!0},size:String,inverted:Boolean,placement:{type:String,default:`bottom`},onSelect:[Function,Array],options:{type:Array,default:()=>[]},menuProps:Function,showArrow:Boolean,renderLabel:Function,renderIcon:Function,renderOption:Function,nodeProps:Function,labelField:{type:String,default:`label`},keyField:{type:String,default:`key`},childrenField:{type:String,default:`children`},value:[String,Number]},Me=Object.keys(H),$=Object.assign(Object.assign(Object.assign({},H),je),b.props),Ne=C({name:`Dropdown`,inheritAttrs:!1,props:$,setup(i){let a=w(!1),o=e(D(i,`show`),a),s=M(()=>{let{keyField:e,childrenField:t}=i;return ee(i.options,{getKey(t){return t[e]},getDisabled(e){return e.disabled===!0},getIgnored(e){return e.type===`divider`||e.type===`render`},getChildren(e){return e[t]}})}),c=M(()=>s.value.treeNodes),l=w(null),d=w(null),f=w(null),h=M(()=>l.value??d.value??f.value??null),g=M(()=>s.value.getPath(h.value).keyPath),_=M(()=>s.value.getPath(i.value).keyPath),v=n(()=>i.keyboard&&o.value);K({keydown:{ArrowUp:{prevent:!0,handler:F},ArrowRight:{prevent:!0,handler:P},ArrowDown:{prevent:!0,handler:I},ArrowLeft:{prevent:!0,handler:N},Enter:{prevent:!0,handler:L},Escape:A}},v);let{mergedClsPrefixRef:y,inlineThemeDisabled:x,mergedComponentPropsRef:S}=t(i),C=M(()=>i.size||S?.value?.Dropdown?.size||`medium`),T=b(`Dropdown`,`-dropdown`,Ae,Y,i,y);r(Z,{labelFieldRef:D(i,`labelField`),childrenFieldRef:D(i,`childrenField`),renderLabelRef:D(i,`renderLabel`),renderIconRef:D(i,`renderIcon`),hoverKeyRef:l,keyboardKeyRef:d,lastToggledSubmenuKeyRef:f,pendingKeyPathRef:g,activeKeyPathRef:_,animatedRef:D(i,`animated`),mergedShowRef:o,nodePropsRef:D(i,`nodeProps`),renderOptionRef:D(i,`renderOption`),menuPropsRef:D(i,`menuProps`),doSelect:E,doUpdateShow:O}),m(o,e=>{!i.animated&&!e&&k()});function E(e,t){let{onSelect:n}=i;n&&j(n,e,t)}function O(e){let{"onUpdate:show":t,onUpdateShow:n}=i;t&&j(t,e),n&&j(n,e),a.value=e}function k(){l.value=null,d.value=null,f.value=null}function A(){O(!1)}function N(){z(`left`)}function P(){z(`right`)}function F(){z(`up`)}function I(){z(`down`)}function L(){let e=R();e?.isLeaf&&o.value&&(E(e.key,e.rawNode),O(!1))}function R(){let{value:e}=s,{value:t}=h;return!e||t===null?null:e.getNode(t)??null}function z(e){let{value:t}=h,{value:{getFirstAvailableNode:n}}=s,r=null;if(t===null){let e=n();e!==null&&(r=e.key)}else{let t=R();if(t){let n;switch(e){case`down`:n=t.getNext();break;case`up`:n=t.getPrev();break;case`right`:n=t.getChild();break;case`left`:n=t.getParent();break}n&&(r=n.key)}}r!==null&&(l.value=null,d.value=r)}let B=M(()=>{let{inverted:e}=i,t=C.value,{common:{cubicBezierEaseInOut:n},self:r}=T.value,{padding:a,dividerColor:o,borderRadius:s,optionOpacityDisabled:c,[p(`optionIconSuffixWidth`,t)]:l,[p(`optionSuffixWidth`,t)]:u,[p(`optionIconPrefixWidth`,t)]:d,[p(`optionPrefixWidth`,t)]:f,[p(`fontSize`,t)]:m,[p(`optionHeight`,t)]:h,[p(`optionIconSize`,t)]:g}=r,_={"--n-bezier":n,"--n-font-size":m,"--n-padding":a,"--n-border-radius":s,"--n-option-height":h,"--n-option-prefix-width":f,"--n-option-icon-prefix-width":d,"--n-option-suffix-width":u,"--n-option-icon-suffix-width":l,"--n-option-icon-size":g,"--n-divider-color":o,"--n-option-opacity-disabled":c};return e?(_[`--n-color`]=r.colorInverted,_[`--n-option-color-hover`]=r.optionColorHoverInverted,_[`--n-option-color-active`]=r.optionColorActiveInverted,_[`--n-option-text-color`]=r.optionTextColorInverted,_[`--n-option-text-color-hover`]=r.optionTextColorHoverInverted,_[`--n-option-text-color-active`]=r.optionTextColorActiveInverted,_[`--n-option-text-color-child-active`]=r.optionTextColorChildActiveInverted,_[`--n-prefix-color`]=r.prefixColorInverted,_[`--n-suffix-color`]=r.suffixColorInverted,_[`--n-group-header-text-color`]=r.groupHeaderTextColorInverted):(_[`--n-color`]=r.color,_[`--n-option-color-hover`]=r.optionColorHover,_[`--n-option-color-active`]=r.optionColorActive,_[`--n-option-text-color`]=r.optionTextColor,_[`--n-option-text-color-hover`]=r.optionTextColorHover,_[`--n-option-text-color-active`]=r.optionTextColorActive,_[`--n-option-text-color-child-active`]=r.optionTextColorChildActive,_[`--n-prefix-color`]=r.prefixColor,_[`--n-suffix-color`]=r.suffixColor,_[`--n-group-header-text-color`]=r.groupHeaderTextColor),_}),V=x?u(`dropdown`,M(()=>`${C.value[0]}${i.inverted?`i`:``}`),B,i):void 0;return{mergedClsPrefix:y,mergedTheme:T,mergedSize:C,tmNodes:c,mergedShow:o,handleAfterLeave:()=>{i.animated&&k()},doUpdateShow:O,cssVars:x?void 0:B,themeClass:V?.themeClass,onRender:V?.onRender}},render(){let e=(e,t,n,r,i)=>{var a;let{mergedClsPrefix:o,menuProps:s}=this;(a=this.onRender)==null||a.call(this);let c=s?.(void 0,this.tmNodes.map(e=>e.rawNode))||{},u={ref:q(t),class:[e,`${o}-dropdown`,`${o}-dropdown--${this.mergedSize}-size`,this.themeClass],clsPrefix:o,tmNodes:this.tmNodes,style:[...n,this.cssVars],showArrow:this.showArrow,arrowStyle:this.arrowStyle,scrollable:this.scrollable,onMouseenter:r,onMouseleave:i};return S(ke,l(this.$attrs,u,c))},{mergedTheme:t}=this,n={show:this.mergedShow,theme:t.peers.Popover,themeOverrides:t.peerOverrides.Popover,internalOnAfterLeave:this.handleAfterLeave,internalRenderBody:e,onUpdateShow:this.doUpdateShow,"onUpdate:show":void 0};return S(U,Object.assign({},ie(this.$props,Me),n),{trigger:()=>{var e;return(e=this.$slots).default?.call(e)}})}});export{me as a,Y as c,K as d,xe as i,J as l,$ as n,pe as o,Se as r,fe as s,Ne as t,q as u};