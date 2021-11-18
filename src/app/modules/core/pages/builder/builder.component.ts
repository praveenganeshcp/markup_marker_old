import { AfterViewInit, Component, ElementRef, OnInit, ViewChild, ViewChildren } from '@angular/core';
import { Button } from '../../widgets/button';
import { FlexContainer } from '../../widgets/flex-container';
import { Heading } from '../../widgets/heading';

@Component({
  selector: 'app-builder',
  templateUrl: './builder.component.html',
  styleUrls: ['./builder.component.scss']
})
export class BuilderComponent implements OnInit, AfterViewInit {

  @ViewChild('rootElement', {read: ElementRef}) rootElement!: ElementRef;
  private showEditProps: boolean;
  private parentElement: HTMLElement | null;

  widgets: any[];

  constructor() { 
    this.parentElement = null;
    this.showEditProps = false;
    this.widgets = [
      { text: 'Container', method: this.addFlexContainer.bind(this) },
      { text: 'Heading', method: this.addHeading.bind(this) },
      { text: 'Button', method: this.addButton.bind(this) },
    ]
  }

  showEditPropsContainer() {
    this.showEditProps = true;
  }

  hideEditPropsContainer() {
    this.showEditProps = false;
  }

  isShowingEditProps() {
    return this.showEditProps;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.selectParent(this.rootElement.nativeElement);
  }

  selectParent(element: any) {
    this.parentElement = element as HTMLElement;
  }

  addButton() {
    this.parentElement?.appendChild(new Button().getElement());
  }

  addFlexContainer() {
    this.parentElement?.appendChild(new FlexContainer().getElement());
  }

  addHeading() {
    this.parentElement?.appendChild(new Heading().getElement());
  }

}
