import React, { useState, useMemo } from 'react'

import SelectedList from "./SelectedList"
import Filters from "./Filters"
import './App.css'

const MemoizedCheckListItem = React.memo(({ isSelected, disabled, title, onChange, id }) =>
  <li>
    <input onChange={() => onChange(id)} type="checkbox" checked={isSelected} disabled={disabled} />
    <span>{title}</span>
  </li>
)

const filterItems = ({query, filter, items}) => items
    .filter(({title}) => title.toLowerCase().includes(query.toLowerCase()))
    .filter(({id}) => id > Number(filter))
const Popup = ({ options, defaultSelectedIds, onChange, onClose }) => {

  const [items] = useState(options)
  const [selectedIds, setSelectedIds] = useState(defaultSelectedIds)
  const [filters, setFilters] = useState({query: '', filter: ''})
  const selectedItems = options.filter(({id}) => selectedIds.includes(id))
  const selectedIdsCount = selectedIds.length
  const filteredItems = useMemo(() => filterItems({...filters, items}), [filters, items]);

  const handleToggleSelectedId = React.useCallback((id) => setSelectedIds((currentSelectedIds) => {
    if (currentSelectedIds.includes(id)) {
      return currentSelectedIds.filter(selectedId => selectedId !== id)
    } else {
      return [...currentSelectedIds, id]
    }
  }), [])

  function handleSave() {
    onChange(selectedIds)
    onClose()
  }

  function handleFilter(event) {
    setFilters((currentFilters) => ({
      ...currentFilters,
      [event.target.name]: event.target.value
    }))
  }

  return (
    <div>
      <Filters onChange={handleFilter} />

      <ul className="list">
        {filteredItems.map((item) => {
          const {id, title} = item
          const isSelected = selectedIds.some(selectedId => id === selectedId)
          const isDisabled=!(selectedIdsCount < 3 || isSelected)

          return <MemoizedCheckListItem key={id} isSelected={isSelected} disabled={isDisabled} onChange={handleToggleSelectedId} id={id} title={title} />
        })}
      </ul>

      <p>Current selected items:</p>

      <SelectedList options={selectedItems} onRemove={handleToggleSelectedId} />

      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  )
}

export default Popup
