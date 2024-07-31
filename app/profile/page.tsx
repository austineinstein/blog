import type { NextPage } from 'next';
import Head from 'next/head';
import GitHubProfile from '../components/GitHubProfile';
import ProjectInfo from '../components/ProjectInfo';
import Musings from '../components/Musings';
import TaskList from '../components/TaskList';
import PlaylistComponent from '../components/PlaylistComponent';



const Profile: NextPage = () => {
  const githubProfile = {
    username: 'Osana AD',
    bio: 'Rapping about open source today',
    avatarUrl: '',
    stats: {
      repositories: 30,
      followers: 0,
      following: 0,
    },
    githubUrl: 'https://github.com/austineinstein/blog', // Add your GitHub link here
  };

  const playlist = {
    playlistName: "My Coding Playlist",
    playlistUrl: "https://open.spotify.com/playlist/7rDFq3nrRPfcdSLHuFfsB7?si=40043d7502644cbf",
    tracks: [
      { name: "Thanksgiving Jam", artist: "Osana AD" },
      { name: "Classy", artist: "Osana AD" },
      { name: "Rhythm & Blues", artist: "Arya Starr" },
    ]
  };

  return (
    <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <Head>
        <title>Project Showcase</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
        <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <GitHubProfile {...githubProfile} />
          <div></div>Main Repo: Github.com/fancradle/thou
          <PlaylistComponent {...playlist} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
