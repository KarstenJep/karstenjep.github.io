import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import moment from 'moment';


export default function Inbox() {

    const dispatch = useDispatch();
    const visitors = useSelector((store) => store.visitorsReducer);
    const mail = useSelector((store) => store.mailReducer);
    let counter = 0;
    console.log('inbox', mail)

    useEffect(() => {
        dispatch({ type: 'FETCH_VISITORS' });
        dispatch({ type: 'FETCH_MAIL' });
      }, [])

    return (
        <>

        <div style={{ marginLeft: '15%' }}>
            <h2>Visitors</h2>
            { visitors.map(visitor => (
                counter++,
                <p>&nbsp;{counter} {visitor.name}</p>
            ))}
        </div>

        <div style={{ marginLeft: '45%', marginTop: '-21%' }}>
            <h2>Mail</h2>
            { mail.map(message => (
                <>
                <h4>{moment(message.date).format('MM/DD/YYYY')}</h4>
                <h4>{message.name} - {message.email}</h4>
                <p>{message.messages}</p>
                </>
            ))}
        </div>
        </>
    )
}
  
  