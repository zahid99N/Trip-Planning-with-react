import { useState } from 'react'
import useFetch from '../hooks/useFetch'
import './TripList.css'

export default function TripList() {
    // const [trips, setTrip] = useState([])
    const [url, setUrl] = useState('http://localhost:3000/trips')
    
    const {data: trips, isPanding, error} = useFetch(url)
    // const fetchTrips = useCallback( async() => {
    //     const responce = await fetch(url)
    //     const json = await responce.json()
    //     setTrip(json)
    // },[url])
    // useEffect(() => {
    //     fetchTrips()
    //     // fetch(url)
    //     //     .then(res => res.json())
    //     //     .then(json => setTrip(json))
    // }, [fetchTrips])
    // console.log(trips)

  return (
      <div className='trip-list'>
          <h2>Trip List</h2>
          {isPanding && <div>Loading Trips...</div>}
          {error && <div>{ error}</div>}
          <ul>
              {trips && trips.map(trip => (
                  <li key={trip.id}>{`${trip.title}, Price: ${trip.price}` }</li>
              ))}
          </ul>
          <div className="filters">
              <button onClick={() =>  setUrl('http://localhost:3000/trips?loc=europe')}>
                  European Trips
              </button>
              <button onClick={() => setUrl('http://localhost:3000/trips')}>All trips</button>

          </div>
    </div>
  )
}
