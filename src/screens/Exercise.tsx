import BodySvg from '@assets/body.svg'
import RepetitionsSvg from '@assets/repetitions.svg'
import SeriesSvg from '@assets/series.svg'
import { Button } from '@components/Button'
import { Loading } from '@components/Loading'
import { ExerciseDTO } from '@dtos/ExerciseDTO'
import { Feather } from '@expo/vector-icons'
import {
  useFocusEffect,
  useNavigation,
  useRoute,
} from '@react-navigation/native'
import { AppNavigatorRouterProps } from '@routes/app.routes'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import {
  Box,
  Heading,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  useToast,
  VStack,
} from 'native-base'
import { useCallback, useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'

interface RouteParams {
  exerciseId: string
}

export function Exercise() {
  const [sendingRegister, setSendingRegister] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const [exercise, setExercise] = useState<ExerciseDTO>({} as ExerciseDTO)

  const toast = useToast()

  const navigation = useNavigation<AppNavigatorRouterProps>()

  const route = useRoute()

  const { exerciseId } = route.params as RouteParams

  function handleGoBack() {
    navigation.goBack()
  }

  async function fetchExerciseDetails() {
    try {
      setIsLoading(true)

      const { data } = await api.get(`/exercises/${exerciseId}`)

      setExercise(data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os detalhes do exercício.'

      toast.show({ title, placement: 'top', bgColor: 'red.500' })
    } finally {
      setIsLoading(false)
    }
  }

  async function handleExerciseHistoryRegister() {
    try {
      setSendingRegister(true)

      await api.post('/history', { exercise_id: exerciseId })

      toast.show({
        title: 'Parabéns! Exercício registrado no seu histórico.',
        placement: 'top',
        bgColor: 'green.700',
      })

      navigation.navigate('history')
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível registrar o exercício.'

      toast.show({ title, placement: 'top', bgColor: 'red.500' })
    } finally {
      setSendingRegister(false)
    }
  }

  useEffect(() => {
    fetchExerciseDetails()
  }, [exerciseId])

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
            {exercise.name}
          </Heading>

          <HStack alignItems="center">
            <BodySvg />

            <Text color="gray.200" textTransform="capitalize" ml={1}>
              {exercise.group}
            </Text>
          </HStack>
        </HStack>
      </VStack>

      {isLoading ? (
        <Loading />
      ) : (
        <ScrollView>
          <VStack p={8}>
            <Box rounded="xl" mb={3} overflow="hidden">
              <Image
                h={80}
                w="full"
                source={{
                  uri: `${api.defaults.baseURL}/exercise/demo/${exercise.demo}`,
                }}
                alt={exercise.name}
                resizeMode="contain"
                rounded="xl"
              />
            </Box>

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
                    {exercise.series} Séries
                  </Text>
                </HStack>

                <HStack>
                  <RepetitionsSvg />
                  <Text color="gray.200" ml={2}>
                    {exercise.repetitions} Repetições
                  </Text>
                </HStack>
              </HStack>

              <Button
                title="Marcar como realizado"
                onPress={handleExerciseHistoryRegister}
                isLoading={sendingRegister}
              />
            </Box>
          </VStack>
        </ScrollView>
      )}
    </VStack>
  )
}
