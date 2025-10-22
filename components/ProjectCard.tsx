import { View, Text } from 'react-native'

interface ProjectCardProps {
  emoji: string
  title: string
  description: string
  tags: string[]
}

export function ProjectCard({ emoji, title, description, tags }: ProjectCardProps) {
  return (
    <View className="bg-white rounded-xl p-5 mb-4 border border-gray-200 shadow-sm">
      {/* Header */}
      <View className="flex-row items-center mb-3">
        <Text className="text-3xl mr-3">{emoji}</Text>
        <Text className="text-xl font-bold text-gray-900 flex-1">{title}</Text>
      </View>

      {/* Descripción */}
      <Text className="text-base text-gray-600 mb-3 leading-5">{description}</Text>

      {/* Tags */}
      <View className="flex-row flex-wrap">
        {tags.map((tag, index) => (
          <View
            key={`${tag}-${index}`}
            className="bg-secondary rounded-full px-3 py-1 mr-2 mb-2"
          >
            <Text className="text-sm text-primary font-medium">{tag}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}
