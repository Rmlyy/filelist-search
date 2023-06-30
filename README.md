# filelist-search

This app offers an interactive TUI (text-based user interface) to easily search the private tracker, [FileList](https://filelist.io) for torrents and download them to a specific directory. This is especially useful in conjunction with qBittorrent's directory monitoring feature to automatically add torrents from a monitored directory.

## Requirements

- A relatively new [Node.JS](https://nodejs.org) version installed (tested with v18.xx.xx)
- [Yarn](https://yarnpkg.co) package manager installed
- [git](https://git-scm.com) installed (not really required)

## Usage

1. Clone the repo

//1. After getting the app files, create a `.env` file with the following:

```
USERNAME=<username>
PASSKEY=<passkey>
DOWNLOAD_DIR=</path/to/download/dir>
```

2. Install the required dependencies for the app:

```sh
$ yarn install
```

3. Run the app!

```sh
$ node src/app.js
```
