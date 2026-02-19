"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

const BARE_ROUTES = ["/lead", "/studio"];

export default function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isBare = BARE_ROUTES.some((route) => pathname.startsWith(route));

  if (isBare) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen flex justify-center bg-gray-100">
        <div className="w-full max-w-[1440px] bg-white">
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
