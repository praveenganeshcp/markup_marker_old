import { Button } from "./button";
import { FlexContainer } from "./flex-container";
import { Heading } from "./heading";
import { Widget } from "./widget";

export type WidgetTypes = 'CONTAINER' | 'HEADING' | 'BUTTON';

export class WidgetFactory {
  static getInstance(widgetType: WidgetTypes): Widget | null {
    switch(widgetType) {
      case 'CONTAINER': {
        return new FlexContainer();
      }
      case 'BUTTON': {
        return new Button();
      }
      case 'HEADING': {
        return new Heading()
      }
    }
    return null;
  }
}