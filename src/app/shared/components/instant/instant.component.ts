import { Component } from '@angular/core';
import { v4 as uuidv4 } from 'uuid';
import { MessageService } from '../../services/message.service';
import { MessageTypeEnum } from '../message/mesage-type.enum';
import { MessageDelayEnum } from '../message/message-delay.enum';

@Component({
	selector: 'app-instant',
	templateUrl: './instant.component.html',
	styleUrls: ['./instant.component.scss'],
})
export class InstantComponent {
	public uuid: string = '';

	constructor(private message: MessageService) {
		this.generateUUID();
	}

	public generateUUID(): void {
		this.uuid = uuidv4();
	}

	public copy(): void {
		navigator.clipboard.writeText(this.uuid);
		this.message.create('Copied to clipboard!', MessageTypeEnum.SUCCESS, MessageDelayEnum.SHORT);
	}
}
