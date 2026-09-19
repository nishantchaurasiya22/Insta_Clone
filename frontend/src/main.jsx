import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./styles/global.scss"
import { AuthProvider } from './features/auth/auth.context.jsx'

createRoot(document.getElementById('root')).render(
<AuthProvider>
    <App/>
</AuthProvider>
)
