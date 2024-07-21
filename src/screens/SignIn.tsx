import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Center, Heading, Image, Text, VStack } from 'native-base'

export function SignIn() {
  return (
    <VStack flex={1} bg="gray.700">
      <Image
        source={backgroundImg}
        alt="Pessoas treinando em um ginásio"
        resizeMode="cover"
        position="absolute"
      />

      <Center my={24}>
        <LogoSvg />

        <Text color="gray.100" fontSize="sm">
          Treine sua mente e o seu corpo
        </Text>
      </Center>

      <Center>
        <Heading color="gray.100" fontFamily="heading" fontSize="xl" mb="6">
          Acesse sua conta
        </Heading>
      </Center>
    </VStack>
  )
}
