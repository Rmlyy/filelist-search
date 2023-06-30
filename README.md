# filelist-search

This app offers an interactive TUI (text-based user interface) to easily search the private tracker, [FileList](https://filelist.io) for torrents and download them to a specific directory. This is especially useful in conjunction with qBittorrent's directory monitoring feature to automatically add torrents from a monitored directory.

## Requirements

- A relatively new [Node.JS](https://nodejs.org) version installed (tested with v18.xx.xx)
- [Yarn](https://yarnpkg.co) package manager installed
- [git](https://git-scm.com) installed (not really required if you can download the app files through other means)

## Usage

1. Clone the repo

```
$ git clone https://github.com/Rmlyy/filelist-search.git
```

2. CD into the repo

```
$ cd filelist-search
```

3. Create a `.env` file with the following:

```
USERNAME=<username>
PASSKEY=<passkey>
DOWNLOAD_DIR=</path/to/download/dir>
```

4. Install the required dependencies for the app:

```sh
$ yarn install
```

5. Run the app!

```sh
$ node src/app.js
```
