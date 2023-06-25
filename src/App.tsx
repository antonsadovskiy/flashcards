import { SearchIcon } from './components/ui/icons/search-icon'
import { TextField } from './components/ui/textfield'

export const App = () => {
  return (
    <div>
      <TextField />
      <TextField variant={'search'} iconStart={<SearchIcon />} />
      <TextField variant={'password'} />
    </div>
  )
}
