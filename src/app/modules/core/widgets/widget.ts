export class Widget {
  

  constructor(protected node: HTMLElement) {
    this.setPaddingBottom(0);
    this.setPaddingLeft(0);
    this.setPaddingRight(0);
    this.setPaddingTop(0);
  }

  public getPaddingTop(): number {
    return parseInt(this.node.style.paddingTop, 10);
  }

  public setPaddingTop(paddingTop: number): void {
    this.node.style.paddingTop = paddingTop+'%';
  }

  public getPaddingBottom(): number {
    return parseInt(this.node.style.paddingBottom, 10);
  }

  public setPaddingBottom(paddingBottom: number): void {
    this.node.style.paddingBottom = paddingBottom+'%';

  }

  public getPaddingLeft(): number {
    return parseInt(this.node.style.paddingLeft, 10);
  }

  public setPaddingLeft(paddingLeft: number): void {
    this.node.style.paddingLeft = paddingLeft+'%';
  }

  public getPaddingRight(): number {
    return parseInt(this.node.style.paddingRight, 10);
  }

  public setPaddingRight(paddingRight: number): void {
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

  setResizable() {
    this.node.style.resize = 'both';
    this.node.style.overflow = 'auto';
  }

  setLabel(label: string) {
    this.node.innerText = label;
  }
}