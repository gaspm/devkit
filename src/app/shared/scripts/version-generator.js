const { resolve } = require('path');
const { writeFileSync } = require('fs-extra');
const moment = require('moment');

const dateFormat = 'YYYY.MM.DD-HHmm';
const version = JSON.stringify(moment(new Date()).format(dateFormat), null, 4);
const file = resolve(__dirname, '..', '..', '..', '..', 'src', 'environments', 'version.ts');
writeFileSync(file, `export const VERSION = ${version};`, {
	encoding: 'utf-8',
});

console.info('Version:', version);
