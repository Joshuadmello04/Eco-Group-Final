import { Toaster } from './components/ui/toaster'
import { Toaster as Sonner } from './components/ui/sonner'
import { TooltipProvider } from './components/ui/tooltip'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import About from './pages/About'
import Services from './pages/Services'
import Projects from './pages/Projects'
import Clients from './pages/Clients'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import AdminTestimonials from './pages/AdminTestimonials'
import AdminContactMessages from './pages/AdminContactMessages'
import ProtectedRoute from './routes/ProtectedRoute'
import AdminLogin from './pages/AdminLogin'
import AdminDashboard from "./pages/AdminDashboard"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/clients' element={<Clients />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="/admin/login" element={<AdminLogin />} />

<Route
  path="/admin"
  element={
    <ProtectedRoute>
      <AdminDashboard />
    </ProtectedRoute>
    }
  />

<Route
  path="/admin/testimonials"
  element={
    <ProtectedRoute>
      <AdminTestimonials />
    </ProtectedRoute>
  }
/>

<Route
  path="/admin/contact"
  element={
    <ProtectedRoute>
      <AdminContactMessages />
    </ProtectedRoute>
  }
/>

          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
