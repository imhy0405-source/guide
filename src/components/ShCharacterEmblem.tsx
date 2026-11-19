import React from 'react';

/**
 * 상단 안내 영역에만 작게 배치되는 SH 청렴 캐릭터 일러스트
 */
export const ShCharacterEmblem: React.FC = () => {
  return (
    <div
      className="shrink-0 w-[84px] h-[84px] sm:w-[96px] sm:h-[96px] flex items-center justify-center"
      aria-hidden="true"
    >
      <img
        src="/assets/aistudio/KakaoTalk_20261119_152627772_3da2c7ff.jpg"
        alt=""
        className="w-full h-full object-contain mix-blend-multiply select-none pointer-events-none"
      />
    </div>
  );
};
