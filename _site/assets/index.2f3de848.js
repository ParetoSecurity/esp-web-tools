import{_ as c}from"./esptool.ff31e290.js";import"./vendor.f5adc482.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const n=class extends HTMLElement{static preload(){c(()=>import("./connect.53788441.js").then(r=>r.c),["assets/connect.53788441.js","assets/esptool.ff31e290.js","assets/vendor.f5adc482.js","assets/lit.ce96bc43.js","assets/mui.dc35c550.js"])}connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:"open"}),!n.isSupported||!n.isAllowed){this.toggleAttribute("install-unsupported",!0),this.renderRoot.innerHTML=n.isAllowed?"<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>":"<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>";return}this.toggleAttribute("install-supported",!0),this.addEventListener("mouseover",n.preload);const r=document.createElement("slot");r.addEventListener("click",async o=>{o.preventDefault(),(await c(()=>import("./connect.53788441.js").then(e=>e.c),["assets/connect.53788441.js","assets/esptool.ff31e290.js","assets/vendor.f5adc482.js","assets/lit.ce96bc43.js","assets/mui.dc35c550.js"])).connect(this)}),r.name="activate";const s=document.createElement("button");if(s.innerText="CONNECT",r.append(s),"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype){const o=new CSSStyleSheet;o.replaceSync(n.style),this.renderRoot.adoptedStyleSheets=[o]}else{const o=document.createElement("style");o.innerText=n.style,this.renderRoot.append(o)}this.renderRoot.append(r)}};let i=n;i.isSupported="serial"in navigator;i.isAllowed=window.isSecureContext;i.style=`
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
  }`;customElements.define("esp-web-install-button",i);
