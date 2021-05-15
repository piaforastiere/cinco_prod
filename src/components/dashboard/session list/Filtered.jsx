import React from 'react'
import Item from './Item'

import { useTranslation } from "react-i18next";

const Filtered = ({games}) => {
    const { t } = useTranslation();
    
    return (
        <tbody>
                                    {
                                            games.map((game, i) => {
                                                if (game.progress === 'unactive') {
                                                   return <Item game={game} key={i} progress={t('unactive')} />
                                                }
                                            })
                                        }
                                        {   
                                            games.map((game, i) => {
                                                if (game.progress === 'active') {
                                                   return <Item game={game} key={i} progress={t('active')} />
                                                }
                                            })
                                        }
                                        {   
                                            games.map((game, i) => {
                                                if (game.progress === 'action-plan') {
                                                   return <Item game={game} key={i} progress={t('action-plan')} />
                                                }
                                            })
                                        }
                                        {   
                                            games.map((game, i) => {
                                                if (game.progress === 'finished') {
                                                   return <Item game={game} key={i} progress={t('finished')} />
                                                }
                                            })
                                        }
                                    </tbody>
    )
}

export default Filtered
