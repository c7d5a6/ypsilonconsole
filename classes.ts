export class State {

}

export interface CurrentState {
    state: State;
    cardPresent: boolean;
    airlocksOpened: boolean[];
    washerTurned: boolean[];
}