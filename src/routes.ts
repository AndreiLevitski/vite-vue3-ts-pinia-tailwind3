export const ROUTES = {
	ROOT: '/',
	PAGE_ONE: '/page-one',
	PAGE_TWO: '/page-two',
	PAGE_FORM: '/page-form'
}

export const routes = [
	{ path: ROUTES.ROOT, component: () => import('./pages/MainPage.vue') },
	{ path: ROUTES.PAGE_ONE, component: () => import('./pages/PageOne/PageOne.vue') },
	{ path: ROUTES.PAGE_TWO, component: () => import('./pages/PageTwo/PageTwo.vue') },
	{ path: ROUTES.PAGE_FORM, component: () => import('./pages/PageWithForm/PageWithForm.vue') }
]
