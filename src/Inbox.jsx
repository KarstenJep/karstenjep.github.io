import React, { useEffect, useState } from 'react';
import {useDispatch, useSelector} from 'react-redux';

export default function Inbox() {

    const dispatch = useDispatch();
    const visitors = useSelector((store) => store.visitorsReducer);
    let counter = 0;
    console.log('inbox', visitors)

    useEffect(() => {
        dispatch({ type: 'FETCH_VISITORS' });
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
        </>
    )
}
  
  