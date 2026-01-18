import { useEffect, useState } from 'react'
import { useMutation, useQueryClient } from '@tanstack/react-query';
import DevtreeInput from '../../components/DevtreeInput'
import { social } from '../../data/social'
import type { DevTreeLink, SocialNetwork, User} from '../../types'
import { isValidUrl } from '../../utils';
import { toast } from 'sonner';
import { updateProfile } from '../../api/DevtreeApi';

function LinktreeView() {
  const [devTreeLinks, setDevTreeLinks] = useState<DevTreeLink[]>(social);
  const queryClient = useQueryClient();
  const user: User = queryClient.getQueryData(['user'])!;

  const { mutate } = useMutation({
    mutationFn: updateProfile,
    onSuccess: () => {
      toast.success('Actualizado Correctamente')
    },
    onError: (error) => {
      toast.error(error.message);
    }
  });

  useEffect(() => {
    const updatedData = devTreeLinks.map(item => {
      const userLinks = JSON.parse(user.links).find((link: SocialNetwork) => item.name === link.name);

      if(userLinks){
        return { ...item, url: userLinks.url, enabled: userLinks.enabled };
      }

      return item;
    });

    setDevTreeLinks(updatedData);
  }, []);

  const handleChangeInput = (e:  React.ChangeEvent<HTMLInputElement>) => {
    const updatedLinks = devTreeLinks.map(link => e.target.name === link.name ? {...link, url: e.target.value}  : link);
    setDevTreeLinks(updatedLinks);

    /*queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedLinks)
      }
    });*/
  };

  const links: SocialNetwork[] = JSON.parse(user.links);

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

    let updatedItems: SocialNetwork[] = [];
    const selectedSocialNetwork = updatedEnable.find(link => link.name === socialNetwork);
    
    if(selectedSocialNetwork?.enabled){
      const newItem = {
        ...selectedSocialNetwork,
        id: links.length + 1
      };

      updatedItems = [...links, newItem];
    }else{
      // evitar ids duplicados
      const indexToUpdate = links.findIndex(link => link.name === socialNetwork);

      updatedItems = links.map(link => {
        if(link.name === socialNetwork){
          return {
            ...link,
            id: 0,
            enabled: false
          }
        }

        if(link.id > indexToUpdate){
          return {
            ...link,
            id: link.id - 1
          }
        }

        return link;
      });
    }

    console.log(updatedItems);

    // almacena en DB
    queryClient.setQueryData(['user'], (prevData: User) => {
      return {
        ...prevData,
        links: JSON.stringify(updatedItems)
      }
    });
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
        className="bg-cyan-400 p-2 text-lg w-full uppercase text-slate-600 rounded font-bold"
        onClick={() => mutate(user)}  
      >
          Guardar Cambios
      </button>
    </div>
  )
}

export default LinktreeView