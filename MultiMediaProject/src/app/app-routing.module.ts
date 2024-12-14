import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/pages/Home/Home.component';
import { NotFoundPageComponent } from './components/pages/NotFoundPage/NotFoundPage.component';

const routes: Routes = [
  {
    path: '',component: HomeComponent, pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent // title: 'resolvedChildATitle'
  },
  {
    path: 'feature',
    loadChildren: () => import('./FeatureModule/Feature/Feature.module').then(m => m.FeatureModule)
  },
  {
    path: 'error', component: NotFoundPageComponent,
    data: {
      type: 404,
      title: 'Page Not Found',
      desc: "Oopps!! The page you were looking for doesn't exist.",
    },
  },
  {
    path: 'error/:type',
    component: NotFoundPageComponent,
  },
  {
    path: '**', redirectTo: 'error', pathMatch: 'full'
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
