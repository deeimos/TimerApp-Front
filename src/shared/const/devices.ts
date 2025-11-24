export const sizes = {
  mobileMd: 560,
  mobileSm: 512,
  mobile: 768,
  tablet: 991,
  minLaptop: 1119,
}

export const device = {
  mobileSm: `(max-width: ${sizes.mobileSm}px)`,
  mobile: `(max-width: ${sizes.mobile}px)`,
  tablet: `(max-width: ${sizes.tablet}px) and (min-width: ${sizes.mobile}px)`,
  minLaptop: `(max-width: ${sizes.minLaptop}px) and (min-width: ${sizes.tablet}px)`,
};
