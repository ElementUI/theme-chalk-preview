import color from 'css-color-function'
import formula from './formula.json'

const generateColors = primary => {
  let colors = {}

  Object.keys(formula).forEach(key => {
    const value = formula[key].replace(/primary/g, primary)
    colors[key] = color.convert(value)
  })
  return colors
}

export default generateColors
