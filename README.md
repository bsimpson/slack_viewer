# Welcome to the Slack Archive Viewer

Why? This was an experiment to quickly show archived Slack data. It was also a pretty compelling reason
to mess around with Node, Bootstrap 4, and Express

![Screenshot of Archive Viewer](public/Screenshot-2018-4-9%20food-and-kitchen.png)

## Setup

You will need to export Slack data. Download the zipped JSON file from:
`https://<your-team-name>.slack.com/services/export`

## Install Node

Instructions vary per operating system, so check out the instructions at [NodeJS download](https://nodejs.org/en/download/)

## Checkout this project

```
git clone git@github.com:bsimpson/slack_viewer.git
cd slack_viewer
```

## Unzip the Slack data into a 'data' directory in the project

```
mkdir data
cd data
mv /path/to/slack_download.zip ./
unzip slack_download.zip
```

You should have a list of files in your data/ directory (your contents will vary)

```
|-- channels.json
|-- users.json
|-- whining
│   |-- 2015-06-25.json
│   |-- 2015-06-29.json
|-- wood-working
    |-- 2017-03-27.json
...
etc
```

## Install modules

`npm install`

## Start the webserver

```
PORT=8000 npm start
```

Navigate to http://localhost:8000

Enjoy!
