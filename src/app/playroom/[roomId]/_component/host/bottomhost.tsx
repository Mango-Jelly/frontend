import React from 'react'
import '../page.css'
import Hostleftbox from './leftbox/Hostleftbox'

import Hostmiddlebox from './middlebox/Hostmiddlebox'
import Hostrightbox from './rightbox/Hostrightbox'
import Image
 from 'next/image'


type UserStatus = {
  name : string
  status : number
}

 type Props = {
  ENTRY : UserStatus[]
  roomId : string
  streamManager : any
  client : any
 }


export default function bottomhost(Props : Props) {
  // console.log("BOTTOM HOST에서 공개 ", Props.streamManager)s
  return (
    <div className='bottomcontainer'>

        <div className='grid grid-cols-5'>
            <Hostleftbox 
            ENTRY = {Props.ENTRY}
            client = {Props.client}
            roomId = {Props.roomId}
            />
            <Hostmiddlebox 
              streamManager = {Props.streamManager} />
            <Hostrightbox 
             ENTRY = {Props.ENTRY}
            />
        </div>
    </div>

  )
}
