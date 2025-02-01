CMS lets you quickly set up a personal project showcase and blog. It integrates your GitHub profile, project details, task list, blog posts (musings), and even your Spotify playlist. You can deploy it easily to Vercel.

## Summary

- **Tech Stack:**  
  Uses TypeScript along with the [viem](https://github.com/wagmi-dev/viem) library for blockchain interactions.
  
- **Key Imports Example:**

  ```typescript
  import { Hex, createPublicClient, formatEther, http, parseEther } from "viem";
  import { privateKeyToAccount } from "viem/accounts";
  import { arbitrumSepolia } from "viem/chains";
  ```

## Getting Started

### Prerequisites

- Node.js (v14+)
- npm or yarn
- GitHub account

### Installation Steps

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/austineinstein/blog.git && cd blog
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```

4. **Open in Browser:**
   Visit [http://localhost:3000](http://localhost:3000).

---

## Customization

Open `pages/index.tsx` to update your information:

- **GitHub Profile:**  
  Update `username`, `bio`, `avatarUrl`, stats, and `githubUrl`.
  
  ```typescript
  const githubProfile = {
    username: 'yourusername',
    bio: 'Your bio here',
    avatarUrl: 'https://github.com/yourusername.png',
    stats: { repositories: 10, followers: 100, following: 50 },
    githubUrl: 'https://github.com/yourusername',
  };
  ```

- **Project Information:**  
  Update `name`, `description`, and `currentFocus`.

  ```typescript
  const projectInfo = {
    name: 'Your Project Name',
    description: 'A brief project description',
    currentFocus: 'Current work focus',
  };
  ```

- **Blog Posts (Musings):**  
  Add or update posts.

  ```typescript
  const musings = [
    { date: '2023-07-25', content: 'First blog post content.' },
    { date: '2023-07-22', content: 'Another blog update.' },
  ];
  ```

- **Task List:**  
  Update your tasks.

  ```typescript
  const tasks = [
    { id: 1, description: 'Task 1', completed: true, tags: ['backend'] },
    { id: 2, description: 'Task 2', completed: false, tags: ['frontend'] },
  ];
  ```

- **Spotify Playlist:**  
  Insert your playlist URL.

  ```typescript
  const playlist = {
    playlistUrl: "https://open.spotify.com/playlist/your_playlist_id"
  };
  ```

---

## Deployment

Deploy your project to Vercel with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/austineinstein/blog)

*Tip:* Replace `austineinstein` in the URL with your GitHub username if you fork the repository.

---

By following these steps, you can set up, customize, and deploy your project showcase quickly and easily. Enjoy building your personal CMS!
