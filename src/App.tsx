import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from "./pages/Navbar"
import Index from './pages/Index';
import Auth from './pages/Auth';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


function App() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="mx-6">
          <Navbar />
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/" element={<Index />} />
            {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App;
