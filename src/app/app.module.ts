import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TableComponentModule } from './table';
import { DemoTableComponent } from './table-demo/table.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoTableComponent,
  ],
  imports: [
    BrowserModule,
    TableComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
