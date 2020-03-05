import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { DivvybuySharedModule } from 'app/shared/shared.module';
import { DivvybuyCoreModule } from 'app/core/core.module';
import { DivvybuyAppRoutingModule } from './app-routing.module';
import { DivvybuyHomeModule } from './home/home.module';
import { DivvybuyEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    DivvybuySharedModule,
    DivvybuyCoreModule,
    DivvybuyHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    DivvybuyEntityModule,
    DivvybuyAppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent]
})
export class DivvybuyAppModule {}
