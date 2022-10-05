import { getPercentage, getDiagonalOfSquare } from '@/utils/calculation'

const getOffset = (size) => size / 4
const getBorderSize = (size) => getPercentage(7.5, size)
const getDiagonalSize = (size) =>
  getDiagonalOfSquare(size) + getDiagonalOfSquare(getBorderSize(size)) * 2
const getIconSize = (size) => getDiagonalOfSquare(size) + Math.round(getBorderSize(size))

export const getStyleVariables = (size, color) => ({
  '--icon-offset': `-${getOffset(size)}px`,
  '--icon-size': `${getIconSize(size)}px`,
  '--size': `${size}px`,
  '--border-size': `${getBorderSize(size)}px`,
  '--diagonal-size': `${getDiagonalSize(size)}px`,
  '--background-color': color
})
