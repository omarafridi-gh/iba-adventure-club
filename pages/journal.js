// pages/journal.js
window.JOURNAL_PAGE_TEMPLATE = `
<main id="page-journal" class="page-view w-full h-[calc(100vh-64px)] relative overflow-hidden select-none bg-[#2B160B]">
  
  <!-- 1. VIDEO VIEWPORT (Tuned to reveal the full 'VOL. 2026-2027' text while hiding watermark) -->
  <div class="absolute inset-0 overflow-hidden pointer-events-none">
    <video 
      id="packingRoomVideo"
      autoplay 
      loop 
      muted 
      playsinline 
      preload="auto"
      class="w-full h-[103.5%] object-cover object-[center_28%] origin-top scale-[1.015]"
    >
      <source src="Journal_Page1.mp4" type="video/mp4">
      <source src="Jounral_Page1.mp4" type="video/mp4">
      <source src="Journal_Page.mp4" type="video/mp4">
      <source src="packing_room.mp4" type="video/mp4">
    </video>

    <!-- Ambient Sunbeam Dust Layer -->
    <div class="ambient-sunbeam absolute inset-0"></div>
  </div>

  <!-- 2. IN-THEME SCRAPBOOK BOOKMARK INDICATOR & CLICK HOTSPOT -->
  <div 
    class="absolute bottom-[2%] sm:bottom-[3%] left-[48%] -translate-x-1/2 w-[34%] sm:w-[24%] max-w-[300px] z-20 flex flex-col items-center cursor-pointer group pointer-events-auto"
    onclick="openMasterBookModal()" 
    title="Click to open Field Journal"
  >
    <!-- Organic Scrapbook Bookmark Floating Over the Journal -->
    <div class="transition-all duration-300 transform group-hover:-translate-y-1.5 flex flex-col items-center">
      
      <!-- Torn Parchment Tag with Washi Tape and Cursive Script -->
      <div class="px-3.5 py-1 rounded bg-[#FAF4E5] border border-[#DFCFAA] shadow-[0_6px_16px_rgba(0,0,0,0.45)] relative flex items-center gap-2 transform -rotate-1">
        <!-- Tiny Brass Pin -->
        <span class="w-2 h-2 rounded-full bg-gradient-to-br from-[#FFD275] to-[#B37B24] border border-black/30 shadow-xs inline-block shrink-0"></span>
        
        <span class="font-hand font-bold text-sm sm:text-base text-scrap-rust leading-none tracking-wide">
          Flip open our stories ♡
        </span>
        
        <span class="text-xs text-scrap-gold font-bold">✦</span>
      </div>

      <!-- Downward Pointing Parchment Tip -->
      <div class="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-[#DFCFAA] drop-shadow-xs"></div>
    </div>

    <!-- Transparent Click Area Directly Over the Embossed Tabletop Journal -->
    <div class="w-full h-24 sm:h-28 rounded-2xl transition-all duration-300 group-hover:bg-amber-400/10 group-hover:ring-2 group-hover:ring-scrap-gold/60 mt-0.5"></div>

  </div>

</main>
`;
