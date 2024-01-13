import { Link } from 'react-router-dom'

export default function Headerlink(props) {
    return (<Link to={props.route} class = 'text-2xl font-black bg-white px-4 mr-3 hover:scale-110 max-sm:text-xl'>{props.title}</Link>);
}