import { IPressableProps, Pressable, Text } from 'native-base'

interface GroupProps extends IPressableProps {
  name: string
  isActive: boolean
}

export function Group({ name, isActive, ...rest }: GroupProps) {
  return (
    <Pressable
      h={10}
      w={24}
      mr={3}
      bg="gray.600"
      rounded="md"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      isPressed={isActive}
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        fontFamily="heading"
        fontSize="xs"
        color={isActive ? 'green.500' : 'gray.200'}
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Pressable>
  )
}
