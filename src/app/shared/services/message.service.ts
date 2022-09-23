import { Injectable, Inject, Renderer2, RendererFactory2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { MessageTypeEnum } from '../components/message/mesage-type.enum';
import { MessageDelayEnum } from '../components/message/message-delay.enum';

@Injectable({ providedIn: 'root' })
export class MessageService {
	private renderer: Renderer2;

	constructor(rendererFactory: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
		this.renderer = rendererFactory.createRenderer(null, null);
	}

	create(text: string, type: MessageTypeEnum, delay: MessageDelayEnum): void {
		const messages = this.document.getElementById('messages');
		const message = this.renderer.createElement('div');
		this.renderer.setAttribute(message, 'class', 'message ' + type);
		this.renderer.setProperty(message, 'innerHTML', text);
		this.renderer.appendChild(messages, message);
		setTimeout(() => {
			this.renderer.removeChild(messages, message);
		}, delay);
	}
}
