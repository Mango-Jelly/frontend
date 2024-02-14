import HostVideoToHost from './HostVideoToHost';
import HostSectionScript from './HostSectionScript';
import MemberRole from './MemberRole';
import MemberChecking from './MemberChecking';

type Props = {
  depart: string;
  title: string;
  ENTRY: UserStatus[];
  roomId: string;
  streamManager: any;
  client: any;
};

type UserStatus = {
  name: string;
  status: number;
  role: string;
};

export default function HostMainSection(props: Props) {
  return (
    <>
      <div className='flex justify-center items-center bg-white/80 w-[116rem] h-[54rem]'>
        <div>
          <HostSectionScript />
          <MemberRole
            ENTRY={props.ENTRY}
            client={props.client}
            roomId={props.roomId}
          />
        </div>
        <HostVideoToHost
          depart='꿈나무 유치원'
          title='망고 연극반'
          client={props.client}
          roomId={props.roomId}
          streamManager={props.streamManager}
        />
        <MemberChecking ENTRY={props.ENTRY} />
        {/* <div className='self-start flex flex-col justify-center items-center ml-4'></div> */}
      </div>
    </>
  );
}
