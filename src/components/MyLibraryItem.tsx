interface IMyLibraryItem {
  title: String
}

export const MyLibraryItem = ({ title }: IMyLibraryItem) => {
  return(
    <div>{ title }</div>
  )
}
