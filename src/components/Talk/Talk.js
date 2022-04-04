import './Talk.css';
import {v4 as uuidv4} from 'uuid';
import YtEmbed from "../YtEmbed/YtEmbed";

const Talk = (props) => {
  return (
    <div className='container' key={uuidv4()}>
      <div className='talk' key={uuidv4()}>
        <YtEmbed id={props.id}/>
        <div className='description'>
          <h3>{props.title}</h3>
          {props.description}
        </div>
      </div>
    </div>
  );
};

export default Talk;
