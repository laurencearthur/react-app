import { useState } from "react"

interface Props {
  items: string[]
  heading: string
}
function ListGroup({ items, heading }: Props) {
  const [selectedIndex, setselectedIndex] = useState(-1)

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && "No items found"}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setselectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  )
}
export default ListGroup
