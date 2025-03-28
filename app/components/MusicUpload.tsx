"use client"

import type React from "react"

import { useState } from "react"
//import { ThirdwebStorage } from "@thirdweb-dev/storage"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Music, Upload, Check, AlertCircle, Loader2 } from "lucide-react"

export default function MusicUpload() {
  const [file, setFile] = useState<File | null>(null)
  const [title, setTitle] = useState("")
  const [artist, setArtist] = useState("")
  const [uploading, setUploading] = useState(false)
  const [uploadedUrl, setUploadedUrl] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0]
      // Check if file is an audio file
      if (!selectedFile.type.startsWith("audio/")) {
        setError("Please select an audio file")
        setFile(null)
        return
      }
      setFile(selectedFile)
      setError(null)
    }
  }

  const uploadToIPFS = async () => {
    if (!file) {
      setError("Please select a file to upload")
      return
    }

    if (!title) {
      setError("Please enter a title for the track")
      return
    }

    try {
      setUploading(true)
      setError(null)

      // Initialize ThirdwebStorage
      const storage = new ThirdwebStorage({
        secretKey: process.env.NEXT_PUBLIC_THIRDWEB_SECRET_KEY,
      })

      // Read file as array buffer
      const fileArrayBuffer = await file.arrayBuffer()

      // Upload the file to IPFS
      const fileUri = await storage.upload(fileArrayBuffer, {
        contentType: file.type,
      })

      // Create metadata for the music file
      const metadata = {
        name: title,
        artist: artist || "Unknown Artist",
        description: `Music track: ${title}`,
        image: "", // You could add album art here
        properties: {
          file: fileUri,
          type: file.type,
          size: file.size,
        },
      }

      // Upload metadata to IPFS
      const uri = await storage.upload(metadata)

      // Get a URL that can be used in the browser
      const url = await storage.resolveScheme(uri)

      setUploadedUrl(url)
      setUploading(false)
    } catch (err) {
      console.error("Upload error:", err)
      setError("Failed to upload file. Please check your API key and try again.")
      setUploading(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Music className="h-5 w-5" />
          Upload Music to IPFS
        </CardTitle>
        <CardDescription>Share your music on the decentralized web using IPFS storage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {error && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {uploadedUrl && (
          <Alert className="bg-green-50 text-green-800 border-green-200">
            <Check className="h-4 w-4 text-green-600" />
            <AlertTitle>Upload Successful!</AlertTitle>
            <AlertDescription className="mt-2">
              <p className="mb-2">Your music is now available on IPFS:</p>
              <a
                href={uploadedUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline break-all"
              >
                {uploadedUrl}
              </a>
            </AlertDescription>
          </Alert>
        )}

        <div className="space-y-2">
          <Label htmlFor="title">Track Title</Label>
          <Input id="title" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Enter track title" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="artist">Artist Name (optional)</Label>
          <Input
            id="artist"
            value={artist}
            onChange={(e) => setArtist(e.target.value)}
            placeholder="Enter artist name"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="music-file">Music File</Label>
          <div className="flex items-center gap-2">
            <Input
              id="music-file"
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              className="file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90"
            />
          </div>
          {file && (
            <p className="text-sm text-muted-foreground mt-1">
              Selected: {file.name} ({(file.size / (1024 * 1024)).toFixed(2)} MB)
            </p>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={uploadToIPFS} disabled={uploading || !file} className="w-full">
          {uploading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Uploading...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Upload to IPFS
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}

