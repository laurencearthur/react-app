import { FormEvent, useState } from "react"

const Form = () => {
  const [person, setPerson] = useState({
    name: "",
    age: "",
  })
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    console.log(person.name)
    console.log(person.age)
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
            value={person.name}
            id="name"
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            onChange={(event) =>
              setPerson({ ...person, age: event.target.value })
            }
            value={person.age}
            id="age"
            type="number"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  )
}

export default Form
