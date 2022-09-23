import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { UuidVersionEnum } from '../../constants/uuid-version.enum';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
	public uuidVersionEnum = UuidVersionEnum;
	@Output() close = new EventEmitter<boolean>();
}
