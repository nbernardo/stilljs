import { stillRoutesMap } from "../../../route.map.js";

export class ComponentNotFoundException extends Error {
    name = 'ComponentNotFoundException';
    constructor(cmpName) {
        super();
        this.message = JSON.stringify({
            message: `Component with name ${cmpName} no found`,
            component: cmpName
        });
    }
}



export class ComponentRegistror {

    componentList = {};
    static registror = null;

    static get() {

        if (ComponentRegistror.registror == null) {
            ComponentRegistror.registror = new ComponentRegistror();
        }
        return ComponentRegistror.registror;

    }

    /**
     * 
     * @param {SettingType} component 
     */
    export({ componentName: name, path, instance }) {
        if (!(name in this.componentList))
            this.componentList[instance.componentName] = { path, instance };

    }

    /**
     * 
     * @param {ViewComponent} cmp 
     */
    expose(cmp) {
        return new Components().getParsedComponent(cmp);
    }

    getComponent(name) {
        if (!(name in this.componentList)) {
            throw new ComponentNotFoundException(name);
        }
        return this.componentList[name].instance;
    }


    /**
     * @param { ViewComponent } cmp
     */
    static previousLoaded(cmp) {
        let cmpName;
        if (cmp.getRoutableCmp())
            cmpName = cmp.getName();
        else
            cmpName = cmp.getInstanceName();

        return cmpName in $still.context.componentRegistror.componentList;
    }

    static clearRegistror(cmp) {
        $still.context.componentRegistror.componentList = {};
    }

    static add(name, instance) {
        $still.context.componentRegistror.componentList[name] = { instance }
    }

    static getFromRef(name) {
        const source = $still.context.componentRegistror.componentList;
        if (name in source) return source[name].instance;
        else return null
    }
}

export const $still = {
    context: {
        componentRegistror: ComponentRegistror.get(),
        componentMap: stillRoutesMap.viewRoutes,
        currentView: null,
    },
    component: {
        /** @param { ViewComponent } cmp */
        expose: (cmp) => {
            return ComponentRegistror.get().expose(cmp)
        },
        list: window,
        get: (cmpName) => window[cmpName]
    },
    view: {
        /** @type { ViewComponent } */
        get: (viewComponentName) => {
            return ComponentRegistror.get().getComponent(viewComponentName);
        }
    },
    HTTPClient: new StillHTTPClient(),

}

window.$still = $still;
window.ComponentRegistror = ComponentRegistror;
