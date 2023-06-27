import { useState } from 'react'
import { toast } from 'react-toastify'
const Form = ({ addItem }) => {
  const [name, setName] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    if (!name) {
      toast.error('please provide a value')
      return
    }
    addItem(name)
    setName('')
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h4>Grocery Bud</h4>
        <div className="form-control">
          <input
            type="text"
            className="form-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit" className="btn">
            Add Item
          </button>
        </div>
      </form>
    </div>
  )
}
export default Form
