import { ExerciseCard } from '@components/ExerciseCard'
import { Group } from '@components/Group'
import { HomeHeader } from '@components/HomeHeader'
import { useFocusEffect, useNavigation } from '@react-navigation/native'
import { AppNavigatorRouterProps } from '@routes/app.routes'
import { api } from '@services/api'
import { AppError } from '@utils/AppError'
import { FlatList, Heading, HStack, Text, useToast, VStack } from 'native-base'
import { useCallback, useEffect, useState } from 'react'

export function Home() {
  const [groups, setGroups] = useState<string[]>([])
  const [groupSelected, setGroupSelected] = useState('costas')

  const [exercises, setExercises] = useState([
    'Puxada frontal',
    'Remada curvada',
    'Remada unilateral',
    'Levantamento terra',
  ])

  const navigation = useNavigation<AppNavigatorRouterProps>()

  const toast = useToast()

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  async function fetchGroups() {
    try {
      const { data } = await api.get('/groups')

      setGroups(data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os grupos musculares.'

      toast.show({ title, placement: 'top', bgColor: 'red.500' })
    }
  }

  async function fetchExercisesByGroup() {
    try {
      const { data } = await api.get(`/exercises/bygroup/${groupSelected}`)
      console.log(data)
    } catch (error) {
      const isAppError = error instanceof AppError
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os exercícios.'

      toast.show({ title, placement: 'top', bgColor: 'red.500' })
    }
  }

  useEffect(() => {
    fetchGroups()
  }, [])

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup()
    }, [groupSelected]),
  )

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toUpperCase() === item.toUpperCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        _contentContainerStyle={{ px: 8 }}
        my={10}
        maxH={10}
        minH={10}
      />

      <VStack flex={1} px={8}>
        <HStack justifyContent="space-between" mb={5}>
          <Heading fontFamily="heading" fontSize="md" color="gray.200">
            Exercícios
          </Heading>

          <Text fontSize="sm" color="gray.200">
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          _contentContainerStyle={{ pb: 20 }}
        />
      </VStack>
    </VStack>
  )
}
