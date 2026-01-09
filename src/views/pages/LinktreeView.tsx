import { useState } from 'react'
import DevtreeInput from '../../components/DevtreeInput'
import { social } from '../../data/social'
import type { DevTreeLink } from '../../types'

function LinktreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState<DevTreeLink[]>(social);

  const handleChangeInput = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => e.target.name === link.name ? {...link, url: e.target.value}  : link);
    console.log(updatedLinks);
    setDevTreeLinks(updatedLinks);
  };

  return (
    <div className='space-y-5'>
      {devTreeLinks.map(item => (
        <DevtreeInput
          key={item.name}  
          item={item}
          handleChangeInput={handleChangeInput}
        />
      ))}
    </div>
  )
}

export default LinktreeView