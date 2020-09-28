import { html, customElement, LitElement } from 'lit-element';
import styles from './accordion-css';

@customElement('orxe-accordion')
export default class OrxeAccordion extends LitElement {
   /**
   * Implement `render` to define a template for button element.
   */
  render() {
    return html`
    <orxe-panel><orxe-panel>
    `;
  }

  /**
   *  Getting styles from components custom scss file
   */
  static styles = styles;
}
