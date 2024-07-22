import { IImageProps, Image } from 'native-base'

interface UserPhotoProps extends IImageProps {
  size: number
}

export function UserPhoto({ size, ...rest }: UserPhotoProps) {
  return (
    <Image
      h={size}
      w={size}
      rounded="full"
      borderWidth={2}
      borderColor="gray.400"
      alt="Imagem de perfil do usuário"
      {...rest}
    />
  )
}
