import { NgModule } from '@angular/core';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AddlivreurComponent } from './addlivreur/addlivreur.component';
import { AddreclamationComponent } from './addreclamation/addreclamation.component';
import { EditlivreurComponent } from './editlivreur/editlivreur.component';
import { EditreclamationComponent } from './editreclamation/editreclamation.component';
import { RayonComponent } from './rayon/rayon.component';
import { RetrievelivreurComponent } from './retrievelivreur/retrievelivreur.component';
import { RetrievereclamationComponent } from './retrievereclamation/retrievereclamation.component';
import { SerachStockComponent } from './serach-stock/serach-stock.component';

import { SerachComponent } from './serach/serach.component';
import { StatsComponent } from './stats/stats.component';
import { StockComponent } from './stock/stock.component';
import { UpdateComponent } from './update/update.component';
import { CreateEvenementComponent } from './create-evenement/create-evenement.component';
import { UpdateEvenementComponent } from './update-evenement/update-evenement.component';
import { UserProfileComponent } from './user-profile/user-profile.component';


const routes: Routes = [
  {path:"",redirectTo:"rayon",pathMatch:"full"},
  {path:"addRayon",component:RayonComponent},
  {path:"serach",component:SerachComponent},
  {path:"addStock",component:StockComponent},
  {path:"serach-stock",component:SerachStockComponent},
  {path:"registerlivreur",component:AddlivreurComponent},
  {path:"update/:idRayon",component:UpdateComponent},
  {path:"retrievelivreur",component:RetrievelivreurComponent},
  {path:'edit/:livreur_id',component:EditlivreurComponent},
  {path:"stats",component:StatsComponent},
  {path:'editrec/:reclamation_id',component:EditreclamationComponent},
  {path:"ajouterreclamation",component:AddreclamationComponent},
  {path:"retrievereclamation",component:RetrievereclamationComponent},
  {path:"ajoutevent",component:CreateEvenementComponent},
  {path:'maj/:idevent',component:UpdateEvenementComponent},
  {path:"home",component:AcceuilComponent},
  {path:"user-profile",component:UserProfileComponent}

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    Ng2SearchPipeModule,
    
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
