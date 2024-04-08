"use client"
import { Button} from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import Link from 'next/link';
import {Skeleton} from "@nextui-org/react";
import { useEffect, useState } from 'react';
import ParticleBackground from '@/components/ui/particles';
import Particles from "react-tsparticles"; 
import ParticlesComponent from '@/components/ui/particles';

export default function Home() {
  const [loaded, setisloaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setisloaded(true)
    }, 100)
  })
  return (
    <div className="flex justify-center">
      <div className="text-center m-10">
        <h1 className="text-4xl font-bold mb-6">Welcome to GrowUAgency<p style={{
          color:"#55e6a5"
        }}>powered by GrowUAI®</p></h1>
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-3">
          {/* Tarjeta 1 */}
          <Skeleton isLoaded={loaded} className="rounded-lg">
          <div className="col-span-2">
            <Card isFooterBlurred className="w-100 h-60">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-white uppercase text-xl font-bold">AI</p>
                <h4 className="text-white font-medium text-3xl">Title Generator</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-120 object-cover"
                style={{ filter: 'blur(3px)' }}
                src="https://www.searchenginejournal.com/wp-content/uploads/2022/03/link-title-attribute-62271f9408818-sej.png"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                <p className="text-white text-2xs">Create amazing titles ✏️</p>
                </div>
                <Link href="/title">
                <Button className="text-tiny" style={{
                  backgroundColor:"#55e6a5"
                }} radius="full" size="sm">
                  Start
                </Button></Link>
              </CardFooter>
            </Card>
          </div>
          </Skeleton>

          {/* Repite este patrón para las tarjetas restantes */}
          <Skeleton isLoaded={loaded} className="rounded-lg">
          <div className="col-span-1">
            <Card isFooterBlurred className="w-full h-60">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-black uppercase text-xl font-bold">AI</p>
                <h4 className="text-black font-medium text-3xl">Hastag Generator</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-120 object-cover"
                style={{ filter: 'blur(3px)' }}
                src="https://static.abc.es/media/tecnologia/2018/09/21/intagramhashtag-kgAC--1248x698@abc.jpg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                <p className="text-black text-2xs">Suggest Hastags ⛓️</p>
                </div>
                <Link href="/hastag">
                <Button className="text-tiny" style={{
                  backgroundColor:"#55e6a5"
                }} radius="full" size="sm">
                  Start
                </Button></Link>
              </CardFooter>
            </Card>
          </div>
          </Skeleton>

          <Skeleton isLoaded={loaded} className="rounded-lg">
          <div className="col-span-1">
            <Card isFooterBlurred className="w-full h-60">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-white uppercase text-xl font-bold">Tendency</p>
                <h4 className="text-white font-medium text-3xl">Music Trends</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-120 object-cover"
                style={{ filter: 'blur(3px)' }}
                src="https://www.calypsoroom.com/images/Next-Decade-Music-Trends-What-Does-the-Future-Hold.jpg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                <p className="text-white text-2xs">Discover music in trend 🔥</p>
                </div>
                <Button isDisabled className="text-tiny" style={{
                  backgroundColor:"#55e6a5"
                }} radius="full" size="sm">
                  Start
                </Button>
              </CardFooter>
            </Card>
          </div>
          </Skeleton>

          <Skeleton isLoaded={loaded} className="rounded-lg">
          <div className="col-span-1">
            <Card isFooterBlurred className="w-full h-60">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-black uppercase text-xl font-bold">Tendency</p>
                <h4 className="text-black font-medium text-3xl">Trend Topics</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-120 -translate-y-6 object-cover"
                style={{ filter: 'blur(3px)' }}
                src="https://static.semrush.com/blog/uploads/media/7e/42/7e4270cb0db79e40b41144a38515983e/how-to-write-title-tags.svg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                <p className="text-black">Discover new topics in trend 🔥</p>
                </div>
                <Link href="/topics">
                <Button className="text-tiny" style={{
                  backgroundColor:"#55e6a5"
                }} radius="full" size="sm">
                  Start
                </Button></Link>
              </CardFooter>
            </Card>
          </div>
          </Skeleton>

          
          <div className="col-span-2">
          <Skeleton isLoaded={loaded} className="rounded-lg">
            <Card isFooterBlurred className="w-full h-60">
              <CardHeader className="absolute z-10 top-1 flex-col items-start">
                <p className="text-white uppercase text-xl font-bold">AI</p>
                <h4 className="text-white font-medium text-3xl">Ideas Generator</h4>
              </CardHeader>
              <Image
                removeWrapper
                alt="Card example background"
                className="z-0 w-full h-full scale-120 object-cover"
                style={{ filter: 'blur(3px)' }}
                src="https://impulsapopular.com/wp-content/uploads/2019/09/4578-C%C3%B3mo-sacar-provecho-a-la-lluvia-de-ideas.jpg"
              />
              <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
                <div>
                <p className="text-white">New ideas for your posts 🚀</p>
                </div>
                <Link href="/ideas">
                <Button className="text-tiny" style={{
                  backgroundColor:"#55e6a5"
                }} radius="full" size="sm">
                  Start
                </Button></Link>
              </CardFooter>
            </Card>
            </Skeleton>
          </div>

          {/* Repite este patrón para las tarjetas restantes */}
          
          
        </div>
      </div>
    </div>
  );
}
