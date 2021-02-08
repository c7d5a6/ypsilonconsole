// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import { CurrentState } from "./classes";

// ------------------------------------------------------------------
const width = 211;
const terminalWidth = 70;
const currentState: CurrentState = { state: {}, airlocksOpened: [false, false, false], cardPresent: false, washerTurned: [false, false, false, false, false, false] };

const log___ = (line: string, color?: string) => {
    const margin = (width - terminalWidth) / 2;
    for (let i = 0; i < line.length; i = i + terminalWidth) {
        console.log(`${' '.repeat(margin)}${(color ? '\x1b[' + color + 'm' : '')}${line.substring(i, i + terminalWidth)}${(color ? '\x1b[0m' : '')}`);
    }
}

// Black        0;30     Dark Gray     1;30
// Red          0;31     Light Red     1;31
// Green        0;32     Light Green   1;32
// Brown/Orange 0;33     Yellow        1;33
// Blue         0;34     Light Blue    1;34
// Purple       0;35     Light Purple  1;35
// Cyan         0;36     Light Cyan    1;36
// Light Gray   0;37     White         1;37

const logErr = (line: string) => {
    log___(line, '31');
}
const logWar = (line: string) => {
    log___(line, '33');
}
const logGre = (line: string) => {
    log___(line, '1;30');
}

const run = async () => {
    // console.log('-'.repeat(400));
    await intro();
}

const delay = (s: number) => {
    return new Promise(resolve => setTimeout(resolve, s/* * 1000*/));
}

const intro = async () => {
    log___('__   __        _ _               _____ _        _   _             ');
    log___('\\ \\ \/ \/       (_) |             \/  ___| |      | | (_)            ');
    log___(' \\ V \/ __  ___ _| | ___  _ __   \\ \`--.| |_ __ _| |_ _  ___  _ __  ');
    log___('  \\ \/ \'_ \\\/ __| | |\/ _ \\| \'_ \\   \`--. \\ __\/ _\` | __| |\/ _ \\| \'_ \\ ');
    log___('  | | |_) \\__ \\ | | (_) | | | | \/\\__\/ \/ || (_| | |_| | (_) | | | |');
    log___('  \\_\/ .__\/|___\/_|_|\\___\/|_| |_| \\____\/ \\__\\__,_|\\__|_|\\___\/|_| |_|');
    log___('    | |                                                           ');
    log___('    |_|              ');
    log___('');
    log___('FLEET COMMODORE SYSTEMS © 2246 - GUILD LICENSE');
    log___('PROGRAM OPERATION GROUP SOFTWARE (P.O.G.S.)');
    logGre('----------');
    logWar('WARNING - LICENSE EXPIRED');
    logWar('CONTACT SYSTEMS ADMINISTRATOR');
    logGre('----------');
    await delay(1);
}

run();



