// Write your code here
import {useState} from 'react'

import {
  LockMainContainer,
  LockSubContainer,
  LockImageContainer,
  LockImage,
  LockContent,
  LockButton,
} from './styledComponents'

const Unlock = () => {
  const [active, setActive] = useState(false)
  const onClickButton = () => {
    setActive(prevState => !prevState)
  }
  console.log(active)

  return (
    <LockMainContainer>
      <LockSubContainer>
        <LockImageContainer>
          <LockImage
            src={
              active
                ? 'https://assets.ccbp.in/frontend/hooks/unlock-img.png'
                : 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            }
            alt={active ? 'unlock' : ' lock'}
          />
          <LockContent>
            Your Device is {active ? 'Unlocked' : 'Locked'}
          </LockContent>
        </LockImageContainer>
        <LockButton type="button" onClick={onClickButton}>
          {active ? 'Lock' : 'Unlock'}
        </LockButton>
      </LockSubContainer>
    </LockMainContainer>
  )
}

export default Unlock
