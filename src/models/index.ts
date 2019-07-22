import { observable, action } from 'mobx';

export default class RootStore {
    @observable
    data = {
        name: 'zhangyabing',
    };

    @action.bound
    setName(name: string): void {
        this.data.name = name;
    }
}
