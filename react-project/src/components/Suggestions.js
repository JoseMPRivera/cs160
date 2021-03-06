import React from 'react'
// import { Link } from 'react-router-dom'

const Suggestions = (props) => {
  return props.results.map(r => (
      <option key={r.item_id} value={r.name}>
          {r.name}
      </option>
    ))
}

export default Suggestions