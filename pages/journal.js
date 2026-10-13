// pages/journal.js
window.JOURNAL_PAGE_TEMPLATE = `
<main id="page-journal" class="page-view w-full h-[calc(100vh-64px)] relative overflow-hidden select-none bg-[#2B160B]">
  
  <!-- 1. VIDEO VIEWPORT (Tuned to conceal watermark while keeping 'VOL. 2026-2027' clear) -->
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

  <!-- 2. HIGH-CONTRAST GLOWING TEXT INDICATOR & NATURAL CLICK HOTSPOT -->
  <div 
    class="absolute bottom-[2%] sm:bottom-[3%] left-[48%] -translate-x-1/2 w-[34%] sm:w-[24%] max-w-[300px] z-20 flex flex-col items-center cursor-pointer group pointer-events-auto"
    onclick="openMasterBookModal()" 
    title="Click to open Field Journal"
  >
    <!-- Floating Luminous Prompt With Dark Ink Contour -->
    <div class="flex flex-col items-center pointer-events-none transition-transform duration-300 group-hover:-translate-y-1 mb-1">
      
      <!-- Hand-drawn Cursive with Dark Ink Contour & Warm Sunlight Halo -->
      <span 
        class="font-hand font-bold text-xl sm:text-2xl text-[#FFF8E7] tracking-wider leading-none transition-all duration-300 group-hover:text-scrap-gold select-none"
        style="
          text-shadow: 
            -1.5px -1.5px 0 #2B160B,  
             1.5px -1.5px 0 #2B160B,
            -1.5px  1.5px 0 #2B160B,
             1.5px  1.5px 0 #2B160B,
             0 0 16px rgba(237, 165, 49, 0.95);
        "
      >
        Flip open our stories ♡
      </span>

      <!-- Downward Arrow with Dark Ink Border -->
      <svg 
        class="w-5 h-5 text-scrap-gold animate-bounce mt-1" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor"
        style="filter: drop-shadow(0 0 2px #2B160B) drop-shadow(0 0 8px rgba(237, 165, 49, 0.9));"
      >
        <path d="M7 9 L12 14 L17 9" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>

    <!-- Transparent Hit Area Over Journal & Table (No box outline) -->
    <div class="w-full h-24 sm:h-32 rounded-2xl"></div>

  </div>

</main>
`;
