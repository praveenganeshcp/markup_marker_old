import { INodeStyle, Widget } from "./widget";

interface ButtonStyles extends INodeStyle {
  innerText: string
}

export class Button extends Widget {
  constructor() {
    super(document.createElement('button'));
    this.setLabel('Click me');
  }

  setLabel(label: string) {
    this.node.innerText = label;
  }

  getLabel() {
    return this.node.innerText;
  }

  applyStyles(styles: ButtonStyles) {
    this.setLabel(styles.innerText);
    super.applyStyles(styles);
  }
}