import React from 'react'
import ReactDOM from 'react-dom/client'

import './assets/styles/index.scss'
import Router from './routes/Routes.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AuthProviders, { AuthContext } from './provoders/AuthProviders.jsx'

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false
		}
	}
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProviders>
		<QueryClientProvider client={queryClient}>
			<Router />
		</QueryClientProvider>
	</AuthProviders>
)
