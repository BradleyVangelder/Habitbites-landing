import type { NextPage } from 'next'
import Head from 'next/head'
const mailchimp = require('@mailchimp/mailchimp_marketing');

const Home: NextPage = () => {
  mailchimp.setConfig({
    apiKey: process.env.MAILCHIMP_API_KEY,
    server: process.env.MAILCHIMP_INSTANCE,
  });

  const addMember = async () => {
    await mailchimp.lists.setListMember(
      'test',
      'bradley.vangelder@icloud.com'
    )
  }

  return (
    <div className='bg-project-background h-screen overflow-hidden'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="The number one app that holds you accountable to your habits." />
        <title>Habitbites</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='h-screen relative overflow-y-hidden'>
        <div className='container mx-auto p-8 lg:p-0 h-screen'>
          <nav className='py-8'>
            <img src='branding/habitbites.svg' className='w-1/3 md:w-auto'/>
          </nav>

          <main className='grid grid-cols-2 h-3/4 justify-center items-center gap-10'>
            <div className='col-span-2 lg:col-span-1'>
              <h1 className='text-2xl md:text-3xl xl:text-5xl font-bold font-ivy text-project-text xl:leading-snug'>
                The number one app that holds you <span className='text-project-main'>accountable</span> to your habits!
              </h1>
              <div className='w-full flex flex-col md:flex-row gap-3 mt-10'>
                <input type="text" className='rounded-full ring-project-text text-project-text ring-1 px-6 py-3 w-full md:w-7/12 text-xs' placeholder='hello@habitbites.com'/>
                <button className='rounded-full bg-project-text text-white font-semibold text-xs py-3 px-10'>Get notified!</button>
              </div>
            </div>
            <div className='col-span-2 lg:col-span-1 relative mt-10 lg:mt-0'>
              <img src='assets/graphic.svg' />
            </div>
          </main>
        </div>
        <div className='absolute w-screen -bottom-48 left-0'>
          <img src='assets/lines.svg'/>
        </div>
      </div>
    </div>
  )
}

export default Home
