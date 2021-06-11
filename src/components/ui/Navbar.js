import styled from '@emotion/styled';

export const NavBarContainer = styled.div`
    background-color: #212121;
    padding: 5px 20px;
    padding-top: 0;
    align-items: center;
    .btn-dark{
        background-color: #212121;
        border: none;   
        &.active{
            background-color: #171616;
        }
    
    }
    .btn-dark.active:focus{
        box-shadow: 0;
    }

    .menu-items{
        display: flex;
        flex-direction: column;
    }
    

    &.active{
        background-color: rgba(33, 33, 33, 0.4);
        
        .btn-dark{
            background-color: transparent;
            
            &.sing-in{
                border: 1px solid white;
                border-radius: 20px;
                padding: 5px 15px;

                /* @media screen and (max-width: 600px) {
                    padding: 5px 15px;
                } */
            }
        }
        
    }

    .desktop{
            display: block;
        }
        .mobile{
            display: none;
        }
    @media screen and (max-width: 850px){
        #nav-list{
            width: 65vw;
        }
    }
    @media screen and (max-width: 600px){
        padding: 5px;
        .navbar-brand{
            width: 145px;
            margin: 0!important;

            img{
                width: 100%;
            }
        }
        .menu-items{
            margin-top: -31px;
            width: 100vw;
            
            
        }

        .desktop{
            display: none;
        }
        .mobile{
            display: block;
        }
        #nav-list{
            width: 100%;
            justify-content: space-around;
            padding-right: 0;
        }
    }
`

export const Profile = styled.div`
    
    display: flex;
    justify-content: space-between;
    flex-wrap: row;
    flex-wrap: nowrap;
    align-items: center;

    .img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px;
        overflow: hidden;
        background-color: #ffffff;

        img{
            width: 100%;
            margin: auto;
        }
    }
`