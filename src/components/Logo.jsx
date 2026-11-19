import React from 'react';

// Logo do Studio Helena Lins: STUDIO espaçado, Helena em letra cursiva e Lins em serifa,
// no rosa framboesa do logo original, com o traço e o coração embaixo.
export default function Logo({ light = false }) {
  const main = light ? '#fbe3e4' : '#a12d4e';
  return (
    <span className="inline-flex flex-col items-start leading-none select-none" aria-label="Studio Helena Lins">
      <span className={`self-center mr-1 mb-1.5 text-[8px] tracking-[0.55em] font-medium font-serif ${light ? 'text-champagne' : 'text-brand-700'}`}>STUDIO</span>
      <span className="flex items-end">
        <span className="font-script text-[2.05rem] sm:text-[2.3rem] leading-[0.9]" style={{ color: main }}>Helena</span>
        <span className="font-serif font-semibold text-[1.35rem] sm:text-[1.5rem] ml-1 mb-0.5" style={{ color: main }}>Lins</span>
      </span>
      <svg viewBox="0 0 120 10" className="w-[6.2rem] h-2 -mt-0.5 ml-1" fill="none" aria-hidden="true">
        <path d="M2 6c18 3 34 3 50-1 3-1 5-4 7-4 2 0 3 2 2 4-1 2-3 3-3 3s-3-1-4-3c-1-2 0-4 2-4 2 0 4 3 7 4 16 4 34 3 55 0" stroke={light ? '#C9A266' : '#c43c64'} strokeWidth="1" strokeLinecap="round" />
      </svg>
    </span>
  );
}
