import './Talk.css';
import {v4 as uuidv4} from 'uuid';

const Talk = (props) => {
  return (
    <div className='container' key={uuidv4()}>
      <h3>{props.title}</h3>
      <div className='talk' key={uuidv4()}>
        <div className='video-embed'>
          <iframe
            className='video-iframe'
            src={props.src}
            frameBorder='0'
            allow='autoplay; encrypted-media; picture-in-picture'
            allowFullScreen={true}
            title={props.title}/>
        </div>
        <div className='description'>
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Talk;
