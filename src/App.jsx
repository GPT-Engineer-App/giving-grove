import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { navItems } from "./nav-items";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">
            <Routes>
              {navItems.map(({ to, page }) => (
                <Route key={to} path={to} element={page} />
              ))}
            </Routes>
          </main>
          <nav className="bg-white border-t border-gray-200 fixed bottom-0 left-0 right-0">
            <div className="max-w-screen-xl mx-auto px-4">
              <div className="flex justify-around">
                {navItems.map(({ to, icon, title }) => (
                  <Link key={to} to={to} className="flex flex-col items-center py-2">
                    {icon}
                    <span className="text-xs mt-1">{title}</span>
                  </Link>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
