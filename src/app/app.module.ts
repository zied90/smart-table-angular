import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { Ng2SmartTableModule, LocalDataSource } from "ng2-smart-table";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Ng2SmartTableModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
