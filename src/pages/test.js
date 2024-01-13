import Question from '../components/question'
import { useParams } from 'react-router-dom';

export default function Test(props) {

  let params = useParams();
  let type = params.type;


  return (
    <div className='outerlayer'>
      <div class='bg-white rounded-3xl p-10 justify-center items-center flex my-6 w-[60%] flex-col border-4 border-black drop-shadow-[5px_5px_rgba(0,0,0)]'>
        <h1 class='text-3xl font-bold'>AGE RANGE</h1>
        <input class='mt-6' type='range'></input>
      </div>
      <div class='bg-white rounded-3xl p-10 justify-center items-center flex my-6 w-[60%] flex-col border-4 border-black drop-shadow-[5px_5px_rgba(0,0,0)]'>
        <h1 class='text-3xl font-bold'>ETHNICITY</h1>
        <div class="mt-6 flex justify-center items-center flex-wrap">
          <div>
            <input type="checkbox" id="option1" name="options"></input>
            <label class='text-xl ml-2 mr-6' for="option1">No Preference</label>
          </div>

          <div>
            <input type="checkbox" id="option2" name="options"></input>
            <label class='text-xl ml-2 mr-6' for="option2">White</label>
          </div>

          <div>
            <input type="checkbox" id="option3" name="options"></input>
            <label class='text-xl ml-2 mr-6' for="option3">Black</label>
          </div>

          <div>
            <input type="checkbox" id="option3" name="options"></input>
            <label class='text-xl ml-2 mr-6' for="option3">Asian</label>
          </div>

          <div>
            <input type="checkbox" id="option3" name="options"></input>
            <label class='text-xl ml-2 mr-6' for="option3">Hispanic</label>
          </div>
        </div>

      </div>
    </div>
  );
}