import { Icon } from 'react-native-elements'

export const searchTabOptions = {
    tabBarLabel: 'Search',
    headerShown: false,
    tabBarIcon: ({ color, size }) => (
        <Icon
            name='search'
            type='feather'
            color={color}
            size={24}
        />
    )
}

export const favoritesTabOptions = {
    tabBarLabel: 'Favorites',
    tabBarIcon: ({ color, size }) => (
        <Icon
            name='star'
            type='feather'
            color={color}
            size={24}
        />
    )
}

export const sharedTabOptions = {
    tabBarLabel: 'Shared',
    tabBarIcon: ({ color, size }) => (
        <Icon
            name='share-2'
            type='feather'
            color={color}
            size={24}
        />
    )
}