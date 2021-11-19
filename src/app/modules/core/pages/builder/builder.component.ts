import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Button } from '../../widgets/button';
import { FlexContainer } from '../../widgets/flex-container';
import { Heading } from '../../widgets/heading';
import { Widget } from '../../widgets/widget';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  @ViewChild('rootElement', {read: ElementRef}) rootElement!: ElementRef;
  private showEditProps: boolean;
  private parentElement: Widget | null;
  private editedElement: Widget | null;
  editPropsForm: FormGroup;
  widgets: any[];

  constructor(private formBuilder: FormBuilder) { 
    this.parentElement = null;
    this.showEditProps = false;
    this.editedElement = null;
    this.widgets = [
      { text: 'Container', method: this.addFlexContainer.bind(this) },
      { text: 'Heading', method: this.addHeading.bind(this) },
      { text: 'Button', method: this.addButton.bind(this) },
    ]
    this.editPropsForm = this.formBuilder.group({
      height: this.formBuilder.control(null),
      width: this.formBuilder.control(null),
      paddingLeft: this.formBuilder.control(null),
      paddingRight: this.formBuilder.control(null),
      paddingTop: this.formBuilder.control(null),
      paddingBottom: this.formBuilder.control(null),
      backgroundColor: this.formBuilder.control('orange'),
      color: this.formBuilder.control('orange'),
      fontSize: this.formBuilder.control(null),
    })
  }

  showEditPropsContainer(ele: Widget) {
    this.editedElement = ele;
    this.showEditProps = true;
    const editValues = {
      'height': ele.getHeight(),
      'width': ele.getWidth(),
      'paddingLeft': ele.getPaddingLeft(),
      'paddingBottom': ele.getPaddingBottom(),
      'paddingTop': ele.getPaddingTop(),
      'paddingRight': ele.getPaddingRight(),
      'backgroundColor': ele.getBackgroundColor(),
      'color': ele.getColor(),
      'fontSize': ele.getFontSize()
    }
    this.editPropsForm.setValue(editValues)
  }

  hideEditPropsContainer() {
    this.showEditProps = false;
  }

  isShowingEditProps() {
    return this.showEditProps;
  }

  saveProps() {
    const value = this.editPropsForm.value;
    this.editedElement?.setHeight(value.height);
    this.editedElement?.setWidth(value.width);
    this.editedElement?.setPaddingTop(value.paddingTop);
    this.editedElement?.setPaddingLeft(value.paddingLeft);
    this.editedElement?.setPaddingBottom(value.paddingBottom);
    this.editedElement?.setPaddingRight(value.paddingRight);
    this.editedElement?.setBackgroundColor(value.backgroundColor);
    this.editedElement?.setColor(value.color);
    this.editedElement?.setFontSize(value.fontSize);
  }

  ngOnInit(): void {
  }

  convertoToWidget(element: any) {
    return new Widget(element);
  }

  ngAfterViewInit() {
    this.selectParent(this.convertoToWidget(this.rootElement.nativeElement));
  }

  selectParent(element: Widget) {
    this.parentElement = element;
    this.removeOutline();
    this.parentElement.setOutline();
  }

  addButton() {
    this.parentElement?.appendNode(new Button());
  }

  addFlexContainer() {
    this.parentElement?.appendNode(new FlexContainer());
  }

  removeOutline() {
    this.rootElement.nativeElement.style.outline = 'none';
    const nodes: HTMLElement[] = this.rootElement.nativeElement.querySelectorAll('*');
    nodes.forEach((node: HTMLElement) => {
      node.style.outline = 'none';
    })
  }

  addHeading() {
    this.parentElement?.appendNode(new Heading());
  }

  removeNode() {
    this.parentElement?.remove();
  }

  copyNode() {
    this.parentElement?.copyNode();
  }
}









// height, width, padding, color, backgroundcolor, border-radius, fontsize

// heading
// small heading
// p - innertext
// container - flex props
// form
// input - type, name, placeholder
// button - label
// table, 
// 