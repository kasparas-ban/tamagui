import { SettingsScreen } from 'app/features/settings/screen'
import { useNativeNotifications } from 'app/hooks/notifications.native'
import { Stack } from 'expo-router'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function Screen() {
  const { schedulePushNotification } = useNativeNotifications()

  return (
    <SafeAreaView style={{ flex: 1 }} edges={['bottom', 'left', 'right']}>
      <Stack.Screen
        options={{
          title: 'Settings',
        }}
      />
      <SettingsScreen onHandleNotif={schedulePushNotification} />
    </SafeAreaView>
  )
}
