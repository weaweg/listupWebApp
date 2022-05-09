import {Injectable} from "@angular/core"
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router"
import {UserStorageService} from "../_services/user-storage.service"

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userStorage: UserStorageService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.userStorage.isLoggedIn)
      return true
    this.router.navigate(['/login'])
    return false
  }
}
