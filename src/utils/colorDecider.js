const colors = ['', 'red', 'yellow', 'blue', 'green', 'purple', 'orange']
const baseClassName = 'decorator--'

const colorDecider = key =>
  `${baseClassName}${colors.length <= key || !key ? colors[1] : colors[key]}`

export default colorDecider
