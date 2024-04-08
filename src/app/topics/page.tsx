"use client"
import { Button, Link, Input } from '@nextui-org/react';
import { useState } from 'react';
import ParticleBackground from '@/components/ui/particles';
import { useEffect } from 'react';
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

interface Video {
  kind: string;
  etag: string;
  id: string;
  snippet: {
    publishedAt: string;
    channelId: string;
    title: string;
    description: string;
    thumbnails: {
      default: {
        url: string;
        width: number;
        height: number;
      };
      medium: {
        url: string;
        width: number;
        height: number;
      };
      high: {
        url: string;
        width: number;
        height: number;
      };
      standard: {
        url: string;
        width: number;
        height: number;
      };
      maxres: {
        url: string;
        width: number;
        height: number;
      };
    };
    channelTitle: string;
    tags: string[];
    categoryId: string;
    liveBroadcastContent: string;
    defaultLanguage: string;
    localized: {
      title: string;
      description: string;
    };
    defaultAudioLanguage: string;
  };
}

interface VideoListProps {
  videos: Video[];
}

export default function Home() {
  const [value, setValue] = useState<Video[]>([]);
  const [clicked, setClicked] = useState(false);
  const [inputvalue, setInputValue] = useState('');
  const [nextPageToken, setNextPageToken] = useState<string | null>(null);

  const sendtoAPI = () => {
    setClicked(true);
    const fetchVideos = (pageToken: string | null) => {
      let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=ES&key=${process.env.NEXT_PUBLIC_YOUTUBE_KEY}`;
      if (pageToken) {
        url += `&pageToken=${pageToken}`;
      }
      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setClicked(false);
          // Append the new videos to the existing ones
          setValue(prevValue => prevValue ? [...prevValue, ...data.items] : data.items);
          // If there are more pages, recursively fetch them
          if (data.nextPageToken) {
            fetchVideos(data.nextPageToken);
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setClicked(false);
        });
    };
  
    fetchVideos(null); // Start fetching from the first page
  };
  return (
    <div>
      <Link href="/">
        <Button isIconOnly variant="solid" style={{ backgroundColor: '#55e6a5' }} className="m-2 rounded-md">
          <svg style={{ margin: '15px' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </Button>
      </Link>
      <div className="flex justify-center">
        <div className="text-center m-10">
          <h1 className="text-4xl font-bold mb-6">
            These are the Trends 🔥<p style={{ color: '#55e6a5' }}>powered by GrowUAI®</p>
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
            <div className="col-span-1">
              <div className="w-full px-3 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-green-200 to-green-800 text-white shadow-lg">
                {!clicked && (
                  <Button className="m-2 w-full" variant="shadow" style={{ backgroundColor: 'white' }} onClick={sendtoAPI}>
                    <svg style={{ margin: '48%' }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z" />
                    </svg>
                  </Button>
                )}
                {clicked && <Button variant="shadow" className="m-2 w-full" isLoading style={{ backgroundColor: 'white' }} />}
              </div>
            </div>
            {value && value.map((video, index) => (
                <Card key={video.id} className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <div className="flex justify-between w-full">
                    <div>
                    <p className="text-tiny uppercase font-bold">{video.snippet.channelTitle}</p>
                    </div>
                    <small className="text-default-500">#{index+1}</small>
                </div>
                <h4 className="font-bold text-large">{video.snippet.title}</h4>
                </CardHeader>

                <CardBody className="overflow-visible py-2">
                  {video.snippet.thumbnails.maxres && <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={video.snippet.thumbnails.maxres.url} 
                    width="100%"
                  />}
                    <p className="text-gray-700">{video.snippet.description}</p>
                </CardBody>
                <Link href={`https://www.youtube.com/watch?v=${video.id}`}>
                <Button variant="solid" className="m-2 w-full" style={{ backgroundColor: '#55e6a5' }} >
                <svg style={{
                   margin:"48%"
                }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z"/></svg>
                </Button>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
