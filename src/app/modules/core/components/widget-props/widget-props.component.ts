import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-widget-props',
  templateUrl: './widget-props.component.html',
  styleUrls: ['./widget-props.component.scss']
})
export class WidgetPropsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    // this.editPropsForm = this.formBuilder.group({
    //   height: this.formBuilder.control(null),
    //   width: this.formBuilder.control(null),
    //   paddingLeft: this.formBuilder.control(null),
    //   paddingRight: this.formBuilder.control(null),
    //   paddingTop: this.formBuilder.control(null),
    //   paddingBottom: this.formBuilder.control(null),
    //   backgroundColor: this.formBuilder.control('orange'),
    //   color: this.formBuilder.control('orange'),
    //   fontSize: this.formBuilder.control(null),
    // })
  }

}
