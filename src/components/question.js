export default function Question(props) {
    return (
        <div class='bg-white rounded-3xl p-2 justify-center items-center flex my-6 w-[60%] flex-col border-4 border-black drop-shadow-[5px_5px_rgba(0,0,0)]'>
            <h1 class='text-3xl font-bold'>{props.question[0]}</h1>
            <input type = {props.question[1]}></input>
        </div>
    )
}