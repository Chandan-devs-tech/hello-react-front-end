import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMessage } from '../redux/features/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greeting.text);
  useEffect(() => {
    // console.log('useEffect is running');
    dispatch(fetchMessage());
  }, [dispatch]);
  return <h1>{greeting}</h1>;
};

export default Greeting;
