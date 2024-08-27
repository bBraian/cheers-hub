import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Toaster } from "@/components/ui/sonner"

import { ThemeProvider } from './components/theme/theme-provider'
import { AppProvider } from './context/AppContext'
import { AuthProvider } from './context/AuthContext'
import { Router } from './Router'
import { BrowserRouter } from "react-router-dom"
import { TooltipProvider } from './components/ui/tooltip'

export function App() {
  return (
    <HelmetProvider>
      <AuthProvider>
        <AppProvider>
          <TooltipProvider>
            <BrowserRouter>
              <ThemeProvider storageKey="cheershub-theme" defaultTheme="dark">
                <Helmet titleTemplate="%s | Cheers Hub" />
                <Toaster richColors />
                <Router />
              </ThemeProvider>
            </BrowserRouter>

          </TooltipProvider>
        </AppProvider>
      </AuthProvider>
    </HelmetProvider>
  )
}
