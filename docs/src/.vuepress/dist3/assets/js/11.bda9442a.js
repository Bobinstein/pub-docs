(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{291:function(e,t,a){"use strict";a.r(t);var r=a(10),s=Object(r.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"arfs-protocol-a-decentralized-file-system-on-arweave"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arfs-protocol-a-decentralized-file-system-on-arweave"}},[e._v("#")]),e._v(" ArFS Protocol: A Decentralized File System on Arweave")]),e._v(" "),t("p",[e._v("Arweave File System, or “ArFS” is a data modeling, storage, and retrieval protocol designed to emulate common file system operations and to provide aspects of mutability to your data hierarchy on "),t("a",{attrs:{href:"https://ardrive.io/what-is-arweave/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave"),t("OutboundLink")],1),e._v("'s otherwise permanent, immutable data storage blockweave.")]),e._v(" "),t("p",[e._v("Due to Arweave's permanent, immutable and public nature traditional file system operations such as permissions, file/folder renaming and moving, and file updates cannot be done by simply updating the on-chain data model.")]),e._v(" "),t("p",[e._v("ArFS works around this by implementing a privacy and encryption pattern and defining an append-only transaction data model using tags within "),t("a",{attrs:{href:"https://docs.arweave.org/developers/server/http-api#transaction-format",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave Transaction headers"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h2",{attrs:{id:"key-features"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#key-features"}},[e._v("#")]),e._v(" Key Features")]),e._v(" "),t("h3",{attrs:{id:"file-structure"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-structure"}},[e._v("#")]),e._v(" File Structure")]),e._v(" "),t("p",[e._v("ArFS organizes files and folders using a hierarchical structure. Files are stored as individual transactions on the Arweave blockchain, while folders are metadata that reference these file transactions.")]),e._v(" "),t("h3",{attrs:{id:"metadata"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#metadata"}},[e._v("#")]),e._v(" Metadata")]),e._v(" "),t("p",[e._v("Each file and folder has associated metadata, such as the name, type, size, and modification timestamp. ArFS leverages Arweave's tagging system to store this metadata in a standardized format, which allows for easy querying and organization.")]),e._v(" "),t("h3",{attrs:{id:"file-permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-permissions"}},[e._v("#")]),e._v(" File Permissions")]),e._v(" "),t("p",[e._v("ArFS supports public and private file permissions. Public files can be accessed by anyone on the network, while private files are encrypted using the owner's private key, ensuring only they can decrypt and access the content.")]),e._v(" "),t("h3",{attrs:{id:"file-versioning"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#file-versioning"}},[e._v("#")]),e._v(" File Versioning")]),e._v(" "),t("p",[e._v("ArFS supports versioning of files, allowing users to store multiple versions of a file and access previous versions at any time. This is achieved by linking new file transactions to previous versions through the use of metadata tags.")]),e._v(" "),t("h3",{attrs:{id:"data-deduplication"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#data-deduplication"}},[e._v("#")]),e._v(" Data Deduplication")]),e._v(" "),t("p",[e._v("To minimize storage redundancy and costs, ArFS employs data deduplication techniques. If a user tries to store a file that already exists on the network, the protocol will simply create a new reference to the existing file instead of storing a duplicate copy.")]),e._v(" "),t("h3",{attrs:{id:"search-and-discovery"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#search-and-discovery"}},[e._v("#")]),e._v(" Search and Discovery")]),e._v(" "),t("p",[e._v("ArFS enables users to search and discover files based on their metadata, such as file names, types, and tags. This is made possible by indexing the metadata stored within the Arweave blockchain.")]),e._v(" "),t("h3",{attrs:{id:"interoperability"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#interoperability"}},[e._v("#")]),e._v(" Interoperability")]),e._v(" "),t("p",[e._v("ArFS is designed to be interoperable with other decentralized applications and services built on the Arweave network. This allows for seamless integration and collaboration between different applications and users.")]),e._v(" "),t("h2",{attrs:{id:"getting-started"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#getting-started"}},[e._v("#")]),e._v(" Getting Started")]),e._v(" "),t("p",[e._v("To start using ArFS, you'll need to familiarize yourself with the Arweave ecosystem, acquire AR tokens to cover storage costs, and choose a compatible client or library to interact with the ArFS protocol.")]),e._v(" "),t("h2",{attrs:{id:"arfs-version-history"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arfs-version-history"}},[e._v("#")]),e._v(" ArFS Version History")]),e._v(" "),t("div",{staticStyle:{"text-align":"center"}},[t("table",{staticClass:"inline-table"},[t("tr",[t("th",[e._v("Version")]),e._v(" "),t("th",[e._v("Date")]),e._v(" "),t("th",[e._v("Release Notes")])]),e._v(" "),t("tr",[t("td",[e._v("0.10")]),e._v(" "),t("td",[e._v("August 2020")]),e._v(" "),t("td",[e._v("The brief, beta version that was in use during initial testing of ArDrive across Web (Dart) and legacy CLI (Typescript).")])]),e._v(" "),t("tr",[t("td",[e._v("0.11")]),e._v(" "),t("td",[e._v("September 2020")]),e._v(" "),t("td",[e._v("Includes all of the major functionality supporting file systems on Arweave including new drives, folders, files, renames, moves and privacy.")])]),e._v(" "),t("tr",[t("td",[e._v("0.12")]),e._v(" "),t("td",[e._v("December 2022")]),e._v(" "),t("td",[e._v("Added Snapshot entities to support quick synchronization of drive state.")])])])]),e._v(" "),t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources"}},[e._v("#")]),e._v(" Resources")]),e._v(" "),t("p",[e._v("For more information, documentation, and community support, refer to the following resources:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://www.arweave.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave Official Website"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://docs.arweave.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave Developer Documentation"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://community.arweave.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Arweave Community Forums"),t("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=s.exports}}]);