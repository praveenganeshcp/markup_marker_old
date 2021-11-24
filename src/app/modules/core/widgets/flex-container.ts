import { Widget } from "./widget";

export class FlexContainer extends Widget {
  constructor() {
    super(document.createElement('section'));
    this.style.makeItFlex();
    this.style.setBorder();
    this.style.setHeight(50);
    this.style.setWidth(50);
  }
}