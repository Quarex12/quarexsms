const rl = require('readline-sync');
const colors = require('colors');
const title = require('./modules/title.js');
const fastBomber = require('./modules/sms.js');
const { printBanner, printHackerLine, printStats } = require('./modules/ascii.js');
const { loadingAnimation, typeWriter } = require('./modules/animations.js');

global.request = require('request');
global.axios = require('axios');
global.faker = require('faker');
global.dayjs = require('dayjs');
global.fs = require('fs');
global.chalk = require('chalk');

async function main() {
    printBanner();
    
    await loadingAnimation('Hacker modüllerinin başlatılması', 2000);
    await loadingAnimation('Hedef tespit sistemlerinin yüklenmesi', 1500);
    await loadingAnimation('Anonim ağlara bağlanmak', 2000);
    
    console.log(chalk.red('\n[SYSTEM] Tüm sistemler çalışır durumda. Göreve hazır.\n'));
    
    console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let telefon = rl.question(chalk.red.bold('[TARGET] ') + chalk.white('Telefon numarasını girin (+90): '));
    
    if (telefon.length != 10) {
        console.log(chalk.red('❌ [ERROR] Telefon numarası 10 rakamdan oluşmalıdır. Ex: 5401234521'));
        process.exit(1);
    }
    
    title('Hedef Ele Geçirildi: ' + telefon);
    
    console.log(chalk.yellow('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━'));
    let miktar = rl.question(chalk.red.bold('[PAYLOAD] ') + chalk.white('Kaç adet SMS bombası gönderilecek?: '));
    
    if(isNaN(miktar)) {
        console.log(chalk.red('❌ [ERROR] Lütfen geçerli bir numara girin.'));
        process.exit(1);
    }
    
    if (miktar.length == 0) {
        console.log(chalk.red('❌ [ERROR] Yük sayısı gereklidir'));
        process.exit(1);
    }
    
    title(`Hedef: ${telefon} - Yük: ${miktar}`);
    
    printStats(telefon, miktar);
    
    console.log(chalk.red.bold('🚀 GÖREV GERİ SAYIMI BAŞLATILDI...'));
    for(let i = 5; i > 0; i--) {
        console.log(chalk.red.bold(`[${i}]  Başlamasına ${i} saniyeler...`));
        await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    console.log(chalk.green.bold('🔥 GÖREV BAŞLADI - SMS BOMBALAMA SALDIRISI DEVAM EDİYOR 🔥\n'));
    
    await fastBomber(telefon, miktar);
}

main().catch(console.error);
