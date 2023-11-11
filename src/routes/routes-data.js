import Auth from '../screens/auth/Auth'
import Home from '../screens/home/Home'

import NotFound from '../screens/not-found/NotFound'

export const routes = [
	{
		path: '/',
		component: Home,
		isAuth: true
	},
	{
		path: '/auth',
		component: Auth,
		isAuth: false
	}
	//   { path: "/", component: NotFound, isAuth: true },
]
