import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ViewUuidComponent } from './views/view-uuid/view-uuid.component';

const routes: Routes = [
	{
		path: '',
		component: IndexComponent,
	},
	{
		path: 'uuid/:version',
		component: ViewUuidComponent,
	},
	{ path: '**', redirectTo: '/message/page-not-found', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
