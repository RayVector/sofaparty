class Navigation {
  title = ''
  path = ''

  constructor(title: string, path: string) {
    this.title = title
    this.path = path
  }
}


export default [
  new Navigation('Home', '/'),
  new Navigation('My library', '/my-library'),
  new Navigation('Watch', '/watch')
]
