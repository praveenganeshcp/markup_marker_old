import { INodeStyle, Widget } from './widget';

interface HeadingStyle extends INodeStyle {
  innerText: string
}

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

  applyStyles(styles: HeadingStyle) {
    this.setText(styles.innerText);
    super.applyStyles(styles);
  }
}