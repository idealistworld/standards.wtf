import {useParams} from 'react-router-dom';

export default function Test(props) {

  let params = useParams();
  let type = params.type;

  return (
    <div>
      <h1>{type}</h1>
    </div>
  );
}
