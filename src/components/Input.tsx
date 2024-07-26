import { FormControl, IInputProps, Input as NativeBaseInput } from 'native-base'

interface InputProps extends IInputProps {
  errorMessage?: string
  isInvalid?: boolean
}

export function Input({
  errorMessage = '',
  isInvalid = false,
  ...rest
}: InputProps) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} w="full" mb={4}>
      <NativeBaseInput
        bg="gray.700"
        h={14}
        px={4}
        borderWidth={1}
        borderColor="transparent"
        fontFamily="body"
        fontSize="md"
        color="white"
        placeholderTextColor="gray.300"
        isInvalid={invalid}
        _invalid={{
          borderWidth: 1,
          borderColor: 'red.500',
        }}
        invalidOutlineColor="red.500"
        _focus={{
          bg: 'gray.700',
          borderWidth: 1,
          borderColor: 'green.500',
        }}
        {...rest}
      />

      <FormControl.ErrorMessage color="red.500">
        {errorMessage}
      </FormControl.ErrorMessage>
    </FormControl>
  )
}
