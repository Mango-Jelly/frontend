self.__BUILD_MANIFEST=function(e,s,i,o){return{__rewrites:{afterFiles:[{has:o,source:"/openvidu/:path*",destination:o},{has:o,source:"/ws/:path*",destination:o}],beforeFiles:[{has:[{type:e,key:s,value:i}],source:"/login",destination:"/(.)login"},{has:[{type:e,key:s,value:i}],source:"/newroom",destination:"/(.)newroom"},{has:[{type:e,key:s,value:i}],source:"/scenario/:id",destination:"/(.)scenario/:id"},{has:[{type:e,key:s,value:i}],source:"/signup",destination:"/(.)signup"},{has:[{type:e,key:s,value:i}],source:"/video/:id",destination:"/(.)video/:id"}],fallback:[]},"/_error":["static/chunks/pages/_error-e87e5963ec1b8011.js"],sortedPages:["/_app","/_error"]}}("header","Next-Url","(?:\\/(.*))?[\\/#\\?]?",void 0),self.__BUILD_MANIFEST_CB&&self.__BUILD_MANIFEST_CB();