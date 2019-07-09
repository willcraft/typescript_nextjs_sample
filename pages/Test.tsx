import * as React from 'react';
import { useState, useEffect } from 'react';
import Test from '../components/Test';
import Head from 'next/head';
import Link from 'next/link';

// TODO: import order eslint

interface User {
  id: number;
  name: string;
}

export default () => {
  const [count, setCount] = useState<number>(0);
  const [user, setUser] = useState<User>({ id: 1, name: 'test' });

  const test = 'test';

  const onIncliment = () => setCount(count + 1);

  const onReset = () => setCount(0);

  useEffect(() => {
    console.log('useeffect');
    setUser({
      id: 2,
      name: 'TEST!!!!!!',
    });
  }, [setCount]);

  return (
    <>
      <Head>
        <title>Counter</title>
      </Head>
      <h1>
        {test} : {count}
      </h1>
      <span>
        {user.id} : {user.name}
      </span>
      <p onClick={onIncliment}>CLICK</p>
      <p onClick={onReset}>RESET</p>
      {/* {{ pathname: '/posts', query: { id: '2' } }}
      "/post/[id]" */}
      <Link href={`/post?id=${count}`} as={`/post/${count}`}>
        <a>POST!!!</a>
      </Link>
      <Test />
    </>
  );
};
