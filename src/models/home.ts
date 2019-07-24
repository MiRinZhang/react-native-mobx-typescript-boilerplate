import { observable, action } from 'mobx';

export default class HomeModel {
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
