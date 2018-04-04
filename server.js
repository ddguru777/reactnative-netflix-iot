
//*******************************************************************************
// Thatherflix is an Software Open Source Project CC2017-Present
// Licence and other public affairs go to README.md, Changelog.md & Licence
//*******************************************************************************


/*
Please here add the emails of all the collabs who wrote code here or changed the webpack config.
Anyone must write his or her name in this lines, and comment any changes.  

Thanks.
-----

- Felipe - Founder : felipe@nodeio.us
-
-
-
-


*/


// starting the coding - main server file.


// var config = require('./webpack.config.js')
// if (!process.env.NODE_ENV) {
// process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
// process.noDeprecation = true
// }




const express = require('express');

// creation of the app using express .
const app = express();

app.set('port', process.env.PORT || 3000)

app.use(express.static('public'));


// in case the port is blocked or something.
// const find = require('find-process')

// const PORT = 3000

// find('port', PORT)
// .then((list) => {
//   console.log(`Port "${PORT}" is blocked. Killing blocking applications...`)
//   const processIds = list.map((item) => item.pid)
//   processIds.forEach((pid) => process.kill(pid, 10))
// })
// end 


app.listen(app.get('port'), function () {
  console.log(`Server is up, on port ${app.get('port')}`);
});


