import { Link } from 'react-router-dom'

export default function Headerlink(props) {
    return (<Link to={props.route} class = 'text-2xl font-black hover:bg-white px-2'>{props.title}</Link>);
}