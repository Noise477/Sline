"use client";

import {
  PointerEvent as ReactPointerEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";


type CanvasPoint = {
  x: number;
  y: number;
};

type GridDot = {
  x: number;
  y: number;
  isCompletedArea: boolean;
  phase: number;
  noise: number;
};

type DotMotion = {
  scale: number;
  velocity: number;
};

type MapSize = {
  width: number;
  height: number;
};

/*
 * Approximate areas where SLINE has completed projects.
 * Coordinates are percentages of the dedicated North Island map.
 *
 * Each area uses an irregular footprint instead of an ellipse so the
 * red project coverage reads more like a real geographic cluster and
 * less like a circular marker. Small satellite cells add a few natural
 * breaks around the edges without implying exact client/site locations.
 */
type ProjectArea = {
  name: string;
  polygon: readonly (readonly [number, number])[];
  satellites: readonly {
    x: number;
    y: number;
    size: number;
  }[];
};

const completedProjectAreas: readonly ProjectArea[] = [
  {
    name: "Auckland",
    polygon: [
      [29.3, 28.3],
      [31.3, 27.4],
      [34.2, 27.7],
      [36.4, 29.0],
      [37.4, 31.2],
      [36.8, 33.3],
      [35.0, 35.2],
      [32.3, 35.1],
      [30.2, 33.9],
      [28.9, 31.8],
    ],
    satellites: [
      { x: 28.3, y: 30.4, size: 0.72 },
      { x: 37.8, y: 33.1, size: 0.64 },
      { x: 31.0, y: 36.0, size: 0.58 },
    ],
  },
  {
    name: "Hamilton",
    polygon: [
      [38.3, 38.2],
      [40.0, 37.5],
      [42.6, 37.8],
      [44.6, 39.0],
      [45.1, 40.9],
      [44.0, 42.9],
      [41.8, 44.0],
      [39.4, 43.5],
      [37.8, 41.7],
    ],
    satellites: [
      { x: 45.8, y: 40.2, size: 0.6 },
      { x: 39.0, y: 44.5, size: 0.56 },
    ],
  },
  {
    name: "Tauranga",
    polygon: [
      [52.1, 46.4],
      [54.4, 44.9],
      [57.1, 44.5],
      [59.7, 45.3],
      [61.1, 46.8],
      [60.3, 48.9],
      [58.3, 50.2],
      [55.4, 50.1],
      [53.1, 49.1],
      [51.8, 47.7],
    ],
    satellites: [
      { x: 61.7, y: 48.3, size: 0.62 },
      { x: 54.0, y: 44.1, size: 0.54 },
    ],
  },
  {
    name: "Palmerston North",
    polygon: [
      [44.3, 70.2],
      [46.2, 69.1],
      [48.7, 69.2],
      [50.9, 70.5],
      [51.7, 72.3],
      [50.9, 74.4],
      [48.8, 75.6],
      [46.3, 75.4],
      [44.5, 74.2],
      [43.7, 72.4],
    ],
    satellites: [
      { x: 52.2, y: 71.4, size: 0.58 },
      { x: 45.0, y: 76.1, size: 0.52 },
    ],
  },
];

/*
 * ─────────────────────────────────────────
 * SQUARE GRID
 * ─────────────────────────────────────────
 */
const GRID_SPACING = 8;

/*
 * 4px square on an 8px grid.
 *
 * Resting state: 4px square + 4px clear gap.
 * Maximum hover state: 8px square, so adjacent
 * squares meet exactly at their edges without overlap.
 */
const BASE_HALF_SIZE = 2;

const MAX_HALF_SIZE =
  GRID_SPACING / 2;

const MAX_SQUARE_SCALE =
  MAX_HALF_SIZE /
  BASE_HALF_SIZE;


/*
 * ─────────────────────────────────────────
 * DOT REVEAL
 * ─────────────────────────────────────────
 *
 * Previously the full reveal was generally
 * finished in well under one second.
 *
 * This version is deliberately slower so
 * normal scrolling can actually show it.
 */
const REVEAL_DURATION = 1050;

const REVEAL_VERTICAL_STAGGER = 1.05;

const REVEAL_RANDOM_STAGGER = 240;

/*
 * ─────────────────────────────────────────
 * PROJECT COUNTER
 * ─────────────────────────────────────────
 *
 * Confirmed SLINE project figure.
 */
const PROJECT_COUNTER_TARGET = 2500;

const PROJECT_COUNTER_DURATION = 1850;

/*
 * ─────────────────────────────────────────
 * MOUSE INTERACTION
 * ─────────────────────────────────────────
 */
const POINTER_FOLLOW = 0.15;

const HOVER_RADIUS = 105;

/*
 * A square directly beneath the pointer grows
 * from 4px to 8px — exactly the grid spacing.
 */
const HOVER_SCALE =
  MAX_SQUARE_SCALE - 1;

/*
 * Size movement only.
 * Cursor never changes colour.
 */
const WAVE_SCALE = 0.12;

const WAVE_SPEED = 0.008;

const WAVE_FREQUENCY = 0.07;

/*
 * Spring response.
 */
const SPRING_STRENGTH = 0.11;

const SPRING_DAMPING = 0.79;

export default function NZCoverageMap() {
  const sectionRef =
    useRef<HTMLElement | null>(
      null
    );

  const mapRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const canvasRef =
    useRef<HTMLCanvasElement | null>(
      null
    );

  const projectCounterRef =
    useRef<HTMLDivElement | null>(
      null
    );

  const animationRef =
    useRef<number | null>(
      null
    );

  const dimensionsRef =
    useRef({
      width: 0,
      height: 0,
      dpr: 1,
    });

  const pointerTargetRef =
    useRef<CanvasPoint | null>(
      null
    );

  const pointerSmoothRef =
    useRef<CanvasPoint | null>(
      null
    );

  const pointerInsideRef =
    useRef(false);

  const revealStartRef =
    useRef(0);

  const gridDotsRef =
    useRef<GridDot[]>([]);

  const dotMotionRef =
    useRef<DotMotion[]>([]);

  const [isVisible, setIsVisible] =
    useState(false);

  const [
    isGridReady,
    setIsGridReady,
  ] = useState(false);

  const [
    counterStarted,
    setCounterStarted,
  ] = useState(false);

  const [
    displayedProjectCount,
    setDisplayedProjectCount,
  ] = useState(0);

  const [mapSize, setMapSize] =
    useState<MapSize>({
      width: 0,
      height: 0,
    });

  /*
   * ─────────────────────────────────────────
   * DOT MAP VISIBILITY
   * ─────────────────────────────────────────
   *
   * Start slightly before the section gets
   * deeply into view so the user sees the
   * build animation while scrolling.
   */
  useEffect(() => {
    const section =
      sectionRef.current;

    if (!section) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            /*
             * Always restart reveal at the
             * actual moment the map becomes
             * visible.
             */
            revealStartRef.current =
              performance.now();

            setIsVisible(
              true
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.12,
        }
      );

    observer.observe(
      section
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ─────────────────────────────────────────
   * PROJECT COUNTER VISIBILITY
   * ─────────────────────────────────────────
   *
   * The number does not start immediately
   * with page load.
   *
   * It begins once the actual stats block
   * reaches the viewport.
   */
  useEffect(() => {
    const counter =
      projectCounterRef.current;

    if (!counter) {
      return;
    }

    const observer =
      new IntersectionObserver(
        ([entry]) => {
          if (
            entry.isIntersecting
          ) {
            setCounterStarted(
              true
            );

            observer.disconnect();
          }
        },
        {
          threshold: 0.55,
        }
      );

    observer.observe(
      counter
    );

    return () => {
      observer.disconnect();
    };
  }, []);

  /*
   * ─────────────────────────────────────────
   * PROJECT COUNTER ANIMATION
   * ─────────────────────────────────────────
   */
  useEffect(() => {
    if (
      !counterStarted
    ) {
      return;
    }

    let frame:
      number | null = null;

    const start =
      performance.now();

    const animate = (
      now: number
    ) => {
      const elapsed =
        now - start;

      const progress =
        clamp(
          elapsed /
            PROJECT_COUNTER_DURATION,
          0,
          1
        );

      /*
       * Fast at first, then slows down
       * as it approaches 2500.
       */
      const eased =
        1 -
        Math.pow(
          1 - progress,
          3
        );

      const value =
        Math.min(
          PROJECT_COUNTER_TARGET,
          Math.floor(
            eased *
              PROJECT_COUNTER_TARGET
          )
        );

      setDisplayedProjectCount(
        value
      );

      if (
        progress < 1
      ) {
        frame =
          requestAnimationFrame(
            animate
          );
      } else {
        setDisplayedProjectCount(
          PROJECT_COUNTER_TARGET
        );
      }
    };

    frame =
      requestAnimationFrame(
        animate
      );

    return () => {
      if (
        frame !== null
      ) {
        cancelAnimationFrame(
          frame
        );
      }
    };
  }, [
    counterStarted,
  ]);

  /*
   * ─────────────────────────────────────────
   * CANVAS SIZING
   * ─────────────────────────────────────────
   */
  useEffect(() => {
    const map =
      mapRef.current;

    const canvas =
      canvasRef.current;

    if (
      !map ||
      !canvas
    ) {
      return;
    }

    const updateSize =
      () => {
        const rect =
          map.getBoundingClientRect();

        const width =
          Math.max(
            1,
            Math.round(
              rect.width
            )
          );

        const height =
          Math.max(
            1,
            Math.round(
              rect.height
            )
          );

        const dpr =
          Math.min(
            window.devicePixelRatio ||
              1,
            2
          );

        canvas.width =
          Math.round(
            width *
              dpr
          );

        canvas.height =
          Math.round(
            height *
              dpr
          );

        dimensionsRef.current = {
          width,
          height,
          dpr,
        };

        setMapSize(
          (current) => {
            if (
              current.width ===
                width &&
              current.height ===
                height
            ) {
              return current;
            }

            return {
              width,
              height,
            };
          }
        );
      };

    updateSize();

    const resizeObserver =
      new ResizeObserver(
        updateSize
      );

    resizeObserver.observe(
      map
    );

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  /*
   * ─────────────────────────────────────────
   * BUILD NORTH ISLAND DOT MATRIX
   * ─────────────────────────────────────────
   *
   * The SVG is never displayed.
   *
   * It is only used offscreen to determine
   * which regular grid dots are inside the North Island.
   */
  useEffect(() => {
    const {
      width,
      height,
    } = mapSize;

    if (
      width <= 0 ||
      height <= 0
    ) {
      return;
    }

    let cancelled =
      false;

    const buildGrid =
      async () => {
        setIsGridReady(
          false
        );

        const offscreen =
          document.createElement(
            "canvas"
          );

        offscreen.width =
          width;

        offscreen.height =
          height;

        const offCtx =
          offscreen.getContext(
            "2d",
            {
              willReadFrequently:
                true,
            }
          );

        if (!offCtx) {
          return;
        }

        const image =
          new Image();

        image.src =
          "/maps/north-island.svg";

        await new Promise<void>(
          (
            resolve,
            reject
          ) => {
            image.onload =
              () =>
                resolve();

            image.onerror =
              () =>
                reject(
                  new Error(
                    "Failed to load /maps/north-island.svg"
                  )
                );
          }
        );

        if (cancelled) {
          return;
        }

        offCtx.clearRect(
          0,
          0,
          width,
          height
        );

        offCtx.drawImage(
          image,
          0,
          0,
          width,
          height
        );

        const imageData =
          offCtx.getImageData(
            0,
            0,
            width,
            height
          ).data;

        const gridDots:
          GridDot[] = [];

        /*
         * Perfectly regular dot grid.
         */
        for (
          let y =
            GRID_SPACING /
            2;
          y < height;
          y +=
            GRID_SPACING
        ) {
          for (
            let x =
              GRID_SPACING /
              2;
            x < width;
            x +=
              GRID_SPACING
          ) {
            const alpha =
              getAlphaAtPixel(
                imageData,
                width,
                Math.round(
                  x
                ),
                Math.round(
                  y
                )
              );

            /*
             * Outside New Zealand.
             */
            if (
              alpha <= 30
            ) {
              continue;
            }

            const isCompletedArea =
              isInCompletedProjectArea(
                x,
                y,
                width,
                height
              );

            const seed =
              pseudoRandom(
                x *
                  0.137 +
                  y *
                    0.229
              );

            gridDots.push({
              x,
              y,
              isCompletedArea,

              phase:
                seed *
                Math.PI *
                2,

              noise:
                seed,
            });
          }
        }

        if (cancelled) {
          return;
        }

        gridDotsRef.current =
          gridDots;

        dotMotionRef.current =
          gridDots.map(
            () => ({
              scale: 1,
              velocity: 0,
            })
          );

        /*
         * Only restart here if the map
         * is already visible.
         */
        if (
          isVisible
        ) {
          revealStartRef.current =
            performance.now();
        }

        setIsGridReady(
          true
        );
      };

    buildGrid().catch(
      (error) => {
        if (
          !cancelled
        ) {
          console.error(
            "Failed to build NZ dot matrix:",
            error
          );
        }
      }
    );

    return () => {
      cancelled = true;
    };
  }, [
    mapSize.width,
    mapSize.height,
    isVisible,
  ]);

  /*
   * ─────────────────────────────────────────
   * CANVAS ANIMATION
   * ─────────────────────────────────────────
   */
  useEffect(() => {
    if (
      !isVisible ||
      !isGridReady
    ) {
      return;
    }

    const canvas =
      canvasRef.current;

    if (!canvas) {
      return;
    }

    const ctx =
      canvas.getContext(
        "2d"
      );

    if (!ctx) {
      return;
    }

    const render = (
      now: number
    ) => {
      const {
        width,
        height,
        dpr,
      } =
        dimensionsRef.current;

      if (
        width <= 0 ||
        height <= 0
      ) {
        animationRef.current =
          requestAnimationFrame(
            render
          );

        return;
      }

      /*
       * Smooth cursor.
       */
      const target =
        pointerTargetRef.current;

      let smooth =
        pointerSmoothRef.current;

      if (
        pointerInsideRef.current &&
        target
      ) {
        if (!smooth) {
          smooth = {
            ...target,
          };

          pointerSmoothRef.current =
            smooth;
        }

        smooth.x +=
          (
            target.x -
            smooth.x
          ) *
          POINTER_FOLLOW;

        smooth.y +=
          (
            target.y -
            smooth.y
          ) *
          POINTER_FOLLOW;
      }

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      ctx.globalCompositeOperation =
        "source-over";

      gridDotsRef.current.forEach(
        (
          dot,
          index
        ) => {
          const motion =
            dotMotionRef.current[
              index
            ];

          if (!motion) {
            return;
          }

          /*
           * ─────────────────────
           * SLOW DOT REVEAL
           * ─────────────────────
           *
           * North → South progression,
           * with enough irregularity that
           * it doesn't feel like a scanner.
           */
          const revealDelay =
            dot.y *
              REVEAL_VERTICAL_STAGGER +
            dot.noise *
              REVEAL_RANDOM_STAGGER;

          const elapsed =
            now -
            revealStartRef.current -
            revealDelay;

          const revealProgress =
            clamp(
              elapsed /
                REVEAL_DURATION,
              0,
              1
            );

          /*
           * Slightly softer than standard
           * cubic easing so dots remain
           * visibly "building" for longer.
           */
          const reveal =
            1 -
            Math.pow(
              1 -
                revealProgress,
              2.4
            );

          /*
           * ─────────────────────
           * CURSOR INTERACTION
           * ─────────────────────
           */
          let hover = 0;

          let distance = 0;

          if (
            pointerInsideRef.current &&
            smooth
          ) {
            distance =
              getDistance(
                dot.x,
                dot.y,
                smooth.x,
                smooth.y
              );

            hover =
              Math.exp(
                -(
                  distance *
                  distance
                ) /
                  (
                    2 *
                    HOVER_RADIUS *
                    HOVER_RADIUS
                  )
              );
          }

          const magnification =
            hover *
            HOVER_SCALE;

          /*
           * Local travelling size wave.
           *
           * Mouse affects SIZE only.
           * Colour never changes.
           */
          const wave =
            pointerInsideRef.current
              ? hover *
                (1 - hover) *
                4 *
                WAVE_SCALE *
                Math.sin(
                  now *
                    WAVE_SPEED -
                    distance *
                      WAVE_FREQUENCY +
                    dot.phase
                )
              : 0;

          const targetScale =
            clamp(
              1 +
                magnification +
                wave,
              1,
              MAX_SQUARE_SCALE
            );

          motion.velocity +=
            (
              targetScale -
              motion.scale
            ) *
            SPRING_STRENGTH;

          motion.velocity *=
            SPRING_DAMPING;

          motion.scale +=
            motion.velocity;

          /*
           * Spring motion can overshoot its target.
           * Clamp it so a fully expanded square is
           * never larger than the 8px grid spacing.
           */
          if (
            motion.scale >
            MAX_SQUARE_SCALE
          ) {
            motion.scale =
              MAX_SQUARE_SCALE;

            if (
              motion.velocity > 0
            ) {
              motion.velocity = 0;
            }
          } else if (
            motion.scale < 1
          ) {
            motion.scale = 1;

            if (
              motion.velocity < 0
            ) {
              motion.velocity = 0;
            }
          }

          const halfSize =
            BASE_HALF_SIZE *
            motion.scale *
            reveal;

          if (
            halfSize <
            0.04
          ) {
            return;
          }

          /*
           * Completed project areas are shown in SLINE red.
           * The rest of the country stays in a quiet neutral tone.
           */
          const colour =
            dot.isCompletedArea
              ? {
                  r: 211,
                  g: 35,
                  b: 41,
                  alpha: 1,
                }
              : {
                  r: 196,
                  g: 184,
                  b: 184,
                  alpha: 0.78,
                };

          ctx.fillStyle =
            `rgba(${colour.r}, ${colour.g}, ${colour.b}, ${colour.alpha})`;

          /*
           * Square matrix.
           *
           * At rest: 4 × 4px.
           * At maximum hover: 8 × 8px.
           * GRID_SPACING is also 8px, so neighbouring
           * squares just meet edge-to-edge at full size.
           */
          const side =
            halfSize * 2;

          ctx.fillRect(
            dot.x -
              halfSize,
            dot.y -
              halfSize,
            side,
            side
          );
        }
      );

      animationRef.current =
        requestAnimationFrame(
          render
        );
    };

    animationRef.current =
      requestAnimationFrame(
        render
      );

    return () => {
      if (
        animationRef.current !==
        null
      ) {
        cancelAnimationFrame(
          animationRef.current
        );

        animationRef.current =
          null;
      }
    };
  }, [
    isVisible,
    isGridReady,
  ]);

  const handlePointerMove = (
    event: ReactPointerEvent<HTMLDivElement>
  ) => {
    const rect =
      event.currentTarget.getBoundingClientRect();

    pointerInsideRef.current =
      true;

    pointerTargetRef.current = {
      x:
        event.clientX -
        rect.left,

      y:
        event.clientY -
        rect.top,
    };

    if (
      pointerSmoothRef.current ===
      null
    ) {
      pointerSmoothRef.current = {
        ...pointerTargetRef.current,
      };
    }
  };

  const handlePointerLeave =
    () => {
      pointerInsideRef.current =
        false;

      pointerTargetRef.current =
        null;

      pointerSmoothRef.current =
        null;
    };

  return (
    <section
      ref={sectionRef}
      id="coverage"
      className="overflow-hidden bg-[#fbfaf8] px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1540px] gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:items-center lg:gap-16">

        {/* Left */}
        <div>
          <div className="mb-5 flex items-center gap-4">
            <span className="h-[2px] w-10 bg-[#d32329]" />

            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#c42b31]">
              Beyond Auckland
            </p>
          </div>

          <h2 className="max-w-[680px] text-[clamp(2.8rem,5vw,5.5rem)] font-black uppercase leading-[0.9] tracking-[-0.055em] text-neutral-900">
            Auckland based.

            <span className="block text-[#d32329]">
              Working across the North Island.
            </span>
          </h2>

          <div className="mt-8 max-w-[640px] space-y-5 text-lg leading-8 text-neutral-600 sm:text-xl sm:leading-9">
            <p>
              SLINE is based in Auckland, with project experience across the North Island.
              We have delivered projects in Hamilton, Palmerston North and Tauranga,
              with teams, trucks and equipment able to mobilise for suitable projects
              beyond our home base.
            </p>

            <p className="text-base leading-7 text-neutral-500 sm:text-lg sm:leading-8">
              From asbestos removal and demolition through to earthworks,
              drainage, plumbing and All-in-One site services, our crews can be
              mobilised across the North Island to suit the requirements and scale
              of the project.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            <MapTag>Residential</MapTag>
            <MapTag>Commercial</MapTag>
            <MapTag>Industrial</MapTag>
            <MapTag>Public Sector</MapTag>
          </div>
          <div
            ref={projectCounterRef}
            className="mt-10 flex items-end gap-5 border-t border-[#dedbd6] pt-7"
          >
            <div
              className="min-w-[150px]"
              aria-label="2500 plus projects"
            >
              <div className="flex items-start text-[clamp(3.8rem,6vw,6.5rem)] font-black leading-[0.78] tracking-[-0.07em] text-[#c92229]">
                <span className="tabular-nums">
                  {displayedProjectCount}
                </span>

                <span className="ml-1 text-[0.52em] leading-none">
                  +
                </span>
              </div>
            </div>

            <div className="pb-1">
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-neutral-600">
                Projects
              </p>

              <p className="mt-1 max-w-[190px] text-sm leading-5 text-neutral-400">
                Projects delivered
              </p>
            </div>
          </div>

          <p className="mt-7 max-w-[520px] text-xs leading-6 text-neutral-400">
            Indicative project footprint only. Specific client and project
            locations are not displayed.
          </p>
        </div>

        {/* Dot-matrix New Zealand */}
        <div className="relative flex justify-center lg:justify-end">
          <div
            ref={mapRef}
            onPointerMove={
              handlePointerMove
            }
            onPointerLeave={
              handlePointerLeave
            }
            className="relative aspect-[58/85] w-full max-w-[700px] select-none touch-pan-y"
          >
            {/*
             * No underlying map.
             *
             * The regular dots themselves
             * form New Zealand.
             */}
            <canvas
              ref={canvasRef}
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden="true"
            />

            {/* Top label */}
            <div className="pointer-events-none absolute right-[3%] top-[7%] hidden sm:block">
              <p className="text-right text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-300">
                North Island
              </p>

              <p className="mt-1 text-right text-[9px] font-bold uppercase tracking-[0.22em] text-neutral-400">
                Delivery Experience
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


function MapTag({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <span className="relative pl-3 text-[10px] font-bold uppercase tracking-[0.15em] text-neutral-500">
      <span className="absolute left-0 top-1/2 h-[5px] w-[5px] -translate-y-1/2 bg-[#d32329]" />
      {children}
    </span>
  );
}

/*
 * ─────────────────────────────────────────────
 * COMPLETED PROJECT AREAS
 * ─────────────────────────────────────────────
 *
 * Converts each grid square into percentage-based map coordinates,
 * then checks the point against irregular polygons plus a handful of
 * small satellite cells around the edges of each city footprint.
 */
function isInCompletedProjectArea(
  x: number,
  y: number,
  width: number,
  height: number
) {
  const percentX =
    (x / width) * 100;

  const percentY =
    (y / height) * 100;

  return completedProjectAreas.some(
    (area) =>
      isPointInPolygon(
        percentX,
        percentY,
        area.polygon
      ) ||
      area.satellites.some(
        (satellite) =>
          Math.abs(
            percentX - satellite.x
          ) <= satellite.size &&
          Math.abs(
            percentY - satellite.y
          ) <= satellite.size
      )
  );
}

function isPointInPolygon(
  x: number,
  y: number,
  polygon: readonly (readonly [number, number])[]
) {
  let inside = false;

  for (
    let i = 0,
      j = polygon.length - 1;
    i < polygon.length;
    j = i++
  ) {
    const [xi, yi] = polygon[i];
    const [xj, yj] = polygon[j];

    const crosses =
      yi > y !== yj > y &&
      x <
        ((xj - xi) *
          (y - yi)) /
          (yj - yi) +
          xi;

    if (crosses) {
      inside = !inside;
    }
  }

  return inside;
}

/*
 * SVG alpha lookup.
 */
function getAlphaAtPixel(
  data: Uint8ClampedArray,
  width: number,
  x: number,
  y: number
) {
  const height =
    Math.floor(
      data.length /
        4 /
        width
    );

  const clampedX =
    Math.round(
      clamp(
        x,
        0,
        width - 1
      )
    );

  const clampedY =
    Math.round(
      clamp(
        y,
        0,
        height - 1
      )
    );

  const index =
    (
      clampedY *
        width +
      clampedX
    ) *
    4;

  return (
    data[
      index +
        3
    ] ??
    0
  );
}

function pseudoRandom(
  seed: number
) {
  const value =
    Math.sin(
      seed *
        12.9898
    ) *
    43758.5453;

  return (
    value -
    Math.floor(
      value
    )
  );
}

function getDistance(
  x1: number,
  y1: number,
  x2: number,
  y2: number
) {
  const dx =
    x1 -
    x2;

  const dy =
    y1 -
    y2;

  return Math.sqrt(
    dx *
      dx +
      dy *
        dy
  );
}

function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(
    max,
    Math.max(
      min,
      value
    )
  );
}