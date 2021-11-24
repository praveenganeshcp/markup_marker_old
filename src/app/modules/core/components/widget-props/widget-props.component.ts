import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { INodeStyle, Widget } from '../../widgets/widget';
import { IFormPackage, IRenderField, WidgetFormBuilder } from '../../widgets/widget-editor';

@Component({
  selector: 'app-widget-props',
  templateUrl: './widget-props.component.html',
  styleUrls: ['./widget-props.component.scss']
})
export class WidgetPropsComponent implements OnInit, OnChanges {

  @Input() widget!: Widget | null;
  @Output() applyStyles = new EventEmitter<INodeStyle>();
  @Output() cancelEdit = new EventEmitter();
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
    const styles = this.formPackage.formGroup.value;
    this.applyStyles.emit(styles);
  }

  cancelApply() {
    this.cancelEdit.emit();
  }

}
