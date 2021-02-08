declare var require: any
declare var process: any
const readline = require('readline');

export class State {
    constructor(private name: string, private run: () => void, private intro?: boolean) {

    }
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
        prompt: '>>>'
    });
    getCommand(callback): void {
        this.rl.question('>>>', (answer) => {
            callback(answer);
            this.rl.close();
        });
    };
    runState(CurrentState): void {
        this.run();
        if(!this.intro)
            this.rl.prompt();
    };
}

export interface CurrentState {
    state: State;
    cardPresent: boolean;
    airlocksOpened: boolean[];
    washerTurned: boolean[];
}