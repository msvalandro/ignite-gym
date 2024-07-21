import backgroundImg from '@assets/background.png'
import { Image, VStack } from 'native-base'

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={backgroundImg}
        alt="Pessoas treinando em um ginásio"
        resizeMode="cover"
        position="absolute"
      />
    </VStack>
  )
}
