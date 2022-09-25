import React from 'react'
import styled from 'styled-components'

let upcomingEvents = [
    { title: 'Sid 80s', location: 'Sid Commons', date: '28-09-2022' },
    { title: 'Lovett Public', location: 'Lovett Public', date: '30-09-2022' },
    { title: 'KITC', location: 'Baker', date: '28-9-2022' },
    { title: 'Sid Gardening', location: 'Sid Pavillion', date: '28-09-2022' },
    { title: 'Sid 80s', location: 'Sid Commons', date: '28-09-2022' },
    { title: 'Lovett Public', location: 'Lovett Public', date: '30-09-2022' },
    { title: 'KITC', location: 'Baker', date: '28-09-2022' },
    { title: 'Sid Gardening', location: 'Sid Pavillion', date: '28-09-2022' },
    { title: 'Sid Gardening', location: 'Sid Pavillion', date: '28-09-2022' },
    { title: 'Sid 80s', location: 'Sid Commons', date: '28-09-2022' },
    { title: 'Lovett Public', location: 'Lovett Public', date: '30-09-2022' },
    { title: 'KITC', location: 'Baker', date: '28-09-2022' },
    { title: 'Sid Gardening', location: 'Sid Pavillion', date: '28-09-2022' },
    { title: 'Sid 80s', location: 'Sid Commons', date: '28-09-2022' },
    { title: 'Lovett Public', location: 'Lovett Public', date: '30-09-2022' },
    { title: 'KITC', location: 'Baker', date: '28-09-2022' },
    { title: 'Sid Gardening', location: 'Sid Pavillion', date: '28-09-2022' },
    { title: 'Sid 80s', location: 'Sid Commons', date: '28-09-2022' },
    { title: 'Lovett Public', location: 'Lovett Public', date: '30-09-2022' },
    { title: 'KITC', location: 'Baker', date: '28-09-2022' },
    { title: 'Sid Gardening', location: 'Sid Pavillion', date: '28-09-2022' }

]

let upcomingEvents2 = [
    { title: 'Sid 80s', location: 'Sid Commons', date: '28-09-2022' },
    { title: 'Lovett Public', location: 'Lovett Public', date: '30-09-2022' },
    { title: 'KITC', location: 'Baker', date: '28-9-2022' },
]

const UpcomingEvent = () => {
    return (
        <Container>
            <Test>
                {upcomingEvents.map(({ title, location, date }) => {
                    let splitdate = date.split('-')
                    console.log(date)
                    let month_number = splitdate[1]
                    let month_number_int = parseInt(month_number)
                    let day = splitdate[0]
                    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
                    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                    let month = months[month_number_int+1]
                    
                    // let month = months.map((element, index)=> {
                    //     if (months.includes(element) ) {
                    //         return index;
                    //     }
                    // })

                    return (
                        <div>
                            <Container2>
                                <Date>
                                    <p>{month}
                                        <br />
                                        {day}</p>
                                </Date>
                                <Infos>
                                    <Info>
                                        <Location class="location">
                                            <p>{location}</p>
                                        </Location>
                                        <Info2>
                                            <Title class="title">
                                                <h3>{title}</h3>
                                            </Title>
                                        </Info2>
                                        <Time class="time">
                                            <p>{date}</p>
                                        </Time>
                                    </Info>
                                    <Info3>
                                        <Length>
                                            <p>1hr</p>
                                        </Length>
                                        <CheckIn>
                                            <button>Check in</button>
                                        </CheckIn>
                                    </Info3>
                                </Infos>
                            </Container2>
                            
                        </div>
                    );
                })}
            </Test>
        </Container>
    )
}

const Test = styled.div`
    position: relative;
    
    overflow-y: scroll;
    max-height:500px;
    
    width:95%;
    gap:10px;
    text-align:left;
    
`

const Container = styled.div`
    background-color:white;
    
    margin-bottom:-5%;
    gap:10%;
    display: flex;
    width:415px;
    height: 375px;
    flex-direction: column;
`

const Container2 = styled.div`
    
    #margin-bottom:-5%;
    display: flex;
    background-color: #F6F6F8;
    flex-direction: row;
    margin-bottom:20px;
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
`

const Date = styled.div`
    margin-left:10px;
    margin-top:10px;
    border-radius: 10px;
    width:65px;
    height:65px;
    background-color: #0F1033;
    p {
        font-size:22px;
        text-align: center;
        color: white;
    }
`

const Info = styled.div`
    margin-left: 6%;
    color: black;
    font-size: 18px;
    text-align: left;
    display: flex;
    flex-direction:column;
    justify-content: spaced-evenly;
`

const Location = styled.div`
    font-size: 18px;
`

const Title = styled.div`

    font-size: 18px;
    width:100%;
`

const Info2 = styled.div`
    color: black;
    font-size: 18px;
    text-align: left;
    display: flex;
    flex-direction:row;
`

const Infos = styled.div`
    width:100%;
    color: black;
    font-size: 18px;
    text-align: left;
    display: flex;
    flex-direction:row;
    justify-content: space-between;
    height: 84px;
    
`

const Info3 = styled.div`

    color: black;
    font-size: 18px;
    text-align: left;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: flex-end;
    margin-right:5px;
`

const Time = styled.div`
    font-size: 18px;
`
const Length = styled.div`
    font-size: 18px;
    margin-right: 10px;
    text-align:right;
`
const CheckIn = styled.div`
    button {
        background-color:#45D6A9;
        height:100%;
        font-size: 18px;
    
        padding-left:5px;
        padding-right:5px;
        margin-right:10px;
        border-radius: 5px;
        border: none;
        text-align: center;
        color:white
    }
        
`


        


export default UpcomingEvent