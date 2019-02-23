const { openBrowser, goto, into, write, inputField, focus, click, $, press, comboBox, closeBrowser } = require('taiko');
const config = require('config');
const stepRange = config.get('Data.steps').split('-').map(r => parseInt(r.trim()));
var steps = stepRange[0];
if (stepRange.length > 1) {
  steps = (Math.random() * Math.abs(stepRange[1] - stepRange[0])) + stepRange[0];
}
steps = Math.floor(steps);
const duration = steps / config.get('Data.stepsPerMinute');
const hh = Math.floor(duration / 60);
const mm = Math.floor(duration % 60);
const ss = Math.floor((duration - (hh * 60 + mm)) * 60);
(async () => {
    try {
        await openBrowser();
        await goto(config.get('Site.url'));
        await write(config.get('User.username'), into(inputField({'name':'email'})));
        await write(config.get('User.password'), into(inputField({'name':'password'})));
        await click(button({type:'submit'}));
        await click('Log');
        await click('Activities');
        await click($('button.walking'));
        await write('9', into(inputField({name: 'startTimeHours'})));
        await write('30', into(inputField({name: 'startTimeMinutes'})));
        await write(`${hh}`, into(inputField({name: 'durationHours'})));
        await write(`${mm}`, into(inputField({name: 'durationMinutes'})));
        await write(`${ss}`, into(inputField({name: 'durationSeconds'})));
        await focus(inputField({name: 'distance'}));
        await press('Tab');
        await press('ArrowDown');
        await press('ArrowDown');
        await write(`${steps}`, into(inputField({name: 'distance'})));
        await click($('.log-actions button[type=submit]'));
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
