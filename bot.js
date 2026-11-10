const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'kakasmp7.aternos.me',
        port: 58848,
        username: 'online',
        version: '1.21.1'
    });

    bot.once('spawn', () => {
        console.log('Bot "online" server par successfully join ho gaya hai!');
        
        // Har 5 second me auto jump karega
        setInterval(() => {
            if (bot.entity) {
                bot.setControlState('jump', true);
                setTimeout(() => bot.setControlState('jump', false), 250);
            }
        }, 5000);
    });

    bot.on('end', () => {
        console.log('Bot disconnected! 10 second me dubara connect ho raha hai...');
        setTimeout(createBot, 10000);
    });

    bot.on('error', (err) => {
        console.log('Error aaya:', err);
    });
}

createBot();
