import React from 'react';
import Card from 'react-bootstrap/Card';
import teamImages from '../../Helpers/imagesDatabase.json';
import './Teams.css';
import TeamDetails from '../TeamDetails/TeamDetails';
import { getTeamDataFromApi } from '../../Helpers/getTeamDataFromApi';
import { useState, useEffect } from 'react';
import alternativeTeamData from '../../Helpers/alternativeDatas/TeamInfoData.json';

function Teams({ teams }) {
  const [selectedTeam, setSelectedTeam] = useState('sr:competitor:41127');
  const [teamDetailPopupToggle, setTeamDetailPopupToggle] = useState(false);
  const [teamDetail, setTeamDetail] = useState(alternativeTeamData);
  const [isTeamDetailLoading, setIsTeamDetailLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTeamDataFromApi(selectedTeam);
        setTeamDetail(data);
        setIsTeamDetailLoading(false);
      } catch (error) {
        setIsTeamDetailLoading(false);
        console.log(
          'Sorgu sınırı dolduğu için alternatif takım datası alındı.'
        );
      }
    };

    fetchData();
  }, [selectedTeam]);

  const handleTeamCardClick = (e) => {
    setSelectedTeam(e.target.dataset.team);
    setTeamDetailPopupToggle(true);
  };

  return (
    <div id='teamsPage'>
      <h1>F1 Teams 2022</h1>
      <div id='teamCards'>
        {teams.map((team) => (
          <Card onClick={handleTeamCardClick} key={team.id} data-team={team.id}>
            <Card.Img
              data-team={team.id}
              className='teamImage'
              variant='top'
              src={teamImages.teams.find((x) => x.id === team.id).imageUrl}
            />
            <Card.Body data-team={team.id}>
              <Card.Title data-team={team.id}>
                {team.name.toUpperCase()}
              </Card.Title>
              <Card.Text data-team={team.id}>
                {team.nationality.toUpperCase()}
              </Card.Text>
              <Card.Text className='teamPoints' data-team={team.id}>
                {team.result.points > 0
                  ? 'Team Points: ' + team.result.points
                  : 'No Points'}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
      <TeamDetails
        trigger={teamDetailPopupToggle}
        setTeamDetailPopupToggle={setTeamDetailPopupToggle}
        selectedTeam={selectedTeam}
        teamDetail={teamDetail}
        isTeamDetailLoading={isTeamDetailLoading}
      />
    </div>
  );
}

export default Teams;
