import React from 'react'

import './App.css'

const MemoizedSelectedListItem = React.memo(({ id, onRemove, title }) =>
  <li>
    <span>{title}</span>
    <button onClick={() => onRemove(id)}>x</button>
  </li>
)
const SelectedList = ({ options, onRemove, }) => {
  return (
    <ul className="selectedList">
      {options.map(({id, title}) =>
        <MemoizedSelectedListItem key={id} id={id} title={title} onRemove={onRemove}/>
      )}
    </ul>
  )
}

export default SelectedList
