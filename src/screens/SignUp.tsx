import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import {
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { Platform } from 'react-native'

export function SignUp() {
  return (
    <KeyboardAvoidingView
      flex={1}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <VStack flex={1}>
          <Image
            source={backgroundImg}
            alt="Pessoas treinando em um ginásio"
            resizeMode="cover"
            position="absolute"
          />

          <VStack px={10} pb={16}>
            <Center my={24}>
              <LogoSvg />

              <Text color="gray.100" fontSize="sm">
                Treine sua mente e o seu corpo
              </Text>
            </Center>

            <Center>
              <Heading
                color="gray.100"
                fontFamily="heading"
                fontSize="xl"
                mb="6"
              >
                Crie sua conta
              </Heading>

              <Input
                placeholder="E-mail"
                keyboardType="email-address"
                autoCapitalize="none"
              />
              <Input placeholder="Nome" />
              <Input placeholder="Senha" secureTextEntry />

              <Button title="Criar e acessar" />
            </Center>

            <Button title="Voltar para o login" variant="outline" mt={24} />
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
