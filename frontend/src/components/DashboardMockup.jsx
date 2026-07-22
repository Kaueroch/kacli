import React from 'react';
import { Search, BellRing, BookOpen, Activity, PenTool, Cloud } from 'lucide-react';

export default function DashboardMockup() {
  return (
    <>
      {/* DASHBOARD MOCKUP */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-10 mb-24 animate-fade-up delay-300">
        <div className="relative mx-auto max-w-5xl">
          
          <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-[2rem] pointer-events-none opacity-40" />
          
          <div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden ring-1 ring-white/5">
            <div className="flex flex-col relative" style={{ minHeight: '450px' }}>
              
              {/* Window Header */}
              <div className="h-12 border-b border-white/5 flex items-center px-4 justify-between bg-[#0a0a0a]">
                 <div className="flex items-center gap-2">
                   <div className="h-3 w-3 rounded-full bg-white/20"></div>
                   <div className="h-3 w-3 rounded-full bg-white/20"></div>
                   <div className="h-3 w-3 rounded-full bg-white/20"></div>
                 </div>
                 <div className="h-8 w-72 bg-white/5 border border-white/5 rounded-md flex items-center px-3">
                   <Search className="h-3.5 w-3.5 text-white/40" />
                   <span className="text-xs font-medium text-white/30 ml-2">Buscar painel...</span>
                 </div>
                 <div className="flex items-center gap-4">
                   <BellRing className="h-4 w-4 text-white/40 hover:text-white cursor-pointer transition-colors" />
                   <div className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center">
                     <span className="text-[11px] text-white font-medium">K</span>
                   </div>
                 </div>
              </div>

              <div className="flex flex-1">
                {/* Sidebar */}
                <div className="w-56 border-r border-white/5 bg-[#050505] p-4 hidden md:flex flex-col gap-1">
                  <div className="text-[10px] font-semibold text-white/30 uppercase tracking-widest mb-3 mt-2 px-3">Menu Principal</div>
                  
                  <div className="flex items-center gap-3 bg-white/5 text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer">
                    <BookOpen className="h-4 w-4 text-white/50" /> Acervo Tech
                  </div>
                  <div className="flex items-center gap-3 text-white/50 hover:bg-white/5 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">
                    <Activity className="h-4 w-4" /> Radar de Preços
                  </div>
                  <div className="flex items-center gap-3 text-white/50 hover:bg-white/5 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">
                    <PenTool className="h-4 w-4" /> Meus Artigos
                  </div>
                  <div className="flex items-center gap-3 text-white/50 hover:bg-white/5 hover:text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-colors">
                    <Cloud className="h-4 w-4" /> Comunidade
                  </div>
                </div>

                {/* Main View */}
                <div className="flex-1 p-8 flex flex-col gap-6 bg-[#0a0a0a]">
                  
                  {/* Greeting */}
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-1">Visão Geral</h3>
                      <p className="text-sm text-white/40">Seu resumo de estudos e alertas de hoje.</p>
                    </div>
                    <button className="bg-white text-black px-4 py-2 rounded-md text-sm font-medium hover:bg-white/90 transition-colors flex items-center gap-2">
                      <BookOpen className="h-4 w-4" /> Adicionar Livro
                    </button>
                  </div>

                  {/* Top Cards Row */}
                  <div className="grid grid-cols-2 gap-5">
                    
                    {/* Active Reading Card */}
                    <div className="bg-[#111] border border-white/5 rounded-xl p-5 flex flex-col justify-between hover:bg-[#141414] transition-colors cursor-pointer relative">
                       <div className="flex items-center justify-between mb-5">
                         <span className="text-[11px] font-medium text-white/40 uppercase tracking-wider">Lendo Agora</span>
                         <span className="text-xs font-semibold text-white bg-white/10 px-2 py-0.5 rounded">64%</span>
                       </div>
                       <div className="flex gap-4 items-center">
                         <div className="w-12 h-16 bg-[#1a1a1a] rounded border border-white/5 flex items-center justify-center shrink-0">
                            <BookOpen className="h-5 w-5 text-white/20" />
                         </div>
                         <div className="flex flex-col">
                           <span className="text-sm font-medium text-white">Clean Architecture</span>
                           <span className="text-xs text-white/40 mt-1">Capítulo 8: O Princípio OCP</span>
                         </div>
                       </div>
                       <div className="w-full h-1 bg-white/5 rounded-full mt-6 overflow-hidden">
                         <div className="h-full bg-primary w-[64%] rounded-full"></div>
                       </div>
                    </div>

                    {/* Price Radar Card */}
                    <div className="bg-[#111] border border-white/5 rounded-xl p-5 flex flex-col justify-between hover:bg-[#141414] transition-colors cursor-pointer relative overflow-hidden">
                       <div className="flex items-center justify-between mb-4 relative z-10">
                         <span className="text-[11px] font-medium text-white/40 uppercase tracking-wider">Alerta de Preço</span>
                         <div className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-medium border border-primary/20">
                           -32% OFF
                         </div>
                       </div>
                       <div className="flex gap-3 relative z-10">
                         <div className="flex flex-col">
                           <span className="text-sm font-medium text-white">Data-Intensive Applications</span>
                           <div className="flex items-center gap-2 mt-2">
                             <span className="text-2xl font-semibold text-white">R$ 145</span>
                             <span className="text-sm text-white/30 line-through">R$ 215</span>
                           </div>
                         </div>
                       </div>
                    </div>

                  </div>

                  {/* Bottom List */}
                  <div className="flex-1 bg-[#111] border border-white/5 rounded-xl p-2 hover:bg-[#121212] transition-colors">
                     <div className="px-3 pt-3 pb-2">
                       <span className="text-[11px] font-medium text-white/40 uppercase tracking-wider">Artigos Recentes</span>
                     </div>
                     <div className="space-y-1">
                       
                       <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-white/50 border border-white/5">
                             <PenTool className="h-4 w-4" />
                           </div>
                           <div>
                             <div className="text-sm font-medium text-white mb-0.5">Rate Limiting no Go com Redis</div>
                             <div className="text-xs text-white/40">Há 2 horas • 1.204 palavras</div>
                           </div>
                         </div>
                         <div className="text-xs font-medium text-white/50 bg-white/5 px-2.5 py-1 rounded-md">
                           Rascunho
                         </div>
                       </div>
                       
                       <div className="flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer group">
                         <div className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center text-white/50 border border-white/5">
                             <Cloud className="h-4 w-4" />
                           </div>
                           <div>
                             <div className="text-sm font-medium text-white mb-0.5">Design System com Tailwind v4</div>
                             <div className="text-xs text-white/40">Ontem • 34 visualizações</div>
                           </div>
                         </div>
                         <div className="text-xs font-medium text-white/50 px-2.5 py-1">
                           Publicado
                         </div>
                       </div>

                     </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
