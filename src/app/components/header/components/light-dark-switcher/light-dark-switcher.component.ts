import { Component, Inject } from '@angular/core';
import { LightDarkEnum } from './light-dark.enum';
import { DOCUMENT } from '@angular/common';
import { LocalStorageKey } from '../../../../shared/enums/local-storage-key.enum';
import { LocalStorageService } from '../../../../shared/services/local-storage.service';

@Component({
	selector: 'app-light-dark-switcher',
	templateUrl: './light-dark-switcher.component.html',
	styleUrls: ['./light-dark-switcher.component.scss'],
})
export class LightDarkSwitcherComponent {
	public lightDarkEnum = LightDarkEnum;
	public theme: LightDarkEnum;

	constructor(@Inject(DOCUMENT) private document: Document, private localStorage: LocalStorageService) {
		this.theme = this.localStorage.getValue(LocalStorageKey.THEME) || LightDarkEnum.LIGHT;
		this.setTheme(this.theme);
	}

	setTheme(theme: LightDarkEnum): void {
		this.document.body.classList.remove(LightDarkEnum.LIGHT);
		this.document.body.classList.remove(LightDarkEnum.DARK);
		this.theme = theme;
		this.document.body.classList.add(this.theme);
		this.localStorage.setValue(LocalStorageKey.THEME, this.theme);
	}
}
