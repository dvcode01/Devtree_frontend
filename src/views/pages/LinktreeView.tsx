import { useState } from 'react'
import DevtreeInput from '../../components/DevtreeInput'
import { social } from '../../data/social'
import type { DevTreeLink } from '../../types'

function LinktreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState<DevTreeLink[]>(social);

  return (
    <div className='space-y-5'>
      {devTreeLinks.map(item => (
        <DevtreeInput
          key={item.name}  
          item={item}
        />
      ))}
    </div>
  )
}

export default LinktreeView