import { environment } from '../../../environments/environment';

export class AppUtil {
	public static getVersion(): string {
		return environment?.version;
	}
}
