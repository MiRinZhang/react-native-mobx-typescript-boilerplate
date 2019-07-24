/**
 * @format
 */
import HomeModel from 'models/home';

class RootModel {
    homeStore: object = {};

    constructor() {
        this.homeStore = new HomeModel(this);
    }
}

export default RootModel;
export const rootModel = new RootModel();
