import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import ReactPlayer from 'react-player'
import { ReactElement, useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

const videoUrl = "https://d1rip6qx2bmxf9.cloudfront.net/vr_banner_video.mp4"

export default function Home() {
  const [videoPlayer, setVideoPlayer] = useState<ReactElement | null>(null);

  useEffect(() => {
    setVideoPlayer(
      <ReactPlayer 
        controls={true} 
        url={videoUrl} 
        fallback={<p> Unable to load video...</p>}
        loop={true}
        playing={true}
        autoPlay={true}
      />
    )
  }, [])

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {videoPlayer}
        <div className={styles.description}>
          <h1>
           A demo of video Streaming app using cdn!
          </h1>
        </div>
      </main>
    </>
  )
}
