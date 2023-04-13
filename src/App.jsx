import { useState } from 'react';
import Categories from './Categories';
import data from './data';
import Menu from './Menu';
import Title from './Title';

const App = () => {
  const [menuItems, setMenuItems] = useState(data);

  const categories = new Set();
  categories.add('all');
  data.forEach((item) => {
    categories.add(item.category);
  });
  const categoryArray = [...categories];

  const filterItems = (category) => {
    console.log(category);
    console.log(data);
    data.forEach((item) => {
      console.log(item.category);
    });
    const filteredItems = data.filter((item) => item.category === category);
    console.log(filteredItems);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Big eats" />
        <Categories categoryArray={categoryArray} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
