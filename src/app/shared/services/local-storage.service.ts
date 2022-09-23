import { Injectable } from '@angular/core';
import { LocalStorageKey } from '../enums/local-storage-key.enum';
import { WindowRef } from './window-ref.service';

@Injectable({ providedIn: 'root' })
export class LocalStorageService {
	constructor(private window: WindowRef) {}

	getValue(key: LocalStorageKey): any {
		return this.window.nativeWindow.localStorage[key];
	}

	setValue(key: LocalStorageKey, value: any): void {
		this.window.nativeWindow.localStorage[key] = value;
	}

	removeValue(key: LocalStorageKey): void {
		this.window.nativeWindow.localStorage.removeItem(key);
	}
}
