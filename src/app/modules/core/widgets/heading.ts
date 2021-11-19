import { Widget } from './widget';

export class Heading extends Widget {
  constructor() {
    super(document.createElement('h1'));
    this.setLabel('Hello World');
  }

  setLabel(label: string) {
    this.node.innerText = label;
  }
}