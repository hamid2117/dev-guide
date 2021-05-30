import React from 'react'
import docc from './../images/docs.png'
const Doc = () => {
  return (
    <>
      <section className='docs-head bg-primary py-3'>
        <div className='container grid'>
          <div>
            <h1 className='xl'>Docs</h1>
            <p className='lead'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            </p>
          </div>
          <img src={docc} alt='Server' />
        </div>
      </section>
      {/* main */}
      <section className='docs-main my-4'>
        <div className='container grid'>
          <div className='card bg-light p-3'>
            <h3 className='my-2'>Essantials</h3>
            <nav>
              <ul>
                <li>
                  <a className='text-primary' href='/'>
                    Introduction
                  </a>
                </li>
                <li>
                  <a href='/'>About D & H</a>
                </li>
                <li>
                  <a href='/'>Installation</a>
                </li>
              </ul>
            </nav>
            <h3 className='my-2'>Deployment</h3>
            <nav>
              <ul>
                <li>
                  <a href='/'>Introduction</a>
                </li>
                <li>
                  <a href='/'>About D & H</a>
                </li>
                <li>
                  <a href='/'>Installation</a>
                </li>
                <li>
                  <a href='/'>Deployment</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className='card'>
            <h2>Introduction</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              optio velit quaerat molestiae sint.
            </p>
            <div className='alert alert-sucess'>
              <span className='spanii'>i</span> Lorem ipsum dolor sit amet
              consectetur adipisicing.
            </div>
            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor,
              corrupti quod blanditiis consectetur laborum aliquid dolores.
            </p>
            <a href='/' className='btn btn-primary'>
              Install CLi
            </a>
            <h3>Requirement</h3>
            <ul>
              <li>Window 10 ,Mac OSX and Linux</li>
              <li>Node js v12 or higher</li>
            </ul>
            <h3>Install</h3>
            <p>Mac (Homebew)</p>
            <pre>
              <code>$ brew install kill-z</code>
            </pre>
            <p>Npm</p>
            <pre>
              <code>$ npm install kill-z</code>
            </pre>
            <p>Yarn</p>
            <pre>
              <code>$ yarn install kill-z</code>
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}

export default Doc
