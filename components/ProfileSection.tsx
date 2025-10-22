import { View, Text, Image } from 'react-native'

interface ContactInfo {
  icon: string
  label: string
  value: string
}

interface ProfileSectionProps {
  name: string
  title: string
  avatar: string
  bio: string
  contacts: ContactInfo[]
}

export function ProfileSection({
  name,
  title,
  avatar,
  bio,
  contacts,
}: ProfileSectionProps) {
  return (
    <View>
      {/* Header */}
      <View className="bg-primary h-48 items-center justify-end pb-10">
        <Text className="text-white text-3xl font-bold">MI APP PERSONAL</Text>
      </View>

      {/* Avatar */}
      <View className="items-center -mt-16">
        <Image
          source={{ uri: avatar }}
          className="w-32 h-32 rounded-full border-4 border-white"
        />
      </View>

      {/* Nombre y título */}
      <View className="items-center mt-4 px-5">
        <Text className="text-3xl font-bold text-gray-900">{name}</Text>
        <Text className="text-lg text-gray-600 mt-1">{title}</Text>
      </View>

      {/* Contactos */}
      <View className="mx-5 mt-6 bg-white rounded-xl p-5 border border-gray-200">
        {contacts.map((contact, index) => (
          <View
            key={`${contact.label}-${index}`}
            className={`flex-row items-center ${
              index < contacts.length - 1 ? 'mb-4' : ''
            }`}
          >
            <Text className="text-2xl mr-3">{contact.icon}</Text>
            <View className="flex-1">
              <Text className="text-sm text-gray-500">{contact.label}</Text>
              <Text className="text-base text-gray-900 font-medium">
                {contact.value}
              </Text>
            </View>
          </View>
        ))}
      </View>

      {/* Bio */}
      <View className="mx-5 mt-6 bg-white rounded-xl p-5 border border-gray-200">
        <Text className="text-xl font-bold text-gray-900 mb-3">Sobre Mí</Text>
        <Text className="text-base text-gray-600 leading-6">{bio}</Text>
      </View>
    </View>
  )
}
