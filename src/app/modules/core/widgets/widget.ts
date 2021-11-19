export class Widget {
  

  constructor(protected node: HTMLElement) {
    this.setPaddingBottom(0);
    this.setPaddingLeft(0);
    this.setPaddingRight(0);
    this.setPaddingTop(0);
  }

  copyNode() {
    const copiedNode = this.node.cloneNode(true) as HTMLElement;
    copiedNode.style.outline = 'none';
    this.node.parentElement?.appendChild(copiedNode);
  }

  remove() {
    this.node.remove();
  }

  appendNode(node: Widget) {
    this.node.appendChild(node.getElement());
  }

  setOutline() {
    this.node.style.outline = '2px solid blue';
  }

  removeOutline() {
    this.node.style.outline = 'none';
  }

  getColor(): string {
    return this.node.style.color;
  }

  setColor(color: string): void {
      this.node.style.color = color;
  }

  getFontSize(): number {
      return parseInt(this.node.style.fontSize, 10);
  }

  setFontSize(fontSize: number): void {
      this.node.style.fontSize = fontSize+'em';
  }

  getPaddingTop(): number {
    return parseInt(this.node.style.paddingTop, 10);
  }

  setPaddingTop(paddingTop: number): void {
    this.node.style.paddingTop = paddingTop+'%';
  }

  getPaddingBottom(): number {
    return parseInt(this.node.style.paddingBottom, 10);
  }

  setPaddingBottom(paddingBottom: number): void {
    this.node.style.paddingBottom = paddingBottom+'%';

  }

  getPaddingLeft(): number {
    return parseInt(this.node.style.paddingLeft, 10);
  }

  setPaddingLeft(paddingLeft: number): void {
    this.node.style.paddingLeft = paddingLeft+'%';
  }

  getPaddingRight(): number {
    return parseInt(this.node.style.paddingRight, 10);
  }

   setPaddingRight(paddingRight: number): void {
    this.node.style.paddingRight = paddingRight+'%';
  }

  makeItFlex() {
    this.node.style.display = 'flex';
    this.node.style.justifyContent = 'space-evenly';
    this.node.style.alignItems = 'center';
  }

  setNode(node: HTMLElement) {
    this.node.remove();
    this.node = node;
  }

  setHeight(height: number) {
    this.node.style.height = height+'%';
  }

  getBackgroundColor() {
    return this.node.style.backgroundColor;
  }

  setBackgroundColor(color: string) {
    this.node.style.backgroundColor = color;
  }

  setWidth(width: number) {
    this.node.style.width = width+'%';
  }

  getHeight() {
    return parseInt(this.node.style.height, 10);
  }

  getWidth() {
    return parseInt(this.node.style.width, 10);
  }

  getElement() {
    return this.node;
  }

  setBorder() {
    this.node.style.border = '1px solid black';
  }

  setBorderRadius(radius: number) {
    this.node.style.borderRadius = radius+'%';
  }

  getBorderRadius() {
    return parseInt(this.node.style.borderRadius,10)
  }

  setResizable() {
    this.node.style.resize = 'both';
    this.node.style.overflow = 'auto';
  }

}