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
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/config": "a75916eeada39806e46e6cb5e6a845b2",
".git/COMMIT_EDITMSG": "50ada1da0e774b03c5f73d1fc2dd4bf2",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/logs/HEAD": "1f644f9d6ac35ca8d7eb40eccb217853",
".git/logs/refs/heads/master": "1f644f9d6ac35ca8d7eb40eccb217853",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/heads/master": "045b165e8c05f70e10d9d024e2ce9e0f",
".git/index": "709e3aee307b26a7faddc8823af54616",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/74/c9a66139920b11887337c68257e3dcf201e6cd": "30d0d8d200e8ba0db088aede58d01547",
".git/objects/f6/cc411bfe72dc7780df5193f3a8aa38a59f4c32": "7fd8b80f8b7c69a1632611697f37ca96",
".git/objects/99/b6b4b3df812eb5afc735e37f35b55671a58175": "894d2b4d1b9688e02b621908f91498a7",
".git/objects/f5/6e0652e172b9a4e5e74e7d24f4e53b898b55ed": "8ce57ccacf24fefcf1ae16db9091cc46",
".git/objects/bb/b759b5dfb9fb1fadb8401d53ed1101552dd328": "6a5937a40f0ca8179ade4be72bb90f4a",
".git/objects/a5/c67f3d67ab854c52dd129ddd2c81c58d3f3c12": "9f793b618f8898eb219c281cc145f67e",
".git/objects/69/e7316197f1600af8b58567e2849765fe07564e": "f0c12d2e7a115ac70a522f1830af7d04",
".git/objects/51/ca1af1298a80ba0d11c333475df8ae59194d0a": "6e74fad488659520814aec7c7aabcd40",
".git/objects/b6/8063e99346ab0dd113f1cfba1d0efc2d73c3e3": "b4e8c4e6dcddd7c8df598c28aef469b1",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/93/0abab3de54cf7ae16a7e9f85450f9fa16db9cd": "652bb1c92341b814a43bfbc8c36c6101",
".git/objects/47/3862e9da992fd340d5ce9c12d356af205cf628": "8e6efa0f7c5002913595e8997ac2c8f6",
".git/objects/3e/bcdcd059813445a058ef716f17f52b4083855b": "b09313e164688225a3810677e3c2c5bc",
".git/objects/95/47eb9f9f3f23b92527184161af5487794057a4": "330c234ca9ee5736184afc943361ae2f",
".git/objects/95/917415a02ba4af98eeae85ef6495031a497bec": "9125925429c26893e6d011c6f9dea0b9",
".git/objects/9a/8447b430324a56e1208f7c867f9f4e27b05ea4": "aa1afef9f41e8a335b0548152abb8c70",
".git/objects/9a/5c9784210280515ff4530ff9c8a096c7c8c21b": "39ab922f8b5708a5c2a641c6c88a35d1",
".git/objects/73/4cee894474b146ac82b445eb40e5d79321b3fc": "23b7ebb89ede13354208154e3431fc3e",
".git/objects/73/df2eb18e3ff2b18408493d146bb78ec7a4c0a0": "af0d005275023a89c34be153e0e76f31",
".git/objects/c1/7678fda519099ffbb304997d5217cf3a94e44b": "110d509b78c99f06355cc8420f80d089",
".git/objects/10/aad8bf3d4bc2128dd45c63752094fd98fcfba5": "1c0e01894d11e6f6ac92b3729536ed5c",
".git/objects/f9/0f058a8504b501b83fd774bd9fde597d37b77a": "6c761ec0313561c4584b5ef9f00b6cbf",
".git/objects/a9/b767ffe2d0c83963668e103206d3d242c69d45": "d9d92862284991340b4d936cb27956d0",
".git/objects/a9/4a2b3d6fe539c6c8985da0be66443176376770": "81d63b0f0b0cd2133bff2b9c0094e7e7",
".git/objects/23/5957746393994f2d8a7ee04a386afb5c3bbef3": "e8b081e000a2f4a368195fbcd9d88cd3",
".git/objects/df/e1b222d95ea3f60e5a9f53bed458c4452dbff6": "000181a85dcf49466ec809eefabed73c",
".git/objects/06/9288c6f2a275501da1824134a1b511f0ac75ac": "fd2ecdfb110981d772369845bcc061e8",
".git/objects/f0/54e08684d14b336e356d72bfda80ffdcf182f2": "ea62b28b1064b0a04442044ce8135783",
".git/objects/96/3ba4a3917ed1fd69c73ec867603bdc4c5ce3ef": "6cdf451dd97451f474f0f7b2f5963e62",
".git/objects/82/05a67625d3a24bea95f730aee164f8992e941b": "fa60950df8f5957d4a3ae46dd0e30ab7",
".git/objects/78/a177ad62581d99e28d0423759417b2615f31ec": "095b903770fff5172dc6b6b9b57b906c",
".git/objects/0b/5d6b6151c36e48d60068f88395a7b59d9e868c": "4a6d8df8e719b49d972416d86a12b6e0",
".git/objects/0e/2e61cb51dca5f3bf64d3ce0f196fd4e1071199": "fa182c37ad433685439bc3e59b86bf7e",
".git/objects/fc/81d3e718e93ec50ca074d25db39cef16a16219": "afe7b3bae379bcd5ea2af2a3c21126c9",
".git/objects/2a/adb6c7d6bed757f077dac21b0fe4e51ce37b5f": "b0b7f57ce0a8cd20d1c7b07d21596795",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/8c/b979473dc8e1b4b06f4c4ab60a9429a13e8975": "3c04de33a459d14adbed57e2c65bf930",
".git/objects/31/d36d5a2fc5e0b9c6c23ad6fe676712ef5552a8": "34707b1e91c8706fc3174074f0b8eba5",
".git/objects/72/8b93659812539ecbf1c96cc2e7f0e27eea402f": "50fcbe487d77012526a96f986911cf01",
".git/objects/d0/a299ba0f0f88c950fad9a7585ef6dc24ee2ab4": "bfab7b8666ad507592da611d625f7160",
".git/objects/c9/36ad20f445de948b7d578389c2ca7f40a2ee3c": "d7a3a39ea84a65dcefa15f91b2f169de",
".git/objects/c9/86ebe7ff533f586c117f7424487aea78da34ce": "b3ec62d055e19186d8314d00f24d2fae",
".git/objects/b5/521605721b6057da8a8de71ac08bfe690074fd": "e3401a0a98f667c0e7b0faad4a3884fe",
".git/objects/b5/eb4d40a066dd14b16169dd03aa76b2eb696e3a": "cb6dc2c9fe889a046d201f4f148c8713",
".git/objects/65/5391b580b6cd81571a9a2ec48866ee6e813e00": "b10ac55d69ae8ddcded588c3973d43d6",
".git/objects/65/baf252a03d2d6708ae70204efd6ef82528bec9": "92ad8cde4aa73c81cb0ae5db3dad1531",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/4e6dbfad570dde633d854ce408c88def165bc1": "45993b5c64515185d06958f4ea73f4a0",
".git/objects/f7/4b744704665633caec2f72acff1c0f1c9765ae": "3495f064d4bad88840c6e7fe8c909217",
".git/objects/03/51256b3182afc54a156eba4cfff02872877fe8": "2fb02d4e196a6c0df39fea04be341203",
".git/objects/97/dcc503f1572913a83fb245f4cfa3d951ff68f2": "1279ae40dba11644dcddd8d116f8621d",
".git/objects/fa/12b6f8f37b3be55fc67e4f8a13dfedde3bf4ae": "251746c69fd2ee97c16a083b97993736",
".git/objects/b3/c3b9279ddd9ba90db2845ef33e930c913eac1e": "f764deb9d209391609d94c26ab5dd75c",
".git/objects/98/b9c7f87bed10fb15b9330e1f9e3ec9799a3f77": "e29d7ab2af162b68fbfa496f8e666fe7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/9cb57177850b80661941e129882076d3a0b1ab": "6e27536a560b760644addff8d8434148",
".git/objects/f3/a8106b05b379e12effe77e613811b41cb6bf21": "b49593fd10fe9e1ceb9972d34a5bb4ac",
".git/objects/e4/51c5f230cbfd5decdb64e464c822630de5cf8a": "f428b17ce60c56a424e1f4768189d37e",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/43/305f5bd82912be2dfc5d013e521c38fd8a0e6e": "76100664e8752256786bc988833332ac",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/28/d62f0197242136c460228586d9d1ab07b0d008": "468abcea3970f9570b79389d0608cef4",
".git/objects/28/444051bc9e5833406c286290294fbd44a43888": "0f154eb46858c07583fc76c3a8346e6c",
".git/objects/62/eda376a2dd2e7a366cdbca59c544a02c6792e0": "1afe94c317c1ded9cf4fcad69cc37f9a",
".git/objects/d7/93bf26f5deb6f639b32ee070b670bdf16dd282": "70b06ae4662659b0d0deb87a2c5228ec",
".git/objects/16/5e2a5215ca70128e035ae2b62cdac7c3303db2": "21ff37c749248234fab5d1dd7e4a5887",
".git/objects/fe/a3923339c9954e57ecd89bb645634eea1c32e2": "53f362c2665f010dac0e2cabe1225bb0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/2f/70696743acb70062c5b32dad6140d5ef44d064": "ad92b5e339b3dea3b9d5eb2685667ca8",
".git/objects/42/80044cf506827294d0fb9de9a1542c0e7b8f71": "fbe6982853fdb8af3e78f76bc017672f",
".git/objects/ef/d32780fc28f1ec3080710174eb045c7041e138": "b504adecdae0f840efc7a3f84dfc19ce",
".git/objects/d2/508b099a2a17473e6f963b8481938d0fd4d628": "fd7aecf0337e37198b80c5245c32154e",
".git/objects/da/f3161289b1218c623351d1c39823bd6c541cb4": "2d07d15174cf3f3098c81d7fdbc46d08",
".git/objects/89/3178876f9530eb9ccb5069aa771162625c2067": "9c09eb161e472645b5bd3f840560c3e0",
".git/objects/89/d97ebe18a80dc972a968305fd683f182dc7694": "79903720b4ad86ddb2d0482eb9a24e06",
".git/objects/c7/d903e49d89e691b784b16692464f932c072abc": "3f6314f08dc879bd01c0c564444c8840",
".git/objects/94/00f14e45aed114ba36f6f64fa4bf04749d53ee": "b963c5a17359f671319847da6c3a089f",
".git/objects/ac/4afeaa1517bb2e31c5236ac774b8ee39d2899c": "2687cbd6d6bb3d11e2395821c0f5054e",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/5a/199df3290a5535ceb49b128128653be7fbfe88": "a49a36d456401192a5851e4093cf07a6",
".git/objects/ea/620c88e3b2c1d40decb4ce7ff79f18f3456ebd": "5c3b5dd8d5393f4ebdb6587d5ffb1713",
".git/objects/30/fb9f5e31da15cfc5e072c3a34d14564659bcf4": "6ec2f87411464995d455e877916f1dd0",
".git/objects/30/f881f8d18c7195ba942fe79b8ad3f010553613": "736d27c90f547804f7c09ef3d76109f4",
".git/objects/5e/2a31cf0ca2d187da9edcc25694774e3881298f": "50696e59ff6e6620712e47dea65a3f82",
".git/objects/5e/b7dcbf39397dd9df5fa8a0a06ba3bec6382a99": "87403f0609fe3e88fbd21d681691a192",
".git/objects/5e/f17607e5686a8a4cd95d49ac2ac0fce889f722": "85a7512175a0ef0e87d815e777fc7236",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/56/cd700af7b3ffd22a0679c5a7f3817c5a2233e2": "a95484a506c1fa1e1491175b263eaeb1",
"index.html": "1092e35acbee2ea7f419dacc0214c5b2",
"/": "1092e35acbee2ea7f419dacc0214c5b2",
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
