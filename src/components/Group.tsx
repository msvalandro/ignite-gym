import { HStack, Text } from 'native-base'

interface GroupProps {
  name: string
}

export function Group({ name }: GroupProps) {
  return (
    <HStack>
      <Text
        fontFamily="heading"
        fontSize="xs"
        color="gray.200"
        textTransform="uppercase"
      >
        {name}
      </Text>
    </HStack>
  )
}
