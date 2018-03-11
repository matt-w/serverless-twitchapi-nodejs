### Serverless framework: Twitch API with Nodejs


Twitch API wrapper for Clips and Games using GraphQL, Nodejs, Serverless, Serverless-Webpack, and installed on AWS Lambda


#### config.js
This example requires a Twitch API client key that you must request from Twitch.
Place the following code into a *config.js* file in the /src folder of your project and put your key into the API_KEY value.

*Note:* Twitch are in the process of rewriting their API so you should follow their development time line and make changes as required.

```
//config.js

export const TWITCH = {
  URL: "https://api.twitch.tv/kraken/",
  API_KEY: "YOUR-TWITCH-API-CLIENT-ID",
}
```

Useful Serverless commands:
1. Offline testing: sls offline start
2. sls deploy --aws-profile <aws profile>
3. sls deploy function -f <function name>

### Graphql Examples:


#### Games

Get games with a limit and offset
```html
query getGames($limit: Int=20, $offset: Int=0){
  TwitchGames(limit:$limit, offset:$offset) {
    offset
    game {
      name
      popularity
      _id
      box {
        large
      }
      logo {
        large
      }
    }
  }
}
```
variables:
```html
{
  "limit": 10,
  "offset": 0
}
```


#### Clips

Get first 20 clips:
```html
query getClips($game: String, $limit: Int, $cursor: String) {
  TwitchClips(game: $game,  limit: $limit, cursor: $cursor) {
    cursor
    clip {
      game
      title
      mp4
      thumbnails {
        medium
      }
    }
  }
}
```

Get first 20 clips using variables
```html
query getClips($game: String, $limit: Int, $cursor: String) {
  TwitchClips(game: $game,  limit: $limit, cursor: $cursor) {
      cursor
      clip {
        game
        title
        mp4
        thumbnails {
          medium
        }
      }
    }
  }
```

variables
```html
{
    "game": "Overwatch", 
    "limit": 20,
    "cursor": ""
}
```


Get the top 20 recent Clips with all metadata
```html
query getClips($game: String, $limit: Int, $cursor: String) {
  TwitchClips(game: $game,  limit: $limit, cursor: $cursor) {
    cursor
    clip {
      slug
      url
      embed_url
      broadcaster {
        id
        name
        display_name
        channel_url
        logo
      }
      curator {
        id
        name
        display_name
        channel_url
        logo
      }
      vod {
        id
        url
        offset
      }
      mp4
      broadcast_id
      game
      language
      title
      views
      duration
      create_at
      thumbnails {
        medium
      }
    }
  }
}
```