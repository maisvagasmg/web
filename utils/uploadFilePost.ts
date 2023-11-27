import axios from 'axios'
import { errorToast } from './toasts';

export async function uploadFilePost(formData: any, filename: string, toast: any) {

  const ext = filename.split('.').pop().toLowerCase()
  if (ext != "jpg" && ext != "jpeg" && ext != "png" && ext != "pdf" && ext != "doc" && ext != "docx" && ext != "bmp") {
    if (toast) {
      errorToast({ toast, description: `Arquivo Inválido: Envie apenas imagens, fotos, documentos ou PDF's ` })
    }
    return false
  }

  return new Promise((resolve, reject) => {
    axios.request({
      method: "POST",
      headers: {
        'Content-Type': 'multipart/form-data'
      },
      url: `${process.env.NEXT_PUBLIC_API_URL}/uploads/upload.php`,
      data: formData
    })
      .then(response => {
        //@ts-ignore 
        resolve(response.data.url)
      })
      .catch(error => {
        reject(error)
      })
  })

}