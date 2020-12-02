import { useState, useEffect } from 'react'
import Map from './components/Map'
import Loader from './components/Loader'


function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch('http://34.68.49.61/api/v2.1/events')
      const { events } = await res.json()

      setEventData(events)
      setLoading(false)
    }
    fetchEvents()

  }, [])


  return (
    <div>
      {!loading ? <Map eventData={eventData}/> : <Loader />}
    </div>
  );
}

export default App;
