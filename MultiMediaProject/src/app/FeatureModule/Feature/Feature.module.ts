import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureComponent } from './Feature.component';
import { DENOISEComponent } from '../../components/pages/DENOISE/DENOISE.component';
import { RouterModule, Routes } from '@angular/router';
import { DETAILSComponent } from '../../components/pages/DETAILS/DETAILS.component';
import { RENDERComponent } from '../../components/pages/RENDER/RENDER.component';
import { UPSCALEComponent } from '../../components/pages/UPSCALE/UPSCALE.component';
import { ChangeBitsComponent } from '../../components/pages/ChangeBits/ChangeBits.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [  
  {path:'denoise', component: DENOISEComponent},  
  {path:'details', component: DETAILSComponent},
  {path:'render', component: RENDERComponent},
  {path:'upscale', component: UPSCALEComponent},
  {path:'changebit', component: ChangeBitsComponent},
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    FeatureComponent,
    DENOISEComponent,
    DETAILSComponent,
    RENDERComponent,
    UPSCALEComponent
  ]
})
export class FeatureModule { }
