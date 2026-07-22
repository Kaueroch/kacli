import React from 'react';
import { ChevronRight, Check } from 'lucide-react';

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        
        {/* GREEN GLOW EFFECTS */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[300px] bg-primary/10 blur-[120px] rounded-full pointer-events-none opacity-80" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[50%] h-[150px] bg-primary/10 blur-[100px] rounded-full pointer-events-none opacity-80" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center flex flex-col items-center">
          
          <div className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-white/60 mb-6 shadow-sm animate-fade-up">
            O Segundo Cérebro do Desenvolvedor
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tighter mb-6 max-w-4xl text-white leading-tight animate-fade-up delay-100">
            Otimize seu Aprendizado com o Segundo Cérebro do Desenvolvedor
          </h1>
          
          <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-up delay-200">
            Um ecossistema focado na jornada do desenvolvedor. Centralize suas ferramentas de leitura, acompanhe preços de materiais técnicos e construa seu portfólio.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-12 animate-fade-up delay-300">
            <a href="#waitlist" className="inline-flex items-center justify-center rounded-full text-base font-bold transition-all bg-primary text-primary-foreground hover:bg-primary/90 h-12 px-8 w-full sm:w-auto shadow-[0_0_20px_-5px_rgba(163,255,18,0.3)] hover:scale-[1.02]">
              Começar Agora
              <ChevronRight className="ml-2 h-4 w-4" />
            </a>
            <a href="#features" className="inline-flex items-center justify-center rounded-full text-base font-semibold transition-all border border-border bg-transparent hover:bg-card text-white h-12 px-8 w-full sm:w-auto">
              Ver Plataforma
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-xs font-medium text-white/40 animate-fade-up delay-300">
            <div className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Para a Comunidade</div>
            <div className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> 100% Grátis</div>
            <div className="flex items-center"><Check className="h-4 w-4 text-primary mr-2" /> Open Knowledge</div>
          </div>
        </div>
      </section>
    </>
  );
}
