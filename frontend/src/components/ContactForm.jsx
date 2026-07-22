import React from 'react';

export default function ContactForm() {
  return (
    <>
      {/* CONTACT FORM */}
      <section id="waitlist" className="py-16 sm:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl relative z-10 animate-fade-up">
          <div className="rounded-[2rem] border border-border bg-card p-8 md:p-10 relative overflow-hidden">
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[2px] bg-primary/40 blur-[3px] rounded-full" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[30%] h-px bg-primary" />

            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Entrar em Contato</h2>
              <p className="text-white/50 text-sm">Pronto para transformar sua forma de consumir e produzir tecnologia?</p>
            </div>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Nome</label>
                  <input type="text" placeholder="Seu nome" className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-sm ring-offset-black placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-[#111] transition-all text-white" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Sobrenome</label>
                  <input type="text" placeholder="Seu sobrenome" className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-sm ring-offset-black placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-[#111] transition-all text-white" />
                </div>
              </div>
              
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Email</label>
                <input type="email" placeholder="contact@seuemail.com" className="flex h-12 w-full rounded-lg border border-border bg-background px-4 text-sm ring-offset-black placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-[#111] transition-all text-white" />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-white/50 uppercase tracking-wider">Mensagem</label>
                <textarea placeholder="Como podemos ajudar?" className="flex min-h-[120px] w-full rounded-lg border border-border bg-background px-4 py-3 text-sm ring-offset-black placeholder:text-white/20 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary focus-visible:bg-[#111] resize-none transition-all text-white"></textarea>
              </div>

              <button className="w-full h-12 mt-2 rounded-lg bg-primary text-primary-foreground font-bold text-base hover:bg-primary/90 transition-all shadow-[0_0_15px_-5px_rgba(163,255,18,0.4)]">
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
