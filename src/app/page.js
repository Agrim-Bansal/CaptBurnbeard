"use client";
import Image from "next/image";
import '@/app/globals.css'
import Container from '@/app/ui/fade-in-container'
import starGenerator from "./ui/stars";
import { redirect } from "next/navigation";
import {useState, useEffect} from 'react';
// import {getRoasts} from '@/app/api/genai'

export default function Home() {

  const roastPlaceholder = "I'll be plantin' the fear o' Davy Jones himself in yer wretched soul! Mark me words, ye sniveling sea slug—when I loose the cursed demons o' mockery upon ye, ye'll be beggin' fer the sweet embrace o' the depths!"
  const [stars, setStars] = useState([]);
  const [roast, setRoast] = useState(roastPlaceholder);

  useEffect(() => {
    setStars(starGenerator(500));
  }, []);


  const clickHandler = async () => {
    const info = document.querySelector('.user-text').value;
    
    setTimeout(()=>redirect('/#page3'), 10);
    
    const response = await fetch('/api/genai', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/text'
      },
      body: info
    }).then(response => response.json());

    const roast = response.body;
    setRoast(roast);

  }


  return (
    <>
      <div className="star-container">
      {stars}
      </div>


      <Container className="page1" id="page1">
        <Image src="./captain-blackbeard.svg" height={530} width={530} alt="Image of a pirate" className="page1 img img1"/>

        <div className="pirate-text page1">
          Arrr! do ye dare to test yer mettle 
          <br/>
          against me?
        </div>

      </Container>
      
      <Container className="page2 flex " id="page2">
        <Image src="./burnbeard.svg" height={690} width={690} alt="Image of a pirate" className="page2 img img2"/>

        <div className="flex flex-col items-center">
          <div className="pirate-text">
            Very well, if ye've chosen to take on this foolhardy challenge,
            I'll humor ye. Speak, scallywag, and tell me about yerself—then 
            steel yer nerves, for ye'll soon be regrettin' the day ye dared to cross me!
          </div>

          <textarea 
            className="user-text userinput"
            placeholder="Spill yer guts 'bout yerself, if ye can muster somethin' worth hearin', ye scurvy dog!"
          >
          </textarea>

          <button className="button" onClick={clickHandler}>I ain't afeard o' ye</button>
        </div>

      </Container>

      <Container className={"page3"} id="page3">
        <div className="flex justify-center">
          <div className="flex flex-col items-center my-20 justify-end w-[50vw]">
              
              <div className="roast">
                {roast}
              </div>

              <div className="pirate-text text-center">
                Bet ye're weepin' like a lost landlubber now! <br/> Bet ye cursed the day ye dared challenge the mighty Burnbeard!
              </div>

          </div>

          <Image src="./burnbeard2.svg" height={590} width={590} alt="Image of a pirate" className="page3 img img3"/>
        </div>
        <div className="flex items-center button-container">
          <button className="button" onClick={()=>redirect('/#page2')}>Is that the best ye've got, ye bilge rat? <br/> I'm still standin' tall, like a mast in a tempest!</button>
          <button className="button" onClick={()=>redirect('/#page4')}>I yield, oh mighty Burnbeard! Ye've bested <br/> me fair 'n square — have mercy!</button>
        </div>
      </Container>

      <Container className="page4 flex justify-center" id="page4">

          <div className="pirate-text text-center flex flex-col items-center justify-center">
            Aye, ye’ve finally learned that crossin’ Burnbeard be a fool’s errand! But hark, the tides be favorin’ ye today, for I’m in a rare mood o’ mercy. Go on, scuttle off like the barnacle-covered bilge rat ye are, ‘fore I change me mind!
          </div>              

          <Image src="./burnbeard3.svg" height={590} width={590} alt="Image of a pirate" className="page4 img img4"/>

      </Container>


    </>
  );
}
