const { openBrowser, goto, into, write, inputField, focus, click, $, press, comboBox, closeBrowser } = require('taiko');
const config = require('config');

async function completeCard() {
  if (await $('.quiz-true-false-buttons').exists()) {
    await click($('.quiz-true-false-buttons'));
    await click($('.got-it-core-button'));
  } else {
    await click($('#triggerCloseCurtain'));
  }
}

(async () => {
    try {
        await openBrowser();
        await goto(config.get('VirginPulse.url'), { navigationTimeout: 60000 });
        await write(config.get('VirginPulse.username'), into(textBox({'id':'username'})));
        await write(config.get('VirginPulse.password'), into(textBox({'id':'password'})));
        await click($('#kc-login'));
        await waitFor(10000);
        if (await $('#trophy-modal-close-btn').exists()) {
          await focus($('#trophy-modal-close-btn'));
          await click($('#trophy-modal-close-btn'));
        }
        await completeCard();
        await completeCard();
        await click(link('Healthy Habits'))
        // Calming Music
        await click($('#tracker-670-track-yes'))
        // Stairs
        await click($('#tracker-13-track-yes'))
        // Start the day right
        await click($('#tracker-44-track-yes'))
    } catch (e) {
        console.error(e);
    } finally {
        // await closeBrowser();
    }
})();
