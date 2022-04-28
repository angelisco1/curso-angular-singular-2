import { RouterModule, Routes } from "@angular/router";
import { EditarUsuarioComponent } from "./editar-usuario/editar-usuario.component";
import { Error404Component } from "./error404/error404.component";
import { DatosGuardadosGuard } from "./guards/datos-guardados.guard";
import { IsLoggedInGuard } from "./guards/is-logged-in.guard";
import { InfoUsuarioComponent } from "./info-usuario/info-usuario.component";
import { NuevoUsuarioComponent } from "./nuevo-usuario/nuevo-usuario.component";
import { UsuariosComponent } from "./usuarios/usuarios.component";

const USUARIOS_ROUTES: Routes = [
  { path: ':id/info', component: InfoUsuarioComponent, canActivate: [IsLoggedInGuard] },
  { path: ':id/editar', component: EditarUsuarioComponent, canDeactivate: [DatosGuardadosGuard] }
]

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'usuarios', pathMatch: 'full' },
  // { path: 'usuarios/:id', component: InfoUsuarioComponent },
  { path: 'usuarios', component: UsuariosComponent, children: USUARIOS_ROUTES },
  { path: 'nuevo-usuario', component: NuevoUsuarioComponent },
  { path: '**', component: Error404Component },
]

export const RoutingModule = RouterModule.forRoot(APP_ROUTES)