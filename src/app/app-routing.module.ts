import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { AuthGuardService } from './shared/services/auth-guard.service';
import { NotFoundComponent } from './core/not-found/not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'phone-book', loadChildren: './phone-book/phone-book.module#PhoneBookModule', canActivate: [AuthGuardService] },
  { path: 'not-found', component: NotFoundComponent },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }) ],
  exports: [ RouterModule ],
  providers: [ AuthGuardService ]
})
export class AppRoutingModule {}
