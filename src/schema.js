import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Query {
    TwitchGames(offset:Int): [TwitchGame]
    TwitchClips(game: String): [TwitchClip]
  }
  
  type Language {
    code: String
  }
  
  type TwitchGame {
    name: String
    popularity: Int
    _id: Int
    box: TwitchBox
    logo: TwitchLogo
    next: Int
  }
  
  type TwitchClip {
    slug: String
    url: String
    embed_url: String
    broadcaster: TwitchBroadcaster
    curator: TwitchCurator
    vod: TwitchVod
    broadcast_id: String
    game: String
    language: String
    title: String
    views: Int
    duration: Float
    create_at: String
    thumbnails: TwitchThumbnails
  }
  
  type TwitchBox {
    large: String
    medium: String
    small: String
    template: String
  }
  
  type TwitchLogo {
    large: String
    medium: String
    small: String
    template: String
  }
  
  type TwitchBroadcaster {
    id: String
    name: String
    display_name: String
    channel_url: String
    logo: String
  }
  
  type TwitchCurator {
    id: String
    name: String
    display_name: String
    channel_url: String
    logo: String
  }
  
  type TwitchVod {
    id: String
    url: String
    offset: Int
  }
  
  type TwitchThumbnails {
    medium: String
    small: String
    tiny: String
  }
`

export default makeExecutableSchema({ typeDefs, resolvers})