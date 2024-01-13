import {Link} from 'react-router-dom'

export default function Button(props) {
    // Determine background color based on prop
    const backgroundColor = props.type === 'guy' ? 'bg-[#CBF7FF]' : 'bg-pink-200';

    return (
        <div className={`${backgroundColor} px-6 py-4 border-black border-4 rounded-3xl drop-shadow-[5px_5px_rgba(0,0,0)] my-8 hover:scale-105`}>
            <Link className='font-bold text-2xl' to = {props.type === 'guy' ? '/daddy' : '/mamma'}>{props.text}</Link>
        </div>
    );
}
