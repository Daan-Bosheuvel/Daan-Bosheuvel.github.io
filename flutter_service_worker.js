'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "08e9a66c03d71612f59a7b3936678c1c",
"assets/NOTICES": "d39062a79d0eafe012b1186b78f1cd8d",
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
"Daan-Bosheuvel.github.io/.git/config": "e2d2dca2205707816d145efe4f1259e5",
"Daan-Bosheuvel.github.io/.git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
"Daan-Bosheuvel.github.io/.git/FETCH_HEAD": "89e5d6f49404b4383bfcb9f4c0133068",
"Daan-Bosheuvel.github.io/.git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
"Daan-Bosheuvel.github.io/.git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
"Daan-Bosheuvel.github.io/.git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
"Daan-Bosheuvel.github.io/.git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
"Daan-Bosheuvel.github.io/.git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
"Daan-Bosheuvel.github.io/.git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
"Daan-Bosheuvel.github.io/.git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
"Daan-Bosheuvel.github.io/.git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
"Daan-Bosheuvel.github.io/.git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
"Daan-Bosheuvel.github.io/.git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
"Daan-Bosheuvel.github.io/.git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
"Daan-Bosheuvel.github.io/.git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
"Daan-Bosheuvel.github.io/.git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
"Daan-Bosheuvel.github.io/.git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
"Daan-Bosheuvel.github.io/.git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
"Daan-Bosheuvel.github.io/.git/index": "9a041544b8addfda9799ef42dfa22342",
"Daan-Bosheuvel.github.io/.git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
"Daan-Bosheuvel.github.io/.git/logs/HEAD": "03280e58749c1b59361c71bfeac4498a",
"Daan-Bosheuvel.github.io/.git/logs/refs/heads/main": "03280e58749c1b59361c71bfeac4498a",
"Daan-Bosheuvel.github.io/.git/logs/refs/remotes/origin/HEAD": "03280e58749c1b59361c71bfeac4498a",
"Daan-Bosheuvel.github.io/.git/objects/pack/pack-f00fa929b6ecce2e25e587ca9929d7bd0c387eec.idx": "cc106a49b96b1362e6b78bfb3b95ac53",
"Daan-Bosheuvel.github.io/.git/objects/pack/pack-f00fa929b6ecce2e25e587ca9929d7bd0c387eec.pack": "b32eec9f5efd46045cf3bb621e7dd0e1",
"Daan-Bosheuvel.github.io/.git/objects/pack/pack-f00fa929b6ecce2e25e587ca9929d7bd0c387eec.rev": "c570cddc7941ab0338717817efe701f5",
"Daan-Bosheuvel.github.io/.git/ORIG_HEAD": "fde8815acb912ce8d74bb1e8073e93fa",
"Daan-Bosheuvel.github.io/.git/packed-refs": "0eedba7e8f14d808411c7af838bacb06",
"Daan-Bosheuvel.github.io/.git/refs/heads/main": "fde8815acb912ce8d74bb1e8073e93fa",
"Daan-Bosheuvel.github.io/.git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
"Daan-Bosheuvel.github.io/assets/AssetManifest.bin": "693635b5258fe5f1cda720cf224f158c",
"Daan-Bosheuvel.github.io/assets/AssetManifest.bin.json": "69a99f98c8b1fb8111c5fb961769fcd8",
"Daan-Bosheuvel.github.io/assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"Daan-Bosheuvel.github.io/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"Daan-Bosheuvel.github.io/assets/fonts/MaterialIcons-Regular.otf": "08e9a66c03d71612f59a7b3936678c1c",
"Daan-Bosheuvel.github.io/assets/NOTICES": "53752f4ead7f63da3f6f90061f8e7635",
"Daan-Bosheuvel.github.io/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"Daan-Bosheuvel.github.io/assets/shaders/ink_sparkle.frag": "9bb2aaa0f9a9213b623947fa682efa76",
"Daan-Bosheuvel.github.io/canvaskit/canvaskit.js": "4a9bf79219d86ed807ac1ea2c30e01dd",
"Daan-Bosheuvel.github.io/canvaskit/canvaskit.js.symbols": "7591a27e90a9f47b73104b5beea5f732",
"Daan-Bosheuvel.github.io/canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"Daan-Bosheuvel.github.io/canvaskit/chromium/canvaskit.js": "067d1b778b913719f905e9eba6d9f2d4",
"Daan-Bosheuvel.github.io/canvaskit/chromium/canvaskit.js.symbols": "5e3724af47d205af948bfc9946c80dc4",
"Daan-Bosheuvel.github.io/canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"Daan-Bosheuvel.github.io/canvaskit/skwasm.js": "9e94c7112288ea6e16844d9879ce08dc",
"Daan-Bosheuvel.github.io/canvaskit/skwasm.js.symbols": "601a3adb24ac6b21b8e89735a27416f3",
"Daan-Bosheuvel.github.io/canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"Daan-Bosheuvel.github.io/canvaskit/skwasm.worker.js": "b31cd002f2ed6e6d27aed1fa7658efae",
"Daan-Bosheuvel.github.io/favicon.png": "d2a7242557c0d50dbfdf42a5c0ec18ef",
"Daan-Bosheuvel.github.io/flutter.js": "cba20c120ae4ddb4032083938b14d54a",
"Daan-Bosheuvel.github.io/flutter_bootstrap.js": "36ad5faad475e11844f2c0bf34e640bd",
"Daan-Bosheuvel.github.io/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"Daan-Bosheuvel.github.io/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"Daan-Bosheuvel.github.io/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"Daan-Bosheuvel.github.io/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"Daan-Bosheuvel.github.io/index.html": "f0929696b97506c1bc2cbf49994cf5b9",
"Daan-Bosheuvel.github.io/main.dart.js": "c6d008a967bf41edfbfe2aec706d3427",
"Daan-Bosheuvel.github.io/manifest.json": "f8ff9fa69774f0cf2c7487f7a53dec57",
"Daan-Bosheuvel.github.io/README.md": "76645547bd381556363c2aad527fdf90",
"Daan-Bosheuvel.github.io/version.json": "717c4aa69c23a193e3c579a8423000e1",
"favicon.png": "d2a7242557c0d50dbfdf42a5c0ec18ef",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "e392b867d429eeed60f21da5bbc3535f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f01889e1cd979f6150da373170a5d518",
"/": "f01889e1cd979f6150da373170a5d518",
"main.dart.js": "0d0dac48701ed05d924d762d7fe213c7",
"manifest.json": "227920aa22af97e8d3737d7998ae882c",
"README.md": "b39489c6586dec1708fc56e2873b940f",
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
