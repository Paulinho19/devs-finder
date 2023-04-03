type SearchProps = {
  loadUser: (userName: string) => Promise<void>
}

import { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import classes from './Search.module.css'

const Search = ({loadUser}: SearchProps) => {

  const [userName, setUserName] = useState("")
  
  return (
    <div className={classes.search}>
      <h2>Search for github's user</h2>
      <p>Best repositories</p>
      <div>
        <input type="text" placeholder='Type username' onChange={(e) => setUserName(e.target.value)}/>
        <button onClick={() => loadUser(userName)}>
          <BsSearch />
        </button>
      </div>
    </div>
  )
}

export default Search