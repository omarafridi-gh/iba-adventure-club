// pages/journal.js
window.JOURNAL_PAGE_TEMPLATE = `
<main id="page-journal" class="page-view w-full flex-grow flex flex-col items-center justify-center bg-[#2B160B] relative select-none overflow-hidden">
  
  <!-- 1. UN-CROPPED 16:9 RATIO VIDEO CONTAINER -->
  <div class="relative w-full aspect-[16/9] max-h-[calc(100vh-140px)] flex items-center justify-center overflow-hidden">
    
    <video 
      id="packingRoomVideo"
      autoplay 
      loop 
      muted 
      playsinline 
      preload="auto"
      class="w-full h-full object-contain object-center pointer-events-none"
    >
      <source src="Journal_Page1.mp4" type="video/mp4">
      <source src="Jounral_Page1.mp4" type="video/mp4">
      <source src="Journal_Page.mp4" type="video/mp4">
      <source src="packing_room.mp4" type="video/mp4">
    </video>

    <!-- Subtle Ambient Sunbeam Overlay -->
    <div class="ambient-sunbeam absolute inset-0 pointer-events-none"></div>

    <!-- 2. SUBTLE DOTTED ARROW INDICATOR & INVISIBLE HOTSPOT OVER THE BOOK -->
    <div 
      class="absolute bottom-[2%] left-[48%] -translate-x-1/2 w-[22%] h-[24%] z-20 flex flex-col items-center justify-end cursor-pointer group pointer-events-auto"
      onclick="openMasterBookModal()" 
      title="Click to open Journal"
    >
      <!-- Floating Indicator Badge with Dotted Arrow -->
      <div class="flex flex-col items-center transition-transform duration-300 transform group-hover:scale-105 mb-2">
        
        <!-- Subtle Pill Badge -->
        <span class="px-3 py-1 rounded-full bg-scrap-gold/95 hover:bg-scrap-gold text-scrap-charcoal font-display font-bold text-[10px] sm:text-xs tracking-wider shadow-md border border-white/80 flex items-center gap-1.5 whitespace-nowrap">
          <span>📖 Click to open</span>
        </span>

        <!-- Hand-drawn Style Dotted Arrow Pointing Down to Book -->
        <svg class="w-6 h-6 text-scrap-gold drop-shadow-sm animate-bounce mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M12 2 V16" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3"/>
          <path d="M7 11 L12 16 L17 11" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>

      </div>

      <!-- Completely Transparent Interactive Target Area Over Book -->
      <div class="w-full h-[65%] rounded-2xl"></div>

    </div>

  </div>

</main>
`;
