import { StillAppMixin } from "./@still/component/super/AppMixin.js";
import { Router } from "./@still/routing/router.js";
import { Components } from "./@still/setup/components.js";
import { AppTemplate } from "./app-template.js";
import { HomeComponent } from "./app/home/HomeComponent.js";

export class StillAppSetup extends StillAppMixin(Components) {


    constructor() {
        super();
        this.setHomeComponent(HomeComponent);
        //window.location.assign('/#')
    }

    async init() {

        const pathAddress = await Router.getComponentFromPath();
        if (pathAddress)
            return new AppTemplate(pathAddress);
        else
            return new AppTemplate();
    }

}
