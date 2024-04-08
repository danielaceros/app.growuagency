"use client"
import { CardContent } from '@/components/ui/card';
import { Button, Link, input} from '@nextui-org/react';
import { Card, CardHeader, CardBody, CardFooter} from "@nextui-org/react";
import { Image } from '@nextui-org/react';
import { Input } from "@nextui-org/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {Textarea} from "@nextui-org/react";
import { useState } from 'react';

// Componente de la página principal
export default function Home() {
  const [value, setValue] = useState('');
  const [clicked, setClicked] = useState(false);
  const [inputvalue, setInputValue] = useState('');
  const sendtoAI = () => {
    setClicked(true)
    fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_KEY}`, // Reemplaza con tu propia clave de API de OpenAI
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: `Genera hastags, en formato bullet points, para un vídeo de Youtube sobre: ${inputvalue}` }],
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setClicked(false)
        setValue(data.choices[0].message.content);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  };
  return (
    <div>
    <Link href="/">
        <Button isIconOnly variant='solid' style={{
            backgroundColor:"#55e6a5"
        }} className="m-2 rounded-md">
        <svg style={{
            margin:"15px"
        }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
        </Button>
    </Link>
    <div className="flex justify-center">
      <div className="text-center m-10">
        <h1 className="text-4xl font-bold mb-6">Generate Hastags ⛓️<p style={{
          color:"#55e6a5"
        }}>powered by GrowUAI®</p></h1>
        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-5">
          <div className="col-span-1">
          <div className="w-full px-3 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-green-200 to-green-800 text-white shadow-lg">
          <Input
            label="Search"
            isClearable
            className='m-2'
            radius="lg"
            value={inputvalue}
            onValueChange={setInputValue}
            classNames={{
              label: "text-black/50 dark:text-white/90",
              input: [
                "bg-transparent",
                "text-black/90 dark:text-white/90",
                "placeholder:text-default-700/50 dark:placeholder:text-white/60",
              ],
              innerWrapper: "bg-transparent",
              inputWrapper: [
                "shadow-xl",
                "bg-default-200/50",
                "dark:bg-default/60",
                "backdrop-blur-xl",
                "backdrop-saturate-200",
                "hover:bg-default-200/70",
                "dark:hover:bg-default/70",
                "group-data-[focused=true]:bg-default-200/50",
                "dark:group-data-[focused=true]:bg-default/60",
                "!cursor-text",
              ],
            }}
            placeholder="Type to generate hastags ⛓️"

          />
          {!clicked && <Button variant="shadow" style={{
            backgroundColor:"white"
          }} onClick={sendtoAI}>
          <svg style={{
            margin:"16px"
          }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M16.1 260.2c-22.6 12.9-20.5 47.3 3.6 57.3L160 376V479.3c0 18.1 14.6 32.7 32.7 32.7c9.7 0 18.9-4.3 25.1-11.8l62-74.3 123.9 51.6c18.9 7.9 40.8-4.5 43.9-24.7l64-416c1.9-12.1-3.4-24.3-13.5-31.2s-23.3-7.5-34-1.4l-448 256zm52.1 25.5L409.7 90.6 190.1 336l1.2 1L68.2 285.7zM403.3 425.4L236.7 355.9 450.8 116.6 403.3 425.4z"/></svg>
          </Button>}
          {clicked && <Button variant="shadow" isLoading style={{
            backgroundColor:"white"
          }} >
          </Button>}
        </div>
          </div>
          {value && <Textarea
            isReadOnly
            labelPlacement="outside"
            value={value}
            className="max-w"
          />}
        </div>
      </div>
    </div>
    </div>
  );
}
