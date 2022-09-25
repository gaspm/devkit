import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './views/index/index.component';
import { ViewUuidComponent } from './views/view-uuid/view-uuid.component';
import { ViewUuidValidatorComponent } from './views/view-uuid-validator/view-uuid-validator.component';

const routes: Routes = [
	{ path: '', redirectTo: '/uuid', pathMatch: 'full' },
	{
		path: 'uuid',
		component: IndexComponent,
	},
	{
		path: 'uuid/:version',
		component: ViewUuidComponent,
	},
	{
		path: 'uuid-validator',
		component: ViewUuidValidatorComponent,
	},
	{ path: '**', redirectTo: '/message/page-not-found', pathMatch: 'full' },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
