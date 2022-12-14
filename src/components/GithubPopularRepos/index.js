import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import LanguageFilterItem from '../LanguageFilterItem'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

const languag = languageFiltersData.map(eachLanguage => eachLanguage)
class GithubPopularRepos extends Component {
  state = {
    listOfLanguages: [],
    isLoading: true,
    isClicked: true,
  }

  componentDidMount() {
    this.receiveTab()
  }

  failurError = () => {}

  receiveTab = async id => {
    // console.log(lan)
    const url = `https://apis.ccbp.in/popular-repos?language=${id}`
    // const options = {method: 'GET'}
    const response = await fetch(url)
    const data = await response.json()
    // console.log(data.popular_repos)
    this.setState({
      listOfLanguages: data.popular_repos,
      isLoading: false,
    })
  }

  render() {
    const {listOfLanguages, isLoading, isClicked} = this.state
    return (
      <>
        <h1 className="center">Popular</h1>
        <div className="items-tab">
          {languag.map(eachItems => (
            <LanguageFilterItem
              languages={eachItems}
              sendTab={this.receiveTab}
              key={eachItems.id}
              isActive={isClicked}
            />
          ))}
        </div>
        <div className="tab">
          {isLoading ? (
            <div testid="loader">
              <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
            </div>
          ) : (
            <ul className="tab">
              {listOfLanguages.map(eachItem => (
                <RepositoryItem items={eachItem} key={eachItem.id} />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}
export default GithubPopularRepos
