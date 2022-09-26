import { Component, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { NavigationService } from '../../services/navigation-service';
import { NavigationInterface } from '../../interfaces/navigation.interface';

@Component({
	selector: 'app-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss'],
	encapsulation: ViewEncapsulation.None,
})
export class SidebarComponent {
	public navItems: Array<NavigationInterface> = [];
	@Output() close = new EventEmitter<boolean>();

	constructor(private navigationService: NavigationService) {
		this.navigationService.getNavigation().subscribe((next) => {
			this.navItems = next?.sidebar;
		});
	}
}
