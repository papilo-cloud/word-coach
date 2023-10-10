import {Card} from './Card'
import { getUserImage } from './getUserImage';
// const user = {
//   name: 'Hady Lamar',
//   imgUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
//   imgSize: 200
// }
const products = [
  { title: 'Cabbage', id: 1 },
  { title: 'Garlic', id: 2 },
  { title: 'Apple', id: 3 },
];

export function Apps() {
  const pdc = products.map(x => <li style={{
    color: x.id == 1? 'red': 'blue'
  }}>{x.title}</li>)
  return (
    <Card>
      <h1>My Profile</h1>
      <Profile person={
        { name: 'Lin Lanying', imageId: '1bX5QH6', size:'m' }
      } />
      {pdc}
    </Card>
  )
}

function Profile({person}) {
  return(
      <div className="app">
        <h2>{person.name}</h2>
        <img
        src={getUserImage(person)}
        />
      </div>
  )
}




// export default Apps;