import React, { Component } from 'react'

class Footer extends Component {
  render () {
    return (
      <div className='Footer'>
        <div className='col-lg-12 p-3' style={{ backgroundColor: 'grey' }}>
            <p className='text-center mb-0' style={{ color: 'black'}}>
              Powered by{' '}
              <a
                style={{ color: 'red', textDecorationLine: 'none'}}
                href='https://www.themoviedb.org'
                target='_blank'
                rel="noopener noreferrer"
              >
                TMDb
              </a>
              .
            </p>
          </div>
        </div>
    )
  }
}
export default Footer
