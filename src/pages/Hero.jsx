
const Hero = () => {
  return (
    <div class="relative z-0">
      <div class="absolute inset-x-0 top-1/2 -z-10 flex -translate-y-1/2 justify-center overflow-hidden [mask-image:radial-gradient(50%_45%_at_50%_55%,white,transparent)]">
        <svg
          class="h-[60rem] w-[100rem] flex-none stroke-blue-600 opacity-20"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e9033f3e-f665-41a6-84ef-756f6778e6fe"
              width="200"
              height="200"
              x="50%"
              y="50%"
              patternUnits="userSpaceOnUse"
              patternTransform="translate(-100 0)"
            >
              <path d="M.5 200V.5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="50%" class="overflow-visible fill-blue-50">
            <path
              d="M-300 0h201v201h-201Z M300 200h201v201h-201Z"
              stroke-width="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            stroke-width="0"
            fill="url(#e9033f3e-f665-41a6-84ef-756f6778e6fe)"
          ></rect>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
