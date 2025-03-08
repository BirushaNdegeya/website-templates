import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router";
import { ThemeProvider } from "@/providers/theme-provider";

export default function Layout() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="bg-background text-foreground">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ThemeProvider>
  );
}