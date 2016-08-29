(function () {
    angular.module('podoc.controllers').controller('logCtrl', logCtrl);
    /* @ng-inject */
    function logCtrl($scope, $window, $ajax, $state) {

        // var redirectUrl = 'http://localhost:9000/google';
        //
        // $window.login = function (user) {
        //     console.log(user)
        // };
        //
        // $scope.googleLogin = function () {
        //     var id = '233931398903-qnacc63u3bu177pd5slv49abhkb6el5c.apps.googleusercontent.com';
        //     window.open('https://accounts.google.com/o/oauth2/auth?client_id=' + id + '&redirect_uri=' +
        //         redirectUrl + '&scope=openid email profile https://www.googleapis.com/auth/userinfo.email&approval_prompt=force&response_type=code&access_type=offline', '_blank', 'location=no');
        // };


        var words = [{
            "pokemonSize": 37944,
            "trainerSize": 104,
            "longName": "Seoul",
            "shortName": "Seoul"
        }, {
            "pokemonSize": 373854,
            "trainerSize": 913,
            "longName": "South Korea",
            "shortName": "KR"
        }, {
            "pokemonSize": 876,
            "trainerSize": 1,
            "longName": "Point Cook",
            "shortName": "Point Cook"
        }, {
            "pokemonSize": 876,
            "trainerSize": 1,
            "longName": "Wyndham City",
            "shortName": "Wyndham"
        }, {"pokemonSize": 5413, "trainerSize": 12, "longName": "Victoria", "shortName": "VIC"}, {
            "pokemonSize": 36195,
            "trainerSize": 79,
            "longName": "Australia",
            "shortName": "AU"
        }, {"pokemonSize": 876, "trainerSize": 1, "longName": "3030", "shortName": "3030"}, {
            "pokemonSize": 123829,
            "trainerSize": 241,
            "longName": "Sokcho-si",
            "shortName": "Sokcho-si"
        }, {
            "pokemonSize": 177159,
            "trainerSize": 394,
            "longName": "Gangwon-do",
            "shortName": "Gangwon-do"
        }, {
            "pokemonSize": 15442,
            "trainerSize": 47,
            "longName": "Chuncheon-si",
            "shortName": "Chuncheon-si"
        }, {"pokemonSize": 63826, "trainerSize": 130, "longName": "Ulsan", "shortName": "Ulsan"}, {
            "pokemonSize": 19387,
            "trainerSize": 31,
            "longName": "New York",
            "shortName": "New York"
        }, {"pokemonSize": 19387, "trainerSize": 31, "longName": "New York", "shortName": "NY"}, {
            "pokemonSize": 62265,
            "trainerSize": 125,
            "longName": "United States",
            "shortName": "US"
        }, {"pokemonSize": 6180, "trainerSize": 12, "longName": "Hanoi", "shortName": "Hanoi"}, {
            "pokemonSize": 9222,
            "trainerSize": 16,
            "longName": "Hoàn Kiếm",
            "shortName": "Hoàn Kiếm"
        }, {"pokemonSize": 7006, "trainerSize": 13, "longName": "Hanoi", "shortName": "Hanoi"}, {
            "pokemonSize": 16951,
            "trainerSize": 44,
            "longName": "Vietnam",
            "shortName": "VN"
        }, {
            "pokemonSize": 6077,
            "trainerSize": 17,
            "longName": "Daejeon",
            "shortName": "Daejeon"
        }, {
            "pokemonSize": 14172,
            "trainerSize": 40,
            "longName": "Yangyang-gun",
            "shortName": "Yangyang-gun"
        }, {"pokemonSize": 521, "trainerSize": 1, "longName": "Madrid", "shortName": "Madrid"}, {
            "pokemonSize": 521,
            "trainerSize": 1,
            "longName": "Madrid",
            "shortName": "Madrid"
        }, {
            "pokemonSize": 521,
            "trainerSize": 1,
            "longName": "Área Metropolitalitana y Corredor del Henares",
            "shortName": "Área Metropolitalitana y Corredor del Henares"
        }, {"pokemonSize": 521, "trainerSize": 1, "longName": "Madrid", "shortName": "M"}, {
            "pokemonSize": 521,
            "trainerSize": 1,
            "longName": "Community of Madrid",
            "shortName": "Community of Madrid"
        }, {"pokemonSize": 1740, "trainerSize": 5, "longName": "Spain", "shortName": "ES"}, {
            "pokemonSize": 1183,
            "trainerSize": 3,
            "longName": "Frankfurt",
            "shortName": "Frankfurt"
        }, {"pokemonSize": 1183, "trainerSize": 3, "longName": "Darmstadt", "shortName": "DA"}, {
            "pokemonSize": 1183,
            "trainerSize": 3,
            "longName": "Hesse",
            "shortName": "HE"
        }, {"pokemonSize": 5504, "trainerSize": 13, "longName": "Germany", "shortName": "DE"}, {
            "pokemonSize": 1200,
            "trainerSize": 1,
            "longName": "Žilina",
            "shortName": "Žilina"
        }, {
            "pokemonSize": 1200,
            "trainerSize": 1,
            "longName": "Žilina District",
            "shortName": "Žilina District"
        }, {
            "pokemonSize": 1200,
            "trainerSize": 1,
            "longName": "Žilina Region",
            "shortName": "Žilina Region"
        }, {"pokemonSize": 1668, "trainerSize": 3, "longName": "Slovakia", "shortName": "SK"}, {
            "pokemonSize": 1830,
            "trainerSize": 2,
            "longName": "Cupertino",
            "shortName": "Cupertino"
        }, {
            "pokemonSize": 2862,
            "trainerSize": 5,
            "longName": "Santa Clara County",
            "shortName": "Santa Clara County"
        }, {"pokemonSize": 17057, "trainerSize": 36, "longName": "California", "shortName": "CA"}, {
            "pokemonSize": 9483,
            "trainerSize": 19,
            "longName": "Taito",
            "shortName": "Taito"
        }, {"pokemonSize": 42108, "trainerSize": 76, "longName": "Tokyo", "shortName": "Tokyo"}, {
            "pokemonSize": 76403,
            "trainerSize": 166,
            "longName": "Japan",
            "shortName": "JP"
        }, {"pokemonSize": 950, "trainerSize": 2, "longName": "Kasuga", "shortName": "Kasuga"}, {
            "pokemonSize": 4967,
            "trainerSize": 7,
            "longName": "Fukuoka Prefecture",
            "shortName": "Fukuoka Prefecture"
        }, {
            "pokemonSize": 1552,
            "trainerSize": 6,
            "longName": "Suwon-si",
            "shortName": "Suwon-si"
        }, {
            "pokemonSize": 35083,
            "trainerSize": 100,
            "longName": "Gyeonggi-do",
            "shortName": "Gyeonggi-do"
        }, {"pokemonSize": 296, "trainerSize": 1, "longName": "Gwangju", "shortName": "Gwangju"}, {
            "pokemonSize": 106,
            "trainerSize": 1,
            "longName": "Kelowna",
            "shortName": "Kelowna"
        }, {
            "pokemonSize": 106,
            "trainerSize": 1,
            "longName": "Central Okanagan",
            "shortName": "Central Okanagan"
        }, {
            "pokemonSize": 1689,
            "trainerSize": 6,
            "longName": "British Columbia",
            "shortName": "BC"
        }, {"pokemonSize": 5432, "trainerSize": 20, "longName": "Canada", "shortName": "CA"}, {
            "pokemonSize": 379,
            "trainerSize": 2,
            "longName": "Chungju-si",
            "shortName": "Chungju-si"
        }, {
            "pokemonSize": 3664,
            "trainerSize": 8,
            "longName": "Chungcheongbuk-do",
            "shortName": "Chungcheongbuk-do"
        }, {"pokemonSize": 57, "trainerSize": 1, "longName": "Wynnewood", "shortName": "Wynnewood"}, {
            "pokemonSize": 57,
            "trainerSize": 1,
            "longName": "Lower Merion Township",
            "shortName": "Lower Merion Township"
        }, {
            "pokemonSize": 551,
            "trainerSize": 2,
            "longName": "Montgomery County",
            "shortName": "Montgomery County"
        }, {"pokemonSize": 217, "trainerSize": 2, "longName": "Pennsylvania", "shortName": "PA"}, {
            "pokemonSize": 22012,
            "trainerSize": 67,
            "longName": "Busan",
            "shortName": "Busan"
        }, {
            "pokemonSize": 12897,
            "trainerSize": 33,
            "longName": "Singapore",
            "shortName": "Singapore"
        }, {"pokemonSize": 12897, "trainerSize": 33, "longName": "Singapore", "shortName": "SG"}, {
            "pokemonSize": 439,
            "trainerSize": 1,
            "longName": "Gimcheon-si",
            "shortName": "Gimcheon-si"
        }, {
            "pokemonSize": 10333,
            "trainerSize": 24,
            "longName": "Gyeongsangbuk-do",
            "shortName": "Gyeongsangbuk-do"
        }, {"pokemonSize": 2520, "trainerSize": 11, "longName": "Daegu", "shortName": "Daegu"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Oceanside",
            "shortName": "Oceanside"
        }, {
            "pokemonSize": 1047,
            "trainerSize": 1,
            "longName": "San Diego County",
            "shortName": "San Diego County"
        }, {
            "pokemonSize": 786,
            "trainerSize": 2,
            "longName": "Cheongju-si",
            "shortName": "Cheongju-si"
        }, {"pokemonSize": 2033, "trainerSize": 1, "longName": "Anaheim", "shortName": "Anaheim"}, {
            "pokemonSize": 5264,
            "trainerSize": 5,
            "longName": "Orange County",
            "shortName": "Orange County"
        }, {
            "pokemonSize": 371,
            "trainerSize": 1,
            "longName": "North Strathfield",
            "shortName": "North Strathfield"
        }, {
            "pokemonSize": 3462,
            "trainerSize": 4,
            "longName": "City of Canada Bay Council",
            "shortName": "Canada Bay"
        }, {
            "pokemonSize": 20220,
            "trainerSize": 46,
            "longName": "New South Wales",
            "shortName": "NSW"
        }, {"pokemonSize": 371, "trainerSize": 1, "longName": "2137", "shortName": "2137"}, {
            "pokemonSize": 4946,
            "trainerSize": 9,
            "longName": "Auckland",
            "shortName": "Auckland"
        }, {
            "pokemonSize": 5257,
            "trainerSize": 10,
            "longName": "Auckland",
            "shortName": "Auckland"
        }, {
            "pokemonSize": 5257,
            "trainerSize": 10,
            "longName": "Auckland",
            "shortName": "Auckland"
        }, {"pokemonSize": 11889, "trainerSize": 19, "longName": "New Zealand", "shortName": "NZ"}, {
            "pokemonSize": 710,
            "trainerSize": 4,
            "longName": "Pohang-si",
            "shortName": "Pohang-si"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Chuo Ward",
            "shortName": "Chuo Ward"
        }, {"pokemonSize": 1557, "trainerSize": 5, "longName": "Chiba", "shortName": "Chiba"}, {
            "pokemonSize": 4166,
            "trainerSize": 12,
            "longName": "Chiba Prefecture",
            "shortName": "Chiba Prefecture"
        }, {"pokemonSize": 3358, "trainerSize": 7, "longName": "Shibuya", "shortName": "Shibuya"}, {
            "pokemonSize": 3417,
            "trainerSize": 9,
            "longName": "Rome",
            "shortName": "Rome"
        }, {"pokemonSize": 3417, "trainerSize": 9, "longName": "Rome", "shortName": "Rome"}, {
            "pokemonSize": 3673,
            "trainerSize": 10,
            "longName": "Metropolitan City of Rome",
            "shortName": "RM"
        }, {"pokemonSize": 3673, "trainerSize": 10, "longName": "Lazio", "shortName": "Lazio"}, {
            "pokemonSize": 5961,
            "trainerSize": 16,
            "longName": "Italy",
            "shortName": "IT"
        }, {
            "pokemonSize": 7436,
            "trainerSize": 20,
            "longName": "Ho Chi Minh City",
            "shortName": "Ho Chi Minh City"
        }, {
            "pokemonSize": 7436,
            "trainerSize": 20,
            "longName": "Ho Chi Minh",
            "shortName": "Ho Chi Minh"
        }, {"pokemonSize": 8094, "trainerSize": 21, "longName": "70000", "shortName": "70000"}, {
            "pokemonSize": 8142,
            "trainerSize": 27,
            "longName": "Incheon",
            "shortName": "Incheon"
        }, {
            "pokemonSize": 2850,
            "trainerSize": 8,
            "longName": "Yongin-si",
            "shortName": "Yongin-si"
        }, {
            "pokemonSize": 883,
            "trainerSize": 5,
            "longName": "Anyang-si",
            "shortName": "Anyang-si"
        }, {"pokemonSize": 290, "trainerSize": 1, "longName": "Ota", "shortName": "Ota"}, {
            "pokemonSize": 323,
            "trainerSize": 1,
            "longName": "El Camino Village",
            "shortName": "El Camino Village"
        }, {
            "pokemonSize": 4935,
            "trainerSize": 15,
            "longName": "Los Angeles County",
            "shortName": "Los Angeles County"
        }, {
            "pokemonSize": 1219,
            "trainerSize": 4,
            "longName": "Barcelona",
            "shortName": "Barcelona"
        }, {
            "pokemonSize": 1219,
            "trainerSize": 4,
            "longName": "Barcelona",
            "shortName": "Barcelona"
        }, {
            "pokemonSize": 1219,
            "trainerSize": 4,
            "longName": "El Barcelonès",
            "shortName": "El Barcelonès"
        }, {
            "pokemonSize": 1219,
            "trainerSize": 4,
            "longName": "Barcelona",
            "shortName": "Barcelona"
        }, {"pokemonSize": 1219, "trainerSize": 4, "longName": "Catalonia", "shortName": "CT"}, {
            "pokemonSize": 5822,
            "trainerSize": 15,
            "longName": "Sydney",
            "shortName": "Sydney"
        }, {"pokemonSize": 9973, "trainerSize": 21, "longName": "2000", "shortName": "2000"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Naka Ward",
            "shortName": "Naka Ward"
        }, {"pokemonSize": 269, "trainerSize": 1, "longName": "Okayama", "shortName": "Okayama"}, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Okayama Prefecture",
            "shortName": "Okayama Prefecture"
        }, {"pokemonSize": 792, "trainerSize": 4, "longName": "Amman", "shortName": "Amman"}, {
            "pokemonSize": 792,
            "trainerSize": 4,
            "longName": "Amman Governorate",
            "shortName": "Amman Governorate"
        }, {"pokemonSize": 792, "trainerSize": 4, "longName": "Jordan", "shortName": "JO"}, {
            "pokemonSize": 2092,
            "trainerSize": 4,
            "longName": "Lyon",
            "shortName": "Lyon"
        }, {"pokemonSize": 2092, "trainerSize": 4, "longName": "Rhône", "shortName": "Rhône"}, {
            "pokemonSize": 2092,
            "trainerSize": 4,
            "longName": "Auvergne-Rhône-Alpes",
            "shortName": "Auvergne-Rhône-Alpes"
        }, {"pokemonSize": 4353, "trainerSize": 7, "longName": "France", "shortName": "FR"}, {
            "pokemonSize": 3520,
            "trainerSize": 8,
            "longName": "Ulleung-gun",
            "shortName": "Ulleung-gun"
        }, {"pokemonSize": 3159, "trainerSize": 6, "longName": "Makati", "shortName": "Makati"}, {
            "pokemonSize": 8326,
            "trainerSize": 17,
            "longName": "Metro Manila",
            "shortName": "NCR"
        }, {
            "pokemonSize": 21231,
            "trainerSize": 51,
            "longName": "Philippines",
            "shortName": "PH"
        }, {
            "pokemonSize": 5095,
            "trainerSize": 5,
            "longName": "Brisbane City",
            "shortName": "Brisbane City"
        }, {
            "pokemonSize": 6571,
            "trainerSize": 10,
            "longName": "Brisbane City",
            "shortName": "Brisbane"
        }, {"pokemonSize": 9831, "trainerSize": 14, "longName": "Queensland", "shortName": "QLD"}, {
            "pokemonSize": 5095,
            "trainerSize": 5,
            "longName": "4000",
            "shortName": "4000"
        }, {"pokemonSize": 404, "trainerSize": 1, "longName": "Onna", "shortName": "Onna"}, {
            "pokemonSize": 404,
            "trainerSize": 1,
            "longName": "Kunigami District",
            "shortName": "Kunigami District"
        }, {
            "pokemonSize": 1511,
            "trainerSize": 6,
            "longName": "Okinawa Prefecture",
            "shortName": "Okinawa Prefecture"
        }, {"pokemonSize": 564, "trainerSize": 1, "longName": "Ta Sit", "shortName": "ต.ตาสิทธิ์"}, {
            "pokemonSize": 564,
            "trainerSize": 1,
            "longName": "Pluak Daeng District",
            "shortName": "อ.ปลวกแดง"
        }, {"pokemonSize": 574, "trainerSize": 2, "longName": "Rayong", "shortName": "จ.ระยอง"}, {
            "pokemonSize": 19155,
            "trainerSize": 41,
            "longName": "Thailand",
            "shortName": "TH"
        }, {
            "pokemonSize": 704,
            "trainerSize": 1,
            "longName": "Sinan-gun",
            "shortName": "Sinan-gun"
        }, {
            "pokemonSize": 3704,
            "trainerSize": 9,
            "longName": "Jeollanam-do",
            "shortName": "Jeollanam-do"
        }, {
            "pokemonSize": 332,
            "trainerSize": 1,
            "longName": "Ichikawa",
            "shortName": "Ichikawa"
        }, {
            "pokemonSize": 4018,
            "trainerSize": 6,
            "longName": "Hong Kong",
            "shortName": "Hong Kong"
        }, {"pokemonSize": 4018, "trainerSize": 6, "longName": "Hong Kong", "shortName": "HK"}, {
            "pokemonSize": 299,
            "trainerSize": 1,
            "longName": "Gyeongju-si",
            "shortName": "Gyeongju-si"
        }, {
            "pokemonSize": 390,
            "trainerSize": 2,
            "longName": "Washington",
            "shortName": "Washington"
        }, {
            "pokemonSize": 986,
            "trainerSize": 3,
            "longName": "District of Columbia",
            "shortName": "District of Columbia"
        }, {
            "pokemonSize": 390,
            "trainerSize": 2,
            "longName": "District of Columbia",
            "shortName": "DC"
        }, {
            "pokemonSize": 881,
            "trainerSize": 2,
            "longName": "Kaohsiung",
            "shortName": "Kaohsiung"
        }, {"pokemonSize": 881, "trainerSize": 2, "longName": "龍子里", "shortName": "龍子里"}, {
            "pokemonSize": 881,
            "trainerSize": 2,
            "longName": "Gushan District",
            "shortName": "Gushan District"
        }, {
            "pokemonSize": 881,
            "trainerSize": 2,
            "longName": "Kaohsiung City",
            "shortName": "Kaohsiung City"
        }, {"pokemonSize": 10135, "trainerSize": 26, "longName": "Taiwan", "shortName": "TW"}, {
            "pokemonSize": 1321,
            "trainerSize": 1,
            "longName": "Raleigh",
            "shortName": "Raleigh"
        }, {
            "pokemonSize": 2067,
            "trainerSize": 3,
            "longName": "Wake County",
            "shortName": "Wake County"
        }, {
            "pokemonSize": 2067,
            "trainerSize": 3,
            "longName": "North Carolina",
            "shortName": "NC"
        }, {"pokemonSize": 396, "trainerSize": 1, "longName": "Chitose", "shortName": "Chitose"}, {
            "pokemonSize": 4057,
            "trainerSize": 6,
            "longName": "Hokkaido Prefecture",
            "shortName": "Hokkaido Prefecture"
        }, {"pokemonSize": 208, "trainerSize": 1, "longName": "Otaru", "shortName": "Otaru"}, {
            "pokemonSize": 697,
            "trainerSize": 2,
            "longName": "Las Pinas",
            "shortName": "Las Pinas"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Docklands",
            "shortName": "Docklands"
        }, {
            "pokemonSize": 1281,
            "trainerSize": 2,
            "longName": "Melbourne City",
            "shortName": "Melbourne"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "3008", "shortName": "3008"}, {
            "pokemonSize": 1391,
            "trainerSize": 2,
            "longName": "Nishitokyo",
            "shortName": "Nishitokyo"
        }, {"pokemonSize": 11492, "trainerSize": 23, "longName": "Bangkok", "shortName": "กทม"}, {
            "pokemonSize": 2820,
            "trainerSize": 5,
            "longName": "Robbinsdale",
            "shortName": "Robbinsdale"
        }, {
            "pokemonSize": 3416,
            "trainerSize": 6,
            "longName": "Hennepin County",
            "shortName": "Hennepin County"
        }, {"pokemonSize": 2895, "trainerSize": 6, "longName": "Minnesota", "shortName": "MN"}, {
            "pokemonSize": 180,
            "trainerSize": 1,
            "longName": "Tainan",
            "shortName": "Tainan"
        }, {"pokemonSize": 2031, "trainerSize": 3, "longName": "大學里", "shortName": "大學里"}, {
            "pokemonSize": 2667,
            "trainerSize": 7,
            "longName": "East District",
            "shortName": "East District"
        }, {
            "pokemonSize": 2031,
            "trainerSize": 3,
            "longName": "Tainan City",
            "shortName": "Tainan City"
        }, {"pokemonSize": 2268, "trainerSize": 3, "longName": "Taguig", "shortName": "Taguig"}, {
            "pokemonSize": 1056,
            "trainerSize": 1,
            "longName": "Tel Aviv-Yafo",
            "shortName": "Tel Aviv-Yafo"
        }, {
            "pokemonSize": 1056,
            "trainerSize": 1,
            "longName": "Tel Aviv District",
            "shortName": "Tel Aviv District"
        }, {"pokemonSize": 1310, "trainerSize": 2, "longName": "Israel", "shortName": "IL"}, {
            "pokemonSize": 1484,
            "trainerSize": 2,
            "longName": "San Jose del Monte City",
            "shortName": "CSJDM"
        }, {"pokemonSize": 1484, "trainerSize": 2, "longName": "Bulacan", "shortName": "Bulacan"}, {
            "pokemonSize": 3498,
            "trainerSize": 8,
            "longName": "Central Luzon",
            "shortName": "Central Luzon"
        }, {"pokemonSize": 1484, "trainerSize": 2, "longName": "3023", "shortName": "3023"}, {
            "pokemonSize": 338,
            "trainerSize": 1,
            "longName": "Karlsruhe",
            "shortName": "Karlsruhe"
        }, {"pokemonSize": 338, "trainerSize": 1, "longName": "Karlsruhe", "shortName": "KA"}, {
            "pokemonSize": 338,
            "trainerSize": 1,
            "longName": "Baden-Württemberg",
            "shortName": "BW"
        }, {
            "pokemonSize": 1738,
            "trainerSize": 5,
            "longName": "Gangneung-si",
            "shortName": "Gangneung-si"
        }, {"pokemonSize": 961, "trainerSize": 3, "longName": "Wonju-si", "shortName": "Wonju-si"}, {
            "pokemonSize": 816,
            "trainerSize": 1,
            "longName": "Cheongsong-gun",
            "shortName": "Cheongsong-gun"
        }, {
            "pokemonSize": 311,
            "trainerSize": 1,
            "longName": "Takanini",
            "shortName": "Takanini"
        }, {
            "pokemonSize": 5160,
            "trainerSize": 8,
            "longName": "Shinjuku",
            "shortName": "Shinjuku"
        }, {
            "pokemonSize": 965,
            "trainerSize": 5,
            "longName": "Ansan-si",
            "shortName": "Ansan-si"
        }, {"pokemonSize": 1693, "trainerSize": 4, "longName": "Nagoya", "shortName": "Nagoya"}, {
            "pokemonSize": 2459,
            "trainerSize": 8,
            "longName": "Aichi Prefecture",
            "shortName": "Aichi Prefecture"
        }, {
            "pokemonSize": 2344,
            "trainerSize": 7,
            "longName": "Cebu City",
            "shortName": "Cebu City"
        }, {"pokemonSize": 6242, "trainerSize": 17, "longName": "Cebu", "shortName": "Cebu"}, {
            "pokemonSize": 6715,
            "trainerSize": 17,
            "longName": "Central Visayas",
            "shortName": "Central Visayas"
        }, {"pokemonSize": 2344, "trainerSize": 7, "longName": "6000", "shortName": "6000"}, {
            "pokemonSize": 1788,
            "trainerSize": 1,
            "longName": "Noida",
            "shortName": "Noida"
        }, {
            "pokemonSize": 1788,
            "trainerSize": 1,
            "longName": "Gautam Buddh Nagar",
            "shortName": "Gautam Buddh Nagar"
        }, {
            "pokemonSize": 1788,
            "trainerSize": 1,
            "longName": "Uttar Pradesh",
            "shortName": "UP"
        }, {"pokemonSize": 1961, "trainerSize": 2, "longName": "India", "shortName": "IN"}, {
            "pokemonSize": 1788,
            "trainerSize": 1,
            "longName": "201301",
            "shortName": "201301"
        }, {"pokemonSize": 9034, "trainerSize": 20, "longName": "Osaka", "shortName": "Osaka"}, {
            "pokemonSize": 11713,
            "trainerSize": 30,
            "longName": "Osaka Prefecture",
            "shortName": "Osaka Prefecture"
        }, {
            "pokemonSize": 3011,
            "trainerSize": 4,
            "longName": "Goyang-si",
            "shortName": "Goyang-si"
        }, {
            "pokemonSize": 390,
            "trainerSize": 1,
            "longName": "Riverside",
            "shortName": "Riverside"
        }, {
            "pokemonSize": 390,
            "trainerSize": 1,
            "longName": "Riverside County",
            "shortName": "Riverside County"
        }, {
            "pokemonSize": 1461,
            "trainerSize": 3,
            "longName": "Petaling Jaya",
            "shortName": "PJ"
        }, {
            "pokemonSize": 2595,
            "trainerSize": 5,
            "longName": "Petaling",
            "shortName": "Petaling"
        }, {
            "pokemonSize": 3594,
            "trainerSize": 6,
            "longName": "Selangor",
            "shortName": "Selangor"
        }, {"pokemonSize": 7068, "trainerSize": 14, "longName": "Malaysia", "shortName": "MY"}, {
            "pokemonSize": 1534,
            "trainerSize": 6,
            "longName": "Inje-gun",
            "shortName": "Inje-gun"
        }, {
            "pokemonSize": 6632,
            "trainerSize": 9,
            "longName": "Christchurch",
            "shortName": "Christchurch"
        }, {
            "pokemonSize": 6632,
            "trainerSize": 9,
            "longName": "Christchurch City",
            "shortName": "Christchurch City"
        }, {
            "pokemonSize": 6632,
            "trainerSize": 9,
            "longName": "Canterbury",
            "shortName": "Canterbury"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Saiwai Ward",
            "shortName": "Saiwai Ward"
        }, {
            "pokemonSize": 1018,
            "trainerSize": 3,
            "longName": "Kawasaki",
            "shortName": "Kawasaki"
        }, {
            "pokemonSize": 3148,
            "trainerSize": 7,
            "longName": "Kanagawa Prefecture",
            "shortName": "Kanagawa Prefecture"
        }, {"pokemonSize": 163, "trainerSize": 1, "longName": "Dubbo", "shortName": "Dubbo"}, {
            "pokemonSize": 163,
            "trainerSize": 1,
            "longName": "Dubbo City Council",
            "shortName": "Dubbo"
        }, {"pokemonSize": 163, "trainerSize": 1, "longName": "2830", "shortName": "2830"}, {
            "pokemonSize": 539,
            "trainerSize": 1,
            "longName": "Jecheon-si",
            "shortName": "Jecheon-si"
        }, {"pokemonSize": 2724, "trainerSize": 9, "longName": "London", "shortName": "London"}, {
            "pokemonSize": 3224,
            "trainerSize": 11,
            "longName": "London",
            "shortName": "London"
        }, {
            "pokemonSize": 4672,
            "trainerSize": 12,
            "longName": "Greater London",
            "shortName": "Greater London"
        }, {
            "pokemonSize": 4329,
            "trainerSize": 11,
            "longName": "England",
            "shortName": "England"
        }, {"pokemonSize": 4329, "trainerSize": 11, "longName": "United Kingdom", "shortName": "GB"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Aoba Ward",
            "shortName": "Aoba Ward"
        }, {"pokemonSize": 552, "trainerSize": 2, "longName": "Sendai", "shortName": "Sendai"}, {
            "pokemonSize": 552,
            "trainerSize": 2,
            "longName": "Miyagi Prefecture",
            "shortName": "Miyagi Prefecture"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Minato Ward",
            "shortName": "Minato Ward"
        }, {
            "pokemonSize": 439,
            "trainerSize": 2,
            "longName": "Yanggu-gun",
            "shortName": "Yanggu-gun"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Sakai Ward",
            "shortName": "Sakai Ward"
        }, {"pokemonSize": 610, "trainerSize": 1, "longName": "Sakai", "shortName": "Sakai"}, {
            "pokemonSize": 2774,
            "trainerSize": 9,
            "longName": "Seongnam-si",
            "shortName": "Seongnam-si"
        }, {"pokemonSize": 140, "trainerSize": 1, "longName": "Sfax", "shortName": "Sfax"}, {
            "pokemonSize": 140,
            "trainerSize": 1,
            "longName": "Sfax",
            "shortName": "Sfax"
        }, {"pokemonSize": 140, "trainerSize": 1, "longName": "Tunisia", "shortName": "TN"}, {
            "pokemonSize": 1932,
            "trainerSize": 2,
            "longName": "Recoleta",
            "shortName": "Recoleta"
        }, {
            "pokemonSize": 1932,
            "trainerSize": 2,
            "longName": "Recoleta",
            "shortName": "Recoleta"
        }, {
            "pokemonSize": 2353,
            "trainerSize": 4,
            "longName": "Santiago Province",
            "shortName": "Santiago Province"
        }, {
            "pokemonSize": 2353,
            "trainerSize": 4,
            "longName": "Santiago Metropolitan Region",
            "shortName": "Santiago Metropolitan Region"
        }, {"pokemonSize": 2353, "trainerSize": 4, "longName": "Chile", "shortName": "CL"}, {
            "pokemonSize": 266,
            "trainerSize": 2,
            "longName": "Pyeongtaek-si",
            "shortName": "Pyeongtaek-si"
        }, {"pokemonSize": 995, "trainerSize": 2, "longName": "Berlin", "shortName": "Berlin"}, {
            "pokemonSize": 995,
            "trainerSize": 2,
            "longName": "Berlin",
            "shortName": "Berlin"
        }, {
            "pokemonSize": 1869,
            "trainerSize": 3,
            "longName": "São Paulo",
            "shortName": "São Paulo"
        }, {
            "pokemonSize": 2308,
            "trainerSize": 4,
            "longName": "São Paulo",
            "shortName": "São Paulo"
        }, {
            "pokemonSize": 1869,
            "trainerSize": 3,
            "longName": "State of São Paulo",
            "shortName": "SP"
        }, {"pokemonSize": 2200, "trainerSize": 5, "longName": "Brazil", "shortName": "BR"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Imsil-gun",
            "shortName": "Imsil-gun"
        }, {
            "pokemonSize": 2293,
            "trainerSize": 5,
            "longName": "Jeollabuk-do",
            "shortName": "Jeollabuk-do"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Kita Ward", "shortName": "Kita Ward"}, {
            "pokemonSize": 2,
            "trainerSize": 1,
            "longName": "Saitama",
            "shortName": "Saitama"
        }, {
            "pokemonSize": 910,
            "trainerSize": 4,
            "longName": "Saitama Prefecture",
            "shortName": "Saitama Prefecture"
        }, {"pokemonSize": 658, "trainerSize": 1, "longName": "Di An", "shortName": "Di An"}, {
            "pokemonSize": 658,
            "trainerSize": 1,
            "longName": "Bình Dương",
            "shortName": "Bình Dương"
        }, {
            "pokemonSize": 236,
            "trainerSize": 1,
            "longName": "Yangpyeong-gun",
            "shortName": "Yangpyeong-gun"
        }, {
            "pokemonSize": 637,
            "trainerSize": 2,
            "longName": "Indianapolis",
            "shortName": "Indianapolis"
        }, {
            "pokemonSize": 637,
            "trainerSize": 2,
            "longName": "Marion County",
            "shortName": "Marion County"
        }, {"pokemonSize": 637, "trainerSize": 2, "longName": "Indiana", "shortName": "IN"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Minxiong",
            "shortName": "Minxiong"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "北斗村", "shortName": "北斗村"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Minxiong Township",
            "shortName": "Minxiong Township"
        }, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Chiayi County",
            "shortName": "Chiayi County"
        }, {
            "pokemonSize": 901,
            "trainerSize": 6,
            "longName": "Taiwan Province",
            "shortName": "Taiwan Province"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "621", "shortName": "621"}, {
            "pokemonSize": 548,
            "trainerSize": 3,
            "longName": "Naha",
            "shortName": "Naha"
        }, {"pokemonSize": 1577, "trainerSize": 6, "longName": "Toronto", "shortName": "Toronto"}, {
            "pokemonSize": 1577,
            "trainerSize": 6,
            "longName": "Toronto Division",
            "shortName": "Toronto Division"
        }, {"pokemonSize": 2533, "trainerSize": 9, "longName": "Ontario", "shortName": "ON"}, {
            "pokemonSize": 952,
            "trainerSize": 2,
            "longName": "The Rocks",
            "shortName": "The Rocks"
        }, {
            "pokemonSize": 4535,
            "trainerSize": 10,
            "longName": "Council of the City of Sydney",
            "shortName": "Sydney"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "Okaya", "shortName": "Okaya"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Nagano Prefecture",
            "shortName": "Nagano Prefecture"
        }, {
            "pokemonSize": 1448,
            "trainerSize": 1,
            "longName": "New Malden",
            "shortName": "New Malden"
        }, {
            "pokemonSize": 1448,
            "trainerSize": 1,
            "longName": "Royal Borough of Kingston upon Thames",
            "shortName": "Royal Borough of Kingston upon Thames"
        }, {
            "pokemonSize": 1050,
            "trainerSize": 1,
            "longName": "Arlington",
            "shortName": "Arlington"
        }, {
            "pokemonSize": 1050,
            "trainerSize": 1,
            "longName": "Arlington County",
            "shortName": "Arlington County"
        }, {"pokemonSize": 2838, "trainerSize": 6, "longName": "Virginia", "shortName": "VA"}, {
            "pokemonSize": 2663,
            "trainerSize": 7,
            "longName": "Melbourne",
            "shortName": "Melbourne"
        }, {"pokemonSize": 2663, "trainerSize": 7, "longName": "3004", "shortName": "3004"}, {
            "pokemonSize": 2637,
            "trainerSize": 5,
            "longName": "Chiyoda",
            "shortName": "Chiyoda"
        }, {
            "pokemonSize": 46,
            "trainerSize": 2,
            "longName": "Namyangju-si",
            "shortName": "Namyangju-si"
        }, {
            "pokemonSize": 3256,
            "trainerSize": 7,
            "longName": "Kuala Lumpur",
            "shortName": "Kuala Lumpur"
        }, {
            "pokemonSize": 3256,
            "trainerSize": 7,
            "longName": "Federal Territory of Kuala Lumpur",
            "shortName": "Federal Territory of Kuala Lumpur"
        }, {"pokemonSize": 1130, "trainerSize": 2, "longName": "Sydney", "shortName": "Sydney"}, {
            "pokemonSize": 595,
            "trainerSize": 2,
            "longName": "Epping",
            "shortName": "Epping"
        }, {"pokemonSize": 595, "trainerSize": 2, "longName": "2121", "shortName": "2121"}, {
            "pokemonSize": 503,
            "trainerSize": 2,
            "longName": "Newington",
            "shortName": "Newington"
        }, {
            "pokemonSize": 1408,
            "trainerSize": 3,
            "longName": "Auburn City Council",
            "shortName": "Auburn"
        }, {"pokemonSize": 503, "trainerSize": 2, "longName": "2127", "shortName": "2127"}, {
            "pokemonSize": 1122,
            "trainerSize": 2,
            "longName": "Tamuning",
            "shortName": "Tamuning"
        }, {"pokemonSize": 1122, "trainerSize": 2, "longName": "Guam", "shortName": "GU"}, {
            "pokemonSize": 9227,
            "trainerSize": 31,
            "longName": "Goseong-gun",
            "shortName": "Goseong-gun"
        }, {"pokemonSize": 420, "trainerSize": 1, "longName": "Harbin", "shortName": "Harbin"}, {
            "pokemonSize": 420,
            "trainerSize": 1,
            "longName": "Heilongjiang",
            "shortName": "Heilongjiang"
        }, {"pokemonSize": 630, "trainerSize": 2, "longName": "China", "shortName": "CN"}, {
            "pokemonSize": 175,
            "trainerSize": 1,
            "longName": "Kings Park",
            "shortName": "Kings Park"
        }, {
            "pokemonSize": 175,
            "trainerSize": 1,
            "longName": "City of Perth",
            "shortName": "Perth"
        }, {
            "pokemonSize": 2183,
            "trainerSize": 5,
            "longName": "Western Australia",
            "shortName": "WA"
        }, {"pokemonSize": 175, "trainerSize": 1, "longName": "6005", "shortName": "6005"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Southport",
            "shortName": "Southport"
        }, {
            "pokemonSize": 2791,
            "trainerSize": 2,
            "longName": "Gold Coast City",
            "shortName": "Gold Coast"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "4215", "shortName": "4215"}, {
            "pokemonSize": 2834,
            "trainerSize": 4,
            "longName": "Buenos Aires",
            "shortName": "CABA"
        }, {
            "pokemonSize": 2834,
            "trainerSize": 4,
            "longName": "Autonomous City of Buenos Aires",
            "shortName": "CABA"
        }, {"pokemonSize": 2834, "trainerSize": 4, "longName": "Argentina", "shortName": "AR"}, {
            "pokemonSize": 1512,
            "trainerSize": 1,
            "longName": "Puchong",
            "shortName": "Puchong"
        }, {"pokemonSize": 822, "trainerSize": 2, "longName": "Gotenba", "shortName": "Gotenba"}, {
            "pokemonSize": 822,
            "trainerSize": 2,
            "longName": "Shizuoka Prefecture",
            "shortName": "Shizuoka Prefecture"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Lisbon", "shortName": "Lisbon"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Lisbon",
            "shortName": "Lisbon"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Portugal", "shortName": "PT"}, {
            "pokemonSize": 1989,
            "trainerSize": 6,
            "longName": "Gimhae-si",
            "shortName": "Gimhae-si"
        }, {
            "pokemonSize": 7135,
            "trainerSize": 20,
            "longName": "Gyeongsangnam-do",
            "shortName": "Gyeongsangnam-do"
        }, {
            "pokemonSize": 479,
            "trainerSize": 1,
            "longName": "Centreville",
            "shortName": "Centreville"
        }, {"pokemonSize": 479, "trainerSize": 1, "longName": "Sully", "shortName": "Sully"}, {
            "pokemonSize": 1376,
            "trainerSize": 2,
            "longName": "Fairfax County",
            "shortName": "Fairfax County"
        }, {"pokemonSize": 516, "trainerSize": 2, "longName": "Austin", "shortName": "Austin"}, {
            "pokemonSize": 516,
            "trainerSize": 2,
            "longName": "Travis County",
            "shortName": "Travis County"
        }, {"pokemonSize": 2507, "trainerSize": 8, "longName": "Texas", "shortName": "TX"}, {
            "pokemonSize": 204,
            "trainerSize": 1,
            "longName": "Nong Pla Lai",
            "shortName": "Nong Pla Lai"
        }, {
            "pokemonSize": 2330,
            "trainerSize": 6,
            "longName": "Bang Lamung District",
            "shortName": "อ.บางละมุง"
        }, {
            "pokemonSize": 2687,
            "trainerSize": 7,
            "longName": "Chon Buri",
            "shortName": "จ.ชลบุรี"
        }, {"pokemonSize": 2894, "trainerSize": 7, "longName": "20150", "shortName": "20150"}, {
            "pokemonSize": 277,
            "trainerSize": 1,
            "longName": "tp. Vĩnh Yên",
            "shortName": "tp. Vĩnh Yên"
        }, {
            "pokemonSize": 277,
            "trainerSize": 1,
            "longName": "Vĩnh Phúc",
            "shortName": "Vĩnh Phúc"
        }, {"pokemonSize": 107, "trainerSize": 1, "longName": "Swidnica", "shortName": "Swidnica"}, {
            "pokemonSize": 107,
            "trainerSize": 1,
            "longName": "Świdnica",
            "shortName": "Świdnica"
        }, {
            "pokemonSize": 107,
            "trainerSize": 1,
            "longName": "Świdnica County",
            "shortName": "Świdnica County"
        }, {
            "pokemonSize": 107,
            "trainerSize": 1,
            "longName": "Lower Silesian Voivodeship",
            "shortName": "Lower Silesian Voivodeship"
        }, {"pokemonSize": 619, "trainerSize": 4, "longName": "Poland", "shortName": "PL"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Alicante",
            "shortName": "Alicante"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Alicante", "shortName": "Alicante"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "L'Alacantí",
            "shortName": "L'Alacantí"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Alicante", "shortName": "A"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Valencian Community",
            "shortName": "Valencian Community"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Valencia", "shortName": "Valencia"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Valencia",
            "shortName": "Valencia"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "L'Horta de València",
            "shortName": "L'Horta de València"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Valencia", "shortName": "V"}, {
            "pokemonSize": 178,
            "trainerSize": 1,
            "longName": "Gongju-si",
            "shortName": "Gongju-si"
        }, {
            "pokemonSize": 6324,
            "trainerSize": 12,
            "longName": "Chungcheongnam-do",
            "shortName": "Chungcheongnam-do"
        }, {"pokemonSize": 574, "trainerSize": 1, "longName": "Milan", "shortName": "Milan"}, {
            "pokemonSize": 574,
            "trainerSize": 1,
            "longName": "Milan",
            "shortName": "Milan"
        }, {
            "pokemonSize": 574,
            "trainerSize": 1,
            "longName": "Metropolitan City of Milan",
            "shortName": "MI"
        }, {
            "pokemonSize": 574,
            "trainerSize": 1,
            "longName": "Lombardy",
            "shortName": "Lombardy"
        }, {
            "pokemonSize": 1444,
            "trainerSize": 5,
            "longName": "San Francisco",
            "shortName": "SF"
        }, {
            "pokemonSize": 1444,
            "trainerSize": 5,
            "longName": "San Francisco County",
            "shortName": "San Francisco County"
        }, {"pokemonSize": 632, "trainerSize": 2, "longName": "Almaty", "shortName": "Almaty"}, {
            "pokemonSize": 632,
            "trainerSize": 2,
            "longName": "Karasay District",
            "shortName": "Karasay District"
        }, {
            "pokemonSize": 632,
            "trainerSize": 2,
            "longName": "Almaty Region",
            "shortName": "Almaty Region"
        }, {"pokemonSize": 632, "trainerSize": 2, "longName": "Kazakhstan", "shortName": "KZ"}, {
            "pokemonSize": 1,
            "trainerSize": 1,
            "longName": "Shinagawa",
            "shortName": "Shinagawa"
        }, {"pokemonSize": 2461, "trainerSize": 2, "longName": "Chicago", "shortName": "Chicago"}, {
            "pokemonSize": 2918,
            "trainerSize": 4,
            "longName": "Cook County",
            "shortName": "Cook County"
        }, {"pokemonSize": 2546, "trainerSize": 3, "longName": "Illinois", "shortName": "IL"}, {
            "pokemonSize": 265,
            "trainerSize": 1,
            "longName": "Hualien",
            "shortName": "Hualien"
        }, {
            "pokemonSize": 265,
            "trainerSize": 1,
            "longName": "Hualien County",
            "shortName": "Hualien County"
        }, {
            "pokemonSize": 1550,
            "trainerSize": 7,
            "longName": "Yangsan-si",
            "shortName": "Yangsan-si"
        }, {
            "pokemonSize": 233,
            "trainerSize": 1,
            "longName": "Donghae-si",
            "shortName": "Donghae-si"
        }, {
            "pokemonSize": 144,
            "trainerSize": 1,
            "longName": "Carrollton",
            "shortName": "Carrollton"
        }, {
            "pokemonSize": 1165,
            "trainerSize": 4,
            "longName": "Dallas County",
            "shortName": "Dallas County"
        }, {"pokemonSize": 3370, "trainerSize": 7, "longName": "Paju-si", "shortName": "Paju-si"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Mielec",
            "shortName": "Mielec"
        }, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Gmina Mielec",
            "shortName": "Gmina Mielec"
        }, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Mielec County",
            "shortName": "Mielec County"
        }, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Podkarpackie Voivodeship",
            "shortName": "Podkarpackie Voivodeship"
        }, {"pokemonSize": 254, "trainerSize": 1, "longName": "Netanya", "shortName": "Netanya"}, {
            "pokemonSize": 1310,
            "trainerSize": 2,
            "longName": "HaSharon",
            "shortName": "HaSharon"
        }, {
            "pokemonSize": 254,
            "trainerSize": 1,
            "longName": "Center District",
            "shortName": "Center District"
        }, {"pokemonSize": 968, "trainerSize": 2, "longName": "Asuncion", "shortName": "Asuncion"}, {
            "pokemonSize": 968,
            "trainerSize": 2,
            "longName": "Paraguay",
            "shortName": "PY"
        }, {
            "pokemonSize": 1388,
            "trainerSize": 5,
            "longName": "Santa Monica",
            "shortName": "Santa Monica"
        }, {"pokemonSize": 843, "trainerSize": 2, "longName": "Perugia", "shortName": "Perugia"}, {
            "pokemonSize": 843,
            "trainerSize": 2,
            "longName": "Perugia",
            "shortName": "Perugia"
        }, {
            "pokemonSize": 843,
            "trainerSize": 2,
            "longName": "Province of Perugia",
            "shortName": "PG"
        }, {"pokemonSize": 843, "trainerSize": 2, "longName": "Umbria", "shortName": "Umbria"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Sandton",
            "shortName": "Sandton"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Greater Johannesburg Metropolitan Area",
            "shortName": "Greater Johannesburg Metropolitan Area"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "City of Johannesburg Metropolitan Municipality",
            "shortName": "City of Johannesburg Metropolitan Municipality"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Gauteng", "shortName": "GP"}, {
            "pokemonSize": 530,
            "trainerSize": 2,
            "longName": "South Africa",
            "shortName": "ZA"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Miryang-si",
            "shortName": "Miryang-si"
        }, {"pokemonSize": 210, "trainerSize": 2, "longName": "Fairfax", "shortName": "Fairfax"}, {
            "pokemonSize": 378,
            "trainerSize": 1,
            "longName": "Redfern",
            "shortName": "Redfern"
        }, {"pokemonSize": 378, "trainerSize": 1, "longName": "2016", "shortName": "2016"}, {
            "pokemonSize": 1992,
            "trainerSize": 2,
            "longName": "Wiang Phang Kham",
            "shortName": "Wiang Phang Kham"
        }, {
            "pokemonSize": 1992,
            "trainerSize": 2,
            "longName": "Mae Sai District",
            "shortName": "อ.แม่สาย"
        }, {
            "pokemonSize": 2304,
            "trainerSize": 3,
            "longName": "Chiang Rai",
            "shortName": "จ.เชียงราย"
        }, {"pokemonSize": 1073, "trainerSize": 3, "longName": "Pattaya", "shortName": "Pattaya"}, {
            "pokemonSize": 23,
            "trainerSize": 1,
            "longName": "Nerima",
            "shortName": "Nerima"
        }, {
            "pokemonSize": 2571,
            "trainerSize": 5,
            "longName": "Cheonan-si",
            "shortName": "Cheonan-si"
        }, {"pokemonSize": 309, "trainerSize": 1, "longName": "Oakville", "shortName": "Oakville"}, {
            "pokemonSize": 309,
            "trainerSize": 1,
            "longName": "Halton Regional Municipality",
            "shortName": "Halton Regional Municipality"
        }, {
            "pokemonSize": 810,
            "trainerSize": 1,
            "longName": "New Westminster",
            "shortName": "New Westminster"
        }, {
            "pokemonSize": 1401,
            "trainerSize": 4,
            "longName": "Greater Vancouver",
            "shortName": "Greater Vancouver"
        }, {
            "pokemonSize": 1193,
            "trainerSize": 3,
            "longName": "South Jakarta",
            "shortName": "South Jakarta"
        }, {
            "pokemonSize": 1193,
            "trainerSize": 3,
            "longName": "South Jakarta City",
            "shortName": "South Jakarta City"
        }, {
            "pokemonSize": 2004,
            "trainerSize": 5,
            "longName": "Special Capital Region of Jakarta",
            "shortName": "Special Capital Region of Jakarta"
        }, {"pokemonSize": 3551, "trainerSize": 7, "longName": "Indonesia", "shortName": "ID"}, {
            "pokemonSize": 410,
            "trainerSize": 3,
            "longName": "Honolulu",
            "shortName": "Honolulu"
        }, {
            "pokemonSize": 810,
            "trainerSize": 4,
            "longName": "Honolulu County",
            "shortName": "Honolulu County"
        }, {"pokemonSize": 810, "trainerSize": 4, "longName": "Hawaii", "shortName": "HI"}, {
            "pokemonSize": 207,
            "trainerSize": 1,
            "longName": "Iwakuni",
            "shortName": "Iwakuni"
        }, {
            "pokemonSize": 207,
            "trainerSize": 1,
            "longName": "Yamaguchi Prefecture",
            "shortName": "Yamaguchi Prefecture"
        }, {
            "pokemonSize": 601,
            "trainerSize": 1,
            "longName": "Santa Rosa",
            "shortName": "Sta. Rosa"
        }, {"pokemonSize": 1425, "trainerSize": 3, "longName": "Laguna", "shortName": "Laguna"}, {
            "pokemonSize": 1247,
            "trainerSize": 2,
            "longName": "Calabarzon",
            "shortName": "Calabarzon"
        }, {"pokemonSize": 601, "trainerSize": 1, "longName": "4026", "shortName": "4026"}, {
            "pokemonSize": 6409,
            "trainerSize": 15,
            "longName": "Uijeongbu-si",
            "shortName": "Uijeongbu-si"
        }, {"pokemonSize": 987, "trainerSize": 1, "longName": "Suginami", "shortName": "Suginami"}, {
            "pokemonSize": 550,
            "trainerSize": 1,
            "longName": "Surabaya",
            "shortName": "Surabaya"
        }, {
            "pokemonSize": 550,
            "trainerSize": 1,
            "longName": "Surabaya City",
            "shortName": "Surabaya City"
        }, {"pokemonSize": 550, "trainerSize": 1, "longName": "East Java", "shortName": "East Java"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Cordova",
            "shortName": "Cordova"
        }, {"pokemonSize": 10407, "trainerSize": 11, "longName": "Meguro", "shortName": "Meguro"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Koto",
            "shortName": "Koto"
        }, {"pokemonSize": 248, "trainerSize": 1, "longName": "Yangon", "shortName": "Yangon"}, {
            "pokemonSize": 248,
            "trainerSize": 1,
            "longName": "Yangon Region",
            "shortName": "Yangon Region"
        }, {
            "pokemonSize": 248,
            "trainerSize": 1,
            "longName": "Myanmar (Burma)",
            "shortName": "MM"
        }, {"pokemonSize": 536, "trainerSize": 2, "longName": "Baguio", "shortName": "Baguio"}, {
            "pokemonSize": 779,
            "trainerSize": 3,
            "longName": "Benguet",
            "shortName": "Benguet"
        }, {
            "pokemonSize": 536,
            "trainerSize": 2,
            "longName": "Cordillera Administrative Region",
            "shortName": "CAR"
        }, {"pokemonSize": 1131, "trainerSize": 1, "longName": "Cusco", "shortName": "Cusco"}, {
            "pokemonSize": 1131,
            "trainerSize": 1,
            "longName": "Cusco",
            "shortName": "Cusco"
        }, {"pokemonSize": 1131, "trainerSize": 1, "longName": "Cusco", "shortName": "Cusco"}, {
            "pokemonSize": 1198,
            "trainerSize": 2,
            "longName": "Peru",
            "shortName": "PE"
        }, {"pokemonSize": 2835, "trainerSize": 1, "longName": "Doha", "shortName": "Doha"}, {
            "pokemonSize": 2835,
            "trainerSize": 1,
            "longName": "Doha",
            "shortName": "Doha"
        }, {"pokemonSize": 2835, "trainerSize": 2, "longName": "Qatar", "shortName": "QA"}, {
            "pokemonSize": 10,
            "trainerSize": 1,
            "longName": "Ban Chang",
            "shortName": "Ban Chang"
        }, {
            "pokemonSize": 10,
            "trainerSize": 1,
            "longName": "Ban Chang District",
            "shortName": "อ. บ้านฉาง"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Philadelphia",
            "shortName": "Philadelphia"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Philadelphia County",
            "shortName": "Philadelphia County"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "Kasugai", "shortName": "Kasugai"}, {
            "pokemonSize": 756,
            "trainerSize": 3,
            "longName": "South Brisbane",
            "shortName": "South Brisbane"
        }, {"pokemonSize": 756, "trainerSize": 3, "longName": "4101", "shortName": "4101"}, {
            "pokemonSize": 330,
            "trainerSize": 1,
            "longName": "Rio de Janeiro",
            "shortName": "Rio de Janeiro"
        }, {
            "pokemonSize": 330,
            "trainerSize": 1,
            "longName": "Rio de Janeiro",
            "shortName": "Rio de Janeiro"
        }, {
            "pokemonSize": 330,
            "trainerSize": 1,
            "longName": "State of Rio de Janeiro",
            "shortName": "RJ"
        }, {"pokemonSize": 269, "trainerSize": 1, "longName": "Poznań", "shortName": "Poznań"}, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Poznań",
            "shortName": "Poznań"
        }, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Poznań County",
            "shortName": "Poznań County"
        }, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Greater Poland Voivodeship",
            "shortName": "Greater Poland Voivodeship"
        }, {
            "pokemonSize": 307,
            "trainerSize": 3,
            "longName": "Siheung-si",
            "shortName": "Siheung-si"
        }, {
            "pokemonSize": 379,
            "trainerSize": 1,
            "longName": "Gümüştepe Mahallesi",
            "shortName": "Gümüştepe"
        }, {
            "pokemonSize": 379,
            "trainerSize": 1,
            "longName": "Gümüştepe Mahallesi",
            "shortName": "Gümüştepe"
        }, {"pokemonSize": 379, "trainerSize": 1, "longName": "Nilüfer", "shortName": "Nilüfer"}, {
            "pokemonSize": 379,
            "trainerSize": 1,
            "longName": "Bursa",
            "shortName": "Bursa"
        }, {"pokemonSize": 379, "trainerSize": 1, "longName": "Turkey", "shortName": "TR"}, {
            "pokemonSize": 379,
            "trainerSize": 1,
            "longName": "16110",
            "shortName": "16110"
        }, {"pokemonSize": 142, "trainerSize": 1, "longName": "Prague", "shortName": "Prague"}, {
            "pokemonSize": 142,
            "trainerSize": 1,
            "longName": "Hlavní město Praha",
            "shortName": "Hlavní město Praha"
        }, {"pokemonSize": 142, "trainerSize": 1, "longName": "Prague", "shortName": "Prague"}, {
            "pokemonSize": 410,
            "trainerSize": 2,
            "longName": "Czech Republic",
            "shortName": "CZ"
        }, {
            "pokemonSize": 1240,
            "trainerSize": 1,
            "longName": "Seongju-gun",
            "shortName": "Seongju-gun"
        }, {"pokemonSize": 664, "trainerSize": 3, "longName": "Edogawa", "shortName": "Edogawa"}, {
            "pokemonSize": 5523,
            "trainerSize": 10,
            "longName": "Taipei",
            "shortName": "Taipei"
        }, {"pokemonSize": 372, "trainerSize": 1, "longName": "Winnipeg", "shortName": "Winnipeg"}, {
            "pokemonSize": 372,
            "trainerSize": 1,
            "longName": "Division No. 11",
            "shortName": "Division No. 11"
        }, {"pokemonSize": 372, "trainerSize": 1, "longName": "Manitoba", "shortName": "MB"}, {
            "pokemonSize": 1089,
            "trainerSize": 2,
            "longName": "Urayasu",
            "shortName": "Urayasu"
        }, {
            "pokemonSize": 216,
            "trainerSize": 1,
            "longName": "Vientiane",
            "shortName": "Vientiane"
        }, {
            "pokemonSize": 216,
            "trainerSize": 1,
            "longName": "Vientiane Prefecture",
            "shortName": "เวียงจันทน์"
        }, {"pokemonSize": 216, "trainerSize": 1, "longName": "Laos", "shortName": "LA"}, {
            "pokemonSize": 733,
            "trainerSize": 1,
            "longName": "Petaluma",
            "shortName": "Petaluma"
        }, {
            "pokemonSize": 733,
            "trainerSize": 1,
            "longName": "Sonoma County",
            "shortName": "Sonoma County"
        }, {
            "pokemonSize": 195,
            "trainerSize": 1,
            "longName": "Elizabeth Bay",
            "shortName": "Elizabeth Bay"
        }, {"pokemonSize": 195, "trainerSize": 1, "longName": "2011", "shortName": "2011"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Maryland City",
            "shortName": "Maryland City"
        }, {"pokemonSize": 780, "trainerSize": 1, "longName": "Hanover", "shortName": "Hanover"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Anne Arundel County",
            "shortName": "Anne Arundel County"
        }, {"pokemonSize": 3910, "trainerSize": 4, "longName": "Maryland", "shortName": "MD"}, {
            "pokemonSize": 2545,
            "trainerSize": 3,
            "longName": "Arakawa",
            "shortName": "Arakawa"
        }, {"pokemonSize": 282, "trainerSize": 1, "longName": "Berkeley", "shortName": "Berkeley"}, {
            "pokemonSize": 329,
            "trainerSize": 2,
            "longName": "Alameda County",
            "shortName": "Alameda County"
        }, {"pokemonSize": 47, "trainerSize": 1, "longName": "Fremont", "shortName": "Fremont"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Ad-Daẖirah",
            "shortName": "Ad-Daẖirah"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "Al Khor", "shortName": "Al Khor"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Pyeongchang-gun",
            "shortName": "Pyeongchang-gun"
        }, {
            "pokemonSize": 305,
            "trainerSize": 1,
            "longName": "Subang Jaya",
            "shortName": "Subang Jaya"
        }, {"pokemonSize": 305, "trainerSize": 1, "longName": "Damansara", "shortName": "Damansara"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Miyakojima Ward",
            "shortName": "Miyakojima Ward"
        }, {
            "pokemonSize": 1314,
            "trainerSize": 1,
            "longName": "Seosan-si",
            "shortName": "Seosan-si"
        }, {
            "pokemonSize": 1835,
            "trainerSize": 6,
            "longName": "Los Angeles",
            "shortName": "Los Angeles"
        }, {"pokemonSize": 918, "trainerSize": 2, "longName": "Jeju-si", "shortName": "Jeju-si"}, {
            "pokemonSize": 918,
            "trainerSize": 2,
            "longName": "Jeju-do",
            "shortName": "Jeju-do"
        }, {"pokemonSize": 674, "trainerSize": 2, "longName": "Valley", "shortName": "Valley"}, {
            "pokemonSize": 674,
            "trainerSize": 2,
            "longName": "Chambers County",
            "shortName": "Chambers County"
        }, {"pokemonSize": 1548, "trainerSize": 4, "longName": "Alabama", "shortName": "AL"}, {
            "pokemonSize": 952,
            "trainerSize": 3,
            "longName": "36854",
            "shortName": "36854"
        }, {
            "pokemonSize": 425,
            "trainerSize": 1,
            "longName": "Millers Point",
            "shortName": "Millers Point"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Hakata Ward",
            "shortName": "Hakata Ward"
        }, {"pokemonSize": 4017, "trainerSize": 5, "longName": "Fukuoka", "shortName": "Fukuoka"}, {
            "pokemonSize": 565,
            "trainerSize": 1,
            "longName": "Yufu",
            "shortName": "Yufu"
        }, {
            "pokemonSize": 1085,
            "trainerSize": 3,
            "longName": "Oita Prefecture",
            "shortName": "Oita Prefecture"
        }, {"pokemonSize": 982, "trainerSize": 1, "longName": "Pasig", "shortName": "Pasig"}, {
            "pokemonSize": 450,
            "trainerSize": 2,
            "longName": "Moscow",
            "shortName": "Moscow"
        }, {
            "pokemonSize": 450,
            "trainerSize": 2,
            "longName": "gorod Moskva",
            "shortName": "g. Moskva"
        }, {"pokemonSize": 450, "trainerSize": 2, "longName": "Moscow", "shortName": "Moscow"}, {
            "pokemonSize": 450,
            "trainerSize": 2,
            "longName": "Russia",
            "shortName": "RU"
        }, {"pokemonSize": 1707, "trainerSize": 4, "longName": "Pyrmont", "shortName": "Pyrmont"}, {
            "pokemonSize": 1707,
            "trainerSize": 4,
            "longName": "2009",
            "shortName": "2009"
        }, {"pokemonSize": 151, "trainerSize": 2, "longName": "Izumisano", "shortName": "Izumisano"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Phuket",
            "shortName": "Phuket"
        }, {
            "pokemonSize": 282,
            "trainerSize": 1,
            "longName": "Mueang Phuket District",
            "shortName": "Mueang Phuket District"
        }, {"pokemonSize": 1514, "trainerSize": 3, "longName": "Phuket", "shortName": "จ.ภูเก็ต"}, {
            "pokemonSize": 592,
            "trainerSize": 1,
            "longName": "83000",
            "shortName": "83000"
        }, {"pokemonSize": 173, "trainerSize": 1, "longName": "Gurgaon", "shortName": "Gurgaon"}, {
            "pokemonSize": 173,
            "trainerSize": 1,
            "longName": "Gurgaon",
            "shortName": "Gurgaon"
        }, {"pokemonSize": 173, "trainerSize": 1, "longName": "Haryana", "shortName": "HR"}, {
            "pokemonSize": 173,
            "trainerSize": 1,
            "longName": "122001",
            "shortName": "122001"
        }, {"pokemonSize": 308, "trainerSize": 1, "longName": "Ebina", "shortName": "Ebina"}, {
            "pokemonSize": 782,
            "trainerSize": 3,
            "longName": "Gwangmyeong-si",
            "shortName": "Gwangmyeong-si"
        }, {"pokemonSize": 218, "trainerSize": 1, "longName": "Sibu", "shortName": "Sibu"}, {
            "pokemonSize": 218,
            "trainerSize": 1,
            "longName": "Sarawak",
            "shortName": "Sarawak"
        }, {"pokemonSize": 110, "trainerSize": 1, "longName": "Icheon-si", "shortName": "Icheon-si"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Orlando",
            "shortName": "Orlando"
        }, {"pokemonSize": 61, "trainerSize": 1, "longName": "Florida", "shortName": "FL"}, {
            "pokemonSize": 1053,
            "trainerSize": 4,
            "longName": "Taichung",
            "shortName": "Taichung"
        }, {"pokemonSize": 1053, "trainerSize": 4, "longName": "五常里", "shortName": "五常里"}, {
            "pokemonSize": 1053,
            "trainerSize": 4,
            "longName": "North District",
            "shortName": "North District"
        }, {
            "pokemonSize": 1053,
            "trainerSize": 4,
            "longName": "Taichung City",
            "shortName": "Taichung City"
        }, {
            "pokemonSize": 1251,
            "trainerSize": 1,
            "longName": "Düsseldorf",
            "shortName": "Düsseldorf"
        }, {
            "pokemonSize": 1251,
            "trainerSize": 1,
            "longName": "Düsseldorf",
            "shortName": "Düsseldorf"
        }, {
            "pokemonSize": 1700,
            "trainerSize": 4,
            "longName": "North Rhine-Westphalia",
            "shortName": "NRW"
        }, {
            "pokemonSize": 853,
            "trainerSize": 1,
            "longName": "Gunsan-si",
            "shortName": "Gunsan-si"
        }, {
            "pokemonSize": 784,
            "trainerSize": 3,
            "longName": "Jinju-si",
            "shortName": "Jinju-si"
        }, {"pokemonSize": 1274, "trainerSize": 5, "longName": "Gumi-si", "shortName": "Gumi-si"}, {
            "pokemonSize": 712,
            "trainerSize": 3,
            "longName": "tx. Từ Sơn",
            "shortName": "tx. Từ Sơn"
        }, {
            "pokemonSize": 1038,
            "trainerSize": 6,
            "longName": "Bắc Ninh",
            "shortName": "Bắc Ninh"
        }, {
            "pokemonSize": 593,
            "trainerSize": 1,
            "longName": "Sacheon-si",
            "shortName": "Sacheon-si"
        }, {"pokemonSize": 1232, "trainerSize": 2, "longName": "Patong", "shortName": "Patong"}, {
            "pokemonSize": 1232,
            "trainerSize": 2,
            "longName": "Kathu District",
            "shortName": "Kathu District"
        }, {
            "pokemonSize": 182,
            "trainerSize": 1,
            "longName": "Chilliwack",
            "shortName": "Chilliwack"
        }, {
            "pokemonSize": 182,
            "trainerSize": 1,
            "longName": "Fraser Valley",
            "shortName": "Fraser Valley"
        }, {"pokemonSize": 647, "trainerSize": 2, "longName": "Osan-si", "shortName": "Osan-si"}, {
            "pokemonSize": 326,
            "trainerSize": 3,
            "longName": "tp. Bắc Ninh",
            "shortName": "tp. Bắc Ninh"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "East Gwillimbury",
            "shortName": "East Gwillimbury"
        }, {
            "pokemonSize": 647,
            "trainerSize": 2,
            "longName": "York Regional Municipality",
            "shortName": "York Regional Municipality"
        }, {
            "pokemonSize": 399,
            "trainerSize": 1,
            "longName": "South Melbourne",
            "shortName": "South Melbourne"
        }, {
            "pokemonSize": 399,
            "trainerSize": 1,
            "longName": "Port Phillip City",
            "shortName": "Port Phillip"
        }, {"pokemonSize": 399, "trainerSize": 1, "longName": "3205", "shortName": "3205"}, {
            "pokemonSize": 805,
            "trainerSize": 2,
            "longName": "Venice",
            "shortName": "Venice"
        }, {"pokemonSize": 1361, "trainerSize": 3, "longName": "Venice", "shortName": "Venice"}, {
            "pokemonSize": 805,
            "trainerSize": 2,
            "longName": "Metropolitan City of Venice",
            "shortName": "VE"
        }, {"pokemonSize": 805, "trainerSize": 2, "longName": "Veneto", "shortName": "Veneto"}, {
            "pokemonSize": 158,
            "trainerSize": 1,
            "longName": "San Juan",
            "shortName": "San Juan"
        }, {"pokemonSize": 158, "trainerSize": 1, "longName": "San Juan", "shortName": "San Juan"}, {
            "pokemonSize": 158,
            "trainerSize": 1,
            "longName": "Puerto Rico",
            "shortName": "PR"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Ikuno Ward",
            "shortName": "Ikuno Ward"
        }, {
            "pokemonSize": 70,
            "trainerSize": 1,
            "longName": "Ton Mamuang",
            "shortName": "Ton Mamuang"
        }, {
            "pokemonSize": 70,
            "trainerSize": 1,
            "longName": "Mueang Phetchaburi District",
            "shortName": "Mueang Phetchaburi District"
        }, {
            "pokemonSize": 70,
            "trainerSize": 1,
            "longName": "Phetchaburi",
            "shortName": "จ. เพชรบุรี"
        }, {"pokemonSize": 1038, "trainerSize": 2, "longName": "Paris", "shortName": "Paris"}, {
            "pokemonSize": 1038,
            "trainerSize": 2,
            "longName": "Paris",
            "shortName": "Paris"
        }, {
            "pokemonSize": 2261,
            "trainerSize": 3,
            "longName": "Île-de-France",
            "shortName": "Île-de-France"
        }, {
            "pokemonSize": 646,
            "trainerSize": 1,
            "longName": "Los Baños",
            "shortName": "Los Baños"
        }, {"pokemonSize": 1182, "trainerSize": 2, "longName": "Bunkyo", "shortName": "Bunkyo"}, {
            "pokemonSize": 374,
            "trainerSize": 2,
            "longName": "Afetna",
            "shortName": "Afetna"
        }, {"pokemonSize": 418, "trainerSize": 3, "longName": "Saipan", "shortName": "Saipan"}, {
            "pokemonSize": 418,
            "trainerSize": 3,
            "longName": "Northern Mariana Islands",
            "shortName": "MP"
        }, {"pokemonSize": 418, "trainerSize": 3, "longName": "96950", "shortName": "96950"}, {
            "pokemonSize": 2014,
            "trainerSize": 6,
            "longName": "Angeles",
            "shortName": "AC"
        }, {
            "pokemonSize": 2014,
            "trainerSize": 6,
            "longName": "Pampanga",
            "shortName": "Pampanga"
        }, {
            "pokemonSize": 2025,
            "trainerSize": 5,
            "longName": "Hwaseong-si",
            "shortName": "Hwaseong-si"
        }, {
            "pokemonSize": 554,
            "trainerSize": 3,
            "longName": "Hongcheon-gun",
            "shortName": "Hongcheon-gun"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Mosman", "shortName": "Mosman"}, {
            "pokemonSize": 316,
            "trainerSize": 1,
            "longName": "2088",
            "shortName": "2088"
        }, {"pokemonSize": 1427, "trainerSize": 2, "longName": "Yeosu-si", "shortName": "Yeosu-si"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Higashinari Ward",
            "shortName": "Higashinari Ward"
        }, {"pokemonSize": 1107, "trainerSize": 2, "longName": "Taoyuan", "shortName": "Taoyuan"}, {
            "pokemonSize": 1107,
            "trainerSize": 2,
            "longName": "信光里",
            "shortName": "信光里"
        }, {
            "pokemonSize": 1107,
            "trainerSize": 2,
            "longName": "Taoyuan District",
            "shortName": "Taoyuan District"
        }, {
            "pokemonSize": 468,
            "trainerSize": 1,
            "longName": "Taoyuan City",
            "shortName": "Taoyuan City"
        }, {
            "pokemonSize": 1,
            "trainerSize": 1,
            "longName": "Cheorwon-gun",
            "shortName": "Cheorwon-gun"
        }, {
            "pokemonSize": 3296,
            "trainerSize": 8,
            "longName": "Lapu-Lapu City",
            "shortName": "Lapu-Lapu City"
        }, {"pokemonSize": 3296, "trainerSize": 8, "longName": "6015", "shortName": "6015"}, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Minato",
            "shortName": "Minato"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Showa Ward",
            "shortName": "Showa Ward"
        }, {
            "pokemonSize": 718,
            "trainerSize": 2,
            "longName": "Mokpo-si",
            "shortName": "Mokpo-si"
        }, {
            "pokemonSize": 1711,
            "trainerSize": 3,
            "longName": "Dongducheon-si",
            "shortName": "Dongducheon-si"
        }, {
            "pokemonSize": 1860,
            "trainerSize": 2,
            "longName": "Uljin-gun",
            "shortName": "Uljin-gun"
        }, {
            "pokemonSize": 971,
            "trainerSize": 3,
            "longName": "Krong Siem Reap",
            "shortName": "Krong Siem Reap"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Siem Reap", "shortName": "Siem Reap"}, {
            "pokemonSize": 971,
            "trainerSize": 3,
            "longName": "Cambodia",
            "shortName": "KH"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Tsurumi Ward",
            "shortName": "Tsurumi Ward"
        }, {"pokemonSize": 1539, "trainerSize": 2, "longName": "Yokohama", "shortName": "Yokohama"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Toyohira Ward",
            "shortName": "Toyohira Ward"
        }, {"pokemonSize": 2652, "trainerSize": 2, "longName": "Sapporo", "shortName": "Sapporo"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Beppu",
            "shortName": "Beppu"
        }, {"pokemonSize": 180, "trainerSize": 1, "longName": "Markham", "shortName": "Markham"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Hoengseong-gun",
            "shortName": "Hoengseong-gun"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "Tajiri", "shortName": "Tajiri"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Sennan District",
            "shortName": "Sennan District"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Higashiyodogawa Ward",
            "shortName": "Higashiyodogawa Ward"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Nishi Ward",
            "shortName": "Nishi Ward"
        }, {"pokemonSize": 531, "trainerSize": 1, "longName": "Decatur", "shortName": "Decatur"}, {
            "pokemonSize": 531,
            "trainerSize": 1,
            "longName": "DeKalb County",
            "shortName": "Dekalb County"
        }, {"pokemonSize": 2389, "trainerSize": 4, "longName": "Georgia", "shortName": "GA"}, {
            "pokemonSize": 531,
            "trainerSize": 1,
            "longName": "30030",
            "shortName": "30030"
        }, {"pokemonSize": 905, "trainerSize": 1, "longName": "Lidcombe", "shortName": "Lidcombe"}, {
            "pokemonSize": 905,
            "trainerSize": 1,
            "longName": "2141",
            "shortName": "2141"
        }, {
            "pokemonSize": 558,
            "trainerSize": 2,
            "longName": "Setagaya",
            "shortName": "Setagaya"
        }, {
            "pokemonSize": 2791,
            "trainerSize": 2,
            "longName": "Surfers Paradise",
            "shortName": "Surfers Paradise"
        }, {"pokemonSize": 2791, "trainerSize": 2, "longName": "4217", "shortName": "4217"}, {
            "pokemonSize": 997,
            "trainerSize": 1,
            "longName": "Kuta",
            "shortName": "Kuta"
        }, {"pokemonSize": 997, "trainerSize": 1, "longName": "Kuta", "shortName": "Kuta"}, {
            "pokemonSize": 997,
            "trainerSize": 1,
            "longName": "Badung Regency",
            "shortName": "Badung Regency"
        }, {"pokemonSize": 997, "trainerSize": 1, "longName": "Bali", "shortName": "Bali"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Tillmans Corner",
            "shortName": "Tillmans Corner"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Mobile County",
            "shortName": "Mobile County"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Parañaque", "shortName": "Parañaque"}, {
            "pokemonSize": 278,
            "trainerSize": 1,
            "longName": "Pak Kret",
            "shortName": "Pak Kret"
        }, {
            "pokemonSize": 278,
            "trainerSize": 1,
            "longName": "Pak Kret District",
            "shortName": "อ.ปากเกร็ด"
        }, {
            "pokemonSize": 278,
            "trainerSize": 1,
            "longName": "Nonthaburi",
            "shortName": "จ.นนทบุรี"
        }, {"pokemonSize": 278, "trainerSize": 1, "longName": "11120", "shortName": "11120"}, {
            "pokemonSize": 594,
            "trainerSize": 1,
            "longName": "Dawes Point",
            "shortName": "Dawes Point"
        }, {
            "pokemonSize": 1922,
            "trainerSize": 4,
            "longName": "Gunpo-si",
            "shortName": "Gunpo-si"
        }, {"pokemonSize": 236, "trainerSize": 1, "longName": "Burnaby", "shortName": "Burnaby"}, {
            "pokemonSize": 970,
            "trainerSize": 2,
            "longName": "Yeongi-gun",
            "shortName": "Yeongi-gun"
        }, {
            "pokemonSize": 1874,
            "trainerSize": 3,
            "longName": "Guatemala City",
            "shortName": "Guate"
        }, {
            "pokemonSize": 1874,
            "trainerSize": 3,
            "longName": "Guatemala Department",
            "shortName": "Guatemala Department"
        }, {"pokemonSize": 1874, "trainerSize": 3, "longName": "Guatemala", "shortName": "GT"}, {
            "pokemonSize": 958,
            "trainerSize": 2,
            "longName": "Chuo",
            "shortName": "Chuo"
        }, {
            "pokemonSize": 301,
            "trainerSize": 1,
            "longName": "Strathfield",
            "shortName": "Strathfield"
        }, {"pokemonSize": 301, "trainerSize": 1, "longName": "2135", "shortName": "2135"}, {
            "pokemonSize": 344,
            "trainerSize": 1,
            "longName": "Montevideo",
            "shortName": "Montevideo"
        }, {
            "pokemonSize": 344,
            "trainerSize": 1,
            "longName": "Montevideo Department",
            "shortName": "Montevideo Department"
        }, {"pokemonSize": 344, "trainerSize": 1, "longName": "Uruguay", "shortName": "UY"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Westmead",
            "shortName": "Westmead"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "2145", "shortName": "2145"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Chatan",
            "shortName": "Chatan"
        }, {
            "pokemonSize": 347,
            "trainerSize": 1,
            "longName": "Nakagami District",
            "shortName": "Nakagami District"
        }, {"pokemonSize": 316, "trainerSize": 1, "longName": "Newnan", "shortName": "Newnan"}, {
            "pokemonSize": 316,
            "trainerSize": 1,
            "longName": "Coweta County",
            "shortName": "Coweta County"
        }, {"pokemonSize": 67, "trainerSize": 1, "longName": "Ate", "shortName": "Ate"}, {
            "pokemonSize": 67,
            "trainerSize": 1,
            "longName": "Lima Province",
            "shortName": "Lima Province"
        }, {
            "pokemonSize": 67,
            "trainerSize": 1,
            "longName": "Lima Region",
            "shortName": "Lima Region"
        }, {
            "pokemonSize": 494,
            "trainerSize": 1,
            "longName": "The Woodlands",
            "shortName": "The Woodlands"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Hiroo", "shortName": "Hiroo"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Hiroo District",
            "shortName": "Hiroo District"
        }, {"pokemonSize": 138, "trainerSize": 1, "longName": "La Habra", "shortName": "La Habra"}, {
            "pokemonSize": 138,
            "trainerSize": 1,
            "longName": "90631",
            "shortName": "90631"
        }, {"pokemonSize": 243, "trainerSize": 1, "longName": "Gliwice", "shortName": "Gliwice"}, {
            "pokemonSize": 243,
            "trainerSize": 1,
            "longName": "Gliwice",
            "shortName": "Gliwice"
        }, {
            "pokemonSize": 243,
            "trainerSize": 1,
            "longName": "Gliwice County",
            "shortName": "Gliwice County"
        }, {
            "pokemonSize": 243,
            "trainerSize": 1,
            "longName": "Silesian Voivodeship",
            "shortName": "Silesian Voivodeship"
        }, {"pokemonSize": 962, "trainerSize": 2, "longName": "Munich", "shortName": "Munich"}, {
            "pokemonSize": 962,
            "trainerSize": 2,
            "longName": "Upper Bavaria",
            "shortName": "Upper Bavaria"
        }, {"pokemonSize": 1288, "trainerSize": 3, "longName": "Bavaria", "shortName": "BY"}, {
            "pokemonSize": 29,
            "trainerSize": 1,
            "longName": "Montreal",
            "shortName": "Montreal"
        }, {"pokemonSize": 29, "trainerSize": 1, "longName": "Montreal", "shortName": "Montreal"}, {
            "pokemonSize": 29,
            "trainerSize": 1,
            "longName": "Québec",
            "shortName": "QC"
        }, {
            "pokemonSize": 349,
            "trainerSize": 1,
            "longName": "Bang Kaeo",
            "shortName": "ต. บางแก้ว"
        }, {
            "pokemonSize": 349,
            "trainerSize": 1,
            "longName": "Bang Phli District",
            "shortName": "อ.บางพลี"
        }, {
            "pokemonSize": 349,
            "trainerSize": 1,
            "longName": "Samut Prakan",
            "shortName": "จ.สมุทรปราการ"
        }, {
            "pokemonSize": 1649,
            "trainerSize": 4,
            "longName": "Bucheon-si",
            "shortName": "Bucheon-si"
        }, {"pokemonSize": 0, "trainerSize": 1, "longName": "Eastwood", "shortName": "Eastwood"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "2122",
            "shortName": "2122"
        }, {"pokemonSize": 520, "trainerSize": 2, "longName": "Kunisaki", "shortName": "Kunisaki"}, {
            "pokemonSize": 168,
            "trainerSize": 1,
            "longName": "Dublin",
            "shortName": "Dublin"
        }, {
            "pokemonSize": 168,
            "trainerSize": 1,
            "longName": "Dublin City",
            "shortName": "Dublin City"
        }, {
            "pokemonSize": 168,
            "trainerSize": 1,
            "longName": "County Dublin",
            "shortName": "County Dublin"
        }, {"pokemonSize": 168, "trainerSize": 1, "longName": "Ireland", "shortName": "IE"}, {
            "pokemonSize": 381,
            "trainerSize": 1,
            "longName": "West Ryde",
            "shortName": "West Ryde"
        }, {
            "pokemonSize": 381,
            "trainerSize": 1,
            "longName": "Ryde City Council",
            "shortName": "Ryde"
        }, {"pokemonSize": 381, "trainerSize": 1, "longName": "2114", "shortName": "2114"}, {
            "pokemonSize": 1103,
            "trainerSize": 4,
            "longName": "Suita",
            "shortName": "Suita"
        }, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Goheung-gun",
            "shortName": "Goheung-gun"
        }, {"pokemonSize": 617, "trainerSize": 1, "longName": "Carlton", "shortName": "Carlton"}, {
            "pokemonSize": 617,
            "trainerSize": 1,
            "longName": "3053",
            "shortName": "3053"
        }, {
            "pokemonSize": 1403,
            "trainerSize": 1,
            "longName": "Rockingham",
            "shortName": "Rockingham"
        }, {
            "pokemonSize": 1403,
            "trainerSize": 1,
            "longName": "City of Rockingham",
            "shortName": "Rockingham"
        }, {"pokemonSize": 1403, "trainerSize": 1, "longName": "6168", "shortName": "6168"}, {
            "pokemonSize": 1960,
            "trainerSize": 3,
            "longName": "Eumseong-gun",
            "shortName": "Eumseong-gun"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Asahikawa", "shortName": "Asahikawa"}, {
            "pokemonSize": 311,
            "trainerSize": 1,
            "longName": "Hasbrouck Heights",
            "shortName": "Hasbrouck Heights"
        }, {
            "pokemonSize": 311,
            "trainerSize": 1,
            "longName": "Bergen County",
            "shortName": "Bergen County"
        }, {"pokemonSize": 311, "trainerSize": 1, "longName": "New Jersey", "shortName": "NJ"}, {
            "pokemonSize": 311,
            "trainerSize": 1,
            "longName": "07604",
            "shortName": "07604"
        }, {"pokemonSize": 874, "trainerSize": 2, "longName": "Auburn", "shortName": "Auburn"}, {
            "pokemonSize": 874,
            "trainerSize": 2,
            "longName": "Lee County",
            "shortName": "Lee County"
        }, {
            "pokemonSize": 178,
            "trainerSize": 1,
            "longName": "Mandaluyong",
            "shortName": "Mandaluyong"
        }, {"pokemonSize": 1160, "trainerSize": 2, "longName": "1550", "shortName": "1550"}, {
            "pokemonSize": 528,
            "trainerSize": 2,
            "longName": "Malay",
            "shortName": "Malay"
        }, {"pokemonSize": 652, "trainerSize": 3, "longName": "Aklan", "shortName": "Aklan"}, {
            "pokemonSize": 652,
            "trainerSize": 3,
            "longName": "Western Visayas",
            "shortName": "Western Visayas"
        }, {"pokemonSize": 636, "trainerSize": 4, "longName": "Hsinchu", "shortName": "Hsinchu"}, {
            "pokemonSize": 636,
            "trainerSize": 4,
            "longName": "Hsinchu City",
            "shortName": "Hsinchu City"
        }, {
            "pokemonSize": 1129,
            "trainerSize": 2,
            "longName": "New Taipei",
            "shortName": "New Taipei"
        }, {
            "pokemonSize": 1129,
            "trainerSize": 2,
            "longName": "Banqiao District",
            "shortName": "Banqiao District"
        }, {
            "pokemonSize": 1129,
            "trainerSize": 2,
            "longName": "New Taipei City",
            "shortName": "New Taipei City"
        }, {
            "pokemonSize": 2027,
            "trainerSize": 3,
            "longName": "Ellicott City",
            "shortName": "Ellicott City"
        }, {
            "pokemonSize": 3910,
            "trainerSize": 4,
            "longName": "Howard County",
            "shortName": "Howard County"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Yamanakako",
            "shortName": "Yamanakako"
        }, {
            "pokemonSize": 728,
            "trainerSize": 1,
            "longName": "Minamitsuru District",
            "shortName": "Minamitsuru District"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Yamanashi Prefecture",
            "shortName": "Yamanashi Prefecture"
        }, {
            "pokemonSize": 1223,
            "trainerSize": 1,
            "longName": "Saint-Denis",
            "shortName": "Saint-Denis"
        }, {
            "pokemonSize": 1223,
            "trainerSize": 1,
            "longName": "Seine-Saint-Denis",
            "shortName": "Seine-Saint-Denis"
        }, {
            "pokemonSize": 556,
            "trainerSize": 1,
            "longName": "Lauterbrunnen",
            "shortName": "Lauterbrunnen"
        }, {
            "pokemonSize": 556,
            "trainerSize": 1,
            "longName": "Interlaken District",
            "shortName": "Interlaken District"
        }, {"pokemonSize": 556, "trainerSize": 1, "longName": "Canton of Bern", "shortName": "BE"}, {
            "pokemonSize": 556,
            "trainerSize": 1,
            "longName": "Switzerland",
            "shortName": "CH"
        }, {"pokemonSize": 1188, "trainerSize": 4, "longName": "Narita", "shortName": "Narita"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Nakagyo Ward",
            "shortName": "Nakagyo Ward"
        }, {"pokemonSize": 276, "trainerSize": 1, "longName": "Kyoto", "shortName": "Kyoto"}, {
            "pokemonSize": 276,
            "trainerSize": 1,
            "longName": "Kyoto Prefecture",
            "shortName": "Kyoto Prefecture"
        }, {
            "pokemonSize": 264,
            "trainerSize": 1,
            "longName": "Las Condes",
            "shortName": "Las Condes"
        }, {
            "pokemonSize": 264,
            "trainerSize": 1,
            "longName": "Las Condes",
            "shortName": "Las Condes"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Concord West",
            "shortName": "Concord West"
        }, {"pokemonSize": 1967, "trainerSize": 1, "longName": "2138", "shortName": "2138"}, {
            "pokemonSize": 283,
            "trainerSize": 1,
            "longName": "Yokosuka",
            "shortName": "Yokosuka"
        }, {
            "pokemonSize": 268,
            "trainerSize": 1,
            "longName": "Seocheon-gun",
            "shortName": "Seocheon-gun"
        }, {
            "pokemonSize": 467,
            "trainerSize": 1,
            "longName": "Woolloongabba",
            "shortName": "Woolloongabba"
        }, {"pokemonSize": 467, "trainerSize": 1, "longName": "4102", "shortName": "4102"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Settsu",
            "shortName": "Settsu"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Akaigawa", "shortName": "Akaigawa"}, {
            "pokemonSize": 689,
            "trainerSize": 1,
            "longName": "Yoichi District",
            "shortName": "Yoichi District"
        }, {
            "pokemonSize": 481,
            "trainerSize": 1,
            "longName": "Rancho Cucamonga",
            "shortName": "Rancho Cucamonga"
        }, {
            "pokemonSize": 481,
            "trainerSize": 1,
            "longName": "San Bernardino County",
            "shortName": "San Bernardino County"
        }, {"pokemonSize": 569, "trainerSize": 2, "longName": "Naju-si", "shortName": "Naju-si"}, {
            "pokemonSize": 850,
            "trainerSize": 1,
            "longName": "Dumaguete",
            "shortName": "Dumaguete"
        }, {
            "pokemonSize": 850,
            "trainerSize": 1,
            "longName": "Negros Oriental",
            "shortName": "Negros Oriental"
        }, {
            "pokemonSize": 355,
            "trainerSize": 2,
            "longName": "North Vancouver",
            "shortName": "North Vancouver"
        }, {
            "pokemonSize": 217,
            "trainerSize": 1,
            "longName": "Gwacheon-si",
            "shortName": "Gwacheon-si"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Runcorn", "shortName": "Runcorn"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "4113",
            "shortName": "4113"
        }, {"pokemonSize": 1021, "trainerSize": 3, "longName": "Coppell", "shortName": "Coppell"}, {
            "pokemonSize": 376,
            "trainerSize": 2,
            "longName": "Calgary",
            "shortName": "Calgary"
        }, {
            "pokemonSize": 376,
            "trainerSize": 2,
            "longName": "Division No. 6",
            "shortName": "Division No. 6"
        }, {"pokemonSize": 376, "trainerSize": 2, "longName": "Alberta", "shortName": "AB"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Naniwa Ward",
            "shortName": "Naniwa Ward"
        }, {"pokemonSize": 264, "trainerSize": 1, "longName": "Manila", "shortName": "Manila"}, {
            "pokemonSize": 937,
            "trainerSize": 2,
            "longName": "Cambridge",
            "shortName": "Cambridge"
        }, {
            "pokemonSize": 2330,
            "trainerSize": 3,
            "longName": "Middlesex County",
            "shortName": "Middlesex County"
        }, {"pokemonSize": 937, "trainerSize": 2, "longName": "Massachusetts", "shortName": "MA"}, {
            "pokemonSize": 766,
            "trainerSize": 3,
            "longName": "Okazaki",
            "shortName": "Okazaki"
        }, {"pokemonSize": 449, "trainerSize": 3, "longName": "Münster", "shortName": "Münster"}, {
            "pokemonSize": 449,
            "trainerSize": 3,
            "longName": "Münster",
            "shortName": "MS"
        }, {"pokemonSize": 175, "trainerSize": 1, "longName": "Rolla", "shortName": "Rolla"}, {
            "pokemonSize": 175,
            "trainerSize": 1,
            "longName": "Phelps County",
            "shortName": "Phelps County"
        }, {"pokemonSize": 175, "trainerSize": 1, "longName": "Missouri", "shortName": "MO"}, {
            "pokemonSize": 255,
            "trainerSize": 1,
            "longName": "Salt Lake City",
            "shortName": "Salt Lake City"
        }, {
            "pokemonSize": 255,
            "trainerSize": 1,
            "longName": "Salt Lake County",
            "shortName": "Salt Lake County"
        }, {"pokemonSize": 255, "trainerSize": 1, "longName": "Utah", "shortName": "UT"}, {
            "pokemonSize": 833,
            "trainerSize": 1,
            "longName": "Vũng Tàu",
            "shortName": "Vũng Tàu"
        }, {
            "pokemonSize": 833,
            "trainerSize": 1,
            "longName": "Ba Ria - Vung Tau",
            "shortName": "Ba Ria - Vung Tau"
        }, {
            "pokemonSize": 451,
            "trainerSize": 2,
            "longName": "Al Jazirah Al Hamra",
            "shortName": "Al Jazirah Al Hamra"
        }, {
            "pokemonSize": 451,
            "trainerSize": 3,
            "longName": "Ras al Khaimah",
            "shortName": "Ras al Khaimah"
        }, {
            "pokemonSize": 451,
            "trainerSize": 3,
            "longName": "United Arab Emirates",
            "shortName": "AE"
        }, {"pokemonSize": 244, "trainerSize": 1, "longName": "Itabashi", "shortName": "Itabashi"}, {
            "pokemonSize": 29,
            "trainerSize": 1,
            "longName": "Da Nang",
            "shortName": "Da Nang"
        }, {
            "pokemonSize": 29,
            "trainerSize": 1,
            "longName": "Hải Châu District",
            "shortName": "Hải Châu District"
        }, {"pokemonSize": 29, "trainerSize": 1, "longName": "Da Nang", "shortName": "Da Nang"}, {
            "pokemonSize": 640,
            "trainerSize": 2,
            "longName": "West Pennant Hills",
            "shortName": "West Pennant Hills"
        }, {"pokemonSize": 640, "trainerSize": 2, "longName": "2125", "shortName": "2125"}, {
            "pokemonSize": 1239,
            "trainerSize": 2,
            "longName": "Iksan-si",
            "shortName": "Iksan-si"
        }, {"pokemonSize": 290, "trainerSize": 1, "longName": "Sliema", "shortName": "Sliema"}, {
            "pokemonSize": 290,
            "trainerSize": 1,
            "longName": "Malta",
            "shortName": "MT"
        }, {
            "pokemonSize": 400,
            "trainerSize": 1,
            "longName": "Waipio Acres",
            "shortName": "Waipio Acres"
        }, {"pokemonSize": 400, "trainerSize": 1, "longName": "96789", "shortName": "96789"}, {
            "pokemonSize": 351,
            "trainerSize": 2,
            "longName": "Tenri",
            "shortName": "Tenri"
        }, {
            "pokemonSize": 625,
            "trainerSize": 3,
            "longName": "Nara Prefecture",
            "shortName": "Nara Prefecture"
        }, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Providencia",
            "shortName": "Providencia"
        }, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Providencia",
            "shortName": "Providencia"
        }, {"pokemonSize": 332, "trainerSize": 1, "longName": "Commerce", "shortName": "Commerce"}, {
            "pokemonSize": 332,
            "trainerSize": 1,
            "longName": "Hunt County",
            "shortName": "Hunt County"
        }, {"pokemonSize": 332, "trainerSize": 1, "longName": "75428", "shortName": "75428"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Tobata Ward",
            "shortName": "Tobata Ward"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Kitakyushu", "shortName": "Kitakyushu"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Higashi Ward",
            "shortName": "Higashi Ward"
        }, {
            "pokemonSize": 468,
            "trainerSize": 2,
            "longName": "Lednické Rovne",
            "shortName": "Lednické Rovne"
        }, {
            "pokemonSize": 468,
            "trainerSize": 2,
            "longName": "Púchov District",
            "shortName": "Púchov District"
        }, {
            "pokemonSize": 468,
            "trainerSize": 2,
            "longName": "Trenčín Region",
            "shortName": "Trenčín Region"
        }, {"pokemonSize": 468, "trainerSize": 2, "longName": "020 61", "shortName": "020 61"}, {
            "pokemonSize": 70,
            "trainerSize": 2,
            "longName": "Gimpo-si",
            "shortName": "Gimpo-si"
        }, {
            "pokemonSize": 1047,
            "trainerSize": 1,
            "longName": "San Diego",
            "shortName": "San Diego"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Herzliya", "shortName": "Herzliya"}, {
            "pokemonSize": 112,
            "trainerSize": 1,
            "longName": "Kitahiroshima",
            "shortName": "Kitahiroshima"
        }, {
            "pokemonSize": 382,
            "trainerSize": 1,
            "longName": "Khao Mai Kaeo",
            "shortName": "Khao Mai Kaeo"
        }, {
            "pokemonSize": 382,
            "trainerSize": 1,
            "longName": "Kabin Buri District",
            "shortName": "อ. กบินทร์บุรี"
        }, {
            "pokemonSize": 382,
            "trainerSize": 1,
            "longName": "Prachin Buri",
            "shortName": "จ.ปราจีนบุรี"
        }, {"pokemonSize": 707, "trainerSize": 2, "longName": "Paradise", "shortName": "Paradise"}, {
            "pokemonSize": 707,
            "trainerSize": 2,
            "longName": "Clark County",
            "shortName": "Clark County"
        }, {"pokemonSize": 707, "trainerSize": 2, "longName": "Nevada", "shortName": "NV"}, {
            "pokemonSize": 467,
            "trainerSize": 1,
            "longName": "Newmarket",
            "shortName": "Newmarket"
        }, {
            "pokemonSize": 242,
            "trainerSize": 1,
            "longName": "Maroochydore",
            "shortName": "Maroochydore"
        }, {
            "pokemonSize": 242,
            "trainerSize": 1,
            "longName": "Sunshine Coast Regional",
            "shortName": "Sunshine Coast"
        }, {"pokemonSize": 242, "trainerSize": 1, "longName": "4558", "shortName": "4558"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Toyooka",
            "shortName": "Toyooka"
        }, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Hyogo Prefecture",
            "shortName": "Hyogo Prefecture"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Katsushika", "shortName": "Katsushika"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Chiswick",
            "shortName": "Chiswick"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "2046", "shortName": "2046"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Sakyo Ward",
            "shortName": "Sakyo Ward"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Hornsby", "shortName": "Hornsby"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "The Council of the Shire of Hornsby",
            "shortName": "Hornsby"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "2077", "shortName": "2077"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Vancouver",
            "shortName": "Vancouver"
        }, {
            "pokemonSize": 78,
            "trainerSize": 1,
            "longName": "Utsunomiya",
            "shortName": "Utsunomiya"
        }, {
            "pokemonSize": 78,
            "trainerSize": 1,
            "longName": "Tochigi Prefecture",
            "shortName": "Tochigi Prefecture"
        }, {
            "pokemonSize": 154,
            "trainerSize": 1,
            "longName": "Placentia",
            "shortName": "Placentia"
        }, {"pokemonSize": 543, "trainerSize": 1, "longName": "Vermont", "shortName": "Vermont"}, {
            "pokemonSize": 543,
            "trainerSize": 1,
            "longName": "3133",
            "shortName": "3133"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Nara", "shortName": "Nara"}, {
            "pokemonSize": 316,
            "trainerSize": 1,
            "longName": "Ampang Jaya",
            "shortName": "Ampang Jaya"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Toshima", "shortName": "Toshima"}, {
            "pokemonSize": 217,
            "trainerSize": 1,
            "longName": "Mellersta Förstaden",
            "shortName": "Mellersta Förstaden"
        }, {"pokemonSize": 217, "trainerSize": 1, "longName": "Malmö", "shortName": "Malmö"}, {
            "pokemonSize": 217,
            "trainerSize": 1,
            "longName": "Skåne County",
            "shortName": "Skåne County"
        }, {"pokemonSize": 217, "trainerSize": 1, "longName": "Sweden", "shortName": "SE"}, {
            "pokemonSize": 142,
            "trainerSize": 1,
            "longName": "Mount Hawthorn",
            "shortName": "Mount Hawthorn"
        }, {
            "pokemonSize": 142,
            "trainerSize": 1,
            "longName": "City of Vincent",
            "shortName": "Vincent"
        }, {"pokemonSize": 142, "trainerSize": 1, "longName": "6016", "shortName": "6016"}, {
            "pokemonSize": 1449,
            "trainerSize": 1,
            "longName": "Cypress",
            "shortName": "Cypress"
        }, {"pokemonSize": 124, "trainerSize": 1, "longName": "Grayson", "shortName": "Grayson"}, {
            "pokemonSize": 124,
            "trainerSize": 1,
            "longName": "Gwinnett County",
            "shortName": "Gwinnett County"
        }, {"pokemonSize": 367, "trainerSize": 1, "longName": "Kita", "shortName": "Kita"}, {
            "pokemonSize": 522,
            "trainerSize": 1,
            "longName": "Fujimi",
            "shortName": "Fujimi"
        }, {
            "pokemonSize": 122,
            "trainerSize": 1,
            "longName": "tx. Chí Linh",
            "shortName": "tx. Chí Linh"
        }, {
            "pokemonSize": 122,
            "trainerSize": 1,
            "longName": "Hải Dương",
            "shortName": "Hải Dương"
        }, {
            "pokemonSize": 145,
            "trainerSize": 1,
            "longName": "Anseong-si",
            "shortName": "Anseong-si"
        }, {
            "pokemonSize": 48,
            "trainerSize": 1,
            "longName": "Hurstville",
            "shortName": "Hurstville"
        }, {"pokemonSize": 48, "trainerSize": 1, "longName": "2220", "shortName": "2220"}, {
            "pokemonSize": 357,
            "trainerSize": 1,
            "longName": "Bo Win",
            "shortName": "ต.บ่อวิน"
        }, {
            "pokemonSize": 357,
            "trainerSize": 1,
            "longName": "Si Racha District",
            "shortName": "อ.ศรีราชา"
        }, {
            "pokemonSize": 193,
            "trainerSize": 1,
            "longName": "Davao City",
            "shortName": "Davao City"
        }, {
            "pokemonSize": 193,
            "trainerSize": 1,
            "longName": "Davao del Sur",
            "shortName": "Davao del Sur"
        }, {
            "pokemonSize": 193,
            "trainerSize": 1,
            "longName": "Davao Region",
            "shortName": "Davao Region"
        }, {
            "pokemonSize": 558,
            "trainerSize": 1,
            "longName": "Sung Noen",
            "shortName": "Sung Noen"
        }, {
            "pokemonSize": 558,
            "trainerSize": 1,
            "longName": "Sung Noen District",
            "shortName": "Sung Noen District"
        }, {
            "pokemonSize": 558,
            "trainerSize": 1,
            "longName": "Nakhon Ratchasima",
            "shortName": "จ.นครราชสีมา"
        }, {"pokemonSize": 558, "trainerSize": 1, "longName": "30170", "shortName": "30170"}, {
            "pokemonSize": 1967,
            "trainerSize": 1,
            "longName": "Rhodes",
            "shortName": "Rhodes"
        }, {
            "pokemonSize": 256,
            "trainerSize": 1,
            "longName": "Fiumicino",
            "shortName": "Fiumicino"
        }, {
            "pokemonSize": 256,
            "trainerSize": 1,
            "longName": "Fiumicino",
            "shortName": "Fiumicino"
        }, {"pokemonSize": 256, "trainerSize": 1, "longName": "00054", "shortName": "00054"}, {
            "pokemonSize": 164,
            "trainerSize": 1,
            "longName": "Tashkent",
            "shortName": "Tashkent"
        }, {
            "pokemonSize": 164,
            "trainerSize": 1,
            "longName": "Tashkent Province",
            "shortName": "Tashkent Province"
        }, {"pokemonSize": 164, "trainerSize": 1, "longName": "Uzbekistan", "shortName": "UZ"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Morrisville",
            "shortName": "Morrisville"
        }, {
            "pokemonSize": 374,
            "trainerSize": 1,
            "longName": "Cedar Fork",
            "shortName": "Cedar Fork"
        }, {
            "pokemonSize": 202,
            "trainerSize": 1,
            "longName": "Charlottesville",
            "shortName": "Charlottesville"
        }, {"pokemonSize": 0, "trainerSize": 0, "longName": "Edison", "shortName": "Edison"}, {
            "pokemonSize": 417,
            "trainerSize": 1,
            "longName": "Cremorne",
            "shortName": "Cremorne"
        }, {
            "pokemonSize": 417,
            "trainerSize": 1,
            "longName": "North Sydney Council",
            "shortName": "North Sydney"
        }, {"pokemonSize": 417, "trainerSize": 1, "longName": "2090", "shortName": "2090"}, {
            "pokemonSize": 106,
            "trainerSize": 1,
            "longName": "Eastlakes",
            "shortName": "Eastlakes"
        }, {
            "pokemonSize": 106,
            "trainerSize": 1,
            "longName": "The Council of the City of Botany Bay",
            "shortName": "Botany Bay"
        }, {"pokemonSize": 106, "trainerSize": 1, "longName": "2018", "shortName": "2018"}, {
            "pokemonSize": 310,
            "trainerSize": 1,
            "longName": "Butler",
            "shortName": "Butler"
        }, {
            "pokemonSize": 310,
            "trainerSize": 1,
            "longName": "City of Wanneroo",
            "shortName": "Wanneroo"
        }, {"pokemonSize": 310, "trainerSize": 1, "longName": "6036", "shortName": "6036"}, {
            "pokemonSize": 61,
            "trainerSize": 1,
            "longName": "Pinecrest",
            "shortName": "Pinecrest"
        }, {
            "pokemonSize": 61,
            "trainerSize": 1,
            "longName": "Miami-Dade County",
            "shortName": "Miami-Dade County"
        }, {"pokemonSize": 61, "trainerSize": 1, "longName": "33156", "shortName": "33156"}, {
            "pokemonSize": 899,
            "trainerSize": 1,
            "longName": "Chatswood",
            "shortName": "Chatswood"
        }, {
            "pokemonSize": 899,
            "trainerSize": 1,
            "longName": "Willoughby City Council",
            "shortName": "Willoughby"
        }, {"pokemonSize": 899, "trainerSize": 1, "longName": "2067", "shortName": "2067"}, {
            "pokemonSize": 694,
            "trainerSize": 1,
            "longName": "Gapyeong-gun",
            "shortName": "Gapyeong-gun"
        }, {"pokemonSize": 406, "trainerSize": 1, "longName": "Berea", "shortName": "Berea"}, {
            "pokemonSize": 406,
            "trainerSize": 1,
            "longName": "Durban Metro",
            "shortName": "Durban Metro"
        }, {
            "pokemonSize": 406,
            "trainerSize": 1,
            "longName": "Durban Metro",
            "shortName": "Durban Metro"
        }, {"pokemonSize": 406, "trainerSize": 1, "longName": "KwaZulu-Natal", "shortName": "KZN"}, {
            "pokemonSize": 666,
            "trainerSize": 1,
            "longName": "Asan-si",
            "shortName": "Asan-si"
        }, {"pokemonSize": 243, "trainerSize": 1, "longName": "Pasay", "shortName": "Pasay"}, {
            "pokemonSize": 243,
            "trainerSize": 1,
            "longName": "1300",
            "shortName": "1300"
        }, {
            "pokemonSize": 1883,
            "trainerSize": 1,
            "longName": "Elkridge",
            "shortName": "Elkridge"
        }, {
            "pokemonSize": 1883,
            "trainerSize": 1,
            "longName": "Elkridge",
            "shortName": "Elkridge"
        }, {
            "pokemonSize": 1418,
            "trainerSize": 1,
            "longName": "LaGrange",
            "shortName": "LaGrange"
        }, {
            "pokemonSize": 1418,
            "trainerSize": 1,
            "longName": "Troup County",
            "shortName": "Troup County"
        }, {
            "pokemonSize": 897,
            "trainerSize": 1,
            "longName": "Merrifield",
            "shortName": "Merrifield"
        }, {
            "pokemonSize": 897,
            "trainerSize": 1,
            "longName": "Providence",
            "shortName": "Providence"
        }, {"pokemonSize": 378, "trainerSize": 1, "longName": "Cam Ranh", "shortName": "Cam Ranh"}, {
            "pokemonSize": 378,
            "trainerSize": 1,
            "longName": "Khanh Hoa Province",
            "shortName": "Khanh Hoa Province"
        }, {
            "pokemonSize": 971,
            "trainerSize": 3,
            "longName": "Siem Reap Province",
            "shortName": "Siem Reap Province"
        }, {"pokemonSize": 357, "trainerSize": 1, "longName": "Taean-gun", "shortName": "Taean-gun"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Chikusa Ward",
            "shortName": "Chikusa Ward"
        }, {"pokemonSize": 512, "trainerSize": 1, "longName": "Adachi", "shortName": "Adachi"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Minami Ward",
            "shortName": "Minami Ward"
        }, {
            "pokemonSize": 214,
            "trainerSize": 1,
            "longName": "Lindfield",
            "shortName": "Lindfield"
        }, {
            "pokemonSize": 214,
            "trainerSize": 1,
            "longName": "Ku-Ring-Gai Council",
            "shortName": "Ku-Ring-Gai"
        }, {"pokemonSize": 214, "trainerSize": 1, "longName": "2070", "shortName": "2070"}, {
            "pokemonSize": 212,
            "trainerSize": 1,
            "longName": "Tomigusuku",
            "shortName": "Tomigusuku"
        }, {"pokemonSize": 227, "trainerSize": 1, "longName": "Kuranda", "shortName": "Kuranda"}, {
            "pokemonSize": 227,
            "trainerSize": 1,
            "longName": "Mareeba Shire",
            "shortName": "Mareeba"
        }, {"pokemonSize": 227, "trainerSize": 1, "longName": "4881", "shortName": "4881"}, {
            "pokemonSize": 282,
            "trainerSize": 1,
            "longName": "Ratsada",
            "shortName": "Ratsada"
        }, {"pokemonSize": 427, "trainerSize": 1, "longName": "Lyneham", "shortName": "Lyneham"}, {
            "pokemonSize": 538,
            "trainerSize": 2,
            "longName": "Australian Capital Territory",
            "shortName": "ACT"
        }, {"pokemonSize": 427, "trainerSize": 1, "longName": "2602", "shortName": "2602"}, {
            "pokemonSize": 326,
            "trainerSize": 1,
            "longName": "Hof",
            "shortName": "Hof"
        }, {"pokemonSize": 326, "trainerSize": 1, "longName": "Hof", "shortName": "Hof"}, {
            "pokemonSize": 326,
            "trainerSize": 1,
            "longName": "Upper Franconia",
            "shortName": "Upper Franconia"
        }, {
            "pokemonSize": 274,
            "trainerSize": 1,
            "longName": "Yamatokoriyama",
            "shortName": "Yamatokoriyama"
        }, {
            "pokemonSize": 201,
            "trainerSize": 1,
            "longName": "Jeonju-si",
            "shortName": "Jeonju-si"
        }, {"pokemonSize": 282, "trainerSize": 1, "longName": "Giza", "shortName": "Giza"}, {
            "pokemonSize": 282,
            "trainerSize": 1,
            "longName": "Al Omraneyah",
            "shortName": "Al Omraneyah"
        }, {
            "pokemonSize": 282,
            "trainerSize": 1,
            "longName": "Giza Governorate",
            "shortName": "Giza Governorate"
        }, {"pokemonSize": 282, "trainerSize": 1, "longName": "Egypt", "shortName": "EG"}, {
            "pokemonSize": 331,
            "trainerSize": 1,
            "longName": "Lambells Lagoon",
            "shortName": "Lambells Lagoon"
        }, {
            "pokemonSize": 523,
            "trainerSize": 2,
            "longName": "Litchfield Municipality",
            "shortName": "Litchfield"
        }, {
            "pokemonSize": 523,
            "trainerSize": 2,
            "longName": "Northern Territory",
            "shortName": "NT"
        }, {"pokemonSize": 331, "trainerSize": 1, "longName": "0822", "shortName": "0822"}, {
            "pokemonSize": 192,
            "trainerSize": 1,
            "longName": "Humpty Doo",
            "shortName": "Humpty Doo"
        }, {"pokemonSize": 192, "trainerSize": 1, "longName": "0836", "shortName": "0836"}, {
            "pokemonSize": 746,
            "trainerSize": 2,
            "longName": "Cary",
            "shortName": "Cary"
        }, {"pokemonSize": 760, "trainerSize": 2, "longName": "San Jose", "shortName": "San Jose"}, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Manchester",
            "shortName": "Manchester"
        }, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Manchester",
            "shortName": "Manchester"
        }, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Manchester",
            "shortName": "Manchester"
        }, {
            "pokemonSize": 157,
            "trainerSize": 1,
            "longName": "Greater Manchester",
            "shortName": "Greater Manchester"
        }, {
            "pokemonSize": 315,
            "trainerSize": 1,
            "longName": "South Yarra",
            "shortName": "South Yarra"
        }, {"pokemonSize": 315, "trainerSize": 1, "longName": "3141", "shortName": "3141"}, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Millbrae",
            "shortName": "Millbrae"
        }, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "San Mateo County",
            "shortName": "San Mateo County"
        }, {
            "pokemonSize": 272,
            "trainerSize": 1,
            "longName": "Santa Clara",
            "shortName": "Santa Clara"
        }, {
            "pokemonSize": 483,
            "trainerSize": 1,
            "longName": "Long Beach",
            "shortName": "Long Beach"
        }, {
            "pokemonSize": 1490,
            "trainerSize": 1,
            "longName": "Seal Beach",
            "shortName": "Seal Beach"
        }, {"pokemonSize": 209, "trainerSize": 1, "longName": "Torrance", "shortName": "Torrance"}, {
            "pokemonSize": 135,
            "trainerSize": 1,
            "longName": "Guri-si",
            "shortName": "Guri-si"
        }, {
            "pokemonSize": 75,
            "trainerSize": 1,
            "longName": "Fergus Falls",
            "shortName": "Fergus Falls"
        }, {
            "pokemonSize": 75,
            "trainerSize": 1,
            "longName": "Otter Tail County",
            "shortName": "Otter Tail County"
        }, {"pokemonSize": 75, "trainerSize": 1, "longName": "56537", "shortName": "56537"}, {
            "pokemonSize": 433,
            "trainerSize": 1,
            "longName": "Halifax",
            "shortName": "Halifax"
        }, {"pokemonSize": 433, "trainerSize": 1, "longName": "Halifax", "shortName": "Halifax"}, {
            "pokemonSize": 433,
            "trainerSize": 1,
            "longName": "Halifax Regional Municipality",
            "shortName": "Halifax Regional Municipality"
        }, {"pokemonSize": 433, "trainerSize": 1, "longName": "Nova Scotia", "shortName": "NS"}, {
            "pokemonSize": 0,
            "trainerSize": 0,
            "longName": "Miyamae Ward",
            "shortName": "Miyamae Ward"
        }, {"pokemonSize": 111, "trainerSize": 1, "longName": "Harrison", "shortName": "Harrison"}, {
            "pokemonSize": 111,
            "trainerSize": 1,
            "longName": "2914",
            "shortName": "2914"
        }, {
            "pokemonSize": 535,
            "trainerSize": 2,
            "longName": "Muntinlupa",
            "shortName": "Muntinlupa"
        }, {"pokemonSize": 124, "trainerSize": 1, "longName": "Kalibo", "shortName": "Kalibo"}, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Lisarow",
            "shortName": "Lisarow"
        }, {
            "pokemonSize": 269,
            "trainerSize": 1,
            "longName": "Gosford City Council",
            "shortName": "Gosford"
        }, {"pokemonSize": 269, "trainerSize": 1, "longName": "2250", "shortName": "2250"}, {
            "pokemonSize": 268,
            "trainerSize": 1,
            "longName": "Ostrava",
            "shortName": "Ostrava"
        }, {
            "pokemonSize": 268,
            "trainerSize": 1,
            "longName": "Ostrava-City District",
            "shortName": "Ostrava-City District"
        }, {
            "pokemonSize": 268,
            "trainerSize": 1,
            "longName": "Moravian-Silesian Region",
            "shortName": "Moravian-Silesian Region"
        }, {
            "pokemonSize": 128,
            "trainerSize": 2,
            "longName": "Gwangju-si",
            "shortName": "Gwangju-si"
        }, {
            "pokemonSize": 455,
            "trainerSize": 1,
            "longName": "Central Jakarta",
            "shortName": "Central Jakarta"
        }, {
            "pokemonSize": 455,
            "trainerSize": 1,
            "longName": "Central Jakarta City",
            "shortName": "Central Jakarta City"
        }, {
            "pokemonSize": 356,
            "trainerSize": 1,
            "longName": "North Jakarta",
            "shortName": "North Jakarta"
        }, {
            "pokemonSize": 356,
            "trainerSize": 1,
            "longName": "North Jakarta City",
            "shortName": "North Jakarta City"
        }, {"pokemonSize": 44, "trainerSize": 1, "longName": "Susupe", "shortName": "Susupe"}, {
            "pokemonSize": 80,
            "trainerSize": 1,
            "longName": "Lagos",
            "shortName": "Lagos"
        }, {"pokemonSize": 80, "trainerSize": 1, "longName": "Lagos", "shortName": "Lagos"}, {
            "pokemonSize": 80,
            "trainerSize": 1,
            "longName": "Nigeria",
            "shortName": "NG"
        }, {
            "pokemonSize": 124,
            "trainerSize": 1,
            "longName": "Nelspruit",
            "shortName": "Nelspruit"
        }, {"pokemonSize": 124, "trainerSize": 1, "longName": "Mbombela", "shortName": "Mbombela"}, {
            "pokemonSize": 124,
            "trainerSize": 1,
            "longName": "Ehlanzeni",
            "shortName": "Ehlanzeni"
        }, {"pokemonSize": 124, "trainerSize": 1, "longName": "Mpumalanga", "shortName": "MP"}, {
            "pokemonSize": 253,
            "trainerSize": 1,
            "longName": "Coopers Plains",
            "shortName": "Coopers Plains"
        }, {"pokemonSize": 253, "trainerSize": 1, "longName": "4108", "shortName": "4108"}, {
            "pokemonSize": 64,
            "trainerSize": 1,
            "longName": "Dagupan",
            "shortName": "Dagupan"
        }, {
            "pokemonSize": 64,
            "trainerSize": 1,
            "longName": "Pangasinan",
            "shortName": "Pangasinan"
        }, {
            "pokemonSize": 64,
            "trainerSize": 1,
            "longName": "Ilocos Region",
            "shortName": "Ilocos Region"
        }, {"pokemonSize": 64, "trainerSize": 1, "longName": "2400", "shortName": "2400"}, {
            "pokemonSize": 210,
            "trainerSize": 1,
            "longName": "Shenyang",
            "shortName": "Shenyang"
        }, {"pokemonSize": 210, "trainerSize": 1, "longName": "Liaoning", "shortName": "Liaoning"}, {
            "pokemonSize": 211,
            "trainerSize": 1,
            "longName": "Szentes",
            "shortName": "Szentes"
        }, {"pokemonSize": 211, "trainerSize": 1, "longName": "Szentesi", "shortName": "Szentesi"}, {
            "pokemonSize": 211,
            "trainerSize": 1,
            "longName": "Csongrád",
            "shortName": "Csongrád"
        }, {"pokemonSize": 211, "trainerSize": 1, "longName": "Hungary", "shortName": "HU"}, {
            "pokemonSize": 211,
            "trainerSize": 1,
            "longName": "6600",
            "shortName": "6600"
        }, {"pokemonSize": 160, "trainerSize": 1, "longName": "Kenhorst", "shortName": "Kenhorst"}, {
            "pokemonSize": 160,
            "trainerSize": 1,
            "longName": "Berks County",
            "shortName": "Berks County"
        }, {"pokemonSize": 160, "trainerSize": 1, "longName": "19607", "shortName": "19607"}, {
            "pokemonSize": 386,
            "trainerSize": 2,
            "longName": "Iruma",
            "shortName": "Iruma"
        }, {"pokemonSize": 181, "trainerSize": 1, "longName": "Helsinki", "shortName": "HKI"}, {
            "pokemonSize": 181,
            "trainerSize": 1,
            "longName": "Helsinki",
            "shortName": "Helsinki"
        }, {"pokemonSize": 181, "trainerSize": 1, "longName": "Helsinki", "shortName": "Helsinki"}, {
            "pokemonSize": 181,
            "trainerSize": 1,
            "longName": "Uusimaa",
            "shortName": "Uusimaa"
        }, {"pokemonSize": 181, "trainerSize": 1, "longName": "Finland", "shortName": "FI"}, {
            "pokemonSize": 85,
            "trainerSize": 1,
            "longName": "Niles",
            "shortName": "Niles"
        }, {
            "pokemonSize": 225,
            "trainerSize": 1,
            "longName": "Mandaue City",
            "shortName": "Mandaue City"
        }, {"pokemonSize": 225, "trainerSize": 1, "longName": "6014", "shortName": "6014"}, {
            "pokemonSize": 285,
            "trainerSize": 1,
            "longName": "Toyonaka",
            "shortName": "Toyonaka"
        }, {
            "pokemonSize": 281,
            "trainerSize": 1,
            "longName": "Murfreesboro",
            "shortName": "Murfreesboro"
        }, {
            "pokemonSize": 281,
            "trainerSize": 1,
            "longName": "Rutherford County",
            "shortName": "Rutherford County"
        }, {"pokemonSize": 281, "trainerSize": 1, "longName": "Tennessee", "shortName": "TN"}, {
            "pokemonSize": 66,
            "trainerSize": 1,
            "longName": "Carignano",
            "shortName": "Carignano"
        }, {"pokemonSize": 66, "trainerSize": 1, "longName": "Parma", "shortName": "Parma"}, {
            "pokemonSize": 66,
            "trainerSize": 1,
            "longName": "Provincia di Parma",
            "shortName": "PR"
        }, {
            "pokemonSize": 66,
            "trainerSize": 1,
            "longName": "Emilia-Romagna",
            "shortName": "Emilia-Romagna"
        }, {"pokemonSize": 66, "trainerSize": 1, "longName": "43124", "shortName": "43124"}, {
            "pokemonSize": 1,
            "trainerSize": 1,
            "longName": "Belo Horizonte",
            "shortName": "Belo Horizonte"
        }, {
            "pokemonSize": 1,
            "trainerSize": 1,
            "longName": "Belo Horizonte",
            "shortName": "Belo Horizonte"
        }, {
            "pokemonSize": 1,
            "trainerSize": 1,
            "longName": "State of Minas Gerais",
            "shortName": "MG"
        }, {
            "pokemonSize": 153,
            "trainerSize": 1,
            "longName": "Cloverdale",
            "shortName": "Cloverdale"
        }, {
            "pokemonSize": 153,
            "trainerSize": 1,
            "longName": "City of Belmont",
            "shortName": "Belmont"
        }, {"pokemonSize": 153, "trainerSize": 1, "longName": "6105", "shortName": "6105"}, {
            "pokemonSize": 286,
            "trainerSize": 1,
            "longName": "Jangheung-gun",
            "shortName": "Jangheung-gun"
        }, {"pokemonSize": 114, "trainerSize": 1, "longName": "Kodaira", "shortName": "Kodaira"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Yeoju-gun",
            "shortName": "Yeoju-gun"
        }, {"pokemonSize": 340, "trainerSize": 1, "longName": "Waukesha", "shortName": "Waukesha"}, {
            "pokemonSize": 340,
            "trainerSize": 1,
            "longName": "Waukesha County",
            "shortName": "Waukesha County"
        }, {"pokemonSize": 340, "trainerSize": 1, "longName": "Wisconsin", "shortName": "WI"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Yangju-si",
            "shortName": "Yangju-si"
        }, {
            "pokemonSize": 175,
            "trainerSize": 1,
            "longName": "Bonghwa-gun",
            "shortName": "Bonghwa-gun"
        }, {"pokemonSize": 86, "trainerSize": 1, "longName": "Mitaka", "shortName": "Mitaka"}, {
            "pokemonSize": 0,
            "trainerSize": 1,
            "longName": "Ras Al-Khaimah",
            "shortName": "Ras Al-Khaimah"
        }, {"pokemonSize": 312, "trainerSize": 1, "longName": "Nang Lae", "shortName": "Nang Lae"}, {
            "pokemonSize": 312,
            "trainerSize": 1,
            "longName": "Mueang Chiang Rai District",
            "shortName": "อ.เมืองเชียงราย"
        }, {"pokemonSize": 312, "trainerSize": 1, "longName": "57100", "shortName": "57100"}];

        $scope.words = words.map(ad=> {
            return {
                text: ad.longName, weight: ad.pokemonSize, handlers: {
                    click: ()=> {
                        $state.go('trainersRank', {district: ad.longName});
                    }
                }
            };
        });


    }
})();