import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail,FaHiking,FaShuttleVan,FaBeer} from 'react-icons/fa'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"free cocktails",
                info:"some text oasda sadasd as sad"+
                "sadas dasda dasda asdada sdaada sdasdads!"
            },
            {
                icon:<FaHiking/>,
                title:"endless hiking",
                info:"some text oasda sadasd as sad"+
                "sadas dasda dasda asdada sdaada sdasdads!"
            },
            {
                icon:<FaShuttleVan/>,
                title:"free shuttle",
                info:"some text oasda sadasd as sad"+
                "sadas dasda dasda asdada sdaada sdasdads!"
            },
            {
                icon:<FaBeer/>,
                title:"strongest beer",
                info:"some text oasda sadasd as sad"+
                "sadas dasda dasda asdada sdaada sdasdads!"
            }
        ]
    }


    render() {
        return (
            <section className='services'>
                <Title title='services' />
                <div className="services-center">
                    {this.state.services.map((item,index) =>{
                        return <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                    })}
                </div>
            </section>
        )
    }
}
