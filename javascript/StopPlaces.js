// This dataset should contain all trian stations in Autria
// It is a stripped down version of the dataset that ÖBB provides (state 12-2024)
// https://data.oebb.at/de/datensaetze~netex-geodaten~

const StopPlaces = [
  {
    id: 1,
    Value: "8101020",
    Name: "Kapellerfeld",
  },
  {
    id: 2,
    Value: "8100320",
    Name: "Taufkirchen a.d.Pram",
  },
  {
    id: 3,
    Value: "8100025",
    Name: "Baden",
  },
  {
    id: 4,
    Value: "8100918",
    Name: "Wien Hirschstetten",
  },
  {
    id: 5,
    Value: "8101640",
    Name: "Traiskirchen Aspangbahn",
  },
  {
    id: 6,
    Value: "8101447",
    Name: "Rothenthurn",
  },
  {
    id: 7,
    Value: "8101106",
    Name: "Kleinzell",
  },
  {
    id: 8,
    Value: "8100027",
    Name: "Payerbach-Reichenau",
  },
  {
    id: 9,
    Value: "8101185",
    Name: "Lungitz",
  },
  {
    id: 10,
    Value: "8100710",
    Name: "Breitenwaida",
  },
  {
    id: 11,
    Value: "8100554",
    Name: "Leithen",
  },
  {
    id: 12,
    Value: "8101399",
    Name: "Peterskirchen",
  },
  {
    id: 13,
    Value: "8100796",
    Name: "Wien Siemensstraße",
  },
  {
    id: 14,
    Value: "8101623",
    Name: "St.Veit a.d.Triesting",
  },
  {
    id: 15,
    Value: "8101394",
    Name: "Piesting",
  },
  {
    id: 16,
    Value: "8101120",
    Name: "Lauffen",
  },
  {
    id: 17,
    Value: "8100293",
    Name: "Korneuburg",
  },
  {
    id: 18,
    Value: "8100677",
    Name: "Bad Radkersburg",
  },
  {
    id: 19,
    Value: "8100144",
    Name: "Oberdrauburg",
  },
  {
    id: 20,
    Value: "8100657",
    Name: "Berg im Drautal",
  },
  {
    id: 21,
    Value: "8101433",
    Name: "Wien Rennweg",
  },
  {
    id: 22,
    Value: "8100948",
    Name: "Hart im Innkreis",
  },
  {
    id: 23,
    Value: "8101165",
    Name: "Leonding",
  },
  {
    id: 24,
    Value: "8100906",
    Name: "Groß Weikersdorf",
  },
  {
    id: 25,
    Value: "8100225",
    Name: "Ebenfurth",
  },
  {
    id: 26,
    Value: "8100601",
    Name: "Flughafen Graz Feldkirchen",
  },
  {
    id: 27,
    Value: "8100705",
    Name: "Brunn a.d.Pitten",
  },
  {
    id: 28,
    Value: "8102062",
    Name: "Straßwalchen West",
  },
  {
    id: 29,
    Value: "8105979",
    Name: "Villach Landskron",
  },
  {
    id: 30,
    Value: "8100420",
    Name: "Scharnstein-Mühldorf",
  },
  {
    id: 31,
    Value: "8100576",
    Name: "Marktl",
  },
  {
    id: 32,
    Value: "8102052",
    Name: "Salzburg Mülln-Altstadt",
  },
  {
    id: 33,
    Value: "8100365",
    Name: "Braunau am Inn",
  },
  {
    id: 34,
    Value: "8100842",
    Name: "Gisingen",
  },
  {
    id: 35,
    Value: "8100187",
    Name: "Tauchen-Schaueregg",
  },
  {
    id: 36,
    Value: "8100332",
    Name: "Gattendorf",
  },
  {
    id: 37,
    Value: "8100169",
    Name: "Kremsmünster",
  },
  {
    id: 38,
    Value: "8101155",
    Name: "Spielberg (Bedarfshalt)",
  },
  {
    id: 39,
    Value: "8100847",
    Name: "Grünbach Kohlenwerk",
  },
  {
    id: 40,
    Value: "",
    Name: "",
  },
  {
    id: 41,
    Value: "8100582",
    Name: "Pürgg",
  },
  {
    id: 42,
    Value: "8100053",
    Name: "Fieberbrunn",
  },
  {
    id: 43,
    Value: "8101457",
    Name: "Rietz",
  },
  {
    id: 44,
    Value: "8100122",
    Name: "Dornbirn",
  },
  {
    id: 45,
    Value: "8101288",
    Name: "Neuratting",
  },
  {
    id: 46,
    Value: "8100863",
    Name: "Goisern Jodschwefelbad",
  },
  {
    id: 47,
    Value: "8101197",
    Name: "Maria Anzbach",
  },
  {
    id: 48,
    Value: "8100851",
    Name: "Gleißenfeld",
  },
  {
    id: 49,
    Value: "8101312",
    Name: "Ollersbach",
  },
  {
    id: 50,
    Value: "8100713",
    Name: "Böhlerwerk a.d.Ybbs",
  },
  {
    id: 51,
    Value: "8101535",
    Name: "Schleinbach",
  },
  {
    id: 52,
    Value: "8100914",
    Name: "Hagenau im Innkreis",
  },
  {
    id: 53,
    Value: "8100182",
    Name: "Grafendorf",
  },
  {
    id: 54,
    Value: "8100091",
    Name: "Kolbnitz",
  },
  {
    id: 55,
    Value: "8101641",
    Name: "Wien Traisengasse",
  },
  {
    id: 56,
    Value: "8100634",
    Name: "Wien Atzgersdorf",
  },
  {
    id: 57,
    Value: "8101011",
    Name: "Judendorf-Straßengel",
  },
  {
    id: 58,
    Value: "8100440",
    Name: "St.Stefan im Lavanttal",
  },
  {
    id: 59,
    Value: "8101003",
    Name: "Wien Blumental",
  },
  {
    id: 60,
    Value: "8101754",
    Name: "Wels Lokalbahn",
  },
  {
    id: 61,
    Value: "8100481",
    Name: "Bad Sauerbrunn",
  },
  {
    id: 62,
    Value: "8100928",
    Name: "Helmahof",
  },
  {
    id: 63,
    Value: "8101083",
    Name: "Krummnußbaum",
  },
  {
    id: 64,
    Value: "8100921",
    Name: "Hatlerdorf",
  },
  {
    id: 65,
    Value: "8101369",
    Name: "Pernitz-Muggendorf",
  },
  {
    id: 66,
    Value: "8100499",
    Name: "Nickelsdorf",
  },
  {
    id: 67,
    Value: "8100425",
    Name: "Wörschach Schwefelbad",
  },
  {
    id: 68,
    Value: "8101150",
    Name: "Wien Liesing",
  },
  {
    id: 69,
    Value: "8100181",
    Name: "St.Johann i.d.Haide",
  },
  {
    id: 70,
    Value: "8100434",
    Name: "Neusiedl am See",
  },
  {
    id: 71,
    Value: "8101638",
    Name: "Steyrling",
  },
  {
    id: 72,
    Value: "8101100",
    Name: "Klaus in Vorarlberg",
  },
  {
    id: 73,
    Value: "8100114",
    Name: "Bichlbach-Berwang",
  },
  {
    id: 74,
    Value: "8100119",
    Name: "Rankweil",
  },
  {
    id: 75,
    Value: "8100516",
    Name: "Wiener Neustadt Hbf",
  },
  {
    id: 76,
    Value: "8102063",
    Name: "Salzburg Liefering",
  },
  {
    id: 77,
    Value: "8101660",
    Name: "Tenneck",
  },
  {
    id: 78,
    Value: "8100177",
    Name: "Fürstenfeld",
  },
  {
    id: 79,
    Value: "8100067",
    Name: "Bludenz",
  },
  {
    id: 80,
    Value: "8100974",
    Name: "Hörsching",
  },
  {
    id: 81,
    Value: "8100199",
    Name: "Schwarzenau",
  },
  {
    id: 82,
    Value: "8103174",
    Name: "Feldkirchen-Seiersberg",
  },
  {
    id: 83,
    Value: "8100784",
    Name: "Feuerwerksanstalt",
  },
  {
    id: 84,
    Value: "8100534",
    Name: "Stockerau",
  },
  {
    id: 85,
    Value: "8101044",
    Name: "Kitzbühel Hahnenkamm",
  },
  {
    id: 86,
    Value: "8101500",
    Name: "Stiefern",
  },
  {
    id: 87,
    Value: "8100210",
    Name: "Allentsteig",
  },
  {
    id: 88,
    Value: "8101038",
    Name: "Kematen in Tirol",
  },
  {
    id: 89,
    Value: "8100170",
    Name: "Kirchdorf a.d.Krems",
  },
  {
    id: 90,
    Value: "8100876",
    Name: "Großraming",
  },
  {
    id: 91,
    Value: "8101448",
    Name: "Roppen",
  },
  {
    id: 92,
    Value: "8100506",
    Name: "St.Urban am Ossiachersee",
  },
  {
    id: 93,
    Value: "8100087",
    Name: "Mühldorf-Möllbrücke",
  },
  {
    id: 94,
    Value: "8101793",
    Name: "Wolkersdorf",
  },
  {
    id: 95,
    Value: "8100002",
    Name: "Salzburg Hbf",
  },
  {
    id: 96,
    Value: "8101387",
    Name: "Prinzersdorf",
  },
  {
    id: 97,
    Value: "8101716",
    Name: "Viechtwang",
  },
  {
    id: 98,
    Value: "8101135",
    Name: "Lenzing Ort",
  },
  {
    id: 99,
    Value: "8101975",
    Name: "Pernitz Raimundviertel",
  },
  {
    id: 100,
    Value: "8101478",
    Name: "Siebenmühlen-Rosenau",
  },
  {
    id: 101,
    Value: "8100226",
    Name: "Ebreichsdorf",
  },
  {
    id: 102,
    Value: "8100360",
    Name: "Wolfsthal",
  },
  {
    id: 103,
    Value: "8100630",
    Name: "Altach",
  },
  {
    id: 104,
    Value: "8100231",
    Name: "Eisenstadt",
  },
  {
    id: 105,
    Value: "8101785",
    Name: "Wendling",
  },
  {
    id: 106,
    Value: "8100432",
    Name: "St.Andrä-Wördern",
  },
  {
    id: 107,
    Value: "8101223",
    Name: "Lambach Markt",
  },
  {
    id: 108,
    Value: "8105982",
    Name: "Heinfels",
  },
  {
    id: 109,
    Value: "8101453",
    Name: "Rohrendorf",
  },
  {
    id: 110,
    Value: "8100245",
    Name: "Gänserndorf",
  },
  {
    id: 111,
    Value: "8100041",
    Name: "Golling-Abtenau",
  },
  {
    id: 112,
    Value: "8101697",
    Name: "Ulrichskirchen",
  },
  {
    id: 113,
    Value: "8101415",
    Name: "Raasdorf",
  },
  {
    id: 114,
    Value: "8101239",
    Name: "Maria Saal",
  },
  {
    id: 115,
    Value: "8101837",
    Name: "Grünbach Schule",
  },
  {
    id: 116,
    Value: "8100096",
    Name: "Treibach-Althofen",
  },
  {
    id: 117,
    Value: "8100487",
    Name: "Schönberg am Kamp",
  },
  {
    id: 118,
    Value: "8100473",
    Name: "Riedenburg",
  },
  {
    id: 119,
    Value: "8100126",
    Name: "Kalwang",
  },
  {
    id: 120,
    Value: "8100277",
    Name: "Horn",
  },
  {
    id: 121,
    Value: "8101393",
    Name: "Passering",
  },
  {
    id: 122,
    Value: "8101164",
    Name: "Lödersdorf",
  },
  {
    id: 123,
    Value: "8100976",
    Name: "Haslach",
  },
  {
    id: 124,
    Value: "8100398",
    Name: "Loipersbach-Schattendorf",
  },
  {
    id: 125,
    Value: "8100215",
    Name: "Antiesenhofen",
  },
  {
    id: 126,
    Value: "8101636",
    Name: "Schwarza",
  },
  {
    id: 127,
    Value: "8101634",
    Name: "Schwarzach in Vorarlberg",
  },
  {
    id: 128,
    Value: "8100439",
    Name: "Obereggendorf",
  },
  {
    id: 129,
    Value: "8100010",
    Name: "Steyr",
  },
  {
    id: 130,
    Value: "8100219",
    Name: "Donnerskirchen",
  },
  {
    id: 131,
    Value: "8100165",
    Name: "Bad Mitterndorf",
  },
  {
    id: 132,
    Value: "8101338",
    Name: "Paudorf",
  },
  {
    id: 133,
    Value: "8100019",
    Name: "Straßwalchen",
  },
  {
    id: 134,
    Value: "8101676",
    Name: "Töschling",
  },
  {
    id: 135,
    Value: "8100552",
    Name: "Lermoos",
  },
  {
    id: 136,
    Value: "8101792",
    Name: "Oberndorf in Tirol",
  },
  {
    id: 137,
    Value: "8101579",
    Name: "St.Pantaleon",
  },
  {
    id: 138,
    Value: "8101990",
    Name: "St.Pölten Traisenpark",
  },
  {
    id: 139,
    Value: "8101598",
    Name: "St.Stefan-Vorderberg",
  },
  {
    id: 140,
    Value: "8100945",
    Name: "Hohenbrugg a.d.Raab",
  },
  {
    id: 141,
    Value: "8100355",
    Name: "Wieselburg a.d.Erlauf",
  },
  {
    id: 142,
    Value: "8101635",
    Name: "Stadt Waidhofen a.d.Ybbs",
  },
  {
    id: 143,
    Value: "8100549",
    Name: "Gießenbach",
  },
  {
    id: 144,
    Value: "8101110",
    Name: "Lacken",
  },
  {
    id: 145,
    Value: "8100013",
    Name: "Linz Hbf",
  },
  {
    id: 146,
    Value: "8102051",
    Name: "Hengsberg",
  },
  {
    id: 147,
    Value: "8100123",
    Name: "Lustenau",
  },
  {
    id: 148,
    Value: "8102045",
    Name: "Salzburg Taxham Europark",
  },
  {
    id: 149,
    Value: "8100288",
    Name: "Kirchberg am Wagram",
  },
  {
    id: 150,
    Value: "8100409",
    Name: "Mattighofen",
  },
  {
    id: 151,
    Value: "8100852",
    Name: "Glinzendorf",
  },
  {
    id: 152,
    Value: "8101191",
    Name: "Langenzersdorf",
  },
  {
    id: 153,
    Value: "8100266",
    Name: "Hainburg a.d.Donau Personenbf",
  },
  {
    id: 154,
    Value: "8100066",
    Name: "Ludesch",
  },
  {
    id: 155,
    Value: "8101272",
    Name: "Niederkreuzstetten",
  },
  {
    id: 156,
    Value: "8101678",
    Name: "Thalheim-Pöls",
  },
  {
    id: 157,
    Value: "8100276",
    Name: "Holzleithen",
  },
  {
    id: 158,
    Value: "8101389",
    Name: "Pasching",
  },
  {
    id: 159,
    Value: "8100682",
    Name: "Breiteneich bei Horn",
  },
  {
    id: 160,
    Value: "8100678",
    Name: "Bad Ried",
  },
  {
    id: 161,
    Value: "8100060",
    Name: "Telfs-Pfaffenhofen",
  },
  {
    id: 162,
    Value: "8100724",
    Name: "Dürnkrut",
  },
  {
    id: 163,
    Value: "8100092",
    Name: "Spittal-Millstättersee",
  },
  {
    id: 164,
    Value: "8101077",
    Name: "Kreisbach",
  },
  {
    id: 165,
    Value: "8101204",
    Name: "Marchtrenk",
  },
  {
    id: 166,
    Value: "8101081",
    Name: "Kröllendorf",
  },
  {
    id: 167,
    Value: "8101104",
    Name: "Lanzenkirchen",
  },
  {
    id: 168,
    Value: "8101358",
    Name: "Linz-Pichling",
  },
  {
    id: 169,
    Value: "8100172",
    Name: "Hinterstoder",
  },
  {
    id: 170,
    Value: "8101075",
    Name: "Kappel am Krappfeld",
  },
  {
    id: 171,
    Value: "8100202",
    Name: "Absdorf-Hippersdorf",
  },
  {
    id: 172,
    Value: "8101661",
    Name: "Ternitz",
  },
  {
    id: 173,
    Value: "8101178",
    Name: "Lasberg-St.Oswald",
  },
  {
    id: 174,
    Value: "8100469",
    Name: "Retz",
  },
  {
    id: 175,
    Value: "8100813",
    Name: "Furth-Palt",
  },
  {
    id: 176,
    Value: "8100823",
    Name: "Gaisruck",
  },
  {
    id: 177,
    Value: "8101553",
    Name: "Wien Simmering",
  },
  {
    id: 178,
    Value: "8101029",
    Name: "Katsdorf",
  },
  {
    id: 179,
    Value: "8100508",
    Name: "Vöcklamarkt",
  },
  {
    id: 180,
    Value: "8100538",
    Name: "Bad Deutsch Altenburg",
  },
  {
    id: 181,
    Value: "8101871",
    Name: "Mannswörth",
  },
  {
    id: 182,
    Value: "8101545",
    Name: "Schönfeld-Lassee",
  },
  {
    id: 183,
    Value: "8100221",
    Name: "Drösing",
  },
  {
    id: 184,
    Value: "8100410",
    Name: "Mauerkirchen",
  },
  {
    id: 185,
    Value: "8103490",
    Name: "Graz Don Bosco",
  },
  {
    id: 186,
    Value: "8101972",
    Name: "Bichlbach-Almkopfbahn",
  },
  {
    id: 187,
    Value: "8100044",
    Name: "Schwarzach-St.Veit",
  },
  {
    id: 188,
    Value: "8101471",
    Name: "St.Michael ob Bleiburg",
  },
  {
    id: 189,
    Value: "8101202",
    Name: "Mandling",
  },
  {
    id: 190,
    Value: "8101373",
    Name: "Pusarnitz",
  },
  {
    id: 191,
    Value: "8101013",
    Name: "Wien Jedlersdorf",
  },
  {
    id: 192,
    Value: "8100445",
    Name: "Waidhofen a.d.Ybbs",
  },
  {
    id: 193,
    Value: "8100166",
    Name: "Tauplitz",
  },
  {
    id: 194,
    Value: "8100051",
    Name: "Leogang",
  },
  {
    id: 195,
    Value: "8100156",
    Name: "Kleinreifling",
  },
  {
    id: 196,
    Value: "8100731",
    Name: "Dreistetten",
  },
  {
    id: 197,
    Value: "8101050",
    Name: "Klamm-Schottwien",
  },
  {
    id: 198,
    Value: "8100249",
    Name: "Gersthof",
  },
  {
    id: 199,
    Value: "8100422",
    Name: "Schützen am Gebirge",
  },
  {
    id: 200,
    Value: "8100135",
    Name: "Gröbming",
  },
  {
    id: 201,
    Value: "8100388",
    Name: "Neudorf",
  },
  {
    id: 202,
    Value: "8100033",
    Name: "Frohnleiten",
  },
  {
    id: 203,
    Value: "8100389",
    Name: "Wolfurt",
  },
  {
    id: 204,
    Value: "8101280",
    Name: "Neulengbach Stadt",
  },
  {
    id: 205,
    Value: "8100162",
    Name: "Steeg-Gosau",
  },
  {
    id: 206,
    Value: "8101292",
    Name: "Nußbach",
  },
  {
    id: 207,
    Value: "8100160",
    Name: "Bad Goisern",
  },
  {
    id: 208,
    Value: "8100559",
    Name: "Salzburg Gnigl",
  },
  {
    id: 209,
    Value: "8100483",
    Name: "Schaftenau",
  },
  {
    id: 210,
    Value: "8101774",
    Name: "Wildon",
  },
  {
    id: 211,
    Value: "8100655",
    Name: "Bad Fischau",
  },
  {
    id: 212,
    Value: "8101311",
    Name: "Obertraun-Koppenbrüllerhöhle",
  },
  {
    id: 213,
    Value: "8100376",
    Name: "Moosbierbaum-Heiligeneich",
  },
  {
    id: 214,
    Value: "8100466",
    Name: "Marchegg",
  },
  {
    id: 215,
    Value: "8101656",
    Name: "Teesdorf",
  },
  {
    id: 216,
    Value: "8101141",
    Name: "Lenzing",
  },
  {
    id: 217,
    Value: "8100781",
    Name: "Ferndorf",
  },
  {
    id: 218,
    Value: "8100716",
    Name: "Dorf a.d.Enns",
  },
  {
    id: 219,
    Value: "8101153",
    Name: "Lilienfeld",
  },
  {
    id: 220,
    Value: "8101045",
    Name: "Kimpling",
  },
  {
    id: 221,
    Value: "8101409",
    Name: "Puchenau West",
  },
  {
    id: 222,
    Value: "8101091",
    Name: "Klagenfurt Ebenthal",
  },
  {
    id: 223,
    Value: "8101524",
    Name: "Sierndorf a.d.March",
  },
  {
    id: 224,
    Value: "8100593",
    Name: "Werndorf",
  },
  {
    id: 225,
    Value: "8100055",
    Name: "Kitzbühel",
  },
  {
    id: 226,
    Value: "8100306",
    Name: "Spital am Pyhrn",
  },
  {
    id: 227,
    Value: "8101795",
    Name: "Wolfsbergkogel",
  },
  {
    id: 228,
    Value: "8100609",
    Name: "Aisthofen",
  },
  {
    id: 229,
    Value: "8101346",
    Name: "Perchtoldsdorf",
  },
  {
    id: 230,
    Value: "8100315",
    Name: "Suben",
  },
  {
    id: 231,
    Value: "8101126",
    Name: "Lendorf",
  },
  {
    id: 232,
    Value: "8100623",
    Name: "Ardning",
  },
  {
    id: 233,
    Value: "8100626",
    Name: "Ansfelden",
  },
  {
    id: 234,
    Value: "8100274",
    Name: "Hollabrunn",
  },
  {
    id: 235,
    Value: "8100589",
    Name: "Stams",
  },
  {
    id: 236,
    Value: "8102054",
    Name: "Puch Urstein",
  },
  {
    id: 237,
    Value: "8101536",
    Name: "Stillfried",
  },
  {
    id: 238,
    Value: "8101609",
    Name: "Steyr Münichholz",
  },
  {
    id: 239,
    Value: "8101061",
    Name: "Kammern",
  },
  {
    id: 240,
    Value: "8100097",
    Name: "Bad Hofgastein",
  },
  {
    id: 241,
    Value: "8100014",
    Name: "Wels Hbf",
  },
  {
    id: 242,
    Value: "8101764",
    Name: "Wagram-Grafenegg",
  },
  {
    id: 243,
    Value: "8100849",
    Name: "Glandorf",
  },
  {
    id: 244,
    Value: "8100121",
    Name: "Hohenems",
  },
  {
    id: 245,
    Value: "8101033",
    Name: "Kottingbrunn",
  },
  {
    id: 246,
    Value: "8100550",
    Name: "Heiterwang-Plansee",
  },
  {
    id: 247,
    Value: "8101260",
    Name: "Neukirchen-Gampern",
  },
  {
    id: 248,
    Value: "8101467",
    Name: "Sarasdorf",
  },
  {
    id: 249,
    Value: "8100956",
    Name: "Haiming",
  },
  {
    id: 250,
    Value: "8100370",
    Name: "Gratwein-Gratkorn",
  },
  {
    id: 251,
    Value: "8100861",
    Name: "Gödersdorf",
  },
  {
    id: 252,
    Value: "8100920",
    Name: "Wien Haidestraße",
  },
  {
    id: 253,
    Value: "8101514",
    Name: "Stadt Haag",
  },
  {
    id: 254,
    Value: "8100143",
    Name: "Dölsach",
  },
  {
    id: 255,
    Value: "8100005",
    Name: "Melk",
  },
  {
    id: 256,
    Value: "8101289",
    Name: "Nüziders",
  },
  {
    id: 257,
    Value: "8100236",
    Name: "Wien Floridsdorf",
  },
  {
    id: 258,
    Value: "8102105",
    Name: "Hall-Thaur",
  },
  {
    id: 259,
    Value: "8101686",
    Name: "Trattenbach",
  },
  {
    id: 260,
    Value: "8101319",
    Name: "Ober Radlberg",
  },
  {
    id: 261,
    Value: "8100719",
    Name: "Deutschkreutz",
  },
  {
    id: 262,
    Value: "8101945",
    Name: "Schiflugschanze Kulm",
  },
  {
    id: 263,
    Value: "8101523",
    Name: "Siebenhirten",
  },
  {
    id: 264,
    Value: "8101950",
    Name: "Bregenz Hafen",
  },
  {
    id: 265,
    Value: "8101781",
    Name: "Winzendorf",
  },
  {
    id: 266,
    Value: "8100727",
    Name: "Dornach",
  },
  {
    id: 267,
    Value: "8100283",
    Name: "Kammer-Schörfling",
  },
  {
    id: 268,
    Value: "8101473",
    Name: "Wien Quartier Belvedere",
  },
  {
    id: 269,
    Value: "8101032",
    Name: "Kapfenberg Fachhochschule",
  },
  {
    id: 270,
    Value: "8100064",
    Name: "St.Anton am Arlberg",
  },
  {
    id: 271,
    Value: "8101918",
    Name: "Kaindorf a.d.Sulm",
  },
  {
    id: 272,
    Value: "8101619",
    Name: "Wien Süßenbrunn",
  },
  {
    id: 273,
    Value: "8100984",
    Name: "Hautzendorf",
  },
  {
    id: 274,
    Value: "8100195",
    Name: "Gleisdorf",
  },
  {
    id: 275,
    Value: "8100065",
    Name: "Langen am Arlberg",
  },
  {
    id: 276,
    Value: "8100993",
    Name: "Hüttau Terminal",
  },
  {
    id: 277,
    Value: "8102057",
    Name: "Wien Wolf in der Au",
  },
  {
    id: 278,
    Value: "8100857",
    Name: "Gniebing",
  },
  {
    id: 279,
    Value: "8101556",
    Name: "Wien Grillgasse",
  },
  {
    id: 280,
    Value: "8100558",
    Name: "Ulrichsbrücke-Füssen",
  },
  {
    id: 281,
    Value: "8100030",
    Name: "Kindberg",
  },
  {
    id: 282,
    Value: "8101244",
    Name: "Mariahof-St.Lambrecht",
  },
  {
    id: 283,
    Value: "8100141",
    Name: "Lienz",
  },
  {
    id: 284,
    Value: "8100180",
    Name: "Hartberg",
  },
  {
    id: 285,
    Value: "8101820",
    Name: "Wien Zentralfriedhof",
  },
  {
    id: 286,
    Value: "8101567",
    Name: "Sollenau",
  },
  {
    id: 287,
    Value: "8100078",
    Name: "St.Veit a.d.Glan",
  },
  {
    id: 288,
    Value: "8101361",
    Name: "Pinsdorf",
  },
  {
    id: 289,
    Value: "8100706",
    Name: "Brunn an der Schneebergbahn",
  },
  {
    id: 290,
    Value: "8101402",
    Name: "Puchenau",
  },
  {
    id: 291,
    Value: "8101695",
    Name: "Ulmerfeld-Hausmening",
  },
  {
    id: 292,
    Value: "8101275",
    Name: "Niklasdorf",
  },
  {
    id: 293,
    Value: "8100188",
    Name: "Aspang",
  },
  {
    id: 294,
    Value: "8101019",
    Name: "Kalsdorf",
  },
  {
    id: 295,
    Value: "8100146",
    Name: "Greifenburg-Weißensee",
  },
  {
    id: 296,
    Value: "8100102",
    Name: "Jenbach",
  },
  {
    id: 297,
    Value: "8101818",
    Name: "Vienna Biocenter-St.Marx",
  },
  {
    id: 298,
    Value: "8100512",
    Name: "Wien Ottakring",
  },
  {
    id: 299,
    Value: "8101629",
    Name: "Schönwies",
  },
  {
    id: 300,
    Value: "8101578",
    Name: "Spillern",
  },
  {
    id: 301,
    Value: "8101247",
    Name: "Muckendorf-Wipfing",
  },
  {
    id: 302,
    Value: "8101398",
    Name: "Graz Puntigam",
  },
  {
    id: 303,
    Value: "8100006",
    Name: "Pöchlarn",
  },
  {
    id: 304,
    Value: "8100846",
    Name: "Guntramsdorf-Thallern",
  },
  {
    id: 305,
    Value: "8101498",
    Name: "Seyring",
  },
  {
    id: 306,
    Value: "8100189",
    Name: "Edlitz-Grimmenstein",
  },
  {
    id: 307,
    Value: "8101674",
    Name: "Traunkirchen Ort",
  },
  {
    id: 308,
    Value: "8100158",
    Name: "Hieflau",
  },
  {
    id: 309,
    Value: "8100028",
    Name: "Semmering",
  },
  {
    id: 310,
    Value: "8100463",
    Name: "Losenstein",
  },
  {
    id: 311,
    Value: "8101684",
    Name: "Traxenbichl",
  },
  {
    id: 312,
    Value: "8100056",
    Name: "Arnoldstein",
  },
  {
    id: 313,
    Value: "8100916",
    Name: "Halbenrain",
  },
  {
    id: 314,
    Value: "8100017",
    Name: "Attnang-Puchheim",
  },
  {
    id: 315,
    Value: "8100736",
    Name: "Eichberg",
  },
  {
    id: 316,
    Value: "8100076",
    Name: "Friesach",
  },
  {
    id: 317,
    Value: "8100176",
    Name: "Fehring",
  },
  {
    id: 318,
    Value: "8101337",
    Name: "Patsch",
  },
  {
    id: 319,
    Value: "8100142",
    Name: "Sillian",
  },
  {
    id: 320,
    Value: "8100602",
    Name: "Achenlohe",
  },
  {
    id: 321,
    Value: "8100134",
    Name: "Neumarkt am Wallersee",
  },
  {
    id: 322,
    Value: "8101481",
    Name: "Salzburg Parsch",
  },
  {
    id: 323,
    Value: "8100399",
    Name: "Irnfritz",
  },
  {
    id: 324,
    Value: "8100175",
    Name: "Feldbach",
  },
  {
    id: 325,
    Value: "8101700",
    Name: "Unterhart",
  },
  {
    id: 326,
    Value: "8100323",
    Name: "Terfens-Weer",
  },
  {
    id: 327,
    Value: "8100071",
    Name: "St.Michael",
  },
  {
    id: 328,
    Value: "8100862",
    Name: "Görtschach-Förolach",
  },
  {
    id: 329,
    Value: "8100311",
    Name: "Statzendorf",
  },
  {
    id: 330,
    Value: "8100043",
    Name: "St.Johann im Pongau",
  },
  {
    id: 331,
    Value: "8100159",
    Name: "Gstatterboden im Nationalpark",
  },
  {
    id: 332,
    Value: "8101317",
    Name: "Obersdorf Haltestelle",
  },
  {
    id: 333,
    Value: "8100247",
    Name: "Gars-Thunau",
  },
  {
    id: 334,
    Value: "8101516",
    Name: "Schlägl",
  },
  {
    id: 335,
    Value: "8100211",
    Name: "Andorf",
  },
  {
    id: 336,
    Value: "8100416",
    Name: "Sattledt",
  },
  {
    id: 337,
    Value: "8101470",
    Name: "Salzburg Aigen",
  },
  {
    id: 338,
    Value: "8100003",
    Name: "Wien Westbahnhof",
  },
  {
    id: 339,
    Value: "8102059",
    Name: "Tullnerfeld",
  },
  {
    id: 340,
    Value: "8100925",
    Name: "Hennersdorf",
  },
  {
    id: 341,
    Value: "8101778",
    Name: "Wiesmühle",
  },
  {
    id: 342,
    Value: "8101845",
    Name: "St.Pölten-Porschestraße",
  },
  {
    id: 343,
    Value: "8100740",
    Name: "Eberschwang",
  },
  {
    id: 344,
    Value: "8100756",
    Name: "Wien Erzherzog Karl-Straße",
  },
  {
    id: 345,
    Value: "8100106",
    Name: "Matrei",
  },
  {
    id: 346,
    Value: "8101548",
    Name: "Schönborn-Mallebarn",
  },
  {
    id: 347,
    Value: "8100544",
    Name: "Wernstein",
  },
  {
    id: 348,
    Value: "8101076",
    Name: "Kraubath",
  },
  {
    id: 349,
    Value: "8100429",
    Name: "Söchau",
  },
  {
    id: 350,
    Value: "8100270",
    Name: "Hermagor",
  },
  {
    id: 351,
    Value: "8101090",
    Name: "Klagenfurt Annabichl",
  },
  {
    id: 352,
    Value: "8100074",
    Name: "Unzmarkt",
  },
  {
    id: 353,
    Value: "8100418",
    Name: "Mittlern",
  },
  {
    id: 354,
    Value: "8100034",
    Name: "Peggau-Deutschfeistritz",
  },
  {
    id: 355,
    Value: "8100939",
    Name: "Hopfgarten Berglift",
  },
  {
    id: 356,
    Value: "8100299",
    Name: "Langenlois",
  },
  {
    id: 357,
    Value: "8101118",
    Name: "Lahrndorf",
  },
  {
    id: 358,
    Value: "8101173",
    Name: "Lanzendorf-Rannersdorf",
  },
  {
    id: 359,
    Value: "8100635",
    Name: "Altenstadt",
  },
  {
    id: 360,
    Value: "8100167",
    Name: "Rohr-Bad Hall",
  },
  {
    id: 361,
    Value: "8100652",
    Name: "Berndorf Stadt",
  },
  {
    id: 362,
    Value: "8100295",
    Name: "Krems a.d.Donau",
  },
  {
    id: 363,
    Value: "8100120",
    Name: "Götzis",
  },
  {
    id: 364,
    Value: "8100775",
    Name: "Enzersdorf bei Staatz",
  },
  {
    id: 365,
    Value: "8100517",
    Name: "Windischgarsten",
  },
  {
    id: 366,
    Value: "8101600",
    Name: "Staatz",
  },
  {
    id: 367,
    Value: "8100757",
    Name: "Enzesfeld-Lindabrunn",
  },
  {
    id: 368,
    Value: "8100759",
    Name: "Ennsdorf",
  },
  {
    id: 369,
    Value: "8101769",
    Name: "Willendorf",
  },
  {
    id: 370,
    Value: "8101193",
    Name: "Linz Oed",
  },
  {
    id: 371,
    Value: "8100213",
    Name: "Annenheim",
  },
  {
    id: 372,
    Value: "8100208",
    Name: "Aigen-Schlägl",
  },
  {
    id: 373,
    Value: "8100996",
    Name: "Herzogenburg Stadt",
  },
  {
    id: 374,
    Value: "8100772",
    Name: "Elsbethen",
  },
  {
    id: 375,
    Value: "8101295",
    Name: "Oberbrunn",
  },
  {
    id: 376,
    Value: "8100112",
    Name: "Reith",
  },
  {
    id: 377,
    Value: "8101694",
    Name: "Übersbach",
  },
  {
    id: 378,
    Value: "8100077",
    Name: "Launsdorf-Hochosterwitz",
  },
  {
    id: 379,
    Value: "8101405",
    Name: "Pulgarn",
  },
  {
    id: 380,
    Value: "8100732",
    Name: "Dietrichshofen",
  },
  {
    id: 381,
    Value: "8101356",
    Name: "Pichl",
  },
  {
    id: 382,
    Value: "8105481",
    Name: "Lauterach Unterfeld",
  },
  {
    id: 383,
    Value: "8101308",
    Name: "Oftering",
  },
  {
    id: 384,
    Value: "8100962",
    Name: "Höbersdorf",
  },
  {
    id: 385,
    Value: "8100151",
    Name: "Gmunden",
  },
  {
    id: 386,
    Value: "8101205",
    Name: "Mautbrücken",
  },
  {
    id: 387,
    Value: "8100411",
    Name: "Rosenburg",
  },
  {
    id: 388,
    Value: "8101007",
    Name: "Inzing",
  },
  {
    id: 389,
    Value: "8101267",
    Name: "Neuhaus a.d.Gail",
  },
  {
    id: 390,
    Value: "8101097",
    Name: "Küb",
  },
  {
    id: 391,
    Value: "8100455",
    Name: "Bad Waltersdorf",
  },
  {
    id: 392,
    Value: "8100085",
    Name: "Klagenfurt Hbf",
  },
  {
    id: 393,
    Value: "8100721",
    Name: "Deutsch Wagram",
  },
  {
    id: 394,
    Value: "8101367",
    Name: "Platt",
  },
  {
    id: 395,
    Value: "8100018",
    Name: "Frankenmarkt",
  },
  {
    id: 396,
    Value: "8100539",
    Name: "Werfen",
  },
  {
    id: 397,
    Value: "8100081",
    Name: "Velden am Wörthersee",
  },
  {
    id: 398,
    Value: "8101395",
    Name: "Pritschitz",
  },
  {
    id: 399,
    Value: "8100152",
    Name: "Altmünster am Traunsee",
  },
  {
    id: 400,
    Value: "8101381",
    Name: "Pressbaum",
  },
  {
    id: 401,
    Value: "8101245",
    Name: "Mistelbach",
  },
  {
    id: 402,
    Value: "8101218",
    Name: "Miesenbach-Waidmannsfeld",
  },
  {
    id: 403,
    Value: "8100929",
    Name: "Hallwang-Elixhausen",
  },
  {
    id: 404,
    Value: "8100446",
    Name: "Wien Franz-Josefs-Bf",
  },
  {
    id: 405,
    Value: "8100269",
    Name: "Wien Heiligenstadt",
  },
  {
    id: 406,
    Value: "8100551",
    Name: "Kranebitten",
  },
  {
    id: 407,
    Value: "8100023",
    Name: "Neumarkt-Kallham",
  },
  {
    id: 408,
    Value: "8100061",
    Name: "Ötztal",
  },
  {
    id: 409,
    Value: "8101048",
    Name: "Kirchstetten",
  },
  {
    id: 410,
    Value: "8100537",
    Name: "Maria Ellend",
  },
  {
    id: 411,
    Value: "8100405",
    Name: "Ried im Innkreis",
  },
  {
    id: 412,
    Value: "8100079",
    Name: "Krumpendorf",
  },
  {
    id: 413,
    Value: "8101383",
    Name: "Wolfsberg Reding",
  },
  {
    id: 414,
    Value: "8101870",
    Name: "Stallegg",
  },
  {
    id: 415,
    Value: "8101190",
    Name: "Langenwang",
  },
  {
    id: 416,
    Value: "8100107",
    Name: "Steinach in Tirol",
  },
  {
    id: 417,
    Value: "8101810",
    Name: "Wulkaprodersdorf Haltestelle",
  },
  {
    id: 418,
    Value: "8101701",
    Name: "Untersiebenbrunn",
  },
  {
    id: 419,
    Value: "8100254",
    Name: "Götzendorf",
  },
  {
    id: 420,
    Value: "8101955",
    Name: "Achleitnersiedlung",
  },
  {
    id: 421,
    Value: "8100442",
    Name: "Obernberg-Altheim",
  },
  {
    id: 422,
    Value: "8100383",
    Name: "Wartberg im Mürztal",
  },
  {
    id: 423,
    Value: "8100110",
    Name: "Innsbruck Hötting",
  },
  {
    id: 424,
    Value: "8101278",
    Name: "Neukirchen bei Lambach",
  },
  {
    id: 425,
    Value: "8100109",
    Name: "Innsbruck Westbf",
  },
  {
    id: 426,
    Value: "8101853",
    Name: "Wien Speising",
  },
  {
    id: 427,
    Value: "8101520",
    Name: "Steinhaus",
  },
  {
    id: 428,
    Value: "8100980",
    Name: "Hausruck",
  },
  {
    id: 429,
    Value: "8100935",
    Name: "Wien Hetzendorf",
  },
  {
    id: 430,
    Value: "8101863",
    Name: "Altenhof",
  },
  {
    id: 431,
    Value: "8100248",
    Name: "Garsten",
  },
  {
    id: 432,
    Value: "8100700",
    Name: "Buchberg",
  },
  {
    id: 433,
    Value: "8100827",
    Name: "Göllersdorf",
  },
  {
    id: 434,
    Value: "8101210",
    Name: "Mixnitz-Bärenschützklamm",
  },
  {
    id: 435,
    Value: "8101597",
    Name: "St.Peter-Seitenstetten",
  },
  {
    id: 436,
    Value: "8101085",
    Name: "Krenstetten-Biberbach",
  },
  {
    id: 437,
    Value: "8100045",
    Name: "Lend",
  },
  {
    id: 438,
    Value: "8101825",
    Name: "Zeiselmauer-Königstetten",
  },
  {
    id: 439,
    Value: "8100515",
    Name: "Parndorf Ort",
  },
  {
    id: 440,
    Value: "8100926",
    Name: "Hallstatt",
  },
  {
    id: 441,
    Value: "8100417",
    Name: "Mittewald a.d.Drau",
  },
  {
    id: 442,
    Value: "8101439",
    Name: "Rohrbach a.d.Gölsen",
  },
  {
    id: 443,
    Value: "8101375",
    Name: "Pöckau",
  },
  {
    id: 444,
    Value: "8100689",
    Name: "Bisamberg",
  },
  {
    id: 445,
    Value: "8101454",
    Name: "Rohr",
  },
  {
    id: 446,
    Value: "8101505",
    Name: "St.Georgen am Längsee",
  },
  {
    id: 447,
    Value: "8100585",
    Name: "Schloß Haus",
  },
  {
    id: 448,
    Value: "8100958",
    Name: "Hainburg a.d.Donau Kulturfabrik",
  },
  {
    id: 449,
    Value: "8101099",
    Name: "Küpfern Haltestelle",
  },
  {
    id: 450,
    Value: "8100137",
    Name: "Schladming",
  },
  {
    id: 451,
    Value: "8100826",
    Name: "Grein-Bad Kreuzen",
  },
  {
    id: 452,
    Value: "8101290",
    Name: "Wien Nußdorf",
  },
  {
    id: 453,
    Value: "8101403",
    Name: "Puchberg am Schneeberg",
  },
  {
    id: 454,
    Value: "8100661",
    Name: "Böheimkirchen",
  },
  {
    id: 455,
    Value: "8100568",
    Name: "Fels",
  },
  {
    id: 456,
    Value: "8100747",
    Name: "Ernsthofen",
  },
  {
    id: 457,
    Value: "8100349",
    Name: "Wien Praterstern",
  },
  {
    id: 458,
    Value: "8100046",
    Name: "Taxenbach-Rauris",
  },
  {
    id: 459,
    Value: "8100062",
    Name: "Imst-Pitztal",
  },
  {
    id: 460,
    Value: "8100080",
    Name: "Pörtschach am Wörthersee",
  },
  {
    id: 461,
    Value: "8100200",
    Name: "Göpfritz",
  },
  {
    id: 462,
    Value: "8100309",
    Name: "Stadt Rottenmann",
  },
  {
    id: 463,
    Value: "8100691",
    Name: "Wien Brünner Straße",
  },
  {
    id: 464,
    Value: "8100372",
    Name: "Guntramsdorf-Kaiserau Haltestelle",
  },
  {
    id: 465,
    Value: "8100185",
    Name: "Friedberg",
  },
  {
    id: 466,
    Value: "8100136",
    Name: "Haus",
  },
  {
    id: 467,
    Value: "8100337",
    Name: "Volders-Baumkirchen",
  },
  {
    id: 468,
    Value: "8101159",
    Name: "Langenlebarn",
  },
  {
    id: 469,
    Value: "8100147",
    Name: "Villach Hbf",
  },
  {
    id: 470,
    Value: "8100305",
    Name: "Liebenfels Haltestelle",
  },
  {
    id: 471,
    Value: "8100773",
    Name: "Eisenstadt Schule",
  },
  {
    id: 472,
    Value: "8101745",
    Name: "Waldegg",
  },
  {
    id: 473,
    Value: "8101675",
    Name: "Thörl-Maglern",
  },
  {
    id: 474,
    Value: "8100310",
    Name: "Stans",
  },
  {
    id: 475,
    Value: "8101414",
    Name: "Petzenkirchen",
  },
  {
    id: 476,
    Value: "8101055",
    Name: "Kleblach-Lind",
  },
  {
    id: 477,
    Value: "8101742",
    Name: "Wartberg a.d.Krems",
  },
  {
    id: 478,
    Value: "8101248",
    Name: "Mühlheim",
  },
  {
    id: 479,
    Value: "8100579",
    Name: "Oed",
  },
  {
    id: 480,
    Value: "8101706",
    Name: "Unter Radlberg",
  },
  {
    id: 481,
    Value: "8100936",
    Name: "Hetzmannsdorf-Wullersdorf",
  },
  {
    id: 482,
    Value: "8100830",
    Name: "Geinberg",
  },
  {
    id: 483,
    Value: "8101711",
    Name: "Urschendorf",
  },
  {
    id: 484,
    Value: "8100130",
    Name: "Hohenau",
  },
  {
    id: 485,
    Value: "8102017",
    Name: "Wiener Neustadt Anemonensee",
  },
  {
    id: 486,
    Value: "8100179",
    Name: "Sebersdorf",
  },
  {
    id: 487,
    Value: "8100149",
    Name: "Steinfeld im Drautal",
  },
  {
    id: 488,
    Value: "8100325",
    Name: "Traismauer",
  },
  {
    id: 489,
    Value: "8100990",
    Name: "Hausleiten",
  },
  {
    id: 490,
    Value: "8101912",
    Name: "Reutte in Tirol Schulzentrum",
  },
  {
    id: 491,
    Value: "8100470",
    Name: "Maria Rain",
  },
  {
    id: 492,
    Value: "8100521",
    Name: "Pettenbach",
  },
  {
    id: 493,
    Value: "8100419",
    Name: "Möllbrücke-Sachsenburg",
  },
  {
    id: 494,
    Value: "8100613",
    Name: "Allerheiligen-Mürzhofen",
  },
  {
    id: 495,
    Value: "8100050",
    Name: "Maishofen-Saalbach",
  },
  {
    id: 496,
    Value: "8101228",
    Name: "Mauer-Öhling",
  },
  {
    id: 497,
    Value: "8100129",
    Name: "Gmünd N.Ö.",
  },
  {
    id: 498,
    Value: "8100546",
    Name: "Kuchl",
  },
  {
    id: 499,
    Value: "8100836",
    Name: "Greinsfurth",
  },
  {
    id: 500,
    Value: "8100009",
    Name: "St.Valentin",
  },
  {
    id: 501,
    Value: "8101852",
    Name: "Schauersberg",
  },
  {
    id: 502,
    Value: "8100261",
    Name: "Grünau im Almtal",
  },
  {
    id: 503,
    Value: "8101363",
    Name: "Plank am Kamp",
  },
  {
    id: 504,
    Value: "8100244",
    Name: "Furth-Göttweig",
  },
  {
    id: 505,
    Value: "8101596",
    Name: "Spital am Semmering",
  },
  {
    id: 506,
    Value: "8100879",
    Name: "Gerling im Pinzgau",
  },
  {
    id: 507,
    Value: "8100722",
    Name: "Dechantskirchen",
  },
  {
    id: 508,
    Value: "8101624",
    Name: "St.Veit a.d.Glan-West",
  },
  {
    id: 509,
    Value: "8101327",
    Name: "Ottnang-Wolfsegg",
  },
  {
    id: 510,
    Value: "8101148",
    Name: "Lichendorf",
  },
  {
    id: 511,
    Value: "8100194",
    Name: "Laßnitzhöhe",
  },
  {
    id: 512,
    Value: "8100353",
    Name: "Flughafen Wien",
  },
  {
    id: 513,
    Value: "8101588",
    Name: "Wien Strebersdorf",
  },
  {
    id: 514,
    Value: "8100669",
    Name: "Blindenmarkt",
  },
  {
    id: 515,
    Value: "8101084",
    Name: "Kritzendorf",
  },
  {
    id: 516,
    Value: "8101157",
    Name: "Lind-Rosegg",
  },
  {
    id: 517,
    Value: "8100867",
    Name: "Gumpoldskirchen",
  },
  {
    id: 518,
    Value: "8101728",
    Name: "Völs",
  },
  {
    id: 519,
    Value: "8100472",
    Name: "Marz-Rohrbach",
  },
  {
    id: 520,
    Value: "8100981",
    Name: "Haselstauden",
  },
  {
    id: 521,
    Value: "8101430",
    Name: "Regelsbrunn",
  },
  {
    id: 522,
    Value: "8100086",
    Name: "Paternion-Feistritz Haltestelle",
  },
  {
    id: 523,
    Value: "8101404",
    Name: "Purkersdorf Zentrum",
  },
  {
    id: 524,
    Value: "8101713",
    Name: "Unter Tullnerbach",
  },
  {
    id: 525,
    Value: "8100075",
    Name: "Neumarkt in Steiermark",
  },
  {
    id: 526,
    Value: "8101776",
    Name: "Windau",
  },
  {
    id: 527,
    Value: "8101748",
    Name: "Weikendorf-Dörfles",
  },
  {
    id: 528,
    Value: "8100316",
    Name: "Summerau",
  },
  {
    id: 529,
    Value: "8100597",
    Name: "Aich-Assach",
  },
  {
    id: 530,
    Value: "8101819",
    Name: "Zell a.d.Pram",
  },
  {
    id: 531,
    Value: "8101306",
    Name: "Oepping",
  },
  {
    id: 532,
    Value: "8101857",
    Name: "Wilfling",
  },
  {
    id: 533,
    Value: "8101645",
    Name: "Traisen Markt",
  },
  {
    id: 534,
    Value: "8101328",
    Name: "Ober Waltersdorf",
  },
  {
    id: 535,
    Value: "8100302",
    Name: "Lauterach",
  },
  {
    id: 536,
    Value: "8100622",
    Name: "Arbing",
  },
  {
    id: 537,
    Value: "8101501",
    Name: "St.Georgen a.d.Gusen",
  },
  {
    id: 538,
    Value: "8100012",
    Name: "Amstetten",
  },
  {
    id: 539,
    Value: "8100426",
    Name: "Seekirchen am Wallersee",
  },
  {
    id: 540,
    Value: "8100239",
    Name: "Freistadt",
  },
  {
    id: 541,
    Value: "8101760",
    Name: "Wien Weidlingau",
  },
  {
    id: 542,
    Value: "",
    Name: "",
  },
  {
    id: 543,
    Value: "8101643",
    Name: "Traisen",
  },
  {
    id: 544,
    Value: "8101946",
    Name: "Wels Messe",
  },
  {
    id: 545,
    Value: "8100746",
    Name: "Etsdorf-Straß",
  },
  {
    id: 546,
    Value: "8100543",
    Name: "Pama",
  },
  {
    id: 547,
    Value: "8101229",
    Name: "Möllersdorf Aspangbahn",
  },
  {
    id: 548,
    Value: "8100587",
    Name: "Schlöglmühl",
  },
  {
    id: 549,
    Value: "8100083",
    Name: "Rosenbach",
  },
  {
    id: 550,
    Value: "8101803",
    Name: "Wallersee",
  },
  {
    id: 551,
    Value: "8101154",
    Name: "Limberg-Maissau",
  },
  {
    id: 552,
    Value: "8101669",
    Name: "Tiffen",
  },
  {
    id: 553,
    Value: "8101546",
    Name: "Scheiblingkirchen-Warth",
  },
  {
    id: 554,
    Value: "8100139",
    Name: "Altenmarkt im Pongau",
  },
  {
    id: 555,
    Value: "8101347",
    Name: "Petersbaumgarten",
  },
  {
    id: 556,
    Value: "8101974",
    Name: "Piesting Harzwerk",
  },
  {
    id: 557,
    Value: "8101494",
    Name: "Stein a.d.Enns",
  },
  {
    id: 558,
    Value: "8100728",
    Name: "Dornbirn-Schoren",
  },
  {
    id: 559,
    Value: "8100271",
    Name: "Wien Hernals",
  },
  {
    id: 560,
    Value: "8100995",
    Name: "Herzograd",
  },
  {
    id: 561,
    Value: "8100347",
    Name: "Weizelsdorf",
  },
  {
    id: 562,
    Value: "8102007",
    Name: "Mistelbach Stadt",
  },
  {
    id: 563,
    Value: "8101313",
    Name: "Oberland Haltestelle",
  },
  {
    id: 564,
    Value: "8101692",
    Name: "Tulln Stadt",
  },
  {
    id: 565,
    Value: "8100695",
    Name: "Breitenschützing",
  },
  {
    id: 566,
    Value: "8101224",
    Name: "Maria Lanzendorf",
  },
  {
    id: 567,
    Value: "8101829",
    Name: "Zurndorf",
  },
  {
    id: 568,
    Value: "8100015",
    Name: "Lambach",
  },
  {
    id: 569,
    Value: "8101203",
    Name: "Markersdorf a.d.Pielach",
  },
  {
    id: 570,
    Value: "8100088",
    Name: "Scharnitz",
  },
  {
    id: 571,
    Value: "8101614",
    Name: "Steyregg",
  },
  {
    id: 572,
    Value: "8101752",
    Name: "Weitersfeld a.d.Mur",
  },
  {
    id: 573,
    Value: "8101351",
    Name: "Pfaffenschwendt",
  },
  {
    id: 574,
    Value: "8101428",
    Name: "Redl-Zipf",
  },
  {
    id: 575,
    Value: "8100198",
    Name: "Bruck a.d.Leitha",
  },
  {
    id: 576,
    Value: "8100961",
    Name: "Höflein a.d.Donau",
  },
  {
    id: 577,
    Value: "8100049",
    Name: "Saalfelden",
  },
  {
    id: 578,
    Value: "8101127",
    Name: "Linz Ebelsberg",
  },
  {
    id: 579,
    Value: "8100032",
    Name: "Bruck a.d.Mur",
  },
  {
    id: 580,
    Value: "8100132",
    Name: "Stainach-Irdning",
  },
  {
    id: 581,
    Value: "8101163",
    Name: "Leobersdorf",
  },
  {
    id: 582,
    Value: "8101611",
    Name: "Sautern-Schiltern",
  },
  {
    id: 583,
    Value: "8101231",
    Name: "Mogersdorf",
  },
  {
    id: 584,
    Value: "8101539",
    Name: "Wien Praterkai",
  },
  {
    id: 585,
    Value: "8100264",
    Name: "Hadersdorf am Kamp",
  },
  {
    id: 586,
    Value: "8101720",
    Name: "Vellach-Khünburg",
  },
  {
    id: 587,
    Value: "8100555",
    Name: "Musau",
  },
  {
    id: 588,
    Value: "8101063",
    Name: "Kumpfmühl",
  },
  {
    id: 589,
    Value: "8100734",
    Name: "Dürnberg",
  },
  {
    id: 590,
    Value: "8101480",
    Name: "Schauboden",
  },
  {
    id: 591,
    Value: "8101349",
    Name: "Pfennigbach",
  },
  {
    id: 592,
    Value: "8100864",
    Name: "Gopperding",
  },
  {
    id: 593,
    Value: "8100093",
    Name: "Mallnitz-Obervellach",
  },
  {
    id: 594,
    Value: "8100970",
    Name: "Hörersdorf",
  },
  {
    id: 595,
    Value: "8101241",
    Name: "Markt Sachsenburg",
  },
  {
    id: 596,
    Value: "8101937",
    Name: "Wien Spittelau",
  },
  {
    id: 597,
    Value: "8101789",
    Name: "Wiener Neustadt Civitas Nova",
  },
  {
    id: 598,
    Value: "8101794",
    Name: "Wolfshütte",
  },
  {
    id: 599,
    Value: "8101841",
    Name: "Mühling-Plaika",
  },
  {
    id: 600,
    Value: "8100663",
    Name: "Bad Blumau",
  },
  {
    id: 601,
    Value: "8100594",
    Name: "Köstendorf Weng",
  },
  {
    id: 602,
    Value: "8101005",
    Name: "Irschen",
  },
  {
    id: 603,
    Value: "8100026",
    Name: "Gloggnitz",
  },
  {
    id: 604,
    Value: "8101024",
    Name: "Kamegg",
  },
  {
    id: 605,
    Value: "8102149",
    Name: "Ledenitzen",
  },
  {
    id: 606,
    Value: "8101025",
    Name: "Kainisch",
  },
  {
    id: 607,
    Value: "8102260",
    Name: "Vils Stadt",
  },
  {
    id: 608,
    Value: "8101586",
    Name: "Schrambach",
  },
  {
    id: 609,
    Value: "8103000",
    Name: "Wien Hauptbahnhof",
  },
  {
    id: 610,
    Value: "8101988",
    Name: "Waldegg-Dürnbach",
  },
  {
    id: 611,
    Value: "8101377",
    Name: "Pöndorf",
  },
  {
    id: 612,
    Value: "8100886",
    Name: "Gosdorf",
  },
  {
    id: 613,
    Value: "8101101",
    Name: "Klosterneuburg-Weidling",
  },
  {
    id: 614,
    Value: "8101036",
    Name: "Kematen-Piberbach",
  },
  {
    id: 615,
    Value: "8100040",
    Name: "Hallein",
  },
  {
    id: 616,
    Value: "8101768",
    Name: "Wilhelmsburg a.d.Traisen",
  },
  {
    id: 617,
    Value: "8100733",
    Name: "Dürnbach",
  },
  {
    id: 618,
    Value: "8100073",
    Name: "Judenburg",
  },
  {
    id: 619,
    Value: "8101014",
    Name: "Johnsbach im Nationalpark",
  },
  {
    id: 620,
    Value: "",
    Name: "",
  },
  {
    id: 621,
    Value: "8100054",
    Name: "St.Johann in Tirol",
  },
  {
    id: 622,
    Value: "8101787",
    Name: "Wildungsmauer",
  },
  {
    id: 623,
    Value: "8100397",
    Name: "Breitenbrunn",
  },
  {
    id: 624,
    Value: "8100788",
    Name: "Finkenstein",
  },
  {
    id: 625,
    Value: "8100201",
    Name: "Eggenburg",
  },
  {
    id: 626,
    Value: "8101093",
    Name: "Klagenfurt Lend",
  },
  {
    id: 627,
    Value: "8100493",
    Name: "Sigmundsherberg",
  },
  {
    id: 628,
    Value: "8100173",
    Name: "Graz Hbf",
  },
  {
    id: 629,
    Value: "8103644",
    Name: "Klagenfurt West",
  },
  {
    id: 630,
    Value: "8100125",
    Name: "Mautern",
  },
  {
    id: 631,
    Value: "8100369",
    Name: "Gramatneusiedl",
  },
  {
    id: 632,
    Value: "8100100",
    Name: "Wörgl Kundl",
  },
  {
    id: 633,
    Value: "8100059",
    Name: "Hopfgarten",
  },
  {
    id: 634,
    Value: "8100580",
    Name: "Perg",
  },
  {
    id: 635,
    Value: "8100831",
    Name: "Gemeinlebarn",
  },
  {
    id: 636,
    Value: "8100668",
    Name: "Bleiburg Stadt",
  },
  {
    id: 637,
    Value: "8101595",
    Name: "Strasshof Haltestelle",
  },
  {
    id: 638,
    Value: "8101784",
    Name: "Weitlanbrunn",
  },
  {
    id: 639,
    Value: "8100382",
    Name: "Villach Warmbad",
  },
  {
    id: 640,
    Value: "8101293",
    Name: "Neumarkt a.d.Y-Karlsbach",
  },
  {
    id: 641,
    Value: "8101496",
    Name: "Villach Seebach",
  },
  {
    id: 642,
    Value: "8102042",
    Name: "Lienz-Peggetz",
  },
  {
    id: 643,
    Value: "8100308",
    Name: "Stadl-Paura",
  },
  {
    id: 644,
    Value: "8101538",
    Name: "Scheifling",
  },
  {
    id: 645,
    Value: "8100029",
    Name: "Mürzzuschlag",
  },
  {
    id: 646,
    Value: "8101421",
    Name: "Rainfeld-Klein Zell",
  },
  {
    id: 647,
    Value: "8100650",
    Name: "Berndorf Fabrik",
  },
  {
    id: 648,
    Value: "8100591",
    Name: "Silberwald",
  },
  {
    id: 649,
    Value: "8100819",
    Name: "Gaishorn",
  },
  {
    id: 650,
    Value: "8100322",
    Name: "Ternberg",
  },
  {
    id: 651,
    Value: "8101336",
    Name: "Paasdorf",
  },
  {
    id: 652,
    Value: "8101690",
    Name: "Traun",
  },
  {
    id: 653,
    Value: "8100764",
    Name: "Erlauf",
  },
  {
    id: 654,
    Value: "8101401",
    Name: "Pottenstein a.d.Triesting",
  },
  {
    id: 655,
    Value: "8100094",
    Name: "Böckstein",
  },
  {
    id: 656,
    Value: "8100749",
    Name: "Eichgraben-Altlengbach",
  },
  {
    id: 657,
    Value: "8100408",
    Name: "Mattersburg",
  },
  {
    id: 658,
    Value: "8100878",
    Name: "Gerling OÖ",
  },
  {
    id: 659,
    Value: "8101227",
    Name: "Wien Matzleinsdorfer Platz",
  },
  {
    id: 660,
    Value: "8100113",
    Name: "Seefeld in Tirol",
  },
  {
    id: 661,
    Value: "8101390",
    Name: "Pottschach",
  },
  {
    id: 662,
    Value: "8100001",
    Name: "Kufstein",
  },
  {
    id: 663,
    Value: "8100241",
    Name: "Friedburg",
  },
  {
    id: 664,
    Value: "8100828",
    Name: "Gedersdorf",
  },
  {
    id: 665,
    Value: "8101279",
    Name: "Neulengbach",
  },
  {
    id: 666,
    Value: "8100084",
    Name: "Faak am See",
  },
  {
    id: 667,
    Value: "8100573",
    Name: "Micheldorf-Hirt",
  },
  {
    id: 668,
    Value: "8100267",
    Name: "Hard-Fussach",
  },
  {
    id: 669,
    Value: "8101322",
    Name: "Obersee",
  },
  {
    id: 670,
    Value: "8100324",
    Name: "Thal",
  },
  {
    id: 671,
    Value: "8100514",
    Name: "Wien Meidling",
  },
  {
    id: 672,
    Value: "8100036",
    Name: "Sattendorf",
  },
  {
    id: 673,
    Value: "8100526",
    Name: "Pram-Haag",
  },
  {
    id: 674,
    Value: "8100371",
    Name: "Graz Ostbf-Messe",
  },
  {
    id: 675,
    Value: "8100063",
    Name: "Landeck-Zams",
  },
  {
    id: 676,
    Value: "8100268",
    Name: "Hatzendorf",
  },
  {
    id: 677,
    Value: "8100300",
    Name: "Langkampfen",
  },
  {
    id: 678,
    Value: "8101238",
    Name: "Markt Paternion",
  },
  {
    id: 679,
    Value: "8100850",
    Name: "Glanegg",
  },
  {
    id: 680,
    Value: "8100157",
    Name: "Bad Ischl",
  },
  {
    id: 681,
    Value: "8100780",
    Name: "Felixdorf",
  },
  {
    id: 682,
    Value: "8101809",
    Name: "Wettmannstätten",
  },
  {
    id: 683,
    Value: "8101468",
    Name: "Säusenstein",
  },
  {
    id: 684,
    Value: "8101682",
    Name: "Trumau",
  },
  {
    id: 685,
    Value: "8100265",
    Name: "Haiding",
  },
  {
    id: 686,
    Value: "8102888",
    Name: "Wien Aspern Nord",
  },
  {
    id: 687,
    Value: "8100922",
    Name: "Wien Hadersdorf",
  },
  {
    id: 688,
    Value: "8100099",
    Name: "Wörgl Hbf",
  },
  {
    id: 689,
    Value: "8100193",
    Name: "Raaba",
  },
  {
    id: 690,
    Value: "8100639",
    Name: "Aurachkirchen",
  },
  {
    id: 691,
    Value: "8101560",
    Name: "St. Martin bei Traun",
  },
  {
    id: 692,
    Value: "8100363",
    Name: "Zellerndorf",
  },
  {
    id: 693,
    Value: "8100485",
    Name: "Scheibbs",
  },
  {
    id: 694,
    Value: "8100008",
    Name: "St.Pölten Hbf",
  },
  {
    id: 695,
    Value: "8101506",
    Name: "St.Georgen a.d.Mattig",
  },
  {
    id: 696,
    Value: "8100164",
    Name: "Bad Aussee",
  },
  {
    id: 697,
    Value: "8101717",
    Name: "Viehofen",
  },
  {
    id: 698,
    Value: "8100590",
    Name: "Stübing",
  },
  {
    id: 699,
    Value: "8101647",
    Name: "Tattendorf",
  },
  {
    id: 700,
    Value: "8101571",
    Name: "Wörgl Süd-Bruckhäusl",
  },
  {
    id: 701,
    Value: "8101376",
    Name: "Pöham",
  },
  {
    id: 702,
    Value: "8101469",
    Name: "Saxen",
  },
  {
    id: 703,
    Value: "8100783",
    Name: "Fentsch-St. Lorenzen",
  },
  {
    id: 704,
    Value: "8101450",
    Name: "Roßleithen",
  },
  {
    id: 705,
    Value: "8100642",
    Name: "Ausschlag-Zöbern",
  },
  {
    id: 706,
    Value: "8101265",
    Name: "Nettingsdorf",
  },
  {
    id: 707,
    Value: "8100503",
    Name: "St.Nikola-Struden",
  },
  {
    id: 708,
    Value: "8101502",
    Name: "St.Georgen a.d.Gusen Ort",
  },
  {
    id: 709,
    Value: "8101255",
    Name: "Neuhofen a.d.Krems",
  },
  {
    id: 710,
    Value: "8100258",
    Name: "Gries",
  },
  {
    id: 711,
    Value: "8100138",
    Name: "Radstadt",
  },
  {
    id: 712,
    Value: "8101723",
    Name: "Voitsdorf",
  },
  {
    id: 713,
    Value: "8100035",
    Name: "Leibnitz",
  },
  {
    id: 714,
    Value: "8100191",
    Name: "Pitten",
  },
  {
    id: 715,
    Value: "8100477",
    Name: "Rum",
  },
  {
    id: 716,
    Value: "8103487",
    Name: "Graz Liebenau-Murpark",
  },
  {
    id: 717,
    Value: "8100007",
    Name: "Ybbs a.d.Donau",
  },
  {
    id: 718,
    Value: "8100997",
    Name: "Herzogenburg-Wielandsthal",
  },
  {
    id: 719,
    Value: "8101408",
    Name: "Purkla",
  },
  {
    id: 720,
    Value: "8101332",
    Name: "Oberhofen-Zell am Moos",
  },
  {
    id: 721,
    Value: "8101521",
    Name: "Steinhaus bei Wels",
  },
  {
    id: 722,
    Value: "8100272",
    Name: "Herzogenburg",
  },
  {
    id: 723,
    Value: "8101431",
    Name: "Reichraming",
  },
  {
    id: 724,
    Value: "8100693",
    Name: "Breitensee NÖ",
  },
  {
    id: 725,
    Value: "8101504",
    Name: "St.Georgen ob Judenburg",
  },
  {
    id: 726,
    Value: "8100140",
    Name: "Eben im Pongau",
  },
  {
    id: 727,
    Value: "8100476",
    Name: "Rottenegg",
  },
  {
    id: 728,
    Value: "8100395",
    Name: "Wien Breitensee",
  },
  {
    id: 729,
    Value: "8100494",
    Name: "Neudörfl",
  },
  {
    id: 730,
    Value: "8101353",
    Name: "Pfarrwerfen",
  },
  {
    id: 731,
    Value: "8100450",
    Name: "Wien Penzing",
  },
  {
    id: 732,
    Value: "8101406",
    Name: "Puch bei Hallein",
  },
  {
    id: 733,
    Value: "8101530",
    Name: "St.Johann-Weistrach",
  },
  {
    id: 734,
    Value: "8102015",
    Name: "Mattersburg Nord",
  },
  {
    id: 735,
    Value: "8101277",
    Name: "Neunkirchen N.Ö.",
  },
  {
    id: 736,
    Value: "8101237",
    Name: "Mötz",
  },
  {
    id: 737,
    Value: "8101489",
    Name: "St.Egyden",
  },
  {
    id: 738,
    Value: "8101273",
    Name: "Niederöblarn",
  },
  {
    id: 739,
    Value: "8101065",
    Name: "Kottingneusiedl",
  },
  {
    id: 740,
    Value: "8100072",
    Name: "Knittelfeld",
  },
  {
    id: 741,
    Value: "8100089",
    Name: "Ehrwald-Zugspitzbahn",
  },
  {
    id: 742,
    Value: "8104229",
    Name: "Wien Stadlau",
  },
  {
    id: 743,
    Value: "8100359",
    Name: "Wolfsberg",
  },
  {
    id: 744,
    Value: "8100016",
    Name: "Schwanenstadt",
  },
  {
    id: 745,
    Value: "8102046",
    Name: "Asten-Fisching",
  },
  {
    id: 746,
    Value: "8101555",
    Name: "Geiselbergstraße",
  },
  {
    id: 747,
    Value: "8101219",
    Name: "Mitterberghütten",
  },
  {
    id: 748,
    Value: "8100999",
    Name: "Iglmühle",
  },
  {
    id: 749,
    Value: "8100869",
    Name: "Gerasdorf",
  },
  {
    id: 750,
    Value: "8101000",
    Name: "Imsterberg",
  },
  {
    id: 751,
    Value: "8100529",
    Name: "Pressegger See",
  },
  {
    id: 752,
    Value: "8100447",
    Name: "Wien Hütteldorf",
  },
  {
    id: 753,
    Value: "8101111",
    Name: "Ladendorf",
  },
  {
    id: 754,
    Value: "8100082",
    Name: "Spielfeld-Straß",
  },
  {
    id: 755,
    Value: "8100115",
    Name: "Reutte in Tirol",
  },
  {
    id: 756,
    Value: "8100038",
    Name: "Steindorf am Ossiachersee",
  },
  {
    id: 757,
    Value: "8100366",
    Name: "Brixen im Thale",
  },
  {
    id: 758,
    Value: "8100474",
    Name: "Rohrbach-Berg",
  },
  {
    id: 759,
    Value: "8100150",
    Name: "Selzthal",
  },
  {
    id: 760,
    Value: "8101012",
    Name: "Jedenspeigen",
  },
  {
    id: 761,
    Value: "8100090",
    Name: "Bregenz",
  },
  {
    id: 762,
    Value: "8100619",
    Name: "Angern",
  },
  {
    id: 763,
    Value: "8101646",
    Name: "Tassenbach",
  },
  {
    id: 764,
    Value: "8100465",
    Name: "Rattenberg-Kramsach",
  },
  {
    id: 765,
    Value: "8100052",
    Name: "Hochfilzen",
  },
  {
    id: 766,
    Value: "8100528",
    Name: "Pregarten",
  },
  {
    id: 767,
    Value: "8101386",
    Name: "Pruggern",
  },
  {
    id: 768,
    Value: "8100859",
    Name: "Gobelsburg",
  },
  {
    id: 769,
    Value: "8101051",
    Name: "Kledering",
  },
  {
    id: 770,
    Value: "8102047",
    Name: "Kuchl Garnei",
  },
  {
    id: 771,
    Value: "8100957",
    Name: "Hainfeld",
  },
  {
    id: 772,
    Value: "8100356",
    Name: "Wiesen-Sigleß",
  },
  {
    id: 773,
    Value: "8101080",
    Name: "Krieglach",
  },
  {
    id: 774,
    Value: "8100105",
    Name: "Hall in Tirol",
  },
  {
    id: 775,
    Value: "8100098",
    Name: "Dorfgastein",
  },
  {
    id: 776,
    Value: "8100531",
    Name: "Pürbach-Schrems",
  },
  {
    id: 777,
    Value: "8101858",
    Name: "Pernitz Wipfelhofstraße",
  },
  {
    id: 778,
    Value: "8101612",
    Name: "Steinbachbrücke",
  },
  {
    id: 779,
    Value: "8101396",
    Name: "Pottenbrunn",
  },
  {
    id: 780,
    Value: "8100171",
    Name: "Klaus",
  },
  {
    id: 781,
    Value: "8100766",
    Name: "Ebensee Landungsplatz",
  },
  {
    id: 782,
    Value: "8101788",
    Name: "Wittmannsdorf",
  },
  {
    id: 783,
    Value: "8101601",
    Name: "Schwertberg",
  },
  {
    id: 784,
    Value: "8100430",
    Name: "Neufelden",
  },
  {
    id: 785,
    Value: "8100556",
    Name: "Pflach",
  },
  {
    id: 786,
    Value: "8100104",
    Name: "Fritzens-Wattens",
  },
  {
    id: 787,
    Value: "8100148",
    Name: "Villach Westbf",
  },
  {
    id: 788,
    Value: "8100437",
    Name: "St.Martin im Innkreis",
  },
  {
    id: 789,
    Value: "8101783",
    Name: "Weissenstein-Kellerberg",
  },
  {
    id: 790,
    Value: "8102056",
    Name: "Unterretzbach",
  },
  {
    id: 791,
    Value: "8100524",
    Name: "Pill-Vomperbach",
  },
  {
    id: 792,
    Value: "8100638",
    Name: "Aurolzmünster",
  },
  {
    id: 793,
    Value: "8100950",
    Name: "Himberg",
  },
  {
    id: 794,
    Value: "8100808",
    Name: "Frättingsdorf",
  },
  {
    id: 795,
    Value: "8101119",
    Name: "Lehen-Altensam",
  },
  {
    id: 796,
    Value: "8100128",
    Name: "Trieben",
  },
  {
    id: 797,
    Value: "8102048",
    Name: "Salzburg Aiglhof",
  },
  {
    id: 798,
    Value: "8101261",
    Name: "Neubau-Kreuzstetten",
  },
  {
    id: 799,
    Value: "8101522",
    Name: "Sierndorf",
  },
  {
    id: 800,
    Value: "8101796",
    Name: "Wöllersdorf",
  },
  {
    id: 801,
    Value: "8101352",
    Name: "Pfaffstätten",
  },
  {
    id: 802,
    Value: "8100708",
    Name: "Bad Vöslau",
  },
  {
    id: 803,
    Value: "8101718",
    Name: "Bad Vigaun",
  },
  {
    id: 804,
    Value: "8102050",
    Name: "Hart bei Graz",
  },
  {
    id: 805,
    Value: "8101374",
    Name: "St.Pölten-Kaiserwald",
  },
  {
    id: 806,
    Value: "8100284",
    Name: "Katzelsdorf",
  },
  {
    id: 807,
    Value: "8100882",
    Name: "Grünbach am Schneeberg",
  },
  {
    id: 808,
    Value: "8100502",
    Name: "St.Martin-Sittich",
  },
  {
    id: 809,
    Value: "8100770",
    Name: "Eschenau",
  },
  {
    id: 810,
    Value: "8100021",
    Name: "Bad Schallerbach-Wallern",
  },
  {
    id: 811,
    Value: "8101877",
    Name: "Puch",
  },
  {
    id: 812,
    Value: "8101585",
    Name: "Sulz-Röthis",
  },
  {
    id: 813,
    Value: "8100834",
    Name: "Getzersdorf",
  },
  {
    id: 814,
    Value: "8100520",
    Name: "Petronell-Carnuntum",
  },
  {
    id: 815,
    Value: "8100745",
    Name: "Emmersdorf",
  },
  {
    id: 816,
    Value: "8101169",
    Name: "Loosdorf",
  },
  {
    id: 817,
    Value: "8100058",
    Name: "Westendorf",
  },
  {
    id: 818,
    Value: "8100342",
    Name: "Wampersdorf",
  },
  {
    id: 819,
    Value: "8101593",
    Name: "Schwarzsee",
  },
  {
    id: 820,
    Value: "8102006",
    Name: "Oberalm",
  },
  {
    id: 821,
    Value: "8101137",
    Name: "Lebring",
  },
  {
    id: 822,
    Value: "8100814",
    Name: "Furth",
  },
  {
    id: 823,
    Value: "8100318",
    Name: "Takern-St.Margarethen",
  },
  {
    id: 824,
    Value: "8101736",
    Name: "Wankham",
  },
  {
    id: 825,
    Value: "8100653",
    Name: "Bad Fischau-Brunn",
  },
  {
    id: 826,
    Value: "8101806",
    Name: "Weißenbach-St.Gallen",
  },
  {
    id: 827,
    Value: "8100536",
    Name: "Kefermarkt",
  },
  {
    id: 828,
    Value: "8100057",
    Name: "Kirchberg in Tirol",
  },
  {
    id: 829,
    Value: "8102016",
    Name: "Perg Schulzentrum",
  },
  {
    id: 830,
    Value: "8100108",
    Name: "Innsbruck Hbf",
  },
  {
    id: 831,
    Value: "8100357",
    Name: "Winden",
  },
  {
    id: 832,
    Value: "8100478",
    Name: "Mining",
  },
  {
    id: 833,
    Value: "8100263",
    Name: "Gurten",
  },
  {
    id: 834,
    Value: "8100637",
    Name: "Atzenbrugg",
  },
  {
    id: 835,
    Value: "8100892",
    Name: "Gries im Pinzgau",
  },
  {
    id: 836,
    Value: "8102049",
    Name: "Hallein Burgfried",
  },
  {
    id: 837,
    Value: "8100024",
    Name: "Schärding",
  },
  {
    id: 838,
    Value: "8100797",
    Name: "Föderlach",
  },
  {
    id: 839,
    Value: "8101622",
    Name: "St.Veit a.d.Gölsen",
  },
  {
    id: 840,
    Value: "8100672",
    Name: "Bad Mitterndorf-Heilbrunn",
  },
  {
    id: 841,
    Value: "8105987",
    Name: "Innsbruck Messe",
  },
  {
    id: 842,
    Value: "8100763",
    Name: "Ehrenhausen",
  },
  {
    id: 843,
    Value: "8101973",
    Name: "Rothengrub",
  },
  {
    id: 844,
    Value: "8101540",
    Name: "Schlierbach",
  },
  {
    id: 845,
    Value: "8100460",
    Name: "Klosterneuburg-Kierling",
  },
  {
    id: 846,
    Value: "8100396",
    Name: "Linz Urfahr",
  },
  {
    id: 847,
    Value: "8100791",
    Name: "Feldkirch-Amberg",
  },
  {
    id: 848,
    Value: "8101221",
    Name: "Mitterdorf-Veitsch",
  },
  {
    id: 849,
    Value: "8100698",
    Name: "Brunn-Maria Enzersdorf",
  },
  {
    id: 850,
    Value: "8101161",
    Name: "Laßnitzthal",
  },
  {
    id: 851,
    Value: "8100423",
    Name: "Münchendorf",
  },
  {
    id: 852,
    Value: "8100807",
    Name: "Linz Franckstraße",
  },
  {
    id: 853,
    Value: "8101325",
    Name: "Obertrattnach-M Hofk",
  },
  {
    id: 854,
    Value: "8100133",
    Name: "Öblarn",
  },
  {
    id: 855,
    Value: "8101650",
    Name: "Tullnerbach-Preßbaum",
  },
  {
    id: 856,
    Value: "8100586",
    Name: "Silz",
  },
  {
    id: 857,
    Value: "8101320",
    Name: "Ortmann",
  },
  {
    id: 858,
    Value: "8100532",
    Name: "Purbach am Neusiedlersee",
  },
  {
    id: 859,
    Value: "8100153",
    Name: "Traunkirchen",
  },
  {
    id: 860,
    Value: "8100571",
    Name: "Gutenstein",
  },
  {
    id: 861,
    Value: "8101529",
    Name: "St.Jodok",
  },
  {
    id: 862,
    Value: "8101449",
    Name: "Rosenau",
  },
  {
    id: 863,
    Value: "8100656",
    Name: "Baumgartenberg",
  },
  {
    id: 864,
    Value: "8100203",
    Name: "Tulln an der Donau",
  },
  {
    id: 865,
    Value: "8101592",
    Name: "Villach St.Ruprecht",
  },
  {
    id: 866,
    Value: "8100297",
    Name: "Wien Krottenbachstraße",
  },
  {
    id: 867,
    Value: "8100183",
    Name: "Rohrbach-Vorau",
  },
  {
    id: 868,
    Value: "8100290",
    Name: "Kirchbichl",
  },
  {
    id: 869,
    Value: "8101217",
    Name: "Michelhausen",
  },
  {
    id: 870,
    Value: "8100368",
    Name: "Fürnitz",
  },
  {
    id: 871,
    Value: "8101709",
    Name: "Unter Purkersdorf",
  },
  {
    id: 872,
    Value: "8100373",
    Name: "Kittsee",
  },
  {
    id: 873,
    Value: "8100457",
    Name: "Bernhardsthal",
  },
  {
    id: 874,
    Value: "8100101",
    Name: "Brixlegg",
  },
  {
    id: 875,
    Value: "8101243",
    Name: "St.Marein-St.Lorenzen",
  },
  {
    id: 876,
    Value: "8101124",
    Name: "Leobendorf-Burg Kreuzenstein",
  },
  {
    id: 877,
    Value: "8101917",
    Name: "Salzburg Süd",
  },
  {
    id: 878,
    Value: "8100548",
    Name: "Allerheiligenhöfe",
  },
  {
    id: 879,
    Value: "8101315",
    Name: "Ober Olberndorf",
  },
  {
    id: 880,
    Value: "8100795",
    Name: "Flaurling",
  },
  {
    id: 881,
    Value: "8101747",
    Name: "Walding",
  },
  {
    id: 882,
    Value: "8101287",
    Name: "Niedernfritz-St.Martin",
  },
  {
    id: 883,
    Value: "8100953",
    Name: "Hirschbach",
  },
  {
    id: 884,
    Value: "8101230",
    Name: "Mödling",
  },
  {
    id: 885,
    Value: "8100042",
    Name: "Bischofshofen",
  },
  {
    id: 886,
    Value: "8101851",
    Name: "Sölling",
  },
  {
    id: 887,
    Value: "8101510",
    Name: "St.Georgen am Steinfelde",
  },
  {
    id: 888,
    Value: "8101316",
    Name: "Ober Piesting",
  },
  {
    id: 889,
    Value: "8100845",
    Name: "Gunskirchen",
  },
  {
    id: 890,
    Value: "8101543",
    Name: "Schlins-Beschling",
  },
  {
    id: 891,
    Value: "8100163",
    Name: "Obertraun-Dachsteinhöhlen",
  },
  {
    id: 892,
    Value: "8100273",
    Name: "Hötzelsdorf-Geras",
  },
  {
    id: 893,
    Value: "8100959",
    Name: "Hainburg a.d.Donau Ungartor",
  },
  {
    id: 894,
    Value: "8101284",
    Name: "Nötsch",
  },
  {
    id: 895,
    Value: "8101071",
    Name: "Kothmühle",
  },
  {
    id: 896,
    Value: "8100022",
    Name: "Grieskirchen-Gallspach",
  },
  {
    id: 897,
    Value: "8100681",
    Name: "Bergern",
  },
  {
    id: 898,
    Value: "8100570",
    Name: "Großendorf",
  },
  {
    id: 899,
    Value: "8100986",
    Name: "Hatting",
  },
  {
    id: 900,
    Value: "8100894",
    Name: "Guntersdorf",
  },
  {
    id: 901,
    Value: "8100259",
    Name: "Schwechat",
  },
  {
    id: 902,
    Value: "8100154",
    Name: "Gaflenz",
  },
  {
    id: 903,
    Value: "8100413",
    Name: "Mauthausen",
  },
  {
    id: 904,
    Value: "8101534",
    Name: "Steinkogl",
  },
  {
    id: 905,
    Value: "8100513",
    Name: "Ottensheim",
  },
  {
    id: 906,
    Value: "8101712",
    Name: "Unterberg-Stefansbrücke",
  },
  {
    id: 907,
    Value: "8101670",
    Name: "Timelkam",
  },
  {
    id: 908,
    Value: "8100069",
    Name: "Frastanz",
  },
  {
    id: 909,
    Value: "8100178",
    Name: "Bierbaum",
  },
  {
    id: 910,
    Value: "8100192",
    Name: "Bad Erlach",
  },
  {
    id: 911,
    Value: "8100124",
    Name: "Lochau-Hörbranz",
  },
  {
    id: 912,
    Value: "8101696",
    Name: "Unter Höflein",
  },
  {
    id: 913,
    Value: "8100131",
    Name: "Liezen",
  },
  {
    id: 914,
    Value: "8101079",
    Name: "Kastenreith",
  },
  {
    id: 915,
    Value: "8100441",
    Name: "Wien Oberdöbling",
  },
  {
    id: 916,
    Value: "8101463",
    Name: "Saffen",
  },
  {
    id: 917,
    Value: "8102053",
    Name: "Oberhofen im Inntal",
  },
  {
    id: 918,
    Value: "8100518",
    Name: "Zeltweg",
  },
  {
    id: 919,
    Value: "8100331",
    Name: "Untereggendorf",
  },
  {
    id: 920,
    Value: "8101797",
    Name: "Wopfing",
  },
  {
    id: 921,
    Value: "8100205",
    Name: "Achau",
  },
  {
    id: 922,
    Value: "8101274",
    Name: "Nikolsdorf",
  },
  {
    id: 923,
    Value: "8100197",
    Name: "Feldkirch",
  },
  {
    id: 924,
    Value: "8100155",
    Name: "Ebensee",
  },
  {
    id: 925,
    Value: "8100186",
    Name: "Pinggau Markt",
  },
  {
    id: 926,
    Value: "8100190",
    Name: "Seebenstein",
  },
  {
    id: 927,
    Value: "8100031",
    Name: "Kapfenberg",
  },
  {
    id: 928,
    Value: "8101477",
    Name: "Siebenbrunn-Leopoldsdorf",
  },
  {
    id: 929,
    Value: "8101558",
    Name: "Salzburg Kasern",
  },
  {
    id: 930,
    Value: "8100246",
    Name: "Gaisbach-Wartberg",
  },
  {
    id: 931,
    Value: "8101180",
    Name: "Laa a.d.Thaya",
  },
  {
    id: 932,
    Value: "8101432",
    Name: "Rekawinkel",
  },
  {
    id: 933,
    Value: "8100068",
    Name: "Nenzing",
  },
  {
    id: 934,
    Value: "8100412",
    Name: "Micheldorf",
  },
  {
    id: 935,
    Value: "8101617",
    Name: "Schützen Haltestelle",
  },
  {
    id: 936,
    Value: "8100335",
    Name: "Vitis",
  },
  {
    id: 937,
    Value: "8100145",
    Name: "Dellach im Drautal",
  },
  {
    id: 938,
    Value: "8101791",
    Name: "Wiener Neustadt Nord",
  },
  {
    id: 939,
    Value: "8101644",
    Name: "Tallesbrunn",
  },
  {
    id: 940,
    Value: "8101652",
    Name: "Tauchendorf-Haidensee",
  },
  {
    id: 941,
    Value: "8101653",
    Name: "Trautmannsdorf a.d.L.",
  },
  {
    id: 942,
    Value: "8102068",
    Name: "Schalchen-Mattighofen",
  },
  {
    id: 943,
    Value: "8100407",
    Name: "Riedau",
  },
  {
    id: 944,
    Value: "8101122",
    Name: "Laxenburg-Biedermannsdorf",
  },
  {
    id: 945,
    Value: "8101335",
    Name: "Parndorf",
  },
  {
    id: 946,
    Value: "8100525",
    Name: "Pottendorf-Landegg",
  },
  {
    id: 947,
    Value: "8100037",
    Name: "Ossiach-Bodensdorf",
  },
  {
    id: 948,
    Value: "8100907",
    Name: "Grieswirt",
  },
  {
    id: 949,
    Value: "8101324",
    Name: "Oberthalheim-Timelkam",
  },
  {
    id: 950,
    Value: "8106003",
    Name: "St.Pölten Bildungscampus",
  },
  {
    id: 951,
    Value: "8101651",
    Name: "Trasdorf",
  },
  {
    id: 952,
    Value: "8100048",
    Name: "Zell am See",
  },
  {
    id: 953,
    Value: "8101416",
    Name: "Rabensburg",
  },
  {
    id: 954,
    Value: "8100235",
    Name: "Fischamend",
  },
  {
    id: 955,
    Value: "8100280",
    Name: "Jois",
  },
  {
    id: 956,
    Value: "8102055",
    Name: "Salzburg Sam",
  },
  {
    id: 957,
    Value: "8100584",
    Name: "Schlüßlberg",
  },
  {
    id: 958,
    Value: "8100735",
    Name: "Dürrwien",
  },
  {
    id: 959,
    Value: "8101702",
    Name: "Unterkritzendorf",
  },
  {
    id: 960,
    Value: "8100858",
    Name: "Grein Stadt",
  },
  {
    id: 961,
    Value: "8100393",
    Name: "Bleiburg",
  },
  {
    id: 962,
    Value: "8101419",
    Name: "Ramingdorf-Haidershofen",
  },
  {
    id: 963,
    Value: "8103842",
    Name: "Klagenfurt Süd",
  },
  {
    id: 964,
    Value: "8101826",
    Name: "Zöbing",
  },
  {
    id: 965,
    Value: "8100020",
    Name: "Steindorf bei Straßwalchen",
  },
  {
    id: 966,
    Value: "8100507",
    Name: "Vöcklabruck",
  },
  {
    id: 967,
    Value: "8101225",
    Name: "Mühling",
  },
  {
    id: 968,
    Value: "8101283",
    Name: "Nöstlbach-St.Marien",
  },
  {
    id: 969,
    Value: "8101370",
    Name: "Pernegg",
  },
  {
    id: 970,
    Value: "8101170",
    Name: "Wien Leopoldau",
  },
  {
    id: 971,
    Value: "8101391",
    Name: "Purgstall",
  },
  {
    id: 972,
    Value: "8101146",
    Name: "Leogang-Steinberge",
  },
  {
    id: 973,
    Value: "8100196",
    Name: "Studenzen-Fladnitz",
  },
  {
    id: 974,
    Value: "8100496",
    Name: "St.Andrä im Lavanttal",
  },
  {
    id: 975,
    Value: "8101822",
    Name: "Ziersdorf",
  },
  {
    id: 976,
    Value: "8101299",
    Name: "Oberhart",
  },
  {
    id: 977,
    Value: "8100070",
    Name: "Leoben Hbf",
  },
  {
    id: 978,
    Value: "8101833",
    Name: "Diensthubersiedlung",
  },
  {
    id: 979,
    Value: "8100553",
    Name: "Lähn",
  },
  {
    id: 980,
    Value: "8101573",
    Name: "Sonntagberg",
  },
  {
    id: 981,
    Value: "8100982",
    Name: "Haslau an der Donau",
  },
  {
    id: 982,
    Value: "8101685",
    Name: "Tisis",
  },
  {
    id: 983,
    Value: "8102009",
    Name: "Lengau",
  },
  {
    id: 984,
    Value: "8100127",
    Name: "Wald am Schoberpaß",
  },
  {
    id: 985,
    Value: "8100374",
    Name: "Kaiserebersdorf",
  },
  {
    id: 986,
    Value: "8101282",
    Name: "Neuhaus-Niederwaldkirchen",
  },
  {
    id: 987,
    Value: "8100774",
    Name: "Eugendorf",
  },
  {
    id: 988,
    Value: "8101664",
    Name: "Theresienfeld",
  },
  {
    id: 989,
    Value: "8100451",
    Name: "Zirl",
  },
  {
    id: 990,
    Value: "8101010",
    Name: "Jennersdorf",
  },
  {
    id: 991,
    Value: "8103840",
    Name: "Köttmannsdorf Lambichl",
  },
  {
    id: 992,
    Value: "8100983",
    Name: "Hirtenberg",
  },
  {
    id: 993,
    Value: "8100600",
    Name: "Aschbach Haltestelle",
  },
  {
    id: 994,
    Value: "8101195",
    Name: "Linz Wegscheid",
  },
  {
    id: 995,
    Value: "8100095",
    Name: "Bad Gastein",
  },
  {
    id: 996,
    Value: "8101342",
    Name: "Purkersdorf Sanatorium",
  },
  {
    id: 997,
    Value: "8100257",
    Name: "Greifenstein-Altenberg",
  },
  {
    id: 998,
    Value: "8100890",
    Name: "Groß Sierning",
  },
  {
    id: 999,
    Value: "8100011",
    Name: "Enns",
  },
  {
    id: 1000,
    Value: "8101329",
    Name: "Oberweiden",
  },
  {
    id: 1001,
    Value: "8100489",
    Name: "Munderfing",
  },
  {
    id: 1002,
    Value: "8101771",
    Name: "Wilfleinsdorf",
  },
  {
    id: 1003,
    Value: "8100047",
    Name: "Bruck-Fusch",
  },
  {
    id: 1004,
    Value: "8101605",
    Name: "Lilienfeld Krankenhaus",
  },
  {
    id: 1005,
    Value: "8100949",
    Name: "Hilm-Kematen",
  },
  {
    id: 1006,
    Value: "8100039",
    Name: "Feldkirchen in Kärnten",
  },
  {
    id: 1007,
    Value: "8101804",
    Name: "Wiesenfeld-Schwarzenbach",
  },
  {
    id: 1008,
    Value: "8100161",
    Name: "Admont",
  },
  {
    id: 1009,
    Value: "8101094",
    Name: "Klagenfurt Ostbf",
  },
  {
    id: 1010,
    Value: "8100491",
    Name: "Mureck",
  },
  {
    id: 1011,
    Value: "8100256",
    Name: "Grafenstein",
  },
  {
    id: 1012,
    Value: "8100488",
    Name: "Münster-Wiesing",
  },
  {
    id: 1013,
    Value: "8102058",
    Name: "Wöllersdorf Marchgraben",
  },
  {
    id: 1014,
    Value: "8100511",
    Name: "Weyer",
  },
  {
    id: 1015,
    Value: "8101755",
    Name: "Weissenbach-Neuhaus",
  },
  {
    id: 1016,
    Value: "8101658",
    Name: "Teichstätt",
  },
  {
    id: 1017,
    Value: "8100111",
    Name: "Hochzirl",
  },
  {
    id: 1018,
    Value: "8101587",
    Name: "Sitzenberg-Reidling",
  },
  {
    id: 1019,
    Value: "8100692",
    Name: "Breitenstein",
  },
  {
    id: 1020,
    Value: "8100103",
    Name: "Schwaz",
  },
  {
    id: 1021,
    Value: "8101947",
    Name: "Handelskai",
  },
  {
    id: 1022,
    Value: "8100204",
    Name: "Abfaltersbach",
  },
];
