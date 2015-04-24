var p = require('./index')

p.pingAsync('www.gioyik.com', function(e, mms){
	  console.log('Time: '+mms);
});

