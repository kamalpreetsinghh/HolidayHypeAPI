const places = [
    {
        "id": "1",
        "placeName": "Toronto",
        "Country": "Canada",
        "description": "Toronto, the capital of the province of Ontario, is a major Canadian city along Lake Ontario’s northwestern shore. It's a dynamic metropolis with a core of soaring skyscrapers, all dwarfed by the iconic, free-standing CN Tower.",
        "placeImage":"https://cdn.britannica.com/93/94493-050-35524FED/Toronto.jpg",
        "placesToVisitImages": [
            "https://www.planetware.com/photos-large/CDN/canada-toronto-cn-tower.jpg" , 
            "https://www.planetware.com/photos-large/CDN/canada-toronto-royal-ontario-museum.jpg",
            "https://www.planetware.com/wpimages/2018/11/canada-ontario-toronto-attractions-ripleys-aquarium-shark.jpg"]
        
    },
    {
        "id": "2",
        "placeName": "Vancouver",
        "Country": "Canada",
        "description": "Vancouver, a bustling west coast seaport in British Columbia, is among Canada’s densest, most ethnically diverse cities. A popular filming location, it’s surrounded by mountains, and also has thriving art, theatre and music scenes.",
        "placeImage":"https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Concord_Pacific_Master_Plan_Area.jpg/2560px-Concord_Pacific_Master_Plan_Area.jpg",
        "placesToVisitImages": [
            "https://www.planetware.com/photos-large/CDN/canada-vancouver-stanley-park.jpg" , 
            "https://www.planetware.com/photos-large/CDN/canada-vancouver-granville-island.jpg",
            "https://www.planetware.com/wpimages/2021/12/canada-british-columbia-vancouver-top-attractions-things-to-do-brockton-point-totem-poles.jpg"]
        
    },
    {
        "id": "3",
        "placeName": "Quebec",
        "Country": "Canada",
        "description": "Québec City sits on the Saint Lawrence River in Canada's mostly French-speaking Québec province. Dating to 1608, it has a fortified colonial core, Vieux-Québec and Place Royale, with stone buildings and narrow streets.",
        "placeImage":"https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2017/09/chateau_frontenac_02.jpg",
        "placesToVisitImages": [
            "https://www.planetware.com/photos-large/CDN/canada-quebec-city-place-royale.jpg" , 
            "https://www.planetware.com/wpimages/2018/12/canada-quebec-attractions-quebec-city-chateau-frontenac.jpg",
            "https://www.planetware.com/wpimages/2021/12/canada-quebec-top-attractions-musee-civilisation.jpg"]
        
    },
    {
        "id": "4",
        "placeName": "Montreal",
        "Country": "Canada",
        "description": "Montréal is the largest city in Canada's Québec province. It’s set on an island in the Saint Lawrence River and named after Mt. Royal, the triple-peaked hill at its heart. ",
        "placeImage":"https://media.timeout.com/images/105890847/1372/772/image.jpg",
        "placesToVisitImages": [
            "https://www.planetware.com/wpimages/2021/07/canada-montreal-attractions-things-to-do-old-montreal-rue-saint-paul-and-flags.jpg" , 
            "https://www.planetware.com/photos-large/CDN/canada-montreal-old-montreal.jpg",
            "https://www.planetware.com/wpimages/2021/07/canada-quebec-montreal-top-attractions-explore-the-old-port-vieux-port.jpg"]
        
    },
    {
        "id": "5",
        "placeName": "Ottawa",
        "Country": "Canada",
        "description": "Ottawa is Canada’s capital, in the east of southern Ontario, near the city of Montréal and the U.S. border. Sitting on the Ottawa River, it has at its centre Parliament Hill, with grand Victorian architecture and museums such as the National Gallery of Canada, with noted collections of indigenous and other Canadian art.",
        "placeImage":"https://workingholidayincanada.com/wp-content/uploads/2021/03/Ottawa-min.jpg",
        "placesToVisitImages": [
            "https://a.cdn-hotels.com/gdcs/production22/d285/a715b810-db82-11e8-8252-0242ac110006.jpg?impolicy=fcrop&w=1600&h=1066&q=medium" , 
            "https://a.cdn-hotels.com/gdcs/production63/d1646/818a3530-db82-11e8-8022-0242ac11000d.jpg?impolicy=fcrop&w=1600&h=1066&q=medium",
            "https://a.cdn-hotels.com/gdcs/production130/d16/ae8ffce0-c31d-11e8-825c-0242ac110006.jpg?impolicy=fcrop&w=1600&h=1066&q=medium"]
    
    },
    {
        "id": "6",
        "placeName": "Calgary",
        "Country": "Canada",
        "description": "Calgary, a cosmopolitan Alberta city with numerous skyscrapers, owes its rapid growth to its status as the centre of Canada’s oil industry. However, it’s still steeped in the western culture that earned it the nickname “Cowtown,” evident in the Calgary Stampede, its massive July rodeo and festival that grew out of the farming exhibitions once presented here.",
        "placeImage":"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRqg-YyG0fmZl83eGS7Acls-_b6w-7kq8hJXm_jme_MZXlf5T37xOQJTNEM7hnvOL7L",
        "placesToVisitImages": [
            "https://www.planetware.com/photos-large/CDN/canada-calgary-stampede.jpg" , 
            "https://www.planetware.com/wpimages/2019/09/canada-calgary-top-attractions-day-trips-banff.jpg",
            "https://www.planetware.com/photos-large/CDN/canada-calgary-zoo.jpg"]
        
    },
    {
        "id": "7",
        "placeName": "Edmonton",
        "Country": "Canada",
        "description": "Edmonton is the capital city of the Canadian province of Alberta. Edmonton is on the North Saskatchewan River and is the centre of the Edmonton Metropolitan Region, which is surrounded by Alberta's central region. ",
        "placeImage":"http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcRzNTOm8aHt_n9lMSsIpx6Oe56dtx-9WGC99VbTrV4NWJ8M0RJXvlWH-MCZqRfNOxxa",
        "placesToVisitImages": [
            "https://d28wuw2qq2j212.cloudfront.net/sites/default/files/styles/post_inline_image_desktop/public/posts/%5Bnid%5D/west-edmonton-mall.jpg?itok=oQGRxeiz&timestamp=1601587081" , 
            "https://d28wuw2qq2j212.cloudfront.net/sites/default/files/styles/post_inline_image_desktop/public/posts/%5Bnid%5D/elk-island-bison-edmonton-alberta.jpg?itok=l0TEp_eH&timestamp=1601587081",
            "https://d28wuw2qq2j212.cloudfront.net/sites/default/files/styles/post_inline_image_desktop/public/posts/%5Bnid%5D/alberta-legislature-grounds.jpg?itok=l6nujCqq&timestamp=1601587081"]
        
    },
    {
        "id": "8",
        "placeName": "Winnipeg",
        "Country": "Canada",
        "description": "Winnipeg is the capital of the Canadian province of Manitoba. Its heart is The Forks, a historic site at the intersection of the Red and Assiniboine rivers, with warehouses converted to shops and restaurants, plus ample green space dedicated to festivals, concerts and exhibits.",
        "placeImage":"http://t1.gstatic.com/images?q=tbn:ANd9GcQ6Yf3JIcqbP4IMNq6wn52n7QTWrUJ25L00CMaGjRfQhczED6Yc",
        "placesToVisitImages": [
            "https://www.planetware.com/wpimages/2018/10/manitoba-winnipeg-attractions-the-forks-entrance-main-building.jpg" , 
            "https://www.planetware.com/wpimages/2018/10/manitoba-winnipeg-attractions-canadian-human-rights-museum.jpg",
            "https://www.planetware.com/photos-large/CDN/canada-winnipeg-manitoba-museum.jpg"]
            
    },
    {
        "id": "9",
        "placeName": "Victoria",
        "Country": "Canada",
        "description": "Victoria, capital of British Columbia, sits on the craggy southern end of Vancouver Island. With abundant parkland, it’s known for outdoor activities. The city's British colonial past shows in its Victorian architecture, including stately Craigdarroch Castle mansion. ",
        "placeImage":"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcS4jOqkQMndNE2Ua1qnscBc_wai9ZPMAqUjem5-XBGWXTz8-SAXASKx1wGy6jE29FIh",
        "placesToVisitImages": [
            "https://www.planetware.com/wpimages/2020/04/canada-british-columbia-victoria-tourist-attractions-inner-habour-walkway.jpg" , 
            "https://www.planetware.com/photos-large/CDN/canada-victoria-royal-bc-museum.jpg",
            "https://www.planetware.com/photos-large/CDN/canada-victoria-butchart-gardens.jpg"]
        
    },
  
    {
        "id": "10",
        "placeName": "Saskatoon",
        "Country": "Canada",
        "description": "Saskatoon is a city straddling the South Saskatchewan River in Saskatchewan, Canada. North along the riverside Meewasin Trail is Wanuskewin Heritage Park, with exhibitions exploring indigenous culture. ",
        "placeImage":"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcQbNm8vao_BM6Lso_ay_4k1e_f5ciPzfqxvtgwDT-ujK7L1Zf4GSimTU1fHnwdhan-d",
        "placesToVisitImages": [
            "https://www.planetware.com/wpimages/2018/11/canada-saskatchewan-saskatoon-things-to-do-remai-modern-museum.jpg" , 
            "https://www.planetware.com/wpimages/2018/11/canada-saskatchewan-saskatoon-things-to-do-wanuskewin-tipi.jpg",
            "https://www.planetware.com/wpimages/2018/11/canada-saskatchewan-saskatoon-things-to-do-western-development-museum.jpg"]
        
    },

    {
        "id": "11",
        "placeName": "Saint John",
        "Country": "Canada",
        "description": "Saint John is a city on the Bay of Fundy, in New Brunswick, Canada. It’s known for the Reversing Rapids, a phenomenon caused by bay tides colliding with the Saint John River. Food and craft stalls fill the Saint John City Market, in an 1876 building. On a peninsula nearby, trails wind through Irving Nature Park’s salt marshes, volcanic rock and forests.",
        "placeImage":"http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcRoj_FPYpwNcMMcZqY592l8B95yrME1pyNrIONV6FVgD8vtKQ6SZlGBpE6BKnBXUEFo",
        "placesToVisitImages": [
            "https://www.planetware.com/wpimages/2019/05/canada-new-brunswick-saint-john-top-attractions-skywalk.jpg" , 
            "https://www.planetware.com/wpimages/2019/05/canada-new-brunswick-saint-john-top-attractions-prince-william-street-historic-saint-john.jpg",
            "https://www.planetware.com/wpimages/2019/05/canada-new-brunswick-saint-john-top-attractions-irving-nature-park.jpg"]
        
    },
    {
        "id": "12",
        "placeName": "Surrey",
        "Country": "Canada",
        "description": "Surrey is a city in British Columbia, Canada. It’s part of the Metro Vancouver area and lies between the Fraser River and the U.S. border. In Peace Arch Provincial Park, a white arch marks the international boundary between Canada and the U.S. On Boundary Bay, the Ocean Point Shoreline Walk curls along Crescent Beach.",
        "placeImage":"http://t0.gstatic.com/licensed-image?q=tbn:ANd9GcTqTzaZGNGcxAZKphJP_nvSwSBR8Y5a-mDEILzaOmmnEZslpc7LydF56lhevdwb6l-x",
        "placesToVisitImages": [
            "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Smallville.jpg" , 
            "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Crescent-Beach.jpg",
            "https://cdn.thecrazytourist.com/wp-content/uploads/2017/03/Northview-Golf-Country-Club--scaled.jpg"]
        
    },
    {
        "id": "13",
        "placeName": "Niagara Falls",
        "Country": "Canada",
        "description": "Niagara Falls, Ontario, is a Canadian city at the famous waterfalls of the same name, linked with the U.S. by the Rainbow Bridge. Its site on the Niagara River's western shore overlooks the Horseshoe Falls, the cascades' most expansive section. ",
        "placeImage":"http://t3.gstatic.com/licensed-image?q=tbn:ANd9GcRHZF57tla7Ln4vYaCVyWgPluShQv-L2STz2USWmDOzT1wj9p3jdD0SXF7P4J6bbgC0",
        "placesToVisitImages": [
            "https://www.planetware.com/photos-large/CDN/canada-niagara-falls-horseshoe-falls.jpg" , 
            "https://www.planetware.com/photos-large/CDN/canada-niagara-falls-journey-behind-the-falls-observation-deck.jpg",
            "https://www.planetware.com/photos-large/CDN/canada-niagara-falls-skylon-tower.jpg"]
        
    },
{
        "id": "14",
        "placeName": "Halifax",
        "Country": "Canada",
        "description": "SHalifax, an Atlantic Ocean port in eastern Canada, is the provincial capital of Nova Scotia. A major business centre, it’s also known for its maritime history. The city’s dominated by the hilltop Citadel, a star-shaped fort completed in the 1850s. Waterfront warehouses known as the Historic Properties recall Halifax’s days as a trading hub for privateers, notably during the War of 1812. ",
        "placeImage":"https://www.ctvnews.ca/polopoly_fs/1.2649208.1447081689!/httpImage/image.jpg_gen/derivatives/landscape_1020/image.jpg",
        "placesToVisitImages": [
            "https://www.planetware.com/wpimages/2021/03/canada-halifax-attractions-things-to-do-citadel-aerial-view.jpg" , 
            "https://www.planetware.com/photos-large/CDN/canada-halifax-harborfront.jpg",
            "https://www.planetware.com/photos-large/CDN/canada-halifax-pier-21.jpg"]
        
    },
    {
        "id": "15",
        "placeName": "Hamilton",
        "Country": "Canada",
        "description": "Hamilton is a Canadian port city on the western tip of Lake Ontario. The Niagara Escarpment, a huge, forested ridge known locally as the mountain and dotted with conservation areas and waterfalls, divides the city. ",
        "placeImage":"http://t1.gstatic.com/licensed-image?q=tbn:ANd9GcSeIsha58LBDNHhHjT_gIZwY3stOOro8FA9rY-EOQBHPSMHd98OQb-ekEiZH6s57YHq",
        "placesToVisitImages": [
        "https://www.planetware.com/wpimages/2020/12/canada-ontario-hamilton-top-things-to-do-hike-historic-bruce-trail.jpg" , 
        "https://www.planetware.com/wpimages/2020/12/canada-ontario-hamilton-top-things-to-do-view-royal-botanical-gardens.jpg",
        "https://www.planetware.com/wpimages/2020/12/canada-ontario-hamilton-top-things-to-do-visit-dundurn-castle.jpg"]
                    
    }

]

module.exports = places