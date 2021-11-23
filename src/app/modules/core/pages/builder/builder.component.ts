import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Widget } from '../../widgets/widget';
import { WidgetFactory, WidgetTypes } from '../../widgets/widget-factory';

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

  constructor() { 
    this.parentElement = null;
    this.showEditProps = false;
    this.editedElement = null;
  }

  ngOnInit(): void { }

  ngAfterViewInit() {
    this.selectParent(this.convertoToWidget(this.rootElement.nativeElement));
  }

  showEditPropsContainer(widget: Widget) { 
    this.editedElement = widget;
    this.showEditProps = true;
  }

  hideEditPropsContainer() {
    this.showEditProps = false;
  }

  isShowingEditProps() {
    return this.showEditProps;
  }

  convertoToWidget(element: any) {
    return new Widget(element);
  }

  selectParent(widget: Widget) {
    this.parentElement = widget;
    this.removeOutline();
    this.parentElement.setOutline();
  }

  addWidget(widgetType: WidgetTypes) {
    const widget = WidgetFactory.getInstance(widgetType);
    if(widget) {
      this.parentElement?.appendNode(widget);
      if(widget.isContainer()) {
        this.selectParent(widget);
      }
    }
  }

  removeOutline() {
    this.rootElement.nativeElement.style.outline = 'none';
    const nodes: HTMLElement[] = this.rootElement.nativeElement.querySelectorAll('*');
    nodes.forEach((node: HTMLElement) => {
      node.style.outline = 'none';
    })
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