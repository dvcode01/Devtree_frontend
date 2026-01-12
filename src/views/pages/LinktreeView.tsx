import { useState } from 'react'
import DevtreeInput from '../../components/DevtreeInput'
import { social } from '../../data/social'
import type { DevTreeLink} from '../../types'
import { isValidUrl } from '../../utils';
import { toast } from 'sonner';

function LinktreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState<DevTreeLink[]>(social);

  const handleChangeInput = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => e.target.name === link.name ? {...link, url: e.target.value}  : link);
    setDevTreeLinks(updatedLinks);
  };

  const handleEnableLink = (socialNetwork: string) => {
    const updatedEnable = devTreeLinks.map(link => {
      if(link.name === socialNetwork){
        if(isValidUrl(link.url)){
          return {...link, enabled: !link.enabled};
        }

        toast.error('URL no válida');
      }

      return link;
    });

    setDevTreeLinks(updatedEnable);
  };

  return (
    <div className='space-y-5'>
      {devTreeLinks.map(item => (
        <DevtreeInput
          key={item.name}  
          item={item}
          handleChangeInput={handleChangeInput}
          handleEnableLink={handleEnableLink}
        />
      ))}

      <button 
        className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded font-bold">
          Guardar Cambios
      </button>
    </div>
  )
}

export default LinktreeView