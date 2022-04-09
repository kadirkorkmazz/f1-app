import React from 'react';
import Card from 'react-bootstrap/Card';
import teamImages from '../../Helpers/imagesDatabase.json';
import './Teams.css';

function Teams({ teams }) {
  return (
    <div id='teamsPage'>
      <h1>F1 Teams 2022</h1>
      <div id='teamCards'>
        {teams.map((team) => (
          <Card key={team.id}>
            <Card.Img
              className='teamImage'
              variant='top'
              src={teamImages.teams.find((x) => x.id === team.id).imageUrl}
            />
            <Card.Body>
              <Card.Title>{team.name.toUpperCase()}</Card.Title>
              <Card.Text> {team.nationality.toUpperCase()} </Card.Text>
              <Card.Text>
                {' '}
                {team.result.points > 0
                  ? 'Team Points: ' + team.result.points
                  : 'No Points'}{' '}
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Teams;
