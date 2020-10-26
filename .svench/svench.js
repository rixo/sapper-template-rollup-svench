import { start } from 'svench'

import * as ui from 'svench/src/app/index.js'

import 'svench/themes/default.css.js'
import 'svench/themes/default-markdown.css.js'

start({ ui }, import.meta.hot)
