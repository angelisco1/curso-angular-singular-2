import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiPrimerComponenteComponent } from './mi-primer-componente/mi-primer-componente.component';
import { Cmp01DataBindingComponent } from './cmp01-data-binding/cmp01-data-binding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { Cmp06FormulariosComponent } from './cmp06-formularios/cmp06-formularios.component';
import { ErrorFormComponent } from './cmp06-formularios/error-form/error-form.component';
import { ReactivoComponent } from './cmp06-formularios/reactivo/reactivo.component';
import { DePlantillaComponent } from './cmp06-formularios/de-plantilla/de-plantilla.component';
import { InputFieldComponent } from './cmp06-formularios/input-field/input-field.component';
import { Cmp07ServiciosComponent } from './cmp07-servicios/cmp07-servicios.component';
import { CmpAComponent } from './cmp07-servicios/cmp-a/cmp-a.component';
import { CmpBComponent } from './cmp07-servicios/cmp-b/cmp-b.component';

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
    DescuentoPipe,
    Cmp06FormulariosComponent,
    ErrorFormComponent,
    ReactivoComponent,
    DePlantillaComponent,
    InputFieldComponent,
    Cmp07ServiciosComponent,
    CmpAComponent,
    CmpBComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
