(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{298:function(e,t,a){"use strict";a.r(t);var i=a(10),n=Object(i.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h2",{attrs:{id:"extending-schemas"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#extending-schemas"}},[e._v("#")]),e._v(" Extending Schemas")]),e._v(" "),t("p",[e._v("Web app and clients can extend the ArFS Schema as needed by adding additional tags into the File and Folder MetaData Transaction JSON. This gives Developers additional flexibility to support specific application needs, without breaking the overall data model or impacting privacy.")]),e._v(" "),t("p",[e._v("For example a Music Sharing App could use the following expanded File Metadata for specific music files.")]),e._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v('{\n    "name": "<user defined file name>",\n    "size": <computed file size - int>,\n    "lastModifiedDate": <timestamp for OS reported time of file\'s last modified date represented as milliseconds since unix epoch - int>\n    "dataTxId": "<transaction id of stored data>",\n    "dataContentType": "<the mime type of the data associated with this file entity>"\n    "bandName": "<the name of the band/artist>"\n    "bandAlbum": "<the album of the band/artist>"\n    "albumSong": "<the title of the song>"\n}\n')])])]),t("p",[e._v("Additionally, the above extended Metadata fields could be added directly as a transaction tag as well, in order to support GraphQL queries.")]),e._v(" "),t("h2",{staticStyle:{"border-bottom":"none"}},[e._v("Arweave Transaction Headers can only fit a maximum of 2048 bytes total, so this must be taken into account by clients writing custom GQL tags.")])])}),[],!1,null,null,null);t.default=n.exports}}]);