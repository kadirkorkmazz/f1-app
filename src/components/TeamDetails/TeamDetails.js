import React from 'react';
import './TeamDetails.css';
import imagesDatabase from '../../Helpers/imagesDatabase.json';

function TeamDetails({
  trigger,
  setTeamDetailPopupToggle,
  selectedTeam,
  teamDetail,
  isTeamDetailLoading,
}) {
  const disablePopup = (e) => {
    if (e.target.className.includes('team-close-area')) {
      setTeamDetailPopupToggle(false);
    }
  };

  return trigger ? (
    <div className='teamDetailsCard team-close-area' onClick={disablePopup}>
      <div className='teamDetailsCardInner'>
        <div onClick={disablePopup} className='team-close-btn team-close-area'>
          X
        </div>
        <div className='teamDetailsCardLeftSide'>
          <div className='teamImg'>
            <img
              src={
                imagesDatabase.teams.find((team) => team.id === selectedTeam)
                  .imageUrl
              }
              alt='TeamPhoto'
            ></img>
          </div>
        </div>
        <div className='teamDetailsCardRightSide'>
          <div className='teamInfo'>
            <table className='teamDetailsTable team-info-left'>
              <tbody>
                <tr>
                  <th>Team</th>
                  <td>{!isTeamDetailLoading && teamDetail.team.name}</td>
                </tr>

                <tr>
                  <th>Foundation Year</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.foundation_year}
                  </td>
                </tr>
                <tr>
                  <th>First Pole</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.first_pole}
                  </td>
                </tr>
                <tr>
                  <th>First Victory</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.first_victory}
                  </td>
                </tr>

                <tr>
                  <th>First Points</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.first_points}
                  </td>
                </tr>
              </tbody>
            </table>
            <table className='teamDetailsTable team-info-right'>
              <tbody>
                <tr>
                  <th>Country</th>
                  <td>{!isTeamDetailLoading && teamDetail.team.nationality}</td>
                </tr>
                <tr>
                  <th>Debut</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.debut}
                  </td>
                </tr>

                <tr>
                  <th>President</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.president}
                  </td>
                </tr>
                <tr>
                  <th>Sports Director</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.sports_director}
                  </td>
                </tr>
                <tr>
                  <th>Technical Director</th>
                  <td>
                    {!isTeamDetailLoading &&
                      teamDetail.info &&
                      teamDetail.info.technical_director}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  ) : (
    ''
  );
}

export default TeamDetails;
