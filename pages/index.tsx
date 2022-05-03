import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
const mailchimp = require('@mailchimp/mailchimp_marketing');

mailchimp.setConfig({
  apiKey: process.env.NEXT_MAILCHIMP_API_KEY,
  server: process.env.NEXT_MAILCHIMP_INSTANCE,
});

const Home: NextPage = () => {

  const [email,setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const subscribe = async (e: any) => {
    e.preventDefault();

    const res = await fetch('/api/subscribe', {
      body: JSON.stringify({
        email: email
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    });

    const { error } = await res.json();

    if (error) {
      setError('Oops... something went wrong. Try again later');

      return;
    }

    setEmail('');
    setMessage('You are now in for the best habit app ever created! 🎉 You will now get notified on every update.');
  };

  return (
    <div className='bg-project-background h-screen overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The number one app that holds you accountable to your habits." />
        <title>Habitbites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen relative overflow-y-hidden'>
        <div className='container mx-auto p-8 lg:p-0 h-screen z-40'>
          <nav className='py-8'>
            <img src='branding/habitbites.svg' className='w-1/3 md:w-auto'/>
          </nav>

          <main className='grid grid-cols-2 h-3/4 justify-center items-center gap-10'>
            <div className='col-span-2 lg:col-span-1'>
              <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold font-ivy text-project-text xl:leading-snug'>
                The number one app that holds you <span className='text-project-main'>accountable</span> to your habits!
              </h1>
              { message === '' ?
                <div className='w-full flex flex-col md:flex-row gap-3 mt-10'>
                  <input onChange={e => setEmail(e.target.value)} value={email} type="text" className='rounded-full ring-project-text text-project-text ring-1 px-6 py-3 w-full md:w-7/12 text-xs z-20' placeholder='hello@habitbites.com'/>
                  <button onClick={e => subscribe(e)} className='rounded-full bg-project-text text-white font-semibold text-xs py-3 px-10 z-20'>Get notified!</button>
                </div>
                : <p className='mt-10 font-light text-sm w-full rounded-lg'>{message}</p>
              }
              {
                error !== '' &&
                <p className='text-red-500 text-sm mt-2'>{error}</p>
              }
            </div>
            <div className='col-span-2 lg:col-span-1 relative mt-10 lg:mt-0'>
              <img src='assets/graphic.svg' />
            </div>
          </main>
        </div>
        <div className='absolute w-screen -bottom-48 left-0 z-10'>
          <img draggable='false' src='assets/lines.svg' className='z-0'/>
        </div>
      </div>
    </div>
  )
}

export default Home
