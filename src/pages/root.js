import {Outlet} from 'react-router-dom';
import Header from './header'

export default function Root() {
    return (
      <body>
        <Header></Header>
        <Outlet/>
      </body>
    );
  }
  