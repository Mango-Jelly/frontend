'use client';


import './_component/page.css'
import Link from "next/link"
import Top from './_component/GuestVideosSection'
// import { useRouter } from 'next/router'
import axios from 'axios';
import BottomHost from './_component/host/HostMainSection';
import BottomGuest from './_component/guest/GuestMainSection';
import { useState } from 'react';
import { useRef, useEffect, useCallback } from "react";
import * as StompJs from "@stomp/stompjs"
import { OpenVidu } from 'openvidu-browser';
import { start } from 'repl';
// import curtain from '@/../public/curtain.mov'
import curtain from './curtain.mov'
import dummyVideo from '@/../public/dummyVideo.mp4'

const APPLICATION_SERVER_URL = process.env.NODE_ENV === 'production' ? 'http://mangotail.shop/' : 'http://mangotail.shop/';


type Props = {
  params: { roomId: string }
}


type UserStatus = {
  name: string
  status: number
}

type UserRole = {
  name: string
  role: string
}

const USERID = `user${Math.random()}`

export default function Page({ params: { roomId } }: Props) {
  const [isHost, setIsHost] = useState<boolean>(false)
  const [ENTRY, setENTRY] = useState<UserStatus[]>([])
  const [mySessionId, setMySessionId] = useState(`Session${roomId}`)
  const [myUserName, setMyUserName] = useState<string>(`Participant${Math.floor(Math.random() * 100)}`)
  const [mainStreamManager, setMainStreamManager] = useState(undefined);
  const [session, setSession] = useState<any>(undefined);
  const [subscribers, setSubscribers] = useState<any[]>([]);
  const [publisher, setPublisher] = useState<any>(undefined);
  const [currentVideoDevice, setCurrentVideoDevice] = useState<any>(null);
  const [role, setRole] = useState('');
  const [call, setCall] = useState('');
  const [isStart, setStart] = useState<boolean[]>([false, false, false, false]);
  const [first, setfirst] = useState<boolean>(false)
  const [second, setsecond] = useState<boolean>(false)
  const [third, setthird] = useState<boolean>(false)
  const [fourth, setfourth] = useState<boolean>(false)
  const amIhost = useRef<boolean>(false);

  const changeHost = () => {
    setIsHost(prevIsHost => !prevIsHost);
    amIhost.current = !amIhost.current;
  }

  const client = useRef<any>({});
  const OV = useRef(new OpenVidu());
  // 오픈 비두 객체 만듬

  function StartCallback(i : number, type : boolean){
    setStart((prevArray) => {
      let newArray = prevArray
      newArray[i] = type
      return newArray
    }) 
  }

  function onMessageReceived(message: StompJs.Message) {

    try {
      const messageBody = JSON.parse(message.body);

      if (messageBody.code == 100) {
        let newBody: UserStatus = {
          name: messageBody.id,
          status: 0
        }
        let videoTag : string = messageBody.videoid
        setENTRY(ENTRY => [...ENTRY, newBody])
        setSubscribers((subscribers) => [...subscribers, videoTag])
      }
      else if (messageBody.code == 101) {
        let newBody: UserStatus = {
          name: messageBody.id,
          status: 0
        }
        let videoTag : string = messageBody.videoid
        setENTRY(ENTRY => ENTRY.filter(item => item.name != messageBody.id))
        setSubscribers((subscribers) => subscribers.filter(vidioId => vidioId != videoTag ))

      }
        // 참가자 중에 문제가 생겼다면
      else if (200 <= messageBody.code && messageBody.code < 300) {
        setENTRY(ENTRY => ENTRY.map((item) => {

          if (item.name === messageBody.id) {

            item.status = messageBody.code
          }
          return item;
        }))
        setCall(messageBody.id)
        
        // 카메라 정렬을 위한 코드
        setSubscribers((prevsub) => {
          let newsub;
          console.log(prevsub.find((element) => element === `${messageBody.id}'s_video`))
          if (prevsub.find((element) => element === `${messageBody.id}'s_video`))
          {
            newsub =  [prevsub.find((element) => element === `${messageBody.id}'s_video`)].concat(prevsub.filter(e => { return e != `${messageBody.id}'s_video` }))
          }
          else 
          {
            newsub = prevsub
          }
          return newsub;
        })
      }
      else if (!amIhost.current && Number(messageBody.code) === 300 && USERID === messageBody.name) {
        setRole(messageBody.role)
      }
      else if (messageBody.code === 400)
      {

        console.log('시작한닷')
        setfirst(true)
        setTimeout(() => {
          console.log('1단계 ㄱㄱ')
          setsecond(true)

          setTimeout(() => {
          console.log('2단계 ㄱㄱ')
            setthird(true)
            setTimeout(() => {
              setfirst(false)
              setsecond(false)
              setthird(false)
            }, 5000)
          }, 2000)
        } , 1000)
        // console.log('시작한닷')
        // console.log(isStart)
        // StartCallback(0, true)
        // setTimeout(() => {
        //   console.log('1단계 ㄱㄱ')
        //   console.log(isStart)
        //   StartCallback(1, true)
        // } , 1000)

      }


    } catch (error) {
      console.error('Error parsing received message:', error);
    }
  }

  // 세션 받기 -> 토큰 받기
  const getToken = useCallback(async () => {
    return createSession(mySessionId).then(sessionId =>
      createToken(sessionId),
    );
  }, [mySessionId]);
  // url  => 나중에 백엔드 서버 연동 해야됨 APPLICATION_SERVER_URL
  const createSession = async (sessionId: any) => {
    const response = await axios.post(APPLICATION_SERVER_URL + 'openvidu/api/sessions/', { customSessionId: sessionId }, {
      headers: {
        'Authorization' : 'MYSECRET',
        'Content-Type': 'application/json',
      },
    }

    );
    return response.data; // The sessionId
  };


  const createToken = async (sessionId: any) => {
    const response = await axios.post(APPLICATION_SERVER_URL + 'openvidu/api/sessions/' + sessionId + '/connections', {}, {
      headers: {
        'Authorization' : 'MYSECRET',
        'Content-Type': 'application/json', },
    });
    return response.data; // The token
  };


  // const leaveSession = useCallback(() => {
  //   // Leave the session
  //   if (session) {
  //       session.disconnect();
  //   }
  //   console.log('나는 출력되고있다')
  //   // 상태관리중인 세션이 있을경우 초기화
  //   // Reset all states and OpenVidu object
  //   OV.current = new OpenVidu();
  //   setSession(undefined);
  //   setSubscribers([]);
  //   setMySessionId('SessionA');
  //   setMyUserName('Participant' + Math.floor(Math.random() * 100));
  //   setMainStreamManager(undefined);
  //   setPublisher(undefined);
  // }, [session]);

  // 카메라 여러개일 때 바꿔주는 기능
  const switchCamera = useCallback(async () => {
    try {
      // 카메라 받는거
      const devices = await OV.current.getDevices();
      const videoDevices = devices.filter(device => device.kind === 'videoinput');
      if (videoDevices && videoDevices.length > 1) {
        const newVideoDevice = videoDevices.filter(device => device.deviceId !== currentVideoDevice.deviceId);
        // html 비디오 태그를 캐치하는 객체
        if (newVideoDevice.length > 0) {
          const newPublisher: any = OV.current.initPublisher(undefined, {
            videoSource: newVideoDevice[0].deviceId,
            publishAudio: true,
            publishVideo: true,
            mirror: true,
          });
          // 오픈비두 객체에
          // 새로운 퍼블리셔를 설정? 쉽게 말해 카메라 바꾸기, session객체는 publish, unpublish 를 통해서 카메라 바꿀 수 있음
          if (session) {
            await session.unpublish(mainStreamManager);
            await session.publish(newPublisher);
            setCurrentVideoDevice(newVideoDevice[0]);
            setMainStreamManager(newPublisher);
            setPublisher(newPublisher);
          }
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentVideoDevice, session, mainStreamManager]);


  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  ///////////시작부터 마운트 될때////////////////////////시작부터 마운트 될때////////////////////////시작부터 마운트 될때////////////////////////시작부터 마운트 될때////////////////////////시작부터 마운트 될때/////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


  useEffect(() => {

    // USERID를 일정하게 유지하는 방법
    // const USERID = `user${Math.random()}`

    const subscribe = () => {
      client.current.subscribe(`/sub/channel/${roomId}`, onMessageReceived)
    }

    function Join() {
      const message = {
        code: 100,
        id: USERID,
        videoid : `${USERID}'s_video`
    };
      // console.log(JSON.stringify(message))
    client.current.publish({
        destination: `/sub/channel/${roomId}`,
        body: JSON.stringify(message),
      });
    }


    function Disconnect() {
      const message = {
        code: 101,
        id: USERID,
        videoid : `${USERID}'s_video`
      };
      client.current.publish({
        destination: `/sub/channel/${roomId}`,
        body: JSON.stringify(message),
      })
    }


    // 커넥트 함수 /*
    const connect = () => {

      client.current = new StompJs.Client({
        brokerURL: "ws://localhost:8080/ws",
        onConnect: () => {
          console.log("connected");
          subscribe();
          Join();
        },
        onDisconnect: () => {
          console.log("failed to connect");
          Disconnect();
        }
      })
      client.current.activate()
    }
    connect();


    // 컴포넌트가 언마운트될 때 이벤트 핸들러 제거
    // 오픈 vidu 파트
    // 객체 생성
    const mySession = OV.current.initSession();

    // 새로운 사람이 들어왔다
    mySession.on('streamCreated', (event) => {
      const subscriber = mySession.subscribe(event.stream, undefined);
      setSubscribers((subscribers) => [...subscribers, subscriber]);
    });
    //
    mySession.on('exception', (exception) => {
      console.warn(exception);
    });

    // const handleBeforeUnload = () => {
    //   leaveSession();
    // };

    // window.addEventListener('beforeunload', handleBeforeUnload);
    // 웹사이트나갈때 subscribers에서 사라지게하는 코드
    window.addEventListener('beforeunload', Disconnect);
    // mySession으로까지 저장
    getToken().then(async (token) => {
      try {
        await mySession.connect(token, { clientData: myUserName });

        let publisher: any = await OV.current.initPublisherAsync(undefined, {
          audioSource: undefined,
          videoSource: undefined,
          publishAudio: true,
          publishVideo: true,
          resolution: '640x480',
          frameRate: 30,
          insertMode: 'APPEND',
          mirror: false,
        });
        // 카메라 뜨는 순간 코드
        mySession.publish(publisher);

        const devices = await OV.current.getDevices();
        const videoDevices = devices.filter(device => device.kind === 'videoinput');
        const currentVideoDeviceId = publisher.stream.getMediaStream().getVideoTracks()[0].getSettings().deviceId;
        const currentVideoDevice = videoDevices.find(device => device.deviceId === currentVideoDeviceId);

        setMainStreamManager(publisher);
        setPublisher(publisher);
        setCurrentVideoDevice(currentVideoDevice);
      } catch (error: any) {
        console.log('There was an error connecting to the session:', error.code, error.message);
      }
    });



    return () => {
      window.removeEventListener('beforeunload', Disconnect);
    };

  }, [getToken, myUserName, roomId])


  return (
  <div className={`flex flex-col items-center` } >
      {/* { isStart[0] ? <div className='fadeoutcomponent' style={{opacity : isStart[1] ? 1.0 : 0}}></div> : null } */}
      { first ? <div className='fadeoutcomponent' style={{opacity : second ? 1.0 : 0}}>
        { third ? 
        <video className='w-full h-full' controls autoPlay>
             {/* <source src="https://mongo-jelly.s3.ap-northeast-2.amazonaws.com/frontSampleVideo.mp4" type="video/mp4" /> */}
             <source src= {curtain} type="video/quicktime" />
        </video> : null}
      </div> : null }
      <div className='relative'>
        <Top
          depart='꿈나무 유치원'
          title='망고 연극반'
          call = {call}
          subscribers={subscribers}
        />

        <p className='text-center'><button type='button' onClick={changeHost} className="text-white bg-blue-700 hover:bg-blue-800 active:bg-blue-800   font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">{isHost ? 'Host' : 'Guest'}  </button></p>

        <div className='bottomcontainer'>
          {isHost ?
            <BottomHost
              ENTRY={ENTRY}
              client={client.current}
              roomId={roomId}
              streamManager={mainStreamManager}
            />
            : null}

          {!isHost ?
            <BottomGuest
              client={client.current}
              roomId={roomId}
              role={role}
              userId={USERID ? USERID : ''}
            />
            : null

          }
          <Link href={`/scenario/1`}>링크</Link>
        </div>
      </div>
    </div>

  )
}
