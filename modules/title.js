function console_title(x) {
    const title = `[HACKER] ${x} | Quarex-Bomber v5.0 - Bomber.version | github.com/Quarex12s`;
    
    if (process.platform == 'win32') {
        process.title = title;
    } else {
        process.stdout.write('\x1b]2;' + title + '\x1b\x5c');
    }
}

module.exports = console_title;
