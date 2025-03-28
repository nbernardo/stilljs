let filePathAltered = false;
export async function getRoutesFile(defaultFile) {
    try {

        if (STILL_HOME) {
            const routesFilePath = `${location.origin}/${STILL_HOME}route.map.js`;
            const _module = await import(routesFilePath);
            if (!filePathAltered) {
                filePathAltered = true;
                console.info(`Components will be routed from ${routesFilePath}`);
            }
            return _module['stillRoutesMap'];
        }

    } catch (error) { }

    return defaultFile;
}

export function getRouter(defaultRouter) {
    try {
        if (Router)
            return Router;
    } catch (error) {
        return defaultRouter;
    }
}