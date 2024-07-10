import { useState } from "react"
export const useForm = (initialForm = {}) => {

const [formState, setFormState] = useState (initialForm)
const onInputChange = ({target}) => {
    const {num, value} = target
    setFormState({
        ...formState,
        [num]: value
    })
}

  return {
    ...formState,
    onInputChange
  }
}
