export const linking = {
    prefixes: ['searchmovies://'],
    config: {
      screens: {
        TabNavigator: {
          screens: {
            Search: {
              path: 'Search',
            },
            Favorites: {
              path: 'Favorites'
            },
            Shared: {
              path: 'Shared'
            }
          }
        },
        Detail:{ 
          path: 'Detail/:imdbID'
        }
      }
    }
  }