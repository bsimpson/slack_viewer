# Welcome to the Slack Archive Viewer

Why? This was an experiment to quickly show archived Slack data. It was also a pretty compelling reason
to mess around with Node, Bootstrap 4, and Express

## Setup

You will need to export Slack data. Download the zipped JSON file from:
https://<your-team-name>.slack.com/services/export

## Install Node

Instructions vary per operating system, so check out the instructions at https://nodejs.org/en/download/

## Checkout this project

```
git clone github.com/bsimpson/slack_viewer
cd slack_viewer
```

## Unzip the Slack data into a 'data' directory in the project

```
mkdir data
cd data
cp /path/to/download.zip ./
unzip download.zip
```

You should have a list of files like (your contents will vary)

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

## Start the webserver

```
PORT=8000 npm start
```

Navigate to http://localhost:8000

Enjoy!
