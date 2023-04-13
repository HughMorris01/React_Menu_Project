import MenuItem from './MenuItem';

const Menu = ({ menuItems }) => {
  return (
    <section className="section-center">
      {menuItems.map((item) => {
        return <MenuItem key={item.id} {...item} />;
      })}
    </section>
  );
};
export default Menu;
