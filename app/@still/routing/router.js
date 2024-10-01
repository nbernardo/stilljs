class Router {

    #data = {};
    static instance = null;
    static appPlaceholder = $stillconst.APP_PLACEHOLDER;

    /** @returns { Router } */
    static getInstance(){

        if(!Router.instance)
            Router.instance = new Router();
        return Router.instance;

    }

    static data(cmpName){
        const data = Router.getInstance().#data[cmpName];
        delete Router.getInstance().#data[cmpName];
        return data;
    }

    /**
     *
     * @param {*} cmp 
     * @param {{data, path}} param1 
     */
    static goto(cmp, { data } = { data: {} }){

        if(cmp === 'init'){
            ComponentSetup.get().loadComponent();
        }

        if(cmp === 'exit'){
            console.log(`Calling unload()`);
            AppTemplate.get().unloadApp();
            console.log(`Called unload()`);    
            ComponentSetup.get().loadComponent();
        }

        //Move to when evetything it's processed successfully
        if(Object.keys(data).length)
            Router.getInstance().#data[cmp] = data;

        const routeInstance = $stillGetRouteMap()
        const route = routeInstance.route[cmp];

        const cmpRegistror = $still.context.componentRegistror.componentList;
        const isHomeCmp = ComponentSetup.get().entryComponentName == cmp;
        if(isHomeCmp){

            if(cmp in cmpRegistror){

                $still.context.currentView = cmpRegistror[cmp].instance;
                Router.getAndDisplayPage($still.context.currentView, true, isHomeCmp);

            }else{

                /**
                 * TO DO: Repeating code from both Router class and Components Class, 
                 * should be modularized from
                 */
                const appTemplate = AppTemplate.get().template;
                $still.context.currentView = eval(`new ${cmp}()`);
                let template = (new Components()).getCurrentCmpTemplate($still.context.currentView);
                template = appTemplate.replace(
                    $stillconst.STILL_COMPONENT,`<div id="${Router.appPlaceholder}">${template}</div>`
                );
                document.getElementById('stillUiPlaceholder').innerHTML = template;

            }

        }else{

            loadComponentFromPath(route, cmp)
            .then(({ imported, isRoutable }) => {
                if(!imported) {
                    //delete $still.context.componentRegistror.componentList[cmp];

                    /**
                     * the bellow line clears previous component from memory
                     * @type { ViewComponent }
                     */
                    const newInstance = eval(`new ${cmp}()`);
                    newInstance.isRoutable = true;
                    Router.parseComponent(newInstance);
                    newInstance.setRoutableCmp(true);
                    if(isHomeCmp)
                        newInstance.setUUID($stillconst.TOP_LEVEL_CMP);

                    $still.context.currentView = newInstance;

                }else{
                    if(!isRoutable){
                        $still.context.currentView = $still.component.list[cmp];
                    }else{
                        $still.context.currentView = cmpRegistror[cmp].instance;
                    }

                    if(!$still.context.currentView.stillParsedState){
                        $still.context.currentView = (new Components).getNewParsedComponent(
                            $still.context.currentView
                        );
                    }
                }
                Router.getAndDisplayPage($still.context.currentView, imported);
            });
        }

    }

    /**
     * 1. Add new method for dynamic instantiation
     * 2. Add getter and setters for the components fields
     * @param { ViewComponent } cmp
     */
    static parseComponent(cmp){
        setTimeout(() => {
            (new Components).getNewParsedComponent(cmp);
        });
    }

    /**
     * the bellow line clears previous component from memory
     * @param { ViewComponent } componentInstance
     */
    static getAndDisplayPage(componentInstance, isReRender = false, isHome = false){

        const appCntrId = Router.appPlaceholder;
        const appPlaceholder = document.getElementById(appCntrId);
        const cmpId = componentInstance.getUUID();
        
        if(isReRender){
            Components
            .unloadLoadedComponent()
            .then(async () => {
                
                if(componentInstance.subImported){

                    const pageContent = `
                        <output id="${cmpId}-check" style="display:contents;">
                            ${componentInstance.getTemplate()}
                        </output>`;
                    appPlaceholder.insertAdjacentHTML('afterbegin', pageContent);
                    componentInstance.subImported = false;
                    setTimeout(() => {
                        componentInstance.parseOnChange();
                    },500);
                    await componentInstance.onRender();
                    componentInstance.stAfterInit();

                }else{
                    await Components.reloadedComponent(componentInstance, isHome);
                }
            });
            
        }else{
            Components
            .unloadLoadedComponent()
            .then(async () => {
                const pageContent = `
                    <output id="${cmpId}-check" style="display:contents;">
                        ${componentInstance.getTemplate()}
                    </output>`;
                appPlaceholder.insertAdjacentHTML('afterbegin', pageContent);
                setTimeout(() => {
                    componentInstance.parseOnChange();
                },500);
                await componentInstance.onRender();
                setTimeout(() => {
                    componentInstance.$stillLoadCounter = componentInstance.$stillLoadCounter + 1;
                },100);

                Router.callCmpAfterInit(`${cmpId}-check`);
            });
        }
    }

    static callCmpAfterInit(cmpId){

        const loadTImer = setTimeout(() => {
                    
            if(document.getElementById(cmpId)){
                $still.context.currentView.stAfterInit();
                clearTimeout(loadTImer);
            }

        },200);

    }
}