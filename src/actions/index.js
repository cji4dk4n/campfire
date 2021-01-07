import combineActions from '../utils/combineActions'

const path = require.context('./', false, /\.js$/)
const actions = combineActions(path)

export default actions