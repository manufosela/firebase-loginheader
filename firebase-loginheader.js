import { LitElement, html, css, unsafeCSS } from 'lit-element';
import 'firebase-loginbutton';

/**
 * `firebase-loginheader`
 * FirebaseLoginheader
 *
 * @customElement firebase-loginheader
 * @polymer
 * @litElement
 * @demo demo/index.html
 */

class FirebaseLoginheader extends LitElement {
  static get is() {
    return 'firebase-loginheader';
  }

  static get properties() {
    return {
      title: { type: String },
      subtitle: { type: String },
      bgimg: { type: String, attribute: 'background-image'},
      urlBgImg: { type: String },
      apiKey: { type: String, attribute: 'api-key'},
      domain: { type: String },
      messagingSenderId: { type: String, attribute: 'messaging-sender-id'},
      appId: { type: String, attribute: 'app-id'}
    };
  }

  static get styles() {
    return css`
      :host {
        display: block;
        width:100%;
        --local-header-height: var(--header-height, 120px);
        --local-title-color: var(--title-color, #000);
        --local-subtitle-color: var(--subtitle-color, #444);
        --local-background-color: var(--background-color,#FF0);
        --local-background-opacity: var(--background-opacity, 0.9);
      }
      .bannerBG {
        background-color: var(--local-background-color); 
        position: absolute;
        width: 100%;
        height: var(--local-header-height);
        background-attachment: fixed;
        background-position: center center;
        background-size: cover;
        opacity: var(--local-background-opacity);
      }
      .bannerMain {
        display: flex;
        flex-direction:row;
        margin-bottom: 40px;
        text-align:center;
      }
      .title {
        flex-grow: 1;
        height:var(--local-header-height);
      }
      firebase-loginbutton, h1, h2 {
        position:relative;
      }
      firebase-loginbutton {
        top:20px;
        left:20px;
        z-index:1;
        max-width: 200px;
        height: 50px;
      }
      h1 {
        color: var(--local-title-color);
      }
      h2 {
        color: var(--local-subtitle-color);
      }
      h1, h2 {
        top: -50px;
      }
      @media screen and (max-width: 450px) {
        firebase-loginbutton {
          text-align: left;
          top: 10px;
          left: 10px;
        }
      }
    `;
  }

  constructor() {
    super();
    this.title = 'T I T U L O';
    this.subtitle = 'Subtítulo';
    this.bgimg = '';
    this.urlBgImg = '';
    this.apiKey = null;
    this.domain = null;
    this.messagingSenderId = null;
    this.appId = null;
  }

  firstUpdated() {
    this.urlBgImg = (this.bgimg !== '') ? `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADIAQMAAACXljzdAAAAA1BMVEUuLTSUN/hqAAAAAXRSTlO99TYXVwAAABxJREFUWMPtwYEAAAAAw6D7U19hANUAAAAAAKIDFFAAARZNHj8AAAAASUVORK5CYII="), url("${this.bgimg}")` : '';
  }

  render() {
    return html`
      <style>
        .bannerBG {
          background-image: ${this.urlBgImg};
        }
      </style>
      <header id="banner" class="bannerMain">
        <div class="bannerBG"></div>
        <section class="title">
          <firebase-loginbutton
                  api-key="${this.apiKey}"
                  domain="${this.domain}"
                  messaging-sender-id="${this.messagingSenderId}"
                  app-id="${this.appId}" 
                  show-email
                  show-photo>
          </firebase-loginbutton>
          <h1>${this.title}</h1>
          <h2>${this.subtitle}</h2>
        </section>
			</header>
    `;
  }
}

window.customElements.define(FirebaseLoginheader.is, FirebaseLoginheader);