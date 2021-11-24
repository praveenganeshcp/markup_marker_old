import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { Button } from "./button";
import { FlexContainer } from "./flex-container";
import { Heading } from "./heading";
import { Widget } from "./widget";

export interface IRenderField {
  name: string;
  label: string;
  datatype: 'number' | 'text' | 'color' | 'select',
  selectOptions?: {view: string, value: string}[]
}

interface IElementControl {
  name: string,
  control: FormControl
}

export interface IFormPackage {
  formGroup: FormGroup,
  renderFields: IRenderField[]
}

interface IControlsPackage {
  formFieldControls: IElementControl[],
  renderFields: IRenderField[]
}

export class WidgetFormBuilder {

  private formBuilder: FormBuilder;

  constructor() {
    this.formBuilder = new FormBuilder();
  }

  private getCommonnFormControls(element: Widget): IFormPackage {
    const formGroup = this.formBuilder.group({
      id: this.formBuilder.control(element.getId()),
      height: this.formBuilder.control(element.style.getHeight()),
      width: this.formBuilder.control(element.style.getWidth()),
      paddingLeft: this.formBuilder.control(element.style.getPaddingLeft()),
      paddingRight: this.formBuilder.control(element.style.getPaddingRight()),
      paddingTop: this.formBuilder.control(element.style.getPaddingTop()),
      paddingBottom: this.formBuilder.control(element.style.getPaddingBottom()),
      color: this.formBuilder.control(element.style.getColor()),
      backgroundColor: this.formBuilder.control(element.style.getBackgroundColor()),
      borderRadius: this.formBuilder.control(element.style.getBorderRadius()),
      fontSize: this.formBuilder.control(element.style.getFontSize()),
    })
    let renderFields: IRenderField[] = [
      { name: 'id', label: 'Name', datatype: 'text' },
      { name: 'height', label: 'Height', datatype: 'number' },
      { name: 'width', label: 'Width', datatype: 'number' },
      { name: 'paddingLeft', label: 'Padding Left', datatype: 'number' },
      { name: 'paddingRight', label: 'Padding Right', datatype: 'number' },
      { name: 'paddingBottom', label: 'Padding Bottom', datatype: 'number' },
      { name: 'paddingTop', label: 'Padding Top', datatype: 'number' },
      { name: 'color', label: 'Color', datatype: 'color' },
      { name: 'backgroundColor', label: 'Background Color', datatype: 'color' },
      { name: 'borderRadius', label: 'Border radius', datatype: 'number' },
      { name: 'fontSize', label: 'Font size', datatype: 'number' },
    ];
    return {
      formGroup, renderFields
    }
  }

  private addControlsToForm(formPackage: IFormPackage, controlPackage: IControlsPackage) {
      controlPackage.formFieldControls.forEach(elementControl => {
        formPackage.formGroup.addControl(elementControl.name, elementControl.control);
      })
      formPackage.renderFields = formPackage.renderFields.concat(controlPackage.renderFields);
  }

  getEditFormForElement(widget: Widget): IFormPackage | null {
    console.log(widget);
    const elementName = widget.getElementName();
    const formGroup = this.getCommonnFormControls(widget);

    if(elementName === 'H1') {
      this.addControlsToForm(formGroup, this.getTextElementControls(widget as Heading))
      return formGroup;
    }
    else if(elementName == 'BUTTON') {
      this.addControlsToForm(formGroup, this.getButtonElementControls(widget as Button))
      return formGroup;
    }
    else if(elementName == 'SECTION') {
      this.addControlsToForm(formGroup, this.getFlexContainerElementControls(widget as FlexContainer))
      return formGroup;
    }

    return null;
  }

  private getFlexContainerElementControls(element: FlexContainer): IControlsPackage {
    const formFieldControls: IElementControl[] = [
      { name: 'alignItems', control: this.formBuilder.control(element.style.getAlignItems()) },
      { name: 'justifyContent', control: this.formBuilder.control(element.style.getJustifyContent())},
    ]
    const renderFields: IRenderField[] = [
      { name: 'alignItems', label: 'Align Items', datatype: 'select', selectOptions: [
        { value: 'center', view: 'Center' },
        { value: 'flex-start', view: 'Flex start' },
        { value: 'flex-end', view: 'Flex end' }
      ] },
      {
        name: 'justifyContent', label: 'Justify content', datatype: 'select', selectOptions: [
          { value: 'space-evenly', view: 'Space evenly' },
          { value: 'space-between', view: 'Space between' },
        { value: 'flex-start', view: 'Flex start' },
        { value: 'flex-end', view: 'Flex end' }
        ]
      }
    ]
    return {
      formFieldControls, renderFields
    }
  }

  private getTextElementControls(element: Heading): IControlsPackage {
    const formFieldControls: IElementControl[] = [
      { name: 'innerText', control: this.formBuilder.control(element.getText()) },
    ]
    const renderFields: IRenderField[] = [
      { name: 'innerText', label: 'Text', datatype: 'text' },
    ]
    return {
      formFieldControls, renderFields
    }
  }

  getButtonElementControls(element: Button): IControlsPackage {
    const formFieldControls: IElementControl[] = [
      { name: 'innerText', control: this.formBuilder.control(element.getLabel()) },
    ]
    const renderFields: IRenderField[] = [
      { name: 'innerText', label: 'Text', datatype: 'text' },
    ]
    return {
      formFieldControls, renderFields
    }
  }
}

// height, width, padding, color, backgroundcolor, border-radius, fontsize, name

// heading
// small heading
// p - innertext
// container - flex props
// form
// input - type, name, placeholder
// button - label
// table, 
// 