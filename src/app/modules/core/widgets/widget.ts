export interface INodeStyle {
  backgroundColor: string;
  color: string;
  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;
  borderRadius: number;
  id: string;
  fontSize: number;
  height: number;
  width: number;
}

import { WidgetStyle } from "./widget-style";

export class Widget {
  
  style: WidgetStyle;

  constructor(protected node: HTMLElement) {
    this.style = new WidgetStyle(node);
    this.style.setPaddingBottom(0);
    this.style.setPaddingLeft(0);
    this.style.setPaddingRight(0);
    this.style.setPaddingTop(0);
    this.style.setBackgroundColor('#FFFFFF');
    this.style.setColor('#000000');
    this.setId(this.generateId());
  }

  isContainer() {
    return this.node.tagName === 'SECTION';
  }

  getElementName() {
    return this.node.tagName;
  }

  applyStyles(styles: INodeStyle) {
    this.style.setHeight(styles.height);
    this.style.setWidth(styles.width);
    this.style.setColor(styles.color);
    this.style.setBackgroundColor(styles.backgroundColor);
    this.style.setPaddingBottom(styles.paddingBottom);
    this.style.setPaddingTop(styles.paddingTop);
    this.style.setPaddingLeft(styles.paddingLeft);
    this.style.setPaddingRight(styles.paddingRight);
    this.style.setFontSize(styles.fontSize);
    this.style.setBorderRadius(styles.borderRadius);
    this.setId(styles.id);
  }

  private generateId() {
    return (this.node.tagName+"-"+Date.now().toString()).toLowerCase();
  }

  setId(id: string) {
    this.node.setAttribute('id', id);
  }

  getId() {
    return this.node.getAttribute('id');
  }

  copyNode() {
    const copiedNode = this.node.cloneNode(true) as HTMLElement;
    copiedNode.style.outline = 'none';
    this.node.parentElement?.appendChild(copiedNode);
  }

  getElement() {
    return this.node;
  }

  setElement(node: HTMLElement) {
    this.node.remove();
    this.node = node;
    this.style.setNode(node);
  }

  remove() {
    this.node.remove();
  }

  appendNode(node: Widget) {
    this.node.appendChild(node.getElement());
  }

}

// add widget
/**
 * 1. add widget file
 * 2. add in factory
 * 3. add props in editor
 * 4. add in list
 * 5. add addstyle method
 */