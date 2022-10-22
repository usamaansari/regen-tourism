import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/Banner'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import styles from '../styles/Home.module.css'


export default function Home({exploreData, cardsData}) {
  console.log(exploreData)
  return (
    
    <div>
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
        {/* Header */}
        <Header/>

        {/* Banner */}
        <Banner />

        <main className='max-w-7xl mx-auto px-8 sm:px-16'>
          <section className='pt-6'>
            <h2 className='text-4xl font-semibold pb-5'>
              Explore Nearby
            </h2>
            {/* Pull data from a server - API endpoint */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map((item) => (
              
              <SmallCard key={item.img} img={item.img} distance={item.distance} location={item.location}/>
            ))}
            </div>
          </section>
         
          <section>
            <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
            <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map((item)=>(
              <MediumCard key={item.img} img={item.img} title={item.title}/>
            ))}

            </div>
          </section>

          <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb."
          buttonText="Get Inspired"
          />
         
        </main>

        <Footer />

   
  </div> 
   
  )
}

export async function getStaticProps(){
  const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});
  const exploreData = await fetch("https://links.papareact.com/pyp", 
  {
    agent: httpsAgent,
  },).
  then(
    (res) => res.json()
  );

  const cardsData = await fetch("https://links.papareact.com/zp1", 
  {
    agent: httpsAgent,
  },).
  then(
    (res) => res.json()
  );

  return{
    props:{
      exploreData,
      cardsData
    },
  };
}