var H=globalThis,J=H.ShadowRoot&&(H.ShadyCSS===void 0||H.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,G=Symbol(),pe=new WeakMap;class Z{constructor(e,t,i){if(this._$cssResult$=!0,i!==G)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this._strings=t}get styleSheet(){let e=this._styleSheet,t=this._strings;if(J&&e===void 0){let i=t!==void 0&&t.length===1;if(i)e=pe.get(t);if(e===void 0){if((this._styleSheet=e=new CSSStyleSheet).replaceSync(this.cssText),i)pe.set(t,e)}}return e}toString(){return this.cssText}}var Le=(e)=>{if(e._$cssResult$===!0)return e.cssText;else if(typeof e==="number")return e;else throw Error(`Value passed to 'css' function must be a 'css' function result: ${e}. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)},He=(e)=>new Z(typeof e==="string"?e:String(e),void 0,G),W=(e,...t)=>{let i=e.length===1?e[0]:t.reduce((s,r,n)=>s+Le(r)+e[n+1],e[0]);return new Z(i,e,G)},me=(e,t)=>{if(J)e.adoptedStyleSheets=t.map((i)=>i instanceof CSSStyleSheet?i:i.styleSheet);else for(let i of t){let s=document.createElement("style"),r=H.litNonce;if(r!==void 0)s.setAttribute("nonce",r);s.textContent=i.cssText,e.appendChild(s)}},We=(e)=>{let t="";for(let i of e.cssRules)t+=i.cssText;return He(t)},ee=J?(e)=>e:(e)=>e instanceof CSSStyleSheet?We(e):e;var{is:Be,defineProperty:Fe,getOwnPropertyDescriptor:fe,getOwnPropertyNames:je,getOwnPropertySymbols:Ke,getPrototypeOf:ge}=Object,Ye=!1,g=globalThis;if(Ye)g.customElements??=customElements;var _=!0,w,_e=g.trustedTypes,Xe=_e?_e.emptyScript:"",be=_?g.reactiveElementPolyfillSupportDevMode:g.reactiveElementPolyfillSupport;if(_)g.litIssuedWarnings??=new Set,w=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!g.litIssuedWarnings.has(t)&&!g.litIssuedWarnings.has(e))console.warn(t),g.litIssuedWarnings.add(t)},queueMicrotask(()=>{if(w("dev-mode","Lit is in dev mode. Not recommended for production!"),g.ShadyDOM?.inUse&&be===void 0)w("polyfill-support-missing","Shadow DOM is being polyfilled via `ShadyDOM` but the `polyfill-support` module has not been loaded.")});var Je=_?(e)=>{if(!g.emitLitDebugLogEvents)return;g.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))}:void 0,O=(e,t)=>e,te={toAttribute(e,t){switch(t){case Boolean:e=e?Xe:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e);break}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch(s){i=null}break}return i}},ve=(e,t)=>!Be(e,t),ye={attribute:!0,type:String,converter:te,reflect:!1,useDefault:!1,hasChanged:ve};Symbol.metadata??=Symbol("metadata");g.litPropertyMetadata??=new WeakMap;class y extends HTMLElement{static addInitializer(e){this.__prepare(),(this._initializers??=[]).push(e)}static get observedAttributes(){return this.finalize(),this.__attributeToPropertyMap&&[...this.__attributeToPropertyMap.keys()]}static createProperty(e,t=ye){if(t.state)t.attribute=!1;if(this.__prepare(),this.prototype.hasOwnProperty(e))t=Object.create(t),t.wrapped=!0;if(this.elementProperties.set(e,t),!t.noAccessor){let i=_?Symbol.for(`${String(e)} (@property() cache)`):Symbol(),s=this.getPropertyDescriptor(e,i,t);if(s!==void 0)Fe(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){let{get:s,set:r}=fe(this.prototype,e)??{get(){return this[t]},set(n){this[t]=n}};if(_&&s==null){if("value"in(fe(this.prototype,e)??{}))throw Error(`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it's actually declared as a value on the prototype. Usually this is due to using @property or @state on a method.`);w("reactive-property-without-getter",`Field ${JSON.stringify(String(e))} on ${this.name} was declared as a reactive property but it does not have a getter. This will be an error in a future version of Lit.`)}return{get:s,set(n){let o=s?.call(this);r?.call(this,n),this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??ye}static __prepare(){if(this.hasOwnProperty(O("elementProperties",this)))return;let e=ge(this);if(e.finalize(),e._initializers!==void 0)this._initializers=[...e._initializers];this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(O("finalized",this)))return;if(this.finalized=!0,this.__prepare(),this.hasOwnProperty(O("properties",this))){let t=this.properties,i=[...je(t),...Ke(t)];for(let s of i)this.createProperty(s,t[s])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[i,s]of t)this.elementProperties.set(i,s)}this.__attributeToPropertyMap=new Map;for(let[t,i]of this.elementProperties){let s=this.__attributeNameForProperty(t,i);if(s!==void 0)this.__attributeToPropertyMap.set(s,t)}if(this.elementStyles=this.finalizeStyles(this.styles),_){if(this.hasOwnProperty("createProperty"))w("no-override-create-property","Overriding ReactiveElement.createProperty() is deprecated. The override will not be called with standard decorators");if(this.hasOwnProperty("getPropertyDescriptor"))w("no-override-get-property-descriptor","Overriding ReactiveElement.getPropertyDescriptor() is deprecated. The override will not be called with standard decorators")}}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(ee(s))}else if(e!==void 0)t.push(ee(e));return t}static __attributeNameForProperty(e,t){let i=t.attribute;return i===!1?void 0:typeof i==="string"?i:typeof e==="string"?e.toLowerCase():void 0}constructor(){super();this.__instanceProperties=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.__reflectingProperty=null,this.__initialize()}__initialize(){this.__updatePromise=new Promise((e)=>this.enableUpdating=e),this._$changedProperties=new Map,this.__saveInstanceProperties(),this.requestUpdate(),this.constructor._initializers?.forEach((e)=>e(this))}addController(e){if((this.__controllers??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected)e.hostConnected?.()}removeController(e){this.__controllers?.delete(e)}__saveInstanceProperties(){let e=new Map,t=this.constructor.elementProperties;for(let i of t.keys())if(this.hasOwnProperty(i))e.set(i,this[i]),delete this[i];if(e.size>0)this.__instanceProperties=e}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return me(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this.__controllers?.forEach((e)=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this.__controllers?.forEach((e)=>e.hostDisconnected?.())}attributeChangedCallback(e,t,i){this._$attributeToProperty(e,i)}__propertyToAttribute(e,t){let s=this.constructor.elementProperties.get(e),r=this.constructor.__attributeNameForProperty(e,s);if(r!==void 0&&s.reflect===!0){let o=(s.converter?.toAttribute!==void 0?s.converter:te).toAttribute(t,s.type);if(_&&this.constructor.enabledWarnings.includes("migration")&&o===void 0)w("undefined-attribute-value",`The attribute value for the ${e} property is undefined on element ${this.localName}. The attribute will be removed, but in the previous version of \`ReactiveElement\`, the attribute would not have changed.`);if(this.__reflectingProperty=e,o==null)this.removeAttribute(r);else this.setAttribute(r,o);this.__reflectingProperty=null}}_$attributeToProperty(e,t){let i=this.constructor,s=i.__attributeToPropertyMap.get(e);if(s!==void 0&&this.__reflectingProperty!==s){let r=i.getPropertyOptions(s),n=typeof r.converter==="function"?{fromAttribute:r.converter}:r.converter?.fromAttribute!==void 0?r.converter:te;this.__reflectingProperty=s;let o=n.fromAttribute(t,r.type);this[s]=o??this.__defaultValues?.get(s)??o,this.__reflectingProperty=null}}requestUpdate(e,t,i,s=!1,r){if(e!==void 0){if(_&&e instanceof Event)w("","The requestUpdate() method was called with an Event as the property name. This is probably a mistake caused by binding this.requestUpdate as an event listener. Instead bind a function that will call it with no arguments: () => this.requestUpdate()");let n=this.constructor;if(s===!1)r=this[e];if(i??=n.getPropertyOptions(e),(i.hasChanged??ve)(r,t)||i.useDefault&&i.reflect&&r===this.__defaultValues?.get(e)&&!this.hasAttribute(n.__attributeNameForProperty(e,i)))this._$changeProperty(e,t,i);else return}if(this.isUpdatePending===!1)this.__updatePromise=this.__enqueueUpdate()}_$changeProperty(e,t,{useDefault:i,reflect:s,wrapped:r},n){if(i&&!(this.__defaultValues??=new Map).has(e)){if(this.__defaultValues.set(e,n??t??this[e]),r!==!0||n!==void 0)return}if(!this._$changedProperties.has(e)){if(!this.hasUpdated&&!i)t=void 0;this._$changedProperties.set(e,t)}if(s===!0&&this.__reflectingProperty!==e)(this.__reflectingProperties??=new Set).add(e)}async __enqueueUpdate(){this.isUpdatePending=!0;try{await this.__updatePromise}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();if(e!=null)await e;return!this.isUpdatePending}scheduleUpdate(){let e=this.performUpdate();if(_&&this.constructor.enabledWarnings.includes("async-perform-update")&&typeof e?.then==="function")w("async-perform-update",`Element ${this.localName} returned a Promise from performUpdate(). This behavior is deprecated and will be removed in a future version of ReactiveElement.`);return e}performUpdate(){if(!this.isUpdatePending)return;if(Je?.({kind:"update"}),!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),_){let r=[...this.constructor.elementProperties.keys()].filter((n)=>this.hasOwnProperty(n)&&(n in ge(this)));if(r.length)throw Error(`The following properties on element ${this.localName} will not trigger updates as expected because they are set using class fields: ${r.join(", ")}. Native class fields and some compiled output will overwrite accessors used for detecting changes. See https://lit.dev/msg/class-field-shadowing for more information.`)}if(this.__instanceProperties){for(let[s,r]of this.__instanceProperties)this[s]=r;this.__instanceProperties=void 0}let i=this.constructor.elementProperties;if(i.size>0)for(let[s,r]of i){let{wrapped:n}=r,o=this[s];if(n===!0&&!this._$changedProperties.has(s)&&o!==void 0)this._$changeProperty(s,void 0,r,o)}}let e=!1,t=this._$changedProperties;try{if(e=this.shouldUpdate(t),e)this.willUpdate(t),this.__controllers?.forEach((i)=>i.hostUpdate?.()),this.update(t);else this.__markUpdated()}catch(i){throw e=!1,this.__markUpdated(),i}if(e)this._$didUpdate(t)}willUpdate(e){}_$didUpdate(e){if(this.__controllers?.forEach((t)=>t.hostUpdated?.()),!this.hasUpdated)this.hasUpdated=!0,this.firstUpdated(e);if(this.updated(e),_&&this.isUpdatePending&&this.constructor.enabledWarnings.includes("change-in-update"))w("change-in-update",`Element ${this.localName} scheduled an update (generally because a property was set) after an update completed, causing a new update to be scheduled. This is inefficient and should be avoided unless the next update can only be scheduled as a side effect of the previous update.`)}__markUpdated(){this._$changedProperties=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.__updatePromise}shouldUpdate(e){return!0}update(e){this.__reflectingProperties&&=this.__reflectingProperties.forEach((t)=>this.__propertyToAttribute(t,this[t])),this.__markUpdated()}updated(e){}firstUpdated(e){}}y.elementStyles=[];y.shadowRootOptions={mode:"open"};y[O("elementProperties",y)]=new Map;y[O("finalized",y)]=new Map;be?.({ReactiveElement:y});if(_){y.enabledWarnings=["change-in-update","async-perform-update"];let e=function(t){if(!t.hasOwnProperty(O("enabledWarnings",t)))t.enabledWarnings=t.enabledWarnings.slice()};y.enableWarning=function(t){if(e(this),!this.enabledWarnings.includes(t))this.enabledWarnings.push(t)},y.disableWarning=function(t){e(this);let i=this.enabledWarnings.indexOf(t);if(i>=0)this.enabledWarnings.splice(i,1)}}(g.reactiveElementVersions??=[]).push("2.1.2");if(_&&g.reactiveElementVersions.length>1)queueMicrotask(()=>{w("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var b=globalThis,l=(e)=>{if(!b.emitLitDebugLogEvents)return;b.dispatchEvent(new CustomEvent("lit-debug",{detail:e}))},Ge=0,R;b.litIssuedWarnings??=new Set,R=(e,t)=>{if(t+=e?` See https://lit.dev/msg/${e} for more information.`:"",!b.litIssuedWarnings.has(t)&&!b.litIssuedWarnings.has(e))console.warn(t),b.litIssuedWarnings.add(t)},queueMicrotask(()=>{R("dev-mode","Lit is in dev mode. Not recommended for production!")});var x=b.ShadyDOM?.inUse&&b.ShadyDOM?.noPatch===!0?b.ShadyDOM.wrap:(e)=>e,B=b.trustedTypes,we=B?B.createPolicy("lit-html",{createHTML:(e)=>e}):void 0,Ze=(e)=>e,Y=(e,t,i)=>Ze,et=(e)=>{if(N!==Y)throw Error("Attempted to overwrite existing lit-html security policy. setSanitizeDOMValueFactory should be called at most once.");N=e},tt=()=>{N=Y},oe=(e,t,i)=>N(e,t,i),Te="$lit$",P=`lit$${Math.random().toFixed(9).slice(2)}$`,Ce="?"+P,it=`<${Ce}>`,q=document,V=()=>q.createComment(""),U=(e)=>e===null||typeof e!="object"&&typeof e!="function",ae=Array.isArray,st=(e)=>ae(e)||typeof e?.[Symbol.iterator]==="function",ie=`[ 	
\f\r]`,rt=`[^ 	
\f\r"'\`<>=]`,nt=`[^\\s"'>=/]`,D=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,$e=1,se=2,ot=3,xe=/-->/g,Ee=/>/g,T=new RegExp(`>|${ie}(?:(${nt}+)(${ie}*=${ie}*(?:${rt}|("|')|))|$)`,"g"),at=0,Se=1,lt=2,Pe=3,re=/'/g,ne=/"/g,qe=/^(?:script|style|textarea|title)$/i,dt=1,F=2,j=3,le=1,K=2,ct=3,ut=4,ht=5,de=6,pt=7,ce=(e)=>(t,...i)=>{if(t.some((s)=>s===void 0))console.warn(`Some template strings are undefined.
This is probably caused by illegal octal escape sequences.`);if(i.some((s)=>s?._$litStatic$))R("",`Static values 'literal' or 'unsafeStatic' cannot be used as values to non-static templates.
Please use the static 'html' tag function. See https://lit.dev/docs/templates/expressions/#static-expressions`);return{["_$litType$"]:e,strings:t,values:i}},p=ce(dt),$t=ce(F),xt=ce(j),M=Symbol.for("lit-noChange"),h=Symbol.for("lit-nothing"),ke=new WeakMap,C=q.createTreeWalker(q,129),N=Y;function Me(e,t){if(!ae(e)||!e.hasOwnProperty("raw")){let i="invalid template strings array";throw i=`
          Internal Error: expected template strings to be an array
          with a 'raw' field. Faking a template strings array by
          calling html or svg like an ordinary function is effectively
          the same as calling unsafeHtml and can lead to major security
          issues, e.g. opening your code up to XSS attacks.
          If you're using the html or svg tagged template functions normally
          and still seeing this error, please file a bug at
          https://github.com/lit/lit/issues/new?template=bug_report.md
          and include information about your build tooling, if any.
        `.trim().replace(/\n */g,`
`),Error(i)}return we!==void 0?we.createHTML(t):t}var mt=(e,t)=>{let i=e.length-1,s=[],r=t===F?"<svg>":t===j?"<math>":"",n,o=D;for(let u=0;u<i;u++){let f=e[u],c=-1,m,v=0,a;while(v<f.length){if(o.lastIndex=v,a=o.exec(f),a===null)break;if(v=o.lastIndex,o===D){if(a[$e]==="!--")o=xe;else if(a[$e]!==void 0)o=Ee;else if(a[se]!==void 0){if(qe.test(a[se]))n=new RegExp(`</${a[se]}`,"g");o=T}else if(a[ot]!==void 0)throw Error("Bindings in tag names are not supported. Please use static templates instead. See https://lit.dev/docs/templates/expressions/#static-expressions")}else if(o===T)if(a[at]===">")o=n??D,c=-1;else if(a[Se]===void 0)c=-2;else c=o.lastIndex-a[lt].length,m=a[Se],o=a[Pe]===void 0?T:a[Pe]==='"'?ne:re;else if(o===ne||o===re)o=T;else if(o===xe||o===Ee)o=D;else o=T,n=void 0}console.assert(c===-1||o===T||o===re||o===ne,"unexpected parse state B");let E=o===T&&e[u+1].startsWith("/>")?" ":"";r+=o===D?f+it:c>=0?(s.push(m),f.slice(0,c)+Te+f.slice(c))+P+E:f+P+(c===-2?u:E)}let d=r+(e[i]||"<?>")+(t===F?"</svg>":t===j?"</math>":"");return[Me(e,d),s]};class z{constructor({strings:e,["_$litType$"]:t},i){this.parts=[];let s,r=0,n=0,o=e.length-1,d=this.parts,[u,f]=mt(e,t);if(this.el=z.createElement(u,i),C.currentNode=this.el.content,t===F||t===j){let c=this.el.content.firstChild;c.replaceWith(...c.childNodes)}while((s=C.nextNode())!==null&&d.length<o){if(s.nodeType===1){{let c=s.localName;if(/^(?:textarea|template)$/i.test(c)&&s.innerHTML.includes(P)){let m=`Expressions are not supported inside \`${c}\` elements. See https://lit.dev/msg/expression-in-${c} for more information.`;if(c==="template")throw Error(m);else R("",m)}}if(s.hasAttributes()){for(let c of s.getAttributeNames())if(c.endsWith(Te)){let m=f[n++],a=s.getAttribute(c).split(P),E=/([.?@])?(.*)/.exec(m);d.push({type:le,index:r,name:E[2],strings:a,ctor:E[1]==="."?Oe:E[1]==="?"?Ae:E[1]==="@"?De:L}),s.removeAttribute(c)}else if(c.startsWith(P))d.push({type:de,index:r}),s.removeAttribute(c)}if(qe.test(s.tagName)){let c=s.textContent.split(P),m=c.length-1;if(m>0){s.textContent=B?B.emptyScript:"";for(let v=0;v<m;v++)s.append(c[v],V()),C.nextNode(),d.push({type:K,index:++r});s.append(c[m],V())}}}else if(s.nodeType===8)if(s.data===Ce)d.push({type:K,index:r});else{let m=-1;while((m=s.data.indexOf(P,m+1))!==-1)d.push({type:pt,index:r}),m+=P.length-1}r++}if(f.length!==n)throw Error('Detected duplicate attribute bindings. This occurs if your template has duplicate attributes on an element tag. For example "<input ?disabled=${true} ?disabled=${false}>" contains a duplicate "disabled" attribute. The error was detected in the following template: \n`'+e.join("${...}")+"`");l&&l({kind:"template prep",template:this,clonableTemplate:this.el,parts:this.parts,strings:e})}static createElement(e,t){let i=q.createElement("template");return i.innerHTML=e,i}}function A(e,t,i=e,s){if(t===M)return t;let r=s!==void 0?i.__directives?.[s]:i.__directive,n=U(t)?void 0:t._$litDirective$;if(r?.constructor!==n){if(r?._$notifyDirectiveConnectionChanged?.(!1),n===void 0)r=void 0;else r=new n(e),r._$initialize(e,i,s);if(s!==void 0)(i.__directives??=[])[s]=r;else i.__directive=r}if(r!==void 0)t=A(e,r._$resolve(e,t.values),r,s);return t}class Ne{constructor(e,t){this._$parts=[],this._$disconnectableChildren=void 0,this._$template=e,this._$parent=t}get parentNode(){return this._$parent.parentNode}get _$isConnected(){return this._$parent._$isConnected}_clone(e){let{el:{content:t},parts:i}=this._$template,s=(e?.creationScope??q).importNode(t,!0);C.currentNode=s;let r=C.nextNode(),n=0,o=0,d=i[0];while(d!==void 0){if(n===d.index){let u;if(d.type===K)u=new Q(r,r.nextSibling,this,e);else if(d.type===le)u=new d.ctor(r,d.name,d.strings,this,e);else if(d.type===de)u=new Ie(r,this,e);this._$parts.push(u),d=i[++o]}if(n!==d?.index)r=C.nextNode(),n++}return C.currentNode=q,s}_update(e){let t=0;for(let i of this._$parts){if(i!==void 0)if(l&&l({kind:"set part",part:i,value:e[t],valueIndex:t,values:e,templateInstance:this}),i.strings!==void 0)i._$setValue(e,i,t),t+=i.strings.length-2;else i._$setValue(e[t]);t++}}}class Q{get _$isConnected(){return this._$parent?._$isConnected??this.__isConnected}constructor(e,t,i,s){this.type=K,this._$committedValue=h,this._$disconnectableChildren=void 0,this._$startNode=e,this._$endNode=t,this._$parent=i,this.options=s,this.__isConnected=s?.isConnected??!0,this._textSanitizer=void 0}get parentNode(){let e=x(this._$startNode).parentNode,t=this._$parent;if(t!==void 0&&e?.nodeType===11)e=t.parentNode;return e}get startNode(){return this._$startNode}get endNode(){return this._$endNode}_$setValue(e,t=this){if(this.parentNode===null)throw Error("This `ChildPart` has no `parentNode` and therefore cannot accept a value. This likely means the element containing the part was manipulated in an unsupported way outside of Lit's control such that the part's marker nodes were ejected from DOM. For example, setting the element's `innerHTML` or `textContent` can do this.");if(e=A(this,e,t),U(e)){if(e===h||e==null||e===""){if(this._$committedValue!==h)l&&l({kind:"commit nothing to child",start:this._$startNode,end:this._$endNode,parent:this._$parent,options:this.options}),this._$clear();this._$committedValue=h}else if(e!==this._$committedValue&&e!==M)this._commitText(e)}else if(e._$litType$!==void 0)this._commitTemplateResult(e);else if(e.nodeType!==void 0){if(this.options?.host===e){this._commitText("[probable mistake: rendered a template's host in itself (commonly caused by writing ${this} in a template]"),console.warn("Attempted to render the template host",e,"inside itself. This is almost always a mistake, and in dev mode ","we render some warning text. In production however, we'll ","render it, which will usually result in an error, and sometimes ","in the element disappearing from the DOM.");return}this._commitNode(e)}else if(st(e))this._commitIterable(e);else this._commitText(e)}_insert(e){return x(x(this._$startNode).parentNode).insertBefore(e,this._$endNode)}_commitNode(e){if(this._$committedValue!==e){if(this._$clear(),N!==Y){let t=this._$startNode.parentNode?.nodeName;if(t==="STYLE"||t==="SCRIPT"){let i="Forbidden";if(t==="STYLE")i="Lit does not support binding inside style nodes. This is a security risk, as style injection attacks can exfiltrate data and spoof UIs. Consider instead using css`...` literals to compose styles, and do dynamic styling with css custom properties, ::parts, <slot>s, and by mutating the DOM rather than stylesheets.";else i="Lit does not support binding inside script nodes. This is a security risk, as it could allow arbitrary code execution.";throw Error(i)}}l&&l({kind:"commit node",start:this._$startNode,parent:this._$parent,value:e,options:this.options}),this._$committedValue=this._insert(e)}}_commitText(e){if(this._$committedValue!==h&&U(this._$committedValue)){let t=x(this._$startNode).nextSibling;if(this._textSanitizer===void 0)this._textSanitizer=oe(t,"data","property");e=this._textSanitizer(e),l&&l({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}else{let t=q.createTextNode("");if(this._commitNode(t),this._textSanitizer===void 0)this._textSanitizer=oe(t,"data","property");e=this._textSanitizer(e),l&&l({kind:"commit text",node:t,value:e,options:this.options}),t.data=e}this._$committedValue=e}_commitTemplateResult(e){let{values:t,["_$litType$"]:i}=e,s=typeof i==="number"?this._$getTemplate(e):(i.el===void 0&&(i.el=z.createElement(Me(i.h,i.h[0]),this.options)),i);if(this._$committedValue?._$template===s)l&&l({kind:"template updating",template:s,instance:this._$committedValue,parts:this._$committedValue._$parts,options:this.options,values:t}),this._$committedValue._update(t);else{let r=new Ne(s,this),n=r._clone(this.options);l&&l({kind:"template instantiated",template:s,instance:r,parts:r._$parts,options:this.options,fragment:n,values:t}),r._update(t),l&&l({kind:"template instantiated and updated",template:s,instance:r,parts:r._$parts,options:this.options,fragment:n,values:t}),this._commitNode(n),this._$committedValue=r}}_$getTemplate(e){let t=ke.get(e.strings);if(t===void 0)ke.set(e.strings,t=new z(e));return t}_commitIterable(e){if(!ae(this._$committedValue))this._$committedValue=[],this._$clear();let t=this._$committedValue,i=0,s;for(let r of e){if(i===t.length)t.push(s=new Q(this._insert(V()),this._insert(V()),this,this.options));else s=t[i];s._$setValue(r),i++}if(i<t.length)this._$clear(s&&x(s._$endNode).nextSibling,i),t.length=i}_$clear(e=x(this._$startNode).nextSibling,t){this._$notifyConnectionChanged?.(!1,!0,t);while(e!==this._$endNode){let i=x(e).nextSibling;x(e).remove(),e=i}}setConnected(e){if(this._$parent===void 0)this.__isConnected=e,this._$notifyConnectionChanged?.(e);else throw Error("part.setConnected() may only be called on a RootPart returned from render().")}}class L{get tagName(){return this.element.tagName}get _$isConnected(){return this._$parent._$isConnected}constructor(e,t,i,s,r){if(this.type=le,this._$committedValue=h,this._$disconnectableChildren=void 0,this.element=e,this.name=t,this._$parent=s,this.options=r,i.length>2||i[0]!==""||i[1]!=="")this._$committedValue=Array(i.length-1).fill(new String),this.strings=i;else this._$committedValue=h;this._sanitizer=void 0}_$setValue(e,t=this,i,s){let r=this.strings,n=!1;if(r===void 0){if(e=A(this,e,t,0),n=!U(e)||e!==this._$committedValue&&e!==M,n)this._$committedValue=e}else{let o=e;e=r[0];let d,u;for(d=0;d<r.length-1;d++){if(u=A(this,o[i+d],t,d),u===M)u=this._$committedValue[d];if(n||=!U(u)||u!==this._$committedValue[d],u===h)e=h;else if(e!==h)e+=(u??"")+r[d+1];this._$committedValue[d]=u}}if(n&&!s)this._commitValue(e)}_commitValue(e){if(e===h)x(this.element).removeAttribute(this.name);else{if(this._sanitizer===void 0)this._sanitizer=N(this.element,this.name,"attribute");e=this._sanitizer(e??""),l&&l({kind:"commit attribute",element:this.element,name:this.name,value:e,options:this.options}),x(this.element).setAttribute(this.name,e??"")}}}class Oe extends L{constructor(){super(...arguments);this.type=ct}_commitValue(e){if(this._sanitizer===void 0)this._sanitizer=N(this.element,this.name,"property");e=this._sanitizer(e),l&&l({kind:"commit property",element:this.element,name:this.name,value:e,options:this.options}),this.element[this.name]=e===h?void 0:e}}class Ae extends L{constructor(){super(...arguments);this.type=ut}_commitValue(e){l&&l({kind:"commit boolean attribute",element:this.element,name:this.name,value:!!(e&&e!==h),options:this.options}),x(this.element).toggleAttribute(this.name,!!e&&e!==h)}}class De extends L{constructor(e,t,i,s,r){super(e,t,i,s,r);if(this.type=ht,this.strings!==void 0)throw Error(`A \`<${e.localName}>\` has a \`@${t}=...\` listener with invalid content. Event listeners in templates must have exactly one expression and no surrounding text.`)}_$setValue(e,t=this){if(e=A(this,e,t,0)??h,e===M)return;let i=this._$committedValue,s=e===h&&i!==h||e.capture!==i.capture||e.once!==i.once||e.passive!==i.passive,r=e!==h&&(i===h||s);if(l&&l({kind:"commit event listener",element:this.element,name:this.name,value:e,options:this.options,removeListener:s,addListener:r,oldListener:i}),s)this.element.removeEventListener(this.name,this,i);if(r)this.element.addEventListener(this.name,this,e);this._$committedValue=e}handleEvent(e){if(typeof this._$committedValue==="function")this._$committedValue.call(this.options?.host??this.element,e);else this._$committedValue.handleEvent(e)}}class Ie{constructor(e,t,i){this.element=e,this.type=de,this._$disconnectableChildren=void 0,this._$parent=t,this.options=i}get _$isConnected(){return this._$parent._$isConnected}_$setValue(e){l&&l({kind:"commit to element binding",element:this.element,value:e,options:this.options}),A(this,e)}}var ft=b.litHtmlPolyfillSupportDevMode;ft?.(z,Q);(b.litHtmlVersions??=[]).push("3.3.3");if(b.litHtmlVersions.length>1)queueMicrotask(()=>{R("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});var I=(e,t,i)=>{if(t==null)throw TypeError(`The container to render into may not be ${t}`);let s=Ge++,r=i?.renderBefore??t,n=r._$litPart$;if(l&&l({kind:"begin render",id:s,value:e,container:t,options:i,part:n}),n===void 0){let o=i?.renderBefore??null;r._$litPart$=n=new Q(t.insertBefore(V(),o),o,void 0,i??{})}return n._$setValue(e),l&&l({kind:"end render",id:s,value:e,container:t,options:i,part:n}),n};I.setSanitizer=et,I.createSanitizer=oe,I._testOnlyClearSanitizerFactoryDoNotCallOrElse=tt;var gt=(e,t)=>e,ue=!0,k=globalThis,Re;if(ue)k.litIssuedWarnings??=new Set,Re=(e,t)=>{if(t+=` See https://lit.dev/msg/${e} for more information.`,!k.litIssuedWarnings.has(t)&&!k.litIssuedWarnings.has(e))console.warn(t),k.litIssuedWarnings.add(t)};class S extends y{constructor(){super(...arguments);this.renderOptions={host:this},this.__childPart=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();if(!this.hasUpdated)this.renderOptions.isConnected=this.isConnected;super.update(e),this.__childPart=I(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this.__childPart?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this.__childPart?.setConnected(!1)}render(){return M}}S._$litElement$=!0;S[gt("finalized",S)]=!0;k.litElementHydrateSupport?.({LitElement:S});var _t=ue?k.litElementPolyfillSupportDevMode:k.litElementPolyfillSupport;_t?.({LitElement:S});(k.litElementVersions??=[]).push("4.2.2");if(ue&&k.litElementVersions.length>1)queueMicrotask(()=>{Re("multiple-versions","Multiple versions of Lit loaded. Loading multiple versions is not recommended.")});class Ve extends S{static properties={hass:{attribute:!1},config:{attribute:!1}};static styles=W`
    :host {
      display: block;
      color: var(--primary-text-color);
    }
    .editor {
      display: grid;
      gap: 1rem;
      padding: 1rem;
    }
    label {
      display: grid;
      gap: 0.35rem;
      color: var(--secondary-text-color);
      font-size: 0.85rem;
    }
    select,
    input[type="number"] {
      box-sizing: border-box;
      width: 100%;
      min-height: 2.5rem;
      border: 1px solid var(--divider-color);
      border-radius: var(--ha-card-border-radius, 8px);
      padding: 0 0.75rem;
      color: var(--primary-text-color);
      background: var(--card-background-color);
      font: inherit;
    }
    .toggle {
      grid-template-columns: 1fr auto;
      align-items: center;
      min-height: 2.5rem;
    }
    .hint {
      color: var(--secondary-text-color);
      font-size: 0.78rem;
      line-height: 1.35;
    }
  `;setConfig(e){this.config=e}updateConfig(e){let t={...this.config,...e};this.config=t,this.dispatchEvent(new CustomEvent("config-changed",{detail:{config:t},bubbles:!0,composed:!0}))}get mediaPlayers(){if(!this.hass)return[];return Object.entries(this.hass.states).filter(([e])=>e.startsWith("media_player.")).sort(([e],[t])=>e.localeCompare(t))}render(){let e=this.config??{entity:""};return p` <div class="editor">
      <label>
        Music Assistant player
        <select
          .value=${e.entity}
          @change=${(t)=>this.updateConfig({entity:t.target.value})}
        >
          <option value="" disabled>Select a media player</option>
          ${this.mediaPlayers.map(([t,i])=>p`<option value=${t}>${i.attributes.friendly_name??t}</option>`)}
        </select>
      </label>
      <label class="toggle">
        <span>Show queue</span>
        <input
          type="checkbox"
          .checked=${e.show_queue!==!1}
          @change=${(t)=>this.updateConfig({show_queue:t.target.checked})}
        />
      </label>
      <label>
        Queue items to load
        <input
          type="number"
          min="1"
          max="500"
          step="1"
          .value=${String(e.queue_limit??100)}
          @change=${(t)=>this.updateConfig({queue_limit:Math.max(1,Number(t.target.value)||100)})}
        />
        <span class="hint">Maximum number of full queue entries requested from mass_queue.</span>
      </label>
      <label>
        Queue items visible before scrolling
        <input
          type="number"
          min="1"
          max="50"
          step="1"
          .value=${String(e.queue_visible_items??7)}
          @change=${(t)=>this.updateConfig({queue_visible_items:Math.max(1,Number(t.target.value)||7)})}
        />
        <span class="hint"
          >Additional loaded items remain available by scrolling the queue panel.</span
        >
      </label>
    </div>`}}customElements.define("wide-media-card-editor",Ve);var he=(e)=>{if(e===void 0||e===null||!Number.isFinite(e))return"0:00";let t=Math.max(0,Math.floor(e));return`${Math.floor(t/60)}:${String(t%60).padStart(2,"0")}`};var Ue=W`
  :host {
    display: block;
    height: 100%;
    min-height: 250px;
  }
  ha-card {
    height: 100%;
    min-height: 250px;
    overflow: hidden;
    color: var(--primary-text-color);
    background: var(--ha-card-background, var(--card-background-color));
    border-radius: var(--ha-card-border-radius, 12px);
    box-shadow: var(--ha-card-box-shadow, none);
  }
  .shell {
    height: 100%;
    min-height: 250px;
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(20rem, 1.04fr);
  }
  .player {
    position: relative;
    min-width: 0;
    padding: clamp(0.75rem, 1.6vw, 1.5rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: clamp(0.55rem, 1vw, 0.8rem);
  }
  .artwork {
    flex: none;
    width: var(--cover-size);
    height: var(--cover-size);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
    background: var(--secondary-background-color);
    box-shadow: var(--ha-card-box-shadow, none);
  }
  .artwork img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .artwork ha-icon {
    display: block;
    width: 44%;
    height: 44%;
    translate: 0 1px;
    color: var(--secondary-text-color);
  }
  .identity {
    width: 100%;
    min-width: 0;
    text-align: center;
  }
  .name {
    display: block;
    color: var(--secondary-text-color);
    font-size: clamp(0.76rem, 1.4vw, 0.95rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .title {
    margin-top: 0.18rem;
    font-size: clamp(1.05rem, 2.2vw, 1.55rem);
    font-weight: 600;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .artist {
    margin-top: 0.18rem;
    color: var(--secondary-text-color);
    font-size: clamp(0.86rem, 1.7vw, 1.08rem);
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .power {
    position: absolute;
    top: clamp(0.75rem, 1.6vw, 1.5rem);
    right: clamp(0.75rem, 1.6vw, 1.5rem);
  }
  .timeline {
    width: 100%;
    margin-top: auto;
    display: grid;
    grid-template-columns: auto minmax(5rem, 1fr) auto;
    align-items: center;
    gap: 0.65rem;
    font-variant-numeric: tabular-nums;
    font-size: 0.82rem;
    color: var(--secondary-text-color);
  }
  ha-slider {
    width: 100%;
    --ha-slider-track-size: 6px;
  }
  ha-slider#position-slider {
    --ha-slider-track-size: 4px;
    --ha-slider-track-color: linear-gradient(
      to right,
      transparent var(--position-slider-progress),
      var(--slider-track-color, var(--ha-progress-bar-track-color))
        var(--position-slider-progress)
    );
  }
  .controls {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: clamp(0.25rem, 1.1vw, 0.75rem);
  }
  button {
    width: 2.65rem;
    height: 2.65rem;
    border: 0;
    border-radius: 50%;
    padding: 0;
    display: inline-grid;
    place-items: center;
    color: var(--primary-text-color);
    background: transparent;
    cursor: pointer;
  }
  button:hover {
    background: var(--secondary-background-color);
  }
  button:focus-visible {
    outline: 2px solid var(--primary-color);
    outline-offset: 2px;
  }
  button ha-icon {
    width: 1.45rem;
    height: 1.45rem;
  }
  .primary {
    width: 3.7rem;
    height: 3.7rem;
    background: var(--primary-color);
    color: var(--text-primary-color, var(--primary-text-color));
  }
  .primary:hover {
    background: var(--primary-color);
    filter: brightness(1.08);
  }
  .active {
    color: var(--primary-color);
  }
  .volume {
    width: 100%;
    display: grid;
    grid-template-columns: auto minmax(5rem, 1fr);
    gap: 0.55rem;
    align-items: center;
  }
  .volume button {
    width: 2.2rem;
    height: 2.2rem;
  }
  .volume button ha-icon {
    width: 1.3rem;
    height: 1.3rem;
  }
  .queue {
    border-left: 1px solid var(--divider-color);
    min-width: 0;
    padding: clamp(0.75rem, 1.6vw, 1.5rem);
    display: grid;
    grid-template-rows: auto minmax(0, 1fr) auto;
    gap: 0.8rem;
  }
  .queue-heading {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    color: var(--secondary-text-color);
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
  .queue-heading-actions {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    min-width: 0;
  }
  .queue-count {
    letter-spacing: 0;
    text-transform: none;
    font-weight: 400;
  }
  .queue-toggle {
    width: auto;
    height: 1.9rem;
    border-radius: var(--ha-card-border-radius, 8px);
    padding: 0 0.55rem;
    color: var(--secondary-text-color);
    font: inherit;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0;
    text-transform: none;
    white-space: nowrap;
  }
  .queue-toggle.active {
    color: var(--primary-color);
    background: var(--secondary-background-color);
  }
  .next {
    min-height: 0;
    display: grid;
    align-content: center;
    gap: 0.75rem;
  }
  .next-label {
    color: var(--secondary-text-color);
    font-size: 0.8rem;
  }
  .queue-item {
    min-width: 0;
    display: grid;
    grid-template-columns: 3.8rem minmax(0, 1fr);
    gap: 0.85rem;
    align-items: center;
  }
  .queue-art {
    width: 3.8rem;
    height: 3.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: calc(var(--ha-card-border-radius, 12px) / 1.8);
    overflow: hidden;
    background: var(--secondary-background-color);
  }
  .queue-art img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: cover;
  }
  .queue-art ha-icon {
    display: block;
    flex: none;
    width: 45%;
    height: 45%;
    color: var(--secondary-text-color);
  }
  .queue-title,
  .queue-subtitle {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .queue-title {
    font-size: clamp(0.95rem, 1.75vw, 1.15rem);
  }
  .queue-subtitle {
    margin-top: 0.2rem;
    color: var(--secondary-text-color);
    font-size: 0.9rem;
  }
  .empty {
    color: var(--secondary-text-color);
    font-size: 0.95rem;
  }
  .queue-footer {
    padding-top: 1rem;
    border-top: 1px solid var(--divider-color);
    color: var(--secondary-text-color);
    font-size: 0.86rem;
  }
  .queue-list {
    min-height: 0;
    max-height: calc(var(--queue-visible-items, 7) * 3.5rem);
    overflow: auto;
    display: grid;
    align-content: start;
    gap: 0.35rem;
    padding-right: 0.2rem;
  }
  .queue-row {
    min-width: 0;
    display: grid;
    grid-template-columns: 2.8rem minmax(0, 1fr) auto;
    align-items: center;
    gap: 0.65rem;
    border-radius: calc(var(--ha-card-border-radius, 12px) / 1.8);
    padding: 0.35rem;
    cursor: pointer;
  }
  .queue-row:hover {
    background: var(--secondary-background-color);
  }
  .queue-row.current {
    background: var(--secondary-background-color);
    box-shadow: inset 3px 0 0 var(--primary-color);
  }
  .queue-row .queue-art {
    width: 2.8rem;
    height: 2.8rem;
  }
  .queue-row .queue-title {
    font-size: 0.94rem;
  }
  .queue-row .queue-subtitle {
    font-size: 0.8rem;
  }
  .queue-row.current .queue-title {
    color: var(--primary-color);
    font-weight: 600;
  }
  .queue-meta {
    min-width: 0;
    display: flex;
    align-items: center;
    gap: 0.45rem;
  }
  .waveform {
    height: 0.8rem;
    display: inline-flex;
    align-items: center;
    gap: 2px;
    color: var(--primary-color);
  }
  .waveform span {
    width: 2px;
    height: var(--wave-height);
    border-radius: var(--ha-card-border-radius, 12px);
    background: currentColor;
    animation: queue-wave 700ms ease-in-out infinite alternate;
    animation-delay: var(--wave-delay);
    animation-play-state: paused;
  }
  .waveform.playing span {
    animation-play-state: running;
  }
  @keyframes queue-wave {
    from {
      transform: scaleY(0.45);
    }
    to {
      transform: scaleY(1);
    }
  }
  .queue-actions {
    display: flex;
    align-items: center;
    gap: 0.05rem;
  }
  .queue-actions button {
    width: 1.75rem;
    height: 1.75rem;
    color: var(--secondary-text-color);
  }
  .queue-actions button:hover {
    color: var(--primary-text-color);
  }
  .queue-actions button ha-icon {
    width: 1.05rem;
    height: 1.05rem;
  }
  @media (max-width: 700px) {
    .shell {
      grid-template-columns: 1fr;
    }
    .queue {
      display: none;
    }
  }
  @media (max-height: 390px) {
    :host,
    ha-card,
    .shell {
      min-height: 220px;
    }
    .volume {
      display: none;
    }
  }
`;class ze extends S{static properties={hass:{attribute:!1},config:{attribute:!1},queue:{state:!0},fullQueue:{state:!0},showPreviousQueueItems:{state:!0}};queueKey;queueFetchInFlight=!1;timer;resizeObserver;constructor(){super();this.showPreviousQueueItems=!1}static styles=Ue;connectedCallback(){super.connectedCallback(),this.style.setProperty("--cover-size","clamp(6rem, calc(var(--card-height, 420px) * .38), 17.5rem)"),this.timer=window.setInterval(()=>this.requestUpdate(),1000),this.resizeObserver=new ResizeObserver(([e])=>{this.style.setProperty("--card-height",`${e.contentRect.height}px`)}),this.resizeObserver.observe(this)}disconnectedCallback(){if(super.disconnectedCallback(),this.timer)window.clearInterval(this.timer);this.resizeObserver?.disconnect()}setConfig(e){if(!e.entity||!e.entity.startsWith("media_player."))throw Error("Set entity to a media_player entity.");this.config=e,this.showPreviousQueueItems=!1,this.style.setProperty("--queue-visible-items",String(Math.max(1,Math.floor(e.queue_visible_items??7)))),this.queue=void 0,this.fullQueue=void 0,this.queueKey=void 0}getCardSize(){return 6}static getConfigElement(){return document.createElement("wide-media-card-editor")}static getStubConfig(e){return{entity:Object.keys(e.states).find((i)=>i.startsWith("media_player."))??"media_player.example"}}getGridOptions(){return{min_rows:4,min_columns:6}}updated(e){if(e.has("hass")||e.has("config"))this.refreshQueue()}get entity(){return this.config&&this.hass?this.hass.states[this.config.entity]:void 0}async refreshQueue(){let e=this.entity;if(!this.hass||!this.config||!e||this.config.show_queue===!1||this.queueFetchInFlight)return;let t=`${e.state}:${e.last_updated}`;if(t===this.queueKey)return;this.queueFetchInFlight=!0;try{let i=await this.getMassQueue();if(i){this.fullQueue=i,this.queue=void 0,this.queueKey=t;return}this.fullQueue=void 0;let s=await this.hass.callService("music_assistant","get_queue",{},{entity_id:this.config.entity},void 0,!0),r="response"in s?s.response:s;this.queue=r[this.config.entity]??Object.values(r)[0],this.queueKey=t}catch{this.queue=void 0,this.queueKey=t}finally{this.queueFetchInFlight=!1}}async getMassQueue(){if(!this.hass||!this.config)return;try{let e=await this.hass.callService("mass_queue","get_queue_items",{entity:this.config.entity,limit:this.config.queue_limit??100,limit_before:this.showPreviousQueueItems?5:0,limit_after:this.config.queue_limit??100},void 0,void 0,!0),t="response"in e?e.response:e;return t[this.config.entity]??Object.values(t)[0]??[]}catch{return}}queueImage(e){let t=e.local_image_encoded?.trim();if(t){if(t.startsWith("data:"))return t.endsWith(",")?void 0:t;return`data:image/jpeg;base64,${t}`}return e.media_image||void 0}queueItems(e,t){if(typeof t!=="string")return e;let i=e.findIndex((s)=>s.media_content_id===t);if(i<0)return e;return this.showPreviousQueueItems?e.slice(0,i):e.slice(i+1)}editQueue(e,t){if(!this.hass||!this.config)return;this.hass.callService("mass_queue",e,{entity:this.config.entity,queue_item_id:t}).then(()=>{this.queueKey=void 0,this.refreshQueue()})}call(e,t={}){if(!this.hass||!this.config)return;this.hass.callService("media_player",e,t,{entity_id:this.config.entity})}toggleQueueDirection(){this.showPreviousQueueItems=!this.showPreviousQueueItems,this.queueKey=void 0,this.refreshQueue()}sliderValue(e){return Number(e.detail.value)}position(e){let t=Number(e.attributes.media_position)||0,i=e.attributes.media_position_updated_at;if(e.state!=="playing"||typeof i!=="string")return t;return t+Math.max(0,(Date.now()-new Date(i).getTime())/1000)}renderArtwork(e){return p`<div class="artwork">
      ${e?p`<img src=${e} alt="Album artwork" />`:p`<ha-icon icon="mdi:music"></ha-icon>`}
    </div>`}render(){let e=this.entity;if(!this.config)return h;if(!e)return p`<ha-card
        ><div class="player">Entity ${this.config.entity} is unavailable.</div></ha-card
      >`;let t=e.attributes,i=Number(t.media_duration)||0,s=Math.min(this.position(e),i||1/0),r=i?Math.min(100,Math.max(0,s/i*100)):0,n=e.state==="playing",o=e.state==="off",d=Math.round((Number(t.volume_level)||0)*100),u=this.queue?.next_item,f=u?.media_item,c=f?.artists?.map((a)=>a.name).filter(Boolean).join(", ")||f?.album?.name,m=this.fullQueue,v=m&&this.queueItems(m,t.media_content_id);return p` <ha-card>
      <div class="shell">
        <section class="player">
          ${this.renderArtwork(typeof t.entity_picture==="string"?t.entity_picture:void 0)}
          <div class="identity">
            <span class="name">${t.friendly_name??this.config.entity}</span>
            <div class="title">
              ${o?"Player is off":t.media_title??"Nothing playing"}
            </div>
            <div class="artist">
              ${o?"Turn on the player to start music":t.media_artist??t.media_album_name??"Select music in Music Assistant"}
            </div>
          </div>
          <button
            class="power ${o?"":"active"}"
            @click=${()=>this.call(o?"turn_on":"turn_off")}
            aria-label=${o?"Turn on":"Turn off"}
          >
            <ha-icon icon="mdi:power"></ha-icon>
          </button>
          <div class="timeline">
            <span>${he(s)}</span>
            <ha-slider
              id="position-slider"
              min="0"
              max=${i||0}
              .value=${s}
              style=${`--position-slider-progress: ${r}%;`}
              ?disabled=${!i}
              @value-changed=${(a)=>this.call("media_seek",{seek_position:this.sliderValue(a)})}
              aria-label="Playback position"
            ></ha-slider>
            <span>${he(i)}</span>
          </div>
          <div class="controls">
            <button
              class=${t.shuffle?"active":""}
              @click=${()=>this.call("shuffle_set",{shuffle:!t.shuffle})}
              aria-label="Shuffle"
            >
              <ha-icon icon="mdi:shuffle"></ha-icon>
            </button>
            <button @click=${()=>this.call("media_previous_track")} aria-label="Previous track">
              <ha-icon icon="mdi:skip-previous"></ha-icon>
            </button>
            <button
              class="primary"
              @click=${()=>this.call("media_play_pause")}
              aria-label=${n?"Pause":"Play"}
            >
              <ha-icon icon=${n?"mdi:pause":"mdi:play"}></ha-icon>
            </button>
            <button @click=${()=>this.call("media_next_track")} aria-label="Next track">
              <ha-icon icon="mdi:skip-next"></ha-icon>
            </button>
            <button
              class=${t.repeat&&t.repeat!=="off"?"active":""}
              @click=${()=>this.call("repeat_set",{repeat:t.repeat==="all"?"one":t.repeat==="one"?"off":"all"})}
              aria-label="Repeat"
            >
              <ha-icon icon=${t.repeat==="one"?"mdi:repeat-once":"mdi:repeat"}></ha-icon>
            </button>
          </div>
          <div class="volume">
            <button
              @click=${()=>this.call("volume_mute",{is_volume_muted:!t.is_volume_muted})}
              aria-label="Mute"
            >
              <ha-icon
                icon=${t.is_volume_muted?"mdi:volume-off":"mdi:volume-high"}
              ></ha-icon>
            </button>
            <ha-slider
              min="0"
              max="100"
              .value=${d}
              @value-changed=${(a)=>this.call("volume_set",{volume_level:this.sliderValue(a)/100})}
              aria-label="Volume"
            ></ha-slider>
          </div>
        </section>
        ${this.config.show_queue===!1?h:p` <aside class="queue">
                <div class="queue-heading">
                  <span
                    >${m?this.showPreviousQueueItems?"Queue history":"Up next":"Up next"}</span
                  >
                  <div class="queue-heading-actions">
                    ${m?p`<span class="queue-count">${v.length} tracks</span><button class="queue-toggle ${this.showPreviousQueueItems?"active":""}" @click=${this.toggleQueueDirection} aria-pressed=${String(this.showPreviousQueueItems)} aria-label=${this.showPreviousQueueItems?"Show next tracks":"Show previous tracks"}>${this.showPreviousQueueItems?"Next tracks":"Previous tracks"}</button>`:this.queue?p`<span class="queue-count">${this.queue.items} in queue</span>`:h}
                  </div>
                </div>
                ${v?p`
                          <div class="queue-list">
                            ${v.map((a)=>{let E=Boolean(a.media_content_id&&a.media_content_id===t.media_content_id);return p` <div
                            class="queue-row ${E?"current":""}"
                            @click=${()=>this.editQueue("play_queue_item",a.queue_item_id)}
                          >
                            <div class="queue-art">
                              ${this.queueImage(a)?p`<img src=${this.queueImage(a)} alt="" />`:p`<ha-icon icon="mdi:music-note"></ha-icon>`}
                            </div>
                            <div>
                              <div class="queue-title">${a.media_title}</div>
                              <div class="queue-meta">
                                <div class="queue-subtitle">
                                  ${a.media_artist??a.media_album_name??"Music Assistant"}
                                </div>
                                ${E?p`<span class="waveform ${n?"playing":""}" aria-label=${n?"Playing":"Paused"}>${[".35rem",".8rem",".5rem",".7rem"].map((X,Qe)=>p`<span style=${`--wave-height:${X};--wave-delay:${Qe*120}ms`}></span>`)}</span>`:h}
                              </div>
                            </div>
                            <div
                              class="queue-actions"
                              @click=${(X)=>X.stopPropagation()}
                            >
                              <button
                                @click=${()=>this.editQueue("move_queue_item_up",a.queue_item_id)}
                                aria-label="Move up"
                              >
                                <ha-icon icon="mdi:chevron-up"></ha-icon>
                              </button>
                              <button
                                @click=${()=>this.editQueue("move_queue_item_down",a.queue_item_id)}
                                aria-label="Move down"
                              >
                                <ha-icon icon="mdi:chevron-down"></ha-icon>
                              </button>
                              <button
                                @click=${()=>this.editQueue("move_queue_item_next",a.queue_item_id)}
                                aria-label="Play next"
                              >
                                <ha-icon icon="mdi:skip-next"></ha-icon>
                              </button>
                              <button
                                @click=${()=>this.editQueue("remove_queue_item",a.queue_item_id)}
                                aria-label="Remove from queue"
                              >
                                <ha-icon icon="mdi:close"></ha-icon>
                              </button>
                            </div>
                          </div>`})}
                          </div>
                        `:p` <div class="next">
                            ${u?p` <span class="next-label"
                                  >Next from ${this.queue?.name??"queue"}</span
                                >
                                <div class="queue-item">
                                  <div class="queue-art">
                                    ${f?.image?p`<img src=${f.image} alt="" />`:p`<ha-icon icon="mdi:music-note"></ha-icon>`}
                                  </div>
                                  <div>
                                    <div class="queue-title">${f?.name??u.name}</div>
                                    <div class="queue-subtitle">${c??"Music Assistant"}</div>
                                  </div>
                                </div>`:p`<div class="empty">
                                ${this.queue?"No track queued next":"Queue unavailable"}
                              </div>`}
                          </div>
                          <div class="queue-footer">
                            Install mass_queue for the full editable queue.
                          </div>`}
              </aside>`}
      </div>
    </ha-card>`}}customElements.define("wide-media-card",ze);window.customCards=window.customCards||[];window.customCards.push({type:"wide-media-card",name:"Wide Media Card",description:"Responsive landscape media player controls and Music Assistant queue context."});
