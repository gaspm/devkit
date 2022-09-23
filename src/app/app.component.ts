import { Component, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	sidebarOpen: boolean = false;

	constructor(public translate: TranslateService) {
		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('en');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('en');
	}

	onSidebarOpen(event: boolean): void {
		this.sidebarOpen = event;
	}

	@HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
		this.sidebarOpen = false;
	}
}
