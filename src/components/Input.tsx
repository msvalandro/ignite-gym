import { IInputProps, Input as NativeBaseInput } from 'native-base'

export function Input(props: IInputProps) {
  return (
    <NativeBaseInput
      bg="gray.700"
      h={14}
      px={4}
      mb={4}
      borderWidth={1}
      borderColor="transparent"
      fontFamily="body"
      fontSize="md"
      color="white"
      placeholderTextColor="gray.300"
      _focus={{
        bg: 'gray.700',
        borderWidth: 1,
        borderColor: 'green.500',
      }}
      {...props}
    />
  )
}
