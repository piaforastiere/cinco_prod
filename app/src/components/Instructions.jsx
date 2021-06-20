import React, { useEffect, useState } from 'react'
import { InstructionContainer, ContainerInstructions } from './ui/Instructions'

import { IoChevronBackCircleOutline } from "react-icons/io5";

import { Link } from 'react-router-dom';
import { useTranslation } from "react-i18next";

import logo from '../assets/img/logo.png'

import { useLocation } from 'react-router-dom'
import { analytics } from '../firebase';


const Instructions = () => {

    const { t } = useTranslation();
    const [ scrolling, setScrolling ] = useState(false)

    const location = useLocation();
    
    
    useEffect(() => {
        document.querySelector('.navbar').style.display = "flex"
        document.querySelector('.LanguageSelector').style.display = "flex"

        
        window.addEventListener("scroll", handleScroll);
        
        analytics.logEvent('screen_view', { firebase_screen: location.pathname});
    },[])

    const handleScroll = () => {
        
        
            if (window.pageYOffset > 320) {
                setScrolling(true)
                
            }else{
                setScrolling(false)
                
            }
        
        
    }

    useEffect(() => {
        
        document.querySelector('.navbar').classList.remove('active')
        
        document.querySelector('.LanguageSelector').classList.remove('active')
        
    },[])
    

    return (
        <ContainerInstructions>
            <div className="col-xl-12 col-sm-12 header" >
                <div className="row">
                <Link to="/dashboard" className="back-icon" >
                    <IoChevronBackCircleOutline /> <span> {t('back_to_dash')} </span>
                </Link>
                </div>
                
                <div className="row img">
                    
                        <img src={logo} alt=""/>
                    
                    
                    <h1 className="text-uppercase" >
                        {t('game_instructions')}
                    </h1>
                </div>
                <div className="row filter-row">
                    <div className={scrolling ? "active filter" : "filter"}>
                        <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                            <p>
                                {t('game_objective')}
                            </p>
                        </div>
                        
                        <a href="#rules">
                            <p>
                                {t('rules')}
                            </p>
                        </a>
                        <a href="#dynamics">
                            <p>
                                {t('dynamics')}
                            </p>
                        </a>
                        <a href="#beggining">
                            <p>
                                {t('beggining_game')}
                            </p>
                        </a>
                        <a href="#stages">
                            <p>
                                {t('stages')}
                            </p>
                        </a>
                        <a href="#plan">
                            <p>
                                {t('suggestions')}
                            </p>
                        </a>
                        <a href="#variables">
                            <p>
                                {t('variables')}
                            </p>
                        </a>
                    </div>
                </div>
                
            </div>
            <InstructionContainer>
                
                <div className="row " >
                    <h4>
                        {t('game_objective')}
                    </h4>
                    <p>
                        {t('objective_one')} <br/>
                    
                    </p>
                    <p>
                        {t('objective_two')} 
                    </p>
                    <ul>
                        <li>
                            {t('objective_list_one')}
                        </li>
                        <li>
                            {t('objective_list_two')}
                        </li>
                        <li>
                            {t('objective_list_three')}
                        </li>
                        <li>
                            {t('objective_list_four')}
                        </li>
                        <li>
                            {t('objective_list_five')}
                        </li>
                        <li>
                            {t('objective_list_six')}
                        </li>
                        <li>
                            {t('objective_three')}
                        </li>
                    </ul>
                </div>
                <div className="spacer" id="rules"></div>
                <div className="row">
                    <h4>
                        {t('rules')}
                    </h4>
                    <ul>
                        <li>
                            {t('how_to_first')}
                        </li>
                        <li>
                            {t('how_to_second')}
                        </li>
                        <li>
                            {t('how_to_third')}
                        </li>
                        <li>
                            {t('how_to_four')}
                        </li>
                        <li>
                            {t('how_to_five')}
                        </li>
                        <li>
                            {t('how_to_six')}
                        </li>
                        <li>
                            {t('how_to_seven')}
                        </li>
                        <li>
                            {t('how_to_eight')}
                        </li>
                    </ul>
                </div>
                <div className="spacer" id="dynamics"></div>
                <div className="row">
                    <h4>
                        {t('dynamics')}
                    </h4>
                    <p>
                        {t('dynamics_head')}
                    </p>
                    <p>
                        {t('dynamics_first')}
                    </p>
                    <p>
                        {t('dynamics_two')}
                    </p>
                </div>
                <div className="spacer" id="beggining"></div>
                <div className="row">
                    <h4>
                        {t('beggining_game')}
                    </h4>
                    <h5>
                        {t('one_player')}
                    </h5>
                    <p>
                        {t('one_player_indication')}
                    </p>

                    <h5>
                        {t('player_facilitator')}
                    </h5>
                    <p>
                        {t('player_facilitator_one')}
                    </p>
                    <p>
                        {t('player_facilitator_second')}
                    </p>
                    <p>
                        {t('player_facilitator_third')}
                    </p>

                    <h5>
                        {t('two_or_more')}
                    </h5>
                    <p>
                        {t('two_or_more_one')}
                    </p>
                    <p>
                        {t('two_or_more_two')}
                    </p>
                </div>
                <div className="spacer" id="stages"></div>
                <div className="row">
                    <h4> {t('first_stage')} </h4>
                    <p>
                        {t('first_stage_exp_one')}
                    </p>
                    <p>
                        {t('first_stage_exp_two')}
                    </p>
                    <p>
                        {t('first_stage_exp_three')}
                    </p>
                    <p>
                        {t('first_stage_exp_four')}
                    </p>
                    <p>
                        {t('first_stage_exp_five')}
                    </p>

                    <h5>
                        {t('sorp_dec_cards')}
                    </h5>
                    <p>
                        {t('sorp_dec_cards_one')}
                    </p>
                    <p>
                        {t('sorp_dec_cards_two')}
                    </p>
                    <p>
                        {t('sorp_dec_cards_three')}
                    </p>
                </div>
                
                <div className="row">
                    <h4>
                        {t('second_stage')}
                    </h4>
                    <h5>
                        {t('action_plan')}
                    </h5>
                    <p>
                        {t('action_plan_one')}
                    </p>
                    <p>
                        {t('action_plan_two')}
                    </p>
                    <p>
                        {t('action_plan_three')}
                    </p>
                    <p>
                        {t('action_plan_four')}
                    </p>
                    <p>
                        {t('action_plan_five')}
                    </p>
                    <p>
                        {t('action_plan_six')}
                    </p>

                </div>
                <div className="spacer" id="plan"></div>
                <div className="row">
                    <h4>
                        {t('action_plan_suggestions')}
                    </h4>
                    <h5>
                        {t('action_plan_suggestions_list_title')}
                    </h5>
                    <ul>
                        <li>
                            {t('action_plan_suggestions_list_one')}
                        </li>
                        <li>
                            {t('action_plan_suggestions_list_two')}
                        </li>
                        <li>
                            {t('action_plan_suggestions_list_three')}
                        </li>
                    </ul>
                    <p>
                        {t('action_plan_suggestions_one')}
                    </p>
                    <p>
                        {t('action_plan_suggestions_two')}
                    </p>
                    <p>
                        {t('action_plan_suggestions_three')}
                    </p>
                </div>
                <div className="spacer" id="variables"></div>
                <div className="row">
                    <h4>
                        {t('dynamic_variables')}
                    </h4>
                    <p>
                        {t('dynamic_variables_exp')}
                    </p>
                </div>
                

                {/* <div className="row bt-3">
                    <h4>
                    DEFINITION OF POWERS
                    </h4>
                    <p>
                    EMOTIONS/MOODS: <br/>
                    Definition: emotion is a central factor in human relationships. They
                    are the first reaction to the facts, they trigger a body chemistry that
                    predisposes to action. <br/>
                    Feelings are built over time, as we add experiences and
                    experiences, they become a relational context. We need history for
                    feelings to grow and be nurtured.

                    </p>
                    <p>
                    WORDS: <br/>
                    Definition: with words we build our reality. We use them to
                    communicate with others and with ourselves. They are the most
                    powerful tool to make things happen or not. When you are not your
                    word, circumstances drive you and you do not create circumstances.
                    </p>
                    <p>
                    THOUGHTS: <br/>
                    Definition: your thoughts determine where you stand and where you
                    come from. They also include beliefs and paradigms and the awareness
                    you have of choosing where you want to be and where you are going.
                    Thoughts are the great center of operations of our behavior.
                    </p>
                    <p>
                    ACTIONS: <br/>
                    Definition: actions are the moving manifestation of everything we
                    feel, think, talk and intuit. They are the launching and mobilization of
                    our commitments.
                    </p>
                    <p>
                    INTUITION: <br/>
                    Definition: intuition belongs to the domain of hidden resources,
                    everything you don't know you know. However, if you give yourself
                    permission to listen to it and connect with it, it provides instant,
                    valuable and powerful information
                    </p>
                    <p>
                    SURPRISE CARD:
                    Surprise cards provide original and diferent views on the
                    topic/situation
                    </p>
                    <p>
                    DECISION CARD: <br/>
                    Decision cards are designed to drive decision making on the issue or
                    situation. Decision-making can be seen from dierent approaches
                    that can include changing beliefs, evaluating moods, specific actions,
                    etc. At the end of this round you can conclude with the question:
                    having contemplated this issue/situation from all powers, are you
                    ready to decide?
                    </p>
                </div> */}
            
            </InstructionContainer>
        </ContainerInstructions>
    )
}

export default Instructions
