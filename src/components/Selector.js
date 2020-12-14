import React, { Fragment } from 'react'

const Selector = ({ data, showPageData }) => {
  const selectOptions = Object.keys(data).map((key) => (
    <option key={key} value={key}>
      {key}
    </option>
  ))

  return (
    <Fragment>
    <label>Zone : </label>
    <select onChange={showPageData}>
      <option value="">All</option>
      {selectOptions}
    </select>
    </Fragment>
  )
}

export default Selector
