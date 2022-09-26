export interface NavigationInterface {
	url: string;
	title: string;
	sub?: Array<NavigationInterface>;
}
