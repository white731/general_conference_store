import { useContext, useState, useEffect} from "react"
import { UserContext } from "../providers/userProvider"

const FetchUser = (props) => {

  const [checkEmail, setCheckEmail] = useState(false)
  const {userName, handleLogout, getUser} = useContext(UserContext)

  useEffect(()=>{
    getUserOnRefresh()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const getUserOnRefresh = async () => {
    if (userName || !localStorage.getItem('userName')) {      
      setCheckEmail(true)
      return;
    }

      try {
          getUser(localStorage.getItem("userName"))
          } catch (error) {
            debugger
              handleLogout()
          } finally {
            setCheckEmail(true)
        }

    }

    if(checkEmail) {

     return props.children
       } 
       return null
      
}

export default FetchUser