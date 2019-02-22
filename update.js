const { openBrowser, goto, into, write, inputField, focus, click, $, press, comboBox, closeBrowser } = require('taiko');
const config = require('config');
const url = config.get('Site.url');
const user = config.get('User.username');
const password = config.get('User.password');
(async () => {
    try {
        await openBrowser();
        await goto(url);
        await write(user, into(inputField({'name':'email'})));
        await write(password, into(inputField({'name':'password'})));
        await click(button({type:'submit'}));
        await click('Log');
        await click('Activities');
        await click($('button.walking'));
        await write('7', into(inputField({name: 'startTimeHours'})));
        await write('30', into(inputField({name: 'startTimeMinutes'})));
        await write('1', into(inputField({name: 'durationHours'})));
        await write('0', into(inputField({name: 'durationMinutes'})));
        await write('0', into(inputField({name: 'durationSeconds'})));
        await focus(inputField({name: 'distance'}));
        await press('Tab');
        await press('ArrowDown');
        await press('ArrowDown');
        await write('7000', into(inputField({name: 'distance'})));
        await click($('.log-actions button[type=submit]'));
    } catch (e) {
        console.error(e);
    } finally {
        await closeBrowser();
    }
})();
