import React, { useState } from 'react'

import Popup from "./Popup"
import SelectedList from "./SelectedList"
import './App.css'

const Widget = ({ options }) => {
  const [selectedIds, setSelectedIds] = useState([])
  const [showPopup, setShowPopup] = useState(false)
  const selectedItems = options.filter(({id}) => selectedIds.includes(id))
  const selectedIdsCount = selectedIds.length

  const handleToggleSelectedId = React.useCallback((id) => setSelectedIds((currentSelectedIds) => {
    if (currentSelectedIds.includes(id)) {
      return currentSelectedIds.filter(selectedId => selectedId !== id)
    } else {
      return [...currentSelectedIds, id]
    }
  }), [])

  const handleSetSelectedIds = React.useCallback((ids) => setSelectedIds(() => [...ids]), [])

  function handleTogglePopup(value) {
    setShowPopup((currentShowPopup) => value ? value : !currentShowPopup)
  }

  return (
    <>
      <p>Select Items</p>
      <p>You currently have select {selectedIdsCount} selected item{selectedIdsCount > 1 ? 's' : null}</p>

      <SelectedList options={selectedItems} onRemove={handleToggleSelectedId} />

      <button onClick={() => handleTogglePopup(true)}>change my choose</button>

      {showPopup && (<Popup options={options} defaultSelectedIds={selectedIds} onChange={handleSetSelectedIds} onClose={() => handleTogglePopup(false)} />)}
    </>
  )
}
export default Widget
