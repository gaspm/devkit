export class DownloadUtil {
	private static textFile: string;

	public static makeFile(text: string): string {
		const data = new Blob([text], { type: 'text/plain' });

		if (this.textFile !== null) {
			window.URL.revokeObjectURL(this.textFile);
		}

		this.textFile = window.URL.createObjectURL(data);

		return this.textFile;
	}
}
