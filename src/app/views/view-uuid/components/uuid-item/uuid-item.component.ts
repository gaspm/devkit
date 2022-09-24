import { Component, Input } from '@angular/core';
import { MessageTypeEnum } from '../../../../shared/components/message/mesage-type.enum';
import { MessageDelayEnum } from '../../../../shared/components/message/message-delay.enum';
import { MessageService } from '../../../../shared/services/message.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
	selector: 'app-uuid-item',
	templateUrl: './uuid-item.component.html',
	styleUrls: ['./uuid-item.component.scss'],
})
export class UuidItemComponent {
	@Input() uuid: string = '';

	constructor(private message: MessageService, private translate: TranslateService) {
		//
	}

	public copy(text: string): void {
		navigator.clipboard.writeText(text);
		this.message.create(this.translate.instant('message_copy', { count: 1 }), MessageTypeEnum.SUCCESS, MessageDelayEnum.SHORT);
	}
}
