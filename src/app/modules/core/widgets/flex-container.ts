import { INodeStyle, Widget } from "./widget";

interface FlexContainerStyles extends INodeStyle {
  alignItems: string;
  justifyContent: string
}

export class FlexContainer extends Widget {
  constructor() {
    super(document.createElement('section'));
    this.style.makeItFlex();
    this.style.setBorder();
    this.style.setHeight(50);
    this.style.setWidth(50);
  }

  applyStyles(styles: FlexContainerStyles) {
    this.style.setJustifyContent(styles.justifyContent);
    this.style.setAlignItems(styles.alignItems);
    super.applyStyles(styles);
  }
}