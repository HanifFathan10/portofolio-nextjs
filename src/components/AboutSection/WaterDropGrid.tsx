import anime from "animejs";
import { Reveal } from "../Reveal";

const WaterDropGrid = ({ children }: { children: React.ReactNode }) => {
  return (
    <Reveal>
      <div className="relative w-full flex flex-col justify-center">
        <DotGrid />
        {children}
      </div>
    </Reveal>
  );
};

const GRID_WIDTH = 25;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target instanceof HTMLElement) {
      const targetIndex = e.target.dataset.index;
      if (targetIndex) {
        anime({
          targets: ".dot-point",
          scale: [
            { value: 1.35, easing: "easeOutSine", duration: 250 },
            { value: 1, easing: "easeInOutQuad", duration: 500 },
          ],
          translateY: [
            { value: -15, easing: "easeOutSine", duration: 250 },
            { value: 0, easing: "easeInOutQuad", duration: 500 },
          ],
          opacity: [
            { value: 1, easing: "easeOutSine", duration: 250 },
            { value: 0.5, easing: "easeInOutQuad", duration: 500 },
          ],
          delay: anime.stagger(100, {
            grid: [GRID_WIDTH, GRID_HEIGHT],
            from: Number(targetIndex),
          }),
        });
      }
    }
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          className="group cursor-pointer rounded-full p-2 transition-colors hover:bg-slate-600"
          data-index={index}
          key={`${i}-${j}`}>
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-slate-700 to-slate-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      onClick={handleDotClick}
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="max-sm:relative grid w-fit">
      <h1 className="sm:hidden absolute flex items-center text-xs top-6 left-72 font-jetBrains">
        tap
        <img src="/img/tap.webp" loading="lazy" alt="tap" className="w-5 h-5" />
      </h1>
      {dots}
    </div>
  );
};

export default WaterDropGrid;
