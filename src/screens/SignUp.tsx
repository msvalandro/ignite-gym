import backgroundImg from '@assets/background.png'
import LogoSvg from '@assets/logo.svg'
import { Button } from '@components/Button'
import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import {
  Center,
  Heading,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Text,
  VStack,
} from 'native-base'
import { Controller, useForm } from 'react-hook-form'
import { Platform } from 'react-native'

interface FormDataProps {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export function SignUp() {
  const { control, handleSubmit } = useForm<FormDataProps>()

  const navigation = useNavigation()

  function handleGoBack() {
    navigation.goBack()
  }

  function handleSignUp({
    name,
    email,
    password,
    confirmPassword,
  }: FormDataProps) {}

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
            defaultSource={backgroundImg}
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

              <Controller
                control={control}
                name="name"
                rules={{
                  required: 'Informe o nome.',
                }}
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Nome"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Senha"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                  />
                )}
              />

              <Controller
                control={control}
                name="confirmPassword"
                render={({ field: { onChange, value } }) => (
                  <Input
                    placeholder="Confirme a senha"
                    secureTextEntry
                    value={value}
                    onChangeText={onChange}
                    onSubmitEditing={handleSubmit(handleSignUp)}
                    returnKeyType="send"
                  />
                )}
              />

              <Button
                title="Criar e acessar"
                onPress={handleSubmit(handleSignUp)}
              />
            </Center>

            <Button
              title="Voltar para o login"
              variant="outline"
              mt={24}
              onPress={handleGoBack}
            />
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
