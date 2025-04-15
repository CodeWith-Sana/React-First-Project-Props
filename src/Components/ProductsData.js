import mern from '../Assets/mern.jpg';
import  html from '../Assets/html.png';
import react from '../Assets/react.jpg';
import wordpress from '../Assets/wordpress.jpg';

const CORE_BOOKS =[
    {
      image: mern,
      title: 'Mern for Beginners',
      price :'20$',
      description:
        'The core UI building block - compose the user interface by combining multiple components.',
    },
    {
      image: html,
      title: 'Html & CSS 5th edition',
      price :'35$',
      description:
        'Return (potentially dynamic) HTML(ish) code to define the actual markup that will be rendered.',
    },
    {
      image: react,
      title: 'The Road To Learn React',
      price :'50$',
      description:
        'Make components configurable (and therefore reusable) by passing input data to them.',
    },
    {
      image: wordpress,
      title: 'WordPress Projects',
      price :'25$',
      description:
        'React-managed data which, when changed, causes the component to re-render & the UI to update.',
    },
  ];

  export default CORE_BOOKS;