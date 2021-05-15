import React from 'react'

import Card from './Card'

import cardInfo from './cardInfo';
import { sorprises, decisions, actions, emotions, intuition, words, thoughts } from '../../questions/en'
import { es_sorprises, es_decisions, es_actions, es_emotions, es_intuition, es_words, es_thoughts } from '../../questions/es/es-index'

import { CardsContainer } from '../../ui/game/Cards'

import { useTranslation } from "react-i18next";


const Cards = ({setQuestions}) => {

    const { i18n } = useTranslation();

    

    return i18n.language === "en" ? (
        <CardsContainer>
            <Card  array={sorprises} card={cardInfo[0]} setQuestions={setQuestions} />
            <Card  array={decisions} card={cardInfo[1]} setQuestions={setQuestions} />
            <Card  array={actions} card={cardInfo[2]} setQuestions={setQuestions} />
            <Card  array={emotions} card={cardInfo[3]} setQuestions={setQuestions} />
            <Card  array={intuition} card={cardInfo[4]} setQuestions={setQuestions} />
            <Card  array={thoughts} card={cardInfo[5]} setQuestions={setQuestions} />
            <Card  array={words} card={cardInfo[6]} setQuestions={setQuestions} />
        </CardsContainer>
    ) : (
        <CardsContainer>
            <Card  array={es_sorprises} card={cardInfo[0]} setQuestions={setQuestions} />
            <Card  array={es_decisions} card={cardInfo[1]} setQuestions={setQuestions} />
            <Card  array={es_actions} card={cardInfo[2]} setQuestions={setQuestions} />
            <Card  array={es_emotions} card={cardInfo[3]} setQuestions={setQuestions} />
            <Card  array={es_intuition} card={cardInfo[4]} setQuestions={setQuestions} />
            <Card  array={es_thoughts} card={cardInfo[5]} setQuestions={setQuestions} />
            <Card  array={es_words} card={cardInfo[6]} setQuestions={setQuestions} />
        </CardsContainer>
    )
}

export default Cards
