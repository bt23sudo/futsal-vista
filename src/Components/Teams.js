import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import TeamImage1 from '../Assets/WhatsApp Image 2024-09-13 at 8.13.56 PM.jpeg';
import TeamImage2 from '../Assets/WhatsApp Image 2024-09-13 at 8.14.03 PM.jpeg';
import TeamImage3 from '../Assets/WhatsApp Image 2024-09-13 at 8.14.11 PM (1).jpeg';
import trashBin from '../Assets/delete-icon.png'

const teamData = [
  {
    name: 'Saxons Fc',
    image: TeamImage1,
    established: '2019',
    captain: 'Razain Tariq',
    coach: 'Hamza Shah',
    manager: 'Shabir Khan',
    trialAvailable: true,
  },
  {
    name: 'Power Puff',
    image: TeamImage2,
    established: '2020',
    captain: 'Ali Kashif',
    coach: 'Mir Talha',
    manager: 'Mustufa Shah',
    trialAvailable: false,
  },
  {
    name: 'K-Town Fc',
    image: TeamImage3,
    established: '2019',
    captain: 'Ahmed Rizwan',
    coach: 'Rayyan Qureshi',
    manager: 'Hannan kaim Khani',
    trialAvailable: true,
  },
];

const Teams = () => {
  const [players, setPlayers] = useState([])
  const [formData, setFormData] = useState({
    name: "", position: "", team: "", age: "", phone: ""
  })

  const [selectedTeam, setSelectedTeam] = useState(null);
  useEffect(() => {
    setFormData({ ...formData, team: selectedTeam?.name })
  }, [selectedTeam])

  const handleApplyClick = (team) => {
    setSelectedTeam(team);
  };

  useEffect(() => {
    fetchPlayers()
  }, [])

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const res = await fetch('http://localhost:4003/register', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })
      const resJson = await res.json()
      alert(resJson.message)
      fetchPlayers()
    } catch (error) {
      console.log(error.message)
    }
  }

  const fetchPlayers = async () => {
    const res = await fetch('http://localhost:4003/get', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ team: selectedTeam })
    })
    const resJson = await res.json()
    // console.log(resJson)
    setPlayers(resJson.players)
  }
  const deleteUser = async (id) => {
    await fetch('http://localhost:4003/delete', {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id })
    })
    // const resJson = await res.json()
    fetchPlayers()
  }
  const handleClosePopup = () => {
    setSelectedTeam(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white flex flex-col items-center py-12">
      <h2 className="text-4xl font-bold mb-8">Our Teams</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {teamData.map((team, index) => (
          <motion.div
            key={index}
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg max-w-xs"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            {/* Trial Available Corner Piece */}
            <div className={`absolute top-2 right-2 px-3 py-1 rounded-lg text-white text-sm ${team.trialAvailable ? 'bg-purple-800' : 'bg-red-900'}`}>
              {team.trialAvailable ? 'Trial Available' : 'Not Available'}
            </div>

            <img
              src={team.image}
              alt={team.name}
              className="w-full h-40 object-cover rounded-t-lg mb-4"
            />
            <h4 className="text-xl font-semibold mb-2 text-center">{team.name}</h4>
            <p className="text-sm text-center mb-1">Established in: {team.established}</p>
            <p className="text-sm text-center mb-1">Captain: {team.captain}</p>
            <p className="text-sm text-center mb-1">Coach: {team.coach}</p>
            <p className="text-sm text-center mb-2">Manager: {team.manager}</p>
            <button
              className="w-full bg-purple-700 hover:bg-purple-900 text-white py-2 px-4 rounded-lg"
              onClick={() => handleApplyClick(team)}
            >
              Apply Now
            </button>
          </motion.div>
        ))}
      </div>

      {/* Pop-up Form */}
      {selectedTeam && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg max-w-sm w-full">
            <h3 className="text-2xl font-bold mb-4 text-purple-600">Apply to {selectedTeam.name}</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm mb-1">Name</label>
                <input type="text" id="name" value={formData.name} onChange={(e) => { setFormData({ ...formData, name: e.target.value }) }} className="w-full p-2 bg-gray-700 text-white rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="phone number" className="block text-sm mb-1">Phone number</label>
                <input type="phone number" id="phone number" value={formData.phone} onChange={(e) => { setFormData({ ...formData, phone: e.target.value }) }} className="w-full p-2 bg-gray-700 text-white rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="position" className="block text-sm mb-1">Position</label>
                <input type="position" id="position" value={formData.position} onChange={(e) => { setFormData({ ...formData, position: e.target.value }) }} className="w-full p-2 bg-gray-700 text-white rounded-lg" />
              </div>
              <div className="mb-4">
                <label htmlFor="age" className="block text-sm mb-1">Age</label>
                {/* <textarea id="age" rows="4" className="w-full p-2 bg-gray-700 text-white rounded-lg"></textarea> */}
                <input type="number" value={formData.age} onChange={(e) => { setFormData({ ...formData, age: e.target.value }) }} className="w-full p-2 bg-gray-700 text-white rounded-lg" />
              </div>
              <button type="submit" className="w-full bg-purple-700 hover:bg-purple-900 text-white py-2 px-4 rounded-lg">
                Submit
              </button>
            </form>
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleClosePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}
      <div className="members-list">
        {players?.length > 0 && <table class="players-table">
          {selectedTeam ? selectedTeam + " Members" : 'All Team Members'}
          <thead>
            <tr>
              <th>Name</th>
              <th>Position</th>
              <th>Age</th>
              <th>Team</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player) => {
              return (
                <tr>
                  <td>{player.name}</td>
                  <td>{player.position}</td>
                  <td>{player.age}</td>
                  <td>{player.team}</td>
                  <td>{player.phone}</td>
                  <td>
                    <button onClick={() => deleteUser(player._id)} className="delete-btn">
                      <img src={trashBin} alt="" />
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>}
      </div>
    </div>
  );
};

export default Teams;
