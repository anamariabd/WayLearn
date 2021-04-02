
import Grupos from './Grupos'
import Error from '../Pages/Error404'

interface ContainerProps {
  name: string;
}

const Content: React.FC<ContainerProps> = ({ name }) => {
  
  var selected= name;
  return (
    <>
      {
        (() => {
          switch (selected) {
            case 'Mis-grupos':
              return (<Grupos />)
           default:
             return (
             <Error/>
            )
          }
        })()
      }
    </>
  )

}

export default Content;