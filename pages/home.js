// pages/home.js
window.HOME_PAGE_TEMPLATE = `
<main id="page-home" class="page-view flex-grow">
  
  <!-- HERO SECTION: Clean Left CTAs & Open Corkboard Layout -->
  <section class="relative px-4 sm:px-6 pt-6 sm:pt-8 pb-10 sm:pb-12 max-w-7xl mx-auto overflow-hidden">
    
    <!-- Decorative Ambient Glows -->
    <div class="absolute -top-12 -left-12 w-80 h-80 rounded-full bg-scrap-gold/15 blur-3xl pointer-events-none"></div>
    <div class="absolute top-1/2 -right-12 w-96 h-96 rounded-full bg-scrap-teal/10 blur-3xl pointer-events-none"></div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10">
      
      <!-- Left Column: Copy & Clean CTAs -->
      <div class="lg:col-span-6 text-center lg:text-left">
        
        <!-- Top Tape Scrap Badge -->
        <div class="inline-flex items-center gap-2 relative mb-4">
          <span class="font-hand text-xl sm:text-2xl text-scrap-rust font-bold bg-[#F4EBD7] px-4 py-1.5 rounded-md border border-[#DFCFAA] shadow-[0_2px_6px_rgba(53,54,48,0.08)] inline-block transform -rotate-1">
            "New faces. Uncharted trails. Same wild spirit. ♡"
          </span>
        </div>

        <!-- Punchy Display Heading -->
        <h1 class="font-display text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-scrap-charcoal leading-[1.08]">
          Trade Your Laptop <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-scrap-rust via-scrap-gold to-scrap-rust">For A Compass.</span>
        </h1>

        <!-- Subheading -->
        <p class="mt-4 text-base sm:text-lg text-scrap-ink/85 max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
          The faces rotate, the routes evolve, but the deep dive never stops. From the turquoise depths of Charna Island to high alpine mountain crossings, we take IBA students beyond campus gates into the untamed.
        </p>

        <!-- CTAs Only (Smooth Scroll Button Attached) -->
        <div class="mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4">
          <button onclick="showPage('scuba')" class="px-8 py-3.5 bg-scrap-teal hover:bg-scrap-teal/90 text-white font-display font-bold text-xs uppercase tracking-wider rounded-xl shadow-md border-2 border-scrap-charcoal transition transform hover:-translate-y-0.5 flex items-center gap-2">
            <span>Explore Charna Scuba '26</span>
            <span>→</span>
          </button>
          
          <button onclick="scrollToCouncil()" class="px-7 py-3.5 bg-[#FAF3E3] hover:bg-[#F3E6C9] text-scrap-charcoal font-display font-bold text-xs uppercase tracking-wider rounded-xl border-2 border-scrap-charcoal shadow-sm transition inline-block cursor-pointer">
            Meet The Council ↓
          </button>
        </div>

      </div>

      <!-- Right Column: Nudged slightly more to the right -->
      <div class="lg:col-span-6 relative flex items-center justify-center lg:justify-start pt-4 lg:pt-0 sm:translate-x-5 lg:translate-x-8">
        
        <!-- Bulletin Work Area -->
        <div class="relative w-full max-w-[490px] flex items-center justify-center py-6">

          <!-- 1. STICKY NOTE: "Hikes" -->
          <div class="hidden sm:flex absolute -top-3 left-0 sm:left-2 z-20 transform -rotate-6 hover:scale-105 transition-transform select-none pointer-events-none">
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-red-600 border border-black/40 shadow-sm z-30 flex items-center justify-center">
              <span class="w-1 h-1 rounded-full bg-white/70 block"></span>
            </div>
            <div class="px-4 py-1.5 bg-[#198F9F] text-white rounded-md shadow-md border border-black/15 flex items-center justify-center">
              <span class="font-hand font-bold text-2xl tracking-wide leading-none">Hikes</span>
            </div>
          </div>

          <!-- 2. STICKY NOTE: "Trips" -->
          <div class="absolute -top-3 right-8 sm:right-12 z-20 transform rotate-8 hover:scale-105 transition-transform select-none pointer-events-none">
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-9 h-3.5 bg-amber-200/80 border-l border-r border-dashed border-black/30 shadow-xs z-30 rotate-2"></div>
            <div class="px-4 py-1.5 bg-[#86B33C] text-scrap-charcoal rounded-md shadow-md border border-black/15">
              <span class="font-hand font-bold text-2xl tracking-wide leading-none">Trips ♡</span>
            </div>
          </div>

          <!-- 3. STICKY NOTE: "Camping" -->
          <div class="absolute top-28 -right-11 sm:-right-16 z-20 transform -rotate-3 hover:scale-105 transition-transform select-none pointer-events-none">
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-[#FFD275] to-[#B37B24] border border-black/40 shadow-sm z-30 flex items-center justify-center">
              <span class="w-0.5 h-0.5 rounded-full bg-white/80 block"></span>
            </div>
            <div class="px-4 py-1.5 bg-[#EDB136] text-scrap-charcoal rounded-md shadow-md border border-black/15">
              <span class="font-hand font-bold text-2xl tracking-wide leading-none">Camping ⛺</span>
            </div>
          </div>

          <!-- 4. STICKY NOTE: "Team Building" -->
          <div class="absolute top-44 -left-7 sm:-left-12 z-20 transform -rotate-4 hover:scale-105 transition-transform select-none pointer-events-none">
            <div class="absolute -top-2.5 left-1/2 -translate-x-1/2 w-9 h-3.5 bg-[#198F9F]/70 border-l border-r border-dashed border-black/25 shadow-xs z-30 rotate-1"></div>
            <div class="px-4 py-1.5 bg-[#DE8435] text-white rounded-md shadow-md border border-black/15">
              <span class="font-hand font-bold text-xl sm:text-2xl tracking-wide leading-none">Team Building</span>
            </div>
          </div>

          <!-- 5. STICKY NOTE: "Exploration" -->
          <div class="absolute -bottom-6 right-6 sm:right-10 z-20 transform -rotate-2 hover:scale-105 transition-transform select-none pointer-events-none">
            <div class="absolute -top-2 left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-[#198F9F] border border-black/40 shadow-sm z-30 flex items-center justify-center">
              <span class="w-0.5 h-0.5 rounded-full bg-white/80 block"></span>
            </div>
            <div class="px-5 py-1.5 bg-[#A44200] text-[#FFF8E7] rounded-md shadow-md border border-black/20 flex items-center gap-1.5">
              <span class="font-hand font-bold text-xl sm:text-2xl tracking-wide leading-none">Exploration 🧭</span>
            </div>
          </div>

          <!-- OVERSIZED MAIN POLAROID PHOTO -->
          <div 
            class="relative w-[350px] sm:w-[415px] cursor-pointer group z-10 transition-transform duration-300 transform group-hover:scale-[1.02]"
            onclick="showPage('scuba')" 
            title="Click to view Charna Scuba expedition and form"
          >
            <!-- Center Thumbpin at Top -->
            <div class="absolute -top-3.5 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center pointer-events-none">
              <div class="w-4 h-4 rounded-full bg-gradient-to-br from-[#EDA531] to-[#A44200] border border-black/50 shadow-md flex items-center justify-center">
                <span class="w-1 h-1 rounded-full bg-white/80 block"></span>
              </div>
              <div class="w-0.5 h-1.5 bg-black/60 -mt-0.5"></div>
            </div>

            <!-- Polaroid Base Container -->
            <div class="polaroid transform rotate-1 group-hover:rotate-0 transition-all duration-300 shadow-[0_20px_45px_rgba(53,54,48,0.22)] group-hover:shadow-[0_25px_55px_rgba(53,54,48,0.3)] border-2 border-[#DFCFAA] bg-[#FAF5EB] p-4 sm:p-5 pb-6 sm:pb-7">
              
              <!-- Washi Tape across Top Header -->
              <div class="washi-tape washi-tape-teal"></div>
              
              <!-- Photo Area -->
              <div class="aspect-[4/3] w-full overflow-hidden rounded-sm bg-scrap-kraft relative border border-black/15 shadow-inner">
                <img id="heroPolaroidImg" src="hasan_scuba.jpeg" onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&w=800&q=80';" alt="Charna Scuba" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                
                <!-- In-Image Reservation Pill -->
                <div class="absolute bottom-2.5 right-2.5 bg-black/80 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-[11px] font-bold font-mono tracking-wider border border-white/30 flex items-center gap-1 opacity-95 group-hover:bg-scrap-teal transition shadow-md">
                  <span>RESERVE DIVE</span>
                  <span>↗</span>
                </div>
              </div>

              <!-- Polaroid Caption Footer -->
              <div class="mt-3.5 text-center">
                <p class="font-hand text-2xl sm:text-3xl text-scrap-charcoal font-bold group-hover:text-scrap-rust transition leading-tight">
                  Charna Island Scuba '26 ♡
                </p>
                <p class="text-xs uppercase font-bold text-scrap-teal tracking-widest mt-0.5 flex items-center justify-center gap-1">
                  <span>Slots Now Open • Tap to Join</span>
                </p>
              </div>

            </div>

            <!-- Stamped Compass Medallion on Bottom Corner -->
            <div class="absolute -bottom-2.5 -left-2.5 w-11 h-11 rounded-full border border-dashed border-scrap-gold text-scrap-gold flex items-center justify-center font-bold text-lg bg-[#FAF4E5] shadow-md transform -rotate-12 pointer-events-none">
              🧭
            </div>

          </div>

        </div>

      </div>

    </div>
  </section>

  <!-- COUNCIL HIERARCHY SECTION (Target of Smooth Scroll) -->
  <section id="council-section" class="px-4 sm:px-6 pt-12 pb-20 border-t-2 border-[#E0D2B8] relative scroll-mt-16">
    <div class="max-w-6xl mx-auto">
      <div class="text-center max-w-4xl mx-auto mb-14">
        <span class="font-hand text-3xl sm:text-4xl text-scrap-rust font-bold block mb-1">Not just adventures, but a community ♡</span>
        <h2 class="text-3xl sm:text-5xl font-display font-bold tracking-tight text-scrap-charcoal">
          <span>Panel</span> <span class="text-scrap-gold">&</span> <span class="text-scrap-rust">Executive Council</span>
        </h2>
        <p class="text-sm font-bold uppercase tracking-widest text-scrap-ink/60 mt-2">Team Structure 2026–2027</p>
      </div>

      <!-- Hierarchy Level 1: Office Bearers -->
      <div class="max-w-5xl mx-auto text-center relative z-10">
        <div class="inline-block relative mb-14">
          <span class="px-10 py-3 rounded-xl bg-scrap-rust text-white font-display text-base sm:text-lg font-bold uppercase tracking-wider shadow-md">
            OFFICE BEARERS (CEO • CFO • COO)
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          <!-- CFO: Munira -->
          <div class="crumpled-paper-card rounded-2xl p-7 flex flex-col items-center text-center relative justify-between">
            <div class="washi-tape"></div>
            <div class="flex flex-col items-center w-full">
              <div class="relative mb-4">
                <img src="cfo.png" onerror="this.outerHTML='<div class=\\'w-32 h-32 mx-auto rounded-full bg-scrap-kraft border-2 border-scrap-charcoal flex items-center justify-center font-display font-black text-2xl text-scrap-charcoal shadow-inner\\'>CFO</div>'" alt="Munira - CFO" onclick="openLightbox(this.src, 'Munira — CFO')" class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-scrap-charcoal hover:scale-105 transition cursor-pointer shadow block">
                <span class="absolute -bottom-1 -right-1 bg-scrap-charcoal text-white font-hand text-lg px-3 py-0.5 rounded-full shadow -rotate-6 border border-white font-bold">Munira ♡</span>
              </div>
              <span class="font-display font-black text-3xl text-scrap-gold tracking-wider mt-1">CFO</span>
              <p class="text-sm text-scrap-ink/80 mt-2.5 font-normal leading-relaxed">Directs society financial allocations, trip budgeting and subsidies.</p>
            </div>
          </div>

          <!-- CEO: Hamna -->
          <div class="crumpled-paper-card rounded-2xl p-7 flex flex-col items-center text-center relative justify-between sm:-translate-y-2">
            <div class="washi-tape washi-tape-rust"></div>
            <div class="flex flex-col items-center w-full">
              <div class="relative mb-4">
                <img src="ceo.png" onerror="this.outerHTML='<div class=\\'w-32 h-32 mx-auto rounded-full bg-scrap-kraft border-2 border-scrap-rust flex items-center justify-center font-display font-black text-2xl text-scrap-charcoal shadow-inner\\'>CEO</div>'" alt="Hamna - CEO" onclick="openLightbox(this.src, 'Hamna — CEO')" class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-scrap-rust hover:scale-105 transition cursor-pointer shadow-lg block">
                <span class="absolute -bottom-1 -right-1 bg-scrap-rust text-white font-hand text-lg px-3 py-0.5 rounded-full shadow -rotate-6 border border-white font-bold">Hamna ♡</span>
              </div>
              <span class="font-display font-black text-3xl text-scrap-rust tracking-wider mt-1">CEO</span>
              <p class="text-sm text-scrap-ink/80 mt-2.5 font-normal leading-relaxed">Spearheads club vision, institutional governance & signature expeditions.</p>
            </div>
          </div>

          <!-- COO: Yusra -->
          <div class="crumpled-paper-card rounded-2xl p-7 flex flex-col items-center text-center relative justify-between">
            <div class="washi-tape washi-tape-teal"></div>
            <div class="flex flex-col items-center w-full">
              <div class="relative mb-4">
                <img src="coo.png" onerror="this.outerHTML='<div class=\\'w-32 h-32 mx-auto rounded-full bg-scrap-kraft border-2 border-scrap-charcoal flex items-center justify-center font-display font-black text-2xl text-scrap-charcoal shadow-inner\\'>COO</div>'" alt="Yusra - COO" onclick="openLightbox(this.src, 'Yusra — COO')" class="w-32 h-32 mx-auto rounded-full object-cover border-4 border-scrap-charcoal hover:scale-105 transition cursor-pointer shadow block">
                <span class="absolute -bottom-1 -right-1 bg-scrap-teal text-white font-hand text-lg px-3 py-0.5 rounded-full shadow border border-white font-bold">Yusra ♡</span>
              </div>
              <span class="font-display font-black text-3xl text-scrap-teal tracking-wider mt-1">COO</span>
              <p class="text-sm text-scrap-ink/80 mt-2.5 font-normal leading-relaxed">Directs operations, ground logistics, fleet movements and basecamps.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Connector Line -->
      <div class="hidden lg:block w-full max-w-6xl mx-auto my-3">
        <svg class="w-full h-16" viewBox="0 0 1152 64" fill="none" preserveAspectRatio="none">
          <path d="M 576 0 L 576 34" stroke="#A44200" stroke-width="3.5" stroke-dasharray="7 7" stroke-linecap="round" />
          <path d="M 384 34 L 960 34" stroke="#A44200" stroke-width="3.5" stroke-dasharray="7 7" stroke-linecap="round" />
          <path d="M 384 34 L 384 64" stroke="#A44200" stroke-width="3.5" stroke-dasharray="7 7" stroke-linecap="round" />
          <path d="M 960 34 L 960 64" stroke="#A44200" stroke-width="3.5" stroke-dasharray="7 7" stroke-linecap="round" />
          <circle cx="576" cy="34" r="5" fill="#A44200" />
          <circle cx="384" cy="34" r="4.5" fill="#A44200" />
          <circle cx="960" cy="34" r="4.5" fill="#A44200" />
        </svg>
      </div>

      <!-- Hierarchy Level 2: Executive Council & Advisor -->
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">
        <div class="lg:col-span-8 space-y-6">
          <div class="flex flex-col items-center mb-6">
            <span class="inline-block px-8 py-2.5 rounded-xl bg-scrap-charcoal text-white font-display text-sm sm:text-base font-bold uppercase tracking-wider shadow">
              EXECUTIVE COUNCIL & DIRECTORS
            </span>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <!-- Marketing & Creatives -->
            <div class="crumpled-paper-card rounded-2xl p-6 relative">
              <div class="washi-tape washi-tape-teal"></div>
              <div class="flex items-center justify-between border-b border-[#DECFA9] pb-3 mb-5">
                <h3 class="font-display font-bold text-xl text-scrap-charcoal">Marketing & Creatives</h3>
                <span class="font-hand text-scrap-teal text-lg font-bold">3 Explorers ♡</span>
              </div>
              <div class="space-y-3.5">
                <div class="sticky-note-item bg-[#E3F4F6] border-[#198F9F]/60 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.5deg]">
                  <img src="muntazir.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>MH</div>'" alt="Muntazir" onclick="openLightbox(this.src, 'Muntazir Hassan — Executive Council')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Muntazir Hassan</h4>
                    <span class="text-xs font-bold text-scrap-teal uppercase tracking-wider block">Executive Council</span>
                    <a href="mailto:m.hassan.30002@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-teal truncate block mt-0.5">m.hassan.30002@khi.iba.edu.pk</a>
                  </div>
                </div>
                <div class="sticky-note-item bg-[#E3F4F6] border-[#198F9F]/60 p-3.5 rounded-xl flex items-center gap-4 transform rotate-[0.6deg]">
                  <img src="rayyan.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>RR</div>'" alt="Rayyan" onclick="openLightbox(this.src, 'Rayyan Rafique — Director Media & Design')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Rayyan Rafique</h4>
                    <span class="text-xs font-semibold text-scrap-teal/80 uppercase tracking-wider block">Director Media & Design</span>
                    <a href="mailto:r.rafique.30530@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-teal truncate block mt-0.5">r.rafique.30530@khi.iba.edu.pk</a>
                  </div>
                </div>
                <div class="sticky-note-item bg-[#E3F4F6] border-[#198F9F]/60 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.4deg]">
                  <img src="meerub.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>MH</div>'" alt="Meerub" onclick="openLightbox(this.src, 'Meerub Haider — Director Content Planning')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Meerub Haider</h4>
                    <span class="text-xs font-semibold text-scrap-teal/70 uppercase tracking-wider block">Director Content Planning</span>
                    <a href="mailto:m.haider.33279@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-teal truncate block mt-0.5">m.haider.33279@khi.iba.edu.pk</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Corporate & Comms -->
            <div class="crumpled-paper-card rounded-2xl p-6 relative">
              <div class="washi-tape washi-tape-rust"></div>
              <div class="flex items-center justify-between border-b border-[#DECFA9] pb-3 mb-5">
                <h3 class="font-display font-bold text-xl text-scrap-charcoal">Corporate & Comms</h3>
                <span class="font-hand text-scrap-rust text-lg font-bold">2 Explorers ♡</span>
              </div>
              <div class="space-y-3.5">
                <div class="sticky-note-item bg-[#FCEFE6] border-[#A44200]/50 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.5deg]">
                  <img src="abdullah.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>AG</div>'" alt="Abdullah" onclick="openLightbox(this.src, 'Abdullah Asif Gul — Executive Council')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Abdullah Asif Gul</h4>
                    <span class="text-xs font-bold text-scrap-rust uppercase tracking-wider block">Executive Council</span>
                    <a href="mailto:a.asifgul.32679@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-rust truncate block mt-0.5">a.asifgul.32679@khi.iba.edu.pk</a>
                  </div>
                </div>
                <div class="sticky-note-item bg-[#FCEFE6] border-[#A44200]/50 p-3.5 rounded-xl flex items-center gap-4 transform rotate-[0.5deg]">
                  <img src="osama.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>OS</div>'" alt="Osama" onclick="openLightbox(this.src, 'Osama — Director Corporate & Communications')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Osama</h4>
                    <span class="text-xs font-semibold text-scrap-rust/70 uppercase tracking-wider block">Director Corporate & Comms</span>
                    <span class="text-xs text-scrap-ink/70 block mt-0.5">Executive Director</span>
                  </div>
                </div>
              </div>
            </div>

            <!-- Safety & Inclusivity -->
            <div class="crumpled-paper-card rounded-2xl p-6 relative">
              <div class="washi-tape washi-tape-moss"></div>
              <div class="flex items-center justify-between border-b border-[#DECFA9] pb-3 mb-5">
                <h3 class="font-display font-bold text-xl text-scrap-charcoal">Safety & Inclusivity</h3>
                <span class="font-hand text-[#7ba632] text-lg font-bold">2 Explorers ♡</span>
              </div>
              <div class="space-y-3.5">
                <div class="sticky-note-item bg-[#EEF7DE] border-[#7ba632]/60 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.6deg]">
                  <img src="neetu.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>NK</div>'" alt="Neetu" onclick="openLightbox(this.src, 'Neetu Kumari — Executive Council')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Neetu Kumari</h4>
                    <span class="text-xs font-bold text-scrap-teal uppercase tracking-wider block">Executive Council</span>
                    <a href="mailto:n.kumari.32195@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-[#7ba632] truncate block mt-0.5">n.kumari.32195@khi.iba.edu.pk</a>
                  </div>
                </div>
                <div class="sticky-note-item bg-[#EEF7DE] border-[#7ba632]/60 p-3.5 rounded-xl flex items-center gap-4 transform rotate-[0.4deg]">
                  <img src="alina.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>AK</div>'" alt="Alina" onclick="openLightbox(this.src, 'Alina Kashif — Director Safety')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Alina Kashif</h4>
                    <span class="text-xs font-semibold text-[#7ba632]/80 uppercase tracking-wider block">Director Safety</span>
                    <a href="mailto:alinakashif2007@gmail.com" class="text-xs text-scrap-ink/70 hover:text-[#7ba632] truncate block mt-0.5">alinakashif2007@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Operations & Logistics -->
            <div class="crumpled-paper-card rounded-2xl p-6 relative">
              <div class="washi-tape washi-tape-rust"></div>
              <div class="flex items-center justify-between border-b border-[#DECFA9] pb-3 mb-5">
                <h3 class="font-display font-bold text-xl text-scrap-charcoal">Operations & Logistics</h3>
                <span class="font-hand text-scrap-rust text-lg font-bold">2 Explorers ♡</span>
              </div>
              <div class="space-y-3.5">
                <div class="sticky-note-item bg-[#FCEFE6] border-[#A44200]/50 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.5deg]">
                  <img src="kashaf.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>KS</div>'" alt="Kashaf" onclick="openLightbox(this.src, 'Kashaf — Executive Council')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Kashaf</h4>
                    <span class="text-xs font-bold text-scrap-rust uppercase tracking-wider block">Executive Council</span>
                    <a href="mailto:k.safdar.32149@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-rust truncate block mt-0.5">k.safdar.32149@khi.iba.edu.pk</a>
                  </div>
                </div>
                <div class="sticky-note-item bg-[#FCEFE6] border-[#A44200]/50 p-3.5 rounded-xl flex items-center gap-4 transform rotate-[0.5deg]">
                  <img src="najiba.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>NZ</div>'" alt="Najiba" onclick="openLightbox(this.src, 'Najiba Zia — Director Ops & Logistics')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Najiba Zia</h4>
                    <span class="text-xs font-semibold text-scrap-rust/70 uppercase tracking-wider block">Director Ops & Logistics</span>
                    <a href="mailto:n.zia.33420@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-rust truncate block mt-0.5">n.zia.33420@khi.iba.edu.pk</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- Recruitment -->
            <div class="crumpled-paper-card rounded-2xl p-6 relative">
              <div class="washi-tape"></div>
              <div class="flex items-center justify-between border-b border-[#DECFA9] pb-3 mb-5">
                <h3 class="font-display font-bold text-xl text-scrap-charcoal">Recruitment</h3>
                <span class="font-hand text-scrap-gold text-lg font-bold">1 Explorer ♡</span>
              </div>
              <div class="space-y-3.5">
                <div class="sticky-note-item bg-[#FFF8E2] border-[#EDA531]/60 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.4deg]">
                  <img src="divyansh.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>DK</div>'" alt="Divyansh" onclick="openLightbox(this.src, 'Divyansh — Executive Council')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Divyansh</h4>
                    <span class="text-xs font-bold text-scrap-gold uppercase tracking-wider block">Executive Council</span>
                    <a href="mailto:d.kumar.33177@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-gold truncate block mt-0.5">d.kumar.33177@khi.iba.edu.pk</a>
                  </div>
                </div>
              </div>
            </div>

            <!-- General Affairs -->
            <div class="crumpled-paper-card rounded-2xl p-6 relative">
              <div class="washi-tape washi-tape-teal"></div>
              <div class="flex items-center justify-between border-b border-[#DECFA9] pb-3 mb-5">
                <h3 class="font-display font-bold text-xl text-scrap-charcoal">General Affairs</h3>
                <span class="font-hand text-scrap-teal text-lg font-bold">2 Explorers ♡</span>
              </div>
              <div class="space-y-3.5">
                <div class="sticky-note-item bg-[#E3F4F6] border-[#198F9F]/60 p-3.5 rounded-xl flex items-center gap-4 transform -rotate-[0.5deg]">
                  <img src="omar.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-black text-sm text-scrap-charcoal\\'>OA</div>'" alt="Omar" onclick="openLightbox(this.src, 'Muhammad Omar Afridi — Executive Council')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Muhammad Omar Afridi</h4>
                    <span class="text-xs font-bold text-scrap-teal uppercase tracking-wider block">Executive Council</span>
                    <a href="mailto:m.afridi.26220@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-teal truncate block mt-0.5">m.afridi.26220@khi.iba.edu.pk</a>
                  </div>
                </div>
                <div class="sticky-note-item bg-[#E3F4F6] border-[#198F9F]/60 p-3.5 rounded-xl flex items-center gap-4 transform rotate-[0.6deg]">
                  <img src="hasan.png" onerror="this.outerHTML='<div class=\\'w-14 h-14 shrink-0 rounded-full bg-scrap-kraft border border-scrap-charcoal flex items-center justify-center font-display font-bold text-sm text-scrap-charcoal\\'>HK</div>'" alt="Hasan" onclick="openLightbox(this.src, 'Muhammad Hasan Khan — Director General Affairs')" class="w-14 h-14 shrink-0 rounded-full object-cover border-2 border-scrap-charcoal cursor-pointer shadow">
                  <div class="min-w-0">
                    <h4 class="font-display font-bold text-base text-scrap-charcoal truncate">Muhammad Hasan Khan</h4>
                    <span class="text-xs font-semibold text-scrap-teal/80 uppercase tracking-wider block">Director General Affairs</span>
                    <a href="mailto:m.khan.30910@khi.iba.edu.pk" class="text-xs text-scrap-ink/70 hover:text-scrap-teal truncate block mt-0.5">m.khan.30910@khi.iba.edu.pk</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Advisor & Native Archive Video (IAC Archives.mp4) -->
        <div class="lg:col-span-4 space-y-6">
          <div class="flex flex-col items-center mb-6">
            <span class="inline-block px-8 py-2.5 rounded-xl bg-scrap-rust text-white font-display text-sm sm:text-base font-bold uppercase tracking-wider shadow">
              ADVISOR TO THE PANEL
            </span>
          </div>
          <div class="crumpled-paper-card rounded-2xl p-7 relative">
            <div class="washi-tape washi-tape-rust"></div>
            <div class="text-center flex flex-col items-center">
              <div class="relative mb-4">
                <img src="advisor.png" onerror="this.outerHTML='<div class=\\'w-32 h-32 mx-auto rounded-full bg-scrap-kraft border-2 border-scrap-charcoal flex items-center justify-center font-display font-black text-2xl text-scrap-charcoal shadow\\'>MU</div>'" alt="Mustafa" onclick="openLightbox(this.src, 'Mustafa — Advisor to the Panel')" class="w-32 h-32 rounded-full object-cover border-4 border-scrap-charcoal hover:scale-105 transition cursor-pointer shadow block">
              </div>
              <h4 class="font-display font-bold text-2xl text-scrap-charcoal">Mustafa</h4>
              <span class="text-xs font-bold text-scrap-rust uppercase tracking-wider mt-1 px-3 py-1 bg-scrap-rust/10 rounded-full border border-scrap-rust/20">Advisor to the Panel</span>
              <p class="text-sm text-scrap-ink/80 mt-3 leading-relaxed">Senior counsel, strategic oversight & institutional advisory to the society leadership.</p>
            </div>
          </div>

          <!-- Video Edit with Native Audio -->
          <div class="rounded-2xl p-5 relative mt-8 bg-scrap-charcoal text-white shadow-2xl border-2 border-[#55564E] transform rotate-1 hover:rotate-0 transition duration-300">
            <div class="pushpin"></div>
            <div class="flex items-center justify-between border-b border-white/20 pb-3 mb-3">
              <div class="flex items-center gap-2">
                <span class="text-xs font-mono uppercase tracking-widest text-scrap-gold font-bold">IAC ARCHIVES</span>
              </div>
              <span class="px-2.5 py-0.5 rounded-full bg-scrap-rust text-white font-mono text-[10px] font-bold border border-white/20">
                Official Edit
              </span>
            </div>
            <div class="mb-2">
              <h4 class="font-hand text-xl text-scrap-gold font-bold leading-tight">Panel & Expeditions Edit ♡</h4>
              <p class="text-[11px] text-white/70 font-normal">A look back at the previous panel & expeditions across Pakistan.</p>
            </div>
            
            <div class="w-full rounded-xl overflow-hidden border border-white/20 shadow-inner bg-black aspect-[9/16] max-h-[460px] flex items-center justify-center">
              <video 
                controls 
                playsinline 
                preload="metadata"
                class="w-full h-full object-cover rounded-xl"
              >
                <source src="IAC Archives.mp4" type="video/mp4">
                <source src="IAC%20Archives.mp4" type="video/mp4">
                Your browser does not support the video tag.
              </video>
            </div>

            <div class="mt-3 pt-2.5 border-t border-white/15 flex items-center justify-between text-[11px] text-white/70">
              <span class="font-mono text-scrap-gold">● REEL ARCHIVE</span>
              <span class="font-hand text-white/90 text-sm">Tap play to listen with sound ♡</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Management Team Section -->
      <div class="w-full max-w-5xl mx-auto mt-6 flex flex-col items-center">
        <div class="flex justify-center">
          <svg class="w-8 h-14" viewBox="0 0 32 56" fill="none">
            <path d="M 16 0 L 16 52" stroke="#A44200" stroke-width="3.5" stroke-dasharray="6 6" stroke-linecap="round" />
            <circle cx="16" cy="52" r="4.5" fill="#A44200" />
          </svg>
        </div>
        
        <div class="text-center mt-1 mb-2 z-10">
          <span class="inline-block px-9 py-2.5 rounded-xl bg-scrap-charcoal text-white font-display text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md">
            MANAGEMENT TEAM 2026–2027
          </span>
        </div>

        <div class="crumpled-paper-card bg-[#FAF2DF] border-2 border-dashed border-[#DFCFAA] rounded-2xl p-8 pt-10 text-center relative w-full shadow-[0_8px_25px_rgba(53,54,48,0.1)] mt-2">
          <div class="washi-tape washi-tape-rust"></div>

          <h4 class="font-display font-bold text-2xl text-scrap-charcoal mt-1 tracking-tight">
            Annual General Management Body
          </h4>
          <p class="text-sm text-scrap-ink/85 max-w-2xl mx-auto mt-2 leading-relaxed font-medium">
            Operating directly under the Executive Council and Directors. Inducted annually for the tenure to drive on-ground execution across expeditions, basecamps, and campus drives.
          </p>
        </div>
      </div>

    </div>
  </section>

</main>
`;
