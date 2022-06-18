const restaurants = [
    {
        "restaurantType": "Afghan",
        "title": "The Host",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=OFAiA6En2HD0CqLkFDCNpg&campaign_id=UiDeNSuaSJJ-a4Xa5R6s5g&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-host-toronto-2&request_id=093c5a1d1b517e87&signature=dd807eb49dd58f7c93f3c93101d620d2ec19e2c4e9e843065b66240b29ee9ea5&slot=0",
        "latitude": 43.669935,
        "longitude": -79.395858,
        "address": "14 Prince Arthur Avenue, Toronto, ON M5R 1A9",
        "phone": "(416) 962-4678",
        "description": "The Host serves deliciuos and authentic Afghan food. We are located at 14 Prince Arthur Avenue, Toronto, ON M5R 1A9 and you can contact us on (416) 962-4678"
    },
    {
        "restaurantType": "Afghan",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=X5p3E6hoNT4yMIjGRksi1A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=093c5a1d1b517e87&signature=a4c3656f13f1d09b7b5047747730f0433169e6fb1fc5948c6973298ba74497fb&slot=1",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Afghan food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "African",
        "title": "Rendez-Vous",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=0-yj2jtzLUHG2b7PpEHyog&campaign_id=yBtCwkrOtQEP86i8MJerkw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Frendez-vous-toronto&request_id=558b90200656d4e2&signature=843006c6cb6db70a971156db4b67022a3b12511e0dfec203f339b02eaeb873ee&slot=0",
        "latitude": 43.68265,
        "longitude": -79.327598,
        "address": "1408 Danforth Avenue, Toronto, ON M4J 1M9",
        "phone": "(416) 469-2513",
        "description": "Rendez-Vous serves deliciuos and authentic African food. We are located at 1408 Danforth Avenue, Toronto, ON M4J 1M9 and you can contact us on (416) 469-2513"
    },
    {
        "restaurantType": "African",
        "title": "Caribbean Sunset Restaurant and Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=lzrFRbdvpnLJze9VqJigLw&campaign_id=GUM-h3bjI2I5IprCMEsrUg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcaribbean-sunset-restaurant-and-bar-toronto&request_id=558b90200656d4e2&signature=081087d1171d2abdc36f759cf1a89e9fcf9daa8ef56037acd873cfacdad11fc0&slot=1",
        "latitude": 43.659178,
        "longitude": -79.348032,
        "address": "753A Queen St E, Toronto, ON M4M 1H3",
        "phone": "(647) 340-7607",
        "description": "Caribbean Sunset Restaurant and Bar serves deliciuos and authentic African food. We are located at 753A Queen St E, Toronto, ON M4M 1H3 and you can contact us on (647) 340-7607"
    },
    {
        "restaurantType": "American (Traditional)",
        "title": "St. Louis Bar & Grill",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=INJ-1LC57mpAsNspyb3CfA&campaign_id=21aLgKLRCkW6gy-h5oy5Ug&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fst-louis-bar-and-grill-toronto&request_id=da49383e4557c2c0&signature=a1c372ad4d428883e602130d153b40712f8d72f164e9c476b83833d2793a510f&slot=0",
        "latitude": 43.701559,
        "longitude": -79.39763,
        "address": "2050 Yonge St., Toronto, ON M4S 1Z9",
        "phone": "(416) 480-0202",
        "description": "St. Louis Bar & Grill serves deliciuos and authentic American (Traditional) food. We are located at 2050 Yonge St., Toronto, ON M4S 1Z9 and you can contact us on (416) 480-0202"
    },
    {
        "restaurantType": "American (Traditional)",
        "title": "Sidecar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TLMysu1mWiLEslCBon5W1g&campaign_id=OKE56217kHD1J1EVdJRfNQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsidecar-toronto&request_id=da49383e4557c2c0&signature=10d4da333a821491e3f3871c640b8c3228dc4372e46eaefbc70610c817285ae9&slot=1",
        "latitude": 43.6552,
        "longitude": -79.413083,
        "address": "577 College Street, Toronto, ON M6G 1B2",
        "phone": "(647) 484-2764",
        "description": "Sidecar serves deliciuos and authentic American (Traditional) food. We are located at 577 College Street, Toronto, ON M6G 1B2 and you can contact us on (647) 484-2764"
    },
    {
        "restaurantType": "Arabian",
        "title": "Xawaash",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=pTbkdBDDKxNVjKUZ_6RAug&campaign_id=oG6uF1i4W8mfYjJJ4sRX6g&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fxawaash-toronto&request_id=d84d7734c759bda1&signature=6690faf6ab3186bedbb1404d700c20768dbd63f032a0c0d98a07c217b1611f65&slot=0",
        "latitude": 43.71528,
        "longitude": -79.592866,
        "address": "130 Queens Plate Drive, Unit 1, Toronto, ON M9W",
        "phone": "(647) 849-3626",
        "description": "Xawaash serves deliciuos and authentic Arabian food. We are located at 130 Queens Plate Drive, Unit 1, Toronto, ON M9W and you can contact us on (647) 849-3626"
    },
    {
        "restaurantType": "Arabian",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=ha132aKW__UD8D9Qtztgtw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=d84d7734c759bda1&signature=2a35e36c519a020169e626d22d1d87f0229a97789929371bb2b1daa4c11a853c&slot=1",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Arabian food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "Argentine",
        "title": "Copacabana Brazilian Steakhouse",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=GcxE5hK_TaHP4EZFDYz2mg&campaign_id=c07ig0BuCuBCdic5OnpEhw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcopacabana-brazilian-steakhouse-toronto&request_id=f4439625076390b4&signature=40e8d7e4538d1e7237074980093bc170bab509cc5ab7fd95959324108f7aa0f4&slot=0",
        "latitude": 43.648344,
        "longitude": -79.387831,
        "address": "230 Adelaide Street W, Toronto, ON M5H 1W7",
        "phone": "(888) 432-6721",
        "description": "Copacabana Brazilian Steakhouse serves deliciuos and authentic Argentine food. We are located at 230 Adelaide Street W, Toronto, ON M5H 1W7 and you can contact us on (888) 432-6721"
    },
    {
        "restaurantType": "Argentine",
        "title": "CopaCabana Brazilian Steakhouse",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=yS7331JlJdKlk9VNaSt64w&campaign_id=7SvwXJlQBKWHSzsrt1VxJA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcopacabana-brazilian-steakhouse-vaughan&request_id=f4439625076390b4&signature=9c1147289a85b76d9cf35614d446e6a4c41bd9409365b9f8d8653e65e784c895&slot=1",
        "latitude": 43.784379,
        "longitude": -79.56579,
        "address": "205 Marycroft Avenue, Vaughan, ON L4L 5X8",
        "phone": "(888) 432-6721",
        "description": "CopaCabana Brazilian Steakhouse serves deliciuos and authentic Argentine food. We are located at 205 Marycroft Avenue, Vaughan, ON L4L 5X8 and you can contact us on (888) 432-6721"
    },
    {
        "restaurantType": "Asian Fusion",
        "title": "Food Trip",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=6ReLM6LcJmYhVWlMNFNhxw&campaign_id=RYuP4amdJ9XLHM3Gkt8VAg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Ffood-trip-toronto&request_id=e8715fd08eb4b752&signature=45ec0f86db5c5731a3b9ad1e4e6ca730ab17b1a03cbb4ce4403c2bc293d29f47&slot=0",
        "latitude": 43.738522,
        "longitude": -79.434522,
        "address": "3790 Bathurst Street, Toronto, ON M3H",
        "phone": "(416) 398-4800",
        "description": "Food Trip serves deliciuos and authentic Asian Fusion food. We are located at 3790 Bathurst Street, Toronto, ON M3H and you can contact us on (416) 398-4800"
    },
    {
        "restaurantType": "Asian Fusion",
        "title": "Nirvana",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=hNSvyreISNd9XXrHyyaSjQ&campaign_id=5b9kieiWImBF-LMvNqdrqg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnirvana-toronto&request_id=e8715fd08eb4b752&signature=73f682c4041120e798dbe723a15fbdccfa1d7455ffa7087f786bcdd4b0433f01&slot=1",
        "latitude": 43.656571,
        "longitude": -79.40712,
        "address": "434 College St, Toronto, ON M4W 1A7",
        "phone": "(437) 370-3547",
        "description": "Nirvana serves deliciuos and authentic Asian Fusion food. We are located at 434 College St, Toronto, ON M4W 1A7 and you can contact us on (437) 370-3547"
    },
    {
        "restaurantType": "Australian",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=0d467bf726ae36ab&signature=8867e4eba6c495e3a36385010f372d9a72f94f4aba4f204d645843e0fa2c1c86&slot=0",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Australian food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Australian",
        "title": "Page One",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=HkPnai4LMRjAYZkZ2AQLkA&campaign_id=Qb13Bj2ayPlzwEJcDuNI7Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpage-one-toronto-5&request_id=0d467bf726ae36ab&signature=faf7304c8d5c48819d4530777f4d9d23a816dac981dc37a28bf84e726eadc660&slot=1",
        "latitude": 43.657853,
        "longitude": -79.376254,
        "address": "106 Mutual Street, Unit 8, Toronto, ON M5B 2R7",
        "phone": "(416) 663-4920",
        "description": "Page One serves deliciuos and authentic Australian food. We are located at 106 Mutual Street, Unit 8, Toronto, ON M5B 2R7 and you can contact us on (416) 663-4920"
    },
    {
        "restaurantType": "Austrian",
        "title": "Sidecar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TLMysu1mWiLEslCBon5W1g&campaign_id=OKE56217kHD1J1EVdJRfNQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsidecar-toronto&request_id=cbff5657e17492ab&signature=66f413264851ccfc53d29c4a7497ca1eaee59ce866a1db49544542c8106c96e2&slot=0",
        "latitude": 43.6552,
        "longitude": -79.413083,
        "address": "577 College Street, Toronto, ON M6G 1B2",
        "phone": "(647) 484-2764",
        "description": "Sidecar serves deliciuos and authentic Austrian food. We are located at 577 College Street, Toronto, ON M6G 1B2 and you can contact us on (647) 484-2764"
    },
    {
        "restaurantType": "Austrian",
        "title": "Bread & Butter",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=U0md3UhNA2123G-vYR9hWQ&campaign_id=lRpaNevl2Y_qCMdX0bfhzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fbread-and-butter-toronto&request_id=cbff5657e17492ab&signature=1a3a4f7f7e0f1fb61908098c60eaf7fb2ccc354d621cffd62635cd1e0ccb1a56&slot=1",
        "latitude": 43.701638,
        "longitude": -79.38744,
        "address": "507 Mount Pleasant Rd, Toronto, ON M4S 2L9",
        "phone": "(647) 691-4910",
        "description": "Bread & Butter serves deliciuos and authentic Austrian food. We are located at 507 Mount Pleasant Rd, Toronto, ON M4S 2L9 and you can contact us on (647) 691-4910"
    },
    {
        "restaurantType": "Bangladeshi",
        "title": "Georgia Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=1PvEnSgdZVZZlH552XUTGg&campaign_id=AHzWUNeCeZnGXA8r8xNcRw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fgeorgia-restaurant-toronto&request_id=6fa0e5350ffc4335&signature=1ab0af2975e4dc2ab63f5562dbaca1c00abd1457b6810f462aeb06d2371e4f36&slot=0",
        "latitude": 43.767519,
        "longitude": -79.475297,
        "address": "1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4",
        "phone": "(416) 907-2200",
        "description": "Georgia Restaurant serves deliciuos and authentic Bangladeshi food. We are located at 1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4 and you can contact us on (416) 907-2200"
    },
    {
        "restaurantType": "Bangladeshi",
        "title": "Xawaash",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=pTbkdBDDKxNVjKUZ_6RAug&campaign_id=tgOd9FGRgQx1NO8liswl0A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fxawaash-toronto&request_id=6fa0e5350ffc4335&signature=ae0aed8d19ea4d01b2a02b5be7080e24c72ed21b3224059c424769f6169cad99&slot=1",
        "latitude": 43.71528,
        "longitude": -79.592866,
        "address": "130 Queens Plate Drive, Unit 1, Toronto, ON M9W",
        "phone": "(647) 849-3626",
        "description": "Xawaash serves deliciuos and authentic Bangladeshi food. We are located at 130 Queens Plate Drive, Unit 1, Toronto, ON M9W and you can contact us on (647) 849-3626"
    },
    {
        "restaurantType": "Barbeque",
        "title": "Nirvana",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=hNSvyreISNd9XXrHyyaSjQ&campaign_id=5b9kieiWImBF-LMvNqdrqg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnirvana-toronto&request_id=a88a9d38e97907f2&signature=6ef3cd6420aa477f128d0b03f42e4d5694589930c8f4f703e9724b7f797fad86&slot=0",
        "latitude": 43.656571,
        "longitude": -79.40712,
        "address": "434 College St, Toronto, ON M4W 1A7",
        "phone": "(437) 370-3547",
        "description": "Nirvana serves deliciuos and authentic Barbeque food. We are located at 434 College St, Toronto, ON M4W 1A7 and you can contact us on (437) 370-3547"
    },
    {
        "restaurantType": "Barbeque",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=a88a9d38e97907f2&signature=345cf0f94627492e32ac11fad5c5e03003683ff4b0a200e72ffc027f204c6498&slot=1",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Barbeque food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Basque",
        "title": "Black Briik Restobar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=Hj_pXjhl-J2yjpJX-vyeMA&campaign_id=3-lubTve0UV-OvlKikgGBw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fblack-briik-restobar-toronto&request_id=8dde65fbb41c2cf4&signature=db285b06e6d47b1ed5b2b72c1b18ed4231198c81f8f2f885109f2c56fffe3261&slot=0",
        "latitude": 43.660093,
        "longitude": -79.433138,
        "address": "1077 Bloor St W, Toronto, ON M6H 1M5",
        "phone": "(416) 546-6123",
        "description": "Black Briik Restobar serves deliciuos and authentic Basque food. We are located at 1077 Bloor St W, Toronto, ON M6H 1M5 and you can contact us on (416) 546-6123"
    },
    {
        "restaurantType": "Basque",
        "title": "Motivos Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/motivos-restaurant-toronto",
        "latitude": 43.67901,
        "longitude": -79.438949,
        "address": "1042 St Clair Avenue W, Toronto, ON M6E 1A5",
        "phone": "(416) 652-3855",
        "description": "Motivos Restaurant serves deliciuos and authentic Basque food. We are located at 1042 St Clair Avenue W, Toronto, ON M6E 1A5 and you can contact us on (416) 652-3855"
    },
    {
        "restaurantType": "Belgian",
        "title": "The Monkey Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=mRrgBIT8vsYdI3YSfzCQhg&campaign_id=QfMO4pheasHESYIRgicB0Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-monkey-bar-toronto&request_id=159586776aafdce9&signature=7a3d4287394e835d8b95b02f28edf5005a2502ecd1a1016aef8182a02b4d5666&slot=0",
        "latitude": 43.731489,
        "longitude": -79.403703,
        "address": "3353 Yonge Street, Toronto, ON M4N 2M6",
        "phone": "(647) 849-3894",
        "description": "The Monkey Bar serves deliciuos and authentic Belgian food. We are located at 3353 Yonge Street, Toronto, ON M4N 2M6 and you can contact us on (647) 849-3894"
    },
    {
        "restaurantType": "Belgian",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=159586776aafdce9&signature=c873ba48acef75e6edfce69f211bec2088844f4a29003dc3723ef8f36e9998f5&slot=1",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Belgian food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Bistros",
        "title": "The Monkey Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=mRrgBIT8vsYdI3YSfzCQhg&campaign_id=QfMO4pheasHESYIRgicB0Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-monkey-bar-toronto&request_id=80cc79dac73fa205&signature=83a7f2d02a8186c7e510fbfdfbdac0015830c62a6e12b4ad80ca81cc64539d78&slot=0",
        "latitude": 43.731489,
        "longitude": -79.403703,
        "address": "3353 Yonge Street, Toronto, ON M4N 2M6",
        "phone": "(647) 849-3894",
        "description": "The Monkey Bar serves deliciuos and authentic Bistros food. We are located at 3353 Yonge Street, Toronto, ON M4N 2M6 and you can contact us on (647) 849-3894"
    },
    {
        "restaurantType": "Bistros",
        "title": "Hawthorne Food and Drink",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=6rTzYUGghp3XHPgOGaO8UQ&campaign_id=6xcrlnfHcTGg9qvEXtW8yA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fhawthorne-food-and-drink-toronto&request_id=80cc79dac73fa205&signature=e7fbe2ba5a905ae8dbc6864e73cb7cd403b7826d8a21ac16adb7de7055fa7995&slot=1",
        "latitude": 43.652368,
        "longitude": -79.376226,
        "address": "60 Richmond Street E, Toronto, ON M5C 1N8",
        "phone": "(647) 930-9517",
        "description": "Hawthorne Food and Drink serves deliciuos and authentic Bistros food. We are located at 60 Richmond Street E, Toronto, ON M5C 1N8 and you can contact us on (647) 930-9517"
    },
    {
        "restaurantType": "Brasseries",
        "title": "The Monkey Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=mRrgBIT8vsYdI3YSfzCQhg&campaign_id=QfMO4pheasHESYIRgicB0Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-monkey-bar-toronto&request_id=e34ea22ca5be2273&signature=225d2f5f310077eac4a44440bdb1308d1e0a630a851f8f70efea09d2cfb6839e&slot=0",
        "latitude": 43.731489,
        "longitude": -79.403703,
        "address": "3353 Yonge Street, Toronto, ON M4N 2M6",
        "phone": "(647) 849-3894",
        "description": "The Monkey Bar serves deliciuos and authentic Brasseries food. We are located at 3353 Yonge Street, Toronto, ON M4N 2M6 and you can contact us on (647) 849-3894"
    },
    {
        "restaurantType": "Brasseries",
        "title": "Sidecar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TLMysu1mWiLEslCBon5W1g&campaign_id=OKE56217kHD1J1EVdJRfNQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsidecar-toronto&request_id=e34ea22ca5be2273&signature=a628af2e0c564a7a6365d3cdc2817505701880aa4244f7f0bee6e8c68163d105&slot=1",
        "latitude": 43.6552,
        "longitude": -79.413083,
        "address": "577 College Street, Toronto, ON M6G 1B2",
        "phone": "(647) 484-2764",
        "description": "Sidecar serves deliciuos and authentic Brasseries food. We are located at 577 College Street, Toronto, ON M6G 1B2 and you can contact us on (647) 484-2764"
    },
    {
        "restaurantType": "Brazilian",
        "title": "Copacabana Brazilian Steakhouse",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=GcxE5hK_TaHP4EZFDYz2mg&campaign_id=c07ig0BuCuBCdic5OnpEhw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcopacabana-brazilian-steakhouse-toronto&request_id=3f98d695cab86632&signature=23885ffcc907f8e07d51bcc9aed6710e94665ca3c407a155ee74f30ed1ec5c96&slot=0",
        "latitude": 43.648344,
        "longitude": -79.387831,
        "address": "230 Adelaide Street W, Toronto, ON M5H 1W7",
        "phone": "(888) 432-6721",
        "description": "Copacabana Brazilian Steakhouse serves deliciuos and authentic Brazilian food. We are located at 230 Adelaide Street W, Toronto, ON M5H 1W7 and you can contact us on (888) 432-6721"
    },
    {
        "restaurantType": "Brazilian",
        "title": "CopaCabana Brazilian Steakhouse",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=yS7331JlJdKlk9VNaSt64w&campaign_id=7SvwXJlQBKWHSzsrt1VxJA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcopacabana-brazilian-steakhouse-vaughan&request_id=3f98d695cab86632&signature=3da043d85145581deb394b246ab1ea8fb1cb15befeaab3191443dba68990d12a&slot=1",
        "latitude": 43.784379,
        "longitude": -79.56579,
        "address": "205 Marycroft Avenue, Vaughan, ON L4L 5X8",
        "phone": "(888) 432-6721",
        "description": "CopaCabana Brazilian Steakhouse serves deliciuos and authentic Brazilian food. We are located at 205 Marycroft Avenue, Vaughan, ON L4L 5X8 and you can contact us on (888) 432-6721"
    },
    {
        "restaurantType": "Breakfast & Brunch",
        "title": "Hawthorne Food and Drink",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=6rTzYUGghp3XHPgOGaO8UQ&campaign_id=6xcrlnfHcTGg9qvEXtW8yA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fhawthorne-food-and-drink-toronto&request_id=17c3a25097106ec9&signature=9704fbe4584f180f68ac9ea2e20cce73a02ff3251aaa0e16d6accbb382ed0cfa&slot=0",
        "latitude": 43.652368,
        "longitude": -79.376226,
        "address": "60 Richmond Street E, Toronto, ON M5C 1N8",
        "phone": "(647) 930-9517",
        "description": "Hawthorne Food and Drink serves deliciuos and authentic Breakfast & Brunch food. We are located at 60 Richmond Street E, Toronto, ON M5C 1N8 and you can contact us on (647) 930-9517"
    },
    {
        "restaurantType": "Breakfast & Brunch",
        "title": "Café La Gaffe",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=jo4KmAqlZ7vxjHIP7IIkAw&campaign_id=PwR8J_9TUAWfLGS-Qyc5Zw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcaf%25C3%25A9-la-gaffe-toronto-2&request_id=17c3a25097106ec9&signature=8d7141ba4e9faeb9d6a4aa886e6da816619dd3c832d064b9154c422789c5bafe&slot=1",
        "latitude": 43.656218,
        "longitude": -79.393334,
        "address": "24 Baldwin Street, Toronto, ON M5T 1L2",
        "phone": "(647) 849-3286",
        "description": "Café La Gaffe serves deliciuos and authentic Breakfast & Brunch food. We are located at 24 Baldwin Street, Toronto, ON M5T 1L2 and you can contact us on (647) 849-3286"
    },
    {
        "restaurantType": "British",
        "title": "Sidecar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TLMysu1mWiLEslCBon5W1g&campaign_id=OKE56217kHD1J1EVdJRfNQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsidecar-toronto&request_id=bafa74d81ca462d0&signature=6705da9c029dd8457604e911df55116b4c6f7bd01b597755bb4bb1559a2527ae&slot=0",
        "latitude": 43.6552,
        "longitude": -79.413083,
        "address": "577 College Street, Toronto, ON M6G 1B2",
        "phone": "(647) 484-2764",
        "description": "Sidecar serves deliciuos and authentic British food. We are located at 577 College Street, Toronto, ON M6G 1B2 and you can contact us on (647) 484-2764"
    },
    {
        "restaurantType": "British",
        "title": "Hawthorne Food and Drink",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=6rTzYUGghp3XHPgOGaO8UQ&campaign_id=6xcrlnfHcTGg9qvEXtW8yA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fhawthorne-food-and-drink-toronto&request_id=bafa74d81ca462d0&signature=2e526edc87713ef897ee8082941ba2738e91ba732c880c7585995e0ebecd41f1&slot=1",
        "latitude": 43.652368,
        "longitude": -79.376226,
        "address": "60 Richmond Street E, Toronto, ON M5C 1N8",
        "phone": "(647) 930-9517",
        "description": "Hawthorne Food and Drink serves deliciuos and authentic British food. We are located at 60 Richmond Street E, Toronto, ON M5C 1N8 and you can contact us on (647) 930-9517"
    },
    {
        "restaurantType": "Buffets",
        "title": "Pure Spirits Oyster House & Grill",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=zIfCWjZ0RAe8YVMSPZdOdA&campaign_id=JB_UqLUpuhr0ItkrqLT_cQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpure-spirits-oyster-house-and-grill-toronto&request_id=686908361c0e32d2&signature=ef998049d610417ecb318788f1ad46e4a44936aaffd8c781e6e4ce47c7609e52&slot=0",
        "latitude": 43.650418,
        "longitude": -79.358725,
        "address": "17 Tank House Lane, Toronto, ON M5A 3C4",
        "phone": "(416) 361-5859",
        "description": "Pure Spirits Oyster House & Grill serves deliciuos and authentic Buffets food. We are located at 17 Tank House Lane, Toronto, ON M5A 3C4 and you can contact us on (416) 361-5859"
    },
    {
        "restaurantType": "Buffets",
        "title": "Food Trip",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=6ReLM6LcJmYhVWlMNFNhxw&campaign_id=RYuP4amdJ9XLHM3Gkt8VAg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Ffood-trip-toronto&request_id=686908361c0e32d2&signature=12cfe9ce588a509230d9a9017b322da491de4bc1ff6cacea5860c8832c321915&slot=1",
        "latitude": 43.738522,
        "longitude": -79.434522,
        "address": "3790 Bathurst Street, Toronto, ON M3H",
        "phone": "(416) 398-4800",
        "description": "Food Trip serves deliciuos and authentic Buffets food. We are located at 3790 Bathurst Street, Toronto, ON M3H and you can contact us on (416) 398-4800"
    },
    {
        "restaurantType": "Burgers",
        "title": "Hero Certified Burgers - Yonge & St. Clair",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=fThhK-Slsc_EPuQDQkzvhA&campaign_id=ziumLQyE3GAL9HYlf1AszQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fhero-certified-burgers-yonge-and-st-clair-toronto&request_id=428589ca787f9e7f&signature=3b7ec2eda753b79b9ba877011d6337adb3f2955fb5bda029f7563bb5bda89847&slot=0",
        "latitude": 43.687069,
        "longitude": -79.393648,
        "address": "1397 Yonge Street, Toronto, ON M4T 1Y4",
        "phone": "(647) 748-1322",
        "description": "Hero Certified Burgers - Yonge & St. Clair serves deliciuos and authentic Burgers food. We are located at 1397 Yonge Street, Toronto, ON M4T 1Y4 and you can contact us on (647) 748-1322"
    },
    {
        "restaurantType": "Burgers",
        "title": "Urbun Eats Co",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_3IE9guLHvAr-kJpH4Zd7Q&campaign_id=-S-v9AShDzzXXlXiY-zyzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Furbun-eats-co-toronto-2&request_id=428589ca787f9e7f&signature=1a3fc29b68cebc6a31581ab190d62f3105cc6e270dbe3aba14792834f2648471&slot=1",
        "latitude": 43.71367,
        "longitude": -79.365092,
        "address": "874 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 556-0319",
        "description": "Urbun Eats Co serves deliciuos and authentic Burgers food. We are located at 874 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 556-0319"
    },
    {
        "restaurantType": "Burmese",
        "title": "Royal Myanmar Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/royal-myanmar-restaurant-etobicoke",
        "latitude": 43.603078,
        "longitude": -79.539279,
        "address": "438 Horner Avenue, Unit A, Etobicoke, ON M8W 2B3",
        "phone": "(647) 891-7819",
        "description": "Royal Myanmar Restaurant serves deliciuos and authentic Burmese food. We are located at 438 Horner Avenue, Unit A, Etobicoke, ON M8W 2B3 and you can contact us on (647) 891-7819"
    },
    {
        "restaurantType": "Burmese",
        "title": "Mandalay Restaurant and Bar",
        "imgSrc": "https://www.yelp.ca/biz/mandalay-restaurant-and-bar-niagara-falls",
        "latitude": 43.088888,
        "longitude": -78.987504,
        "address": "6621 Niagara Falls Blvd, Niagara Falls, NY 14304, United States",
        "phone": "(716) 283-8100",
        "description": "Mandalay Restaurant and Bar serves deliciuos and authentic Burmese food. We are located at 6621 Niagara Falls Blvd, Niagara Falls, NY 14304, United States and you can contact us on (716) 283-8100"
    },
    {
        "restaurantType": "Cafes",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=67d86e9723e255b5&signature=6cad68b6ffd5dbc53fa91af6a0a725456cbe655c8cfa1a79c389d02de764f6ac&slot=0",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Cafes food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Cafes",
        "title": "Cafe Alice",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=1dHkXAQGYuxpQWoIG5WKDQ&campaign_id=Eym3ZaFW6gw4Xnl3C51m2g&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcafe-alice-markham&request_id=67d86e9723e255b5&signature=821f5cf03ea0fb47fd1d6158bd42a3cdaeb797cfb364c0456575642b4de1c55e&slot=1",
        "latitude": 43.856108,
        "longitude": -79.30318,
        "address": "8333 Kennedy Road, Unit 32-33, Markham, ON L3R 1J5",
        "phone": "(905) 604-9040",
        "description": "Cafe Alice serves deliciuos and authentic Cafes food. We are located at 8333 Kennedy Road, Unit 32-33, Markham, ON L3R 1J5 and you can contact us on (905) 604-9040"
    },
    {
        "restaurantType": "Cajun/Creole",
        "title": "New Orleans Seafood & Steakhouse",
        "imgSrc": "https://www.yelp.ca/biz/new-orleans-seafood-and-steakhouse-toronto",
        "latitude": 43.677592,
        "longitude": -79.506363,
        "address": "267 Scarlett Road, Toronto, ON M6N 4L1",
        "phone": "(416) 766-7001",
        "description": "New Orleans Seafood & Steakhouse serves deliciuos and authentic Cajun/Creole food. We are located at 267 Scarlett Road, Toronto, ON M6N 4L1 and you can contact us on (416) 766-7001"
    },
    {
        "restaurantType": "Cajun/Creole",
        "title": "Southern Accent Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/southern-accent-restaurant-toronto-2",
        "latitude": 43.654244,
        "longitude": -79.422943,
        "address": "839 College Street, Toronto, ON M6H 1A1",
        "phone": "(416) 901-3211",
        "description": "Southern Accent Restaurant serves deliciuos and authentic Cajun/Creole food. We are located at 839 College Street, Toronto, ON M6H 1A1 and you can contact us on (416) 901-3211"
    },
    {
        "restaurantType": "Cambodian",
        "title": "Sushi Run",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=PgxjXf7enBAyzjR9ftLZ2A&campaign_id=N1PTOQsFutWK5cNPBpwZMw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsushi-run-toronto&request_id=7da805fe66b16fe5&signature=b58df3aa8b9453a70611ae9247e0de4e6fee6770534bdbd15612f5b0ffdba272&slot=0",
        "latitude": 43.644901,
        "longitude": -79.521863,
        "address": "3351 Bloor Street W, Toronto, ON M8X 1E9",
        "phone": "(416) 237-9900",
        "description": "Sushi Run serves deliciuos and authentic Cambodian food. We are located at 3351 Bloor Street W, Toronto, ON M8X 1E9 and you can contact us on (416) 237-9900"
    },
    {
        "restaurantType": "Cambodian",
        "title": "Pho Xin Chào",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=orS5gYr8phw6YfV-oEPnTw&campaign_id=IvLwVhdZCoIY7QbVtQEx6A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpho-xin-ch%25C3%25A0o-markham-3&request_id=7da805fe66b16fe5&signature=5c815892ffd1e15bb28a6779ea7e2d39bc764264b4aa13721b6314271d4b6503&slot=1",
        "latitude": 43.799626,
        "longitude": -79.420131,
        "address": "7057 Yonge Street, Markham, ON L3T 2A6",
        "phone": "(905) 881-8826",
        "description": "Pho Xin Chào serves deliciuos and authentic Cambodian food. We are located at 7057 Yonge Street, Markham, ON L3T 2A6 and you can contact us on (905) 881-8826"
    },
    {
        "restaurantType": "Canadian (New)",
        "title": "Richmond Station",
        "imgSrc": "https://www.yelp.ca/biz/richmond-station-toronto",
        "latitude": 43.651373,
        "longitude": -79.379285,
        "address": "1 Richmond Street W, Toronto, ON M5H 3W4",
        "phone": "(647) 748-1444",
        "description": "Richmond Station serves deliciuos and authentic Canadian (New) food. We are located at 1 Richmond Street W, Toronto, ON M5H 3W4 and you can contact us on (647) 748-1444"
    },
    {
        "restaurantType": "Canadian (New)",
        "title": "Grill Gate",
        "imgSrc": "https://www.yelp.ca/biz/grill-gate-toronto-2",
        "latitude": 43.753164,
        "longitude": -79.451622,
        "address": "832 Sheppard Avenue W, Toronto, ON M3H 2T3",
        "phone": "(416) 631-1167",
        "description": "Grill Gate serves deliciuos and authentic Canadian (New) food. We are located at 832 Sheppard Avenue W, Toronto, ON M3H 2T3 and you can contact us on (416) 631-1167"
    },
    {
        "restaurantType": "Cantonese",
        "title": "Fishman Lobster Clubhouse Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_xAJZOKBMPOe47p1MphB2w&campaign_id=9QGTRB0KSlAz6eoHgMzQCQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Ffishman-lobster-clubhouse-restaurant-toronto&request_id=96496b8b6e86130e&signature=b6deddadebe72d2dd1e42e443201664e8fb285243214f815c62a29c8a39bb51d&slot=0",
        "latitude": 43.801976,
        "longitude": -79.295159,
        "address": "4020 Finch Avenue E, Toronto, ON M1S 3T6",
        "phone": "(647) 849-3885",
        "description": "Fishman Lobster Clubhouse Restaurant serves deliciuos and authentic Cantonese food. We are located at 4020 Finch Avenue E, Toronto, ON M1S 3T6 and you can contact us on (647) 849-3885"
    },
    {
        "restaurantType": "Cantonese",
        "title": "Liwan Kitchen",
        "imgSrc": "https://www.yelp.ca/biz/liwan-kitchen-toronto",
        "latitude": 43.785527,
        "longitude": -79.27625,
        "address": "4271 Sheppard Avenue E, Unit 2, Toronto, ON M1S",
        "phone": "(416) 479-3568",
        "description": "Liwan Kitchen serves deliciuos and authentic Cantonese food. We are located at 4271 Sheppard Avenue E, Unit 2, Toronto, ON M1S and you can contact us on (416) 479-3568"
    },
    {
        "restaurantType": "Caribbean",
        "title": "Scotthill Carribean Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=8894q9WTvkYN6oNUt3fJ3g&campaign_id=GvdySO3FV9XFiTzXZZYU0Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fscotthill-carribean-cuisine-toronto-2&request_id=7769a56fd1d14382&signature=94338d1bb956e5947eed4953af9520b4ce8cb239f353b24d070e7db493fb4cec&slot=0",
        "latitude": 43.733943,
        "longitude": -79.419534,
        "address": "1943 Avenue Road, Toronto, ON M5M 4A2",
        "phone": "(647) 691-6214",
        "description": "Scotthill Carribean Cuisine serves deliciuos and authentic Caribbean food. We are located at 1943 Avenue Road, Toronto, ON M5M 4A2 and you can contact us on (647) 691-6214"
    },
    {
        "restaurantType": "Caribbean",
        "title": "Chris Jerk Caribbean Bistro",
        "imgSrc": "https://www.yelp.ca/biz/chris-jerk-caribbean-bistro-toronto",
        "latitude": 43.790331,
        "longitude": -79.302267,
        "address": "2570 Birchmount Road, Toronto, ON M1T 2M5",
        "phone": "(416) 297-5375",
        "description": "Chris Jerk Caribbean Bistro serves deliciuos and authentic Caribbean food. We are located at 2570 Birchmount Road, Toronto, ON M1T 2M5 and you can contact us on (416) 297-5375"
    },
    {
        "restaurantType": "Cheesesteaks",
        "title": "Philthy Philly’s",
        "imgSrc": "https://www.yelp.ca/biz/philthy-phillys-toronto-4",
        "latitude": 43.658724,
        "longitude": -79.382266,
        "address": "372 Yonge Street, Toronto, ON M5G 2K9",
        "phone": "(647) 351-7445",
        "description": "Philthy Philly’s serves deliciuos and authentic Cheesesteaks food. We are located at 372 Yonge Street, Toronto, ON M5G 2K9 and you can contact us on (647) 351-7445"
    },
    {
        "restaurantType": "Cheesesteaks",
        "title": "illstyl3 Sammies",
        "imgSrc": "https://www.yelp.ca/biz/illstyl3-sammies-toronto",
        "latitude": 43.649107,
        "longitude": -79.391195,
        "address": "102-300 Richmond Street W, Toronto, ON M5V 1X2",
        "phone": "(416) 205-9627",
        "description": "illstyl3 Sammies serves deliciuos and authentic Cheesesteaks food. We are located at 102-300 Richmond Street W, Toronto, ON M5V 1X2 and you can contact us on (416) 205-9627"
    },
    {
        "restaurantType": "Chicken Shop",
        "title": "Cluck Clucks",
        "imgSrc": "https://www.yelp.ca/biz/cluck-clucks-toronto-2",
        "latitude": 43.649769,
        "longitude": -79.36609,
        "address": "222 The Esplanade, Toronto, ON M5A 4M8",
        "phone": "(647) 748-2582",
        "description": "Cluck Clucks serves deliciuos and authentic Chicken Shop food. We are located at 222 The Esplanade, Toronto, ON M5A 4M8 and you can contact us on (647) 748-2582"
    },
    {
        "restaurantType": "Chicken Shop",
        "title": "KABOOM Chicken",
        "imgSrc": "https://www.yelp.ca/biz/kaboom-chicken-toronto",
        "latitude": 43.659084,
        "longitude": -79.349403,
        "address": "722 Queen St E, Toronto, ON M4M 1H2",
        "phone": "(647) 846-8776",
        "description": "KABOOM Chicken serves deliciuos and authentic Chicken Shop food. We are located at 722 Queen St E, Toronto, ON M4M 1H2 and you can contact us on (647) 846-8776"
    },
    {
        "restaurantType": "Chicken Wings",
        "title": "Fanzone Wings & Ribs",
        "imgSrc": "https://www.yelp.ca/biz/fanzone-wings-and-ribs-toronto",
        "latitude": 43.753057,
        "longitude": -79.276234,
        "address": "1168 Kennedy Road, Toronto, ON M1P",
        "phone": "(416) 551-0415",
        "description": "Fanzone Wings & Ribs serves deliciuos and authentic Chicken Wings food. We are located at 1168 Kennedy Road, Toronto, ON M1P and you can contact us on (416) 551-0415"
    },
    {
        "restaurantType": "Chicken Wings",
        "title": "Duff’s Famous Wings",
        "imgSrc": "https://www.yelp.ca/biz/duffs-famous-wings-toronto",
        "latitude": 43.706068,
        "longitude": -79.375572,
        "address": "1604 Bayview Ave, Toronto, ON M4G 3B7",
        "phone": "(416) 544-0100",
        "description": "Duff’s Famous Wings serves deliciuos and authentic Chicken Wings food. We are located at 1604 Bayview Ave, Toronto, ON M4G 3B7 and you can contact us on (416) 544-0100"
    },
    {
        "restaurantType": "Chinese",
        "title": "Swatow Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/swatow-restaurant-toronto",
        "latitude": 43.653836,
        "longitude": -79.398109,
        "address": "309 Spadina Avenue, Toronto, ON M5T 2E6",
        "phone": "(416) 977-0601",
        "description": "Swatow Restaurant serves deliciuos and authentic Chinese food. We are located at 309 Spadina Avenue, Toronto, ON M5T 2E6 and you can contact us on (416) 977-0601"
    },
    {
        "restaurantType": "Chinese",
        "title": "GB Hand-pulled Noodles",
        "imgSrc": "https://www.yelp.ca/biz/gb-hand-pulled-noodles-toronto",
        "latitude": 43.656641,
        "longitude": -79.383747,
        "address": "66 Edward Street, Toronto, ON M5G 1C9",
        "phone": "",
        "description": "GB Hand-pulled Noodles serves deliciuos and authentic Chinese food. We are located at 66 Edward Street, Toronto, ON M5G 1C9 and you can contact us on "
    },
    {
        "restaurantType": "Colombian",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=66fd10a126752dd0&signature=4f2862882b56320a6a3ba95b50f7067263e9f10cddc784639a04c6fdb1826d76&slot=0",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Colombian food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Colombian",
        "title": "Los Arrieros",
        "imgSrc": "https://www.yelp.ca/biz/los-arrieros-toronto-2",
        "latitude": 43.655846,
        "longitude": -79.487313,
        "address": "276 Jane Street, Toronto, ON M6S 3Z2",
        "phone": "(416) 761-1600",
        "description": "Los Arrieros serves deliciuos and authentic Colombian food. We are located at 276 Jane Street, Toronto, ON M6S 3Z2 and you can contact us on (416) 761-1600"
    },
    {
        "restaurantType": "Comfort Food",
        "title": "Urbun Eats Co",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_3IE9guLHvAr-kJpH4Zd7Q&campaign_id=-S-v9AShDzzXXlXiY-zyzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Furbun-eats-co-toronto-2&request_id=85c6ed27d07d8a76&signature=8ac72d34c06c9cb0562e44d0db44661f5798c43aa788ea70990a5c2987415502&slot=0",
        "latitude": 43.71367,
        "longitude": -79.365092,
        "address": "874 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 556-0319",
        "description": "Urbun Eats Co serves deliciuos and authentic Comfort Food food. We are located at 874 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 556-0319"
    },
    {
        "restaurantType": "Comfort Food",
        "title": "Pearl Diver",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=trKyIRyjKqVSZmcU0AnICQ&campaign_id=b04Tylwsa1mFLiCk8n_QrA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpearl-diver-toronto-2&request_id=85c6ed27d07d8a76&signature=ed86630408db5794165f170b030fe8423c5cfb419ffc4c814a5a3adfb2b2be34&slot=1",
        "latitude": 43.65157,
        "longitude": -79.37377,
        "address": "100 Adelaide Street E, Toronto, ON M5C 1K9",
        "phone": "(647) 699-0167",
        "description": "Pearl Diver serves deliciuos and authentic Comfort Food food. We are located at 100 Adelaide Street E, Toronto, ON M5C 1K9 and you can contact us on (647) 699-0167"
    },
    {
        "restaurantType": "Creperies",
        "title": "Millie Creperie",
        "imgSrc": "https://www.yelp.ca/biz/millie-creperie-toronto",
        "latitude": 43.654949,
        "longitude": -79.399671,
        "address": "161 Baldwin Street, Toronto, ON M5T 1L8",
        "phone": "(416) 977-1922",
        "description": "Millie Creperie serves deliciuos and authentic Creperies food. We are located at 161 Baldwin Street, Toronto, ON M5T 1L8 and you can contact us on (416) 977-1922"
    },
    {
        "restaurantType": "Creperies",
        "title": "Crepe TO",
        "imgSrc": "https://www.yelp.ca/biz/crepe-to-toronto-3",
        "latitude": 43.650084,
        "longitude": -79.374513,
        "address": "52 Church Street, Toronto, ON M5C 3C8",
        "phone": "(647) 352-5286",
        "description": "Crepe TO serves deliciuos and authentic Creperies food. We are located at 52 Church Street, Toronto, ON M5C 3C8 and you can contact us on (647) 352-5286"
    },
    {
        "restaurantType": "Cuban",
        "title": "Campo",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L8W83-wPFLMs457cAu60Eg&campaign_id=y3TzqXVx8zZZF5_XCr_JpQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcampo-toronto&request_id=6c5c8e931761940f&signature=c6be6bd3988758571bba9529349cffc33f80f28bc2073ed979373ac1fd9098f3&slot=0",
        "latitude": 43.655118,
        "longitude": -79.486959,
        "address": "244 Jane Street, Toronto, ON M6S 3Y8",
        "phone": "(647) 849-3633",
        "description": "Campo serves deliciuos and authentic Cuban food. We are located at 244 Jane Street, Toronto, ON M6S 3Y8 and you can contact us on (647) 849-3633"
    },
    {
        "restaurantType": "Cuban",
        "title": "La Cubana",
        "imgSrc": "https://www.yelp.ca/biz/la-cubana-toronto-3",
        "latitude": 43.646208,
        "longitude": -79.419674,
        "address": "92 Ossington Avenue, Toronto, ON M6J 2Z4",
        "phone": "(416) 537-0134",
        "description": "La Cubana serves deliciuos and authentic Cuban food. We are located at 92 Ossington Avenue, Toronto, ON M6J 2Z4 and you can contact us on (416) 537-0134"
    },
    {
        "restaurantType": "Czech",
        "title": "Bread & Butter",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=U0md3UhNA2123G-vYR9hWQ&campaign_id=lRpaNevl2Y_qCMdX0bfhzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fbread-and-butter-toronto&request_id=07a5645b41d35095&signature=5ffa8f60d6cda255e4b0649c4cfa6a763b7a936ac6c3aa6705c6c5e8e4d6e640&slot=0",
        "latitude": 43.701638,
        "longitude": -79.38744,
        "address": "507 Mount Pleasant Rd, Toronto, ON M4S 2L9",
        "phone": "(647) 691-4910",
        "description": "Bread & Butter serves deliciuos and authentic Czech food. We are located at 507 Mount Pleasant Rd, Toronto, ON M4S 2L9 and you can contact us on (647) 691-4910"
    },
    {
        "restaurantType": "Czech",
        "title": "Prague Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/prague-restaurant-toronto-2",
        "latitude": 43.754341,
        "longitude": -79.216001,
        "address": "450 Scarborough Golf Club Road, Toronto, ON M1G 1H1",
        "phone": "(416) 289-0283",
        "description": "Prague Restaurant serves deliciuos and authentic Czech food. We are located at 450 Scarborough Golf Club Road, Toronto, ON M1G 1H1 and you can contact us on (416) 289-0283"
    },
    {
        "restaurantType": "Delis",
        "title": "Pancer’s Original Deli",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=LiY0vRXMWrjUrXQr2Z_D4A&campaign_id=bu77YtaZ_6CfzarOgKb1CQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpancers-original-deli-toronto&request_id=b6ae1ed0bfaacc1b&signature=2da2bcc85bd8e02bb637c07d9215477419e0161f9e38ac11ba7ca181a2d6160b&slot=0",
        "latitude": 43.740806,
        "longitude": -79.435246,
        "address": "3856 Bathurst Street, Toronto, ON M3H 3N3",
        "phone": "(416) 636-1230",
        "description": "Pancer’s Original Deli serves deliciuos and authentic Delis food. We are located at 3856 Bathurst Street, Toronto, ON M3H 3N3 and you can contact us on (416) 636-1230"
    },
    {
        "restaurantType": "Delis",
        "title": "Pancer’s Original Deli",
        "imgSrc": "https://www.yelp.ca/biz/pancers-original-deli-toronto",
        "latitude": 43.740806,
        "longitude": -79.435246,
        "address": "3856 Bathurst Street, Toronto, ON M3H 3N3",
        "phone": "(416) 636-1230",
        "description": "Pancer’s Original Deli serves deliciuos and authentic Delis food. We are located at 3856 Bathurst Street, Toronto, ON M3H 3N3 and you can contact us on (416) 636-1230"
    },
    {
        "restaurantType": "Dim Sum",
        "title": "Caribbean Sunset Restaurant and Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=lzrFRbdvpnLJze9VqJigLw&campaign_id=qCzXVh0LwIESgk8oads-Mw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcaribbean-sunset-restaurant-and-bar-toronto&request_id=1ec1d9372f6cc43d&signature=e5167e894fa59ca2ff884f73012d5249bef79c0ea25c8c8e65656b7c1e24e651&slot=0",
        "latitude": 43.659178,
        "longitude": -79.348032,
        "address": "753A Queen St E, Toronto, ON M4M 1H3",
        "phone": "(647) 340-7607",
        "description": "Caribbean Sunset Restaurant and Bar serves deliciuos and authentic Dim Sum food. We are located at 753A Queen St E, Toronto, ON M4M 1H3 and you can contact us on (647) 340-7607"
    },
    {
        "restaurantType": "Dim Sum",
        "title": "Rol San",
        "imgSrc": "https://www.yelp.ca/biz/rol-san-toronto",
        "latitude": 43.654353,
        "longitude": -79.398313,
        "address": "323 Spadina Avenue, Toronto, ON M5T 2E9",
        "phone": "(416) 977-1128",
        "description": "Rol San serves deliciuos and authentic Dim Sum food. We are located at 323 Spadina Avenue, Toronto, ON M5T 2E9 and you can contact us on (416) 977-1128"
    },
    {
        "restaurantType": "Diners",
        "title": "Avenue Open Kitchen",
        "imgSrc": "https://www.yelp.ca/biz/avenue-open-kitchen-toronto",
        "latitude": 43.647128,
        "longitude": -79.396451,
        "address": "7 Camden Street, Toronto, ON M5V 1V2",
        "phone": "(416) 504-7131",
        "description": "Avenue Open Kitchen serves deliciuos and authentic Diners food. We are located at 7 Camden Street, Toronto, ON M5V 1V2 and you can contact us on (416) 504-7131"
    },
    {
        "restaurantType": "Diners",
        "title": "Bus Terminal Diner",
        "imgSrc": "https://www.yelp.ca/biz/bus-terminal-diner-toronto",
        "latitude": 43.683729,
        "longitude": -79.323118,
        "address": "1606 Danforth Avenue, Toronto, ON M4C",
        "phone": "(416) 463-4680",
        "description": "Bus Terminal Diner serves deliciuos and authentic Diners food. We are located at 1606 Danforth Avenue, Toronto, ON M4C and you can contact us on (416) 463-4680"
    },
    {
        "restaurantType": "Dinner Theater",
        "title": "Mysteriously Yours Dinner Theatre",
        "imgSrc": "https://www.yelp.ca/biz/mysteriously-yours-dinner-theatre-toronto",
        "latitude": 43.701222,
        "longitude": -79.397251,
        "address": "2026 Yonge Street, Toronto, ON M4S 1Z9",
        "phone": "(416) 486-7469",
        "description": "Mysteriously Yours Dinner Theatre serves deliciuos and authentic Dinner Theater food. We are located at 2026 Yonge Street, Toronto, ON M4S 1Z9 and you can contact us on (416) 486-7469"
    },
    {
        "restaurantType": "Dinner Theater",
        "title": "Toca",
        "imgSrc": "https://www.yelp.ca/biz/toca-toronto-4",
        "latitude": 43.645431,
        "longitude": -79.387059,
        "address": "181 Wellington Street West, Toronto, ON M5V 3G7",
        "phone": "(416) 572-8008",
        "description": "Toca serves deliciuos and authentic Dinner Theater food. We are located at 181 Wellington Street West, Toronto, ON M5V 3G7 and you can contact us on (416) 572-8008"
    },
    {
        "restaurantType": "Egyptian",
        "title": "Georgia Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=1PvEnSgdZVZZlH552XUTGg&campaign_id=AHzWUNeCeZnGXA8r8xNcRw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fgeorgia-restaurant-toronto&request_id=35d8a94dc79a3cca&signature=a6a39240f5d68ca4352bd6dec56d9280e74c10d9188def615e1a7036b2442c67&slot=0",
        "latitude": 43.767519,
        "longitude": -79.475297,
        "address": "1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4",
        "phone": "(416) 907-2200",
        "description": "Georgia Restaurant serves deliciuos and authentic Egyptian food. We are located at 1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4 and you can contact us on (416) 907-2200"
    },
    {
        "restaurantType": "Egyptian",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=35d8a94dc79a3cca&signature=d67ae1f5dc985581472f0d5df132d3cc764c9167ed4189fa178cb3529e0ad7e7&slot=1",
        "latitude": null,
        "longitude": null,
        "address": "",
        "phone": "",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Egyptian food. We are located at  and you can contact us on "
    },
    {
        "restaurantType": "Ethiopian",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=c8839a1c1e483a79&signature=015190342077c9e8bb8c164a8bc3f17d94d92980918753910e76029438e02f75&slot=0",
        "latitude": 43.778937,
        "longitude": -79.363867,
        "address": "4777 Leslie Street, Toronto, ON M2J 2K8",
        "phone": "(416) 490-7888",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Ethiopian food. We are located at 4777 Leslie Street, Toronto, ON M2J 2K8 and you can contact us on (416) 490-7888"
    },
    {
        "restaurantType": "Ethiopian",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=X5p3E6hoNT4yMIjGRksi1A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=c8839a1c1e483a79&signature=2d6d10c1328450655af6ab01f7c70069bd58b644d81f20729e23bb400b66255d&slot=1",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Ethiopian food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "Falafel",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=X5p3E6hoNT4yMIjGRksi1A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=4e9b07fe33d8d3e1&signature=b1588d57b16525a98ef6c118eb84d871f3a089dc0372c3282bde4418490149c6&slot=0",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Falafel food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "Falafel",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=4e9b07fe33d8d3e1&signature=de27ea91fb9e69690234118d4482428396de96d194253675ee8f3614827bf7fa&slot=1",
        "latitude": 43.778937,
        "longitude": -79.363867,
        "address": "4777 Leslie Street, Toronto, ON M2J 2K8",
        "phone": "(416) 490-7888",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Falafel food. We are located at 4777 Leslie Street, Toronto, ON M2J 2K8 and you can contact us on (416) 490-7888"
    },
    {
        "restaurantType": "Fast Food",
        "title": "Urbun Eats Co",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_3IE9guLHvAr-kJpH4Zd7Q&campaign_id=-S-v9AShDzzXXlXiY-zyzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Furbun-eats-co-toronto-2&request_id=207386e4a4f4a5b8&signature=399838171a0e6739aaf322ba32951f0e62b9bda167d0e398b9bc00627d572b48&slot=0",
        "latitude": 43.71367,
        "longitude": -79.365092,
        "address": "874 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 556-0319",
        "description": "Urbun Eats Co serves deliciuos and authentic Fast Food food. We are located at 874 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 556-0319"
    },
    {
        "restaurantType": "Fast Food",
        "title": "The Original Gyro Grill",
        "imgSrc": "https://www.yelp.ca/biz/the-original-gyro-grill-toronto",
        "latitude": 43.666581,
        "longitude": -79.405812,
        "address": "4 Walmer Road, Toronto, ON M5S 1X2",
        "phone": "(416) 923-0700",
        "description": "The Original Gyro Grill serves deliciuos and authentic Fast Food food. We are located at 4 Walmer Road, Toronto, ON M5S 1X2 and you can contact us on (416) 923-0700"
    },
    {
        "restaurantType": "Filipino",
        "title": "Tinuno",
        "imgSrc": "https://www.yelp.ca/biz/tinuno-toronto",
        "latitude": 43.671143,
        "longitude": -79.374853,
        "address": "31 Howard Street, Toronto, ON M4X 1J6",
        "phone": "(647) 343-9294",
        "description": "Tinuno serves deliciuos and authentic Filipino food. We are located at 31 Howard Street, Toronto, ON M4X 1J6 and you can contact us on (647) 343-9294"
    },
    {
        "restaurantType": "Filipino",
        "title": "Lamesa Filipino Kitchen",
        "imgSrc": "https://www.yelp.ca/biz/lamesa-filipino-kitchen-toronto",
        "latitude": 43.647069,
        "longitude": -79.404677,
        "address": "669 Queen Street W, Toronto, ON M6J",
        "phone": "(647) 346-2377",
        "description": "Lamesa Filipino Kitchen serves deliciuos and authentic Filipino food. We are located at 669 Queen Street W, Toronto, ON M6J and you can contact us on (647) 346-2377"
    },
    {
        "restaurantType": "Fish & Chips",
        "title": "Urbun Eats Co",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_3IE9guLHvAr-kJpH4Zd7Q&campaign_id=-S-v9AShDzzXXlXiY-zyzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Furbun-eats-co-toronto-2&request_id=b83bf414554d63bb&signature=811170ce0ea29ae617664d0debc10bd9fe9fbe062baaa5f60aba4ee888920b5e&slot=0",
        "latitude": 43.71367,
        "longitude": -79.365092,
        "address": "874 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 556-0319",
        "description": "Urbun Eats Co serves deliciuos and authentic Fish & Chips food. We are located at 874 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 556-0319"
    },
    {
        "restaurantType": "Fish & Chips",
        "title": "Fresco’s Fish & Chips",
        "imgSrc": "https://www.yelp.ca/biz/frescos-fish-and-chips-toronto",
        "latitude": 43.653834,
        "longitude": -79.401548,
        "address": "201 Augusta Avenue, Toronto, ON M5T 2L4",
        "phone": "(416) 546-4557",
        "description": "Fresco’s Fish & Chips serves deliciuos and authentic Fish & Chips food. We are located at 201 Augusta Avenue, Toronto, ON M5T 2L4 and you can contact us on (416) 546-4557"
    },
    {
        "restaurantType": "Fondue",
        "title": "Fishman Lobster Clubhouse Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_xAJZOKBMPOe47p1MphB2w&campaign_id=9QGTRB0KSlAz6eoHgMzQCQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Ffishman-lobster-clubhouse-restaurant-toronto&request_id=ef89b4c956122b54&signature=903afff0bc29986fd72dba129c35eff62d2def171657d2eedbefe2fdae4b7ae8&slot=0",
        "latitude": 43.801976,
        "longitude": -79.295159,
        "address": "4020 Finch Avenue E, Toronto, ON M1S 3T6",
        "phone": "(647) 849-3885",
        "description": "Fishman Lobster Clubhouse Restaurant serves deliciuos and authentic Fondue food. We are located at 4020 Finch Avenue E, Toronto, ON M1S 3T6 and you can contact us on (647) 849-3885"
    },
    {
        "restaurantType": "Fondue",
        "title": "Dunk ‘N Dip",
        "imgSrc": "https://www.yelp.ca/biz/dunk-n-dip-mississauga",
        "latitude": 43.580689,
        "longitude": -79.649594,
        "address": "600 Burnhamthorpe Road W, Unit 4, Mississauga, ON L5B 2C4",
        "phone": "(905) 990-5522",
        "description": "Dunk ‘N Dip serves deliciuos and authentic Fondue food. We are located at 600 Burnhamthorpe Road W, Unit 4, Mississauga, ON L5B 2C4 and you can contact us on (905) 990-5522"
    },
    {
        "restaurantType": "Food Court",
        "title": "One Two Snack",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=Ee8Saq8Al4iaOeVDHNmVUw&campaign_id=kWlWyK1R8XmUuYRUNYEmsQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fone-two-snack-toronto&request_id=e4d254c50d8bd4dc&signature=c2ff828c5069a455f75824e844d49f693eafb1b4b0f180a4e891fbe2b7e06efa&slot=0",
        "latitude": 43.775583,
        "longitude": -79.41344,
        "address": "10 Northtown Way, Unit 111, Toronto, ON M2N 7L4",
        "phone": "(416) 901-0329",
        "description": "One Two Snack serves deliciuos and authentic Food Court food. We are located at 10 Northtown Way, Unit 111, Toronto, ON M2N 7L4 and you can contact us on (416) 901-0329"
    },
    {
        "restaurantType": "Food Court",
        "title": "Assembly Chef’s Hall",
        "imgSrc": "https://www.yelp.ca/biz/assembly-chefs-hall-toronto",
        "latitude": 43.650352,
        "longitude": -79.383795,
        "address": "111 Richmond Street W, Toronto, ON M5H 2G4",
        "phone": "(647) 557-5993",
        "description": "Assembly Chef’s Hall serves deliciuos and authentic Food Court food. We are located at 111 Richmond Street W, Toronto, ON M5H 2G4 and you can contact us on (647) 557-5993"
    },
    {
        "restaurantType": "Food Stands",
        "title": "Pojangmacha Food",
        "imgSrc": "https://www.yelp.ca/biz/pojangmacha-food-toronto-4",
        "latitude": 43.7791,
        "longitude": -79.415632,
        "address": "5576 Yonge Street, Toronto, ON M2N 5S2",
        "phone": "",
        "description": "Pojangmacha Food serves deliciuos and authentic Food Stands food. We are located at 5576 Yonge Street, Toronto, ON M2N 5S2 and you can contact us on "
    },
    {
        "restaurantType": "Food Stands",
        "title": "The Blue Chip Truck",
        "imgSrc": "https://www.yelp.ca/biz/the-blue-chip-truck-toronto-2",
        "latitude": 43.660617,
        "longitude": -79.397322,
        "address": "50 St George St, Toronto, ON M5S 3H8",
        "phone": "",
        "description": "The Blue Chip Truck serves deliciuos and authentic Food Stands food. We are located at 50 St George St, Toronto, ON M5S 3H8 and you can contact us on "
    },
    {
        "restaurantType": "French",
        "title": "Le Baratin",
        "imgSrc": "https://www.yelp.ca/biz/le-baratin-toronto-5",
        "latitude": 43.650078,
        "longitude": -79.43514,
        "address": "1600 Dundas Street. W, Toronto, ON M6K 1T8",
        "phone": "(416) 534-8800",
        "description": "Le Baratin serves deliciuos and authentic French food. We are located at 1600 Dundas Street. W, Toronto, ON M6K 1T8 and you can contact us on (416) 534-8800"
    },
    {
        "restaurantType": "French",
        "title": "Jules Bistro",
        "imgSrc": "https://www.yelp.ca/biz/jules-bistro-toronto",
        "latitude": 43.648055,
        "longitude": -79.395733,
        "address": "147 Spadina Avenue, Toronto, ON M5V 2L7",
        "phone": "(416) 348-8886",
        "description": "Jules Bistro serves deliciuos and authentic French food. We are located at 147 Spadina Avenue, Toronto, ON M5V 2L7 and you can contact us on (416) 348-8886"
    },
    {
        "restaurantType": "Gastropubs",
        "title": "Campo",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L8W83-wPFLMs457cAu60Eg&campaign_id=y3TzqXVx8zZZF5_XCr_JpQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcampo-toronto&request_id=25c019deda5bd74f&signature=98dc773097466a765d2f5ce4884de0f80e9aae321eabe7ebafedcc13c4e57397&slot=0",
        "latitude": 43.655118,
        "longitude": -79.486959,
        "address": "244 Jane Street, Toronto, ON M6S 3Y8",
        "phone": "(647) 849-3633",
        "description": "Campo serves deliciuos and authentic Gastropubs food. We are located at 244 Jane Street, Toronto, ON M6S 3Y8 and you can contact us on (647) 849-3633"
    },
    {
        "restaurantType": "Gastropubs",
        "title": "The Irv Gastro Pub",
        "imgSrc": "https://www.yelp.ca/biz/the-irv-gastro-pub-toronto",
        "latitude": 43.66354,
        "longitude": -79.370583,
        "address": "195 Carlton Street, Toronto, ON M5A",
        "phone": "(647) 350-4787",
        "description": "The Irv Gastro Pub serves deliciuos and authentic Gastropubs food. We are located at 195 Carlton Street, Toronto, ON M5A and you can contact us on (647) 350-4787"
    },
    {
        "restaurantType": "German",
        "title": "Bread & Butter",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=U0md3UhNA2123G-vYR9hWQ&campaign_id=lRpaNevl2Y_qCMdX0bfhzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fbread-and-butter-toronto&request_id=db5c56d0b31fce34&signature=0bcca40694157d494682ec9d474f4b9e65d60f641a5b165941b22df84c1130be&slot=0",
        "latitude": 43.701638,
        "longitude": -79.38744,
        "address": "507 Mount Pleasant Rd, Toronto, ON M4S 2L9",
        "phone": "(647) 691-4910",
        "description": "Bread & Butter serves deliciuos and authentic German food. We are located at 507 Mount Pleasant Rd, Toronto, ON M4S 2L9 and you can contact us on (647) 691-4910"
    },
    {
        "restaurantType": "German",
        "title": "Otto’s Bierhalle",
        "imgSrc": "https://www.yelp.ca/biz/ottos-bierhalle-toronto",
        "latitude": 43.643248,
        "longitude": -79.422078,
        "address": "1087 Queen Street W, Toronto, ON M6J 1H3",
        "phone": "(416) 901-5472",
        "description": "Otto’s Bierhalle serves deliciuos and authentic German food. We are located at 1087 Queen Street W, Toronto, ON M6J 1H3 and you can contact us on (416) 901-5472"
    },
    {
        "restaurantType": "Gluten-Free",
        "title": "Campo",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L8W83-wPFLMs457cAu60Eg&campaign_id=y3TzqXVx8zZZF5_XCr_JpQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcampo-toronto&request_id=f5c5bfe201fba552&signature=2e19a704ac8dc13f92d303b0dc47e7a9783101e6e3a1c9497a385e2a06ad44e5&slot=0",
        "latitude": 43.655118,
        "longitude": -79.486959,
        "address": "244 Jane Street, Toronto, ON M6S 3Y8",
        "phone": "(647) 849-3633",
        "description": "Campo serves deliciuos and authentic Gluten-Free food. We are located at 244 Jane Street, Toronto, ON M6S 3Y8 and you can contact us on (647) 849-3633"
    },
    {
        "restaurantType": "Gluten-Free",
        "title": "Five Doors North",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=wVc3g-YfyDvkOLDecpr4DA&campaign_id=1pz4n44iQ52wLrxeHx464w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Ffive-doors-north-toronto&request_id=f5c5bfe201fba552&signature=7afc775314e3117896a1253d190939f3d04f6ec9b46fd57d7a0cfe91af8b2c49&slot=1",
        "latitude": 43.702215,
        "longitude": -79.397614,
        "address": "2088 Yonge Street, Toronto, ON M4S 2A3",
        "phone": "(416) 480-6234",
        "description": "Five Doors North serves deliciuos and authentic Gluten-Free food. We are located at 2088 Yonge Street, Toronto, ON M4S 2A3 and you can contact us on (416) 480-6234"
    },
    {
        "restaurantType": "Greek",
        "title": "Pasha Authentic Turkish Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=WA7sC64kCRstywm2EgZXEw&campaign_id=mU5KIduB3V6_4iOLWHin3w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpasha-authentic-turkish-cuisine-toronto&request_id=e4f5b826cb280e80&signature=06a94a87f1ad4dc573c9419524e41e5a4f9c60eedd7df2ef195f30fb4e00732c&slot=0",
        "latitude": 43.708364,
        "longitude": -79.342651,
        "address": "64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4",
        "phone": "(416) 421-3500",
        "description": "Pasha Authentic Turkish Cuisine serves deliciuos and authentic Greek food. We are located at 64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4 and you can contact us on (416) 421-3500"
    },
    {
        "restaurantType": "Greek",
        "title": "Pantheon Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/pantheon-restaurant-toronto",
        "latitude": 43.677552,
        "longitude": -79.351334,
        "address": "407 Danforth Avenue, Toronto, ON M4K 1P1",
        "phone": "(416) 778-1929",
        "description": "Pantheon Restaurant serves deliciuos and authentic Greek food. We are located at 407 Danforth Avenue, Toronto, ON M4K 1P1 and you can contact us on (416) 778-1929"
    },
    {
        "restaurantType": "Haitian",
        "title": "Alabon Libon",
        "imgSrc": "https://www.yelp.ca/biz/alabon-libon-toronto",
        "latitude": 43.725043,
        "longitude": -79.264407,
        "address": "623 Kennedy Road, Toronto, ON M1K 2B2",
        "phone": "(416) 261-2870",
        "description": "Alabon Libon serves deliciuos and authentic Haitian food. We are located at 623 Kennedy Road, Toronto, ON M1K 2B2 and you can contact us on (416) 261-2870"
    },
    {
        "restaurantType": "Haitian",
        "title": "Maranatha Caribbean Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/maranatha-caribbean-restaurant-toronto",
        "latitude": 43.765174,
        "longitude": -79.191143,
        "address": "4-4379 Kingston Road, Toronto, ON M1E 2M9",
        "phone": "(647) 660-5530",
        "description": "Maranatha Caribbean Restaurant serves deliciuos and authentic Haitian food. We are located at 4-4379 Kingston Road, Toronto, ON M1E 2M9 and you can contact us on (647) 660-5530"
    },
    {
        "restaurantType": "Hakka",
        "title": "Hakka Wow",
        "imgSrc": "https://www.yelp.ca/biz/hakka-wow-toronto",
        "latitude": 43.672085,
        "longitude": -79.322086,
        "address": "1433 Gerrard Street E, Toronto, ON M4L 1Z7",
        "phone": "(416) 855-7331",
        "description": "Hakka Wow serves deliciuos and authentic Hakka food. We are located at 1433 Gerrard Street E, Toronto, ON M4L 1Z7 and you can contact us on (416) 855-7331"
    },
    {
        "restaurantType": "Hakka",
        "title": "Royal Jade",
        "imgSrc": "https://www.yelp.ca/biz/royal-jade-vaughan-3",
        "latitude": 43.78318,
        "longitude": -79.489917,
        "address": "2100 Steeles Avenue W, Unit 1, Vaughan, ON L4K 2V1",
        "phone": "(905) 669-5233",
        "description": "Royal Jade serves deliciuos and authentic Hakka food. We are located at 2100 Steeles Avenue W, Unit 1, Vaughan, ON L4K 2V1 and you can contact us on (905) 669-5233"
    },
    {
        "restaurantType": "Halal",
        "title": "Pasha Authentic Turkish Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=WA7sC64kCRstywm2EgZXEw&campaign_id=mU5KIduB3V6_4iOLWHin3w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpasha-authentic-turkish-cuisine-toronto&request_id=0ce670b7f1120e93&signature=bbe7d17d7476cf46b7eb815d5b1bc965284c7afc6842434753d4aa324499ce2a&slot=0",
        "latitude": 43.708364,
        "longitude": -79.342651,
        "address": "64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4",
        "phone": "(416) 421-3500",
        "description": "Pasha Authentic Turkish Cuisine serves deliciuos and authentic Halal food. We are located at 64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4 and you can contact us on (416) 421-3500"
    },
    {
        "restaurantType": "Halal",
        "title": "Waynak Modern Halal Eatery",
        "imgSrc": "https://www.yelp.ca/biz/waynak-modern-halal-eatery-toronto",
        "latitude": 43.656658,
        "longitude": -79.383611,
        "address": "64 Edward Street, Toronto, ON M5G 1C9",
        "phone": "",
        "description": "Waynak Modern Halal Eatery serves deliciuos and authentic Halal food. We are located at 64 Edward Street, Toronto, ON M5G 1C9 and you can contact us on "
    },
    {
        "restaurantType": "Hawaiian",
        "title": "Pokito",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=87I8ba2FKYKeXyAhiC6cLg&campaign_id=FEPzjjg3KZ6oARZ5F_HEcA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpokito-toronto&request_id=238b3e2a8883f11a&signature=fdfe2f3d93725a78507873793dda7469284c1ac9d165e354ad380afc6a2a948f&slot=0",
        "latitude": 43.64852,
        "longitude": -79.397986,
        "address": "420 Queen Street W, Toronto, ON M5V 2A7",
        "phone": "(416) 792-8808",
        "description": "Pokito serves deliciuos and authentic Hawaiian food. We are located at 420 Queen Street W, Toronto, ON M5V 2A7 and you can contact us on (416) 792-8808"
    },
    {
        "restaurantType": "Hawaiian",
        "title": "Miss Things",
        "imgSrc": "https://www.yelp.ca/biz/miss-things-toronto",
        "latitude": 43.64146,
        "longitude": -79.431879,
        "address": "1279 Queen Street W, Toronto, ON M6K 1L6",
        "phone": "(416) 516-8677",
        "description": "Miss Things serves deliciuos and authentic Hawaiian food. We are located at 1279 Queen Street W, Toronto, ON M6K 1L6 and you can contact us on (416) 516-8677"
    },
    {
        "restaurantType": "Himalayan/Nepalese",
        "title": "Mt Everest Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=BSchC5THOB0MFmzJTEqAnQ&campaign_id=CPbZtchknn1omSC2cbEGbg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmt-everest-restaurant-toronto-2&request_id=56c72c64ecf7850b&signature=e66a92e9b0dd02cdfa0cb852935a64bd82f5141beb268a874e7e19e43d8998c3&slot=0",
        "latitude": 43.713212,
        "longitude": -79.366619,
        "address": "804 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 748-8849",
        "description": "Mt Everest Restaurant serves deliciuos and authentic Himalayan/Nepalese food. We are located at 804 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 748-8849"
    },
    {
        "restaurantType": "Himalayan/Nepalese",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=X5p3E6hoNT4yMIjGRksi1A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=56c72c64ecf7850b&signature=c4d30d8d372d9d5ca2439adbd0d2134fc4b31968c49ebc425023f9e3cb920ab0&slot=1",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Himalayan/Nepalese food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "Hong Kong Style Cafe",
        "title": "Smile Dessert",
        "imgSrc": "https://www.yelp.ca/biz/smile-dessert-toronto",
        "latitude": 43.804355,
        "longitude": -79.290308,
        "address": "E113-3262 Midland Avenue, Toronto, ON M1V 0C4",
        "phone": "",
        "description": "Smile Dessert serves deliciuos and authentic Hong Kong Style Cafe food. We are located at E113-3262 Midland Avenue, Toronto, ON M1V 0C4 and you can contact us on "
    },
    {
        "restaurantType": "Hot Dogs",
        "title": "Harvest Green",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=kIdLsbi4wdPZzMYRJmD48g&campaign_id=19F7xBRRSKcFxADmt78Nxw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fharvest-green-toronto&request_id=101c0ee1dc1de759&signature=ebb9917732d2681573a1ee2725f6eb6e6a539dd131d6db0a690f787a5b06a5e5&slot=0",
        "latitude": 43.645852,
        "longitude": -79.387863,
        "address": "200 Wellington Street W, Toronto, ON M5V 3C7",
        "phone": "(416) 581-1397",
        "description": "Harvest Green serves deliciuos and authentic Hot Dogs food. We are located at 200 Wellington Street W, Toronto, ON M5V 3C7 and you can contact us on (416) 581-1397"
    },
    {
        "restaurantType": "Hot Dogs",
        "title": "Fancy Franks",
        "imgSrc": "https://www.yelp.ca/biz/fancy-franks-toronto",
        "latitude": 43.657639,
        "longitude": -79.402645,
        "address": "326 College Street, Toronto, ON M5T 1S3",
        "phone": "(416) 920-3647",
        "description": "Fancy Franks serves deliciuos and authentic Hot Dogs food. We are located at 326 College Street, Toronto, ON M5T 1S3 and you can contact us on (416) 920-3647"
    },
    {
        "restaurantType": "Hot Pot",
        "title": "Chine Hot Pot & Noodles",
        "imgSrc": "https://www.yelp.ca/biz/chine-hot-pot-and-noodles-toronto",
        "latitude": 43.654507,
        "longitude": -79.398409,
        "address": "327 Spadina Avenue, Unit A, Toronto, ON M5T 2E9",
        "phone": "(416) 979-1776",
        "description": "Chine Hot Pot & Noodles serves deliciuos and authentic Hot Pot food. We are located at 327 Spadina Avenue, Unit A, Toronto, ON M5T 2E9 and you can contact us on (416) 979-1776"
    },
    {
        "restaurantType": "Hot Pot",
        "title": "Beijing Hot Pot Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/beijing-hot-pot-restaurant-toronto",
        "latitude": 43.773952,
        "longitude": -79.340148,
        "address": "107 Parkway Forest Drive, Unit 1, Toronto, ON M2J 1L8",
        "phone": "(647) 342-2028",
        "description": "Beijing Hot Pot Restaurant serves deliciuos and authentic Hot Pot food. We are located at 107 Parkway Forest Drive, Unit 1, Toronto, ON M2J 1L8 and you can contact us on (647) 342-2028"
    },
    {
        "restaurantType": "Hungarian",
        "title": "Budapest Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/budapest-restaurant-toronto",
        "latitude": 43.681047,
        "longitude": -79.310017,
        "address": "1959 Gerrard Street E, Toronto, ON M4E 2A9",
        "phone": "(647) 347-5047",
        "description": "Budapest Restaurant serves deliciuos and authentic Hungarian food. We are located at 1959 Gerrard Street E, Toronto, ON M4E 2A9 and you can contact us on (647) 347-5047"
    },
    {
        "restaurantType": "Hungarian",
        "title": "Country Style Hungarian Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/country-style-hungarian-restaurant-toronto",
        "latitude": 43.665794,
        "longitude": -79.409039,
        "address": "450 Bloor Street W, Toronto, ON M5S 1X8",
        "phone": "(416) 536-5966",
        "description": "Country Style Hungarian Restaurant serves deliciuos and authentic Hungarian food. We are located at 450 Bloor Street W, Toronto, ON M5S 1X8 and you can contact us on (416) 536-5966"
    },
    {
        "restaurantType": "Indian",
        "title": "Mt Everest Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=BSchC5THOB0MFmzJTEqAnQ&campaign_id=CPbZtchknn1omSC2cbEGbg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmt-everest-restaurant-toronto-2&request_id=22d67e97deb8d66c&signature=78240491eeeff8971e8ec8eef9a8fafe5392be6334e84fa3f40614d7fcccb15c&slot=0",
        "latitude": 43.713212,
        "longitude": -79.366619,
        "address": "804 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 748-8849",
        "description": "Mt Everest Restaurant serves deliciuos and authentic Indian food. We are located at 804 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 748-8849"
    },
    {
        "restaurantType": "Indian",
        "title": "Loga’s Corner",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=rfgln6-7WFCu7S7fOoqMdA&campaign_id=J2ReRvseOldb5s8dVW_XfA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Flogas-corner-toronto&request_id=22d67e97deb8d66c&signature=3f2dcaf771f9bd0c271e84bff74d374f1d00c462b1c29a91d175761b5df2d5a9&slot=1",
        "latitude": 43.640353,
        "longitude": -79.435923,
        "address": "216C Close Avenue, Toronto, ON M6K 2V5",
        "phone": "(647) 761-0965",
        "description": "Loga’s Corner serves deliciuos and authentic Indian food. We are located at 216C Close Avenue, Toronto, ON M6K 2V5 and you can contact us on (647) 761-0965"
    },
    {
        "restaurantType": "Indonesian",
        "title": "Hey Noodles",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=X2I47eENvYeVL6QlzAZ0wA&campaign_id=5F6kuwsi474yKM8SiuVLUQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fhey-noodles-toronto-5&request_id=c0b00d2836c24240&signature=85cc9425afd18a8bc1e794fd34d97adc747f9a344b8de2f550b7439dcfa315ea&slot=0",
        "latitude": 43.772847,
        "longitude": -79.414106,
        "address": "5306 Yonge Street, Toronto, ON M2N 0E3",
        "phone": "(416) 347-6789",
        "description": "Hey Noodles serves deliciuos and authentic Indonesian food. We are located at 5306 Yonge Street, Toronto, ON M2N 0E3 and you can contact us on (416) 347-6789"
    },
    {
        "restaurantType": "Indonesian",
        "title": "Satay Sate",
        "imgSrc": "https://www.yelp.ca/biz/satay-sate-toronto",
        "latitude": 43.766873,
        "longitude": -79.411957,
        "address": "5025 Yonge Street, Toronto, ON M2N 5P2",
        "phone": "(647) 351-7283",
        "description": "Satay Sate serves deliciuos and authentic Indonesian food. We are located at 5025 Yonge Street, Toronto, ON M2N 5P2 and you can contact us on (647) 351-7283"
    },
    {
        "restaurantType": "International",
        "title": "Ritz Bar",
        "imgSrc": "https://www.yelp.ca/biz/ritz-bar-toronto-3",
        "latitude": 43.645355,
        "longitude": -79.387178,
        "address": "181 Wellington Street W, Toronto, ON M5V 3G7",
        "phone": "(416) 585-2500",
        "description": "Ritz Bar serves deliciuos and authentic International food. We are located at 181 Wellington Street W, Toronto, ON M5V 3G7 and you can contact us on (416) 585-2500"
    },
    {
        "restaurantType": "International",
        "title": "Hot Bunzz Street Cuizine",
        "imgSrc": "https://www.yelp.ca/biz/hot-bunzz-street-cuizine-toronto",
        "latitude": 43.649122,
        "longitude": -79.396901,
        "address": "170 Spadina Ave, Toronto, ON M5T 2C2",
        "phone": "",
        "description": "Hot Bunzz Street Cuizine serves deliciuos and authentic International food. We are located at 170 Spadina Ave, Toronto, ON M5T 2C2 and you can contact us on "
    },
    {
        "restaurantType": "Irish",
        "title": "Stout Irish Pub",
        "imgSrc": "https://www.yelp.ca/biz/stout-irish-pub-toronto",
        "latitude": 43.663839,
        "longitude": -79.368944,
        "address": "221 Carlton Street, Toronto, ON M5A 2L2",
        "phone": "(647) 344-7676",
        "description": "Stout Irish Pub serves deliciuos and authentic Irish food. We are located at 221 Carlton Street, Toronto, ON M5A 2L2 and you can contact us on (647) 344-7676"
    },
    {
        "restaurantType": "Irish",
        "title": "Irish Embassy Pub & Grill",
        "imgSrc": "https://www.yelp.ca/biz/irish-embassy-pub-and-grill-toronto",
        "latitude": 43.648049,
        "longitude": -79.377154,
        "address": "49 Yonge St, Toronto, ON M5E 1J1",
        "phone": "(416) 866-8282",
        "description": "Irish Embassy Pub & Grill serves deliciuos and authentic Irish food. We are located at 49 Yonge St, Toronto, ON M5E 1J1 and you can contact us on (416) 866-8282"
    },
    {
        "restaurantType": "Italian",
        "title": "Camarra’s Pizzeria & Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=IN8BHY7zkhjUxUh4qnbrHg&campaign_id=XHrOd08FL8oGTwR5453mRQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcamarras-pizzeria-and-restaurant-toronto&request_id=4d75d14b6f009c24&signature=31adffcfe05f4e019571c3bc0fcdd9d0b6a8a118d8b0e8b48a3e90ab3731fe24&slot=0",
        "latitude": 43.708396,
        "longitude": -79.453323,
        "address": "2899 Dufferin Street, Toronto, ON M6B 3S7",
        "phone": "(416) 789-3221",
        "description": "Camarra’s Pizzeria & Restaurant serves deliciuos and authentic Italian food. We are located at 2899 Dufferin Street, Toronto, ON M6B 3S7 and you can contact us on (416) 789-3221"
    },
    {
        "restaurantType": "Italian",
        "title": "Martino’s Pizza",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=LWI8ULsw0X1FpInux4Tg5Q&campaign_id=3awDhjbQjpi34yZEXTtnXg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmartinos-pizza-toronto-2&request_id=4d75d14b6f009c24&signature=94dd9a4f48ff7346c482dde2c377e26574bf6254c89fc4c6d05ed2e78b9159f8&slot=1",
        "latitude": 43.675568,
        "longitude": -79.403644,
        "address": "178 Dupont Street, Toronto, ON M5R 2E6",
        "phone": "(416) 929-6000",
        "description": "Martino’s Pizza serves deliciuos and authentic Italian food. We are located at 178 Dupont Street, Toronto, ON M5R 2E6 and you can contact us on (416) 929-6000"
    },
    {
        "restaurantType": "Japanese",
        "title": "Kintaro Izakaya",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=nrq5H3LZicjMG0wv7gy08g&campaign_id=_p-E4kUK3rS8bn4z_fQ9lg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fkintaro-izakaya-toronto-3&request_id=a83369847fff053d&signature=cb8112007dca9193204d19431f4d28219e4be6ef9f335d0092f8dd736039103d&slot=0",
        "latitude": 43.664158,
        "longitude": -79.380274,
        "address": "459 Church Street, Toronto, ON M4Y 4C5",
        "phone": "(647) 560-5335",
        "description": "Kintaro Izakaya serves deliciuos and authentic Japanese food. We are located at 459 Church Street, Toronto, ON M4Y 4C5 and you can contact us on (647) 560-5335"
    },
    {
        "restaurantType": "Japanese",
        "title": "Guu Izakaya Toronto",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L82O1ZFFQfjJxF0_PYWPnA&campaign_id=bqnOeJlvipvCTCiSC-t-yQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fguu-izakaya-toronto-toronto&request_id=a83369847fff053d&signature=fdd442d904f618c078f7e5c31c97afeb0f36d36618a0a6aa55fcd51094608c4c&slot=1",
        "latitude": 43.641867,
        "longitude": -79.43109,
        "address": "1314 Queen Street W, Toronto, ON M6K 1L4",
        "phone": "(647) 351-1314",
        "description": "Guu Izakaya Toronto serves deliciuos and authentic Japanese food. We are located at 1314 Queen Street W, Toronto, ON M6K 1L4 and you can contact us on (647) 351-1314"
    },
    {
        "restaurantType": "Kebab",
        "title": "Georgia Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=1PvEnSgdZVZZlH552XUTGg&campaign_id=AHzWUNeCeZnGXA8r8xNcRw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fgeorgia-restaurant-toronto&request_id=94cf381b06d36e2b&signature=5c59fb28c56dc024e5414ec3f3c47194f67e266b6785517cc4cfe78ebfec632f&slot=0",
        "latitude": 43.767519,
        "longitude": -79.475297,
        "address": "1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4",
        "phone": "(416) 907-2200",
        "description": "Georgia Restaurant serves deliciuos and authentic Kebab food. We are located at 1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4 and you can contact us on (416) 907-2200"
    },
    {
        "restaurantType": "Kebab",
        "title": "Xawaash",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=pTbkdBDDKxNVjKUZ_6RAug&campaign_id=tgOd9FGRgQx1NO8liswl0A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fxawaash-toronto&request_id=94cf381b06d36e2b&signature=c5ab585e61416c084c559a8511f8a975bc62b2c3c3db59acdfc1cd5e53679430&slot=1",
        "latitude": 43.71528,
        "longitude": -79.592866,
        "address": "130 Queens Plate Drive, Unit 1, Toronto, ON M9W",
        "phone": "(647) 849-3626",
        "description": "Xawaash serves deliciuos and authentic Kebab food. We are located at 130 Queens Plate Drive, Unit 1, Toronto, ON M9W and you can contact us on (647) 849-3626"
    },
    {
        "restaurantType": "Korean",
        "title": "Seor Ak San",
        "imgSrc": "https://www.yelp.ca/biz/seor-ak-san-toronto",
        "latitude": 43.655563,
        "longitude": -79.398619,
        "address": "357 Spadina Avenue, Toronto, ON M5T 2G3",
        "phone": "(416) 977-2788",
        "description": "Seor Ak San serves deliciuos and authentic Korean food. We are located at 357 Spadina Avenue, Toronto, ON M5T 2G3 and you can contact us on (416) 977-2788"
    },
    {
        "restaurantType": "Korean",
        "title": "Buk Chang Dong Soon Tofu",
        "imgSrc": "https://www.yelp.ca/biz/buk-chang-dong-soon-tofu-toronto-2",
        "latitude": 43.663623,
        "longitude": -79.416982,
        "address": "691 Bloor Street W, Toronto, ON M6G 1L3",
        "phone": "(416) 537-0972",
        "description": "Buk Chang Dong Soon Tofu serves deliciuos and authentic Korean food. We are located at 691 Bloor Street W, Toronto, ON M6G 1L3 and you can contact us on (416) 537-0972"
    },
    {
        "restaurantType": "Kosher",
        "title": "Loga’s Corner",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=rfgln6-7WFCu7S7fOoqMdA&campaign_id=J2ReRvseOldb5s8dVW_XfA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Flogas-corner-toronto&request_id=560d8edd0220a961&signature=f3aa297393084960746d94d24a665f17c768812350884fc698874099fcea8ad5&slot=0",
        "latitude": 43.640353,
        "longitude": -79.435923,
        "address": "216C Close Avenue, Toronto, ON M6K 2V5",
        "phone": "(647) 761-0965",
        "description": "Loga’s Corner serves deliciuos and authentic Kosher food. We are located at 216C Close Avenue, Toronto, ON M6K 2V5 and you can contact us on (647) 761-0965"
    },
    {
        "restaurantType": "Kosher",
        "title": "Park Hyatt Toronto Kosher Annona Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/park-hyatt-toronto-kosher-annona-restaurant-toronto",
        "latitude": 43.668396,
        "longitude": -79.392837,
        "address": "4 Avenue Road, Toronto, ON M5S 1T6",
        "phone": "(416) 324-1567",
        "description": "Park Hyatt Toronto Kosher Annona Restaurant serves deliciuos and authentic Kosher food. We are located at 4 Avenue Road, Toronto, ON M5S 1T6 and you can contact us on (416) 324-1567"
    },
    {
        "restaurantType": "Laotian",
        "title": "Sabai Sabai Kitchen and Bar",
        "imgSrc": "https://www.yelp.ca/biz/sabai-sabai-kitchen-and-bar-toronto-2",
        "latitude": 43.670453,
        "longitude": -79.384722,
        "address": "81 Bloor Street E, Toronto, ON M4W 1A9",
        "phone": "(647) 748-4225",
        "description": "Sabai Sabai Kitchen and Bar serves deliciuos and authentic Laotian food. We are located at 81 Bloor Street E, Toronto, ON M4W 1A9 and you can contact us on (647) 748-4225"
    },
    {
        "restaurantType": "Laotian",
        "title": "Lao Thai Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/lao-thai-restaurant-toronto-2",
        "latitude": 43.642792,
        "longitude": -79.427495,
        "address": "4 Gladstone Avenue, Toronto, ON M6J 3K6",
        "phone": "(416) 855-2028",
        "description": "Lao Thai Restaurant serves deliciuos and authentic Laotian food. We are located at 4 Gladstone Avenue, Toronto, ON M6J 3K6 and you can contact us on (416) 855-2028"
    },
    {
        "restaurantType": "Latin American",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=880374c15c52ba38&signature=320db6b601d887dc964c108688dd9087deadcad52c42e64318f6877c0576af50&slot=0",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Latin American food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Latin American",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/biz/la-bella-managua-toronto",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Latin American food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Lebanese",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=fae1b1524d4bf6da&signature=5fd010cfbeb8d4a107f509f01cfb4ff32c73b67824413da43f1dd1f6b7f95d90&slot=0",
        "latitude": 43.778937,
        "longitude": -79.363867,
        "address": "4777 Leslie Street, Toronto, ON M2J 2K8",
        "phone": "(416) 490-7888",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Lebanese food. We are located at 4777 Leslie Street, Toronto, ON M2J 2K8 and you can contact us on (416) 490-7888"
    },
    {
        "restaurantType": "Lebanese",
        "title": "Xawaash",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=pTbkdBDDKxNVjKUZ_6RAug&campaign_id=tgOd9FGRgQx1NO8liswl0A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fxawaash-toronto&request_id=fae1b1524d4bf6da&signature=c657b9370ed452f654508293ab28001f43b8b7e1106d1f907d0a4d70358b857e&slot=1",
        "latitude": 43.71528,
        "longitude": -79.592866,
        "address": "130 Queens Plate Drive, Unit 1, Toronto, ON M9W",
        "phone": "(647) 849-3626",
        "description": "Xawaash serves deliciuos and authentic Lebanese food. We are located at 130 Queens Plate Drive, Unit 1, Toronto, ON M9W and you can contact us on (647) 849-3626"
    },
    {
        "restaurantType": "Live/Raw Food",
        "title": "Live Organic Food Bar",
        "imgSrc": "https://www.yelp.ca/biz/live-organic-food-bar-toronto-2",
        "latitude": 43.674716,
        "longitude": -79.4083,
        "address": "264 Dupont Street, Toronto, ON M5R 1V7",
        "phone": "(416) 515-2002",
        "description": "Live Organic Food Bar serves deliciuos and authentic Live/Raw Food food. We are located at 264 Dupont Street, Toronto, ON M5R 1V7 and you can contact us on (416) 515-2002"
    },
    {
        "restaurantType": "Live/Raw Food",
        "title": "Live Organic Food Bar - Liberty Village",
        "imgSrc": "https://www.yelp.ca/biz/live-organic-food-bar-liberty-village-toronto-2",
        "latitude": 43.640035,
        "longitude": -79.421341,
        "address": "134 Atlantic Avenue, Toronto, ON M6K 1X4",
        "phone": "(647) 748-5483",
        "description": "Live Organic Food Bar - Liberty Village serves deliciuos and authentic Live/Raw Food food. We are located at 134 Atlantic Avenue, Toronto, ON M6K 1X4 and you can contact us on (647) 748-5483"
    },
    {
        "restaurantType": "Malaysian",
        "title": "Soos",
        "imgSrc": "https://www.yelp.ca/biz/soos-toronto",
        "latitude": 43.646276,
        "longitude": -79.419711,
        "address": "94 Ossington Avenue, Toronto, ON M6J 2Y7",
        "phone": "(416) 901-7667",
        "description": "Soos serves deliciuos and authentic Malaysian food. We are located at 94 Ossington Avenue, Toronto, ON M6J 2Y7 and you can contact us on (416) 901-7667"
    },
    {
        "restaurantType": "Malaysian",
        "title": "One2 Snacks",
        "imgSrc": "https://www.yelp.ca/biz/one2-snacks-toronto",
        "latitude": 43.78719,
        "longitude": -79.276623,
        "address": "8 Glen Watford Drive, Unit 26, Toronto, ON M1S 2C1",
        "phone": "(647) 340-7099",
        "description": "One2 Snacks serves deliciuos and authentic Malaysian food. We are located at 8 Glen Watford Drive, Unit 26, Toronto, ON M1S 2C1 and you can contact us on (647) 340-7099"
    },
    {
        "restaurantType": "Mauritius",
        "title": "La Marmite Mauritienne",
        "imgSrc": "https://www.yelp.ca/biz/la-marmite-mauritienne-brampton",
        "latitude": 43.685688,
        "longitude": -79.759423,
        "address": "22 Main Street South, Unit B, Brampton, ON L6Y 1M8",
        "phone": "(647) 701-1667",
        "description": "La Marmite Mauritienne serves deliciuos and authentic Mauritius food. We are located at 22 Main Street South, Unit B, Brampton, ON L6Y 1M8 and you can contact us on (647) 701-1667"
    },
    {
        "restaurantType": "Mediterranean",
        "title": "Loga’s Corner",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=rfgln6-7WFCu7S7fOoqMdA&campaign_id=J2ReRvseOldb5s8dVW_XfA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Flogas-corner-toronto&request_id=49f33dac82a93136&signature=3c43679db89c61b59ab22da510e644f8cbe0d9e4319a0689c383bb0cd486cf35&slot=0",
        "latitude": 43.640353,
        "longitude": -79.435923,
        "address": "216C Close Avenue, Toronto, ON M6K 2V5",
        "phone": "(647) 761-0965",
        "description": "Loga’s Corner serves deliciuos and authentic Mediterranean food. We are located at 216C Close Avenue, Toronto, ON M6K 2V5 and you can contact us on (647) 761-0965"
    },
    {
        "restaurantType": "Mediterranean",
        "title": "Byblos",
        "imgSrc": "https://www.yelp.ca/biz/byblos-toronto-2",
        "latitude": 43.647434,
        "longitude": -79.388193,
        "address": "11 Duncan Street, Toronto, ON M5V 3M2",
        "phone": "(647) 660-0909",
        "description": "Byblos serves deliciuos and authentic Mediterranean food. We are located at 11 Duncan Street, Toronto, ON M5V 3M2 and you can contact us on (647) 660-0909"
    },
    {
        "restaurantType": "Mexican",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=bdd71e49601129b2&signature=2a722b64c2ce54f361c46cfbdca71bd4ac780c3b9658f59cb318d104891272f0&slot=0",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Mexican food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Mexican",
        "title": "Playa Cabana",
        "imgSrc": "https://www.yelp.ca/biz/playa-cabana-toronto",
        "latitude": 43.675958,
        "longitude": -79.401184,
        "address": "111 Dupont Street, Toronto, ON M5R 1V4",
        "phone": "(416) 929-3911",
        "description": "Playa Cabana serves deliciuos and authentic Mexican food. We are located at 111 Dupont Street, Toronto, ON M5R 1V4 and you can contact us on (416) 929-3911"
    },
    {
        "restaurantType": "Middle Eastern",
        "title": "Georgia Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=1PvEnSgdZVZZlH552XUTGg&campaign_id=AHzWUNeCeZnGXA8r8xNcRw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fgeorgia-restaurant-toronto&request_id=24b4018bd61020d9&signature=12c073b271933f33e213059877b5af8402cfbdda961092f0c014b675c5a8fc28&slot=0",
        "latitude": 43.767519,
        "longitude": -79.475297,
        "address": "1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4",
        "phone": "(416) 907-2200",
        "description": "Georgia Restaurant serves deliciuos and authentic Middle Eastern food. We are located at 1118 Finch Avenue W, Unit 2, Toronto, ON M3J 3J4 and you can contact us on (416) 907-2200"
    },
    {
        "restaurantType": "Middle Eastern",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=24b4018bd61020d9&signature=d1435fbfa8cd567a8fa3a5e80f8bca9cbe6b777da44a638ceab838e8c4bd4a29&slot=1",
        "latitude": 43.778937,
        "longitude": -79.363867,
        "address": "4777 Leslie Street, Toronto, ON M2J 2K8",
        "phone": "(416) 490-7888",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Middle Eastern food. We are located at 4777 Leslie Street, Toronto, ON M2J 2K8 and you can contact us on (416) 490-7888"
    },
    {
        "restaurantType": "Modern European",
        "title": "Campo",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L8W83-wPFLMs457cAu60Eg&campaign_id=y3TzqXVx8zZZF5_XCr_JpQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcampo-toronto&request_id=368d04d7426313fc&signature=d43e2402837f54d2f886ebc487163a817d98cdf61a7a077deb9303b33c150949&slot=0",
        "latitude": 43.655118,
        "longitude": -79.486959,
        "address": "244 Jane Street, Toronto, ON M6S 3Y8",
        "phone": "(647) 849-3633",
        "description": "Campo serves deliciuos and authentic Modern European food. We are located at 244 Jane Street, Toronto, ON M6S 3Y8 and you can contact us on (647) 849-3633"
    },
    {
        "restaurantType": "Modern European",
        "title": "Harvest Green",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=kIdLsbi4wdPZzMYRJmD48g&campaign_id=19F7xBRRSKcFxADmt78Nxw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fharvest-green-toronto&request_id=368d04d7426313fc&signature=34e9f701422ce10012364bedf3447fdd4bb27ef63574ffe8a9f4472bfede7a25&slot=1",
        "latitude": 43.645852,
        "longitude": -79.387863,
        "address": "200 Wellington Street W, Toronto, ON M5V 3C7",
        "phone": "(416) 581-1397",
        "description": "Harvest Green serves deliciuos and authentic Modern European food. We are located at 200 Wellington Street W, Toronto, ON M5V 3C7 and you can contact us on (416) 581-1397"
    },
    {
        "restaurantType": "Mongolian",
        "title": "Guu Izakaya Toronto",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L82O1ZFFQfjJxF0_PYWPnA&campaign_id=bqnOeJlvipvCTCiSC-t-yQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fguu-izakaya-toronto-toronto&request_id=531a16c0c500b6fd&signature=f1a65fc168d3333ff4c20ae5671edd8666191941e63383c24963cdf8f03935cb&slot=0",
        "latitude": 43.641867,
        "longitude": -79.43109,
        "address": "1314 Queen Street W, Toronto, ON M6K 1L4",
        "phone": "(647) 351-1314",
        "description": "Guu Izakaya Toronto serves deliciuos and authentic Mongolian food. We are located at 1314 Queen Street W, Toronto, ON M6K 1L4 and you can contact us on (647) 351-1314"
    },
    {
        "restaurantType": "Mongolian",
        "title": "Kintaro Izakaya",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=nrq5H3LZicjMG0wv7gy08g&campaign_id=_p-E4kUK3rS8bn4z_fQ9lg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fkintaro-izakaya-toronto-3&request_id=531a16c0c500b6fd&signature=ff4e08c005394d2d9637c128d1dd714fa31c6ecbe9ccb39e6724096e473350bb&slot=1",
        "latitude": 43.664158,
        "longitude": -79.380274,
        "address": "459 Church Street, Toronto, ON M4Y 4C5",
        "phone": "(647) 560-5335",
        "description": "Kintaro Izakaya serves deliciuos and authentic Mongolian food. We are located at 459 Church Street, Toronto, ON M4Y 4C5 and you can contact us on (647) 560-5335"
    },
    {
        "restaurantType": "Moroccan",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=1c47fc72ad808862&signature=112021902deac2279fe83cc5e70d6b5556c621081877ce0f53b5961e0707196a&slot=0",
        "latitude": 43.778937,
        "longitude": -79.363867,
        "address": "4777 Leslie Street, Toronto, ON M2J 2K8",
        "phone": "(416) 490-7888",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Moroccan food. We are located at 4777 Leslie Street, Toronto, ON M2J 2K8 and you can contact us on (416) 490-7888"
    },
    {
        "restaurantType": "Moroccan",
        "title": "Pasha Authentic Turkish Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=WA7sC64kCRstywm2EgZXEw&campaign_id=mU5KIduB3V6_4iOLWHin3w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpasha-authentic-turkish-cuisine-toronto&request_id=1c47fc72ad808862&signature=3e9c9c948ec98ba193ca9dc3a62f7edf358e05d7ba6cc55bc8a64e4130d0afa7&slot=1",
        "latitude": 43.708364,
        "longitude": -79.342651,
        "address": "64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4",
        "phone": "(416) 421-3500",
        "description": "Pasha Authentic Turkish Cuisine serves deliciuos and authentic Moroccan food. We are located at 64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4 and you can contact us on (416) 421-3500"
    },
    {
        "restaurantType": "Nicaraguan",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=029c0a5e596071f0&signature=974ebfa36bbc7b1fba8afceb28fc3c4b84cb84fc0c41b993949a200dd279c5b6&slot=0",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Nicaraguan food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Nicaraguan",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/biz/la-bella-managua-toronto",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Nicaraguan food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Noodles",
        "title": "GB Hand-pulled Noodles",
        "imgSrc": "https://www.yelp.ca/biz/gb-hand-pulled-noodles-toronto",
        "latitude": 43.656641,
        "longitude": -79.383747,
        "address": "66 Edward Street, Toronto, ON M5G 1C9",
        "phone": "",
        "description": "GB Hand-pulled Noodles serves deliciuos and authentic Noodles food. We are located at 66 Edward Street, Toronto, ON M5G 1C9 and you can contact us on "
    },
    {
        "restaurantType": "Noodles",
        "title": "Homemade Ramen",
        "imgSrc": "https://www.yelp.ca/biz/homemade-ramen-toronto",
        "latitude": 43.65239,
        "longitude": -79.397391,
        "address": "263 Spadina Avenue, Toronto, ON M5T 2E3",
        "phone": "(647) 352-6068",
        "description": "Homemade Ramen serves deliciuos and authentic Noodles food. We are located at 263 Spadina Avenue, Toronto, ON M5T 2E3 and you can contact us on (647) 352-6068"
    },
    {
        "restaurantType": "Pakistani",
        "title": "The Host",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=OFAiA6En2HD0CqLkFDCNpg&campaign_id=UiDeNSuaSJJ-a4Xa5R6s5g&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-host-toronto-2&request_id=c9a006e9e21570bf&signature=49227fced4327abb1a93a56c2dd09ce83d49754771a7d6ae6fe43d4b5597d9ec&slot=0",
        "latitude": 43.669935,
        "longitude": -79.395858,
        "address": "14 Prince Arthur Avenue, Toronto, ON M5R 1A9",
        "phone": "(416) 962-4678",
        "description": "The Host serves deliciuos and authentic Pakistani food. We are located at 14 Prince Arthur Avenue, Toronto, ON M5R 1A9 and you can contact us on (416) 962-4678"
    },
    {
        "restaurantType": "Pakistani",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=X5p3E6hoNT4yMIjGRksi1A&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=c9a006e9e21570bf&signature=052427e4c921cb1ed12c52249b7bebdaf8e05e13ca290dda59bdd281c2a6e735&slot=1",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Pakistani food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "Pan Asian",
        "title": "Asian Taste",
        "imgSrc": "https://www.yelp.ca/biz/asian-taste-toronto",
        "latitude": 43.662469,
        "longitude": -79.367011,
        "address": "415 Parliament St, Toronto, ON M5A 3A1",
        "phone": "",
        "description": "Asian Taste serves deliciuos and authentic Pan Asian food. We are located at 415 Parliament St, Toronto, ON M5A 3A1 and you can contact us on "
    },
    {
        "restaurantType": "Pan Asian",
        "title": "Blooming Rose Pan Asian Cuisine",
        "imgSrc": "https://www.yelp.ca/biz/blooming-rose-pan-asian-cuisine-toronto",
        "latitude": 43.674741,
        "longitude": -79.388259,
        "address": "895 Yonge Street, Toronto, ON M4W 2H2",
        "phone": "(416) 962-2825",
        "description": "Blooming Rose Pan Asian Cuisine serves deliciuos and authentic Pan Asian food. We are located at 895 Yonge Street, Toronto, ON M4W 2H2 and you can contact us on (416) 962-2825"
    },
    {
        "restaurantType": "Persian/Iranian",
        "title": "Jerusalem Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=YAdyu9ovEiOZXBWkD0H8-Q&campaign_id=1pgwHjYVp_uhNIIDBlstOA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fjerusalem-restaurant-toronto&request_id=ff5a74c4e195b373&signature=db9bedc32ebcb60c747c211f62fe645732cc72cc36291965d52239986e81f864&slot=0",
        "latitude": 43.778937,
        "longitude": -79.363867,
        "address": "4777 Leslie Street, Toronto, ON M2J 2K8",
        "phone": "(416) 490-7888",
        "description": "Jerusalem Restaurant serves deliciuos and authentic Persian/Iranian food. We are located at 4777 Leslie Street, Toronto, ON M2J 2K8 and you can contact us on (416) 490-7888"
    },
    {
        "restaurantType": "Persian/Iranian",
        "title": "Mayrik",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=iPuY6dR5w5X_gOM_2mx-hA&campaign_id=vyrutZUoHaqTNIQ-TMaTDg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmayrik-toronto&request_id=ff5a74c4e195b373&signature=a5a113b83bdd969d2cc82ea8ec3fc5156a8b701f91ae6263ffea128fc80c9779&slot=1",
        "latitude": 43.705676,
        "longitude": -79.375444,
        "address": "1580 Bayview Avenue, Toronto, ON M4G 3B7",
        "phone": "(416) 483-0922",
        "description": "Mayrik serves deliciuos and authentic Persian/Iranian food. We are located at 1580 Bayview Avenue, Toronto, ON M4G 3B7 and you can contact us on (416) 483-0922"
    },
    {
        "restaurantType": "Peruvian",
        "title": "Campo",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=L8W83-wPFLMs457cAu60Eg&campaign_id=y3TzqXVx8zZZF5_XCr_JpQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcampo-toronto&request_id=425a350dbd057c0c&signature=c8dd5dc359a9704fd09304f8f2fa1f6974fc5afc369394d4d16f7cd4e71909ec&slot=0",
        "latitude": 43.655118,
        "longitude": -79.486959,
        "address": "244 Jane Street, Toronto, ON M6S 3Y8",
        "phone": "(647) 849-3633",
        "description": "Campo serves deliciuos and authentic Peruvian food. We are located at 244 Jane Street, Toronto, ON M6S 3Y8 and you can contact us on (647) 849-3633"
    },
    {
        "restaurantType": "Peruvian",
        "title": "Caribbean Sunset Restaurant and Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=lzrFRbdvpnLJze9VqJigLw&campaign_id=qCzXVh0LwIESgk8oads-Mw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcaribbean-sunset-restaurant-and-bar-toronto&request_id=425a350dbd057c0c&signature=9a7a6e0d18ce762d7cd372c07daff70d22e4ec56f8b7627092e344964ec095a9&slot=1",
        "latitude": 43.659178,
        "longitude": -79.348032,
        "address": "753A Queen St E, Toronto, ON M4M 1H3",
        "phone": "(647) 340-7607",
        "description": "Caribbean Sunset Restaurant and Bar serves deliciuos and authentic Peruvian food. We are located at 753A Queen St E, Toronto, ON M4M 1H3 and you can contact us on (647) 340-7607"
    },
    {
        "restaurantType": "Pizza",
        "title": "Martino’s Pizza",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=LWI8ULsw0X1FpInux4Tg5Q&campaign_id=3awDhjbQjpi34yZEXTtnXg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmartinos-pizza-toronto-2&request_id=ccc235efa9614d4d&signature=5636623c783f8f77d0f41640b6664afba26b501bbd4387f66236e255fd70396d&slot=0",
        "latitude": 43.675568,
        "longitude": -79.403644,
        "address": "178 Dupont Street, Toronto, ON M5R 2E6",
        "phone": "(416) 929-6000",
        "description": "Martino’s Pizza serves deliciuos and authentic Pizza food. We are located at 178 Dupont Street, Toronto, ON M5R 2E6 and you can contact us on (416) 929-6000"
    },
    {
        "restaurantType": "Pizza",
        "title": "Blaze Fast-Fire’d Pizza",
        "imgSrc": "https://www.yelp.ca/biz/blaze-fast-fired-pizza-toronto",
        "latitude": 43.656531,
        "longitude": -79.380043,
        "address": "10 Dundas Street East, #124, Toronto, ON M5B 2G9",
        "phone": "(647) 933-1028",
        "description": "Blaze Fast-Fire’d Pizza serves deliciuos and authentic Pizza food. We are located at 10 Dundas Street East, #124, Toronto, ON M5B 2G9 and you can contact us on (647) 933-1028"
    },
    {
        "restaurantType": "Polish",
        "title": "Café Polonez",
        "imgSrc": "https://www.yelp.ca/biz/caf%C3%A9-polonez-toronto-2",
        "latitude": 43.645129,
        "longitude": -79.448368,
        "address": "195 Roncesvalles Avenue, Toronto, ON M6R 2L5",
        "phone": "(416) 532-8432",
        "description": "Café Polonez serves deliciuos and authentic Polish food. We are located at 195 Roncesvalles Avenue, Toronto, ON M6R 2L5 and you can contact us on (416) 532-8432"
    },
    {
        "restaurantType": "Polish",
        "title": "Hastings Snack Bar",
        "imgSrc": "https://www.yelp.ca/biz/hastings-snack-bar-toronto",
        "latitude": 43.663749,
        "longitude": -79.328886,
        "address": "5 Hastings Avenue, Toronto, ON M4L 2L1",
        "phone": "(647) 850-9260",
        "description": "Hastings Snack Bar serves deliciuos and authentic Polish food. We are located at 5 Hastings Avenue, Toronto, ON M4L 2L1 and you can contact us on (647) 850-9260"
    },
    {
        "restaurantType": "Pop-Up Restaurants",
        "title": "Dinners in Toronto k",
        "imgSrc": "https://www.yelp.ca/biz/dinners-in-toronto-k-toronto",
        "latitude": 43.677638,
        "longitude": -79.350098,
        "address": "463 Danforth Avenue, Toronto, ON M4K 1P1",
        "phone": "(647) 236-4423",
        "description": "Dinners in Toronto k serves deliciuos and authentic Pop-Up Restaurants food. We are located at 463 Danforth Avenue, Toronto, ON M4K 1P1 and you can contact us on (647) 236-4423"
    },
    {
        "restaurantType": "Portuguese",
        "title": "Ilhas De Bruma",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=JrD90K-V1tfPWbWjPgSXmA&campaign_id=qetOk0GDgM6FIdcC1ZG4wQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Filhas-de-bruma-toronto&request_id=822f63ed0d830d35&signature=ed2c81d98d4c5f5dbec75fe88bef71f48ad5cd047cf5e10324aef4cf37d8b325&slot=0",
        "latitude": 43.652334,
        "longitude": -79.433657,
        "address": "1136 College Street W, Toronto, ON M6H 1B5",
        "phone": "(416) 538-2015",
        "description": "Ilhas De Bruma serves deliciuos and authentic Portuguese food. We are located at 1136 College Street W, Toronto, ON M6H 1B5 and you can contact us on (416) 538-2015"
    },
    {
        "restaurantType": "Portuguese",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=822f63ed0d830d35&signature=90bc8148f335f6a6c94d01f3036735b91d6bd522664e99654f2f66b23cb33d87&slot=1",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Portuguese food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Poutineries",
        "title": "Urbun Eats Co",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_3IE9guLHvAr-kJpH4Zd7Q&campaign_id=-S-v9AShDzzXXlXiY-zyzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Furbun-eats-co-toronto-2&request_id=ada688f7fe2b9c8e&signature=1119b92b4af11ef1847035fe6840c96366ddfdd54ab95e87181196675bd2836c&slot=0",
        "latitude": 43.71367,
        "longitude": -79.365092,
        "address": "874 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 556-0319",
        "description": "Urbun Eats Co serves deliciuos and authentic Poutineries food. We are located at 874 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 556-0319"
    },
    {
        "restaurantType": "Poutineries",
        "title": "Thoroughbred Food & Drink",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-Q5b2LGivWP_ZBwSovGCRQ&campaign_id=J5FZvLY3wo48320vDgMyog&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthoroughbred-food-and-drink-toronto&request_id=ada688f7fe2b9c8e&signature=a0f4e0179b022b6fd40a9a5cd78b1910a2ff916b8dd222bb9f78188cb0bb63bf&slot=1",
        "latitude": 43.648949,
        "longitude": -79.391628,
        "address": "304 Richmond Street W, Toronto, ON M5V 3M6",
        "phone": "(416) 551-9221",
        "description": "Thoroughbred Food & Drink serves deliciuos and authentic Poutineries food. We are located at 304 Richmond Street W, Toronto, ON M5V 3M6 and you can contact us on (416) 551-9221"
    },
    {
        "restaurantType": "Ramen",
        "title": "Sansotei Ramen",
        "imgSrc": "https://www.yelp.ca/biz/sansotei-ramen-toronto-2",
        "latitude": 43.655004,
        "longitude": -79.386473,
        "address": "179 Dundas Street W, Toronto, ON M5G 1Z8",
        "phone": "(647) 748-3833",
        "description": "Sansotei Ramen serves deliciuos and authentic Ramen food. We are located at 179 Dundas Street W, Toronto, ON M5G 1Z8 and you can contact us on (647) 748-3833"
    },
    {
        "restaurantType": "Ramen",
        "title": "Ramen Isshin",
        "imgSrc": "https://www.yelp.ca/biz/ramen-isshin-toronto",
        "latitude": 43.656458,
        "longitude": -79.406981,
        "address": "421 College Street, Toronto, ON M5T 1T1",
        "phone": "(416) 367-4013",
        "description": "Ramen Isshin serves deliciuos and authentic Ramen food. We are located at 421 College Street, Toronto, ON M5T 1T1 and you can contact us on (416) 367-4013"
    },
    {
        "restaurantType": "Reunion",
        "title": "Reunion Island Coffee",
        "imgSrc": "https://www.yelp.ca/biz/reunion-island-coffee-toronto",
        "latitude": 43.650552,
        "longitude": -79.450453,
        "address": "385 Roncesvalles Avenue, Toronto, ON M6R 2N1",
        "phone": "(905) 829-8520",
        "description": "Reunion Island Coffee serves deliciuos and authentic Reunion food. We are located at 385 Roncesvalles Avenue, Toronto, ON M6R 2N1 and you can contact us on (905) 829-8520"
    },
    {
        "restaurantType": "Reunion",
        "title": "Reunion Island Coffee Limited",
        "imgSrc": "https://www.yelp.ca/biz/reunion-island-coffee-limited-oakville-2",
        "latitude": 43.493326,
        "longitude": -79.649757,
        "address": "2421 Royal Windsor Drive, Oakville, ON L6J 7X6",
        "phone": "(905) 829-8520",
        "description": "Reunion Island Coffee Limited serves deliciuos and authentic Reunion food. We are located at 2421 Royal Windsor Drive, Oakville, ON L6J 7X6 and you can contact us on (905) 829-8520"
    },
    {
        "restaurantType": "Russian",
        "title": "Crepes Club",
        "imgSrc": "https://www.yelp.ca/biz/crepes-club-toronto",
        "latitude": 43.655843,
        "longitude": -79.393897,
        "address": "49 Baldwin Street, Toronto, ON M5T 1L3",
        "phone": "(647) 352-1990",
        "description": "Crepes Club serves deliciuos and authentic Russian food. We are located at 49 Baldwin Street, Toronto, ON M5T 1L3 and you can contact us on (647) 352-1990"
    },
    {
        "restaurantType": "Russian",
        "title": "Taj Restaurant",
        "imgSrc": "https://www.yelp.ca/biz/taj-restaurant-toronto",
        "latitude": 43.768708,
        "longitude": -79.474382,
        "address": "1110 Finch Avenue West, Toronto, ON M3J 2T2",
        "phone": "(647) 231-1477",
        "description": "Taj Restaurant serves deliciuos and authentic Russian food. We are located at 1110 Finch Avenue West, Toronto, ON M3J 2T2 and you can contact us on (647) 231-1477"
    },
    {
        "restaurantType": "Salad",
        "title": "Harvest Green",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=kIdLsbi4wdPZzMYRJmD48g&campaign_id=19F7xBRRSKcFxADmt78Nxw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fharvest-green-toronto&request_id=4a654223f499c014&signature=63311e4c1d0f029c618514b7c10703304bbeb23f72d6d2d06ce50c2bad995da0&slot=0",
        "latitude": 43.645852,
        "longitude": -79.387863,
        "address": "200 Wellington Street W, Toronto, ON M5V 3C7",
        "phone": "(416) 581-1397",
        "description": "Harvest Green serves deliciuos and authentic Salad food. We are located at 200 Wellington Street W, Toronto, ON M5V 3C7 and you can contact us on (416) 581-1397"
    },
    {
        "restaurantType": "Salad",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=4a654223f499c014&signature=c48063f040d7684315416fd43b236788ee29ed848d83921e256799efd2f3b52c&slot=1",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Salad food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Salvadoran",
        "title": "Caribbean Sunset Restaurant and Bar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=lzrFRbdvpnLJze9VqJigLw&campaign_id=GUM-h3bjI2I5IprCMEsrUg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcaribbean-sunset-restaurant-and-bar-toronto&request_id=92a76e01adac8307&signature=87bf43c75834b41536ed3b38f2f321d87e2fb570f8181c51f0d57e3cbf61b5bf&slot=0",
        "latitude": 43.659178,
        "longitude": -79.348032,
        "address": "753A Queen St E, Toronto, ON M4M 1H3",
        "phone": "(647) 340-7607",
        "description": "Caribbean Sunset Restaurant and Bar serves deliciuos and authentic Salvadoran food. We are located at 753A Queen St E, Toronto, ON M4M 1H3 and you can contact us on (647) 340-7607"
    },
    {
        "restaurantType": "Salvadoran",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=92a76e01adac8307&signature=81316904fff33cea5ed0ac6b621d19bfb0d5fb2653fd7cc2dda6964b08bbc9b3&slot=1",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Salvadoran food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Sandwiches",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=db3c084e96c08094&signature=6132737c4f537233c06c20e7d79eabcbafabe3f8663f4fe6b4016d2ae90fe571&slot=0",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Sandwiches food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Sandwiches",
        "title": "The Diner’s Corner",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=cd3ced-z0OLP-yBUPSNKjQ&campaign_id=yyr7NtOLUKNtq-iomSAjgg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-diners-corner-toronto&request_id=db3c084e96c08094&signature=90c9044e38888c8671a0ead8548cf179a3073d2e8e94bedb5998eb1edcaa92ad&slot=1",
        "latitude": 43.667031,
        "longitude": -79.386203,
        "address": "51 saint nicholas street, Toronto, ON M4Y 1W6",
        "phone": "(416) 929-7031",
        "description": "The Diner’s Corner serves deliciuos and authentic Sandwiches food. We are located at 51 saint nicholas street, Toronto, ON M4Y 1W6 and you can contact us on (416) 929-7031"
    },
    {
        "restaurantType": "Scandinavian",
        "title": "Karelia Kitchen",
        "imgSrc": "https://www.yelp.ca/biz/karelia-kitchen-toronto-2",
        "latitude": 43.659419,
        "longitude": -79.438004,
        "address": "1194 Bloor Street W, Toronto, ON M6H 1N2",
        "phone": "(647) 748-1194",
        "description": "Karelia Kitchen serves deliciuos and authentic Scandinavian food. We are located at 1194 Bloor Street W, Toronto, ON M6H 1N2 and you can contact us on (647) 748-1194"
    },
    {
        "restaurantType": "Scandinavian",
        "title": "Beaches Bake Shop",
        "imgSrc": "https://www.yelp.ca/biz/beaches-bake-shop-toronto",
        "latitude": 43.680438,
        "longitude": -79.289678,
        "address": "900 Kingston Road, Toronto, ON M4E 1S5",
        "phone": "(416) 686-2391",
        "description": "Beaches Bake Shop serves deliciuos and authentic Scandinavian food. We are located at 900 Kingston Road, Toronto, ON M4E 1S5 and you can contact us on (416) 686-2391"
    },
    {
        "restaurantType": "Scottish",
        "title": "Reverie at The Park",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=5AC2yQzEe3iRGrsJ0at-8g&campaign_id=ib_9ayf8c7Tfb5G9QqHrsg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Freverie-at-the-park-toronto-3&request_id=3b83db8912a26175&signature=9ff65fd11a2de763399df3dbb454f563aa63852188fbe6f3294b9175299c982c&slot=0",
        "latitude": null,
        "longitude": null,
        "address": "",
        "phone": "",
        "description": "Reverie at The Park serves deliciuos and authentic Scottish food. We are located at  and you can contact us on "
    },
    {
        "restaurantType": "Scottish",
        "title": "The Gastro Pub",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=7YmqLsiqjP20G3PtxRjBgg&campaign_id=OngBcT6tqIhcvU8kpXM8lw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-gastro-pub-toronto&request_id=3b83db8912a26175&signature=e9a789dfd8cf98e764334b2ac68383a6d6639ccafe5d48560ebc26bc22236dc7&slot=1",
        "latitude": 43.669814,
        "longitude": -79.300054,
        "address": "1987 Queen St E, Toronto, ON M4L 1J1",
        "phone": "(647) 846-8380",
        "description": "The Gastro Pub serves deliciuos and authentic Scottish food. We are located at 1987 Queen St E, Toronto, ON M4L 1J1 and you can contact us on (647) 846-8380"
    },
    {
        "restaurantType": "Seafood",
        "title": "Pokito",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=87I8ba2FKYKeXyAhiC6cLg&campaign_id=FEPzjjg3KZ6oARZ5F_HEcA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpokito-toronto&request_id=42678930cd77c868&signature=f8c82c39a067c6a6cdb954d609769fc8a28ff6517e7cb5ee2d122e95ecc66ab0&slot=0",
        "latitude": 43.64852,
        "longitude": -79.397986,
        "address": "420 Queen Street W, Toronto, ON M5V 2A7",
        "phone": "(416) 792-8808",
        "description": "Pokito serves deliciuos and authentic Seafood food. We are located at 420 Queen Street W, Toronto, ON M5V 2A7 and you can contact us on (416) 792-8808"
    },
    {
        "restaurantType": "Seafood",
        "title": "Nord Bistro",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=4P_HNoH4cjoCdPHPb2LTXA&campaign_id=gm2hwwUHnv0xUEochrlBuA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fnord-bistro-toronto-3&request_id=42678930cd77c868&signature=ca4f66a393b2eddad6fdb88a9d53785ae9232389ad8da7ce6bf7a3c705116fc6&slot=1",
        "latitude": 43.6739,
        "longitude": -79.41147,
        "address": "406 Dupont Street, Toronto, ON M5R 1V9",
        "phone": "(647) 559-9401",
        "description": "Nord Bistro serves deliciuos and authentic Seafood food. We are located at 406 Dupont Street, Toronto, ON M5R 1V9 and you can contact us on (647) 559-9401"
    },
    {
        "restaurantType": "Singaporean",
        "title": "Kid Lee",
        "imgSrc": "https://www.yelp.ca/biz/kid-lee-toronto-2",
        "latitude": 43.648708,
        "longitude": -79.381489,
        "address": "First Canadian Place",
        "phone": "(647) 352-0092",
        "description": "Kid Lee serves deliciuos and authentic Singaporean food. We are located at First Canadian Place and you can contact us on (647) 352-0092"
    },
    {
        "restaurantType": "Singaporean",
        "title": "Eat Jackpot",
        "imgSrc": "https://www.yelp.ca/biz/eat-jackpot-toronto",
        "latitude": 43.653614,
        "longitude": -79.398664,
        "address": "318 Spadina Avenue, Toronto, ON M5T 2E7",
        "phone": "(416) 792-8628",
        "description": "Eat Jackpot serves deliciuos and authentic Singaporean food. We are located at 318 Spadina Avenue, Toronto, ON M5T 2E7 and you can contact us on (416) 792-8628"
    },
    {
        "restaurantType": "Slovakian",
        "title": "V’s Schnitzel House",
        "imgSrc": "https://www.yelp.ca/biz/vs-schnitzel-house-toronto",
        "latitude": 43.602233,
        "longitude": -79.54571,
        "address": "448 Browns Line, Toronto, ON M8W 3T9",
        "phone": "(416) 255-3179",
        "description": "V’s Schnitzel House serves deliciuos and authentic Slovakian food. We are located at 448 Browns Line, Toronto, ON M8W 3T9 and you can contact us on (416) 255-3179"
    },
    {
        "restaurantType": "Slovakian",
        "title": "California Pub & Grill",
        "imgSrc": "https://www.yelp.ca/biz/california-pub-and-grill-east-york",
        "latitude": 43.685851,
        "longitude": -79.347669,
        "address": "914 Pape Avenue, East York, ON M4K 3V2",
        "phone": "(416) 461-1251",
        "description": "California Pub & Grill serves deliciuos and authentic Slovakian food. We are located at 914 Pape Avenue, East York, ON M4K 3V2 and you can contact us on (416) 461-1251"
    },
    {
        "restaurantType": "Soul Food",
        "title": "Scotthill Carribean Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=8894q9WTvkYN6oNUt3fJ3g&campaign_id=GvdySO3FV9XFiTzXZZYU0Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fscotthill-carribean-cuisine-toronto-2&request_id=3c6298d72375cece&signature=b6b5e27b0843c653c28f41ae470c5b0bd0b7ae69a8a3d9fca1209882cfa293e1&slot=0",
        "latitude": 43.733943,
        "longitude": -79.419534,
        "address": "1943 Avenue Road, Toronto, ON M5M 4A2",
        "phone": "(647) 691-6214",
        "description": "Scotthill Carribean Cuisine serves deliciuos and authentic Soul Food food. We are located at 1943 Avenue Road, Toronto, ON M5M 4A2 and you can contact us on (647) 691-6214"
    },
    {
        "restaurantType": "Soul Food",
        "title": "Pearl Diver",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=trKyIRyjKqVSZmcU0AnICQ&campaign_id=b04Tylwsa1mFLiCk8n_QrA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpearl-diver-toronto-2&request_id=3c6298d72375cece&signature=6dc049c4a8db9664fbe84a6cdb6b6713fddd6cbea38d5593309205c46af1ed6b&slot=1",
        "latitude": 43.65157,
        "longitude": -79.37377,
        "address": "100 Adelaide Street E, Toronto, ON M5C 1K9",
        "phone": "(647) 699-0167",
        "description": "Pearl Diver serves deliciuos and authentic Soul Food food. We are located at 100 Adelaide Street E, Toronto, ON M5C 1K9 and you can contact us on (647) 699-0167"
    },
    {
        "restaurantType": "Soup",
        "title": "Ravi Soups",
        "imgSrc": "https://www.yelp.ca/biz/ravi-soups-toronto",
        "latitude": 43.647491,
        "longitude": -79.391954,
        "address": "322 Adelaide Street W, Toronto, ON M5V 1R1",
        "phone": "(647) 435-8365",
        "description": "Ravi Soups serves deliciuos and authentic Soup food. We are located at 322 Adelaide Street W, Toronto, ON M5V 1R1 and you can contact us on (647) 435-8365"
    },
    {
        "restaurantType": "Soup",
        "title": "Ravi Soups",
        "imgSrc": "https://www.yelp.ca/biz/ravi-soups-toronto-4",
        "latitude": 43.668515,
        "longitude": -79.386809,
        "address": "9 Charles Street W, Toronto, ON M4Y 1R4",
        "phone": "(416) 515-7284",
        "description": "Ravi Soups serves deliciuos and authentic Soup food. We are located at 9 Charles Street W, Toronto, ON M4Y 1R4 and you can contact us on (416) 515-7284"
    },
    {
        "restaurantType": "South African",
        "title": "Nando’s Flame Grilled Chicken",
        "imgSrc": "https://www.yelp.ca/biz/nandos-flame-grilled-chicken-toronto-3",
        "latitude": 43.661705,
        "longitude": -79.38629,
        "address": "832 Bay St., Toronto, ON M5S 1Z6",
        "phone": "(416) 925-8888",
        "description": "Nando’s Flame Grilled Chicken serves deliciuos and authentic South African food. We are located at 832 Bay St., Toronto, ON M5S 1Z6 and you can contact us on (416) 925-8888"
    },
    {
        "restaurantType": "South African",
        "title": "Chick Fiesta",
        "imgSrc": "https://www.yelp.ca/biz/chick-fiesta-toronto-4",
        "latitude": 43.821343,
        "longitude": -79.246295,
        "address": "2761 Markham Road, Unit 31, Toronto, ON M1X 0A4",
        "phone": "(647) 348-3447",
        "description": "Chick Fiesta serves deliciuos and authentic South African food. We are located at 2761 Markham Road, Unit 31, Toronto, ON M1X 0A4 and you can contact us on (647) 348-3447"
    },
    {
        "restaurantType": "Southern",
        "title": "Pearl Diver",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=trKyIRyjKqVSZmcU0AnICQ&campaign_id=b04Tylwsa1mFLiCk8n_QrA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpearl-diver-toronto-2&request_id=a52c4889250d23c8&signature=030e07a052965cf23aed30e158918b3c2d15a83a2b65fe357cc95c696b5b7f5b&slot=0",
        "latitude": 43.65157,
        "longitude": -79.37377,
        "address": "100 Adelaide Street E, Toronto, ON M5C 1K9",
        "phone": "(647) 699-0167",
        "description": "Pearl Diver serves deliciuos and authentic Southern food. We are located at 100 Adelaide Street E, Toronto, ON M5C 1K9 and you can contact us on (647) 699-0167"
    },
    {
        "restaurantType": "Southern",
        "title": "Black Briik Restobar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=Hj_pXjhl-J2yjpJX-vyeMA&campaign_id=3-lubTve0UV-OvlKikgGBw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fblack-briik-restobar-toronto&request_id=a52c4889250d23c8&signature=88d566e207367c2bceb13890c360d16260c4938edc91f4138baf3bf011b68bae&slot=1",
        "latitude": 43.660093,
        "longitude": -79.433138,
        "address": "1077 Bloor St W, Toronto, ON M6H 1M5",
        "phone": "(416) 546-6123",
        "description": "Black Briik Restobar serves deliciuos and authentic Southern food. We are located at 1077 Bloor St W, Toronto, ON M6H 1M5 and you can contact us on (416) 546-6123"
    },
    {
        "restaurantType": "Spanish",
        "title": "Scotthill Carribean Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=8894q9WTvkYN6oNUt3fJ3g&campaign_id=GvdySO3FV9XFiTzXZZYU0Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fscotthill-carribean-cuisine-toronto-2&request_id=952b589463ddf5f1&signature=8a3c484caed1d84bf2acc0c4db6e133df67864ff5576e6dcc964ee13125a79ff&slot=0",
        "latitude": 43.733943,
        "longitude": -79.419534,
        "address": "1943 Avenue Road, Toronto, ON M5M 4A2",
        "phone": "(647) 691-6214",
        "description": "Scotthill Carribean Cuisine serves deliciuos and authentic Spanish food. We are located at 1943 Avenue Road, Toronto, ON M5M 4A2 and you can contact us on (647) 691-6214"
    },
    {
        "restaurantType": "Spanish",
        "title": "Patria",
        "imgSrc": "https://www.yelp.ca/biz/patria-toronto",
        "latitude": 43.645424,
        "longitude": -79.396221,
        "address": "480 King Street W, Toronto, ON M5V 1L7",
        "phone": "(416) 367-0505",
        "description": "Patria serves deliciuos and authentic Spanish food. We are located at 480 King Street W, Toronto, ON M5V 1L7 and you can contact us on (416) 367-0505"
    },
    {
        "restaurantType": "Sri Lankan",
        "title": "Aanch Modernist Indian Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=SZuroTnXB7FwOlHp8Jahyg&campaign_id=ha132aKW__UD8D9Qtztgtw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Faanch-modernist-indian-cuisine-toronto&request_id=764dfe23e6c0ae59&signature=ed33e9f5ed150f841cd153b94ccb85836fab8f3bfe2e436ff208e4cd0d1864b0&slot=0",
        "latitude": 43.644708,
        "longitude": -79.39067,
        "address": "259 Wellington St W, Toronto, ON M5V",
        "phone": "(647) 558-1508",
        "description": "Aanch Modernist Indian Cuisine serves deliciuos and authentic Sri Lankan food. We are located at 259 Wellington St W, Toronto, ON M5V and you can contact us on (647) 558-1508"
    },
    {
        "restaurantType": "Sri Lankan",
        "title": "Mt Everest Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=BSchC5THOB0MFmzJTEqAnQ&campaign_id=CPbZtchknn1omSC2cbEGbg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmt-everest-restaurant-toronto-2&request_id=764dfe23e6c0ae59&signature=213abdb0ef55e54653d486d0c762ac93e12aba22cc7ea016098200769285fb02&slot=1",
        "latitude": 43.713212,
        "longitude": -79.366619,
        "address": "804 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 748-8849",
        "description": "Mt Everest Restaurant serves deliciuos and authentic Sri Lankan food. We are located at 804 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 748-8849"
    },
    {
        "restaurantType": "Steakhouses",
        "title": "Sidecar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TLMysu1mWiLEslCBon5W1g&campaign_id=OKE56217kHD1J1EVdJRfNQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsidecar-toronto&request_id=1de124f727115542&signature=36a6800c60929337d1998d13c9d5227246da33b087515884337adc911790b005&slot=0",
        "latitude": 43.6552,
        "longitude": -79.413083,
        "address": "577 College Street, Toronto, ON M6G 1B2",
        "phone": "(647) 484-2764",
        "description": "Sidecar serves deliciuos and authentic Steakhouses food. We are located at 577 College Street, Toronto, ON M6G 1B2 and you can contact us on (647) 484-2764"
    },
    {
        "restaurantType": "Steakhouses",
        "title": "Copacabana Brazilian Steakhouse",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=GcxE5hK_TaHP4EZFDYz2mg&campaign_id=c07ig0BuCuBCdic5OnpEhw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcopacabana-brazilian-steakhouse-toronto&request_id=1de124f727115542&signature=668d3ee1c19c36834312852acac2e63c2eb6358676f7dc7ad8fee07ea260c4dd&slot=1",
        "latitude": 43.648344,
        "longitude": -79.387831,
        "address": "230 Adelaide Street W, Toronto, ON M5H 1W7",
        "phone": "(888) 432-6721",
        "description": "Copacabana Brazilian Steakhouse serves deliciuos and authentic Steakhouses food. We are located at 230 Adelaide Street W, Toronto, ON M5H 1W7 and you can contact us on (888) 432-6721"
    },
    {
        "restaurantType": "Sushi Bars",
        "title": "Yasu",
        "imgSrc": "https://www.yelp.ca/biz/yasu-toronto",
        "latitude": 43.662727,
        "longitude": -79.403279,
        "address": "81 Harbord Street, Toronto, ON M5S",
        "phone": "(416) 477-2361",
        "description": "Yasu serves deliciuos and authentic Sushi Bars food. We are located at 81 Harbord Street, Toronto, ON M5S and you can contact us on (416) 477-2361"
    },
    {
        "restaurantType": "Sushi Bars",
        "title": "Shunoko",
        "imgSrc": "https://www.yelp.ca/biz/shunoko-toronto",
        "latitude": 43.677446,
        "longitude": -79.444275,
        "address": "1201 St Clair W, Toronto, ON M6E 1B5",
        "phone": "(647) 748-7288",
        "description": "Shunoko serves deliciuos and authentic Sushi Bars food. We are located at 1201 St Clair W, Toronto, ON M6E 1B5 and you can contact us on (647) 748-7288"
    },
    {
        "restaurantType": "Syrian",
        "title": "Christina’s On the Danforth",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=wcYar8rgLFA7Mu3wJUqEgQ&campaign_id=kUomcp54KOfpN4tnS6vcxw&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fchristinas-on-the-danforth-toronto&request_id=849798efad812769&signature=4a436acd3aba51fec5086ada7925cdf306af041f5029a6df410e30cd5b8f0a83&slot=0",
        "latitude": 43.678301,
        "longitude": -79.349192,
        "address": "492 Danforth Avenue, Toronto, ON M4K 1P6",
        "phone": "(416) 463-4418",
        "description": "Christina’s On the Danforth serves deliciuos and authentic Syrian food. We are located at 492 Danforth Avenue, Toronto, ON M4K 1P6 and you can contact us on (416) 463-4418"
    },
    {
        "restaurantType": "Syrian",
        "title": "Soufi’s",
        "imgSrc": "https://www.yelp.ca/biz/soufis-toronto",
        "latitude": 43.646627,
        "longitude": -79.407374,
        "address": "676 Queen Street W, Toronto, ON M6J 1E5",
        "phone": "(647) 350-7737",
        "description": "Soufi’s serves deliciuos and authentic Syrian food. We are located at 676 Queen Street W, Toronto, ON M6J 1E5 and you can contact us on (647) 350-7737"
    },
    {
        "restaurantType": "Taiwanese",
        "title": "One Two Snack",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=Ee8Saq8Al4iaOeVDHNmVUw&campaign_id=kWlWyK1R8XmUuYRUNYEmsQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fone-two-snack-toronto&request_id=101d4fe334a5f974&signature=2cbb28af6014171000ae8349f9975f405099aadf0f06bfabb19db85599e9eaa0&slot=0",
        "latitude": 43.775583,
        "longitude": -79.41344,
        "address": "10 Northtown Way, Unit 111, Toronto, ON M2N 7L4",
        "phone": "(416) 901-0329",
        "description": "One Two Snack serves deliciuos and authentic Taiwanese food. We are located at 10 Northtown Way, Unit 111, Toronto, ON M2N 7L4 and you can contact us on (416) 901-0329"
    },
    {
        "restaurantType": "Taiwanese",
        "title": "Charidise",
        "imgSrc": "https://www.yelp.ca/biz/charidise-toronto",
        "latitude": 43.655897,
        "longitude": -79.393178,
        "address": "27 Baldwin Street, Toronto, ON M5T 1L1",
        "phone": "(647) 351-6555",
        "description": "Charidise serves deliciuos and authentic Taiwanese food. We are located at 27 Baldwin Street, Toronto, ON M5T 1L1 and you can contact us on (647) 351-6555"
    },
    {
        "restaurantType": "Tapas Bars",
        "title": "Sidecar",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TLMysu1mWiLEslCBon5W1g&campaign_id=OKE56217kHD1J1EVdJRfNQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fsidecar-toronto&request_id=ae9e1a8c90d6dfe0&signature=b3d098a897dbe5208ed7e5afdbd779aaa77d576ec82fefd74068ee2166d38c9d&slot=0",
        "latitude": 43.6552,
        "longitude": -79.413083,
        "address": "577 College Street, Toronto, ON M6G 1B2",
        "phone": "(647) 484-2764",
        "description": "Sidecar serves deliciuos and authentic Tapas Bars food. We are located at 577 College Street, Toronto, ON M6G 1B2 and you can contact us on (647) 484-2764"
    },
    {
        "restaurantType": "Tapas Bars",
        "title": "Hawthorne Food and Drink",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=6rTzYUGghp3XHPgOGaO8UQ&campaign_id=6xcrlnfHcTGg9qvEXtW8yA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fhawthorne-food-and-drink-toronto&request_id=ae9e1a8c90d6dfe0&signature=c6369e32640c1967969ca9e8b112bb9859c993a495076f18261e4bc89b2b6657&slot=1",
        "latitude": 43.652368,
        "longitude": -79.376226,
        "address": "60 Richmond Street E, Toronto, ON M5C 1N8",
        "phone": "(647) 930-9517",
        "description": "Hawthorne Food and Drink serves deliciuos and authentic Tapas Bars food. We are located at 60 Richmond Street E, Toronto, ON M5C 1N8 and you can contact us on (647) 930-9517"
    },
    {
        "restaurantType": "Tapas/Small Plates",
        "title": "Miami Beach Grill",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=a4muB73PIarVnXc8RQongA&campaign_id=UaN5We83QwriCSY-Q-SkNA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fmiami-beach-grill-vaughan&request_id=d9e39e0a4c8b79c8&signature=752575a92a4df05356d734d17451dfdcfb3579e07d5301818e8c79693a4ae5d6&slot=0",
        "latitude": 43.828561,
        "longitude": -79.541024,
        "address": "3255 Rutherford Road, Unit 28, Vaughan, ON L4K 5Y5",
        "phone": "(905) 597-7313",
        "description": "Miami Beach Grill serves deliciuos and authentic Tapas/Small Plates food. We are located at 3255 Rutherford Road, Unit 28, Vaughan, ON L4K 5Y5 and you can contact us on (905) 597-7313"
    },
    {
        "restaurantType": "Tapas/Small Plates",
        "title": "Reverie at The Park",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=5AC2yQzEe3iRGrsJ0at-8g&campaign_id=ib_9ayf8c7Tfb5G9QqHrsg&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Freverie-at-the-park-toronto-3&request_id=d9e39e0a4c8b79c8&signature=1faecac164168f3f68c1ef088c42639983dda11c74ae71e42a1d84b78091529d&slot=1",
        "latitude": 43.65516,
        "longitude": -79.412779,
        "address": "569 College Street, Toronto, ON M6G 1B2",
        "phone": "(416) 533-8841",
        "description": "Reverie at The Park serves deliciuos and authentic Tapas/Small Plates food. We are located at 569 College Street, Toronto, ON M6G 1B2 and you can contact us on (416) 533-8841"
    },
    {
        "restaurantType": "Tex-Mex",
        "title": "Urbun Eats Co",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=_3IE9guLHvAr-kJpH4Zd7Q&campaign_id=-S-v9AShDzzXXlXiY-zyzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Furbun-eats-co-toronto-2&request_id=6fa63c6e27e445b5&signature=51f7bab6ab98c81eaf87f4f5d80210958a26288c0e1a866e8f52382ea9a817c8&slot=0",
        "latitude": 43.71367,
        "longitude": -79.365092,
        "address": "874 Eglinton Avenue E, Toronto, ON M4G 2L1",
        "phone": "(647) 556-0319",
        "description": "Urbun Eats Co serves deliciuos and authentic Tex-Mex food. We are located at 874 Eglinton Avenue E, Toronto, ON M4G 2L1 and you can contact us on (647) 556-0319"
    },
    {
        "restaurantType": "Tex-Mex",
        "title": "Pearl Diver",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=trKyIRyjKqVSZmcU0AnICQ&campaign_id=b04Tylwsa1mFLiCk8n_QrA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpearl-diver-toronto-2&request_id=6fa63c6e27e445b5&signature=3c5d095827db79113278e5c5ae5a2a8ee28a3f7c832361b05a928f8b02ca212d&slot=1",
        "latitude": 43.65157,
        "longitude": -79.37377,
        "address": "100 Adelaide Street E, Toronto, ON M5C 1K9",
        "phone": "(647) 699-0167",
        "description": "Pearl Diver serves deliciuos and authentic Tex-Mex food. We are located at 100 Adelaide Street E, Toronto, ON M5C 1K9 and you can contact us on (647) 699-0167"
    },
    {
        "restaurantType": "Thai",
        "title": "The Friendly Thai",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=TGuRNZByAQYhejFfAAbD1A&campaign_id=80HfoJHvw0rs_U-w-p472w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fthe-friendly-thai-toronto-3&request_id=34027b7c176fb5f6&signature=4fbf61917e2de18caadcfc42083b50ef90ac19dcfbba2ad7b65f7c38cf9b8ab8&slot=0",
        "latitude": 43.665666,
        "longitude": -79.470494,
        "address": "3032 Dundas Street W, Toronto, ON M6P 1Z3",
        "phone": "(416) 913-8120",
        "description": "The Friendly Thai serves deliciuos and authentic Thai food. We are located at 3032 Dundas Street W, Toronto, ON M6P 1Z3 and you can contact us on (416) 913-8120"
    },
    {
        "restaurantType": "Thai",
        "title": "Taste of Thailand Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=oz4oVv0yiPFdnKnTw01TGw&campaign_id=6HvjiOg1qntFjbZp5cFk6w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Ftaste-of-thailand-cuisine-etobicoke&request_id=34027b7c176fb5f6&signature=9ac5f548b5f4a7f41520bb5eeec3ade03f91e0c2eb0c4168e18a47785e307ea1&slot=1",
        "latitude": 43.635794,
        "longitude": -79.540379,
        "address": "5310 Dundas Street W, Etobicoke, ON M9B 1B3",
        "phone": "(416) 239-2824",
        "description": "Taste of Thailand Cuisine serves deliciuos and authentic Thai food. We are located at 5310 Dundas Street W, Etobicoke, ON M9B 1B3 and you can contact us on (416) 239-2824"
    },
    {
        "restaurantType": "Turkish",
        "title": "Pasha Authentic Turkish Cuisine",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=WA7sC64kCRstywm2EgZXEw&campaign_id=mU5KIduB3V6_4iOLWHin3w&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpasha-authentic-turkish-cuisine-toronto&request_id=e4c33bee4fbfd54e&signature=9a76d10c8ab135078df87825911c707c21508cdae76de14d24981cdd6d98dc3b&slot=0",
        "latitude": 43.708364,
        "longitude": -79.342651,
        "address": "64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4",
        "phone": "(416) 421-3500",
        "description": "Pasha Authentic Turkish Cuisine serves deliciuos and authentic Turkish food. We are located at 64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4 and you can contact us on (416) 421-3500"
    },
    {
        "restaurantType": "Turkish",
        "title": "Pasha Authentic Turkish Cuisine",
        "imgSrc": "https://www.yelp.ca/biz/pasha-authentic-turkish-cuisine-toronto",
        "latitude": 43.708364,
        "longitude": -79.342651,
        "address": "64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4",
        "phone": "(416) 421-3500",
        "description": "Pasha Authentic Turkish Cuisine serves deliciuos and authentic Turkish food. We are located at 64 Overlea Boulevard, Unit 10, Toronto, ON M4H 1C4 and you can contact us on (416) 421-3500"
    },
    {
        "restaurantType": "Ukrainian",
        "title": "Baby Point Lounge",
        "imgSrc": "https://www.yelp.ca/biz/baby-point-lounge-toronto",
        "latitude": 43.657334,
        "longitude": -79.487371,
        "address": "343 Jane Street, Toronto, ON M6S 3Z3",
        "phone": "(416) 767-2623",
        "description": "Baby Point Lounge serves deliciuos and authentic Ukrainian food. We are located at 343 Jane Street, Toronto, ON M6S 3Z3 and you can contact us on (416) 767-2623"
    },
    {
        "restaurantType": "Ukrainian",
        "title": "Crepes Club",
        "imgSrc": "https://www.yelp.ca/biz/crepes-club-toronto",
        "latitude": 43.655843,
        "longitude": -79.393897,
        "address": "49 Baldwin Street, Toronto, ON M5T 1L3",
        "phone": "(647) 352-1990",
        "description": "Crepes Club serves deliciuos and authentic Ukrainian food. We are located at 49 Baldwin Street, Toronto, ON M5T 1L3 and you can contact us on (647) 352-1990"
    },
    {
        "restaurantType": "Vegan",
        "title": "The Hogtown Vegan",
        "imgSrc": "https://www.yelp.ca/biz/the-hogtown-vegan-toronto",
        "latitude": 43.660567,
        "longitude": -79.432573,
        "address": "1056 Bloor St. W, Toronto, ON M6H 1M3",
        "phone": "(416) 901-9779",
        "description": "The Hogtown Vegan serves deliciuos and authentic Vegan food. We are located at 1056 Bloor St. W, Toronto, ON M6H 1M3 and you can contact us on (416) 901-9779"
    },
    {
        "restaurantType": "Vegan",
        "title": "Veghed",
        "imgSrc": "https://www.yelp.ca/biz/veghed-toronto",
        "latitude": 43.649299,
        "longitude": -79.422447,
        "address": "1199 Dundas Street W, Toronto, ON M6J 1X3",
        "phone": "(416) 841-6673",
        "description": "Veghed serves deliciuos and authentic Vegan food. We are located at 1199 Dundas Street W, Toronto, ON M6J 1X3 and you can contact us on (416) 841-6673"
    },
    {
        "restaurantType": "Vegetarian",
        "title": "Vegetarian Haven",
        "imgSrc": "https://www.yelp.ca/biz/vegetarian-haven-toronto",
        "latitude": 43.655996,
        "longitude": -79.392815,
        "address": "17 Baldwin Street, Toronto, ON M5T 1L1",
        "phone": "(416) 621-3636",
        "description": "Vegetarian Haven serves deliciuos and authentic Vegetarian food. We are located at 17 Baldwin Street, Toronto, ON M5T 1L1 and you can contact us on (416) 621-3636"
    },
    {
        "restaurantType": "Vegetarian",
        "title": "Veghed",
        "imgSrc": "https://www.yelp.ca/biz/veghed-toronto",
        "latitude": 43.649299,
        "longitude": -79.422447,
        "address": "1199 Dundas Street W, Toronto, ON M6J 1X3",
        "phone": "(416) 841-6673",
        "description": "Veghed serves deliciuos and authentic Vegetarian food. We are located at 1199 Dundas Street W, Toronto, ON M6J 1X3 and you can contact us on (416) 841-6673"
    },
    {
        "restaurantType": "Venezuelan",
        "title": "La Bella Managua",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=-ltD-dHqdZ5-wjAMKYa6Ng&campaign_id=X6HorN4BpBd2llBTcEfY4Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fla-bella-managua-toronto&request_id=291115ced113dc1b&signature=0abf1da9b3f0a0c4c7ced8ce977efb0138f580b2e472119685b3f536beae9412&slot=0",
        "latitude": 43.662231,
        "longitude": -79.42499,
        "address": "872 Bloor Street W, Toronto, ON M6G 1M5",
        "phone": "(647) 846-8831",
        "description": "La Bella Managua serves deliciuos and authentic Venezuelan food. We are located at 872 Bloor Street W, Toronto, ON M6G 1M5 and you can contact us on (647) 846-8831"
    },
    {
        "restaurantType": "Venezuelan",
        "title": "Caribbean Queen Roti Hut",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=gQjSMZYAeJalH6nNfj6Gtw&campaign_id=9NmnLD04rm6kjHdg9BQ4PA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcaribbean-queen-roti-hut-toronto&request_id=291115ced113dc1b&signature=179a93158e5e590a797194220cc802d4cdf3a8bbbbd67b66f12ea47d9528e667&slot=1",
        "latitude": 43.600536,
        "longitude": -79.50586,
        "address": "2957 Lake Shore Boulevard W, Toronto, ON M8V 1J5",
        "phone": "(416) 503-3419",
        "description": "Caribbean Queen Roti Hut serves deliciuos and authentic Venezuelan food. We are located at 2957 Lake Shore Boulevard W, Toronto, ON M8V 1J5 and you can contact us on (416) 503-3419"
    },
    {
        "restaurantType": "Vietnamese",
        "title": "Kim Vietnamese Restaurant",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=7DiGCzG9-Om3trB5iJYcjw&campaign_id=WdOUvn7TdkSLv0Xodoo1JA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fkim-vietnamese-restaurant-toronto-3&request_id=1ba6e9f706aa5c46&signature=e78481b77ea597934fb7eb25f47cf4aa4defb56617df817d4cb9648cfa709243&slot=0",
        "latitude": 43.652774,
        "longitude": -79.3994,
        "address": "546 Dundas Street W, Toronto, ON M5T 1H3",
        "phone": "(647) 558-3135",
        "description": "Kim Vietnamese Restaurant serves deliciuos and authentic Vietnamese food. We are located at 546 Dundas Street W, Toronto, ON M5T 1H3 and you can contact us on (647) 558-3135"
    },
    {
        "restaurantType": "Vietnamese",
        "title": "Pho Friendly 18",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=2KjeezSnpqbWjwyx1vIvjw&campaign_id=ogQn5cobX7ZVMVah18SgRQ&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fpho-friendly-18-concord-6&request_id=1ba6e9f706aa5c46&signature=25634801c5c3a3652a52bfca0f69d780f1a8fc8db2dd0bb018b6601bd16e7cfb&slot=1",
        "latitude": 43.819132,
        "longitude": -79.531276,
        "address": "8750 Jane Street, Ste 5-6, Concord, ON L4K 2M9",
        "phone": "(905) 597-5582",
        "description": "Pho Friendly 18 serves deliciuos and authentic Vietnamese food. We are located at 8750 Jane Street, Ste 5-6, Concord, ON L4K 2M9 and you can contact us on (905) 597-5582"
    },
    {
        "restaurantType": "Waffles",
        "title": "Bread & Butter",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=U0md3UhNA2123G-vYR9hWQ&campaign_id=lRpaNevl2Y_qCMdX0bfhzA&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fbread-and-butter-toronto&request_id=7e514b44e617bbf8&signature=77c76bdc2f8cd607e1afc419985baef899d44ec32ccdbc56a2cdf95e6669db5a&slot=0",
        "latitude": 43.701638,
        "longitude": -79.38744,
        "address": "507 Mount Pleasant Rd, Toronto, ON M4S 2L9",
        "phone": "(647) 691-4910",
        "description": "Bread & Butter serves deliciuos and authentic Waffles food. We are located at 507 Mount Pleasant Rd, Toronto, ON M4S 2L9 and you can contact us on (647) 691-4910"
    },
    {
        "restaurantType": "Waffles",
        "title": "CSI Cafe",
        "imgSrc": "https://www.yelp.ca/adredir?ad_business_id=VscfON2YN6vbnEPNwr-dsg&campaign_id=2DO8Teh0AQYDRblvhAYe7Q&click_origin=search_results&placement=above_search&redirect_url=https%3A%2F%2Fwww.yelp.ca%2Fbiz%2Fcsi-cafe-toronto&request_id=7e514b44e617bbf8&signature=7d6f43733466feff41b2cf3dfa577a2e8364f99f5ed150cba7808a9bf7b7462d&slot=1",
        "latitude": 43.663189,
        "longitude": -79.410814,
        "address": "720 Bathurst Avenue, Toronto, ON M5S 2R4",
        "phone": "(416) 979-3939",
        "description": "CSI Cafe serves deliciuos and authentic Waffles food. We are located at 720 Bathurst Avenue, Toronto, ON M5S 2R4 and you can contact us on (416) 979-3939"
    }
]

module.exports = restaurants