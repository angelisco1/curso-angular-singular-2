import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface IComponentCanDeactivate {
  estanLosDatosGuardados(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree
}

@Injectable({
  providedIn: 'root'
})
export class DatosGuardadosGuard implements CanDeactivate<IComponentCanDeactivate> {
  canDeactivate(
    component: IComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return component.estanLosDatosGuardados() || confirm('No has guardado los datos... Seguro que quieres salir?? Perderas los cambios :(');
  }

}
