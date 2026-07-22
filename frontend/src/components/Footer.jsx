import React from 'react';
import { Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <>
      {/* FOOTER */}
      <footer id="vision" className="border-t border-border bg-card pt-16 pb-10 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70%] h-32 bg-primary/5 blur-[80px] pointer-events-none" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto mb-16 animate-fade-up">
             <h3 className="text-2xl font-black mb-4 text-white">
              Para a comunidade. 100% Gratuito.
            </h3>
            <p className="text-white/50 text-sm leading-relaxed">
              O KaWeb nasceu da crença de que todo desenvolvedor precisa de um espaço para curar, refinar e compartilhar seu aprendizado livremente.
            </p>
          </div>
          
          <div className="border-t border-border pt-6 mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
            <div className="flex items-center gap-2">
              <div className="bg-primary/10 border border-primary/20 p-1 rounded-md text-primary">
                <Terminal className="h-4 w-4" />
              </div>
              <span className="font-bold text-white text-sm">KaWeb</span>
            </div>
            <p>© {new Date().getFullYear()} KaWeb. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
