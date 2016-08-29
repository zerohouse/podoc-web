(function () {

  var Pokemons = [{}, {"ko": "이상해씨", "attr": [0, 1], "en": "Bulbasaur"}, {
    "ko": "이상해풀",
    "attr": [0, 1],
    "en": "Ivysaur"
  }, {"ko": "이상해꽃", "attr": [0, 1], "en": "Venusaur"}, {"ko": "파이리", "attr": [2], "en": "Charmander"}, {
    "ko": "리자드",
    "attr": [2],
    "en": "Charmeleon"
  }, {"ko": "리자몽", "attr": [2, 6], "en": "Charizard"}, {"ko": "꼬부기", "attr": [3], "en": "Squirtle"}, {
    "ko": "어니부기",
    "attr": [3],
    "en": "Wartortle"
  }, {"ko": "거북왕", "attr": [3], "en": "Blastoise"}, {"ko": "캐터피", "attr": [11], "en": "Caterpie"}, {
    "ko": "단데기",
    "attr": [11],
    "en": "Metapod"
  }, {"ko": "버터플", "attr": [11, 6], "en": "Butterfree"}, {"ko": "뿔충이", "attr": [11, 1], "en": "Weedle"}, {
    "ko": "딱충이",
    "attr": [11, 1],
    "en": "Kakuna"
  }, {"ko": "독침붕", "attr": [11, 1], "en": "Beedrill"}, {"ko": "구구", "attr": [7, 6], "en": "Pidgey"}, {
    "ko": "피죤",
    "attr": [7, 6],
    "en": "Pidgeotto"
  }, {"ko": "피죤투", "attr": [7, 6], "en": "Pidgeot"}, {"ko": "꼬렛", "attr": [7], "en": "Rattata"}, {
    "ko": "레트라",
    "attr": [7],
    "en": "Raticate"
  }, {"ko": "깨비참", "attr": [7, 6], "en": "Spearow"}, {"ko": "깨비드릴조", "attr": [7, 6], "en": "Fearow"}, {
    "ko": "아보",
    "attr": [1],
    "en": "Ekans"
  }, {"ko": "아보크", "attr": [1], "en": "Arbok"}, {"ko": "피카츄", "attr": [4], "en": "Pikachu"}, {
    "ko": "라이츄",
    "attr": [4],
    "en": "Raichu"
  }, {"ko": "모래두지", "attr": [12], "en": "Sandshrew"}, {"ko": "고지", "attr": [12], "en": "Sandslash"}, {
    "ko": "니드런♀",
    "attr": [1],
    "en": "Nidoran♀"
  }, {"ko": "니드리나", "attr": [1], "en": "Nidorina"}, {"ko": "니드퀸", "attr": [1, 12], "en": "Nidoqueen"}, {
    "ko": "니드런♂",
    "attr": [1],
    "en": "Nidoran♂"
  }, {"ko": "니드리노", "attr": [1], "en": "Nidorino"}, {"ko": "니드킹", "attr": [1, 12], "en": "Nidoking"}, {
    "ko": "삐삐",
    "attr": [16],
    "en": "Clefairy"
  }, {"ko": "픽시", "attr": [16], "en": "Clefable"}, {"ko": "식스테일", "attr": [2], "en": "Vulpix"}, {
    "ko": "나인테일",
    "attr": [2],
    "en": "Ninetales"
  }, {"ko": "푸린", "attr": [7, 16], "en": "Jigglypuff"}, {"ko": "푸크린", "attr": [7, 16], "en": "Wigglytuff"}, {
    "ko": "주뱃",
    "attr": [1, 6],
    "en": "Zubat"
  }, {"ko": "골뱃", "attr": [1, 6], "en": "Golbat"}, {"ko": "뚜벅쵸", "attr": [0, 1], "en": "Oddish"}, {
    "ko": "냄새꼬",
    "attr": [0, 1],
    "en": "Gloom"
  }, {"ko": "라플레시아", "attr": [0, 1], "en": "Vileplume"}, {"ko": "파라스", "attr": [11, 0], "en": "Paras"}, {
    "ko": "파라섹트",
    "attr": [11, 0],
    "en": "Parasect"
  }, {"ko": "콘팡", "attr": [11, 1], "en": "Venonat"}, {"ko": "도나리", "attr": [11, 1], "en": "Venomoth"}, {
    "ko": "디그다",
    "attr": [12],
    "en": "Diglett"
  }, {"ko": "닥트리오", "attr": [12], "en": "Dugtrio"}, {"ko": "나옹", "attr": [7], "en": "Meowth"}, {
    "ko": "페르시안",
    "attr": [7],
    "en": "Persian"
  }, {"ko": "고라파덕", "attr": [3], "en": "Psyduck"}, {"ko": "골덕", "attr": [3], "en": "Golduck"}, {
    "ko": "망키",
    "attr": [13],
    "en": "Mankey"
  }, {"ko": "성원숭", "attr": [13], "en": "Primeape"}, {"ko": "가디", "attr": [2], "en": "Growlithe"}, {
    "ko": "윈디",
    "attr": [2],
    "en": "Arcanine"
  }, {"ko": "발챙이", "attr": [3], "en": "Poliwag"}, {"ko": "수륙챙이", "attr": [3], "en": "Poliwhirl"}, {
    "ko": "강챙이",
    "attr": [3, 13],
    "en": "Poliwrath"
  }, {"ko": "캐이시", "attr": [10], "en": "Abra"}, {"ko": "윤겔라", "attr": [10], "en": "Kadabra"}, {
    "ko": "후딘",
    "attr": [10],
    "en": "Alakazam"
  }, {"ko": "알통몬", "attr": [13], "en": "Machop"}, {"ko": "근육몬", "attr": [13], "en": "Machoke"}, {
    "ko": "괴력몬",
    "attr": [13],
    "en": "Machamp"
  }, {"ko": "모다피", "attr": [0, 1], "en": "Bellsprout"}, {
    "ko": "우츠동",
    "attr": [0, 1],
    "en": "Weepinbell"
  }, {"ko": "우츠보트", "attr": [0, 1], "en": "Victreebel"}, {"ko": "왕눈해", "attr": [3, 1], "en": "Tentacool"}, {
    "ko": "독파리",
    "attr": [3, 1],
    "en": "Tentacruel"
  }, {"ko": "꼬마돌", "attr": [5, 12], "en": "Geodude"}, {"ko": "데구리", "attr": [5, 12], "en": "Graveler"}, {
    "ko": "딱구리",
    "attr": [5, 12],
    "en": "Golem"
  }, {"ko": "포니타", "attr": [2], "en": "Ponyta"}, {"ko": "날쌩마", "attr": [2], "en": "Rapidash"}, {
    "ko": "야돈",
    "attr": [3, 10],
    "en": "Slowpoke"
  }, {"ko": "야도란", "attr": [3, 10], "en": "Slowbro"}, {"ko": "코일", "attr": [4, 14], "en": "Magnemite"}, {
    "ko": "레어코일",
    "attr": [4, 14],
    "en": "Magneton"
  }, {"ko": "파오리", "attr": [7, 6], "en": "Farfetch’d"}, {"ko": "두두", "attr": [7, 6], "en": "Doduo"}, {
    "ko": "두트리오",
    "attr": [7, 6],
    "en": "Dodrio"
  }, {"ko": "쥬쥬", "attr": [3], "en": "Seel"}, {"ko": "쥬레곤", "attr": [3, 8], "en": "Dewgong"}, {
    "ko": "질퍽이",
    "attr": [1],
    "en": "Grimer"
  }, {"ko": "질뻐기", "attr": [1], "en": "Muk"}, {"ko": "셀러", "attr": [3], "en": "Shellder"}, {
    "ko": "파르셀",
    "attr": [3, 8],
    "en": "Cloyster"
  }, {"ko": "고오스", "attr": [15], "en": "Gastly"}, {"ko": "고우스트", "attr": [15], "en": "Haunter"}, {
    "ko": "팬텀",
    "attr": [15],
    "en": "Genar"
  }, {"ko": "롱스톤", "attr": [5, 12], "en": "Onix"}, {"ko": "슬리프", "attr": [10], "en": "Drowzee"}, {
    "ko": "슬리퍼",
    "attr": [10],
    "en": "Hypno"
  }, {"ko": "크랩", "attr": [3], "en": "Krabby"}, {"ko": "킹크랩", "attr": [3], "en": "Kingler"}, {
    "ko": "찌리리공",
    "attr": [4],
    "en": "Voltorb"
  }, {"ko": "붐볼", "attr": [4], "en": "Electrode"}, {"ko": "아라리", "attr": [0, 10], "en": "Exeggcute"}, {
    "ko": "나시",
    "attr": [0, 10],
    "en": "Exeggutor"
  }, {"ko": "탕구리", "attr": [12], "en": "Cubone"}, {"ko": "텅구리", "attr": [12], "en": "Marowak"}, {
    "ko": "시라소몬",
    "attr": [13],
    "en": "Hitmonlee"
  }, {"ko": "홍수몬", "attr": [13], "en": "Hitmonchan"}, {"ko": "내루미", "attr": [7], "en": "Lickitung"}, {
    "ko": "또가스",
    "attr": [1],
    "en": "Koffing"
  }, {"ko": "또도가스", "attr": [1], "en": "Weezing"}, {"ko": "뿔카노", "attr": [12, 5], "en": "Rhyhorn"}, {
    "ko": "코뿌리",
    "attr": [12, 5],
    "en": "Rhydon"
  }, {"ko": "럭키", "attr": [7], "en": "Chansey"}, {"ko": "덩쿠리", "attr": [0], "en": "Tangela"}, {
    "ko": "캥카",
    "attr": [7],
    "en": "Kangaskhan"
  }, {"ko": "쏘드라", "attr": [3], "en": "Horsea"}, {"ko": "시드라", "attr": [3], "en": "Seadra"}, {
    "ko": "콘치",
    "attr": [3],
    "en": "Goldeen"
  }, {"ko": "왕콘치", "attr": [3], "en": "Seaking"}, {"ko": "별가사리", "attr": [3], "en": "Staryu"}, {
    "ko": "아쿠스타",
    "attr": [3, 10],
    "en": "Starmie"
  }, {"ko": "마임맨", "attr": [10, 16], "en": "Mr. Mime"}, {"ko": "스라크", "attr": [11, 6], "en": "Scyther"}, {
    "ko": "루주라",
    "attr": [8, 10],
    "en": "Jynx"
  }, {"ko": "에레브", "attr": [4], "en": "Electabuzz"}, {"ko": "마그마", "attr": [2], "en": "Magmar"}, {
    "ko": "쁘사이저",
    "attr": [11],
    "en": "Pinsir"
  }, {"ko": "켄타로스", "attr": [7], "en": "Tauros"}, {"ko": "잉어킹", "attr": [3], "en": "Magikarp"}, {
    "ko": "갸라도스",
    "attr": [3, 6],
    "en": "Gyarados"
  }, {"ko": "라프라스", "attr": [3, 8], "en": "Lapras"}, {"ko": "메타몽", "attr": [7], "en": "Ditto"}, {
    "ko": "이브이",
    "attr": [7],
    "en": "Eevee"
  }, {"ko": "샤미드", "attr": [3], "en": "Vaporeon"}, {"ko": "쥬피썬더", "attr": [4], "en": "Jolteon"}, {
    "ko": "부스터",
    "attr": [2],
    "en": "Flareon"
  }, {"ko": "폴리곤", "attr": [7], "en": "Porygon"}, {"ko": "암나이트", "attr": [5, 0], "en": "Omanyte"}, {
    "ko": "암스타",
    "attr": [5, 0],
    "en": "Omastar"
  }, {"ko": "투구", "attr": [5, 3], "en": "Kabuto"}, {"ko": "투구푸스", "attr": [5, 3], "en": "Kabutops"}, {
    "ko": "프테라",
    "attr": [5, 6],
    "en": "Aerodactyl"
  }, {"ko": "잠만보", "attr": [7], "en": "Snorlax"}, {"ko": "프리져", "attr": [8, 6], "en": "Articuno"}, {
    "ko": "썬더",
    "attr": [4, 6],
    "en": "Zapdos"
  }, {"ko": "파이어", "attr": [2, 6], "en": "Moltres"}, {"ko": "미뇽", "attr": [9], "en": "Dratini"}, {
    "ko": "신뇽",
    "attr": [9],
    "en": "Dragonair"
  }, {"ko": "망나뇽", "attr": [9, 6], "en": "Dragonite"}, {"ko": "뮤츠", "attr": [10], "en": "Mewtwo"}, {
    "ko": "뮤",
    "attr": [10],
    "en": "Mew"
  }];
  var skills = [{"id": 13, "attack": 25, "ko": "김밥말이", "type": 7, "en": "Wrap", "cooldown": 4, "energy": -20}, {
    "id": 14,
    "attack": 120,
    "ko": "파괴광선",
    "type": 7,
    "en": "Hyper Beam",
    "cooldown": 5,
    "energy": -100
  }, {"id": 16, "attack": 45, "ko": "악의 파동", "type": 17, "en": "Dark Pulse", "cooldown": 3.5, "energy": -33}, {
    "id": 18,
    "attack": 30,
    "ko": "오물폭탄",
    "type": 1,
    "en": "Sludge",
    "cooldown": 2.6,
    "energy": -25
  }, {"id": 20, "attack": 25, "ko": "찝기", "type": 7, "en": "Vice Grip", "cooldown": 2.1, "energy": -20}, {
    "id": 21,
    "attack": 40,
    "ko": "화염자동차",
    "type": 2,
    "en": "Flame Wheel",
    "cooldown": 4.6,
    "energy": -25
  }, {"id": 22, "attack": 80, "ko": "메가폰", "type": 11, "en": "Megahorn", "cooldown": 3.2, "energy": -100}, {
    "id": 24,
    "attack": 55,
    "ko": "화염방사",
    "type": 2,
    "en": "Flamethrower",
    "cooldown": 2.9,
    "energy": -50
  }, {"id": 26, "attack": 70, "ko": "구멍파기", "type": 12, "en": "Dig", "cooldown": 5.8, "energy": -33}, {
    "id": 28,
    "attack": 60,
    "ko": "크로스촙",
    "type": 13,
    "en": "Cross Chop",
    "cooldown": 2,
    "energy": -100
  }, {"id": 30, "attack": 40, "ko": "환상빔", "type": 10, "en": "Psybeam", "cooldown": 3.8, "energy": -25}, {
    "id": 31,
    "attack": 100,
    "ko": "지진",
    "type": 12,
    "en": "Earthquake",
    "cooldown": 4.2,
    "energy": -100
  }, {"id": 32, "attack": 80, "ko": "스톤에지", "type": 5, "en": "Stone Edge", "cooldown": 3.1, "energy": -100}, {
    "id": 33,
    "attack": 45,
    "ko": "냉동펀치",
    "type": 8,
    "en": "Ice Punch",
    "cooldown": 3.5,
    "energy": -33
  }, {"id": 34, "attack": 20, "ko": "하트스탬프", "type": 10, "en": "Heart Stamp"}, {
    "id": 35,
    "attack": 35,
    "ko": "방전",
    "type": 4,
    "en": "Discharge",
    "cooldown": 2.5,
    "energy": -33
  }, {
    "id": 36,
    "attack": 60,
    "ko": "러스터캐논",
    "type": 14,
    "en": "Flash Cannon",
    "cooldown": 3.9,
    "energy": -33
  }, {"id": 38, "attack": 40, "ko": "회전부리", "type": 6, "en": "Drill Peck", "cooldown": 2.7, "energy": -33}, {
    "id": 39,
    "attack": 65,
    "ko": "냉동빔",
    "type": 8,
    "en": "Ice Beam",
    "cooldown": 3.65,
    "energy": -50
  }, {"id": 40, "attack": 100, "ko": "눈보라", "type": 8, "en": "Blizzard", "cooldown": 3.9, "energy": -100}, {
    "id": 42,
    "attack": 80,
    "ko": "열풍",
    "type": 2,
    "en": "Heat Wave",
    "cooldown": 3.8,
    "energy": -100
  }, {"id": 45, "attack": 30, "ko": "제비반환", "type": 6, "en": "Aerial Ace", "cooldown": 2.9, "energy": -25}, {
    "id": 46,
    "attack": 50,
    "ko": "드릴라이너",
    "type": 12,
    "en": "Drill Run",
    "cooldown": 3.4,
    "energy": -33
  }, {"id": 47, "attack": 65, "ko": "꽃보라", "type": 0, "en": "Petal Blizzard", "cooldown": 3.2, "energy": -50}, {
    "id": 48,
    "attack": 15,
    "ko": "메가드레인",
    "type": 0,
    "en": "Mega Drain"
  }, {
    "id": 49,
    "attack": 75,
    "ko": "벌레의 야단법석",
    "type": 11,
    "en": "Bug Buzz",
    "cooldown": 4.25,
    "energy": -50
  }, {"id": 50, "attack": 25, "ko": "독엄니", "type": 1, "en": "Poison Fang", "cooldown": 2.4, "energy": -20}, {
    "id": 51,
    "attack": 30,
    "ko": "깜짝베기",
    "type": 17,
    "en": "Night Slash",
    "cooldown": 2.7,
    "energy": -25
  }, {"id": 53, "attack": 30, "ko": "거품광선", "type": 3, "en": "Bubble Beam", "cooldown": 2.9, "energy": -25}, {
    "id": 54,
    "attack": 30,
    "ko": "지옥의 바퀴",
    "type": 13,
    "en": "Submission",
    "cooldown": 2.1,
    "energy": -33
  }, {"id": 56, "attack": 30, "ko": "로킥", "type": 13, "en": "Low Sweep", "cooldown": 2.25, "energy": -25}, {
    "id": 57,
    "attack": 25,
    "ko": "아쿠아제트",
    "type": 3,
    "en": "Aqua Jet",
    "cooldown": 2.35,
    "energy": -20
  }, {"id": 58, "attack": 45, "ko": "아쿠아테일", "type": 3, "en": "Aqua Tail", "cooldown": 2.35, "energy": -50}, {
    "id": 59,
    "attack": 40,
    "ko": "씨폭탄",
    "type": 0,
    "en": "Seed Bomb",
    "cooldown": 2.4,
    "energy": -33
  }, {"id": 60, "attack": 40, "ko": "사이코쇼크", "type": 10, "en": "Psyshock", "cooldown": 2.7, "energy": -33}, {
    "id": 62,
    "attack": 35,
    "ko": "원시의힘",
    "type": 5,
    "en": "Ancient Power",
    "cooldown": 3.6,
    "energy": -25
  }, {"id": 63, "attack": 30, "ko": "암석봉인", "type": 5, "en": "Rock Tomb", "cooldown": 3.4, "energy": -25}, {
    "id": 64,
    "attack": 50,
    "ko": "스톤샤워",
    "type": 5,
    "en": "Rock Slide",
    "cooldown": 3.2,
    "energy": -33
  }, {"id": 65, "attack": 40, "ko": "파워젬", "type": 5, "en": "Power Gem", "cooldown": 2.9, "energy": -33}, {
    "id": 66,
    "attack": 15,
    "ko": "야습",
    "type": 15,
    "en": "Shadow Sneak"
  }, {"id": 67, "attack": 20, "ko": "섀도펀치", "type": 15, "en": "Shadow Punch"}, {
    "id": 69,
    "attack": 30,
    "ko": "괴상한바람",
    "type": 15,
    "en": "Ominous Wind",
    "cooldown": 3.1,
    "energy": -25
  }, {"id": 70, "attack": 45, "ko": "섀도볼", "type": 15, "en": "Shadow Ball", "cooldown": 3.08, "energy": -33}, {
    "id": 72,
    "attack": 30,
    "ko": "마그넷봄",
    "type": 14,
    "en": "Magnet Bomb",
    "cooldown": 2.8,
    "energy": -25
  }, {"id": 74, "attack": 30, "ko": "아이언헤드", "type": 14, "en": "Iron Head", "cooldown": 2, "energy": -33}, {
    "id": 75,
    "attack": 15,
    "ko": "파라볼라차지",
    "type": 4,
    "en": "Parabolic Charge"
  }, {"id": 77, "attack": 40, "ko": "번개펀치", "type": 4, "en": "Thunder Punch", "cooldown": 2.4, "energy": -33}, {
    "id": 78,
    "attack": 100,
    "ko": "번개",
    "type": 4,
    "en": "Thunder",
    "cooldown": 4.3,
    "energy": -100
  }, {"id": 79, "attack": 55, "ko": "10만볼트", "type": 4, "en": "Thunderbolt", "cooldown": 2.7, "energy": -50}, {
    "id": 80,
    "attack": 25,
    "ko": "회오리",
    "type": 9,
    "en": "Twister",
    "cooldown": 2.7,
    "energy": -20
  }, {"id": 82, "attack": 65, "ko": "용의파동", "type": 9, "en": "Dragon Pulse", "cooldown": 3.6, "energy": -50}, {
    "id": 83,
    "attack": 35,
    "ko": "드래곤크루",
    "type": 9,
    "en": "Dragon Claw",
    "cooldown": 1.6,
    "energy": -50
  }, {
    "id": 84,
    "attack": 25,
    "ko": "차밍보이스",
    "type": 16,
    "en": "Disarming Voice",
    "cooldown": 3.9,
    "energy": -20
  }, {
    "id": 85,
    "attack": 25,
    "ko": "드레인키스",
    "type": 16,
    "en": "Draining Kiss",
    "cooldown": 2.8,
    "energy": -20
  }, {
    "id": 86,
    "attack": 55,
    "ko": "매지컬샤인",
    "type": 16,
    "en": "Dazzling Gleam",
    "cooldown": 4.2,
    "energy": -33
  }, {"id": 87, "attack": 85, "ko": "문포스", "type": 16, "en": "Moonblast", "cooldown": 4.1, "energy": -100}, {
    "id": 88,
    "attack": 55,
    "ko": "치근거리기",
    "type": 16,
    "en": "Play Rough",
    "cooldown": 2.9,
    "energy": -50
  }, {
    "id": 89,
    "attack": 25,
    "ko": "크로스포이즌",
    "type": 1,
    "en": "Cross Poison",
    "cooldown": 1.5,
    "energy": -25
  }, {"id": 90, "attack": 55, "ko": "오물폭탄", "type": 1, "en": "Sludge Bomb", "cooldown": 2.6, "energy": -50}, {
    "id": 91,
    "attack": 70,
    "ko": "오물웨이브",
    "type": 1,
    "en": "Sludge Wave",
    "cooldown": 3.4,
    "energy": -100
  }, {"id": 92, "attack": 65, "ko": "더스트슈트", "type": 1, "en": "Gunk Shot", "cooldown": 3, "energy": -100}, {
    "id": 94,
    "attack": 25,
    "ko": "뼈다귀치기",
    "type": 12,
    "en": "Bone Club",
    "cooldown": 1.6,
    "energy": -25
  }, {"id": 95, "attack": 35, "ko": "땅고르기", "type": 12, "en": "Bulldoze", "cooldown": 3.4, "energy": -25}, {
    "id": 96,
    "attack": 30,
    "ko": "진흙폭탄",
    "type": 12,
    "en": "Mud Bomb",
    "cooldown": 2.6,
    "energy": -25
  }, {"id": 99, "attack": 45, "ko": "시그널빔", "type": 11, "en": "Signal Beam", "cooldown": 3.1, "energy": -33}, {
    "id": 100,
    "attack": 35,
    "ko": "시저크로스",
    "type": 11,
    "en": "X-Scissor",
    "cooldown": 2.1,
    "energy": -33
  }, {
    "id": 101,
    "attack": 25,
    "ko": "니트로차지",
    "type": 2,
    "en": "Flame Charge",
    "cooldown": 3.1,
    "energy": -20
  }, {
    "id": 102,
    "attack": 30,
    "ko": "불꽃튀기기",
    "type": 2,
    "en": "Flame Burst",
    "cooldown": 2.1,
    "energy": -25
  }, {
    "id": 103,
    "attack": 100,
    "ko": "불대문자",
    "type": 2,
    "en": "Fire Blast",
    "cooldown": 4.1,
    "energy": -100
  }, {"id": 104, "attack": 25, "ko": "소금물", "type": 3, "en": "Brine", "cooldown": 2.4, "energy": -25}, {
    "id": 105,
    "attack": 35,
    "ko": "물의파동",
    "type": 3,
    "en": "Water Pulse",
    "cooldown": 3.3,
    "energy": -25
  }, {"id": 106, "attack": 55, "ko": "열탕", "type": 3, "en": "Scald", "cooldown": 4, "energy": -33}, {
    "id": 107,
    "attack": 90,
    "ko": "하이드로펌프",
    "type": 3,
    "en": "Hydro Pump",
    "cooldown": 3.8,
    "energy": -100
  }, {"id": 108, "attack": 55, "ko": "사이코키네시스", "type": 10, "en": "Psychic", "cooldown": 2.8, "energy": -50}, {
    "id": 109,
    "attack": 70,
    "ko": "사이코브레이크",
    "type": 10,
    "en": "Psystrike"
  }, {"id": 111, "attack": 25, "ko": "얼다바람", "type": 8, "en": "Icy Wind", "cooldown": 3.8, "energy": -20}, {
    "id": 114,
    "attack": 35,
    "ko": "기가드레인",
    "type": 0,
    "en": "Giga Drain"
  }, {"id": 115, "attack": 40, "ko": "불꽃펀치", "type": 2, "en": "Fire Punch", "cooldown": 2.8, "energy": -33}, {
    "id": 116,
    "attack": 120,
    "ko": "솔라빔",
    "type": 0,
    "en": "Solar Beam",
    "cooldown": 4.9,
    "energy": -100
  }, {
    "id": 117,
    "attack": 45,
    "ko": "리프블레이드",
    "type": 0,
    "en": "Leaf Blade",
    "cooldown": 2.8,
    "energy": -50
  }, {"id": 118, "attack": 70, "ko": "파워휩", "type": 0, "en": "Power Whip", "cooldown": 2.8, "energy": -100}, {
    "id": 121,
    "attack": 30,
    "ko": "에어컷터",
    "type": 6,
    "en": "Air Cutter",
    "cooldown": 3.3,
    "energy": -25
  }, {"id": 122, "attack": 80, "ko": "폭풍", "type": 6, "en": "Hurricane", "cooldown": 3.2, "energy": -100}, {
    "id": 123,
    "attack": 30,
    "ko": "깨트리다",
    "type": 13,
    "en": "Brick Break",
    "cooldown": 1.6,
    "energy": -33
  }, {"id": 125, "attack": 30, "ko": "스피드스타", "type": 7, "en": "Swift", "cooldown": 3, "energy": -25}, {
    "id": 126,
    "attack": 25,
    "ko": "뿔찌르기",
    "type": 7,
    "en": "Horn Attack",
    "cooldown": 2.2,
    "energy": -25
  }, {"attack": 30, "ko": "짓밟기", "type": 7, "en": "Stomp", "cooldown": 2.1, "energy": -25}, {
    "id": 129,
    "attack": 35,
    "ko": "필살앞니",
    "type": 7,
    "en": "Hyper Fang",
    "cooldown": 2.1,
    "energy": -33
  }, {"id": 131, "attack": 40, "ko": "누르기", "type": 7, "en": "Body Slam", "cooldown": 1.56, "energy": -50}, {
    "id": 132,
    "attack": 35,
    "ko": "잠자기",
    "type": 7,
    "en": "Rest"
  }, {"id": 133, "attack": 15, "ko": "발버둥", "type": 7, "en": "Struggle", "cooldown": 1.7, "energy": -20}, {
    "id": 134,
    "attack": 35,
    "ko": "열탕",
    "type": 3,
    "en": "Scald*",
    "cooldown": 4,
    "energy": -33
  }, {
    "id": 135,
    "attack": 60,
    "ko": "하이드로펌프",
    "type": 3,
    "en": "Hydro Pump*",
    "cooldown": 3.8,
    "energy": -100
  }, {"id": 136, "attack": 15, "ko": "김밥말이", "type": 7, "en": "Wrap*", "cooldown": 4, "energy": -20}, {
    "id": 137,
    "attack": 15,
    "ko": "김밥말이",
    "type": 7,
    "en": "Wrap*",
    "cooldown": 4,
    "energy": -20
  }, {"id": 200, "attack": 3, "ko": "연속자르기", "type": 11, "en": "Fury Cutter", "cooldown": 0.4, "energy": 6}, {
    "id": 201,
    "attack": 5,
    "ko": "벌레먹음",
    "type": 11,
    "en": "Bug Bite",
    "cooldown": 0.45,
    "energy": 7
  }, {"id": 202, "attack": 6, "ko": "물기", "type": 17, "en": "Bite", "cooldown": 0.5, "energy": 7}, {
    "id": 203,
    "attack": 7,
    "ko": "기습",
    "type": 17,
    "en": "Sucker Punch",
    "cooldown": 0.7,
    "energy": 9
  }, {"id": 204, "attack": 6, "ko": "용의숨결", "type": 9, "en": "Dragon Breath", "cooldown": 0.5, "energy": 7}, {
    "id": 205,
    "attack": 5,
    "ko": "전기쇼크",
    "type": 4,
    "en": "Thunder Shock",
    "cooldown": 0.6,
    "energy": 8
  }, {"id": 206, "attack": 7, "ko": "스파크", "type": 4, "en": "Spark", "cooldown": 0.7, "energy": 8}, {
    "id": 207,
    "attack": 5,
    "ko": "안다리걸기",
    "type": 13,
    "en": "Low Kick",
    "cooldown": 0.6,
    "energy": 7
  }, {"id": 208, "attack": 6, "ko": "태권당수", "type": 13, "en": "Karate Chop", "cooldown": 0.8, "energy": 8}, {
    "id": 209,
    "attack": 10,
    "ko": "불꽃세례",
    "type": 2,
    "en": "Ember",
    "cooldown": 1.05,
    "energy": 10
  }, {"id": 210, "attack": 9, "ko": "날개치기", "type": 6, "en": "Wing Attack", "cooldown": 0.75, "energy": 7}, {
    "id": 211,
    "attack": 10,
    "ko": "쪼기",
    "type": 6,
    "en": "Peck",
    "cooldown": 1.15,
    "energy": 10
  }, {"id": 212, "attack": 5, "ko": "핥기", "type": 15, "en": "Lick", "cooldown": 0.5, "energy": 6}, {
    "id": 213,
    "attack": 11,
    "ko": "섀도크루",
    "type": 15,
    "en": "Shadow Claw",
    "cooldown": 0.95,
    "energy": 8
  }, {"id": 214, "attack": 7, "ko": "덩굴채찍", "type": 0, "en": "Vine Whip", "cooldown": 0.65, "energy": 7}, {
    "id": 215,
    "attack": 15,
    "ko": "잎날가르기",
    "type": 0,
    "en": "Razor Leaf",
    "cooldown": 1.45,
    "energy": 12
  }, {"id": 216, "attack": 6, "ko": "머드숏", "type": 12, "en": "Mud Shot", "cooldown": 0.55, "energy": 7}, {
    "id": 217,
    "attack": 15,
    "ko": "얼음뭉치",
    "type": 8,
    "en": "Ice Shard",
    "cooldown": 1.4,
    "energy": 7
  }, {"id": 218, "attack": 9, "ko": "얼음숨결", "type": 8, "en": "Frost Breath", "cooldown": 0.81, "energy": 7}, {
    "id": 219,
    "attack": 10,
    "ko": "전광석화",
    "type": 7,
    "en": "Quick Attack",
    "cooldown": 1.33,
    "energy": 7
  }, {"id": 220, "attack": 6, "ko": "할퀴기", "type": 7, "en": "Scratch", "cooldown": 0.5, "energy": 7}, {
    "id": 221,
    "attack": 12,
    "ko": "몸통박치기",
    "type": 7,
    "en": "Tackle",
    "cooldown": 1.1,
    "energy": 10
  }, {"id": 222, "attack": 7, "ko": "막치기", "type": 7, "en": "Pound", "cooldown": 0.54, "energy": 7}, {
    "id": 223,
    "attack": 12,
    "ko": "풀베기",
    "type": 7,
    "en": "Cut",
    "cooldown": 1.13,
    "energy": 10
  }, {"id": 224, "attack": 12, "ko": "독찌르기", "type": 1, "en": "Poison Jab", "cooldown": 1.05, "energy": 10}, {
    "id": 225,
    "attack": 10,
    "ko": "용해액",
    "type": 1,
    "en": "Acid",
    "cooldown": 1.05,
    "energy": 10
  }, {"id": 226, "attack": 7, "ko": "사이코커터", "type": 10, "en": "Psycho Cut", "cooldown": 0.57, "energy": 7}, {
    "id": 227,
    "attack": 12,
    "ko": "돌떨구기",
    "type": 5,
    "en": "Rock Throw",
    "cooldown": 1.36,
    "energy": 15
  }, {"id": 228, "attack": 8, "ko": "메탈크로우", "type": 14, "en": "Metal Claw", "cooldown": 0.63, "energy": 7}, {
    "id": 229,
    "attack": 10,
    "ko": "불릿펀치",
    "type": 14,
    "en": "Bullet Punch",
    "cooldown": 1.2,
    "energy": 10
  }, {"id": 230, "attack": 6, "ko": "물대포", "type": 3, "en": "Water Gun", "cooldown": 0.5, "energy": 7}, {
    "id": 231,
    "attack": 0,
    "ko": "튀어오르기",
    "type": 3,
    "en": "Splash",
    "cooldown": 1.23,
    "energy": 10
  }, {"id": 232, "attack": 6, "ko": "물대포", "type": 3, "en": "Water Gun*", "cooldown": 0.5, "energy": 7}, {
    "id": 233,
    "attack": 15,
    "ko": "진흙뿌리기",
    "type": 12,
    "en": "Mud Slap",
    "cooldown": 1.35,
    "energy": 12
  }, {
    "id": 234,
    "attack": 12,
    "ko": "사념의박치기",
    "type": 10,
    "en": "Zen Headbutt",
    "cooldown": 1.05,
    "energy": 9
  }, {"id": 235, "attack": 15, "ko": "염동력", "type": 10, "en": "Confusion", "cooldown": 1.51, "energy": 14}, {
    "id": 236,
    "attack": 6,
    "ko": "독침",
    "type": 1,
    "en": "Poison Sting",
    "cooldown": 0.58,
    "energy": 8
  }, {"id": 237, "attack": 25, "ko": "거품", "type": 3, "en": "Bubble", "cooldown": 2.3, "energy": 25}, {
    "id": 238,
    "attack": 12,
    "ko": "속여때리기",
    "type": 17,
    "en": "Feint Attack",
    "cooldown": 1.04,
    "energy": 10
  }, {"id": 239, "attack": 15, "ko": "강철날개", "type": 14, "en": "Steel Wing", "cooldown": 1.33, "energy": 12}, {
    "id": 240,
    "attack": 10,
    "ko": "불꽃엄니",
    "type": 2,
    "en": "Fire Fang",
    "cooldown": 0.84,
    "energy": 8
  }, {"id": 241, "attack": 15, "ko": "바위깨기", "type": 13, "en": "Rock Smash", "cooldown": 1.41, "energy": 7}];


  var attrs = [{
    "ko": "풀",
    "en": "Grass",
    "attack": {"strong": [12, 5, 3], "weak": [11, 9, 2, 6, 0, 1, 14]},
    "defense": {"strong": [0, 3, 4, 12], "weak": [1, 2, 6, 8, 9, 11]},
    "id": 0
  }, {
    "ko": "독",
    "en": "Poison",
    "attack": {"strong": [16, 0], "weak": [10, 12, 1, 5]},
    "defense": {"strong": [0, 1, 11, 13, 16], "weak": [10, 12, 15]},
    "id": 1
  }, {
    "ko": "불",
    "en": "Fire",
    "attack": {"strong": [11, 0, 8, 14], "weak": [9, 2, 5, 3]},
    "defense": {"strong": [0, 2, 8, 11, 14, 16], "weak": [3, 5, 9, 12]},
    "id": 2
  }, {
    "ko": "물",
    "en": "Water",
    "attack": {"strong": [2, 5, 12], "weak": [9, 0, 3]},
    "defense": {"strong": [2, 3, 8, 14], "weak": [0, 4, 9]},
    "id": 3
  }, {
    "ko": "전기",
    "en": "Electric",
    "attack": {"strong": [6, 3], "weak": [9, 4, 0]},
    "defense": {"strong": [4, 6, 14], "weak": [9, 12]},
    "id": 4
  }, {
    "ko": "바위",
    "en": "Rock",
    "attack": {"strong": [11, 2, 6, 8], "weak": [13, 14, 12]},
    "defense": {"strong": [1, 2, 6, 7], "weak": [0, 3, 12, 13, 14]},
    "id": 5
  }, {
    "ko": "비행",
    "en": "Flying",
    "attack": {"strong": [13, 11, 0], "weak": [4, 5, 14]},
    "defense": {"strong": [0, 11, 13], "weak": [4, 5, 8]},
    "id": 6
  }, {
    "ko": "노말",
    "en": "Normal",
    "attack": {"strong": [], "weak": [5, 14]},
    "defense": {"strong": [], "weak": [13]},
    "id": 7
  }, {
    "ko": "얼음",
    "en": "Ice",
    "attack": {"strong": [9, 6, 0, 12], "weak": [2, 8, 14, 3]},
    "defense": {"strong": [8, 9], "weak": [2, 5, 13, 14]},
    "id": 8
  }, {
    "ko": "드래곤",
    "en": "Dragon",
    "attack": {"strong": [4, 2, 0, 3], "weak": [9, 16, 8]},
    "defense": {"strong": [0, 2, 3, 4, 9], "weak": [8, 16]},
    "id": 9
  }, {
    "ko": "에스퍼",
    "en": "Psychic",
    "attack": {"strong": [13, 1], "weak": [10, 14]},
    "defense": {"strong": [1, 10, 13], "weak": [11, 17]},
    "id": 10
  }, {
    "ko": "벌레",
    "en": "Bug",
    "attack": {"strong": [10, 0, 17], "weak": [16, 13, 2, 6, 15, 1, 14]},
    "defense": {"strong": [0, 12, 13], "weak": [2, 5, 6, 15]},
    "id": 11
  }, {
    "ko": "땅",
    "en": "Ground",
    "attack": {"strong": [4, 2, 1, 5, 14], "weak": [11, 0]},
    "defense": {"strong": [1, 5], "weak": [0, 3, 8]},
    "id": 12
  }, {
    "ko": "격투",
    "en": "Fighting",
    "attack": {"strong": [7, 8, 5, 14, 17], "weak": [11, 16, 6, 10, 1]},
    "defense": {"strong": [5, 11, 17], "weak": [6, 10, 16]},
    "id": 13
  }, {
    "ko": "강철",
    "en": "Steel",
    "attack": {"strong": [16, 8, 5], "weak": [4, 2, 14, 3]},
    "defense": {"strong": [0, 5, 6, 7, 8, 10, 11, 14, 16], "weak": [2, 12, 13]},
    "id": 14
  }, {
    "ko": "고스트",
    "en": "Ghost",
    "attack": {"strong": [11, 1], "weak": [15, 17]},
    "defense": {"strong": [11, 15], "weak": [17]},
    "id": 15
  }, {
    "ko": "요정",
    "en": "Fairy",
    "attack": {"strong": [9, 13, 17], "weak": [2, 1, 14]},
    "defense": {"strong": [9, 11, 13, 17], "weak": [1, 14]},
    "id": 16
  },
    {
      "ko": "암흑",
      "en": "Dark",
      "attack": {"strong": [15, 10], "weak": [17, 16, 13]},
      "defense": {"strong": [17, 15], "weak": [11, 16, 13]},
      "id": 17
    }
  ];

  skills.forEach(function (skill) {
    skill.type = attrs[skill.type];
  });

  var rare = [0, 2, 6, 7, 2, 6, 7, 2, 6, 7, 1, 2, 3, 1, 2, 4, 1, 2, 4, 1, 2, 2, 3, 1, 2, 2, 5, 1, 2, 1, 3, 5, 1, 3, 5, 2, 7, 2, 3, 2, 3, 1, 2, 1, 3, 5, 1, 3, 1, 5, 2, 3, 1, 2, 2, 3, 1, 3, 2, 4, 1, 3, 5, 2, 3, 5, 1, 2, 3, 1, 4, 5, 2, 3, 1, 2, 3, 2, 4, 1, 4, 1, 2, 4, 2, 3, 2, 5, 2, 4, 2, 3, 1, 2, 5, 4, 2, 3, 1, 4, 1, 2, 2, 4, 2, 5, 2, 3, 3, 2, 3, 2, 4, 3, 4, 5, 2, 3, 1, 3, 2, 3, 4, 3, 2, 5, 4, 4, 7, 1, 5, 5, 8, 1, 5, 4, 4, 6, 6, 7, 3, 5, 6, 4, 8, 8, 8, 3, 5, 7, 8, 8];
  var speciesValue = [[], [126, 126, 90, 115], [156, 158, 120, 76], [198, 200, 160, 18], [128, 108, 78, 123], [160, 140, 116, 81], [212, 182, 156, 22], [112, 142, 88, 114], [144, 176, 118, 73], [186, 222, 158, 16], [62, 66, 90, 148], [56, 86, 100, 144], [144, 144, 120, 82], [68, 64, 80, 150], [62, 82, 90, 147], [144, 130, 130, 87], [94, 90, 80, 141], [126, 122, 126, 98], [170, 166, 166, 41], [92, 86, 60, 145], [146, 150, 110, 86], [102, 78, 80, 142], [168, 146, 130, 70], [112, 112, 70, 133], [166, 166, 120, 64], [124, 108, 70, 129], [200, 154, 120, 53], [90, 114, 100, 127], [150, 172, 150, 54], [100, 104, 110, 124], [132, 136, 140, 83], [184, 190, 180, 21], [110, 94, 92, 132], [142, 128, 122, 91], [204, 170, 162, 27], [116, 124, 140, 95], [178, 178, 190, 24], [106, 118, 76, 130], [176, 194, 146, 37], [98, 54, 230, 93], [168, 108, 280, 20], [88, 90, 80, 143], [164, 164, 150, 52], [134, 130, 90, 105], [162, 158, 120, 72], [202, 190, 150, 25], [122, 120, 70, 125], [162, 170, 120, 63], [108, 118, 120, 111], [172, 154, 140, 56], [108, 86, 20, 149], [148, 140, 70, 103], [104, 94, 80, 140], [156, 146, 130, 77], [132, 112, 100, 112], [194, 176, 160, 30], [122, 96, 80, 131], [178, 150, 130, 59], [156, 110, 110, 96], [230, 180, 180, 11], [108, 98, 80, 136], [132, 132, 130, 89], [180, 202, 180, 17], [110, 76, 50, 146], [150, 112, 80, 113], [186, 152, 110, 65], [118, 96, 140, 106], [154, 144, 160, 60], [198, 180, 180, 19], [158, 78, 100, 116], [190, 110, 130, 78], [222, 152, 160, 29], [106, 136, 80, 118], [170, 196, 160, 34], [106, 118, 80, 128], [142, 156, 110, 84], [176, 198, 160, 28], [168, 138, 100, 85], [200, 170, 130, 43], [110, 110, 180, 88], [184, 198, 190, 15], [128, 138, 50, 121], [186, 180, 100, 55], [138, 132, 104, 97], [126, 96, 70, 135], [182, 150, 120, 62], [104, 138, 130, 99], [156, 192, 180, 33], [124, 110, 160, 90], [180, 188, 210, 14], [120, 112, 60, 134], [196, 196, 100, 47], [136, 82, 60, 139], [172, 118, 90, 94], [204, 156, 120, 51], [90, 186, 70, 110], [104, 140, 120, 100], [162, 196, 170, 32], [116, 110, 60, 137], [178, 168, 110, 61], [102, 124, 80, 126], [150, 174, 120, 67], [110, 132, 120, 102], [232, 164, 190, 12], [102, 150, 100, 107], [140, 202, 120, 58], [148, 172, 100, 80], [138, 204, 100, 71], [126, 160, 180, 57], [136, 142, 80, 104], [190, 198, 130, 36], [110, 116, 160, 92], [166, 160, 210, 26], [40, 60, 500, 10], [164, 152, 130, 66], [142, 178, 210, 31], [122, 100, 60, 138], [176, 150, 110, 74], [112, 126, 90, 117], [172, 160, 160, 48], [130, 128, 60, 120], [194, 192, 120, 38], [154, 196, 80, 79], [176, 180, 140, 46], [172, 134, 130, 75], [198, 160, 130, 49], [214, 158, 130, 40], [184, 186, 130, 44], [148, 184, 150, 50], [42, 84, 40, 151], [192, 196, 190, 13], [186, 190, 260, 5], [110, 110, 96, 122], [114, 128, 110, 108], [186, 168, 260, 8], [192, 174, 130, 45], [238, 178, 130, 23], [156, 158, 130, 68], [132, 160, 70, 101], [180, 202, 140, 35], [148, 142, 60, 109], [190, 190, 120, 42], [182, 162, 160, 39], [180, 180, 320, 2], [198, 242, 180, 6], [232, 194, 180, 9], [242, 194, 180, 7], [128, 110, 82, 119], [170, 152, 122, 69], [250, 212, 182, 3], [284, 202, 212, 1], [220, 220, 200, 4]];
  var canGetAttacks = [[], [214, 221], [215, 214], [215, 214], [209, 220], [209, 220], [209, 210], [237, 221], [230, 202], [230, 202], [201, 221], [201, 221], [201, 235], [201, 236], [201, 236], [201, 224], [219, 221], [210, 239], [210, 239], [221, 219], [202, 219], [211, 219], [211, 239], [236, 225], [202, 225], [205, 219], [205, 206], [220, 216], [228, 216], [202, 236], [202, 236], [224, 202], [211, 236], [224, 236], [224, 200], [222, 234], [222, 234], [219, 209], [238, 209], [222, 238], [222, 238], [219, 202], [210, 202], [50, 121, 69], [215, 225], [215, 225], [220, 201], [201, 200], [201, 235], [201, 235], [216, 220], [203, 216], [31, 96, 32], [220, 238], [230, 234], [230, 235], [208, 220], [207, 208], [209, 202], [240, 202], [237, 216], [237, 216], [237, 216], [234], [226, 235], [226, 235], [207, 208], [207, 208], [229, 208], [214, 225], [215, 225], [215, 225], [237, 236], [225, 224], [227, 221], [227, 216], [227, 216], [221, 209], [207, 209], [230, 235], [230, 235], [206, 205], [206, 205], [223, 200], [45, 121, 117], [238, 239], [217, 230], [218, 217], [225, 233], [225, 224], [217, 221], [218, 217], [212, 203], [69, 16, 90], [203, 213], [227, 221], [222, 235], [30, 60, 108], [237, 216], [228, 216], [206, 221], [206, 221], [235], [235, 234], [233, 241], [233, 241], [207, 241], [229, 241], [212, 234], [225, 221], [225, 221], [233, 241], [233, 241], [222, 234], [214], [233, 207], [230, 237], [230, 204], [211, 216], [211, 224], [219, 230], [219, 230], [235, 234], [200, 239], [218, 222], [205, 207], [209, 208], [241, 200], [221, 234], [231], [204, 202], [218, 217], [222], [219, 221], [230], [205], [209], [219, 221], [230, 216], [227, 230], [220, 216], [216, 200], [239, 202], [234, 212], [218], [205], [209], [204], [204], [204, 239], [226, 235], [222]];
  var canGetSkills = [[], [90, 59, 118], [90, 116, 118], [90, 47, 116], [101, 102, 24], [115, 102, 24], [103, 83, 24], [57, 58, 105], [57, 39, 107], [36, 39, 107], [133], [133], [49, 108, 99], [133], [133], [90, 45, 100], [80, 45, 121], [80, 45, 121], [122, 45, 121], [26, 129, 131], [26, 129, 14], [45, 38, 80], [45, 46, 80], [13, 90, 92], [16, 91, 92], [35, 79, 78], [123, 77, 78], [26, 64, 63], [31, 63, 95], [50, 131, 90], [50, 26, 90], [31, 91, 32], [126, 131, 90], [126, 26, 90], [31, 91, 22], [84, 131, 87], [86, 108, 87], [131, 24, 101], [42, 24, 103], [84, 131, 88], [86, 14, 88], [50, 121, 90], [50, 121, 69], [59, 90, 87], [47, 90, 87], [47, 116, 87], [89, 100, 59], [89, 100, 116], [50, 30, 99], [50, 108, 49], [26, 96, 63], [31, 96, 32], [51, 16, 131], [51, 65, 88], [30, 58, 28], [108, 107, 39], [28, 56, 123], [28, 56, 51], [21, 131, 24], [103, 24, 95], [53, 96, 131], [106, 96, 53], [107, 54, 33], [60, 99, 70], [30, 86, 70], [108, 86, 70], [56, 123, 28], [54, 123, 28], [32, 54, 28], [118, 90, 13], [118, 90, 59], [117, 90, 116], [53, 105, 13], [107, 91, 40], [64, 63, 26], [26, 32, 64], [32, 62, 31], [101, 21, 103], [103, 46, 42], [105, 60, 108], [105, 108, 39], [35, 72, 79], [35, 72, 36], [45, 121, 117], [38, 45, 125], [38, 45, 121], [57, 111, 58], [111, 57, 40], [18, 96, 90], [16, 92, 91], [53, 105, 111], [111, 107, 40], [69, 16, 90], [70, 16, 90], [70, 16, 91], [64, 32, 74], [30, 60, 108], [60, 108, 70], [20, 53, 105], [20, 100, 105], [35, 79, 99], [35, 79, 14], [59, 108, 62], [59, 108, 116], [94, 26, 95], [94, 26, 31], [127, 56, 32], [115, 33, 77, 123], [14, 127, 118], [18, 90, 16], [90, 70, 16], [95, 126, 127], [22, 31, 32], [108, 30, 86], [118, 90, 116], [123, 31, 127], [53, 82, 36], [40, 82, 107], [105, 126, 58], [111, 46, 22], [125, 53, 65], [107, 65, 30], [30, 108, 70], [51, 100, 49], [85, 33, 60], [77, 79, 78], [103, 115, 24], [20, 100, 54], [126, 74, 31], [133], [107, 80, 82], [82, 39, 40], [133], [26, 125, 131], [105, 107, 58], [35, 79, 78], [103, 24, 42], [30, 99, 35], [62, 104, 63], [62, 107, 64], [62, 57, 63], [62, 105, 32], [62, 74, 14], [131, 14, 31], [39, 111, 40], [35, 79, 78], [103, 42, 24], [13, 80, 58], [13, 58, 82], [82, 14, 83], [108, 70, 14], [122, 31, 108, 82, 78, 87, 103, 116, 14]];
  var canEvolveCandies = [0, 25, 100, 0, 25, 100, 0, 25, 100, 0, 12, 50, 0, 12, 25, 0, 12, 50, 0, 25, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 25, 100, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 25, 100, 0, 25, 100, 0, 25, 100, 0, 50, 0, 25, 100, 0, 50, 0, 50, 0, 50, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 25, 100, 0, 0, 50, 0, 50, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 50, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 0, 0, 400, 0, 0, 0, 25, 0, 0, 0, 0, 50, 0, 50, 0, 0, 0, 0, 0, 0, 25, 100, 0, 0, 0];
  angular.module('podoc.services')
    .factory('Pokemons', function ($ajax, text) {

      var imgPath = "images/pokemons/";

      var languageSet = function () {
        var language = text.getLanguage();
        skills.forEach(function (o) {
          o.name = o[language];
        });
        attrs.forEach(function (o) {
          o.name = o[language];
        });
        Pokemons.forEach(function (o, i) {
          o.name = o[language];
          var descriptions = text('descriptions');
          if (descriptions[i]) {
            o.desc = descriptions[i];
          }
        });
      };
      languageSet();

      text.onChangeLanguage.push(languageSet);


      Pokemons.forEach(function (pokemon, i) {
        pokemon.id = i;
        if (i > 99)
          pokemon.img = imgPath + (i) + ".png";
        else if (i > 9)
          pokemon.img = imgPath + "0" + (i) + ".png";
        else
          pokemon.img = imgPath + "00" + (i) + ".png";
        pokemon.evolveCandies = canEvolveCandies[i];
        pokemon.candies = 0;
        pokemon.canEvolve = false;
        pokemon.rarity = rare[i];
        pokemon.value = speciesValue[i];
        pokemon.power = speciesValue[i][0] + speciesValue[i][1] + speciesValue[i][2];
        pokemon.skills = canGetSkills[i].map(function (id) {
          return skills.findById(id);
        });
        pokemon.attacks = canGetAttacks[i].map(function (id) {
          return skills.findById(id);
        });
        if (pokemon.attr)
          pokemon.types = pokemon.attr.map(function (id) {
            return attrs[id];
          });
      });
      $ajax.get('/api/v1/pokemon/stastic').then(function (statics) {
        statics.forEach(function (data) {
          if (!data)
            return;
          var pokemon = Pokemons.findById(data.id);
          pokemon.data = data;
          try {
            pokemon.data.skills = JSON.parse(data.skillMap);
          }
          catch (e) {
          }
        });
      });
      return {
        all: function () {
          return Pokemons;
        },
        get: function (i) {
          return Pokemons[i];
        },
        skills: skills,
        attrs: attrs
      };
    });
})();
