import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrashDataComponent } from './pages/crash-data/crash-data.component';
import { CrashDetailsComponent } from './pages/crash-details/crash-details.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/crashdata' },
  { path: 'crashdata', component: CrashDataComponent },
  { path: 'details/:id', component: CrashDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
