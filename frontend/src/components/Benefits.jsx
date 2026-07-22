import React from 'react';
import { BookOpen, Activity, PenTool } from 'lucide-react';

export default function Benefits() {
  return (
    <>
      {/* BENEFITS SECTION */}
      <section id="benefits" className="py-16 sm:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div className="lg:sticky lg:top-24 h-fit animate-fade-up">
              <div className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
                Benefícios
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
                O Que Trazemos Para Você?
              </h2>
              <p className="text-base text-white/50 mb-6 leading-relaxed">
                As ferramentas essenciais que você precisa para crescer profissionalmente. Adicionamos valor à sua jornada simplificando o acompanhamento de estudos.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              
              <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden group hover:border-primary/40 transition-all animate-fade-up delay-100">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:border-primary/50 transition-all">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-all">01</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Acervo Tech Pessoal</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Gerencie seus PDFs e busque metadados com Web Scraping integrado de repositórios. Mantenha sua estante virtual sempre atualizada.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden group hover:border-primary/40 transition-all animate-fade-up delay-200">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:border-primary/50 transition-all">
                    <Activity className="h-5 w-5" />
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-all">02</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Radar Dev (Monitoramento)</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Acompanhe os preços de livros e cursos em tempo real, garantindo que você compre no momento perfeito para economizar.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-card p-6 relative overflow-hidden group hover:border-primary/40 transition-all animate-fade-up delay-300">
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors" />
                <div className="flex justify-between items-start mb-8 relative z-10">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:border-primary/50 transition-all">
                    <PenTool className="h-5 w-5" />
                  </div>
                  <span className="text-5xl font-black text-white/5 group-hover:text-primary/10 transition-all">03</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">Diário e Newsletters</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  Publique seus aprendizados na comunidade. Uma experiência de escrita focada no conteúdo para disseminar seu conhecimento.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>
    </>
  );
}
