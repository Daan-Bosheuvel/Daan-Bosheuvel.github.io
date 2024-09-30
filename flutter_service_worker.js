'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "af5cb0facdebbeabe1f46fed12d84a88",
".git/config": "d271ec4754c5aae2c86bfffc83d81f38",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "a923d91ddfe9341bbac907e5004e7174",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "aa460450a473305fbc90abbad0efd31a",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "03a88581d7f7885b87783d9e25bfe24d",
".git/logs/refs/heads/main": "1e6f5fc1585bdc821952637b0c8610d5",
".git/logs/refs/remotes/origin/main": "d70b6ee5a6989381ff4902cc991027e8",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/08/ae9c909892f3e4e920bc71d00474743ad34ec0": "9df1fd0f3a4f0ce9072e350a929d4630",
".git/objects/10/b0964532c54333496548eadc7be652ef976c53": "3363fe5768c31cb451246c034fc29f2b",
".git/objects/11/4358c46532183dcf291e2aa949029eb275e527": "656f75c9fe5cbb4d9d2b4382c0b65893",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/29/55cb209c53caafb844f59977b91a7ad102f432": "6e806409d0eebfe62f204837b9ed99c8",
".git/objects/2f/59ed9c963b43ff7c0f24106078db3a29149165": "269e7937e515df871a051762dbb1e327",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/42/4863a1c57410767e0091d857e7571f900138e7": "0eef358f9d1791e074ae8a6fea74dda1",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/48/9a59a1e19afda6426a15533f6d1ffdb8679487": "8f28ca89549ffac0bf4a6081da2200bf",
".git/objects/54/ebcd20bc08b07e7730f59a7171db9f5473c0c1": "735be587d917916ce2c979c8407ab021",
".git/objects/56/5ff4081685cbde685692194979453ac019410e": "1814557016b46a7994c1307d12b0943c",
".git/objects/5b/982a2758f2475683f61da7941980903d284325": "4b6d825d24288ba3f6d882b71917d789",
".git/objects/68/c1d7159a4b0b55e2c81d68deaeccff7d54ff8d": "fbe1da7382beb9d136e2ef1af3bf1832",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6a/0ccbd055dab8e898f7623ad77c4392ce26eef1": "76308dab76ea75d804224c68cab62a96",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/73/d4d97f445e09d7cee34604258f31e054896626": "904b81dfec280d648f3e1f2e79c48fe7",
".git/objects/7b/4d7da80101bc4eb72f207b9c89125435f4aac6": "d567d9be7fbd2bfdbadbcfc992e8b28d",
".git/objects/7d/913a0fb223077926d4ac2bbef72a1e694f239f": "6a123ff7e5766c168fae972651fc451a",
".git/objects/7f/81a03a005edf03d0236c21d4e2c003ec40e49e": "4843241d043ff3353616f2f9385fd099",
".git/objects/80/cef2e885e86437095db0cfe3f0712ac486dda6": "958f5be8cb0cf1b0ab21609274b622da",
".git/objects/82/b40eba7c5a6ad3fdc1d7c29753737684435509": "e32d4cec88f88d3b66ded57cfc38df40",
".git/objects/83/bd06b1d989face96ec2d2fcab7496014f4eff8": "4378811b8171c4aaf60e5937d03b7642",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/85/8b64f6313581fc43131f200a26c2b373881fc0": "478299bdc4ca20d149afbb35a0230ade",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/546cab7163f1dbe238da7c2650ffdef2231c20": "dcf634e2fb65d6d90683a4fe6e777ddf",
".git/objects/95/2cc2fbdee1541905ffb8a00935944d66fc1d7f": "bb9276a5443c59f9cf48ca6ae42cbc4c",
".git/objects/95/5cfb1cbfc538b0fdded9dd8599f90232490818": "d483ceadc62546fb7b2071637ca2cdb4",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/98/e159427682a4dc8130a7f86fbf5d351403fd34": "e6fbfdb519f3f7f35b7cd83cb10f0370",
".git/objects/99/3c0deb53f7c47e260ce8b714bef76a8e6be6df": "32f23d12025c1fccfd96746a2e2b4dc0",
".git/objects/99/8c88911c75785829cb5e9ff3322aec639af4e5": "6925cc25f679eda2cc691f58ddc2a363",
".git/objects/9c/dd418d6d8e4c0890173faf90acb78cd7d04c7a": "c40b217d32a80fcbb45cad8d36241a0d",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b5/50a95ca10210f9941f8daf2303f28e59d841c6": "aaeb15661066e04e9dbb024957648ee0",
".git/objects/b6/5eb1274b4dd5d02b8f45281d2a4c776992503f": "a2f1660a9ea9d28275bec369da73b084",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/4b54339d919226b4b0b0350e799c5d90e87a2e": "5d9db13b902f5445c0bd28c6debad6bb",
".git/objects/bc/c3429671c824eca6a2c951be74f6c88a85352a": "ad4306bfcc63e10753b3653226e68ba5",
".git/objects/be/d6c27b9932de5dde491c24461eed9a2f3a5af7": "283b731c9f0c836db2668584794a0629",
".git/objects/c0/8c2e5e725463536845b4e1acbcd7d279e5407e": "be6211f9b559b64c896f72d41d6734cf",
".git/objects/c2/f6b67ba2930d1e9e604b617cd80c0f426eb42a": "08bb81443f67c6821fabb1cb6b0b64ce",
".git/objects/c9/71c34e361d827c138174e3e1571b91664eebef": "016a781d66d868b3d29c233ca834d0b4",
".git/objects/ca/3ea6ab0dde3b88b26b760ae9c08364321a960f": "3a59f13613a42dc0332cb71409285997",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/6a3160ed31da1d4211e19518725c07296e1058": "3515393141d0da2e88545b4d4d7cdb61",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f96ea52649eaa2e2b0d5b47404918ec52b8817": "777c0c2fcaa7300ded3d51750a6c69ea",
".git/objects/d8/1adcde06ba30864749e58f28b09c1311a7245b": "10656675222e6c58ea1e2476a60892a2",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/dc/1647d3ebcdab0b8651866e71512ac320679e7d": "62bc0c78a16724e0b69a53ee957b2113",
".git/objects/df/b7449b333169dbc38a83a5413bed037a7685d9": "1de5828566634ef9e2521de37fa3001c",
".git/objects/e2/241e7c4686212d1e5d66583c94f7a29999be69": "2592099e4983d8911480ae0651058f69",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/cf6537a2064022afc0f29e8d6ae91be30bee30": "deed29cbd27e13a348ca60e966b7a6c0",
".git/objects/ec/9188a71553eecc51ad31db70fcf582332c396d": "7d1571b68f094b237d43b9e1dc6f178c",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f4/85c2ff2f9656297dc4ca9ab8b86c2edef6a920": "32421940d310a35276d609b24d79fa70",
".git/objects/f6/1e4e394ca523db71049d40e6473cc41533daf5": "91d14a9478ee21d763c019b4229a3726",
".git/objects/fa/f4f1a9660b4e8c8d30f43ac8c4ccf61e2afb6a": "097e62cc6fe003b604eec566337fd83d",
".git/objects/fd/b4f480b16e38d8e7aa0fcb4a90d855915a335e": "e44feae621018db2d1d0dd4f2119d46f",
".git/ORIG_HEAD": "5130f5f1e4ce7f3d91c066e4e0c941e5",
".git/refs/heads/main": "5130f5f1e4ce7f3d91c066e4e0c941e5",
".git/refs/remotes/origin/main": "5130f5f1e4ce7f3d91c066e4e0c941e5",
"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "08e9a66c03d71612f59a7b3936678c1c",
"assets/NOTICES": "6789387eb341c6b090ff0b85be5dba86",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
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
"favicon.png": "d2a7242557c0d50dbfdf42a5c0ec18ef",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e392b867d429eeed60f21da5bbc3535f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f0929696b97506c1bc2cbf49994cf5b9",
"/": "f0929696b97506c1bc2cbf49994cf5b9",
"main.dart.js": "0d0dac48701ed05d924d762d7fe213c7",
"manifest.json": "f8ff9fa69774f0cf2c7487f7a53dec57",
"README.md": "76645547bd381556363c2aad527fdf90",
"version.json": "717c4aa69c23a193e3c579a8423000e1"};
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
