import React from 'react';

interface Track {
  name: string;
  artist: string;
}

interface PlaylistComponentProps {
  playlistName: string;
  playlistUrl: string;
  tracks: Track[];
}

const PlaylistComponent: React.FC<PlaylistComponentProps> = ({ playlistName, playlistUrl, tracks }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
      <h2 className="text-2xl font-bold mb-4">My Playlist: {playlistName}</h2>
      <div className="mb-4">
        <a 
          href={playlistUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 transition duration-300"
        >
          Listen on Spotify
        </a>
      </div>
      <ul className="space-y-2">
        {tracks.map((track, index) => (
          <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
            <span className="font-medium">{track.name}</span>
            <span className="text-gray-600 text-sm">{track.artist}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlaylistComponent;
