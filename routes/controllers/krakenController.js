/**
 * Created by Vitali Dettling on 3/14/17.
 */

var kraken = require('../clients/kraken');

//TODO: Check whether debug or development environment.
var auth = require('../../.del/config')
//var auth = require('../config')

var krakenClient = new kraken(auth.credentials.api_key, auth.credentials.api_secret);

/**
 * Get Ticker Info
 * @param  {Function} callback A callback function to be executed when the request is complete
 * @return {Object}            The request object
 */
function ticker (callback){   
    krakenClient.api('Ticker', {"pair": 'XXBTZUSD'}, callback)
};

module.exports.ticker = ticker;



//TODO: Not working yet!
// Display user's balance
/*kraken.api('Balance', null, function(error, data) {
    if(error) {
        console.log(error);
    }
    else {
        console.log(data.result);
    }
});*/
