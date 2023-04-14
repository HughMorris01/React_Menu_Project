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
    if (category === 'all') {
      return setMenuItems(data);
    }
    const filteredItems = data.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="Big eats" />
        <Categories categories={categoryArray} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
