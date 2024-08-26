import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';
import Header from './Header';


export default function Inbox() {

    const dispatch = useDispatch();
    const visitors = useSelector((store) => store.visitorsReducer);
    const mail = useSelector((store) => store.mailReducer);
    // let counter = 0;
    // console.log('inbox', mail)

    useEffect(() => {
        dispatch({ type: 'FETCH_VISITORS' });
        dispatch({ type: 'FETCH_MAIL' });
      }, [dispatch])

    return (
        <>
        <Header />
        <div className="inboxBackground">
            <div style={{ margin: '20% 20%', padding: '0 5%', backgroundColor: 'whitesmoke', borderRadius: '20px', border: 'black 2px solid' }}>
                <h2>Visitors</h2>
                { visitors.map(visitor => (
                    // counter++,{counter}
                    <p>&nbsp; {visitor.name}</p>
                ))}
            </div>

            <div style={{ margin: '20% auto', backgroundColor: 'whitesmoke', borderRadius: '20px', border: 'black 2px solid'}}>
                <h2>Mail</h2>
                <div style={{padding: '0 10%', backgroundColor: 'whitesmoke' }}>{ mail.map(message => (
                    <>
                    <h4>{moment(message.date).format('MM/DD/YYYY')}</h4>
                    <h4>{message.name} - {message.email}</h4>
                    <p>{message.messages}</p>
                    </>
                ))}
                </div>
            </div>
        </div>
        </>
    )
}
  
  