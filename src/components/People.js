import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPopularPeople, searchPeople } from '../actions/peopleActions'
import PeopleItem from './PeopleItem'
import Spinner from './Spinner'
import Pagination from 'react-js-pagination'

class People extends Component {
  constructor () {
    super()
    this.state = {
      pageNum: 1,
      search: ''
    }
  }

  componentDidMount () {
    this.props.getPopularPeople(this.state.pageNum)
  }

  handlePageChange = pageNumber => {
    this.setState({ pageNum: pageNumber })
    this.props.getPopularPeople(pageNumber)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    console.log(this.state.search)
      if(this.state.search.length > 1)
      this.props.searchPeople(this.state.search)
      if(this.state.search.length === 1)
      this.props.searchPeople("")
  }
  render () {
    const { popularPeople, loading, searchResults } = this.props.people
    let results = searchResults
    let person
    if (
      popularPeople === null ||
      loading ||
      Object.keys(popularPeople).length === 0
    ) {
      person = <Spinner />
    } 
    else if(results !== null){
      person = results['results'].map(item => (
        <PeopleItem person={item} key={item.id} />
      ))
    }
    else {
      person = popularPeople['results'].map(item => (
        <PeopleItem person={item} key={item.id} />
      ))
    }

    return (
      <div className='People'>
        <div className='container'>
          <div className='col-lg-12'>
            <div className='mt-2'>
              <h1 className='p-3'>People</h1>
            </div>

            <form className="mt-1">
              <div className='input-group'>
                <input
                  className='form-control'
                  type='text'
                  placeholder='Search for people'
                  aria-label='Search'
                  name="search"
                  onChange={this.handleChange}
                />
              </div>
            </form>
            <div className='row mt-2'>{person}</div>
            {searchResults === null  && <div>
              <Pagination
                activePage={this.state.pageNum}
                totalItemsCount={450}
                itemsCountPerPage={20}
                pageRangeDisplayed={5}
                onChange={this.handlePageChange}
                innerClass={'pagination justify-content-center mt-5'}
                activeClass={'page-item active'}
                linkClass={'page-link'}
              />
            </div>}
          </div>
        </div>
      </div>
    )
  }
}

People.propTypes = {
  getPopularPeople: PropTypes.func.isRequired,
  searchPeople: PropTypes.func.isRequired,
  people: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  people: state.people
})

export default connect(
  mapStateToProps,
  { getPopularPeople, searchPeople }
)(People)
