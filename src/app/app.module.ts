import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './views/index/index.component';
import { GeneratorComponent } from './views/view-uuid/components/generator/generator.component';
import { MessageComponent } from './shared/components/message/message.component';
import { OnlyNumberDirective } from './shared/directives/numbers-only.directive';
import { InstantComponent } from './views/view-uuid/components/instant/instant.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { LightDarkSwitcherComponent } from './shared/components/header/components/light-dark-switcher/light-dark-switcher.component';
import { WindowRef } from './shared/services/window-ref.service';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ViewUuidComponent } from './views/view-uuid/view-uuid.component';
import { DisabledDirective } from './shared/directives/disabled.directive';

@NgModule({
	declarations: [
		AppComponent,
		IndexComponent,
		GeneratorComponent,
		MessageComponent,
		OnlyNumberDirective,
		InstantComponent,
		FooterComponent,
		HeaderComponent,
		LightDarkSwitcherComponent,
		SidebarComponent,
  ViewUuidComponent,
  DisabledDirective,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule,
		ReactiveFormsModule,
		TranslateModule.forRoot({
			defaultLanguage: 'en',
			isolate: false,
			loader: {
				provide: TranslateLoader,
				useFactory: HttpLoaderFactory,
				deps: [HttpClient],
			},
		}),
	],
	providers: [WindowRef],
	bootstrap: [AppComponent],
})
export class AppModule {}

export function HttpLoaderFactory(http: HttpClient): TranslateHttpLoader {
	return new TranslateHttpLoader(http, './assets/i18n/', '.json?t=' + Date.now());
}
