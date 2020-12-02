import React, { useEffect, useState } from 'react'
import { TeamScroll, TeamsWrapper } from './style'
import TeamCard from './TeamCard'
import { getTeams, Team } from '../../services/Teams/teams.service'
import { ScrollView } from 'react-native'


const TeamsSelection: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([])

  useEffect(() => {
    async function getDataTeams() {
      const result = await getTeams()
      setTeams(result)
    } getDataTeams()
  }, [])

  return (
    <TeamsWrapper>
      <TeamScroll>
        {teams.map((team) => (
          <TeamCard key={team.Key} {...team} />
        ))}
      </TeamScroll>
    </TeamsWrapper>
  )
}

export default TeamsSelection