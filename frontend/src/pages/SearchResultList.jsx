import React,{useState} from 'react'
import CommonSection from './../shared/CommonSection.jsx'
import { Container,Row,Col } from 'reactstrap'

import { useLocation } from 'react-router-dom'
import TourCard from '../shared/TourCard'
import Newsletter from '../shared/Newsletter.jsx'

const SearchResultList = () => {

  const location = useLocation()
  const [data] = useState(location.state);
  console.log(data);

  return (
    <>
      <CommonSection title={"Tour Results"}/>
   
      <section>
        <Container>
          <Row>
            {
              data.length===0?(<h4 className='text-center'>No Tour found</h4>):(data?.map(tour=> (
              <Col lg="3" className='mb-4' key={tour}>
              <TourCard tour={tour}/></Col>
              ))
            )}
          </Row>
        </Container>
      </section>

      <Newsletter/>

    </>
  )
}

export default SearchResultList