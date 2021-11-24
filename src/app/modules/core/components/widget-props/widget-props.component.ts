import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Widget } from '../../widgets/widget';
import { IFormPackage, IRenderField, WidgetFormBuilder } from '../../widgets/widget-editor';

@Component({
  selector: 'app-widget-props',
  templateUrl: './widget-props.component.html',
  styleUrls: ['./widget-props.component.scss']
})
export class WidgetPropsComponent implements OnInit, OnChanges {

  @Input() widget!: Widget | null;
  widgetFormBuilder!: WidgetFormBuilder;
  formPackage!: IFormPackage;

  constructor() { }
 
  ngOnInit(): void { }

  ngOnChanges(changes: SimpleChanges) {
    this.fetchFormPackage(changes.widget.currentValue)
  }

  fetchFormPackage(widget: Widget) {
    this.widgetFormBuilder = new WidgetFormBuilder();
    this.formPackage = this.widgetFormBuilder.getEditFormForElement(widget) as IFormPackage;
    console.log(this.formPackage)
  }

  handleSubmit() {
    console.log(this.formPackage.formGroup.value);
  }

}
