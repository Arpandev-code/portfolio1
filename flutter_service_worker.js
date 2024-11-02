'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6088163a82f63b6c9d15ca22cdb68a4b",
".git/config": "c2f697008eefb148208507e0244e73ee",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "5224e7466a7d2fec85f2bdca5e2c387e",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "af6db6289e604f9b1de0cb0046699c74",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "28bace235aea317d5c09e4ffeb516da4",
".git/logs/refs/heads/main": "9053507e012904fc5d7311f33c2bf98b",
".git/logs/refs/remotes/origin/main": "4c246a1377d36c7cc0b17fa765281936",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0b/388128b8ab826e150ba564c3f0d7358913f4a8": "25e75da398eff2495fd3407b6dd0f1d8",
".git/objects/12/f11cc37b465a6760e32e7dc4d90526e94a807d": "b71ec576849eb1cab7883f5729258801",
".git/objects/14/6d906978776d1fd67cf3cc09d16100f5f086c3": "b447a40fc7515916a046ed9327f2f61a",
".git/objects/17/f58efb13f7a58db3694834994fdbadc8a482d9": "c0fbab31e47f6798ae518888434bcf04",
".git/objects/1a/69083fe725571467a435f01846e6797c90c8c3": "5cf7e7890f5dc09f3df8ee0ab3953e8e",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/90f44ef99ff5b2b1152f0a1690586f2335ef57": "67cc207d646d91c5df8babc21c67e58c",
".git/objects/23/cf232e77e2585579b84f854545981167c05c03": "f908bdfa8095577d8144105dd9ea79ee",
".git/objects/28/8f3d678b405619c67a63e51554157586203f6d": "e068cfdee7a2a15056ec109616a89c01",
".git/objects/29/7e91dae393e4dc8b0b29ad2149099643c72754": "ffe5f19ab9d9344f7fdd11dc2f329785",
".git/objects/2a/e59d86644d0abc80ae98c574b4626963220a91": "e0c239a9a93c0c3842aff6535ce9b82f",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/38/285d2ed6eeef30b431c8685c0a3615b035a684": "0c5936c6c564ebff3d55c72b4234b95a",
".git/objects/38/45c73266dbf64d869a5a629d6a67c4f8081e53": "56c05d7199c59575fd7fa656a03a0ad7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3d/2154fbb9e23b26cd01f79b5480a289f70e4d8c": "c7dd09d7183a73840fec6aa88305ac92",
".git/objects/3d/6eedb9c1957d1d98d6485ce5a6b5c5a715db7a": "d0e3250578eb47be9722fecfec3c7c8a",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/47/582e36f63a44b1ba95187a70757b52acb1d25b": "29e35d10671bb15dbec46f0c4ff61932",
".git/objects/52/2f0c9edc3ee52830c2c2d3eb6bb3661f0ab1df": "81061933e3dcfeb7cff4ca8badb85e89",
".git/objects/5e/4855195a1f54b19c24da39f4fa1c530264ef93": "65c4b1c4c6be0372fe66f3e726057492",
".git/objects/61/89ede9d944c8428033c8ea85f51c1ccf4e110a": "9c562d06e4bbbf426d0c441a63f6df7c",
".git/objects/62/e07fbdfedd47b1932f08f317fd6317516ba2c3": "2c572f5f7f434e158755b6958665600a",
".git/objects/68/31db98960f969c3b7c5b05b43a368877236238": "8a8d7a52e1f79cc490700911292942a8",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/70/454266d533d024f40adf36b464937366b0a82a": "4d1be53b36ab089502e2052bb210d85c",
".git/objects/73/4ad1680402b99f4dded0dbaaf6ebd97bc7ec6a": "e058a640043a283497534b4d44b95cfe",
".git/objects/75/181177c264c60b3c54b82e872552e49e1f20c9": "3a74c88da519a5818ee305cff3468c46",
".git/objects/77/81d2e6379f273abe24cf7af6031245042f6ba1": "5435593859c6e1a4ffa14f8c48471444",
".git/objects/7a/1a6cab47616d30632e3200676e8940da85dbe7": "509b7552d49f3a765b097d248d0d753b",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/3e49f01a9f84e206de2a2e2c77216f3a99d5cb": "494ff82d041ed85f9c84f8f98effc6b4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/f902a276b7b189e85f742492240271cc8e0efc": "ed083d5eb3893ecf51897e2013eb2dfe",
".git/objects/89/40909c1c4023e1ff499252156ea669efb03141": "524d38bb0753af83b04e4e6132f533a6",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8f/7909075566099f093e0b08efbd8fa4debdf23d": "97ab1f7ff423bffa1006e600275a5f6b",
".git/objects/90/27efbbdbd6e7e88644a3ab5b4d5dcf2e0ac24b": "8839f22a05aa41c0757d5383fadbb33e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/f959236dc4f99af9203588cd8b3ab7d8a72df6": "eb3163e722017fa82cda74eb304c181b",
".git/objects/91/efa1b9f66c6e61823ffdcec9f7ccd5e1d73c1a": "d6214c2e85cf264a332a00c06030b0e4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/1d216439a8bbe445af35bea29b4f646f483dcf": "fd712c2fdfb18ef64a67b6d597325a5f",
".git/objects/9a/752aa7e1f530313d1bf1467d1f57a43667c42e": "ad5d626297465c2c80e5c0a10d8a6cb1",
".git/objects/9c/348eb52de3f48064f250f5254b4febd7b982b8": "9b02e4c8e687867d2096d2e71b105f74",
".git/objects/9e/6fc29450e4809bd6f3dba48388b5c0fc5ff96a": "927f6fb7e3b2574c0de4ab05296c6b01",
".git/objects/a3/6a9f0d672f679bd7c217fda9f56d6108500b92": "05fed0390395585c65881a28381d71d4",
".git/objects/a5/88e850793b32161fae45619e724b996ebc35e7": "6299c2dc36235b93f5b221f4a318a8e9",
".git/objects/a7/a59c32cae8c22886800094d81e5a4d2b8fd646": "cf66b92ea22e9c13c13c4516c8680f02",
".git/objects/a8/bc43ce1375cc1fc525a2977f87fb6e1a2ab6bf": "de4447c81959ea210704344cc0aa23f4",
".git/objects/ae/ecc87783a71cc127761a7880c99f4d39148130": "0139d477bb8ee04f3471ba90850d2475",
".git/objects/af/8032ef3be22f8bf54adf421de93d4624ea5b2c": "4161240f5cffe328af14a25e87e8d1af",
".git/objects/af/bc2ba61771ee6e9a4350a7e7ec7704ea111b8d": "8e76bdcbbd45cb3ecd77b879d9f4a717",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/7e06752cf3ccb06eb566fdcd860a7143f73719": "3f0e95951f3cfecf4217d39d55071d9c",
".git/objects/b5/4dae2f74f37656f60c78346fe17a6073459821": "86cd465d2705a555db93c2d6e552b0c7",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bf/6df52b129b571d93b5c8c52c86e0696011672d": "f9da0178986f223ca537bb8f8c071a20",
".git/objects/c2/789adb4d22263ff187998b9ef559f571fd5065": "31174257f2ad52b1d0296da8022a27b5",
".git/objects/c4/7638fd78c6433896093c2975a0baa13c7d03d3": "22fa2c2b5848e02b975423e8efd388cc",
".git/objects/c6/17ac8164b1b92d7f95923b4c38883afb224338": "f0239b2401860b1c192028ac4e8a625e",
".git/objects/ca/faa38fd313ae3e68ba881bb5de3659054bb71e": "316e3087c83300e498c2ad0729a5b86d",
".git/objects/cc/794072fe21d46585aa0d57c0b1e79fd0ce5193": "7ebe625534a1ee5978ec832f82143387",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d1/13e19b80b39a4f2f07a25b34020e245fb4c9d0": "ec6cf6aee3f50012839ea3ee66199109",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/68ad8c7b2e913c6dfe83a0ff24e59bb51c7262": "cda9760eb1ef02e55d79675e5ac74071",
".git/objects/d5/16bee8dac30ae4fbf45eab6eb3424d6b3da98b": "7f0199f6be336b5b9d93229f658f5120",
".git/objects/d5/2c3aa872c78c9084423e8894c7b8665b1b46aa": "209e2b82dd84cac68f14b14ffaf61143",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a8f354fd4caec4b49ac21d7003815aaf2f339b": "25e4c31abef64f60b71161bfebb4fce0",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/5143f5a4b78e10f3fd0d56c5e064f846600f99": "c3aa52808e81901ea138b08914cf0c93",
".git/objects/dd/318214017da704e8622d2be8e5bf9fb0a4d303": "d3d4b313e23bec9c0badd8856cfc34fd",
".git/objects/e8/f18677a1c4d845e83560a824c2bd39ec5505d5": "eb2775bf0a4ba7bab2ac60b0645e5a3c",
".git/objects/ea/1addd1ccd45153ef560db2e93ae7e5512e96fc": "bc5ebe7350409ea9b8879583173e0848",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/ffe58ee2282e322729a3cc62c95978e408672b": "2b3d95eb79c5687e4e480d8689edbe94",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/cd6e5da83a75327d8f503dd98431ff08242d99": "63ca984bf53ee314894df94c55a7d448",
".git/objects/f7/ee3c8b46bcfa68488ae428e9264623ee201c59": "2c6d03a42bd49f6c9fb173ce79fbbf25",
".git/objects/fd/d4d30cb8e6fd5a31aa666f8e9c7649c9efef0f": "7c02b8438f94ce76d1cafe08cbbe284e",
".git/objects/fe/554cec79728d395a3260817e992855288cc85e": "42f0508bf63b14c757cff53aba9047e3",
".git/objects/ff/f5a3cd338d1907f3d33d73a60d81cee7966d68": "cfc0de34e72c6213eb22a963e9e4659b",
".git/ORIG_HEAD": "25863864fdf74c6b5a3bef6ecdbe778d",
".git/refs/heads/main": "b32177dea65bc5c8a22ab300fdd77073",
".git/refs/remotes/origin/main": "b32177dea65bc5c8a22ab300fdd77073",
"assets/AssetManifest.bin": "748de395bbcdcfa04ebf046552b960bd",
"assets/AssetManifest.bin.json": "120721c9533ab21ff6ecb6f990b924ce",
"assets/AssetManifest.json": "48c491dee1d29f711abbfa3b290c37e8",
"assets/assets/email.png": "70b9fa4857d06dac3608d6ac2fcafffc",
"assets/assets/github.png": "c09bda950f64f3756a0af0e06c6ac382",
"assets/assets/hill1.png": "9162cb2ac60a768baa2e2f45c8096dab",
"assets/assets/hill2.png": "e3c4a80faca44db94140d8568d3c969e",
"assets/assets/hill3.png": "392b56625adc6da5b43e35a875273c6f",
"assets/assets/hill4.png": "258b5e6d4fd0b88f5bf98317a6af5990",
"assets/assets/hill5.png": "0a3129bde9d1a72060dc34e7c18b5712",
"assets/assets/Instagram.png": "b9ac166c5638cc917589a28a293fa489",
"assets/assets/landscape.svg": "5da7805a47f8a73f49484ba6d13d4393",
"assets/assets/LinkedIn.png": "5ff9090d646b8d430461fbe4060c13ef",
"assets/assets/logo.jpg": "06a153cedc4b440a7fdbd30dd2acf4a1",
"assets/assets/me.png": "29b7d879f5d938a5f5dc2fc57b14e68f",
"assets/assets/plant.png": "d2ee635b916cea470df3737f0623c124",
"assets/assets/PORTFOLIO.png": "ca1ada84cdc0d319d02265cb66e273f9",
"assets/assets/resume.png": "589269cda58a14facb4948b5678abc9b",
"assets/assets/song.jpeg": "709874252f226a9f53295c369387d398",
"assets/assets/song.jpg": "cdaf177db8c8eeb7ec68cd2127e1d134",
"assets/assets/song.png": "337ed9d79cb73b9fcdeed065512779bb",
"assets/assets/song200.png": "a755532a63c3981035bb9da213b043a5",
"assets/assets/Spotify.jpeg": "86cf86d727796ff395e069145ec788c0",
"assets/assets/sun.json": "dd5c46568c3f644ef428dee8b431f416",
"assets/assets/tree.png": "ddc37c0879639ea52887b09afe2c13b7",
"assets/assets/virtualAssistant.png": "20dada6ad5a55b33a7cb5103ed228bfe",
"assets/FontManifest.json": "fdd162438259736033fd48bf80d2c636",
"assets/fonts/MaterialIcons-Regular.otf": "5c56b1be2592f92c46deec8bed261657",
"assets/NOTICES": "6e9278445246ca0bdaa1bff9ab899645",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/eva_icons_flutter/lib/fonts/Eva-Icons.ttf": "a71dbd49ad4a52020638190e30ac52e0",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b397154b238f9fbff7f9b55410399f4f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "7123bb9271cfbc891c06e37de2352fec",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "0b64d18969b7324cbdf81a551063cee1",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "921a09e5b3feae49567f32a403ad552a",
"/": "921a09e5b3feae49567f32a403ad552a",
"main.dart.js": "49333334ce7cac9ca7620e867b7fb375",
"manifest.json": "111d72a1b338f18d323065c77d11046a",
"version.json": "265c3634d90b8953a5b8d5c31fabf76f"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
