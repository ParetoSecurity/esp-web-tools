(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="modulepreload",b=function(r){return"/"+r},u={},d=function(n,o,c){return!o||o.length===0?n():Promise.all(o.map(e=>{if(e=b(e),e in u)return;u[e]=!0;const t=e.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const s=document.createElement("link");if(s.rel=t?"stylesheet":h,t||(s.as="script",s.crossOrigin=""),s.href=e,document.head.appendChild(s),t)return new Promise((p,f)=>{s.addEventListener("load",p),s.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${e}`)))})})).then(()=>n())},i=class extends HTMLElement{static preload(){d(()=>import("./connect.395e0877.js").then(r=>r.c),[])}connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:"open"}),!i.isSupported||!i.isAllowed){this.toggleAttribute("install-unsupported",!0),this.renderRoot.innerHTML=i.isAllowed?"<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>":"<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>";return}this.toggleAttribute("install-supported",!0),this.addEventListener("mouseover",i.preload);const r=document.createElement("slot");r.addEventListener("click",async o=>{o.preventDefault(),(await d(()=>import("./connect.395e0877.js").then(e=>e.c),[])).connect(this)}),r.name="activate";const n=document.createElement("button");if(n.innerText="CONNECT",r.append(n),"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype){const o=new CSSStyleSheet;o.replaceSync(i.style),this.renderRoot.adoptedStyleSheets=[o]}else{const o=document.createElement("style");o.innerText=i.style,this.renderRoot.append(o)}this.renderRoot.append(r)}};let a=i;a.isSupported="serial"in navigator;a.isAllowed=window.isSecureContext;a.style=`
  button {
    position: relative;
    cursor: pointer;
    font-size: 14px;
    padding: 8px 28px;
    color: var(--esp-tools-button-text-color, #fff);
    background-color: var(--esp-tools-button-color, #03a9f4);
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.2);
  }
  button::before {
    content: " ";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.2;
    border-radius: 4px;
  }
  button:hover {
    box-shadow: 0 4px 8px 0 rgba(0,0,0,.14), 0 1px 7px 0 rgba(0,0,0,.12), 0 3px 1px -1px rgba(0,0,0,.2);
  }
  button:hover::before {
    background-color: rgba(255,255,255,.8);
  }
  button:focus {
    outline: none;
  }
  button:focus::before {
    background-color: white;
  }
  button:active::before {
    background-color: grey;
  }
  :host([active]) button {
    color: rgba(0, 0, 0, 0.38);
    background-color: rgba(0, 0, 0, 0.12);
    box-shadow: none;
    cursor: unset;
    pointer-events: none;
  }
  improv-wifi-launch-button {
    display: block;
    margin-top: 16px;
  }
  .hidden {
    display: none;
  }`;customElements.define("esp-web-install-button",a);export{d as _};
