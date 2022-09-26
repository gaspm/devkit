import { VERSION } from './version';
import { EnvInterface } from '../app/objects/interfaces/env.interface';

export const environment: EnvInterface = {
	version: VERSION,
	production: true,
	ga: 'tracking-code',
	ppDnt: 'hosted_button_id',
};
