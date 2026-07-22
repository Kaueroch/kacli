import React from 'react';

export default function Services() {
  return (
    <>
      {/* SERVICES / PLANS */}
      <section id="services" className="py-16 sm:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-up">
            <div className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Acesso
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Feito Para Todos</h2>
            <p className="text-white/50 text-base">
              Escolha a forma que você deseja interagir com o ecossistema. 100% livre.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            
            <div className="rounded-3xl border border-border bg-card p-8 relative hover:border-white/20 transition-all animate-fade-up delay-100">
              <h3 className="text-xl font-bold mb-3 text-white">Para Leitores</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Baixe PDFs, acompanhe os preços dos seus livros favoritos no Radar Dev e organize todo o seu acervo de leitura em um dashboard limpo.
              </p>
            </div>

            <div className="rounded-3xl border border-primary/40 bg-card p-8 relative shadow-[0_0_30px_-10px_rgba(163,255,18,0.1)] hover:shadow-[0_0_40px_-5px_rgba(163,255,18,0.2)] transition-all animate-fade-up delay-200">
              <span className="absolute -top-3 -right-3 bg-primary text-primary-foreground text-xs font-black px-3 py-1 rounded-full shadow-[0_0_15px_rgba(163,255,18,0.4)]">
                CRIADORES
              </span>
              <h3 className="text-xl font-bold mb-3 text-white">Escritores Tech</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                Publique seus artigos com uma experiência editorial imersiva. Crie seu portfólio de conhecimento, interaja e envie newsletters.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
