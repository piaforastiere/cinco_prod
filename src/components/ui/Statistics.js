import styled from '@emotion/styled';
import { device } from '../ui/breakpoints';

export const StatisticsContainer = styled.div`
    padding: 0 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    

    .participants-list{
        margin: 0;
        text-transform: uppercase;
        display: flex;
        padding-left: 0;
        align-items: center;
        flex-direction: row;
        flex-wrap: wrap;
        padding-left: 20px;
        p{
            padding: 0;
            min-width: fit-content;

            &.title{
                
                padding-right: 10px;
            }
            span{
                padding: 0 10px;
            }

            &:last-of-type{
                span{
                    display: none;
                }
            }
        }
        
    }

    .title{
        font-size: 18px;
        font-weight: bold;
        text-transform: uppercase;
        padding: 0;
        padding-left: 20px;
        padding-right: 20px;
        min-width: fit-content;
        padding-right: 10px;
    }
    
    
    .single-chart {
    width: 170px;
    justify-content: space-around ;
    }

    .circular-chart {
    display: block;
    margin: 10px 0;
    max-width: 100%;
    max-height: 250px;
    }

    .circle-bg {
    fill: none;
    stroke: #a7a7af;
    stroke-width: 2;
    }

    .circle {
    fill: none;
    stroke-width: 2;
    stroke-linecap: round;
    animation: progress 1s ease-out forwards;
    }

    @keyframes progress {
    0% {
        stroke-dasharray: 0 100;
    }
    }

    .circular-chart.sorprise .circle, .circular-chart.decition .circle {
    stroke: #404042;
    }

    .circular-chart.intuition .circle {
    stroke: #68CBDB;
    }

    .circular-chart.words .circle {
    stroke: #FFCB31;
    }
    .circular-chart.thoughts .circle {
    stroke: #953881;
    }
    .circular-chart.action .circle {
    stroke: #96C93D;
    }

    .circular-chart.emotion .circle {
    stroke: #F15951;
    }

    .percentage {
    fill: #666;
    font-family: sans-serif;
    font-size: 0.4em;
    text-anchor: middle;
    }

    p{
        text-align: center;
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
    }

`

