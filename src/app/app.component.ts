import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { takeUntil } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
	title = 'app';
	sidebarOpen: boolean = false;
	private destroyObservable$: Subject<boolean> = new Subject();

	constructor(public translate: TranslateService, private router: Router) {
		// this language will be used as a fallback when a translation isn't found in the current language
		translate.setDefaultLang('en');

		// the lang to use, if the lang isn't available, it will use the current loader to get them
		translate.use('en');
	}

	get displaySidebar(): 'block' | 'none' {
		return this.sidebarOpen ? 'block' : 'none';
	}

	onSidebarOpen(event: boolean): void {
		this.sidebarOpen = event;
	}

	@HostListener('document:keydown.escape', ['$event']) onKeydownHandler(event: KeyboardEvent): void {
		this.sidebarOpen = false;
	}

	ngOnInit(): void {
		this.router.events.pipe(takeUntil(this.destroyObservable$)).subscribe((event) => {
			if (event instanceof NavigationEnd) {
				this.sidebarOpen = false;
			}
		});
	}
}
