import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Cmp02InputOutputComponent } from './cmp02-input-output/cmp02-input-output.component';
import { SugusComponent } from './cmp02-input-output/sugus/sugus.component';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Cmp01DataBindingComponent,
    Cmp02InputOutputComponent,
    SugusComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
