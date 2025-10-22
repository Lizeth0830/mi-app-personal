import { SafeAreaView, ScrollView, View, Text } from 'react-native'
import { ProfileSection } from './components/ProfileSection'
import { SkillCard } from './components/SkillCard'
import { ProjectCard } from './components/ProjectCard'

// Interfaces
interface ContactInfo {
  icon: string
  label: string
  value: string
}
interface Skill {
  id: string
  emoji: string
  name: string
}
interface Project {
  id: string
  emoji: string
  title: string
  description: string
  tags: string[]
}

// Datos personales
const personalInfo = {
  name: 'Laura Gutierrez',
  title: 'Desarrolladora Mobile Junior',
  avatar: 'https://i.pravatar.cc/150?img=48',
  bio: 'Apasionada por la tecnología y el diseño. Me encanta crear interfaces modernas y funcionales que generen impacto positivo en las personas.',
}

const contacts: ContactInfo[] = [
  { icon: '📧', label: 'Email', value: 'laura.dev@email.com' },
  { icon: '📍', label: 'Ubicación', value: 'Medellín, Colombia' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/lauragutierrez' },
]

const skills: Skill[] = [
  { id: '1', emoji: '⚛️', name: 'React Native' },
  { id: '2', emoji: '🎨', name: 'TailwindCSS' },
  { id: '3', emoji: '📘', name: 'TypeScript' },
  { id: '4', emoji: '📱', name: 'Expo' },
  { id: '5', emoji: '🔥', name: 'JavaScript' },
  { id: '6', emoji: '💻', name: 'Git & GitHub' },
]

const projects: Project[] = [
  {
    id: '1',
    emoji: '🌈',
    title: 'ColorMood',
    description:
      'App para crear y guardar combinaciones de colores para proyectos de diseño.',
    tags: ['React Native', 'TailwindCSS', 'Expo'],
  },
  {
    id: '2',
    emoji: '📚',
    title: 'StudyTrack',
    description:
      'Aplicación para organizar tus hábitos de estudio y medir tu progreso diario.',
    tags: ['React Native', 'AsyncStorage'],
  },
  {
    id: '3',
    emoji: '🧘‍♀️',
    title: 'MindEase',
    description:
      'App de meditación con sonidos relajantes y recordatorios personalizados.',
    tags: ['React Native', 'TypeScript'],
  },
]

export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Perfil */}
        <ProfileSection
          name={personalInfo.name}
          title={personalInfo.title}
          avatar={personalInfo.avatar}
          bio={personalInfo.bio}
          contacts={contacts}
        />

        {/* Separador */}
        <View className="h-px bg-gray-300 mx-5 my-8" />

        {/* Habilidades */}
        <View className="mx-5">
          <Text className="text-2xl font-bold text-gray-900 mb-4">
            💪 Mis Habilidades
          </Text>
          {skills.map((skill) => (
            <SkillCard key={skill.id} emoji={skill.emoji} name={skill.name} />
          ))}
        </View>

        {/* Separador */}
        <View className="h-px bg-gray-300 mx-5 my-8" />

        {/* Proyectos */}
        <View className="mx-5 mb-10">
          <Text className="text-2xl font-bold text-gray-900 mb-4">
            🚀 Mis Proyectos
          </Text>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              emoji={project.emoji}
              title={project.title}
              description={project.description}
              tags={project.tags}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
