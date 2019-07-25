import { observable, action } from 'mobx';

export interface IHomeStore {
    message: string;
}

export default class HomeModel implements IHomeStore {
    rootStore: object = {};

    constructor(rootStore: object) {
        this.rootStore = rootStore;
    }

    @observable message: string = '';

    @action
    updateMessage(message: string): void {
        this.message = message;
    }
}
