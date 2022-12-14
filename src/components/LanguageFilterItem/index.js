import './index.css'

const LanguageFilterItem = props => {
  const {languages, sendTab} = props
  const {id, language} = languages

  // const buttonBack = isActive ? null : 'border'

  const clickToChangeTab = () => {
    sendTab(id)
  }

  return (
    <>
      <div className="tab-items">
        <button type="button" className="button" onClick={clickToChangeTab}>
          {language}
        </button>
      </div>
    </>
  )
}
export default LanguageFilterItem
