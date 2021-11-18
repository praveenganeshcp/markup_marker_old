import { Widget } from "./widget";

export class FlexContainer extends Widget {
  constructor() {
    super(document.createElement('section'));
    this.makeItFlex();
    this.setBorder();
    this.setHeight('50%');
    this.setWidth('50%');
    this.setResizable();
  }
}