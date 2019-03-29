import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PeopleItem extends Component {
  render () {
    const { person, search } = this.props
    if (search) {
      return (
        <div className='p-1 col-lg-3 col-sm-3 col-6'>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${search.profile_path}`}
              alt='Search poster'
              height='100%'
              width='100%'
              style={{ borderRadius: '5px' }}
              title={search.name}
            />
          </div>
          <h5 className='text-center'>{search.name}</h5>
        </div>
      )
    } else {
      return (
        <div className='p-1 col-lg-3 col-sm-3 col-6'>
          <div>
            <img
              src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
              alt='Person poster'
              height='100%'
              width='100%'
              style={{ borderRadius: '5px' }}
              title={person.name}
            />
          </div>
          <h5 className='text-center'>{person.name}</h5>
        </div>
      )
    }
  }
}

PeopleItem.propTypes = {
  person: PropTypes.object,
  search: PropTypes.object
}

export default PeopleItem
