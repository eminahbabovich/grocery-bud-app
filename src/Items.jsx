import SingleItem from './SingleItem'

const Items = ({ items, removeItem, setItems, editItem }) => {
  return (
    <section className="items">
      {items.map((item) => {
        return (
          <SingleItem
            item={item}
            key={item.id}
            removeItem={removeItem}
            setItems={setItems}
            editItem={editItem}
          />
        )
      })}
    </section>
  )
}
export default Items
