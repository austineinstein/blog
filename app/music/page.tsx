import MusicUpload from '../components/MusicUpload'



export const metadata = {
  title: "Upload Music | Blog",
  description: "Upload your music tracks to IPFS",
}

export default function UploadMusicPage() {
  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Share Your Music</h1>
      <p className="text-center text-muted-foreground mb-8">Upload your music to IPFS and share it with the world</p>
      <MusicUpload />
    </div>
  )
}

