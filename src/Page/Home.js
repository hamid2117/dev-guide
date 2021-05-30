import React from 'react'
import { Link } from 'react-router-dom'
import { Logos } from './../images/logos'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import StorageIcon from '@material-ui/icons/Storage'
import CloudUploadIcon from '@material-ui/icons/CloudUpload'
import CloudImg from './../images/cloud.png'
import Img from './cli.png'
const Home = () => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&')
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
      }),
    })
      .then(() => navigate('/thank-you/'))
      .catch((error) => alert(error))
  }
  return (
    <>
      <section className='showcase'>
        <div className='container grid'>
          <div className='showcase-text '>
            <h2>Notes for Dev</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae
              numquam repellat perspiciatis molestiae modi. Ipsam a doloremque
              recusandae aperiam eos.
            </p>
            <Link to='./features' className='btn btn-outline'>
              Read more
            </Link>
          </div>
          <div className='showcase-form '>
            <div className='card'>
              <h4>Request the demo</h4>
              <form
                name='first-nForm'
                method='post'
                data-netlify='true'
                onSubmit={handleSubmit}
                data-netlify-honeypot='bot-field'
              >
                <input type='hidden' name='form-name' value='first-nForm' />
                <div hidden>
                  <input name='bot-field' />
                </div>
                <div className='form-control'>
                  <input type='text' name='name' required placeholder='Name' />
                </div>
                <div className='form-control'>
                  <input
                    type='email'
                    name='email'
                    required
                    placeholder='Email'
                  />
                </div>
                <div className='form-control'>
                  <input
                    type='text'
                    name='fav'
                    required
                    placeholder='Fav field'
                  />
                </div>
                <button className='btn btn-primary' type='submit'>
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className='stats'>
        <div className='container'>
          <h5 className='stats-heading text-center my-1'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus esse expedita ducimus autem in aliquam.
          </h5>
          <div className='grid grid-3 text-center my-4'>
            <div>
              <i>
                <StorageIcon style={{ fontSize: '40px' }} />
              </i>
              <h4>10,309</h4>
              <p className='text-secondary'>Deployment</p>
            </div>
            <div>
              <i>
                <CloudUploadIcon style={{ fontSize: '40px' }} />
              </i>
              <h4>912 TB</h4>
              <p className='text-secondary'>Published</p>
            </div>
            <div>
              <i>
                <AccountTreeIcon style={{ fontSize: '40px' }} />
              </i>
              <h4>12,723</h4>
              <p className='text-secondary'>Projects</p>
            </div>
          </div>
        </div>
      </section>
      {/* cli */}
      <section className='cli'>
        <div className='container grid'>
          <img src={Img} alt='img' className='Imangess' />
          <div className='card'>
            <h5>Easy to use, cross platform Cli</h5>
          </div>
          <div className='card'>
            <h5>Deploy in seconds</h5>
          </div>
        </div>
      </section>
      <section className='cloud bg-primary my-2 py-2'>
        <div className='container grid'>
          <div className='text-center'>
            <h2 className='lg'>Extreme Cloud Hosting</h2>
            <p className='lead my-1'>
              Cloud hosting like you've never seen. Fast, efficient and scalable
            </p>
            <Link to='/features' className='btn btn-dark'>
              Read more
            </Link>
          </div>
          <img src={CloudImg} className='sm-img' alt='sdada' />
        </div>
      </section>
      {/* languages */}
      <section className='languages'>
        <h2 className='md text-center my-2'>Suppoert Languages</h2>
        <div className='container flex'>
          {Logos.map((logo, index) => {
            const { img, text } = logo
            return (
              <div className='card' key={index}>
                <h5 className='smm'>{text}</h5>
                <img src={img} alt={text} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Home
