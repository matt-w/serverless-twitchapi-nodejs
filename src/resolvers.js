import { FetchTwitchData} from './fetchapi'

const resolvers = {
  Query: {
    TwitchGames: (_, args) => (
      FetchTwitchData.getGames(args.offset)
        .then(res => (
          prepare(res.paging, res.data)
        ))
    ),
    TwitchClips: (_, args) => (
      FetchTwitchData.getClips(args.game)
        .then(res => (
          prepare(res.paging, res.data)
        ))
    )
  }
}

const prepare = (nextSet, data) => (
  data.map( item => {
    item.next = nextSet.next
    return item
  })
)

export default resolvers