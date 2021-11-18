import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuilderComponent } from './pages/builder/builder.component';
import { WidgetsListComponent } from './components/widgets-list/widgets-list.component';
import { WidgetPropsComponent } from './components/widget-props/widget-props.component';
import { CoreRoutingModule } from './core-routing.module';


@NgModule({
  declarations: [
    BuilderComponent,
    WidgetsListComponent,
    WidgetPropsComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
