// coordinates for map center
let mapCenter = [44, 0]
// how much to zoom in or zoom out
let zoomLevel = 0.5;

let bridgeMap = L.map('bridge-map').setView(mapCenter, zoomLevel)

// Add the tile layer - roads, streets etc. Without this, nothing to see
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copywrite">OpenStreetMap</a>',
}).addTo(bridgeMap); // add the tileLayer to the bridge map

// Bridge Data
// Bridge Name 	City, State 	Span (meters) 	coordinates (latitude, longitude)
// Verrazano-Narrows Bridge 	New York, NY 	1298.4 	40.6066, -74.0447
// Golden Gate Bridge 	San Francisco and Marin, CA 	1280.2 	37.8199, -122.4783
// Mackinac Bridge 	Mackinaw and St Ignace, MI 	1158.0 	45.8174, -84.7278
// George Washington Bridge 	New York, NY and New Jersey, NJ 	1067.0 	40.8517, -73.9527
// Tacoma Narrows Bridge 	Tacoma and Kitsap, WA 	853.44 	47.2690, -122.5517

/*[{
    name: 'Verrazano-Narrows Bridge',
    cityState: 'New York, NY',
    span: 1298.4,
    coordinates: [40.6066, -74.0447]
},
{
    name: 'Golden Gate Bridge',
    cityState: 'San Francisco and Marin, CA',
    span: 1280.2,
    coordinates: [37.8199, -122.4783]
},
{
    name: 'Mackinac Bridge',
    cityState: 'Mackinaw and St Ignace, MI',
    span: 1158.0,
    coordinates: [45.8174, -84.7278]
},
{
    name: 'George Washington Bridge',
    cityState: 'New York, NY and New Jersey, NJ',
    span: 1067.0,
    coordinates: [40.8517, -73.9527]
},
{
    name: 'Tacoma Narrows Bridge',
    cityState: 'Tacoma and Kitsap, WA',
    span: 853.44,
    coordinates: [47.2690, -122.5517]
}
]*/

let bridgeData = [
    {
        "name": "Akashi Kaiky\u014d Bridge",
        "span": 1991,
        "span_text": "1,991m",
        "city": "Kobe",
        "coordinates": [
            34.617028,
            135.021917
        ]
    },
    {
        "name": "Yangsigang Yangtze River Bridge",
        "span": 1700,
        "span_text": "1,700m",
        "city": "Wuhan",
        "coordinates": [
            30.50667,
            114.25667
        ]
    },
    {
        "name": "Nansha Bridge(East span)",
        "span": 1688,
        "span_text": "1,688m",
        "city": "Dongguan",
        "coordinates": [
            22.88475,
            113.565667
        ]
    },
    {
        "name": "Xihoumen Bridge",
        "span": 1650,
        "span_text": "1,650m",
        "city": "Zhoushan",
        "coordinates": [
            30.061778,
            121.916
        ]
    },
    {
        "name": "Great Belt Bridge",
        "span": 1624,
        "span_text": "1,624m",
        "city": "Kors\u00f8r",
        "coordinates": [
            55.34194,
            11.035917
        ]
    },
    {
        "name": "Osman Gazi Bridge",
        "span": 1550,
        "span_text": "1,550m",
        "city": "Dilovas\u0131",
        "coordinates": [
            40.75417,
            29.51528
        ]
    },
    {
        "name": "Yi Sun-sin Bridge",
        "span": 1545,
        "span_text": "1,545m",
        "city": "Gwangyang",
        "coordinates": [
            34.905944,
            127.705028
        ]
    },
    {
        "name": "Runyang Bridge",
        "span": 1490,
        "span_text": "1,490m",
        "city": "Yangzhou",
        "coordinates": [
            32.206833,
            119.363861
        ]
    },
    {
        "name": "Second Dongtinghu Bridge [zh]",
        "span": 1480,
        "span_text": "1,480m",
        "city": "Yueyang",
        "coordinates": [
            29.42472,
            113.12222
        ]
    },
    {
        "name": "Nanjing Fourth Yangtze Bridge",
        "span": 1418,
        "span_text": "1,418m",
        "city": "Nanjing",
        "coordinates": [
            32.17775,
            118.940139
        ]
    },
    {
        "name": "Humber Bridge",
        "span": 1410,
        "span_text": "1,410m",
        "city": "Hessle",
        "coordinates": [
            53.707972,
            -0.450083
        ]
    },
    {
        "name": "Yavuz Sultan Selim Bridge",
        "span": 1408,
        "span_text": "1,408m",
        "city": "\u0130stanbul",
        "coordinates": [
            41.20861,
            29.11806
        ]
    },
    {
        "name": "Jiangyin Bridge",
        "span": 1385,
        "span_text": "1,385m",
        "city": "Jiangyin",
        "coordinates": [
            31.945306,
            120.26944
        ]
    },
    {
        "name": "Tsing Ma Bridge",
        "span": 1377,
        "span_text": "1,377m",
        "city": "Tsing Yi",
        "coordinates": [
            22.351333,
            114.073778
        ]
    },
    {
        "name": "Hardanger Bridge",
        "span": 1310,
        "span_text": "1,310m",
        "city": "Ulvik",
        "coordinates": [
            60.478583,
            6.829778
        ]
    },
    {
        "name": "Verrazzano-Narrows Bridge",
        "span": 1298,
        "span_text": "1,298m",
        "city": "New York City",
        "coordinates": [
            40.60639,
            -74.045333
        ]
    },
    {
        "name": "Golden Gate Bridge",
        "span": 1280,
        "span_text": "1,280m",
        "city": "San Francisco",
        "coordinates": [
            37.819306,
            -122.478861
        ]
    },
    {
        "name": "Yangluo Bridge",
        "span": 1280,
        "span_text": "1,280m",
        "city": "Wuhan",
        "coordinates": [
            30.636917,
            114.554944
        ]
    },
    {
        "name": "H\u00f6ga Kusten Bridge",
        "span": 1210,
        "span_text": "1,210m",
        "city": "Utansj\u00f6",
        "coordinates": [
            62.79806,
            17.9375
        ]
    },
    {
        "name": "Nansha Bridge(West span)",
        "span": 1200,
        "span_text": "1,200m",
        "city": "Dongguan",
        "coordinates": [
            22.883278,
            113.518889
        ]
    },
    {
        "name": "Longjiang River Bridge",
        "span": 1196,
        "span_text": "1,196m",
        "city": "Wuhexiang",
        "coordinates": [
            24.838806,
            98.672194
        ]
    },
    {
        "name": "Aizhai Bridge",
        "span": 1176,
        "span_text": "1,176m",
        "city": "Jishou",
        "coordinates": [
            28.331694,
            109.598111
        ]
    },
    {
        "name": "Mackinac Bridge",
        "span": 1158,
        "span_text": "1,158m",
        "city": "Mackinaw City",
        "coordinates": [
            45.81556,
            -84.727944
        ]
    },
    {
        "name": "Ulsan Bridge [ko]",
        "span": 1150,
        "span_text": "1,150m",
        "city": "Ulsan",
        "coordinates": [
            35.51139,
            129.39111
        ]
    },
    {
        "name": "H\u00e5logaland Bridge",
        "span": 1145,
        "span_text": "1,145m",
        "city": "Rombaken",
        "coordinates": [
            68.45889,
            17.48222
        ]
    },
    {
        "name": "Qingshui River Bridge",
        "span": 1130,
        "span_text": "1,130m",
        "city": "Kaiyang County",
        "coordinates": [
            27.030417,
            107.189333
        ]
    },
    {
        "name": "Huangpu Bridge",
        "span": 1108,
        "span_text": "1,108m",
        "city": "Guangzhou",
        "coordinates": [
            23.071417,
            113.476083
        ]
    },
    {
        "name": "Minami Bisan-Seto Bridge",
        "span": 1100,
        "span_text": "1,100m",
        "city": "Sakaide",
        "coordinates": [
            34.36389,
            133.825194
        ]
    },
    {
        "name": "Xingkang Bridge\u5174\u5eb7\u5927\u6865",
        "span": 1100,
        "span_text": "1,100m",
        "city": "Luding County",
        "coordinates": [
            29.965389,
            102.214889
        ]
    },
    {
        "name": "Wufengshan Yangtze River Bridge\n\u4e94\u5cf0\u5c71\u957f\u6c5f\u5927\u6865",
        "span": 1092,
        "span_text": "1,092m",
        "city": "Zhenjiang",
        "coordinates": [
            32.2267389,
            119.6765
        ]
    },
    {
        "name": "Fatih Sultan Mehmet Bridge",
        "span": 1090,
        "span_text": "1,090m",
        "city": "\u0130stanbul",
        "coordinates": [
            41.09111,
            29.06111
        ]
    },
    {
        "name": "Baling River Bridge",
        "span": 1088,
        "span_text": "1,088m",
        "city": "Guanling Buyei and Miao Autonomous County",
        "coordinates": [
            25.96111,
            105.62944
        ]
    },
    {
        "name": "Taizhou Bridge",
        "span": 1080,
        "span_text": "1,080m",
        "city": "Taizhou",
        "coordinates": [
            32.246611,
            119.876694
        ]
    },
    {
        "name": "Ma'anshan Bridge",
        "span": 1080,
        "span_text": "1,080m",
        "city": "Ma'anshan",
        "coordinates": [
            31.610111,
            118.392056
        ]
    },
    {
        "name": "Bosphorus Bridge",
        "span": 1074,
        "span_text": "1,074m",
        "city": "\u0130stanbul",
        "coordinates": [
            41.045,
            29.03389
        ]
    },
    {
        "name": "George Washington Bridge",
        "span": 1067,
        "span_text": "1,067m",
        "city": "New York City",
        "coordinates": [
            40.851722,
            -73.952722
        ]
    },
    {
        "name": "Fuma Yangtze River Bridge\u9a78\u9a6c\u957f\u6c5f\u5927\u6865",
        "span": 1050,
        "span_text": "1,050m",
        "city": "Wanzhou",
        "coordinates": [
            30.834667,
            108.469278
        ]
    },
    {
        "name": "Qipanzhou Yangtse River Bridge\u68cb\u76d8\u6d32\u957f\u6c5f\u5927\u6865",
        "span": 1038,
        "span_text": "1,038m",
        "city": "Huangshi",
        "coordinates": [
            30.1525778,
            115.2672972
        ]
    },
    {
        "name": "Third Kurushima-Kaiky\u014d Bridge",
        "span": 1030,
        "span_text": "1,030m",
        "city": "Imabari",
        "coordinates": [
            34.11525,
            132.984333
        ]
    },
    {
        "name": "Second Kurushima-Kaiky\u014d Bridge",
        "span": 1020,
        "span_text": "1,020m",
        "city": "Umashima Island",
        "coordinates": [
            34.12111,
            133.000194
        ]
    },
    {
        "name": "25 de Abril Bridge",
        "span": 1013,
        "span_text": "1,013m",
        "city": "Lisbon",
        "coordinates": [
            38.689861,
            -9.177167
        ]
    },
    {
        "name": "Forth Road Bridge",
        "span": 1006,
        "span_text": "1,006m",
        "city": "South Queensferry",
        "coordinates": [
            56.0015,
            -3.404194
        ]
    },
    {
        "name": "Yidu Yangtse River Bridge [zh]\u5b9c\u90fd\u957f\u6c5f\u516c\u8def\u5927\u6865",
        "span": 1000,
        "span_text": "1,000m",
        "city": "Yidu",
        "coordinates": [
            30.40917,
            111.51667
        ]
    },
    {
        "name": "Kita Bisan-Seto Bridge",
        "span": 990,
        "span_text": "990m",
        "city": "Sakaide",
        "coordinates": [
            34.378444,
            133.820333
        ]
    },
    {
        "name": "Severn Bridge",
        "span": 988,
        "span_text": "988m",
        "city": "Bristol",
        "coordinates": [
            51.610056,
            -2.640667
        ]
    },
    {
        "name": "Yichang Bridge",
        "span": 960,
        "span_text": "960m",
        "city": "Yichang",
        "coordinates": [
            30.569583,
            111.391528
        ]
    },
    {
        "name": "Shimotsui-Seto Bridge",
        "span": 940,
        "span_text": "940m",
        "city": "Kojima",
        "coordinates": [
            34.431222,
            133.806444
        ]
    },
    {
        "name": "Xiushan Bridge",
        "span": 926,
        "span_text": "926m",
        "city": "Daishan",
        "coordinates": [
            30.21111,
            122.185361
        ]
    },
    {
        "name": "Xiling Bridge",
        "span": 900,
        "span_text": "900m",
        "city": "Sandouping",
        "coordinates": [
            30.828472,
            111.04667
        ]
    },
    {
        "name": "Si Du River Bridge",
        "span": 900,
        "span_text": "900m",
        "city": "Yesanguan",
        "coordinates": [
            30.621139,
            110.395306
        ]
    },
    {
        "name": "Second Namhae Bridge\uc81c2\ub0a8\ud574\ub300\uad50",
        "span": 890,
        "span_text": "890m",
        "city": "Namhaedo",
        "coordinates": [
            34.942889,
            127.866278
        ]
    },
    {
        "name": "Humen Pearl River Bridge",
        "span": 888,
        "span_text": "888m",
        "city": "Dongguan",
        "coordinates": [
            22.797083,
            113.615889
        ]
    },
    {
        "name": "Cuntan Yangtze River Bridge [zh]\u5bf8\u6ee9\u957f\u6c5f\u5927\u6865",
        "span": 880,
        "span_text": "880m",
        "city": "Chongqing",
        "coordinates": [
            29.620611,
            106.606056
        ]
    },
    {
        "name": "\u014cnaruto Bridge",
        "span": 876,
        "span_text": "876m",
        "city": "Naruto",
        "coordinates": [
            34.23875,
            134.650306
        ]
    },
    {
        "name": "Lishui River Bridge",
        "span": 856,
        "span_text": "856m",
        "city": "Zhangjiajie",
        "coordinates": [
            29.09861,
            110.24667
        ]
    },
    {
        "name": "Second Tacoma Narrows Bridge(westbound)",
        "span": 853,
        "span_text": "853m",
        "city": "Tacoma",
        "coordinates": [
            47.268222,
            -122.550194
        ]
    },
    {
        "name": "Third Tacoma Narrows Bridge(eastbound)",
        "span": 853,
        "span_text": "853m",
        "city": "Tacoma",
        "coordinates": [
            47.267889,
            -122.550778
        ]
    },
    {
        "name": "Ask\u00f8y Bridge",
        "span": 850,
        "span_text": "850m",
        "city": "Bergen",
        "coordinates": [
            60.395444,
            5.215222
        ]
    },
    {
        "name": "Yingwuzhou Bridge",
        "span": 850,
        "span_text": "850m",
        "city": "Wuhan",
        "coordinates": [
            30.534056,
            114.276889
        ]
    },
    {
        "name": "Jeokgeum Bridge [ko]",
        "span": 850,
        "span_text": "850m",
        "city": "Ucheon",
        "coordinates": [
            34.63139,
            127.50278
        ]
    },
    {
        "name": "Zhixi Yangtze River Bridge [zh] \u81f3\u559c\u957f\u6c5f\u5927\u6865\uff08\u5e99\u5634\u957f\u6c5f\u5927\u6865\uff09",
        "span": 838,
        "span_text": "838m",
        "city": "Yichang",
        "coordinates": [
            30.715611,
            111.262556
        ]
    },
    {
        "name": "Nanxi Bridge",
        "span": 820,
        "span_text": "820m",
        "city": "Nanxi District",
        "coordinates": [
            28.783694,
            104.945694
        ]
    },
    {
        "name": "Taihong Yangtze River Bridge [zh]\u592a\u6d2a\u957f\u6c5f\u5927\u6865",
        "span": 808,
        "span_text": "808m",
        "city": "Chongqing",
        "coordinates": [
            29.6632889,
            106.89333
        ]
    },
    {
        "name": "Qincaobei Bridge",
        "span": 788,
        "span_text": "788m",
        "city": "Lidu",
        "coordinates": [
            29.714306,
            107.281306
        ]
    },
    {
        "name": "Innoshima Bridge",
        "span": 770,
        "span_text": "770m",
        "city": "Innoshima",
        "coordinates": [
            34.357139,
            133.180417
        ]
    },
    {
        "name": "Jinshajiang Hutiaoxia Bridge\n\u91d1\u6c99\u6c5f\u5927\u6865\uff08\u9999\u4e3d\u9ad8\u901f\uff09",
        "span": 766,
        "span_text": "766m",
        "city": "Hutiaoxiazhen",
        "coordinates": [
            27.17417,
            100.08389
        ]
    },
    {
        "name": "Akinada Bridge",
        "span": 750,
        "span_text": "750m",
        "city": "Kure",
        "coordinates": [
            34.206222,
            132.679389
        ]
    },
    {
        "name": "Semey Bridge",
        "span": 750,
        "span_text": "750m",
        "city": "Semey",
        "coordinates": [
            50.40972,
            80.22444
        ]
    },
    {
        "name": "Yuecheng Xijiang Bridge\u60a6\u57ce\u897f\u6c5f\u5927\u6865",
        "span": 738,
        "span_text": "738m",
        "city": "Yunfu",
        "coordinates": [
            23.09361,
            112.21056
        ]
    },
    {
        "name": "Jinshajiang Jindong Bridge\u91d1\u4e1c\u5927\u6865",
        "span": 730,
        "span_text": "730m",
        "city": "Huidong County",
        "coordinates": [
            26.50925,
            103.040194
        ]
    },
    {
        "name": "New Carquinez Bridge",
        "span": 728,
        "span_text": "728m",
        "city": "Vallejo",
        "coordinates": [
            38.061028,
            -122.226528
        ]
    },
    {
        "name": "Hakuch\u014d Bridge",
        "span": 720,
        "span_text": "720m",
        "city": "Muroran",
        "coordinates": [
            42.352889,
            140.950333
        ]
    },
    {
        "name": "Angostura Bridge",
        "span": 712,
        "span_text": "712m",
        "city": "Ciudad Bol\u00edvar",
        "coordinates": [
            8.144417,
            -63.598111
        ]
    },
    {
        "name": "Kanmon Bridge",
        "span": 712,
        "span_text": "712m",
        "city": "Kitakyushu",
        "coordinates": [
            33.961722,
            130.958694
        ]
    },
    {
        "name": "San Francisco\u2013Oakland Bay Bridge(east half of west span)",
        "span": 704,
        "span_text": "704m",
        "city": "San Francisco",
        "coordinates": [
            37.803389,
            -122.371917
        ]
    },
    {
        "name": "San Francisco\u2013Oakland Bay Bridge(west half of west span)",
        "span": 704,
        "span_text": "704m",
        "city": "San Francisco",
        "coordinates": [
            37.793167,
            -122.38306
        ]
    },
    {
        "name": "Bronx\u2013Whitestone Bridge",
        "span": 701,
        "span_text": "701m",
        "city": "New York City",
        "coordinates": [
            40.801861,
            -73.829778
        ]
    },
    {
        "name": "Maputo\u2013Katembe bridge",
        "span": 680,
        "span_text": "680m",
        "city": "Maputo",
        "coordinates": [
            -25.973167,
            32.557417
        ]
    },
    {
        "name": "Stord Bridge",
        "span": 677,
        "span_text": "677m",
        "city": "Stord",
        "coordinates": [
            59.74806,
            5.402944
        ]
    },
    {
        "name": "Pierre Laporte Bridge",
        "span": 668,
        "span_text": "668m",
        "city": "Quebec City",
        "coordinates": [
            46.745222,
            -71.290472
        ]
    },
    {
        "name": "Sunxihe Bridge\u7b0b\u6eaa\u6cb3\u5927\u6865",
        "span": 660,
        "span_text": "660m",
        "city": "Bailinzhen",
        "coordinates": [
            28.712417,
            106.462333
        ]
    },
    {
        "name": "Delaware Memorial Bridge(northbound)",
        "span": 656,
        "span_text": "656m",
        "city": "New Castle",
        "coordinates": [
            39.688972,
            -75.51806
        ]
    },
    {
        "name": "Delaware Memorial Bridge(southbound)",
        "span": 656,
        "span_text": "656m",
        "city": "New Castle",
        "coordinates": [
            39.688389,
            -75.518389
        ]
    },
    {
        "name": "Jinshajiang Hulukou Bridge",
        "span": 656,
        "span_text": "656m",
        "city": "Hulukouzhen",
        "coordinates": [
            26.971222,
            102.891722
        ]
    },
    {
        "name": "Second Saecheonnyeon Bridge [ko]\ucc9c\uc0ac\ub300\uad50",
        "span": 650,
        "span_text": "650m",
        "city": "Mokpo",
        "coordinates": [
            34.860361,
            126.2055
        ]
    },
    {
        "name": "Haicang Bridge",
        "span": 648,
        "span_text": "648m",
        "city": "Xiamen",
        "coordinates": [
            24.497278,
            118.068667
        ]
    },
    {
        "name": "Beipan River Hukun Expressway Bridge",
        "span": 636,
        "span_text": "636m",
        "city": "Qinglong County",
        "coordinates": [
            25.899472,
            105.32361
        ]
    },
    {
        "name": "Taoyuan Jinsha River Bridge\u5927\u6c38\u9ad8\u901f\u6d9b\u6e90\u91d1\u6c99\u6c5f\u5927\u6865",
        "span": 636,
        "span_text": "636m",
        "city": "Yongsheng County",
        "coordinates": [
            26.18389,
            100.59083
        ]
    },
    {
        "name": "Puli Bridge",
        "span": 628,
        "span_text": "628m",
        "city": "Pulixiang",
        "coordinates": [
            26.322389,
            104.58778
        ]
    },
    {
        "name": "Gjemnessund Bridge",
        "span": 623,
        "span_text": "623m",
        "city": "Gjemnes",
        "coordinates": [
            62.97139,
            7.77972
        ]
    },
    {
        "name": "Yuzui Yangtze Bridge",
        "span": 616,
        "span_text": "616m",
        "city": "Yuzuizhen",
        "coordinates": [
            29.611306,
            106.772556
        ]
    },
    {
        "name": "Walt Whitman Bridge",
        "span": 610,
        "span_text": "610m",
        "city": "Philadelphia",
        "coordinates": [
            39.905194,
            -75.129472
        ]
    },
    {
        "name": "Tancarville Bridge",
        "span": 608,
        "span_text": "608m",
        "city": "Tancarville",
        "coordinates": [
            49.472667,
            0.464667
        ]
    },
    {
        "name": "New Little Belt Bridge",
        "span": 600,
        "span_text": "600m",
        "city": "Middelfart",
        "coordinates": [
            55.518639,
            9.749139
        ]
    },
    {
        "name": "First Kurushima-Kaiky\u014d Bridge",
        "span": 600,
        "span_text": "600m",
        "city": "Umashima Island",
        "coordinates": [
            34.125806,
            133.012528
        ]
    },
    {
        "name": "E'gongyan Rail Transit Bridge",
        "span": 600,
        "span_text": "600m",
        "city": "Chongqing",
        "coordinates": [
            29.522194,
            106.528222
        ]
    },
    {
        "name": "E'gongyan Bridge",
        "span": 600,
        "span_text": "600m",
        "city": "Chongqing",
        "coordinates": [
            29.523306,
            106.52825
        ]
    }
]


let bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize: [40, 40], // adjust according to your icon size
    iconAnchor: [20, 20], // adjust according to your icon size
    popupAnchor: [0, -20] // adjust according to your icon size and popup position
})

// Place a marker at each bridge coordinates.
bridgeData.forEach(function(bridge) {
    let bridgeCoordinates = bridge.coordinates;
    let bridgeMarker; //= L.marker(bridgeCoordinates).addTo(bridgeMap);

    if (bridge.span === Math.max(...bridgeData.map(bridge => bridge.span))) {
        // If the bridge is the longest, use a different icon
        bridgeMarker = L.marker(bridgeCoordinates, { icon: bridgeIcon }).addTo(bridgeMap)
    } else {
        // Otherwise, use the default marker
        bridgeMarker = L.marker(bridgeCoordinates).addTo(bridgeMap)
    }


    // Each marker should have a popup with the bridge's name and span length. Use HTML to format this information neatly.
    bridgeMarker.bindPopup(`<b>${bridge.name}</b><br>City, State: ${bridge.cityState}<br>Span: ${bridge.span} meters`)
})



// Use the dataset below to draw a Chart.js bar chart of the bridge names and their span lengths
// Bridge Name 	City, State 	Span (meters) 	coordinates (latitude, longitude)
// Verrazano-Narrows Bridge 	New York, NY 	1298.4 	40.6066, -74.0447
// Golden Gate Bridge 	San Francisco and Marin, CA 	1280.2 	37.8199, -122.4783
// Mackinac Bridge 	Mackinaw and St Ignace, MI 	1158.0 	45.8174, -84.7278
// George Washington Bridge 	New York, NY and New Jersey, NJ 	1067.0 	40.8517, -73.9527
// Tacoma Narrows Bridge 	Tacoma and Kitsap, WA 	853.44 	47.2690, -122.5517

// Use the array you created in part 2 to avoid typing the data into your program again.  Don't manually write the data into Chart.js arrays. 
// You can use ChartJS's default colors, or set all the colors to the same value, or cycle through a set of colors for the bar colors.


// Extracting bridge names and spans
let bridgeNames = bridgeData.map(bridge => bridge.name)
let bridgeSpans = bridgeData.map(bridge => bridge.span)

// Create a canvas element
let canvas = document.createElement('canvas')
canvas.id = 'bridge-chart'
document.body.appendChild(canvas)

// Drawing Chart.js bar chart
let ctx = document.getElementById('bridge-chart').getContext('2d')
let bridgeChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: bridgeNames,
        datasets: [{
            label: 'Span (meters)',
            data: bridgeSpans,
            backgroundColor: 'rgba(54, 162, 235, 0.5)', // Default color for all bars
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
})