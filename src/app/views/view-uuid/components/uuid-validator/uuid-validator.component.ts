import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MessageService } from '../../../../shared/services/message.service';
import { DOCUMENT } from '@angular/common';
import { NIL as NIL_UUID } from 'uuid';
import { uuidValidator } from '../../../../shared/validators/uuid.validator';
import { MessageTypeEnum } from '../../../../shared/components/message/mesage-type.enum';

@Component({
	selector: 'app-uuid-validator',
	templateUrl: './uuid-validator.component.html',
	styleUrls: ['./uuid-validator.component.scss'],
})
export class UuidValidatorComponent implements OnInit {
	public nilUuid = NIL_UUID;
	public messageType = MessageTypeEnum;
	public formGroup = this.fb.group({
		uuid: ['', [uuidValidator()]],
	});

	constructor(private fb: FormBuilder, private message: MessageService, @Inject(DOCUMENT) private document: Document) {
		//
	}

	clear(): void {
		this.formGroup.get('uuid')?.reset();
	}

	ngOnInit(): void {}

	onSubmit(): void {}
}
