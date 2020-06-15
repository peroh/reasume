export const getFactor = (multiplier: number, matches: any, factors: any) => {
  if (matches.mobile) {
    return factors.mobile * multiplier;
  } else if (matches.desktop) {
    return factors.desktop * multiplier;
  } else {
    return factors.tablet * multiplier;
  }
}
