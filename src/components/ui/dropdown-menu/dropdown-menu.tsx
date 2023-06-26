import * as DropdownMenu from '@radix-ui/react-dropdown-menu'

import s from './dropdown-menu.module.scss'

export const DropDownMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={s.IconButton} />
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content className={s.DropdownMenuContent} sideOffset={5}>
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Tab <div className={s.RightSlot}>⌘+T</div>
          </DropdownMenu.Item>
          <DropdownMenu.Separator className={s.DropdownMenuSeparator} />
          <DropdownMenu.Item className={s.DropdownMenuItem}>
            New Window <div className={s.RightSlot}>⌘+N</div>
          </DropdownMenu.Item>
          <DropdownMenu.Arrow className={s.DropdownMenuArrow} />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  )
}
