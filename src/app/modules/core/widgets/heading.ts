import { Widget } from './widget';

export class Heading extends Widget {
  constructor() {
    super(document.createElement('h1'));
    this.setText('Hello World');
  }
  
  setText(label: string) {
    this.node.innerText = label;
  }

  getText() {
    return this.node.innerText;
  }
}