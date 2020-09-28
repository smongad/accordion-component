import { html, customElement, LitElement } from 'lit-element';
import styles from './panel-css';

@customElement('orxe-pannel')
export default class OrxeAccordion extends LitElement {
   /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
    <div class="panel panel-info">
        ${this. renderPanelHeading()}
        ${this.renderPanelContent()}
    <div>
    `;
  }

  renderPanelHeading() {
    return html`
    <div class="panel-heading"  @click="${this.togglePannelContent}">
      This is Pannel Title
    </div>
    `;
  }

  togglePannelContent(event) {
     let elems = event.target.parentNode.getElementsByClassName("panel-content");
     for (var i = 0; i < elems.length; i++) {
       if(elems[i].style.display == 'none'){
          elems[i].style.display = 'block';
        }else{
          elems[i].style.display = 'none';
        }
     }
  }

  renderPanelContent() {
    return html`
    <div class="panel-content"  style="display:none">
      This is Pannel Content
    </div>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
