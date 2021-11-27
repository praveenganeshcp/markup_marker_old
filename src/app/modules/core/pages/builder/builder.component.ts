import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { INodeStyle, Widget } from '../../widgets/widget';
import { WidgetFactory, WidgetTypes } from '../../widgets/widget-factory';
import htmlFormatter from 'pretty';
import cssFormatter from 'cssbeautify';
import { MatDialog } from '@angular/material/dialog';
import { ViewResultComponent } from '../../components/view-result/view-result.component';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  @ViewChild('rootElement', {read: ElementRef}) rootElement!: ElementRef;
  @ViewChild('builderContainer', {read: ElementRef}) builderContainer!: ElementRef;
  private showEditProps: boolean;
  private parentElement: Widget | null;
  editedWidget: Widget | null;

  constructor(private matDialog: MatDialog) { 
    this.parentElement = null;
    this.showEditProps = false;
    this.editedWidget = null;
  }

  ngOnInit(): void { 
  }

  ngAfterViewInit() {
    this.selectParent(this.convertoToWidget(this.rootElement.nativeElement));
  }

  generateCode() {
    this.removeOutline();
    const rootElement = this.builderContainer.nativeElement.cloneNode(true);
    const elements = rootElement.querySelectorAll('*') as HTMLElement[];
    let cssText = '';
    elements.forEach(element => {
      cssText += `.${element.id} {${element.style.cssText}}`;
      element.classList.add(`${element.id}`);
      element.removeAttribute('style');
      element.removeAttribute('id');
    })
    this.showResults(cssFormatter(cssText), htmlFormatter(rootElement.children[0].outerHTML))
  }

  showResults(htmlContent: string, cssContent: string) {
    this.matDialog.open(ViewResultComponent, {
      height: '90%',
      width: '90%',
      data: {
        htmlContent, cssContent
      }
    })
  }

  showEditPropsContainer(widget: Widget) { 
    this.editedWidget = widget;
    this.showEditProps = true;
  }

  hideEditPropsContainer() {
    this.showEditProps = false;
    this.editedWidget = null;
  }

  isShowingEditProps() {
    return this.showEditProps;
  }

  applyStylesForEditWidget(styles: INodeStyle) {
    this.editedWidget?.applyStyles(styles);
  }

  cancelEdit() {
    this.hideEditPropsContainer();
  }

  convertoToWidget(element: any) {
    const widget = WidgetFactory.getInstance(element.tagName as WidgetTypes);
    widget?.setElement(element);
    return widget as Widget;
  }

  selectParent(widget: Widget) {
    this.parentElement = widget;
    this.removeOutline();
    this.parentElement.style.setOutline();
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