import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { FormsModule } from '@angular/forms';
import { Cmp02InputOutputComponent } from './cmp02-input-output/cmp02-input-output.component';
import { SugusComponent } from './cmp02-input-output/sugus/sugus.component';
import { FormCvComponent } from './cmp02-input-output/form-cv/form-cv.component';
import { PreviewCvComponent } from './cmp02-input-output/preview-cv/preview-cv.component';
import { Cmp03DirectivasComponent } from './cmp03-directivas/cmp03-directivas.component';
import { MarcarDirective } from './cmp03-directivas/marcar.directive';
import { Cmp04ReferenciasComponent } from './cmp04-referencias/cmp04-referencias.component';
import { Cmp05PipesComponent } from './cmp05-pipes/cmp05-pipes.component';
import { FiltroPipe } from './cmp05-pipes/filtro.pipe';
import { DescuentoPipe } from './cmp05-pipes/descuento.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MiPrimerComponenteComponent,
    Cmp01DataBindingComponent,
    Cmp02InputOutputComponent,
    SugusComponent,
    FormCvComponent,
    PreviewCvComponent,
    Cmp03DirectivasComponent,
    MarcarDirective,
    Cmp04ReferenciasComponent,
    Cmp05PipesComponent,
    FiltroPipe,
    DescuentoPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
