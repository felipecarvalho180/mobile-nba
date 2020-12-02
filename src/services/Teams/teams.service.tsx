import app from "../app";
import { TEAMS } from '../../constants/logoConstants'

export interface Team {
  TeamID: number
  Key: string
  City: string
  Name: string
  LeagueID: number,
  StadiumID: number,
  Conference: string
  Division: string
  PrimaryColor: string
  SecondaryColor: string
  TertiaryColor: string
  QuaternaryColor: string
  WikipediaLogoUrl: string
  GlobalTeamID: number,
}

const getTeams = async () => {
  let response = await app.get({
    path: 'https://api.sportsdata.io/v3/nba/scores/json/teams'
  });
  const result = response.data.map((team: Team) => {
    const teamFound = Object.entries(TEAMS).find(item =>
      team.Name.toLowerCase() === item[1]) || 'bos'

    return ({
      ...team,
      WikipediaLogoUrl: `https://www.nba.com/.element/img/1.0/teamsites/logos/teamlogos_500x500/${teamFound[0]}.png`
    })
  })

  return result
}

export { getTeams }