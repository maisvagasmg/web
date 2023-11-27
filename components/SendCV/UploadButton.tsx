import { uploadFilePost } from "@/utils/uploadFilePost";
import { validateInput } from "@/utils/validateInput";
import { Button, Text, Icon, Flex, FormControl, Input, useToast } from "@chakra-ui/react"
import { CloudArrowUp } from "@phosphor-icons/react";
import { Formik, Form, Field } from "formik";
import { useCallback, useRef, useState } from "react";

interface UploadButtonProps {
  title?: string;
  description?: string;
  xfiles: string[];
  setFiles: React.Dispatch<React.SetStateAction<string[]>>;

}
export const UploadButton = ({
  title = "Clique aqui para selecionar um arquivo",
  description = "Arquivos permitidos: .jpg, .jpeg, .png, .pdf, .doc ou .docx com tamanho máximo de 5 MB. ",
  xfiles, setFiles }: UploadButtonProps) => {


  const uploadRef = useRef(null)
  const [loadingUpload, setLoadingUpload] = useState(false)
  const toast = useToast()

  const handleUpload = useCallback((e: any) => {
    const files = uploadRef?.current?.files
    if (files.length > 0) {
      setLoadingUpload(true)
      //@ts-ignore
      var filename = uploadRef?.current?.value
      var formData = new FormData()
      formData.append("file", files[0])
      uploadFilePost(formData, filename, toast).then(result => {
        setLoadingUpload(false)
        var newArr = []
        xfiles.map(s => { s != filename && newArr.push(s) })
        if (result != undefined && result != "") {
          newArr.push(result)
        }
        setFiles(newArr)
      }
      )
    }
  }, [xfiles]);


  const initialValuesUpload = {
    file: '',
  }

  return <>
    <Formik initialValues={initialValuesUpload} onSubmit={() => { }}>
      {(props) => (
        <Form>
          <Flex direction='column' position='absolute' top='-200000px'>
            <Field name='file' validate={(v) => validateInput(v, 'file', true)}>
              {({ field, form }) => (
                <FormControl isRequired onChange={() => handleUpload(form)} isInvalid={form.errors.file && form.touched.file}>
                  <Input h='1' opacity={0} type='file' ref={uploadRef} placeholder="Selecione" {...field} />
                </FormControl>
              )}
            </Field>
          </Flex>
        </Form>)}
    </Formik>
    <Button display='flex' borderRadius={16} border='1.5px'
      borderColor='gray.300' borderStyle='dashed' bg='gray.50' gap={2}
      flexDirection='column' minH='130px' h='full' whiteSpace='break-spaces'
      w='full' onClick={() => { uploadRef.current.click() }} isLoading={loadingUpload}>
      <Text color='gray.600' fontSize={12}>
        <Icon fontSize={24} as={CloudArrowUp} /> {title}
      </Text>
      <Text color='gray.400' fontSize={9}
        fontWeight={500} dangerouslySetInnerHTML={{ __html: description }} />
    </Button >
  </>
}