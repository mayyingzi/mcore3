/**
 *
 * example
 * @author vfasky <vfasky@gmail.com>
 **/
"use strict";

import $ from 'jquery';
import mcore from 'mcore3';

let app = new mcore.App($('#main'));

app.route('/table', require('./view/table.es6').default)
   .route('/', require('./view/index.es6').default)
   .run();
