import { AfterViewInit, Component, ElementRef, Inject, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UuidVersionEnum } from '../../../../shared/constants/uuid-version.enum';
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5, NIL as NIL_UUID } from 'uuid';
import { MessageTypeEnum } from '../../../../shared/components/message/mesage-type.enum';
import { MessageDelayEnum } from '../../../../shared/components/message/message-delay.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { DownloadUtil } from '../../../../shared/utils/download.util';
import { DOCUMENT } from '@angular/common';
import { uuidValidator } from '../../../../shared/validators/uuid.validator';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-generator',
	templateUrl: './generator.component.html',
	styleUrls: ['./generator.component.scss'],
})
export class GeneratorComponent implements OnInit, AfterViewInit, OnChanges {
	@Input() version: number | any = 0;
	@Input() heading: string = '';

	public download = DownloadUtil;
	public uuidVersion = UuidVersionEnum;
	public nilUuid = NIL_UUID;
	public readonly minCount: number = 1;
	public readonly maxCount: number = 10000;

	public formGroup = this.fb.group({
		count: [this.minCount, [Validators.required, Validators.min(this.minCount), Validators.max(this.maxCount)]],
		namespace: [''],
		name: [''],
		uppercase: [false],
		multiple: [true],
	});

	public uuids: Array<string> = [];
	public messageType = MessageTypeEnum;

	@ViewChild('downloadButton') downloadButton: ElementRef | undefined;

	constructor(
		private fb: FormBuilder,
		private message: MessageService,
		@Inject(DOCUMENT) private document: Document,
		private translate: TranslateService
	) {
		//
	}

	public generateUUID(): void {
		this.uuids = [];
		const name: any = this.formGroup.get('name')?.value;
		const namespace: any = this.formGroup.get('namespace')?.value;
		const count: number | any = this.formGroup.value.count || this.minCount;
		const multiple = this.formGroup?.value?.multiple;
		let uuid: any = '';
		for (let i = 0; i < count; i++) {
			switch (this.version) {
				case UuidVersionEnum.UUID_1:
					uuid = uuidv1();
					break;
				case UuidVersionEnum.UUID_3:
					uuid = multiple ? uuidv3(name, uuidv4()) : uuidv3(name, namespace);
					break;
				case UuidVersionEnum.UUID_4:
					uuid = uuidv4();
					break;
				case UuidVersionEnum.UUID_5:
					uuid = multiple ? uuidv5(name, uuidv4()) : uuidv3(name, namespace);
					break;
			}
			if (uuid) {
				this.formGroup.value.uppercase ? (uuid = uuid.toUpperCase()) : uuid;
				this.uuids.push(uuid);
			}
		}
	}

	onChanges(): void {
		this.setMultipleBehavior(this.formGroup?.value?.multiple);
		this.formGroup.get('multiple')?.valueChanges.subscribe((val: boolean | any): void => {
			this.setMultipleBehavior(val);
		});
	}

	setMultipleBehavior(value: boolean | null | undefined): void {
		if (value) {
			this.formGroup.get('namespace')?.disable();
			this.formGroup.get('count')?.enable();
		} else {
			this.formGroup.get('namespace')?.enable();
			this.formGroup.get('count')?.disable();
			this.formGroup.get('count')?.setValue(1);
		}
	}

	public copyAll(): void {
		navigator.clipboard.writeText(this.uuids.join('\r\n'));
		this.message.create(
			this.translate.instant('message_copy', { count: this.uuids.length }),
			MessageTypeEnum.SUCCESS,
			MessageDelayEnum.SHORT
		);
	}

	get expandedTool(): boolean {
		return this.version === this.uuidVersion.UUID_5 || this.version === this.uuidVersion.UUID_3;
	}

	public resetResults(): void {
		this.uuids = [];
	}

	ngOnInit(): void {
		this.initForm();
		this.onChanges();
	}

	ngAfterViewInit(): void {
		setTimeout(() => {
			this.generateUUID();
		});
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['version']?.currentValue) {
			this.initForm();
			this.generateUUID();
		}
	}

	onSubmit(): void {
		this.generateUUID();
	}

	public processHref(): void {
		const link: any = this.downloadButton?.nativeElement;
		link.href = DownloadUtil.makeFile(this.uuids.join('\r\n'));
	}

	private initForm(): void {
		if (this.expandedTool) {
			this.formGroup.get('name')?.setValue('uuigenerator');
			this.formGroup.get('namespace')?.setValue(uuidv4());
			this.formGroup.get('namespace')?.setValidators([Validators.required, uuidValidator()]);
			this.formGroup.get('count')?.disable();
		}
	}
}
