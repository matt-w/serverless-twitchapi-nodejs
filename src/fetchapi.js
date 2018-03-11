import fetch from 'node-fetch'
import querystring from 'querystring';
import { TWITCH } from './config'

export const FetchTwitchData = {
  init: {
    method: "GET",
    headers: {
      "Client-ID": TWITCH.API_KEY
    }
  },
  getGames(limit=20, offset = 0) {
    const url = `${TWITCH.URL}games/top?limit=${limit}&offset=${offset}`
    return fetch(url, this.init)
      .then(res => res.json())
      .then(res => ({
          data: res.top.map(item => item.game),
          paging: {next: (res._links != null ? querystring.parse(res._links.next).offset : 0)}
        })
      )
  },
  getClips(game = "", cursor = "", limit = 10) {
    let url = `${TWITCH.URL}clips/top?trending=true` +
      `&limit=${limit}` +
      (cursor != "" ? `&cursor=${cursor}` : "") +
      (game != "" ? `&game=${game}` : "")

    let init = this.init
    init.headers.Accept = "application/vnd.twitchtv.v5+json"
    return fetch(url, this.init)
      .then(res => res.json())
      .then(res => (
        {
          data: res.clips,
          paging: {next: res._cursor}
        }
      ))
  }
}