import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { YoutuberDetailComponent } from './youtuber-detail/youtuber-detail.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppComponent } from './app.component';



const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list/:id',
    component: YoutuberDetailComponent
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }


