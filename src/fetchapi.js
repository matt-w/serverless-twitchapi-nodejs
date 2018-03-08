import fetch from 'node-fetch'
import querystring from 'querystring';
import { TWITCH } from './config'

export const FetchTwitchData = {
  init:  {
    method: "GET",
    headers: {
      "Client-ID": TWITCH.API_KEY
    }
  },
  getGames(offset=0){
    const url = `${TWITCH.URL}games/top?limit=100&offset=${offset}`
    return fetch(url, this.init)
      .then(res => res.json())
      .then(res => ({
          data: res.top.map(item => item.game ),
          paging: { next: querystring.parse(res._links.next).offset }
        })
      )
  },
  getClips(game=null){
    let url = `${TWITCH.URL}clips/top?limit=100&trending=true` + (game!=null ? `&game=${game}` : "")
    let init = this.init
    init.headers.Accept = "application/vnd.twitchtv.v5+json"
    return fetch(url, this.init)
      .then(res => res.json())
      .then(res => (
        {
          data: res.clips,
          paging: { next: res._cursor }
        }
      ))
  }
}