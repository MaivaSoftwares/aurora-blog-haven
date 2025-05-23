import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/context/ThemeContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Post from "./pages/Post";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import AdminPostEditor from "./pages/AdminPostEditor";
import { RequireAuth } from "./components/RequireAuth";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/post/:id" element={<Post />} />
                <Route path="/login" element={<AdminLogin />} />
                <Route path="/admin/post/new" element={<RequireAuth><AdminPostEditor /></RequireAuth>} />
                <Route path="/admin/post/:id/edit" element={<RequireAuth><AdminPostEditor /></RequireAuth>} />
                <Route path="/admin" element={<RequireAuth><Admin /></RequireAuth>} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
