import { Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

export function untilDestroyed(object: any) {
	return function <T>(source: Observable<T>) {
		return source.pipe(takeUntil(object.destroyed$));
	};
}
