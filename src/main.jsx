import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "@/components/ui/provider"
import { BrowserRouter as Router } from 'react-router';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './index.css'
import App from './App.jsx'

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false, // default: true
      },
    },
  });

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider >
      <Router>
        <App />
      </Router>
    </Provider>
    </QueryClientProvider>
  </StrictMode>
)
