import React from 'react';
import { Search, Activity, BookOpen, PenTool, BellRing, Cloud } from 'lucide-react';

export default function Features() {
  return (
    <>
      {/* FEATURES SECTION (Grid) */}
      <section id="features" className="py-16 sm:py-24 relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-5xl">
          <div className="text-center mb-16 max-w-2xl mx-auto animate-fade-up">
            <div className="text-primary font-bold tracking-widest uppercase text-xs mb-3">
              Funcionalidades
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Tudo Que Você Precisa</h2>
            <p className="text-white/50 text-base">
              Nossa plataforma fornece todas as ferramentas necessárias para centralizar seus estudos e potencializar a comunidade técnica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group animate-fade-up delay-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Busca Automatizada</h3>
                  <p className="text-white/50 text-sm">Encontre obras técnicas e importe capas e autores automaticamente.</p>
                </div>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-3">
                  <Search className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group animate-fade-up delay-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Histórico de Preços</h3>
                  <p className="text-white/50 text-sm">Acompanhe a variação de valores. Descubra o momento certo de investir.</p>
                </div>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-3">
                  <Activity className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group animate-fade-up delay-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Gestão de Leituras</h3>
                  <p className="text-white/50 text-sm">Organize seu acervo visualmente ("Lendo", "Concluído") de maneira simples.</p>
                </div>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-3">
                  <BookOpen className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group animate-fade-up delay-100">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Criação de Artigos</h3>
                  <p className="text-white/50 text-sm">Escreva e publique suas reflexões, criando um portfólio sólido do seu conhecimento.</p>
                </div>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-3">
                  <PenTool className="h-4 w-4" />
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group animate-fade-up delay-200">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Disparo de Newsletters</h3>
                  <p className="text-white/50 text-sm">Crie conexões com sua audiência configurando o envio de e-mails semanais.</p>
                </div>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-3">
                  <BellRing className="h-4 w-4" />
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all group animate-fade-up delay-300">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-lg font-bold mb-2 text-white">Comunidade e Interação</h3>
                  <p className="text-white/50 text-sm">Acompanhe autores, comente em artigos e faça parte de uma rede segmentada.</p>
                </div>
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 border border-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all ml-3">
                  <Cloud className="h-4 w-4" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
