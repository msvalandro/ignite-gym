import { Button as NativeBaseButton, IButtonProps, Text } from 'native-base'

interface ButtonProps extends IButtonProps {
  title: string
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <NativeBaseButton
      w="full"
      h={14}
      bg="green.700"
      rounded="sm"
      _pressed={{
        bg: 'green.500',
      }}
      {...rest}
    >
      <Text fontFamily="heading" fontSize="sm" color="white">
        {title}
      </Text>
    </NativeBaseButton>
  )
}
