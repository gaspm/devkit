import { Component, Input, OnInit } from '@angular/core';
import { MessageTypeEnum } from './mesage-type.enum';

@Component({
	selector: 'app-message',
	templateUrl: './message.component.html',
	styleUrls: ['./message.component.scss'],
})
export class MessageComponent implements OnInit {
	@Input() type: MessageTypeEnum = MessageTypeEnum.ALERT;
	@Input() text: string = '';

	constructor() {}

	ngOnInit(): void {}
}
