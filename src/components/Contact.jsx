import React, { useState } from 'react'

const Contact = () => {
  const [user, setuser] = useState({
    name: "",
    phone: "",
    email: "",
    textarea: ""
  })
  const change = (e) => {
    const { name, value } = e.target;
    setuser((obj) => {
      return {
        ...obj,
        [name]: value
      }
    })
  }

  const formsub = (e) => {
    e.preventDefault();
    alert(`Your Name is ${user.name} and your phone number is ${user.phone} and your email is ${user.email} and your message is ${user.textarea}`)
  }
  return (
    <>
      <div className="my-5">
        <h1 className='text-center'>Contact Us</h1>
      </div>
      <div className="container contact">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formsub}>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="name" value={user.name} onChange={change} placeholder="Enter Your Name" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Phone</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" name="phone" value={user.phone} onChange={change} placeholder="Enter Your Phone" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" name="email" value={user.email} onChange={change} placeholder="Enter Your Email" />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                <textarea className="form-control" name="textarea" value={user.textarea} onChange={change} id="exampleFormControlTextarea1" rows="3"></textarea>
              </div>
              <div class="col-12 my-4">
                <button class="btn btn-outline-primary" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
