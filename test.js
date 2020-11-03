let request = require('request')
let cheerio = require('cheerio')

stationId = '20224'
const $url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station';
const $KEY = 'xzeeTTDBPHLSbBcCp%2FwTJiuMNFYfKuHcJMDvTyXpN2hOXQsiLa%2BOGqVMlVeHTUfem%2FZAstNI10KEzjUdN9Xf%2FA%3D%3D';
const $api_url = $url + '?serviceKey=' + $KEY + '&stationId=' + stationId

console.log($api_url)


request($api_url,function(err,res,body){
         
        $ = cheerio.load(body);
        $('msgHeader').each(function(idx){
        let no1 = $(this).find('resultMessage').text();
        
        
        console.log(`${no1}:  결과`)
   
   })
})
