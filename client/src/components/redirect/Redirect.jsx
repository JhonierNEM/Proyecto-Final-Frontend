import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { resetUser } from "../../redux/actions"


export default function Redirect() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(resetUser())
  })
  return (
    <div>
      <h1>Por favor termine el pago en la ventana emergente</h1>
      <button>
        HOME
      </button>
    </div>
  )
}