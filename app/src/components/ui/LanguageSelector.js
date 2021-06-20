import styled from '@emotion/styled';

export const ContainerSelector = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    padding: 5px 20px;
    align-items: center;
    text-transform: uppercase;
    color: #fff;

    p{  
        margin: 0;
        margin-right: 10px;
    }
    button{
        border: none;
        background: transparent;
        padding: 5px 10px;
        color: #fff;
        
        &:focus{
            outline: none;
        }
        &.active{
            border: 3px solid #a1c207;
            border-radius: 10px;
        }
    }

    &.active{
        color: #fff;
        

        button{
            color:#fff;
        }
    }

    @media screen and (max-width: 600px){
        padding-right: 0;

    }
`