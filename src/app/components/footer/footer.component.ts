import { Component, OnInit } from '@angular/core';
import { AppUtil } from '../../shared/utils/app.util';

@Component({
	selector: 'app-footer',
	templateUrl: './footer.component.html',
	styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
	public version = AppUtil.getVersion();
	constructor() {}

	ngOnInit(): void {}
}
