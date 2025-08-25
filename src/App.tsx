import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./components/LanguageProvider";
import { CartProvider } from "@/components/CartContext";
import Index, { experiences } from "./pages/Index";
import ExperienceDetail from "./pages/ExperienceDetail";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/Login";
import SignupPage from "./pages/Signup";
import CategoryResults from "./pages/CategoryResults";
import OnlineExperiences from "./pages/OnlineExperiences";
import Explore from "./pages/Explore";
import BecomeCurator from "./pages/BecomeCurator";
import Blog from "./pages/Blog";
import UnTripPlus from "./pages/UnTripPlus";

const queryClient = new QueryClient();


const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/signup" element={<SignupPage />} />
              <Route path="/category/:category" element={<CategoryResults />} />
              <Route path="/online-experiences" element={<OnlineExperiences />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/become-curator" element={<BecomeCurator />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/untrip-plus" element={<UnTripPlus />} />
              <Route path="/experience/:id" element={<ExperienceDetail experiences={experiences} />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
