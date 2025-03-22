
        /**
         * Don't change the constante name as it'll impact on the component routing
         */
        
export const stillRoutesMap = {
    viewRoutes: {
        regular: {
            BasicConditionalView: {
                path: "app/components/rendering-showing",
                url: "/rendering-showing/BasicConditionalView"
            },
            BasicForm: {
                path: "app/components/form-demo",
                url: "/form-demo/BasicForm"
            },
            CounterComponent: {
                path: "app/components/counter",
                url: "/counter/CounterComponent"
            },
            HomeWithEvent: {
                path: "app/components",
                url: "/HomeWithEvent"
            },
            HomeComponent: {
                path: "app/home",
                url: "/HomeComponent"
            },
            FormatedDataTable: {
                path: "app/components/styling",
                url: "/stylin/formated-data-table"
            },
            UserForm: {
                path: "app/components/user",
                url: "/user/user-form"
            },
            UserGrid: {
                path: "app/components/user",
                url: "/user/user-grid"
            },
            EntryMenu: {
                path: "app/components/routing",
                url: "/routin/entry-menu"
            },
            UserRegistration: {
                path: "app/components/routing",
                url: "/admin/user-registration"
            },
            LoginComponent: {
                path: "app/components/dom-manipulation",
                url: "/dom-manipulatio/login"
            }
        },
        lazyInitial: {}
    }
}


export function $stillGetRouteMap() {

	return {		route: {
			...stillRoutesMap.viewRoutes.regular,
			...stillRoutesMap.viewRoutes.lazyInitial
		},
	}
}
