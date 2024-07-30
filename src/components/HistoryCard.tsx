import { HistoryDTO } from '@dtos/HistoryDTO'
import { Heading, HStack, Text, VStack } from 'native-base'

interface HistoryCardProps {
  data: HistoryDTO
}

export function HistoryCard({ data }: HistoryCardProps) {
  const { name, group } = data

  return (
    <HStack
      w="full"
      px={5}
      py={4}
      mb={3}
      bg="gray.600"
      rounded="md"
      alignItems="center"
      justifyContent="space-between"
    >
      <VStack mr={5} flex={1}>
        <Heading
          fontFamily="heading"
          fontSize="md"
          color="white"
          textTransform="capitalize"
          numberOfLines={1}
        >
          {group}
        </Heading>

        <Text fontSize="lg" color="gray.100" numberOfLines={1}>
          {name}
        </Text>
      </VStack>

      <Text fontSize="md" color="gray.300">
        {data.hour}
      </Text>
    </HStack>
  )
}
