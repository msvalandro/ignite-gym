import BodySvg from '@assets/body.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import SeriesSvg from '@assets/series.svg'
import { Button } from '@components/Button'
import { Feather } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { TouchableOpacity } from 'react-native'

interface RouteParams {
  exerciseId: string
}

export function Exercise() {
  const navigation = useNavigation()

  const route = useRoute()

  const { exerciseId } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  return (
    <VStack flex={1}>
      <VStack px={8} pt={12} bg="gray.600">
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={Feather} name="arrow-left" color="green.500" size={6} />
        </TouchableOpacity>

        <HStack
          justifyContent="space-between"
          alignItems="center"
          mt={4}
          mb={8}
        >
          <Heading
            fontFamily="heading"
            fontSize="lg"
            color="gray.100"
            flexShrink={1}
          >
            Puxada frontal
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" textTransform="capitalize" ml={1}>
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView>
        <VStack p={8}>
          <Image
            h={80}
            w="full"
            source={{
              uri: 'https://imgs.search.brave.com/r5VtJPAsfvh1cIWt1o8mW_my8keaQrCCQuz_DAQK1Ps/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jb250/ZXVkby5pbWd1b2wu/Y29tLmJyL2MvZW50/cmV0ZW5pbWVudG8v/MGMvMjAxOS8xMi8w/My9yZW1hZGEtdW5p/bGF0ZXJhbC1jb20t/aGFsdGVyZXMtMTU3/NTQwMjEwMDUzOF92/Ml80NTB4NDUwLmpw/Zw',
            }}
            alt="Puxada frontal"
            mb={3}
            resizeMode="contain"
            rounded="xl"
          />

          <Box bg="gray.600" rounded="md" pb={4} px={4}>
            <HStack
              alignItems="center"
              justifyContent="space-around"
              mb={6}
              mt={5}
            >
              <HStack>
                <SeriesSvg />
                <Text color="gray.200" ml={2}>
                  3 Séries
                </Text>
              </HStack>

              <HStack>
                <RepetitionsSvg />
                <Text color="gray.200" ml={2}>
                  12 Repetições
                </Text>
              </HStack>
            </HStack>

            <Button title="Marcar como realizado" />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}
