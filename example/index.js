const {compare} = require('../dist/index');

// console.log(compare('1.1.1', '1.0.0'))
// console.log(compare('1.0.0', '1.0.1'))
// console.log(compare('20.23.24', '20.23.24.20190926'))
// console.log(compare('20.23.24.20190927', '20.23.24.20190926'))
// console.log(compare('20.23.24.20190927_base', '20.23.24.20190927'))
// console.log(compare('20.23.24.20190927', '20.23.24.20190927_base'))
// console.log(compare('20.23.24.20190927_base', '20.23.24.20190927_alpha'))
// console.log(compare('20.23.24.20190927_beta', '20.23.24.20190927_alpha'))
// console.log(compare('20.23.24.20190927_beta', '20.23.24.20190927_rc'))
console.log(compare('20.23.24.20190927_rc', '20.23.24.20190927_release'))
// console.log(compare)