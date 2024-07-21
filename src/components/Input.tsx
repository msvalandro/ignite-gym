import { IInputProps, Input as NativeBaseInput } from 'native-base'

export function Input(props: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      mb={4}
      borderWidth={0}
      fontFamily="body"
      fontSize="md"
      color="white"
      placeholderTextColor="gray.300"
      {...props}
    />
  )
}
