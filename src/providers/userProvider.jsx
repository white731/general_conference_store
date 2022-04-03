import React  from "react"
import { useState } from "react"
import Axios from "axios"


export const UserContext = React.createContext({})

const UserProvider = (props) => {

  let app_key="keyF7soBPtQvclNID"
  let app_id ="apppyyL3422VTkvRC"

  const [user, setUser] = useState({userName: null, userId: null, points: null})

  const getUser = async (userName) => {

    let table = "Users"
    let url = "https://api.airtable.com/v0/" + app_id + "/" + table + "?filterByFormula=(%7BName%7D+%3D+%22"+userName+"%22)" 
    let axiosConfig = { headers: { Authorization: "Bearer " + app_key , 'Content-Type': 'application/json' } }

    try {
        let res = await Axios.get(url,axiosConfig)
        setUser({
          userName: res.data.records[0].fields.Name,
          userId: res.data.records[0].id,
          points: res.data.records[0].fields.TotalPoints
            }
          )
        console.log(res.data.records[0].fields.Name)
        console.log(res.data.records[0].id)
        console.log(res.data.records[0].fields.TotalPoints)

        localStorage.setItem('userName', res.data.records[0].fields.Name)
    } catch (error) {
        
    }
  }

  const handleLogout = () => {
    setUser(null)
    localStorage.clear()
  }

  const addAPoint = async (userId, assetId, points) => {
    const data = {
      "records": [
        {
          "fields": {
            "Value": points,
            "Users": [
              userId
            ],
            "Assets": [
              assetId
            ]
          }
        }
      ]
    }

      let table = "Points"
      let url = "https://api.airtable.com/v0/" + app_id + "/" + table 
      let axiosConfig = { headers: { Authorization: "Bearer " + app_key , 'Content-Type': 'application/json' } }

      try {

        let res = await Axios.post(url,data,axiosConfig)
        console.log(res.data.records)
        
      } catch (error) {
        
      }

  }

  return(
    <UserContext.Provider value = {{
      user, 
      setUser, 
      getUser,
      handleLogout,
      addAPoint
    }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider
