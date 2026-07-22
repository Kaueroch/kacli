import React from 'react';
import { Terminal, Menu } from 'lucide-react';

export default function Header() {
  return (
    <>
      {/* HEADER */}
      <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 mt-4 animate-fade-up">
        <div className="container mx-auto max-w-5xl">
          <div className="flex h-12 items-center justify-center rounded-full border border-border/50 bg-background/80 backdrop-blur-xl px-5 shadow-sm relative">
            
            {/* CENTERED LOGO IN NAV BAR */}
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 border border-primary/20 p-1 rounded-full text-primary">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold text-base tracking-tight text-white">KaWeb</span>
            </div>
            
            {/* MOBILE MENU ON THE RIGHT */}
            <button className="md:hidden absolute right-5 p-1.5 text-white/50 hover:text-primary transition-all">
              <Menu className="h-5 w-5" />
            </button>

          </div>
        </div>
      </header>
    </>
  );
}
