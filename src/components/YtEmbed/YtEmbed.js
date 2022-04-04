import './YtEmbed.css';
import YouTube from 'react-youtube';
import {useState} from 'react';
import LoadingCycle from '../LoadingCycle/LoadingCycle';
import classNames from "classnames";

const YtEmbed = props => {
  const [loading, setLoading] = useState(true);

  const {id} = props;

  return (
    <div className='video-embed'>
      {loading && <LoadingCycle id='loading-spinner'/>}
      <YouTube
        className={classNames({
          loading
        })}
        videoId={id}
        onReady={() => {
          setLoading(false)
        }}
      />
    </div>
  );
}

export default YtEmbed;