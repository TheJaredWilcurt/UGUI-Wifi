[![Join the chat at https://gitter.im/UniversalGUI/UGUI](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/UniversalGUI/UGUI?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge) [![Community forums at ugui.reddit.com](http://ugui.io/_img/badge-reddit.svg)](http://reddit.com/r/UGUI)

##UGUI: Wifi

This app allows you to view networks in your area and connect to them.

<p align="center"><img src="http://i.imgur.com/SPRZbZj.png" alt="Screenshot of UGUI: Wifi" /></p>

* * *

###Windows Easy Install Instructions

1. Download the [latest release](https://github.com/TheJaredWilcurt/UGUI-Wifi/releases/download/v1.0.0/UGUI-Wifi-1.0.0-win.zip)
2. Unzip it.
3. Open it and run `UGUI-Wifi.exe`

* * *

###Windows Advanced Install Instructions

1. Install Node.js: [nodejs.org](http://nodejs.org)
2. Download [this repo](https://github.com/TheJaredWilcurt/UGUI-Wifi/archive/master.zip), unzip it, and go to it in the command line
3. Download dependencies: `npm install`
4. Run the app: `npm start`

* * *

###OSX Install Instructions

1. Install Node.js: [nodejs.org](http://nodejs.org)
2. Download [this repo](https://github.com/TheJaredWilcurt/UGUI-Wifi/archive/master.zip), unzip it, and go to it in the terminal
3. Download dependencies: `npm install`
4. Run the app: `npm start`

* * *

###Ubuntu Install Instructions

1. Download [this repo](https://github.com/TheJaredWilcurt/UGUI-Wifi/archive/master.zip), unzip it, and go to it in the terminal.
2. Install Node.js: `sudo apt-get install nodejs`
3. Install NPM: `sudo apt-get install npm`
4. Create a symbolic link for node `sudo ln -s /usr/bin/nodejs /usr/bin/node`
5. Download dependencies: `npm install`
6. Run the app: `npm start`

* * *

###Project Roadmap

1. Maybe add in a refresh button for the list?
2. Currently we are listing all access points, but we only connect to an SSID, even if there are multiple networks there. This process could potentially be improved.

Will accept pull requests for new features.

* * *

###Known Issues

1. This might not work on Linux Mint, but I only officially support Ubuntu 12 and 14 anyways.

* * *

###Credits

**People**

* [The Jared Wilcurt](http://github.com/TheJaredWilcurt) - Creator/Maintainer
* [Martz90](http://martz90.deviantart.com) - App Icon Design

**Technology**

* [wifi-control-node](https://github.com/msolters/wifi-control-node) - The heart of this app.
* [NW.JS](http://nwjs.io) - The foundation of UGUI! Special thanks to [Roger Wang](https://github.com/rogerwang).
 * [IO.JS](http://iojs.org)
 * [Chromium](http://www.chromium.org)
 * [V8](https://code.google.com/p/v8)
* [jQuery](http://jquery.com)
* [Twitter Bootstrap](http://getbootstrap.com)
* [Bootswatch](http://bootswatch.com)
* [Cut, Copy, Paste Context Menu](https://github.com/b1rdex/nw-contextmenu)
* [Sass](http://sass-lang.com) - Just cuz it's awesome
