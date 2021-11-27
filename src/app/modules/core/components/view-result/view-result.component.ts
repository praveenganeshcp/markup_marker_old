import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.scss']
})
export class ViewResultComponent implements OnInit {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: {htmlContent: string, cssContent: string}) { }

  ngOnInit(): void {
  }

}
