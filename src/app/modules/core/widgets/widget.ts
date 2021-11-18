export class Widget {
  
  constructor(protected node: HTMLElement) {

  }

  makeItFlex() {
    this.node.style.display = 'flex';
    this.node.style.justifyContent = 'space-evenly';
    this.node.style.alignItems = 'center';
  }

  setHeight(height: string) {
    this.node.style.height = height;
  }

  setWidth(width: string) {
    this.node.style.width = width;
  }

  getElement() {
    return this.node;
  }

  setBorder() {
    this.node.style.border = '1px solid black';
  }

  setResizable() {
    this.node.style.resize = 'both';
    this.node.style.overflow = 'auto';
  }

  setLabel(label: string) {
    this.node.innerText = label;
  }
}