import { Widget } from "./widget";

export class NumberInput extends Widget {
  constructor() {
    super(document.createElement('input'));
  }

  setDataType() {}
}