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

## Download Your Slack data

See [https://slack.com/help/articles/201658943-Export-your-workspace-data](https://slack.com/help/articles/201658943-Export-your-workspace-data)

From the documentation at the link above:

1. From your desktop, click your workspace name in the top left.
1. Select Settings & administration from the menu, then click Workspace settings.
1. Choose Import/Export Data in the top right.
1. Select the Export tab.
1. Below Export date range, open the drop-down menu to select an option.
1. Click Start Export. We'll send you an email once it's ready.
1. Open the email and click Visit your workspace's export page.
1. Click Ready for download to access the zip file.

The zip file will contain your workspace's message history (in JSON format) and file links from all public channels.

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
