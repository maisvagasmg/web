interface Props{
    toast:any,
    title?:string,
    description?:string
  }
  
  export const successToast = ({toast, title, description}:Props) => {
    toast({
      title,
      description,
      status:'success',
      duration: 9000,
      isClosable: true,
      position:'top-center'
    })
  }
  
  export const errorToast = ({toast, title, description}:Props) => {
    toast({
      title,
      description,
      status:'error',
      duration: 9000,
      isClosable: true,
      position:'top-center'
    })
  }