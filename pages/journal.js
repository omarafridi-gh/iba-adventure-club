// pages/journal.js
window.JOURNAL_PAGE_TEMPLATE = `
<main id="page-journal" class="page-view w-full h-[calc(100dvh-64px)] max-h-[calc(100dvh-64px)] relative overflow-hidden select-none bg-[#2B160B]">
  
  <!-- 1. VIDEO VIEWPORT (Locked to top, tuned to mask watermark while preserving cover art) -->
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

  <!-- 2. SUBTLE GLOWING TEXT INDICATOR & NATURAL CLICK HOTSPOT -->
  <div 
    class="absolute bottom-[1%] sm:bottom-[2%] left-[48%] -translate-x-1/2 w-[36%] sm:w-[26%] max-w-[320px] z-20 flex flex-col items-center cursor-pointer group pointer-events-auto"
    onclick="openMasterBookModal()" 
    title="Click to open Field Journal"
  >
    <!-- Floating Glowing Prompt (No background box) -->
    <div class="flex flex-col items-center pointer-events-none transition-transform duration-300 group-hover:-translate-y-1 mb-1">
      
      <!-- Cursive Glowing Title with Warm Amber Drop Glow -->
      <span class="font-hand font-bold text-lg sm:text-2xl text-[#FFF3D6] tracking-wide leading-none drop-shadow-[0_2px_10px_rgba(237,165,49,0.9)] group-hover:text-scrap-gold transition-colors duration-300">
        Flip open our stories ♡
      </span>

      <!-- Gentle Pulsing Compass Chevron Pointing to the Book -->
      <svg class="w-5 h-5 text-scrap-gold drop-shadow-[0_2px_8px_rgba(237,165,49,0.85)] animate-bounce mt-1" viewBox="0 0 24 24" fill="none" stroke="currentColor">
        <path d="M7 9 L12 14 L17 9" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- 100% Invisible Hit Area Over the Journal (No border, no highlight box) -->
    <div class="w-full h-28 sm:h-36 rounded-2xl"></div>

  </div>

</main>
`;
