export const successToast = (toast: any, message: String) => {
  toast({
    title: "Parabéns! 🎉",
    description: message,
    status: "success",
    duration: 9000,
    isClosable: true,
  });
}

export const errorToast = (toast: any, message: String) => {
  toast({
    title: "Erro!",
    description: message,
    status: "error",
    duration: 9000,
    isClosable: true,
  });
}