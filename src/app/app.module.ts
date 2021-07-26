import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { RouterModule, Routes } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { MainMenuComponent } from "./main-menu/main-menu.component";

import { WelcomeComponent } from "./welcome/welcome.component";
import { AboutComponent } from "./about/about.component";

import { ExampleCenteringComponent } from "./example-centering/example-centering.component";
import { ExampleBlocksComponent } from "./example-blocks/example-blocks.component";

import { ResourcesComponent } from "./resources/resources.component";

import { examples } from "./examples";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    WelcomeComponent,
    ResourcesComponent,
    AboutComponent,
    ExampleCenteringComponent,
    ExampleBlocksComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
