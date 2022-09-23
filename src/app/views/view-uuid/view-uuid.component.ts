import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-view-uuid',
	templateUrl: './view-uuid.component.html',
	styleUrls: ['./view-uuid.component.scss'],
})
export class ViewUuidComponent implements OnInit, OnDestroy {
	public version: number = 0;
	private destroyObservable$: Subject<boolean> = new Subject();

	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.params.pipe(takeUntil(this.destroyObservable$)).subscribe((params) => {
			if (params && params?.['version']) {
				this.version = Number(params?.['version']);
			}
		});
	}

	ngOnDestroy(): void {
		this.destroyObservable$.next(true);
		this.destroyObservable$.complete();
	}
}
