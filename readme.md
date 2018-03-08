### Serverless framework: Twitch API with Nodejs


Twitch API wrapper using GraphQL, Nodejs, Serverless, Serverless-Webpack, and installed on AWS Lambda


#### config.js
This example requires a Twitch API client key that you must request from Twitch
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