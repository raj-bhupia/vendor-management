import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerformanceEvaluationComponent } from './performance-evaluation.component';

const routes: Routes = [
  {path:'', component: PerformanceEvaluationComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PerformanceEvaluationRoutingModule { }
