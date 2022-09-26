import { catchError } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigationService {
	private readonly url = '/assets/data';

	constructor(private http: HttpClient) {}

	public getNavigation(): Observable<any> {
		return this.http.get<any>(this.url + '/navigation.json?t=' + Date.now()).pipe(catchError(this.handleError));
	}

	private handleError(error: HttpErrorResponse): Observable<never> {
		return throwError(error);
	}
}
