import { Entypo } from '@expo/vector-icons'
import { Heading, HStack, Icon, Image, Text, VStack } from 'native-base'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'

interface ExerciseCardProps extends TouchableOpacityProps {}

export function ExerciseCard({ ...rest }: ExerciseCardProps) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg="gray.500"
        alignItems="center"
        p={2}
        pr={4}
        rounded="md"
        mb={3}
      >
        <Image
          source={{
            uri: 'https://imgs.search.brave.com/r5VtJPAsfvh1cIWt1o8mW_my8keaQrCCQuz_DAQK1Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvZW50/cmV0ZW5pbWVudG8v/MGMvMjAxOS8xMi8w/My9yZW1hZGEtdW5p/bGF0ZXJhbC1jb20t/aGFsdGVyZXMtMTU3/NTQwMjEwMDUzOF92/Ml80NTB4NDUwLmpw/Zw',
          }}
          alt="Um homem executando o exercício 'remada unilateral' em um ginásio"
          h={16}
          w={16}
          rounded="md"
          mr={4}
          resizeMode="center"
        />

        <VStack flex={1}>
          <Heading fontFamily="heading" fontSize="lg" color="white">
            Remada unilateral
          </Heading>

          <Text fontSize="sm" color="gray.200" mt={1} numberOfLines={2}>
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={Entypo} name="chevron-thin-right" color="gray.300" />
      </HStack>
    </TouchableOpacity>
  )
}
