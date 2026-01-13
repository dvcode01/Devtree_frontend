import type { SocialNetwork } from "../types";

type DevtreeLinkProps = {
    link: SocialNetwork
};

function DevtreeLink({link}: DevtreeLinkProps) {
  return (
    <li className="bg-white list-none px-5 py-2 flex items-center gap-5 rounded-lg">
        <div 
          className="w-12 h-12 bg-cover"
          style={{backgroundImage: `url('social/icon_${link.name}.svg')`}}
          >
        </div>

        <p className="capitalize">Visita mi: <span className="font-black">{link.name}</span></p>
    </li>
  )
}

export default DevtreeLink