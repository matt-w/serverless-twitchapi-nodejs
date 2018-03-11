import {FetchOddshotData, FetchTwitchData} from './fetchapi'

const resolvers = {
  Query: {
    TwitchGames: (_, args) => (
      FetchTwitchData.getGames(args.limit, args.offset)
        .then(res => {
          return {offset: res.paging.next, game: res.data}
        })
    ),
    TwitchClips: (_, args) => (
      FetchTwitchData.getClips(args.game, args.cursor, args.limit)
        .then(res => {
          return {cursor: res.paging.next, clip: setMP4(res.data)}
        })
    )
  }
}

const setMP4 = (data) => (
  data.map( item => {
    item.mp4 = item.thumbnails.medium.replace(/(-preview).*/, ".mp4")
    return item
  })
)

export default resolvers