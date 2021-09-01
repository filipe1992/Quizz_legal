'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "main.dart.js": "fd79445448c51412f12e91a0b5a0019b",
"version.json": "1370539b93c8cfea3e6dc897ffa573c0",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/song/lose.wav": "0fce6ae9b348b65cb687f2879c55c111",
"assets/assets/song/music.mp3": "100a0464de7dec8f0a959d86054a154e",
"assets/assets/song/win.wav": "67bbeef35139edb3c2623ef515898dd7",
"assets/assets/images/logo/logo.jpeg": "086e09f2716b74c49a6860bce4f714ea",
"assets/assets/images/logo/logo_inicial.jpeg": "f3e7950542568ec3fa92de083eee66eb",
"assets/assets/images/perguntas/I1P7.gif": "f48da25a004d08a868d66b4a0884a280",
"assets/assets/images/perguntas/I5P12.gif": "d6c2445ec34743dfa32d92d67beb0f11",
"assets/assets/images/perguntas/I5P2.jpg": "21a3d8d077f26bb1a4a8d5c4f5696f7b",
"assets/assets/images/perguntas/I5P3.jpg": "11bcf4bae62d4d39da4c117ebeb7447d",
"assets/assets/images/perguntas/I5P4.jpg": "02d6547b61d3e66a8b062611d0bd077f",
"assets/assets/images/perguntas/I3P8.gif": "76462cdd0e4a3e13255e42baea5005e5",
"assets/assets/images/perguntas/I1P1.jpg": "8dcc08a4fe3444c66e14d98dc0493e1d",
"assets/assets/images/perguntas/I3P9.gif": "46da20c1f6a66a32917b73d59ea0d615",
"assets/assets/images/perguntas/I1P8.gif": "3d20cf3f40a9ec4655fd120af6700572",
"assets/assets/images/perguntas/I4P4.gif": "5baa00c875ce81879718d392ed4f5fdf",
"assets/assets/images/perguntas/I4P5.png": "cafea4f19ee41545d278a3fc50535557",
"assets/assets/images/perguntas/I5P11.jpg": "7a4cb00b62007dd507430dc8956e5da9",
"assets/assets/images/perguntas/I1P2.jpg": "4016a2061de965f3b4ef994c0dc9795e",
"assets/assets/images/perguntas/I4P4.png": "1e2863bb6dcca5ff5eb0ee8043735645",
"assets/assets/images/perguntas/I4P7.gif": "07d7b43315ae4a02554ff4f274dc6a23",
"assets/assets/images/perguntas/I3P3.gif": "d5bff0ca1231554b8deb1fdb6ed0ccdf",
"assets/assets/images/perguntas/I2P4.jpg": "106ead2bddda2b76e0a652c9522d0a17",
"assets/assets/images/perguntas/I2P1.gif": "f445e2433307659abab82cc5e378a294",
"assets/assets/images/perguntas/I2P5.gif": "16b41e4a51f5f3318d3ad6856815cdc8",
"assets/assets/images/perguntas/I5P1.jpg": "f753405b1080dcad3d90a1c7719da8b5",
"assets/assets/images/perguntas/I3P2.jpg": "6867745ee6ad30d90549d3febfc2fd46",
"assets/assets/images/perguntas/I5P9.gif": "23b06bb18cffebd77a351db51e5a1382",
"assets/assets/images/perguntas/no%25C3%25A7%25C3%25B5es-direitos-humanos-cidadania-1.webp": "c209538f899fa8df3ce7e309d20c7451",
"assets/assets/images/perguntas/I5P10.gif": "8abb315a6679879bf9fe97c9a0a84b79",
"assets/assets/images/perguntas/I1P6.jpg": "6da05a0897460d614af14fdc43422eb9",
"assets/assets/images/perguntas/I4P6.gif": "4f5e592c60448d7406efaa569cbe1853",
"assets/assets/images/perguntas/I5P7.jpg": "fc49879e46e9ccbf7247797aa0d59111",
"assets/assets/images/perguntas/I1P11.png": "3d0b435f0b9bd85ea33e699e5387b212",
"assets/assets/images/perguntas/I1P12.png": "7d3c945c93320d7914ac4f51ec7b8fd2",
"assets/assets/images/perguntas/I3P10.png": "fff018a55ec999eb53f38140aef86a78",
"assets/assets/images/perguntas/I2P9.jpg": "e9523c3809a9fa133698e653c5c53227",
"assets/assets/images/perguntas/I3P1.jpg": "2238987aa44ed476900a2fa324dd42dc",
"assets/assets/images/perguntas/I3P11.jpg": "7a1914225d01a1437cef7755ba21faa7",
"assets/assets/images/perguntas/I1P5.jpg": "c1c7e64e2e956b9defa182e881dce9ee",
"assets/assets/images/perguntas/I1P9.jpg": "0784fb7c2bf803a796f41b4e57f27389",
"assets/assets/images/perguntas/I1P4.jpg": "5ad371b561124019f6615857308b9e54",
"assets/assets/images/perguntas/I2P7.gif": "09175a1be34dde356f551df4460762e8",
"assets/assets/images/perguntas/I1P10.gif": "95d7ee3d37e38487ea6c9b4ddafd9006",
"assets/assets/images/perguntas/I2P8.png": "987b226a332cadd1675bf66b85499d4a",
"assets/assets/images/perguntas/I2P2.jpg": "b31ee9c854625187f084ecb4aef7ad92",
"assets/assets/images/perguntas/I5P8.jpg": "5b6cb81cd069e4bb9f9794668fb93fcb",
"assets/assets/images/perguntas/I1P3.png": "717123a5161cbd29e4e8a9f4598e3e12",
"assets/assets/images/perguntas/comprovante.pdf": "e6d5ad1c48a76038acddabf9a5924b58",
"assets/assets/images/perguntas/V8gZqUTq.html": "92a2f660ddfe15951c41056152992486",
"assets/assets/images/perguntas/I2P3.gif": "f2fd02d13fb83123e9f2d498f58f60c4",
"assets/assets/images/perguntas/I4P1.gif": "62d2cce9450696f5a76148d65a648cfe",
"assets/assets/images/perguntas/I3P4.png": "ca9e1454dbc96a4acc561aeb64805857",
"assets/assets/images/perguntas/I5P6.jpg": "3087104d5d539124eb2c841687825310",
"assets/assets/images/perguntas/I4P6.png": "9cd7d3bdcd090bb857fda8f5bf23e8c8",
"assets/assets/images/perguntas/I3P5.jpg": "10a691d7b5a7693ceb3e723da91a4cfd",
"assets/assets/images/perguntas/I2P6.jpg": "0a33bcf7f64a47de0a3a89857e91de04",
"assets/assets/images/perguntas/I3P6.gif": "b74f4a5861601fc828f73dc80649382b",
"assets/assets/images/perguntas/I5P5.jpg": "544bea35de2a0c5e3a2b3ca0faac8f9f",
"assets/assets/images/perguntas/I3P7.jpg": "9edc5e7d934cf73d289236ed744989eb",
"assets/assets/images/perguntas/I4P2.gif": "3786abf3766504e2cafca97f249991c4",
"assets/assets/images/perguntas/I4P3.gif": "9bef118b16b2d31ea9cf0a578f1c03d6",
"assets/assets/images/fundo/background.jpeg": "9a7059184c4cd95517f8cc0ae384cec6",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/AssetManifest.json": "62fa5237b93685ec4debd33b93e377e4",
"assets/NOTICES": "ffe63b83de1c236542dd8a29e1f57cec",
"index.html": "efc2420aa2ed3aa78b5f9e0039416cc7",
"/": "efc2420aa2ed3aa78b5f9e0039416cc7",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"manifest.json": "cd3a55e5f55b408dfdee025879ab9ce7"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
