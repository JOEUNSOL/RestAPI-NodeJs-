let request = require('request')
let cheerio = require('cheerio')


const $url = 'http://openapi.gbis.go.kr/ws/rest/busarrivalservice/station';
const $KEY = 'xzeeTTDBPHLSbBcCp%2FwTJiuMNFYfKuHcJMDvTyXpN2hOXQsiLa%2BOGqVMlVeHTUfem%2FZAstNI10KEzjUdN9Xf%2FA%3D%3D';
keyword = '1'

count = 0
city = []
routeId = []
ArrNum = 0
const $api_url = $url + '?serviceKey=' + $KEY + '&=' + keyword


console.log($api_url)


/* 해당 URL으로 요청*/

        
        
request($api_url,function(err,res,body){
        for (step = 0 ; step <5; step++){
            count += 1
            keyword = count
            console.log('==========================================================')
            console.log(`keyword :  ${keyword}`)
            $ = cheerio.load(body);
            $('busRouteList').each(function(idx){
            let no1 = $(this).find('routeName').text();
            let no2 = $(this).find('routeId').text();
            let no3 = $(this).find('regionName').text();
            console.log(`버스번호: ${no1}, 노선ID: ${no2}  지역이름: ${no3} ` )

            if (no3 == '고양'){
                ArrNum++
                city[ArrNum] = no3
                routeId[ArrNum] = no2
                console.log('=========================================================================')
                console.log(`${city}지역 : ${routeId}노선ID `)
            }
        
    });
    };
});


