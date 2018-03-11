import { makeExecutableSchema } from 'graphql-tools'
import resolvers from './resolvers'

const typeDefs = `
  type Query {
    TwitchGames(limit:Int, offset:Int): TwitchGamesResult
    TwitchClips(game: String, cursor:String, limit:Int): TwitchClipResult
    OddSubjects: [OddshotSubjects]
    OddShots(name: String!, type: String!, after: String): [OddSubjectShots]
    mockSubjects: [OddshotSubjects]
    mockShots: [OddSubjectShots]
  }
  
  type TwitchGamesResult {
    offset: Int
    game : [TwitchGame]
  }
  
  type TwitchClipResult {
    cursor: String
    clip: [TwitchClip]
  }
  
  type OddshotSubjects {
    id: String
    name: String
    cover: String
    avatar: String
    followersCount: Int
    next: String
  }
  
  type OddSubjectShots {
   name: String
   createdDate: String
   thumbnail: String
   viewsCount: Int
   score: Int
   next: String
   renditions: [OddShotRenditions]
   streamer: Streamer
   subject: OddShotSubject
  }
  
  type OddshotProvider {
    name: String
  }
  
  type OddShotRenditions {
    url: String
    type: String
  }
  
  type Streamer {
    name: String
    provider: OddshotProvider
  }
  
  type OddShotSubject {
    name: String
  }
  
  type Language {
    code: String
  },
  
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
    mp4: String
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