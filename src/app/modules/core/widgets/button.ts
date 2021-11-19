import { Widget } from "./widget";

export class Button extends Widget {
  constructor() {
    super(document.createElement('button'));
    this.setLabel('Click me');
  }

  setLabel(label: string) {
    this.node.innerText = label;
  }
}