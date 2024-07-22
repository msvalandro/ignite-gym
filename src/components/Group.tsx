import { IPressableProps, Pressable, Text } from 'native-base'

interface GroupProps extends IPressableProps {
  name: string
}

export function Group({ name, ...rest }: GroupProps) {
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
      _pressed={{
        borderColor: 'green.500',
        borderWidth: 1,
      }}
      {...rest}
    >
      <Text
        fontFamily="heading"
        fontSize="xs"
        color="gray.200"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </Pressable>
  )
}
