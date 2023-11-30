const baseURL = import.meta.url;

interface ImageInterface {
  [key: string]: string;
}

const DAY_ICONS: ImageInterface = {
  day1: new URL("./day-1.png", baseURL).href,
  day2: new URL("./day-2.png", baseURL).href,
  day3: new URL("./day-3.png", baseURL).href,
  day4: new URL("./day-4.png", baseURL).href,
  day5: new URL("./day-5.png", baseURL).href,
  day6: new URL("./day-6.png", baseURL).href,
  day7: new URL("./day-7.png", baseURL).href,
  day8: new URL("./day-8.png", baseURL).href,
  day9: new URL("./day-9.png", baseURL).href,
  day10: new URL("./day-10.png", baseURL).href,
  day11: new URL("./day-11.png", baseURL).href,
  day12: new URL("./day-12.png", baseURL).href,
  day13: new URL("./day-13.png", baseURL).href,
  day14: new URL("./day-14.png", baseURL).href,
  day15: new URL("./day-15.png", baseURL).href,
  day16: new URL("./day-16.png", baseURL).href,
  day17: new URL("./day-17.png", baseURL).href,
  day18: new URL("./day-18.png", baseURL).href,
  day19: new URL("./day-19.png", baseURL).href,
  day20: new URL("./day-20.png", baseURL).href,
  day21: new URL("./day-21.png", baseURL).href,
  day22: new URL("./day-22.png", baseURL).href,
  day23: new URL("./day-23.png", baseURL).href,
  day24: new URL("./day-24.png", baseURL).href,
  christmasPresent: new URL("./christmas_present.png", baseURL).href,
  christmasTree: new URL("./christmas_tree.png", baseURL).href,
  icy: new URL("./icy.jpg", baseURL).href,
};

const IMAGES = {
  calendarLogo: new URL("./calendar-logo.png", baseURL).href,
};

export { DAY_ICONS, IMAGES };
