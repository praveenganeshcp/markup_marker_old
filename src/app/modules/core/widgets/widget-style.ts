export class WidgetStyle {

  constructor(private node: HTMLElement) {}

  getStyleText() {
    return this.node.style.cssText;
  }

  setOutline() {
    this.node.style.outline = '2px solid blue';
  }

  setNode(node: HTMLElement) {
    this.node = node;
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

  getJustifyContent() {
    return this.node.style.justifyContent;
  }

  setJustifyContent(value: string) {
    this.node.style.justifyContent = value;
  }

  getAlignItems() {
    return this.node.style.alignItems;
  }

  setAlignItems(value: string) {
    this.node.style.alignItems = value;
  }
 
  makeItFlex() {
    this.node.style.display = 'flex';
    this.node.style.flexWrap = 'wrap';
    this.node.style.overflow = 'auto';
    this.node.style.justifyContent = 'flex-start';
    this.node.style.alignItems = 'flex-start'
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

  setBorder() {
    this.node.style.border = '1px solid black';
  }

  setBorderRadius(radius: number) {
    this.node.style.borderRadius = radius+'%';
  }

  getBorderRadius() {
    return parseInt(this.node.style.borderRadius,10) || 0;
  }

  setResizable() {
    this.node.style.resize = 'both';
    this.node.style.overflow = 'auto';
  }
}