module.exports = function type (stream) {
  switch (argument.length) {
    case 1: return 'sink'
    case 2: return 'source'
    default: return null
  }
}