import { INodeStyle, Widget } from './widget';

interface ImageStyle extends INodeStyle {
  src: string;
}

export class Image extends Widget {
  constructor() {
    super(document.createElement('img'));
    this.setImgSrc('https://www.shutterstock.com/blog/wp-content/uploads/sites/5/2021/10/pink-collage.jpg');
    this.style.setHeight(50);
    this.style.setWidth(50);
  }

  setImgSrc(src: string) {
    this.node.setAttribute('src', src);
  }

  getImgSrc() {
    return this.node.getAttribute('src');
  }

  applyStyles(styles: ImageStyle) {
    this.setImgSrc(styles.src);
    super.applyStyles(styles);
  }
}