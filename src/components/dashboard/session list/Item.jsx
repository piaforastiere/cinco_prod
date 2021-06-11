import React from 'react'
import { Link } from 'react-router-dom';

import { BiRightArrow} from "react-icons/bi";
import { VscOpenPreview } from "react-icons/vsc";


const Item = ({game, progress}) => {  
    
    
    return (
        <tr id={game.password} >
           <td className="appointement-name">
              {game.appointmentSubject}
            </td>
            <td className="pass">
                { game.password } 
            </td>
            <td className="name">
                { game.theme }
            </td>
            <td className="master">
                { game.masterName }
            </td>
            <td className="progress">
                 {progress}
            </td>
            <td className="icon">
                {
                    game.progress === 'finished' ? ( 
                    <Link to={`/games-information/${game.password}`}><VscOpenPreview /></Link>
                    ) : (
                        <Link to={`/game/${game.password}`} ><BiRightArrow /></Link>
                    )
                }
            </td>
        </tr>
    )
}

export default Item