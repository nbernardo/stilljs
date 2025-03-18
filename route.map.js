/**
 * Don't change the constante name as it'll impact on the component routing
 */
export const stillRoutesMap = {

    viewRoutes: {
        regular: {
            HomeWithEvent: 'app/components',
            HomeComponent: 'app/home',
        },
        lazyInitial: {}
    },
}


export function $stillGetRouteMap() {

    return {
        route: {
            ...stillRoutesMap.viewRoutes.regular,
            ...stillRoutesMap.viewRoutes.lazyInitial
        },
    }
}