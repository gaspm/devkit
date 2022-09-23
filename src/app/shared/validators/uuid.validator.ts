import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { validate as uuidValidate } from 'uuid';

export function uuidValidator(): ValidatorFn {
	return (control: AbstractControl): ValidationErrors | null => {
		const valid = uuidValidate(control.value);
		return valid ? null : { valid: { value: control.value } };
	};
}
