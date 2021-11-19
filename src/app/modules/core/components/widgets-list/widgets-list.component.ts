import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WidgetTypes } from '../../widgets/widget-factory';

@Component({
  selector: 'app-widgets-list',
  templateUrl: './widgets-list.component.html',
  styleUrls: ['./widgets-list.component.scss']
})
export class WidgetsListComponent implements OnInit {

  widgets: {text: string, name: WidgetTypes}[];
  @Output() addWidget = new EventEmitter<WidgetTypes>();

  constructor() {
    this.widgets = [
      { text: 'Container', name: 'CONTAINER' },
      { text: 'Heading', name: 'HEADING' },
      { text: 'Button', name: 'BUTTON' },
    ]
  }

  ngOnInit(): void {
  }

  triggerAddWidget(widgetType: WidgetTypes) {
    this.addWidget.emit(widgetType);
  }

}
