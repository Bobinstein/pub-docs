(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{311:function(e,t,r){"use strict";r.r(t);var a=r(10),s=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"ardrive-price-calculator"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ardrive-price-calculator"}},[e._v("#")]),e._v(" ArDrive Price Calculator")]),e._v(" "),t("h2",{attrs:{id:"overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[e._v("#")]),e._v(" Overview")]),e._v(" "),t("p",[e._v("The "),t("a",{attrs:{href:"https://ardrive.io/pricing/",target:"_blank",rel:"noopener noreferrer"}},[e._v("ArDrive Price Calculator website"),t("OutboundLink")],1),e._v(" is open source, and its code can be viewed "),t("a",{attrs:{href:"https://github.com/ardriveapp/price-calculator",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("This website is intended to calculate the cost, in a wide variety of denominations and cryptocurrencies, of uploading data to Arweave. You can spin up your own version by cloning the code from Github and following these steps.")]),e._v(" "),t("h2",{attrs:{id:"developer-setup"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#developer-setup"}},[e._v("#")]),e._v(" Developer Setup")]),e._v(" "),t("p",[e._v("Follow these steps to get the developer environment up and running:")]),e._v(" "),t("h3",{attrs:{id:"install-yarn-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-yarn-2"}},[e._v("#")]),e._v(" Install Yarn 2")]),e._v(" "),t("p",[e._v("The ArDrive Price Calculator uses Yarn 2, so install the latest version with the "),t("a",{attrs:{href:"https://yarnpkg.com/getting-started/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("yarn installation instructions"),t("OutboundLink")],1),e._v(". In most cases:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Brew:")]),e._v("\nbrew "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Or with NPM:")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("npm")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-g")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v("\n")])])]),t("p",[e._v("We also use husky to manage the git commit hooks that help to improve the quality of our commits. Without installing husky, you risk committing non-compliant code to the repository.")]),e._v(" "),t("p",[e._v("Using husky triggers two pre-commit hooks. The first will run "),t("code",[e._v("lint-staged")]),e._v(" on each staged file, which includes running prettier to format, eslint for linting, and also tsc-files for quickly checking that TypeScript can compile the code. The second hook will test the codebase prior to committing, ensuring that all tests must pass.")]),e._v(" "),t("p",[e._v("To enable hooks locally, you will need to run:")]),e._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("yarn")]),e._v(" husky "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v("\n")])])]),t("h3",{attrs:{id:"nvm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nvm"}},[e._v("#")]),e._v(" NVM")]),e._v(" "),t("p",[e._v("This repository uses NVM and an "),t("code",[e._v(".nvmrc")]),e._v(" file to lock the Node version to the current version used by "),t("code",[e._v("ardrive-core-js")]),e._v(".")]),e._v(" "),t("p",[e._v("Note for Windows: "),t("strong",[e._v("We recommend using WSL")]),e._v(" for setting up NVM on Windows using the "),t("a",{attrs:{href:"https://code.visualstudio.com/docs/remote/wsl",target:"_blank",rel:"noopener noreferrer"}},[e._v("instructions described here"),t("OutboundLink")],1)]),e._v(" "),t("p",[e._v("Follow these steps to get NVM up and running on your system:")]),e._v(" "),t("ol",[t("li",[e._v("Install NVM using "),t("a",{attrs:{href:"https://github.com/nvm-sh/nvm#installing-and-updating",target:"_blank",rel:"noopener noreferrer"}},[e._v("these installation instructions"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("li",[e._v("Navigate to this project's root directory")]),e._v(" "),t("li",[e._v("Ensure that the correct version of Node is installed by performing: "),t("code",[e._v("nvm install")])]),e._v(" "),t("li",[t("strong",[e._v("Every time you start a new terminal session or switch to this project from another NPM project")]),e._v(", you should set the correct version of Node by running: "),t("code",[e._v("nvm use")])])]),e._v(" "),t("h3",{attrs:{id:"recommended-visual-studio-code-extensions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#recommended-visual-studio-code-extensions"}},[e._v("#")]),e._v(" Recommended Visual Studio Code extensions")]),e._v(" "),t("p",[e._v("To ensure your environment is compatible, we also recommend the following VSCode extensions:")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint",target:"_blank",rel:"noopener noreferrer"}},[e._v("ES-Lint"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig",target:"_blank",rel:"noopener noreferrer"}},[e._v("Editor-Config"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode",target:"_blank",rel:"noopener noreferrer"}},[e._v("Prettier"),t("OutboundLink")],1)]),e._v(" "),t("li",[t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=arcanis.vscode-zipfs",target:"_blank",rel:"noopener noreferrer"}},[e._v("ZipFS"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"available-scripts"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#available-scripts"}},[e._v("#")]),e._v(" Available Scripts")]),e._v(" "),t("h3",{attrs:{id:"yarn-start"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-start"}},[e._v("#")]),e._v(" yarn start")]),e._v(" "),t("p",[e._v("Runs the app in the development mode.\nOpen http://localhost:8080 to view it in the browser.")]),e._v(" "),t("p",[e._v("The page will reload if you make edits.\nYou will also see any lint errors in the console.")]),e._v(" "),t("h3",{attrs:{id:"yarn-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-build"}},[e._v("#")]),e._v(" yarn build")]),e._v(" "),t("p",[e._v("Builds a static copy of your site to the "),t("code",[e._v("build/")]),e._v(" folder.\nYour app is ready to be deployed!")]),e._v(" "),t("h3",{attrs:{id:"yarn-test"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-test"}},[e._v("#")]),e._v(" yarn test")]),e._v(" "),t("p",[e._v("Launches the application test runner.\nRun with the "),t("code",[e._v("--watch")]),e._v(" flag ("),t("code",[e._v("yarn test -- --watch")]),e._v(") to run in interactive watch mode.")]),e._v(" "),t("h3",{attrs:{id:"yarn-run-prod"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yarn-run-prod"}},[e._v("#")]),e._v(" yarn run:prod")]),e._v(" "),t("p",[e._v("Builds a fresh snowpack production build to the "),t("code",[e._v("build/")]),e._v(" folder\nThen launches that copy with "),t("code",[e._v("http-server-spa")]),e._v(" for local testing\nThe build will be available for preview at: "),t("a",{attrs:{href:"http://localhost:8080",target:"_blank",rel:"noopener noreferrer"}},[e._v("http://localhost:8080"),t("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=s.exports}}]);