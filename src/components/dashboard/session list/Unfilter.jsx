import React from 'react'
import Item from './Item'

import { useTranslation } from "react-i18next";

const Unfilter = ({games, handleDelete}) => {
    const { t } = useTranslation();
    return (
        <tbody>
                                        {
                                            games.filter(game => game.progress === 'unactive').map((game, i) => {
                                                return <Item game={game} key={i} progress={t('unactive')} />
                                            })
                                        }
                                        {
                                            games.filter(game => game.progress === 'active').map((game, i) => {
                                                return <Item game={game} key={i} progress={t('active')} />
                                            })
                                        }
                                        {
                                            games.filter(game => game.progress === 'action-plan').map((game, i) => {
                                                return <Item game={game} key={i} progress={t('action-plan')} />
                                            })
                                        }
                                        {
                                            games.filter(game => game.progress === 'finished').map((game, i) => {
                                                return <Item game={game} key={i} progress={t('finished')} />
                                            })
                                        }
                                    </tbody>
    )
}

export default Unfilter
