class ProfileNavigation {
  title = ''
  value = ''
  path = ''

  constructor(title: string, value: string, path: string) {
    this.title = title
    this.value = value
    this.path = path
  }
}

export default [
  new ProfileNavigation('Profile', 'profile', '/profile'),
  new ProfileNavigation('Friends', 'friends', ''),
  new ProfileNavigation('Logout', 'logout', '')
]
