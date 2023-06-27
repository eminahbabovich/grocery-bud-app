import { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import Form from './Form'
import Items from './Items'
import { nanoid } from 'nanoid'

const App = () => {
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem('items')) || []
  )
  const removeItem = (id) => {
    const newItems = items.filter((item) => item.id !== id)
    setItems(newItems)
    toast.success('item deleted')
  }

  const addItem = (name) => {
    const newItem = { name: name, completed: false, id: nanoid() }
    setItems((prev) => [...prev, newItem])
    toast.success('Item Added To The List')
  }

  const editItem = (id) => {
    setItems((oldItems) => {
      const newItems = oldItems.map((item) => {
        if (item.id === id) {
          return { ...item, completed: !item.completed }
        }
        return item
      })
      return newItems
    })
  }
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items))
  }, [items])
  return (
    <main>
      <section className="section-center">
        <Form setItems={setItems} addItem={addItem} />
        <Items
          items={items}
          removeItem={removeItem}
          setItems={setItems}
          editItem={editItem}
        />
        <ToastContainer position="top-center" />
      </section>
    </main>
  )
}

export default App
