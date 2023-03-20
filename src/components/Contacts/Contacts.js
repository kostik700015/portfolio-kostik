import React from 'react'
import './Contacts.css'

const Contacts = () => {
  return (
    <div className='contact-page' id='contacts'>
      {/* <div>
      Contacts
      </div> */}
      <div className="contacts">
        <a href='https://www.linkedin.com/in/konstantin-shevtsov-bb50aa194/' target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin-square" aria-hidden="true" alt="linkedin"></i></a>
        <a href='https://github.com/kostik700015' target="_blank" rel="noopener noreferrer"><i className="fa fa-github" aria-hidden="true" alt="github"></i></a>
        <a href='mailto:kostik700015@gmail.com' target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope" aria-hidden="true" alt="email"></i></a>
      </div>
    </div>
  )
}

export default Contacts
