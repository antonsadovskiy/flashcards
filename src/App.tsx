import { Button } from './components/ui/button'
import { Typography } from './components/ui/typography'

export const App = () => {
  return (
    <Button>
      <Typography variant={'subtitle1'} color={'light'}>
        some text
      </Typography>
    </Button>
  )
}
