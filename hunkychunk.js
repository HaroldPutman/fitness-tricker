const { openBrowser, goto, into, write, inputField, focus, click, $, press, comboBox, closeBrowser } = require('taiko');
const config = require('config');
const stepRange = config.get('Fitbit.steps').split('-').map(r => parseInt(r.trim()));
var steps = stepRange[0];
if (stepRange.length > 1) {
  steps = (Math.random() * Math.abs(stepRange[1] - stepRange[0])) + stepRange[0];
}
steps = Math.floor(steps);
const duration = steps / config.get('Fitbit.stepsPerMinute');
const hh = Math.floor(duration / 60);
const mm = Math.floor(duration % 60);
const ss = Math.floor((duration - (hh * 60 + mm)) * 60);
const timeRE = RegExp(/(\d+):(\d+)\s*([ap]m)?/,'i');
const time = timeRE.exec(config.get('Fitbit.time').toLowerCase());
(async () => {
    try {
        await openBrowser();
        await goto(config.get('Fitbit.url'));
        await write(config.get('Fitbit.username'), into(inputField({'type':'email'})));
        await write(config.get('Fitbit.password'), into(inputField({'type':'password'})));
        await click(button('Login'));
        await waitFor(intervalSecs(5));
        await click($('button.walking'));
        await write(time[1], into(inputField({name: 'startTimeHours'})));
        await write(time[2], into(inputField({name: 'startTimeMinutes'})));
        await click(link({id: 'ampm-c33-button'}));
        await click(link(time[3], toRightOf('Start time')));
        await write(`${hh}`, into(inputField({name: 'durationHours'})));
        await write(`${mm}`, into(inputField({name: 'durationMinutes'})));
        await write(`${ss}`, into(inputField({name: 'durationSeconds'})));
        await click(link({id: 'distance-units-c33-button'}));
        await click(link('steps', toRightOf('Distance')));
        await write(`${steps}`, into(inputField({name: 'distance'})));
        await click($('.log-actions button[type=submit]'));
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
