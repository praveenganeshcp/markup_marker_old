import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './pages/builder/builder.component';
import { WidgetsListComponent } from './components/widgets-list/widgets-list.component';
import { WidgetPropsComponent } from './components/widget-props/widget-props.component';
import { CoreRoutingModule } from './core-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ViewResultComponent } from './components/view-result/view-result.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    BuilderComponent,
    WidgetsListComponent,
    WidgetPropsComponent,
    ViewResultComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    ReactiveFormsModule,
    MatDialogModule
  ]
})
export class CoreModule { }
