// -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

declare var require: any
declare var process: any
const readline = require('readline');

// ------------------------------------------------------------------
const width = 211;
const terminalWidth = 80;
const margin = (width - terminalWidth) / 2;
type State = 'INTRO' | 'HOME' | 'DIAGNOSTICS' | 'SCHEDULE' | 'CONTROLS' | 'ROSTER' | 'COMMS' | 'LAYOUT' | 'STATUS' | 'AIRLOCK' | 'SHOWERS' | 'SYSTEM';
let currentState: State = 'HOME';
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: `\n${' '.repeat(margin)}>>> `
});
let cardIn = false;
let hacked = false;
const lockedDoors = [true, false, false]
let water = true;
let life = true;
let stateCommands: Map<State, string[]> = new Map();
stateCommands.set('HOME', ['DIAGNOSTICS', 'SCHEDULE', 'CONTROLS', 'ROSTER', 'COMMS'])
stateCommands.set('SCHEDULE', ['BACK'])
stateCommands.set('ROSTER', ['BACK'])
stateCommands.set('STATUS', ['BACK'])
stateCommands.set('DIAGNOSTICS', ['LAYOUT', 'STATUS', 'BACK'])
stateCommands.set('LAYOUT', ['PRINT', 'BACK'])
stateCommands.set('CONTROLS', ['AIRLOCK', 'SHOWERS', 'SYSTEM [A]', 'BACK'])
stateCommands.set('COMMS', ['HAIL #', 'BACK'])
stateCommands.set('AIRLOCK', ['OPEN #', 'CLOSE #', 'BACK'])
stateCommands.set('SHOWERS', ['WATER', 'BACK'])
stateCommands.set('SYSTEM', ['LIFESUPPORT', 'SELF-DESTRUCT', 'BACK'])


// const states = [
//     new State("INTRO",()=>{
//         currentState.state = states[1];
//         currentState.state.runState();
//     }),
//     new State("HOME",()=>console.log("home"))
// ]
// const currentState: CurrentState = { state: states[0], airlocksOpened: [false, false, false], cardPresent: false, washerTurned: [false, false, false, false, false, false] };

const log___ = (line: string, color?: string) => {

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
const logSuc = (line: string) => {
    log___(line, '1;32');
}

const runMain = async () => {
    // console.log('-'.repeat(400));
    await intro();
    await run();
}

const run = async () => {
    for await (const line of rl) {
        if (line.toLocaleUpperCase() == "INSERT CARD") {
            cardIn = true;
            log___("\n")
            log___(".")
            await delay(1);
            log___(".")
            await delay(1);
            log___(".")
            await delay(0.3);
            log___("\n")
            logSuc("ADMINISTRATION ACCESS CARD INSERTED")
            log___("\n")
            log___(".")
            await delay(0.5);
            log___(".")
            log___("\n")
            await delay(0.3);
            log___("WELCOME SONYA")
            rl.prompt();
            continue;
        }
        if (line.toLocaleUpperCase() == "HACK SYSTEM") {
            hacked = true;
            log___("\n")
            log___(".")
            await delay(1);
            log___(".")
            await delay(1);
            log___(".͙͍̓͒")
            await delay(0.3);
            log___("\n")
            logSuc("Ǎ̧̪̅D̲͓̫̍̊̕M̙͚̹̈́͋͡Ị̼̗̓̐̐N͈̜͛̀I̐͜S͘ͅTRA̯͂TIO̬̹͌́N ̹̑͝ͅAC̦͈̠̋̎͞CĚ͙S͍̼̏̃S ͈̄C̮̐Ȃ̯̚ͅRD͇͒ ̯̅I̫̅NS̹̮͐̈́E͖̲̋̈́R̤̭̰̿͌̔T̼̮̹̔͊̄Ê̲͍͑D̺̤̽̕Ǎ̧̪̅D̲͓̫̍̊̕M̙͚̹̈́͋͡Ị̼̗̓̐̐N͈̜͛̀I̐͜S͘ͅTRA̯͂TIO̬̹͌́N ̹̑͝ͅAC̦͈̠̋̎͞CĚ͙S͍̼̏̃S ͈̄C̮̐Ȃ̯̚ͅRD͇͒ ̯̅I̫̅NS̹̮͐̈́E͖̲̋̈́R̤̭̰̿͌̔T̼̮̹̔͊̄Ê̲͍͑D̺̤̽̕Ǎ̧̪̅D̲͓̫̍̊̕M̙͚̹̈́͋͡Ị̼̗̓̐̐N͈̜͛̀I̐͜S͘ͅTRA̯͂TIO̬̹͌́N ̹̑͝ͅAC̦͈̠̋̎͞CĚ͙S͍̼̏̃S ͈̄C̮̐Ȃ̯̚ͅRD͇͒ ̯̅I̫̅NS̹̮͐̈́E͖̲̋̈́R̤̭̰̿͌̔T̼̮̹̔͊̄Ê̲͍͑D̺̤̽̕")
            logSuc("")
            log___("\n")
            log___(".̗̎")
            await delay(0.5);
            log___(".͉͇͑̐")
            log___("\n")
            await delay(0.3);
            log___("Ŵ̮͚̩̉͐E̟̾LCO̢̿M̥̱͊͛Ế̜̮̼̚ ͔̓S͙͠O̢̰̩͒͂͂N̢̆Ŷ͖A̩͆")
            rl.prompt();
            continue;
        }
        switch (currentState) {
            case 'HOME':
                switch (line.toLocaleUpperCase()) {
                    case 'DIAGNOSTICS':
                        currentState = "DIAGNOSTICS";
                        log___("\n");
                        log___("DIAGNOSTICS");
                        break;
                    case 'SCHEDULE':
                        currentState = "SCHEDULE";
                        await scedule();
                        break;
                    case 'CONTROLS':
                        currentState = "CONTROLS";
                        log___("\n");
                        log___("CONTROLS");
                        break;
                    case 'ROSTER':
                        currentState = "ROSTER";
                        await roster();
                        break;
                    case 'COMMS':
                        currentState = "COMMS";
                        await comms();
                        break;
                    case '':
                    case undefined:
                        await home();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'SCHEDULE':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "HOME";
                        await home();
                        break;
                    case '':
                    case undefined:
                        await scedule();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'ROSTER':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "HOME";
                        await home();
                        break;
                    case '':
                    case undefined:
                        await roster();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'DIAGNOSTICS':
                switch (line.toLocaleUpperCase()) {
                    case 'LAYOUT':
                        currentState = "LAYOUT";
                        await layout();
                        break;
                    case 'STATUS':
                        currentState = "STATUS";
                        await statusScr();
                        break;
                    case 'BACK':
                        currentState = "HOME";
                        await home();
                        break;
                    case '':
                    case undefined:
                        log___("\n");
                        log___("DIAGNOSTICS");
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'STATUS':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "DIAGNOSTICS";
                        log___("\n");
                        log___("DIAGNOSTICS");
                        break;
                    case '':
                    case undefined:
                        await statusScr();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'LAYOUT':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "DIAGNOSTICS";
                        log___("\n");
                        log___("DIAGNOSTICS");
                        break;
                    case 'PRINT':
                        log___('\n');
                        log___('PRINTING');
                        log___('\n');
                        await delay(0.5);
                        log___('.');
                        await delay(0.5);
                        log___('.');
                        await delay(0.5);
                        log___('.');
                        await delay(0.5);
                        log___('\n');
                        logSuc('PRINTED');
                        log___('\n');
                        break;
                    case '':
                    case undefined:
                        await layout();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'COMMS':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "HOME";
                        await home();
                        break;
                    case '':
                    case undefined:
                        await comms();
                        break;
                    default:
                        if (line.toLocaleUpperCase().startsWith('HAIL '))
                            if (line.substring(5) == '1') {
                                log___("\n")
                                log___("HAILING RSV THE HERACLES");
                                log___("\n")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(2);
                                log___("\n")
                                logErr("NO ANSWER");
                                break;
                            } else if (line.substring(5) == '2') {
                                log___("\n")
                                log___("HAILING STS BEHOLDER");
                                log___("\n")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___("\n")
                                log___("SENDING SYN")
                                log___("\n")
                                await delay(0.5);
                                log___(".")
                                await delay(1);
                                log___("\n")
                                log___("WAITING SYN-ACK")
                                log___("\n")
                                await delay(2);
                                log___(".")
                                await delay(1);
                                log___(".")
                                await delay(1);
                                log___("\n")
                                logSuc("RECEIVED SYN-ACK")
                                log___("\n")
                                await delay(0.8);
                                log___(".")
                                await delay(1);
                                log___("\n")
                                log___("SENDING ACK")
                                log___("\n")
                                await delay(0.3);
                                log___(".")
                                await delay(1);
                                log___("\n")
                                logSuc("CONNECTION ESTABLISHED")
                                log___("\n")
                                await delay(0.2);
                                log___("\n")
                                log___("\n")
                                logSuc("INTERCOMM ACTIVATED")
                                log___("\n")
                                break;
                            }
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'CONTROLS':
                switch (line.toLocaleUpperCase()) {
                    case 'AIRLOCK':
                        currentState = "AIRLOCK";
                        await airlock();
                        break;
                    case 'SHOWERS':
                        currentState = "SHOWERS";
                        await showers();
                        break;
                    case 'SYSTEM':
                        if (hacked || cardIn) {
                            currentState = "SYSTEM";
                            await system();
                            break;
                        } else {
                            log___("\n");
                            logErr("ACCESS DENIED. ADMIN KEYCARD REQUIRED");
                            await delay(1);
                            break;
                        }
                    case 'BACK':
                        currentState = "HOME";
                        await home();
                        break;
                    case '':
                    case undefined:
                        log___("\n");
                        log___("CONTROLS");
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'AIRLOCK':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "CONTROLS";
                        log___("\n");
                        log___("CONTROLS");
                        break;
                    case '':
                    case undefined:
                        await airlock();
                        break;
                    default:
                        if (line.toLocaleUpperCase().startsWith('OPEN ')) {
                            if (line.substring(5) == '1') {
                                await switchAirlock(0, false);
                                break;
                            } else if (line.substring(5) == '2') {
                                await switchAirlock(1, false);
                                break;
                            } else if (line.substring(5) == '3') {
                                await switchAirlock(2, false);
                                break;
                            }
                        } else if (line.toLocaleUpperCase().startsWith('CLOSE '))
                            if (line.substring(6) == '1') {
                                await switchAirlock(0, true);
                                break;
                            } else if (line.substring(6) == '2') {
                                await switchAirlock(1, true);
                                break;
                            } else if (line.substring(6) == '3') {
                                await switchAirlock(2, true);
                                break;
                            }
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'SHOWERS':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "CONTROLS";
                        log___("\n");
                        log___("CONTROLS");
                        break;
                    case 'WATER':
                        log___("\n");
                        if (water)
                            log___("WATER TURNED OFF");
                        else
                            log___("WATER TURNED ON");
                        water = !water;
                        await delay(1);
                        await showers();
                        break;
                    case '':
                    case undefined:
                        await showers();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            case 'SYSTEM':
                switch (line.toLocaleUpperCase()) {
                    case 'BACK':
                        currentState = "CONTROLS";
                        log___("\n");
                        log___("CONTROLS");
                        break;
                    case '':
                    case undefined:
                        await system();
                        break;
                    default:
                        logErr("SYNTAX ERROR");
                        await delay(1);
                }
                break;
            default:
                await delay(1);
        }
        printCommands(currentState);
    }
}

const delay = (s: number) => {
    return new Promise(resolve => setTimeout(resolve, s * 1000));
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
    log___('\n');
    log___('FLEET COMMODORE SYSTEMS © 2246 - GUILD LICENSE');
    log___('PROGRAM OPERATION GROUP SOFTWARE (P.O.G.S.)');
    logGre('----------');
    logWar('WARNING - LICENSE EXPIRED');
    logWar('CONTACT SYSTEMS ADMINISTRATOR');
    logGre('----------');
    await delay(1);
    log___('\n');
    log___('PRESS ENTER TO RESUME');
    rl.prompt();
}


const home = async () => {
    log___('\n');
    log___("YPSILON 14 CONTROL TERMINAL")
}

const scedule = async () => {
    log___('\n');
    log___('SCHEDULE');
    log___('\n');
    log___('DOCKING BAY ACTIVITY');
    log___('\n');
    log___('2867-07-02 06:33 - STS BEHOLDER    - RESUPPLY : DOCKING BAY 2 :: DOCK');
    await delay(0.3);
    log___('2867-06-04 08:34 - RSV THE HERACLES   - RESEARCH : DOCKING BAY 1 :: DOCK');
    log___('2867-06-02 12:23 - CTV HORN OV PLENTY - RESUPPLY : DOCKING BAY 2 :: DEPART');
    log___('2867-06-01 16:04 - CTV HORN OV PLENTY - RESUPPLY : DOCKING BAY 2 :: DOCK');
    await delay(0.2);
    log___('2867-05-02 08:32 - MV VASQUEZ XV      - PICKUP   : DOCKING BAY 1 :: DEPART');
    log___('2867-05-01 06:02 - MV VASQUEZ XV      - PICKUP   : DOCKING BAY 1 :: DOCK');
    await delay(0.3);
    log___('2867-04-02 13:02 - CTV HORN OV PLENTY - RESUPPLY : DOCKING BAY 2 :: DEPART');
    log___('2867-04-01 15:54 - CTV HORN OV PLENTY - RESUPPLY : DOCKING BAY 2 :: DOCK');
    await delay(0.4);
    log___('2867-03-02 08:33 - MV VAZQUEZ XV      - PICKUP   : DOCKING BAY 1 :: DEPART');
    log___('2867-03-01 06:04 - MV VAZQUEZ XV      - PICKUP   : DOCKING BAY 1 :: DOCK');
}

const roster = async () => {
    log___('\n');
    log___('ROSTER');
    log___('\n');
    await delay(0.5);
    log___('01. VERHOEVEN, SONYA     :: EXECUTIVE OFFICER');
    log___('02. MIKKELSEN, MICHAEL   :: HEAD MINING ENGINEER');
    log___('03. SINGH, ASHRAF        :: MINING ENGINEER');
    log___('04. KANTARO, KENJI       :: MINING ENGINEER');
    log___('05. DE BEERS, DANA       :: HEAD DRILLER');
    log___('06. HUIZINGA, JEROME     :: ASST. DRILLER');
    log___('07. TOBIN, ROSA          :: LOADER');
    log___('08. OBOWE, MORGAN        :: LOADER');
    log___('09. KENBISHI, RIE        :: PUTTER');
    await delay(0.5);
    logGre('10. VACANT');
}

const statusScr = async () => {
    log___('\n');
    log___('STATUS');
    log___('\n');
    rl.write(`${' '.repeat(margin)}SYSTEMS CHECK `);
    await delay(0.5);
    rl.write('. ');
    await delay(0.5);
    rl.write('. ');
    await delay(0.5);
    rl.write('. ');
    log___('\n');
    await delay(1);
    rl.clearLine();
    logErr('WARNING: AIR FILTERS LAST REPLACED 455 DAYS AGO');
    logWar('255 DAYS PAST RECOMMENDATION');
    log___('\n');
    logErr('WARNING: SHOWER 5 OUT OF ORDER AS OF 1 DAY AGO');
    log___('\n');
    logErr('WARNING: MINESHAFT ELEVATOR LAST MAINTAINED 455 DAYS AGO');
    logWar('(255 DAYS PAST RECOMMENDATION)');
    log___('\n');
    logWar('WARNING: AIRFLOW 82%');
    logWar('(SUBOPTIMAL: REPLACE FILTERS AND CHECK VENTS FOR BLOCKAGES)');
    log___('\n');
    log___('\n');
    logSuc('ALL SYSTEMS WITHIN ACCEPTABLE OPERATING CONDITIONS');
}

const layout = async () => {
    log___('\n');
    log___('GENERATING LAYOUT');
    log___('\n');
    await delay(0.5);
    log___('.');
    await delay(0.5);
    log___('.');
    await delay(0.5);
    log___('.');
    await delay(0.5);
    log___('\n');
    log___('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
    log___('░█ █ ██   █ █ █   █  █  █  █ █ █ ░');
    log___('░█ █ █ █ █  █ █  █ █ ██ █  █ █ █ ░');
    log___('░ █  ██   █ █ █  █ █ █ ██  █ ███ ░');
    log___('░ █  █   █  █ ██  █  █  █  █   █ ░');
    log___('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
    log___('░                                ░');
    log___('░   DOCK 1  DOCK 2               ░');
    log___('░   o       o                    ░');
    log___('░   o       o                    ░');
    log___('░┌──×───────×──┐ ┌─┬┬─┬─┐ ┌─────┐░');
    log___('░│    = ⚷ =    │ │8/│9│0│ │000 °│░');
    log___('░│             │ ├─┤└/┴/┤ │MESS │░');
    log___('░│  WORKSPACE  │ │7/    └─┘     │░');
    log___('░│             └─┴─┘  ┌─┬─┐000º │░');
    log___('░│ ▴▴ ▒▒▒▒▒    ┌─┬─┐  /1│ └─────┘░');
    log___('░│▴▴  ▒   ▒ ▯ ▯│ │6/  │ │ ┌─────┐░');
    log___('░│▴▴  ▒ ↓ ▒ ▯ ▯│ ├─┤  └─┴─┘WASH │░');
    log___('░│▴▴  ▒   ▒ ▯ ▯│ │5/    ┌─┐ROOM │░');
    log___('░│ ▴▴ ▒▒▒▒▒ ▯ ▯│ ├─┤┌/┬/┤ │     │░');
    log___('░│          ▯ ▯│ │4/│3│2│ │ ─── │░');
    log___('░└─────────────┘ └─┴┴─┴─┘ └┴┴┴┴┴┘░');
    log___('░       o↑        QUARTERS       ░');
    log___('░       o↓                       ░');
    log___('░      ┌─┐                       ░');
    log___('░      × │ MINESHAFT             ░');
    log___('░      └─┘                       ░');
    log___('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
    log___('░   LEGEND  ░       ROSTER       ░');
    log___('░           ░                    ░');
    log___('░ × AIRLOCK ░ 1 SONYA   6 MORGAN ░');
    log___('░           ░ 2 ASHRAF  7 RIE    ░');
    log___('░ ⚷ TERMINAL░ 3 DANA    8 ROSA   ░');
    log___('░           ░ 4 JEROME  9 MIKE   ░');
    log___('░ / DOOR    ░ 5 KANTARO 0 N/A    ░');
    log___('░           ░                    ░');
    log___('░ ↓ ELEVATOR░                    ░');
    log___('░           ░░░░░░░░░░░░░░░░░░░░░░');
    log___('░ o SHAFT   ░ DOCK 1   ░ DOCK 2  ░');
    log___('░           ░          ░         ░');
    log___('░ ▯ CUBBY   ░ HERACLES ░ RESUPPLY░');
    log___('░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░');
    log___('\n');
}

const comms = async () => {
    log___('\n');
    log___('COMMS');
    log___('\n');
    rl.write(`${' '.repeat(margin)}SCANNING FOR NEARBY SHIPS `);
    await delay(0.5);
    rl.write('. ');
    await delay(0.5);
    rl.write('. ');
    await delay(0.5);
    rl.write('. ');
    log___('\n');
    await delay(1);
    rl.clearLine();
    log___('[1] HAIL RSV THE HERACLES');
    log___('[2] HAIL STS BEHOLDER');
}

const airlock = async () => {
    log___('\n');
    log___('AIRLOCK');
    log___('\n');
    await delay(0.5);
    log___(`[1] DOCKING BAY 1 [> ${lockedDoors[0] ? 'LOCKED' : '\x1b[1;32mUNLOCKED\x1b[0m'}]`)
    await delay(0.5);
    log___(`[2] DOCKING BAY 2 [> ${lockedDoors[1] ? 'LOCKED' : '\x1b[1;32mUNLOCKED\x1b[0m'}]`)
    await delay(0.5);
    log___(`[3] MINESHAFT [> ${lockedDoors[2] ? 'LOCKED' : '\x1b[1;32mUNLOCKED\x1b[0m'}]`)
}
const showers = async () => {
    log___('\n');
    log___('SHOWERS');
    log___('\n');
    await delay(0.5);
    log___(`WATER [> ${water ? '\x1b[1;32mON\x1b[0m' : 'OFF'}]`)
    log___('\n');
    await delay(0.5);
    log___("SHOWER 1 [> ON]")
    await delay(0.2);
    log___("SHOWER 2 [> ON]")
    await delay(0.3);
    log___("SHOWER 3 [> ON]")
    await delay(0.4);
    log___("SHOWER 4 [> ON]")
    await delay(1.5);
    log___("SHOWER 5 [> \x1b[31mOUT OF ORDER\x1b[0m]")
    await delay(0.3);
    log___("SHOWER 6 [> ON]")
}
const system = async () => {
    
}
const switchAirlock = async (i: number, close: boolean) => {
    log___('\n');
    if (close)
        log___("INITIALIZING LOCK.  NOTE - DOOR MUST BE MANUALLY CLOSED FIRST.")
    else
        log___("UNLOCKING.  NOTE - DOOR MUST BE MANUALLY OPENED AFTER PROCEDURE.")
    await delay(0.5);
    log___('. ');
    await delay(0.5);
    log___('. ');
    await delay(0.5);
    log___('. ');
    log___('\n');
    await delay(1);
    if (lockedDoors[i] == close) {
        if (close)
            logWar("ALREADY LOCKED.")
        else
            logWar("ALREADY OPENED.")
    } else {
        if (close)
            logSuc("CLOSED.")
        else
            logSuc("OPENED.")
        lockedDoors[i] = !lockedDoors[i];
    }
    await airlock();
}

const printCommands = async (state: State) => {
    log___('\n');
    await delay(1);
    stateCommands.get(state)?.forEach(element => {
        log___(` > ${element.toLocaleUpperCase()}`);
    });
    // log___('\n');
    rl.prompt();
}

runMain();



