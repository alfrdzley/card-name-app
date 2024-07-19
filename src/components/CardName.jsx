import React from 'react';
import profileImage from '../img/alfaridzi.jpeg'; // Ubah path sesuai dengan nama file gambar Anda

const CardName = ({ name, username, title, repositories, stars }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 text-white m-4">
      <div className="flex items-center p-4">
        <img className="w-16 h-16 rounded-full mr-4" src={profileImage} alt="Profile" /> {/* Gunakan gambar yang diimport */}
        <div>
          <div className="font-bold text-xl">{name}</div>
          <div className="text-gray-400">{username}</div>
        </div>
      </div>
      <div className="px-6 py-4">
        <div className="text-gray-400 mb-2">{title}</div>
        <div className="flex items-center">
          <div className="mr-4">
            <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400 mr-2">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 01-8 0m8 0a4 4 0 11-8 0m8 0v1m-8-1v1m0 8h8a2 2 0 012 2v1H6v-1a2 2 0 012-2zm-2-6a6 6 0 1112 0 6 6 0 01-12 0z"></path></svg>
              {repositories} repositories
            </span>
            <span className="inline-block bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-gray-400">
              <svg className="w-4 h-4 inline-block mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0a1.65 1.65 0 001.566 1.119h1.067c.969 0 1.372 1.24.588 1.81l-.865.63a1.65 1.65 0 00-.568 1.83l.324 1.056c.3.921-.755 1.688-1.54 1.117l-.865-.63a1.65 1.65 0 00-1.932 0l-.865.63c-.785.571-1.84-.196-1.54-1.117l.324-1.056a1.65 1.65 0 00-.568-1.83l-.865-.63c-.784-.57-.381-1.81.588-1.81h1.067a1.65 1.65 0 001.566-1.118v0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v5"></path></svg>
              {stars} stars
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardName;
