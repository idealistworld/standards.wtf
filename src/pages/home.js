import meme from '../../src/img/standards.jpg'
import Button from '../components/homeButton'
import '../../src/index.css';

export default function Home() {
    return (
        <div className="outerlayer">
            <div class='rounded-xl flex items-center justify-center flex-wrap'>
                <div class='lg:w-[400px] sm:mr-0 md:w-[70%] md:mr-20 lg:mr-32'>
                    <h1 class='text-7xl font-black max-sm:text-center'>ARE YOUR STANDARDS <span class='italic underline'>TOO HIGH?</span></h1>
                    <p class = 'text-2xl mt-8 max-sm:text-center'>Click one of the buttons below to take see your level of delusional when it comes to finding your match.</p>
                    <Button text='LOOKING FOR A BABY DADDY' type='guy'></Button>
                    <Button text='LOOKING FOR A BABY MAMA' type='girl'></Button>
                </div>
                <div class='max-md:mt-[100px] rounded-2xl bg-white py-10 px-5 drop-shadow-[15px_15px_rgba(0,0,0,0.8)] border-black border-[9px] w-[430px] flex flex-col'>
                    <img src={meme} ></img>
                    <p class='mt-12 text-xl leading-9 px-5'><span class = 'font-bold text-2xl'>20% of people died without getting married.</span>  Are you going to be one of them?  Probably if your standards are too high lol.</p>
                </div>

            </div>
        </div>

    )
}