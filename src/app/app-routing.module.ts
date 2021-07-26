import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { MainMenuComponent } from "./main-menu/main-menu.component";

import { AboutComponent } from "./about/about.component";

import { ExampleCenteringComponent } from "./example-centering/example-centering.component";

import { ResourcesComponent } from "./resources/resources.component";

import { WelcomeComponent } from "./welcome/welcome.component";

import { examples } from "./examples";

const routes: Routes = [
  { path: "", redirectTo: "welcome", pathMatch: "full" },

  { path: "menu", component: MainMenuComponent },

  { path: "about", component: AboutComponent },

  { path: "example-centering", component: ExampleCenteringComponent },

  { path: "resources", component: ResourcesComponent },

  { path: "welcome", component: WelcomeComponent },

  ...examples,
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
