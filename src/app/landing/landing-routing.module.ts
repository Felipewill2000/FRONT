import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Component Pages
import { IndexComponent } from "./index/index.component";
import { NftComponent } from "./nft/nft.component";
import { JobComponent } from './job/job.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "nft",
    component: NftComponent
  },
  {
    path: "job",
    component: JobComponent
  },{
    path: "product-details/:id",
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class LandingRoutingModule { }
