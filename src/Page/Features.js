import React from 'react'
import Serverr from './../images/server.png'
import Serverr2 from './../images/server2.png'
import { featuresData } from './../utiles/data'
const Features = () => {
  return (
    <>
      <section className='features-head bg-primary py-3'>
        <div className='container grid'>
          <div>
            <h1 className='xl'>Features</h1>
            <p className='lead'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img src={Serverr} alt='Server' />
        </div>
      </section>
      <section className='features-sub-head bg-light py-3'>
        <div className='container grid'>
          <div>
            <h1 className='xl'>D & H Platform</h1>
            <p className='lead'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam,
              fugit! ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img src={Serverr2} alt='Server' />
        </div>
      </section>
      <section className='features-main my-2'>
        <div className='container grid grid-3'>
          {featuresData.map((data) => {
            const { text, id, Icon } = data
            return (
              <div className='card flex' key={id}>
                <Icon style={{ fontSize: '43px', marginRight: '20px' }} />
                <p>{text}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Features
