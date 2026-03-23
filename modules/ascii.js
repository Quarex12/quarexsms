const chalk = require('chalk');

function printBanner() {
    console.clear();
    console.log(chalk.green(`
╔══════════════════════════════════════════════════════════════════════╗
║                                                                      ║
║   ██████╗ ██╗   ██╗ █████╗ ██████╗ ███████╗██╗  ██╗                  ║
║  ██╔═══██╗██║   ██║██╔══██╗██╔══██╗██╔════╝╚██╗██╔╝                  ║
║  ██║   ██║██║   ██║███████║██████╔╝█████╗   ╚███╔╝                   ║
║  ██║▄▄ ██║██║   ██║██╔══██║██╔══██╗██╔══╝   ██╔██╗                   ║
║  ╚██████╔╝╚██████╔╝██║  ██║██║  ██║███████╗██╔╝ ██╗                  ║
║   ╚══▀▀═╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝                  ║
║                                                                      ║
║           ██████╗  ██████╗ ███╗   ███╗██████╗ ███████╗██████╗        ║
║           ██╔══██╗██╔═══██╗████╗ ████║██╔══██╗██╔════╝██╔══██╗       ║
║           ██████╔╝██║   ██║██╔████╔██║██████╔╝█████╗  ██████╔╝       ║
║           ██╔══██╗██║   ██║██║╚██╔╝██║██╔══██╗██╔══╝  ██╔══██╗       ║
║           ██████╔╝╚██████╔╝██║ ╚═╝ ██║██████╔╝███████╗██║  ██║       ║
║           ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═════╝ ╚══════╝╚═╝  ╚═╝       ║
║                                                                      ║
╚══════════════════════════════════════════════════════════════════════╝
    `));
    
    flickerText('                           [>] GELİŞMİŞ QUAREX BOMBER V5.0 [<]', 'cyan');
    console.log(chalk.yellow('                            [>] KODLAYAN: Quarex12sd [<]'));
    console.log(chalk.gray('                          [>] github.com/Quarex12s [<]'));
    console.log('');
    
    simulateHacking();
    
    console.log(chalk.red.bold('    ⚠️  UYARI: YETKİSİZ KULLANIM KESİNLİKE YASAKTIR ⚠️'));
    console.log(chalk.yellow('    🔥 BU BİR SİBER GÜVENLİK ARAŞTIRMA ARACIDIR - SORUMLULUK SİZE AİTTİR'));
    console.log('');
}

function simulateHacking() {
    const steps = [
        "Kernel modülleri başlatılıyor...",
        "Güvenlik protokolleri analiz ediliyor...",
        "Şifreli tünel oluşturuluyor...",
        "Yükleme vektörleri hazırlanıyor...",
        "Saldırı parametreleri yapılandırılıyor...",
        "Ağ imzası gizleniyor...",
        "İzleme rotaları devre dışı bırakılıyor...",
        "Anonim proxy'ler aktif ediliyor...",
        "Sistem hazırlandı ve saldırıya hazır..."
    ];
    
    steps.forEach(step => {
        const rand = Math.random();
        if (rand > 0.7) {
            console.log(chalk.green(`    [${getRandomHexCode()}] ${step}`));
        } else if (rand > 0.4) {
            console.log(chalk.cyan(`    [${getRandomHexCode()}] ${step}`));
        } else {
            console.log(chalk.blue(`    [${getRandomHexCode()}] ${step}`));
        }
    });
    
    console.log('');
    simulateProgressBar();
}

function getRandomHexCode() {
    return "0x" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0').toUpperCase();
}

function flickerText(text, color) {
    console.log(chalk[color].bold(text));
}

function simulateProgressBar() {
    console.log(chalk.green("    [SİSTEM] Siber cephanelik yükleniyor: ") + 
        chalk.white("[") + 
        chalk.green("████████████████████████████") + 
        chalk.white("] 100%"));
    console.log('');
}

function printHackerLine() {
    const chars = ['█', '▓', '▒', '░', '▄', '▀', '■', '□', '▪', '◢', '◣', '◤', '◥', '0', '1'];
    let line = '';
    for(let i = 0; i < 70; i++) {
        if (Math.random() > 0.8) {
            line += chalk.green(chars[Math.floor(Math.random() * chars.length)]);
        } else if (Math.random() > 0.5) {
            line += chalk.cyan(chars[Math.floor(Math.random() * chars.length)]);
        } else {
            line += chalk.white(chars[Math.floor(Math.random() * chars.length)]);
        }
    }
    console.log(line);
}

function printStats(phone, amount) {
    console.log(chalk.cyan('╔════════════════════════════════════════════════════════════════════╗'));
    console.log(chalk.cyan('║') + chalk.green.bold('                      OPERASYON PARAMETRELERİ                       ') + chalk.cyan('║'));
    console.log(chalk.cyan('╠════════════════════════════════════════════════════════════════════╣'));
    console.log(chalk.cyan('║') + chalk.white(`  HEDEF KİMLİĞİ: +90${phone}                                     `) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.white(`  GÖNDERİLECEK MİKTAR: ${amount} DİJİTAL SAVAŞ BAŞLIĞI                `) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.green(`  PROTOKOL: SMS BOMBARDIMANI                                    `) + chalk.cyan('║'));
    console.log(chalk.cyan('║') + chalk.red.bold(`  DURUM: KONUMLANDIRMA İÇİN HAZIR VE TETİKTE                    `) + chalk.cyan('║'));
    console.log(chalk.cyan('╚════════════════════════════════════════════════════════════════════╝'));
    
    for (let i = 0; i < 3; i++) {
        printHackerLine();
    }
    console.log('');
}

module.exports = { printBanner, printHackerLine, printStats };