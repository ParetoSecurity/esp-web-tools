import{E as ie,T as oe,_ as ne}from"./esptool-df672ea9.js";import{i as w,b as $,s as U,y as l,w as H,t as f}from"./lit-281e958b.js";import{s as re,B as ae,a as le,C as ce,b as de,D as he,c as ue,F as ge,d as pe,I as _e,e as fe,T as be,f as we,S as me,g as Ee,L as ve,h as Re,i as ye}from"./mui-a9fbb867.js";import"./vendor-e4ee578b.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();class M extends ae{}M.styles=[re,w`
      .mdc-button {
        min-width: initial;
      }
      :host([text-left]) .mdc-button__label {
        text-align: left;
      }
    `];customElements.define("ewt-button",M);class q extends ce{}q.styles=[le];customElements.define("ewt-checkbox",q);class ke{constructor(e){this.targetElement=e,this.state={bold:!1,italic:!1,underline:!1,strikethrough:!1,foregroundColor:null,backgroundColor:null,carriageReturn:!1,secret:!1}}logs(){return this.targetElement.innerText}addLine(e){const t=/(?:\033|\\033)(?:\[(.*?)[@-~]|\].*?(?:\007|\033\\))/g;let s=0;this.state.carriageReturn&&(e!==`
`&&this.targetElement.removeChild(this.targetElement.lastChild),this.state.carriageReturn=!1),e.includes("\r")&&(this.state.carriageReturn=!0);const o=document.createElement("span");o.classList.add("line"),this.targetElement.appendChild(o);const n=r=>{if(r==="")return;const a=document.createElement("span");if(this.state.bold&&a.classList.add("log-bold"),this.state.italic&&a.classList.add("log-italic"),this.state.underline&&a.classList.add("log-underline"),this.state.strikethrough&&a.classList.add("log-strikethrough"),this.state.secret&&a.classList.add("log-secret"),this.state.foregroundColor!==null&&a.classList.add(`log-fg-${this.state.foregroundColor}`),this.state.backgroundColor!==null&&a.classList.add(`log-bg-${this.state.backgroundColor}`),a.appendChild(document.createTextNode(r)),o.appendChild(a),this.state.secret){const c=document.createElement("span");c.classList.add("log-secret-redacted"),c.appendChild(document.createTextNode("[redacted]")),o.appendChild(c)}};for(;;){const r=t.exec(e);if(r===null)break;const a=r.index;if(n(e.substring(s,a)),s=a+r[0].length,r[1]!==void 0)for(const c of r[1].split(";"))switch(parseInt(c)){case 0:this.state.bold=!1,this.state.italic=!1,this.state.underline=!1,this.state.strikethrough=!1,this.state.foregroundColor=null,this.state.backgroundColor=null,this.state.secret=!1;break;case 1:this.state.bold=!0;break;case 3:this.state.italic=!0;break;case 4:this.state.underline=!0;break;case 5:this.state.secret=!0;break;case 6:this.state.secret=!1;break;case 9:this.state.strikethrough=!0;break;case 22:this.state.bold=!1;break;case 23:this.state.italic=!1;break;case 24:this.state.underline=!1;break;case 29:this.state.strikethrough=!1;break;case 30:this.state.foregroundColor="black";break;case 31:this.state.foregroundColor="red";break;case 32:this.state.foregroundColor="green";break;case 33:this.state.foregroundColor="yellow";break;case 34:this.state.foregroundColor="blue";break;case 35:this.state.foregroundColor="magenta";break;case 36:this.state.foregroundColor="cyan";break;case 37:this.state.foregroundColor="white";break;case 39:this.state.foregroundColor=null;break;case 41:this.state.backgroundColor="red";break;case 42:this.state.backgroundColor="green";break;case 43:this.state.backgroundColor="yellow";break;case 44:this.state.backgroundColor="blue";break;case 45:this.state.backgroundColor="magenta";break;case 46:this.state.backgroundColor="cyan";break;case 47:this.state.backgroundColor="white";break;case 40:case 49:this.state.backgroundColor=null;break}}n(e.substring(s)),this.targetElement.scrollTop+56>=this.targetElement.scrollHeight-this.targetElement.offsetHeight&&(this.targetElement.scrollTop=this.targetElement.scrollHeight)}}const Se=`
  .log {
    flex: 1;
    background-color: #1c1c1c;
    font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
      monospace;
    font-size: 12px;
    padding: 16px;
    overflow: auto;
    line-height: 1.45;
    border-radius: 3px;
    white-space: pre-wrap;
    overflow-wrap: break-word;
    color: #ddd;
  }

  .log-bold {
    font-weight: bold;
  }
  .log-italic {
    font-style: italic;
  }
  .log-underline {
    text-decoration: underline;
  }
  .log-strikethrough {
    text-decoration: line-through;
  }
  .log-underline.log-strikethrough {
    text-decoration: underline line-through;
  }
  .log-secret {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }
  .log-secret-redacted {
    opacity: 0;
    width: 1px;
    font-size: 1px;
  }
  .log-fg-black {
    color: rgb(128, 128, 128);
  }
  .log-fg-red {
    color: rgb(255, 0, 0);
  }
  .log-fg-green {
    color: rgb(0, 255, 0);
  }
  .log-fg-yellow {
    color: rgb(255, 255, 0);
  }
  .log-fg-blue {
    color: rgb(0, 0, 255);
  }
  .log-fg-magenta {
    color: rgb(255, 0, 255);
  }
  .log-fg-cyan {
    color: rgb(0, 255, 255);
  }
  .log-fg-white {
    color: rgb(187, 187, 187);
  }
  .log-bg-black {
    background-color: rgb(0, 0, 0);
  }
  .log-bg-red {
    background-color: rgb(255, 0, 0);
  }
  .log-bg-green {
    background-color: rgb(0, 255, 0);
  }
  .log-bg-yellow {
    background-color: rgb(255, 255, 0);
  }
  .log-bg-blue {
    background-color: rgb(0, 0, 255);
  }
  .log-bg-magenta {
    background-color: rgb(255, 0, 255);
  }
  .log-bg-cyan {
    background-color: rgb(0, 255, 255);
  }
  .log-bg-white {
    background-color: rgb(255, 255, 255);
  }
`,A=i=>new Promise(e=>setTimeout(e,i));class Ie{constructor(){this.chunks=""}transform(e,t){this.chunks+=e;const s=this.chunks.split(`\r
`);this.chunks=s.pop(),s.forEach(o=>t.enqueue(o+`\r
`))}flush(e){e.enqueue(this.chunks)}}class Ce extends HTMLElement{constructor(){super(...arguments),this.allowInput=!0}logs(){var e;return((e=this._console)==null?void 0:e.logs())||""}connectedCallback(){if(this._console)return;const e=this.attachShadow({mode:"open"});if(e.innerHTML=`
      <style>
        :host, input {
          background-color: #1c1c1c;
          color: #ddd;
          font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
            monospace;
          line-height: 1.45;
          display: flex;
          flex-direction: column;
        }
        form {
          display: flex;
          align-items: center;
          padding: 0 8px 0 16px;
        }
        input {
          flex: 1;
          padding: 4px;
          margin: 0 8px;
          border: 0;
          outline: none;
        }
        ${Se}
      </style>
      <div class="log"></div>
      ${this.allowInput?`<form>
                >
                <input autofocus>
              </form>
            `:""}
    `,this._console=new ke(this.shadowRoot.querySelector("div")),this.allowInput){const o=this.shadowRoot.querySelector("input");this.addEventListener("click",()=>{var n;((n=getSelection())==null?void 0:n.toString())===""&&o.focus()}),o.addEventListener("keydown",n=>{n.key==="Enter"&&(n.preventDefault(),n.stopPropagation(),this._sendCommand())})}const t=new AbortController,s=this._connect(t.signal);this._cancelConnection=()=>(t.abort(),s)}async _connect(e){this.logger.debug("Starting console read loop");try{await this.port.readable.pipeThrough(new TextDecoderStream,{signal:e}).pipeThrough(new TransformStream(new Ie)).pipeTo(new WritableStream({write:t=>{this._console.addLine(t.replace("\r",""))}})),e.aborted||(this._console.addLine(""),this._console.addLine(""),this._console.addLine("Terminal disconnected"))}catch(t){this._console.addLine(""),this._console.addLine(""),this._console.addLine(`Terminal disconnected: ${t}`)}finally{await A(100),this.logger.debug("Finished console read loop")}}async _sendCommand(){const e=this.shadowRoot.querySelector("input"),t=e.value,s=new TextEncoder,o=this.port.writable.getWriter();await o.write(s.encode(t+`\r
`)),this._console.addLine(`> ${t}\r
`),e.value="",e.focus();try{o.releaseLock()}catch(n){console.error("Ignoring release lock error",n)}}async disconnect(){this._cancelConnection&&(await this._cancelConnection(),this._cancelConnection=void 0)}async reset(){this.logger.debug("Triggering reset."),await this.port.setSignals({dataTerminalReady:!1,requestToSend:!0}),await this.port.setSignals({dataTerminalReady:!1,requestToSend:!1}),await new Promise(e=>setTimeout(e,1e3))}}customElements.define("ewt-console",Ce);class G extends he{}G.styles=[de,w`
      .mdc-dialog__title {
        padding-right: 52px;
      }
    `];customElements.define("ewt-dialog",G);class z extends ge{}z.styles=[ue];customElements.define("ewt-formfield",z);class K extends _e{}K.styles=[pe];customElements.define("ewt-icon-button",K);class j extends be{}j.styles=[fe,w`
      .mdc-floating-label {
        line-height: 1.15em;
      }
    `];customElements.define("ewt-textfield",j);class Q extends me{}Q.styles=[we,w`
      .mdc-floating-label {
        line-height: 1.15em;
      }
    `];customElements.define("ewt-select",Q);class Z extends ve{}Z.styles=[Ee];customElements.define("ewt-list-item",Z);class Y extends ye{}Y.styles=[Re];customElements.define("ewt-circular-progress",Y);var xe=Object.defineProperty,Ae=Object.getOwnPropertyDescriptor,J=(i,e,t,s)=>{for(var o=s>1?void 0:s?Ae(e,t):e,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(e,t,o):r(o))||o);return s&&o&&xe(e,t,o),o};class P extends U{render(){return l`
      <div>
        <ewt-circular-progress
          active
          ?indeterminate=${this.progress===void 0}
          .progress=${this.progress!==void 0?this.progress/100:void 0}
          density="8"
        ></ewt-circular-progress>
        ${this.progress!==void 0?l`<div>${this.progress}%</div>`:""}
      </div>
      ${this.label}
    `}}P.styles=w`
    :host {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    ewt-circular-progress {
      margin-bottom: 16px;
    }
  `;J([$()],P.prototype,"label",2);J([$()],P.prototype,"progress",2);customElements.define("ewt-page-progress",P);var Oe=Object.defineProperty,Ne=Object.getOwnPropertyDescriptor,X=(i,e,t,s)=>{for(var o=s>1?void 0:s?Ne(e,t):e,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(e,t,o):r(o))||o);return s&&o&&Oe(e,t,o),o};class D extends U{render(){return l`
      <div class="icon">${this.icon}</div>
      ${this.label}
    `}}D.styles=w`
    :host {
      display: flex;
      flex-direction: column;
      text-align: center;
    }
    .icon {
      font-size: 50px;
      line-height: 80px;
      color: black;
    }
    ewt-circular-progress {
      margin-bottom: 16px;
    }
  `;X([$()],D.prototype,"icon",2);X([$()],D.prototype,"label",2);customElements.define("ewt-page-message",D);const Le=H`
  <svg width="24" height="24" viewBox="0 0 24 24">
    <path
      d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
    />
  </svg>
`,Te=H`
  <svg viewBox="0 0 24 24" title="Software">
    <path
      fill="currentColor"
      d="M9.5,8.5L11,10L8,13L11,16L9.5,17.5L5,13L9.5,8.5M14.5,17.5L13,16L16,13L13,10L14.5,8.5L19,13L14.5,17.5M21,2H3A2,2 0 0,0 1,4V20A2,2 0 0,0 3,22H21A2,2 0 0,0 23,20V4A2,2 0 0,0 21,2M21,20H3V6H21V20Z"
    />
  </svg>
`,$e=H`
  <svg viewBox="0 0 24 24" title="Chipset">
    <path
      fill="currentColor"
      d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z"
    />
  </svg>
`;var d=(i=>(i.INITIALIZING="initializing",i.PREPARING="preparing",i.ERASING="erasing",i.WRITING="writing",i.FINISHED="finished",i.ERROR="error",i))(d||{}),k=(i=>(i.FAILED_INITIALIZING="failed_initialize",i.FAILED_MANIFEST_FETCH="fetch_manifest_failed",i.NOT_SUPPORTED="not_supported",i.FAILED_FIRMWARE_DOWNLOAD="failed_firmware_download",i.WRITE_FAILED="write_failed",i))(k||{});const Pe=["I".charCodeAt(0),"M".charCodeAt(0),"P".charCodeAt(0),"R".charCodeAt(0),"O".charCodeAt(0),"V".charCodeAt(0),1];var C=(i=>(i[i.CURRENT_STATE=1]="CURRENT_STATE",i[i.ERROR_STATE=2]="ERROR_STATE",i[i.RPC=3]="RPC",i[i.RPC_RESULT=4]="RPC_RESULT",i))(C||{}),m=(i=>(i[i.READY=2]="READY",i[i.PROVISIONING=3]="PROVISIONING",i[i.PROVISIONED=4]="PROVISIONED",i))(m||{}),O=(i=>(i[i.NO_ERROR=0]="NO_ERROR",i[i.INVALID_RPC_PACKET=1]="INVALID_RPC_PACKET",i[i.UNKNOWN_RPC_COMMAND=2]="UNKNOWN_RPC_COMMAND",i[i.UNABLE_TO_CONNECT=3]="UNABLE_TO_CONNECT",i[i.UNKNOWN_ERROR=255]="UNKNOWN_ERROR",i))(O||{});const De={0:"NO_ERROR",1:"INVALID_RPC_PACKET",2:"UNKNOWN_RPC_COMMAND",3:"UNABLE_TO_CONNECT",255:"UNKNOWN_ERROR"};var x=(i=>(i[i.SEND_WIFI_SETTINGS=1]="SEND_WIFI_SETTINGS",i[i.REQUEST_CURRENT_STATE=2]="REQUEST_CURRENT_STATE",i[i.REQUEST_INFO=3]="REQUEST_INFO",i[i.REQUEST_WIFI_NETWORKS=4]="REQUEST_WIFI_NETWORKS",i))(x||{});class ee extends Error{constructor(){super("Port is not ready")}}const Fe=i=>new Promise(e=>setTimeout(e,i)),Ue=(i,e=2)=>{let t=i.toString(16).toUpperCase();return t.startsWith("-")?"-0x"+t.substring(1).padStart(e,"0"):"0x"+t.padStart(e,"0")},W=i=>"["+i.map(e=>Ue(e)).join(", ")+"]";class He extends EventTarget{constructor(e,t){if(super(),this.port=e,this.logger=t,this.error=O.NO_ERROR,e.readable===null)throw new Error("Port is not readable");if(e.writable===null)throw new Error("Port is not writable")}async initialize(e=1e3){if(this.logger.log("Initializing Improv Serial"),this._processInput(),await Fe(1e3),this._reader===void 0)throw new ee;try{await new Promise(async(t,s)=>{setTimeout(()=>s(new Error("Improv Wi-Fi Serial not detected")),e),await this.requestCurrentState(),t(void 0)}),await this.requestInfo()}catch(t){throw await this.close(),t}return this.info}async close(){await new Promise(e=>{this._reader||e(void 0),this._reader.cancel(),this.addEventListener("disconnect",e,{once:!0})})}async requestCurrentState(){let e;try{await new Promise(async(s,o)=>{this.addEventListener("state-changed",s,{once:!0});const n=r=>{this.removeEventListener("state-changed",s),o(r)};e=this._sendRPCWithResponse(x.REQUEST_CURRENT_STATE,[]),e.catch(n)})}catch(s){throw this._rpcFeedback=void 0,new Error(`Error fetching current state: ${s}`)}if(this.state!==m.PROVISIONED){this._rpcFeedback=void 0;return}const t=await e;this.nextUrl=t[0]}async requestInfo(){const e=await this._sendRPCWithResponse(x.REQUEST_INFO,[]);this.info={firmware:e[0],version:e[1],name:e[3],chipFamily:e[2]}}async provision(e,t,s){const o=new TextEncoder,n=o.encode(e),r=o.encode(t),a=o.encode(s),c=[n.length,...n,r.length,...r,a.length,...a],u=await this._sendRPCWithResponse(x.SEND_WIFI_SETTINGS,c);this.nextUrl=u[0]}async scan(){const t=(await this._sendRPCWithMultipleResponses(x.REQUEST_WIFI_NETWORKS,[])).map(([s,o,n])=>({name:s,rssi:parseInt(o),secured:n==="YES"}));return t.sort((s,o)=>s.name.toLocaleLowerCase().localeCompare(o.name.toLocaleLowerCase())),t}_sendRPC(e,t){this.writePacketToStream(C.RPC,[e,t.length,...t])}async _sendRPCWithResponse(e,t){if(this._rpcFeedback)throw new Error("Only 1 RPC command that requires feedback can be active");return await new Promise((s,o)=>{this._rpcFeedback={command:e,resolve:s,reject:o},this._sendRPC(e,t)})}async _sendRPCWithMultipleResponses(e,t){if(this._rpcFeedback)throw new Error("Only 1 RPC command that requires feedback can be active");return await new Promise((s,o)=>{this._rpcFeedback={command:e,resolve:s,reject:o,receivedData:[]},this._sendRPC(e,t)})}async _processInput(){this.logger.debug("Starting read loop"),this._reader=this.port.readable.getReader();try{let e=[],t,s=0;for(;;){const{value:o,done:n}=await this._reader.read();if(n)break;if(!(!o||o.length===0))for(const r of o){if(t===!1){r===10&&(t=void 0);continue}if(t===!0){e.push(r),e.length===s&&(this._handleIncomingPacket(e),t=void 0,e=[]);continue}if(r===10){e=[];continue}if(e.push(r),e.length!==9)continue;if(t=String.fromCharCode(...e.slice(0,6))==="IMPROV",!t){e=[];continue}s=9+e[8]+1}}}catch(e){this.logger.error("Error while reading serial port",e)}finally{this._reader.releaseLock(),this._reader=void 0}this.logger.debug("Finished read loop"),this.dispatchEvent(new Event("disconnect"))}_handleIncomingPacket(e){const t=e.slice(6),s=t[0],o=t[1],n=t[2],r=t.slice(3,3+n);if(this.logger.debug("PROCESS",{version:s,packetType:o,packetLength:n,data:W(r)}),s!==1){this.logger.error("Received unsupported version",s);return}let a=t[3+n],c=0;for(let u=0;u<e.length-1;u++)c+=e[u];if(c=c&255,c!==a){this.logger.error(`Received invalid checksum ${a}. Expected ${c}`);return}if(o===C.CURRENT_STATE)this.state=r[0],this.dispatchEvent(new CustomEvent("state-changed",{detail:this.state}));else if(o===C.ERROR_STATE)this.error=r[0],r[0]>0&&this._rpcFeedback&&(this._rpcFeedback.reject(De[r[0]]||`UNKNOWN_ERROR (${r[0]})`),this._rpcFeedback=void 0),this.dispatchEvent(new CustomEvent("error-changed",{detail:this.error}));else if(o===C.RPC_RESULT){if(!this._rpcFeedback){this.logger.error("Received result while not waiting for one");return}const u=r[0];if(u!==this._rpcFeedback.command){this.logger.error(`Received result for command ${u} but expected ${this._rpcFeedback.command}`);return}const E=[],N=r[1];let _=2;for(;_<2+N;)E.push(String.fromCodePoint(...r.slice(_+1,_+r[_]+1))),_+=r[_]+1;"receivedData"in this._rpcFeedback?E.length>0?this._rpcFeedback.receivedData.push(E):(this._rpcFeedback.resolve(this._rpcFeedback.receivedData),this._rpcFeedback=void 0):(this._rpcFeedback.resolve(E),this._rpcFeedback=void 0)}else this.logger.error("Unable to handle packet",t)}async writePacketToStream(e,t){const s=new Uint8Array([...Pe,e,t.length,...t,0,0]);s[s.length-2]=s.reduce((n,r)=>n+r,0)&255,s[s.length-1]=10,this.logger.debug("Writing to stream:",W(new Array(...s)));const o=this.port.writable.getWriter();await o.write(s);try{o.releaseLock()}catch(n){console.error("Ignoring release lock error",n)}}}const y=async i=>{await i.device.setSignals({dataTerminalReady:!1,requestToSend:!0}),await i.device.setSignals({dataTerminalReady:!1,requestToSend:!1})},We=async(i,e,t,s,o)=>{let n,r;const a=h=>i({...h,manifest:s,build:n,chipFamily:r}),c=new oe(e),u=new ie(c,921600);window.esploader=u,a({state:d.INITIALIZING,message:"Initializing...",details:{done:!1}});try{await u.main_fn()}catch(h){console.error(h),a({state:d.ERROR,message:"Failed to initialize. Try resetting your device or holding the BOOT button while clicking INSTALL.",details:{error:k.FAILED_INITIALIZING,details:h}}),await y(c),await c.disconnect();return}if(r=await u.chip.CHIP_NAME,!u.chip.ROM_TEXT){a({state:d.ERROR,message:`Chip ${r} is not supported`,details:{error:k.NOT_SUPPORTED,details:`Chip ${r} is not supported`}}),await y(c),await c.disconnect();return}if(a({state:d.INITIALIZING,message:`Initialized. Found ${r}`,details:{done:!0}}),n=s.builds.find(h=>h.chipFamily===r),!n){a({state:d.ERROR,message:`Your ${r} board is not supported.`,details:{error:k.NOT_SUPPORTED,details:r}}),await y(c),await c.disconnect();return}a({state:d.PREPARING,message:"Preparing installation...",details:{done:!1}});const E=new URL(t,location.toString()).toString(),N=n.parts.map(async h=>{const p=new URL(h.path,E).toString(),v=await fetch(p);if(!v.ok)throw new Error(`Downlading firmware ${h.path} failed: ${v.status}`);const R=new FileReader,T=await v.blob();return new Promise(se=>{R.addEventListener("load",()=>se(R.result)),R.readAsBinaryString(T)})}),_=[];let I=0;for(let h=0;h<N.length;h++)try{const p=await N[h];_.push({data:p,address:n.parts[h].offset}),I+=p.length}catch(p){a({state:d.ERROR,message:p.message,details:{error:k.FAILED_FIRMWARE_DOWNLOAD,details:p.message}}),await y(c),await c.disconnect();return}a({state:d.PREPARING,message:"Installation prepared",details:{done:!0}}),a({state:d.WRITING,message:"Writing progress: 0%",details:{bytesTotal:I,bytesWritten:0,percentage:0}});let L=0;try{await u.write_flash({fileArray:_,flash_size:"keep",erase_all:o,reportProgress(h,p,v){const R=p/v*_[h].data.length,T=Math.floor((L+R)/I*100);if(p===v){L+=R;return}a({state:d.WRITING,message:`Writing progress: ${T}%`,details:{bytesTotal:I,bytesWritten:L+p,percentage:T}})}})}catch(h){a({state:d.ERROR,message:h.message,details:{error:k.WRITE_FAILED,details:h}}),await y(c),await c.disconnect();return}a({state:d.WRITING,message:"Writing complete",details:{bytesTotal:I,bytesWritten:L,percentage:100}}),await A(100),console.log("HARD RESET"),await y(c),console.log("DISCONNECT"),await c.disconnect(),a({state:d.FINISHED,message:"All done!"})},Ve=(i,e="")=>{const t=document.createElement("a");t.target="_blank",t.href=i,t.download=e,document.body.appendChild(t),t.dispatchEvent(new MouseEvent("click")),document.body.removeChild(t)},Be=(i,e="")=>{const t=new Blob([i],{type:"text/plain"}),s=URL.createObjectURL(t);Ve(s,e),setTimeout(()=>URL.revokeObjectURL(s),0)},Me=(i,e,t,s)=>{s=s||{};const o=new CustomEvent(e,{bubbles:s.bubbles===void 0?!0:s.bubbles,cancelable:Boolean(s.cancelable),composed:s.composed===void 0?!0:s.composed,detail:t});i.dispatchEvent(o)},qe=async i=>{const e=new URL(i,location.toString()).toString(),s=await(await fetch(e)).json();return"new_install_skip_erase"in s&&(console.warn('Manifest option "new_install_skip_erase" is deprecated. Use "new_install_prompt_erase" instead.'),s.new_install_skip_erase&&(s.new_install_prompt_erase=!0)),s},Ge=w`
  :host {
    --mdc-theme-primary: var(--improv-primary-color, #03a9f4);
    --mdc-theme-on-primary: var(--improv-on-primary-color, #fff);
    --improv-danger-color: #db4437;
    --improv-text-color: rgba(0, 0, 0, 0.6);
    --mdc-theme-text-primary-on-background: var(--improv-text-color);
    --mdc-dialog-content-ink-color: var(--improv-text-color);
    text-align: left;
    font-size: 16px;
    --mdc-typography-headline6-font-size: 1.25em;
    --mdc-typography-headline6-line-height: 2em;
    --mdc-typography-body1-font-size: 1em;
    --mdc-typography-body1-line-height: 1.5em;
    --mdc-typography-button-font-size: 0.875em;
    --mdc-typography-button-line-height: 2.25em;
    --mdc-typography-subtitle1-font-size: 1em;
    --mdc-typography-subtitle1-line-height: 1.75em;
  }

  a {
    color: var(--improv-primary-color, #03a9f4);
  }

  a.button {
    text-decoration: none;
  }
`;var ze=Object.defineProperty,Ke=Object.getOwnPropertyDescriptor,b=(i,e,t,s)=>{for(var o=s>1?void 0:s?Ke(e,t):e,n=i.length-1,r;n>=0;n--)(r=i[n])&&(o=(s?r(e,t,o):r(o))||o);return s&&o&&ze(e,t,o),o};const V="⚠️",B="🎉";class g extends U{constructor(){super(...arguments),this.logger=console,this._state="DASHBOARD",this._installErase=!1,this._installConfirmed=!1,this._provisionForce=!1,this._wasProvisioned=!1,this._busy=!1,this._selectedSsid=-1,this._handleDisconnect=()=>{this._state="ERROR",this._error="Disconnected"}}render(){if(!this.port)return l``;let e,t,s=!1,o=!1;return this._client===void 0&&this._state!=="INSTALL"&&this._state!=="LOGS"?this._error?[e,t,s]=this._renderError(this._error):(t=this._renderProgress("Connecting"),s=!0):this._state==="INSTALL"?[e,t,s,o]=this._renderInstall():this._state==="ASK_ERASE"?[e,t]=this._renderAskErase():this._state==="ERROR"?[e,t,s]=this._renderError(this._error):this._state==="DASHBOARD"?[e,t,s,o]=this._client?this._renderDashboard():this._renderDashboardNoImprov():this._state==="PROVISION"?[e,t,s]=this._renderProvision():this._state==="LOGS"&&([e,t,s]=this._renderLogs()),l`
      <ewt-dialog
        open
        .heading=${e}
        scrimClickAction
        @closed=${this._handleClose}
        .hideActions=${s}
      >
        ${e&&o?l`
              <ewt-icon-button dialogAction="close">
                ${Le}
              </ewt-icon-button>
            `:""}
        ${t}
      </ewt-dialog>
    `}_renderProgress(e,t){return l`
      <ewt-page-progress
        .label=${e}
        .progress=${t}
      ></ewt-page-progress>
    `}_renderError(e){const t="Error",s=l`
      <ewt-page-message .icon=${V} .label=${e}></ewt-page-message>
      <ewt-button
        slot="primaryAction"
        dialogAction="ok"
        label="Close"
      ></ewt-button>
    `;return[t,s,!1]}_renderDashboard(){const e=this._info.name;let t,s=!0,o=!0;return t=l`
      <div class="table-row">
        ${Te}
        <div>${this._info.firmware}&nbsp;${this._info.version}</div>
      </div>
      <div class="table-row last">
        ${$e}
        <div>${this._info.chipFamily}</div>
      </div>
      <div class="dashboard-buttons">
        ${this._isSameVersion?"":l`
              <div>
                <ewt-button
                  text-left
                  .label=${this._isSameFirmware?`Update ${this._manifest.name}`:`Install ${this._manifest.name}`}
                  @click=${()=>{this._isSameFirmware?this._startInstall(!1):this._manifest.new_install_prompt_erase?this._state="ASK_ERASE":this._startInstall(!0)}}
                ></ewt-button>
              </div>
            `}
        ${this._client.nextUrl===void 0?"":l`
              <div>
                <a
                  href=${this._client.nextUrl}
                  class="has-button"
                  target="_blank"
                >
                  <ewt-button label="Visit Device"></ewt-button>
                </a>
              </div>
            `}
        ${!this._manifest.home_assistant_domain||this._client.state!==m.PROVISIONED?"":l`
              <div>
                <a
                  href=${`https://my.home-assistant.io/redirect/config_flow_start/?domain=${this._manifest.home_assistant_domain}`}
                  class="has-button"
                  target="_blank"
                >
                  <ewt-button label="Add to Home Assistant"></ewt-button>
                </a>
              </div>
            `}
        <div>
          <ewt-button
            .label=${this._client.state===m.READY,"Configure Device"}
            @click=${()=>{this._state="PROVISION",this._client.state===m.PROVISIONED&&(this._provisionForce=!0)}}
          ></ewt-button>
        </div>
        <div>
          <ewt-button
            label="Logs & Console"
            @click=${async()=>{const n=this._client;n&&(await this._closeClientWithoutEvents(n),await A(100)),this._client=void 0,this._state="LOGS"}}
          ></ewt-button>
        </div>
        ${this._isSameFirmware&&this._manifest.funding_url?l`
              <div>
                <a
                  class="button"
                  href=${this._manifest.funding_url}
                  target="_blank"
                >
                  <ewt-button label="Fund Development"></ewt-button>
                </a>
              </div>
            `:""}
        ${this._isSameVersion?l`
              <div>
                <ewt-button
                  class="danger"
                  label="Erase User Data"
                  @click=${()=>this._startInstall(!0)}
                ></ewt-button>
              </div>
            `:""}
      </div>
    `,[e,t,s,o]}_renderDashboardNoImprov(){const e="Device Dashboard";let t,s=!0,o=!0;return t=l`
      <div class="dashboard-buttons">
        <div>
          <ewt-button
            text-left
            .label=${`Install ${this._manifest.name}`}
            @click=${()=>{this._manifest.new_install_prompt_erase?this._state="ASK_ERASE":this._startInstall(!0)}}
          ></ewt-button>
        </div>

        <div>
          <ewt-button
            label="Logs & Console"
            @click=${async()=>{this._client=void 0,this._state="LOGS"}}
          ></ewt-button>
        </div>
      </div>
    `,[e,t,s,o]}_renderProvision(){let e="Configure Device",t,s=!1;if(this._busy)return[e,this._renderProgress(this._ssids===void 0?"Scanning for networks":"Trying to connect"),!0];if(!this._provisionForce&&this._client.state===m.PROVISIONED){e=void 0;const o=!this._wasProvisioned&&(this._client.nextUrl!==void 0||"home_assistant_domain"in this._manifest);s=o,t=l`
        <ewt-page-message
          .icon=${B}
          label="Device connected to the network!"
        ></ewt-page-message>
        ${o?l`
              <div class="dashboard-buttons">
                ${this._client.nextUrl===void 0?"":l`
                      <div>
                        <a
                          href=${this._client.nextUrl}
                          class="has-button"
                          target="_blank"
                          @click=${()=>{this._state="DASHBOARD"}}
                        >
                          <ewt-button label="Visit Device"></ewt-button>
                        </a>
                      </div>
                    `}
                ${this._manifest.home_assistant_domain?l`
                      <div>
                        <a
                          href=${`https://my.home-assistant.io/redirect/config_flow_start/?domain=${this._manifest.home_assistant_domain}`}
                          class="has-button"
                          target="_blank"
                          @click=${()=>{this._state="DASHBOARD"}}
                        >
                          <ewt-button
                            label="Add to Home Assistant"
                          ></ewt-button>
                        </a>
                      </div>
                    `:""}
                <div>
                  <ewt-button
                    label="Skip"
                    @click=${()=>{this._state="DASHBOARD"}}
                  ></ewt-button>
                </div>
              </div>
            `:l`
              <ewt-button
                slot="primaryAction"
                label="Continue"
                @click=${()=>{this._state="DASHBOARD"}}
              ></ewt-button>
            `}
      `}else{let o;switch(this._client.error){case O.UNABLE_TO_CONNECT:o="Unable to connect";break;case O.NO_ERROR:case O.UNKNOWN_RPC_COMMAND:break;default:o=`Unknown error (${this._client.error})`}t=l`
        <div>
          Enter the credentials of the Wi-Fi network that you want your device
          to connect to and you Slack Webhook URL.
        </div>
        ${o?l`<p class="error">${o}</p>`:""}
        ${this._ssids!==null?l`
              <ewt-select
                fixedMenuPosition
                label="Network"
                @selected=${n=>{const r=n.detail.index;this._selectedSsid=r===this._ssids.length?-1:r}}
                @closed=${n=>n.stopPropagation()}
              >
                ${this._ssids.map((n,r)=>l`
                    <ewt-list-item
                      .selected=${this._selectedSsid===r}
                      value=${r}
                    >
                      ${n.name}
                    </ewt-list-item>
                  `)}
                <ewt-list-item
                  .selected=${this._selectedSsid===-1}
                  value="-1"
                >
                  Join other…
                </ewt-list-item>
              </ewt-select>
            `:""}
        ${this._selectedSsid===-1?l`
                <ewt-textfield label="Network Name" name="ssid"></ewt-textfield>
              `:""}
        <ewt-textfield
          label="Password"
          name="password"
          type="password"
        ></ewt-textfield>
        <ewt-textfield
          label="Slack URL"
          name="slack"
          type="text"
          required
        ></ewt-textfield>
        <ewt-button
          slot="primaryAction"
          label="Save and Connect"
          @click=${this._doProvision}
        ></ewt-button>
        <ewt-button
          slot="secondaryAction"
          .label=${this._installState&&this._installErase?"Skip":"Back"}
          @click=${()=>{this._state="DASHBOARD"}}
        ></ewt-button>
      `}return[e,t,s]}_renderAskErase(){const e="Erase device",t=l`
      <div>
        Do you want to erase the device before installing
        ${this._manifest.name}? All data on the device will be lost.
      </div>
      <ewt-formfield label="Erase device" class="danger">
        <ewt-checkbox></ewt-checkbox>
      </ewt-formfield>
      <ewt-button
        slot="primaryAction"
        label="Next"
        @click=${()=>{const s=this.shadowRoot.querySelector("ewt-checkbox");this._startInstall(s.checked)}}
      ></ewt-button>
      <ewt-button
        slot="secondaryAction"
        label="Back"
        @click=${()=>{this._state="DASHBOARD"}}
      ></ewt-button>
    `;return[e,t]}_renderInstall(){let e,t,s=!1;const o=!1,n=!this._installErase&&this._isSameFirmware;if(!this._installConfirmed&&this._isSameVersion)e="Erase User Data",t=l`
        Do you want to reset your device and erase all user data from your
        device?
        <ewt-button
          class="danger"
          slot="primaryAction"
          label="Erase User Data"
          @click=${this._confirmInstall}
        ></ewt-button>
      `;else if(this._installConfirmed)if(!this._installState||this._installState.state===d.INITIALIZING||this._installState.state===d.PREPARING)e="Installing",t=this._renderProgress("Preparing installation"),s=!0;else if(this._installState.state===d.ERASING)e="Installing",t=this._renderProgress("Erasing"),s=!0;else if(this._installState.state===d.WRITING||this._installState.state===d.FINISHED&&this._client===void 0){e="Installing";let r,a;this._installState.state===d.FINISHED?a="Wrapping up":this._installState.details.percentage<4?a="Installing":r=this._installState.details.percentage,t=this._renderProgress(l`
          ${a?l`${a}<br />`:""}
          <br />
          This will take
          ${this._installState.chipFamily==="ESP8266"?"a minute":"2 minutes"}.<br />
          Keep this page visible to prevent slow down
        `,r),s=!0}else if(this._installState.state===d.FINISHED){e=void 0;const r=this._client!==null;t=l`
        <ewt-page-message
          .icon=${B}
          label="Installation complete!"
        ></ewt-page-message>
        <ewt-button
          slot="primaryAction"
          label="Next"
          @click=${()=>{this._state=r&&this._installErase?"PROVISION":"DASHBOARD"}}
        ></ewt-button>
      `}else this._installState.state===d.ERROR&&(e="Installation failed",t=l`
        <ewt-page-message
          .icon=${V}
          .label=${this._installState.message}
        ></ewt-page-message>
        <ewt-button
          slot="primaryAction"
          label="Back"
          @click=${async()=>{this._initialize(),this._state="DASHBOARD"}}
        ></ewt-button>
      `);else{e="Confirm Installation";const r=n?"update to":"install";t=l`
        ${n?l`Your device is running
              ${this._info.firmware}&nbsp;${this._info.version}.<br /><br />`:""}
        Do you want to ${r}
        ${this._manifest.name}&nbsp;${this._manifest.version}?
        ${this._installErase?l`<br /><br />All data on the device will be erased.`:""}
        <ewt-button
          slot="primaryAction"
          label="Install"
          @click=${this._confirmInstall}
        ></ewt-button>
        <ewt-button
          slot="secondaryAction"
          label="Back"
          @click=${()=>{this._state="DASHBOARD"}}
        ></ewt-button>
      `}return[e,t,s,o]}_renderLogs(){let e="Logs",t,s=!1;return t=l`
      <ewt-console .port=${this.port} .logger=${this.logger}></ewt-console>
      <ewt-button
        slot="primaryAction"
        label="Back"
        @click=${async()=>{await this.shadowRoot.querySelector("ewt-console").disconnect(),this._state="DASHBOARD",this._initialize()}}
      ></ewt-button>
      <ewt-button
        slot="secondaryAction"
        label="Download Logs"
        @click=${()=>{Be(this.shadowRoot.querySelector("ewt-console").logs(),"esp-web-tools-logs.txt"),this.shadowRoot.querySelector("ewt-console").reset()}}
      ></ewt-button>
      <ewt-button
        slot="secondaryAction"
        label="Reset Device"
        @click=${async()=>{await this.shadowRoot.querySelector("ewt-console").reset()}}
      ></ewt-button>
    `,[e,t,s]}willUpdate(e){e.has("_state")&&(this._state!=="ERROR"&&(this._error=void 0),this._state==="PROVISION"?(this._ssids=void 0,this._busy=!0,this._client.scan().then(t=>{this._busy=!1,this._ssids=t,this._selectedSsid=t.length?0:-1},()=>{this._busy=!1,this._ssids=null,this._selectedSsid=-1})):this._provisionForce=!1,this._state==="INSTALL"&&(this._installConfirmed=!1,this._installState=void 0))}firstUpdated(e){super.firstUpdated(e),this._initialize()}updated(e){super.updated(e),e.has("_state")&&this.setAttribute("state",this._state),this._state==="PROVISION"&&(e.has("_selectedSsid")&&this._selectedSsid===-1?this._focusFormElement("ewt-textfield[name=ssid]"):e.has("_ssids")&&this._focusFormElement())}_focusFormElement(e="ewt-textfield, ewt-select"){const t=this.shadowRoot.querySelector(e);t&&t.updateComplete.then(()=>setTimeout(()=>t.focus(),100))}async _initialize(e=!1){if(this.port.readable===null||this.port.writable===null){this._state="ERROR",this._error="Serial port is not readable/writable. Close any other application using it and try again.";return}try{this._manifest=await qe(this.manifestPath)}catch{this._state="ERROR",this._error="Failed to download manifest";return}if(this._manifest.new_install_improv_wait_time===0){this._client=null;return}const t=new He(this.port,this.logger);t.addEventListener("state-changed",()=>{this.requestUpdate()}),t.addEventListener("error-changed",()=>this.requestUpdate());try{const s=e?this._manifest.new_install_improv_wait_time!==void 0?this._manifest.new_install_improv_wait_time*1e3:1e4:1e3;this._info=await t.initialize(s),this._client=t,t.addEventListener("disconnect",this._handleDisconnect)}catch(s){this._info=void 0,s instanceof ee?(this._state="ERROR",this._error="Serial port is not ready. Close any other application using it and try again."):(this._client=null,this.logger.error("Improv initialization failed.",s))}}_startInstall(e){this._state="INSTALL",this._installErase=e,this._installConfirmed=!1}async _confirmInstall(){this._installConfirmed=!0,this._installState=void 0,this._client&&await this._closeClientWithoutEvents(this._client),this._client=void 0,await this.port.close(),We(e=>{this._installState=e,e.state===d.FINISHED?A(100).then(()=>this.port.open({baudRate:115200})).then(()=>this._initialize(!0)).then(()=>this.requestUpdate()):e.state===d.ERROR&&A(100).then(()=>this.port.open({baudRate:115200}))},this.port,this.manifestPath,this._manifest,this._installErase)}async _doProvision(){const e=this._selectedSsid===-1?this.shadowRoot.querySelector("ewt-textfield[name=ssid]").value:this._ssids[this._selectedSsid].name,t=this.shadowRoot.querySelector("ewt-textfield[name=password]").value,s=this.shadowRoot.querySelector("ewt-textfield[name=slack]").value;if(this._error="",!s.includes("https://hooks.slack.com")){alert("Enter Slack Webhook URL");return}this._busy=!0,this._wasProvisioned=this._client.state===m.PROVISIONED;try{await this._client.provision(e,t,s)}catch{return}finally{this._busy=!1,this._provisionForce=!1}}async _handleClose(){this._client&&await this._closeClientWithoutEvents(this._client),Me(this,"closed"),this.parentNode.removeChild(this)}get _isSameFirmware(){var e;return this._info?(e=this.overrides)!=null&&e.checkSameFirmware?this.overrides.checkSameFirmware(this._manifest,this._info):this._info.firmware===this._manifest.name:!1}get _isSameVersion(){return this._isSameFirmware&&this._info.version===this._manifest.version}async _closeClientWithoutEvents(e){e.removeEventListener("disconnect",this._handleDisconnect),await e.close()}}g.styles=[Ge,w`
      :host {
        --mdc-dialog-max-width: 390px;
      }
      ewt-icon-button {
        position: absolute;
        right: 4px;
        top: 10px;
      }
      .table-row {
        display: flex;
      }
      .table-row.last {
        margin-bottom: 16px;
      }
      .table-row svg {
        width: 20px;
        margin-right: 8px;
      }
      ewt-textfield,
      ewt-select {
        display: block;
        margin-top: 16px;
      }
      .dashboard-buttons {
        margin: 0 0 -16px -8px;
      }
      .dashboard-buttons div {
        display: block;
        margin: 4px 0;
      }
      a.has-button {
        text-decoration: none;
      }
      .error {
        color: var(--improv-danger-color);
      }
      .danger {
        --mdc-theme-primary: var(--improv-danger-color);
        --mdc-theme-secondary: var(--improv-danger-color);
      }
      button.link {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        text-align: left;
        text-decoration: underline;
        cursor: pointer;
      }
      :host([state="LOGS"]) ewt-dialog {
        --mdc-dialog-max-width: 90vw;
      }
      ewt-console {
        width: calc(80vw - 48px);
        height: 80vh;
      }
    `];b([f()],g.prototype,"_client",2);b([f()],g.prototype,"_state",2);b([f()],g.prototype,"_installErase",2);b([f()],g.prototype,"_installConfirmed",2);b([f()],g.prototype,"_installState",2);b([f()],g.prototype,"_provisionForce",2);b([f()],g.prototype,"_error",2);b([f()],g.prototype,"_busy",2);b([f()],g.prototype,"_ssids",2);b([f()],g.prototype,"_selectedSsid",2);customElements.define("ewt-install-dialog",g);const te=async i=>{let e;try{e=await navigator.serial.requestPort()}catch(s){if(s.name==="NotFoundError"){ne(()=>import("./index-3bdee36a.js"),["assets/index-3bdee36a.js","assets/lit-281e958b.js","assets/esptool-df672ea9.js","assets/vendor-e4ee578b.js","assets/mui-a9fbb867.js"]).then(o=>o.openNoPortPickedDialog(()=>te(i)));return}alert(`Error: ${s.message}`);return}if(!e)return;try{await e.open({baudRate:115200})}catch(s){alert(s.message);return}const t=document.createElement("ewt-install-dialog");t.port=e,t.manifestPath=i.manifest||i.getAttribute("manifest"),t.overrides=i.overrides,t.addEventListener("closed",()=>{e.close()},{once:!0}),document.body.appendChild(t)},S=class extends HTMLElement{connectedCallback(){if(this.renderRoot)return;if(this.renderRoot=this.attachShadow({mode:"open"}),!S.isSupported||!S.isAllowed){this.toggleAttribute("install-unsupported",!0),this.renderRoot.innerHTML=S.isAllowed?"<slot name='unsupported'>Your browser does not support installing things on ESP devices. Use Google Chrome or Microsoft Edge.</slot>":"<slot name='not-allowed'>You can only install ESP devices on HTTPS websites or on the localhost.</slot>";return}this.toggleAttribute("install-supported",!0);const i=document.createElement("slot");i.addEventListener("click",async t=>{t.preventDefault(),te(this)}),i.name="activate";const e=document.createElement("button");if(e.innerText="CONNECT",i.append(e),"adoptedStyleSheets"in Document.prototype&&"replaceSync"in CSSStyleSheet.prototype){const t=new CSSStyleSheet;t.replaceSync(S.style),this.renderRoot.adoptedStyleSheets=[t]}else{const t=document.createElement("style");t.innerText=S.style,this.renderRoot.append(t)}this.renderRoot.append(i)}};let F=S;F.isSupported="serial"in navigator;F.isAllowed=window.isSecureContext;F.style=`
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
  }`;customElements.define("esp-web-install-button",F);export{Ge as d};
