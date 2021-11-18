import { Widget } from "./widget";

export class Button extends Widget {
  constructor() {
    super(document.createElement('button'));
    this.setLabel('Click me');
  }
}