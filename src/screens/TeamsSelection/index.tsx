import React, { useEffect, useState } from 'react'
import { SelectedTeamWrapper, TeamsContent, TeamsScroll, TeamsWrapper } from './style'
import TeamCard from './TeamCard'
import { getTeams, Team } from '../../services/Teams/teams.service'
import { useAnimatedStyle, useSharedValue, withTiming, interpolate, Extrapolate } from 'react-native-reanimated'
import { Dimensions } from 'react-native'
import ConfirmModal from '../../components/confirm-modal'

const screenHeight = Dimensions.get('screen').height

const TeamsSelection: React.FC = () => {
  const teamsWrapperAnimation = useSharedValue(1)
  const selectedTeamAnimation = useSharedValue(0)

  const [teams, setTeams] = useState<Team[]>([])
  const [selectedTeam, setSelectedTeam] = useState<Team>()

  useEffect(() => {
    async function getDataTeams() {
      const result = await getTeams()
      setTeams(result)
    } getDataTeams()
  }, [])

  useEffect(() => {
    if (selectedTeam) {
      selectedTeamAnimation.value = withTiming(-70, {
        duration: 250
      }, () => {
        teamsWrapperAnimation.value = withTiming(0, {
          duration: 500
        })
      })
    } else {
      teamsWrapperAnimation.value = withTiming(1, {
        duration: 500
      }, () => {
        selectedTeamAnimation.value = withTiming(0, {
          duration: 250
        })
      })
    }
  }, [selectedTeam])

  function handleTeamSelect(team: Team) {
    if (selectedTeam?.Key !== team.Key) {
      setSelectedTeam(team)
    } else {
      setSelectedTeam(undefined)
    }
  }

  const teamsWrapperStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        teamsWrapperAnimation.value,
        [0, 1],
        [0, 1],
        Extrapolate.CLAMP
      ),
      height: interpolate(
        teamsWrapperAnimation.value,
        [0, 1],
        [0, screenHeight],
        Extrapolate.CLAMP
      )
    }
  })

  const selectedTeamStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        selectedTeamAnimation.value,
        [0, -70],
        [0, 1],
        Extrapolate.CLAMP
      ),
      transform: [{
        translateY: selectedTeamAnimation.value
      }]
    }
  })

  return (
    <TeamsWrapper>
      {selectedTeam && (
        <SelectedTeamWrapper style={selectedTeamStyle}>
          <ConfirmModal team={selectedTeam} onPress={handleTeamSelect} />
        </SelectedTeamWrapper>
      )}
      <TeamsScroll style={[teamsWrapperStyle]}>
        <TeamsContent>
          {teams.map((team) => (
            <TeamCard key={team.Key} team={team} onPress={handleTeamSelect} />
          ))}
        </TeamsContent>
      </TeamsScroll>
    </TeamsWrapper>
  )
}

export default TeamsSelection