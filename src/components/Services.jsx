import React from 'react'
import Card from './Card'

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Our services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row">
              <Card title="Web Development" img="web.jpg"/>
              <Card title="App Development" img="app.avif" />
              <Card title="Software Development" img="soft.jpg" />
              <Card title="Android Development" img="and.jpeg" />
              <Card title="Blockchain Development" img="block.jpg" />
              <Card title="Digital Marketing" img="digital.avif" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services
