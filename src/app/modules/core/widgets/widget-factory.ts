import { Button } from "./button";
import { FlexContainer } from "./flex-container";
import { Heading } from "./heading";
import { Image } from "./image";
import { Widget } from "./widget";

export type WidgetTypes = 'SECTION' | 'H1' | 'BUTTON' | 'IMG';

export class WidgetFactory {
  static getInstance(widgetType: WidgetTypes): Widget | null {
    switch(widgetType) {
      case 'SECTION': {
        return new FlexContainer();
      }
      case 'BUTTON': {
        return new Button();
      }
      case 'H1': {
        return new Heading();
      }
      case 'IMG': {
        return new Image();
      }
    }
    return null;
  }
}