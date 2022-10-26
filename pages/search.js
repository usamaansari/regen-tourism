import { format } from 'date-fns'
import { useRouter } from 'next/router'
import React from 'react'
import { Footer } from '../components/Footer'
import Header from '../components/Header'
import InfoCard from '../components/InfoCard'
import MapScreen from '../components/MapScreen'

const Search = ({searchResults}) => {
    const router = useRouter();

    console.log(searchResults);
    // ES6 destructuring
    const{location, startDate, endDate, noOfGuests} = router.query;
    console.log(router.query);

    const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
    const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className='h-screen'>
        <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

        <main className='flex'>
            <section className='flex-grow pt-14 px-6'>
                <p className='text-xs'>300+ Stays - {range} - for {noOfGuests} guests</p>
                <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>

                <div className='hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap'>
                    <p className='button'>Cancellation Flexibility</p>
                    <p className='button'>Type of Place</p>
                    <p className='button'>Price</p>
                    <p className='button'>Rooms and Beds</p>
                    <p className='button'>More Filters</p>
              
                </div>
                <div className='flex flex-col'>
                {searchResults.map(item => (
                    <InfoCard
                    key={item.img}
                    img={item.img}
                    location={item.location}
                    title={item.title}
                    description={item.description}
                    star={item.star}
                    price={item.price}
                    total={item.total}

                    />
                ))}
                </div>
            </section>
            <section className='hidden xl:inline-flex xl:min-w-[600px]'>
                <MapScreen searchResults={searchResults} />
            </section>
        </main>

        <Footer />
    </div>
  )
}

export default Search;

export async function getServerSideProps(){
    const https = require('https');

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
});

    const searchResults = await fetch("https://links.papareact.com/isz", 
    {
      agent: httpsAgent,
    },).then(res => res.json());
    return {
        props:{
            searchResults,
        }
    }
}