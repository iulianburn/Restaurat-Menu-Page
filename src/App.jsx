import React, {useState} from 'react'
import Title from './Title'
import menu from './data'
import Menu from './Menu'
import Categories from './categories'
// const tempCategories=menu.map((item)=>item.category);
// const tempSet=new Set(tempCategories);
// const tempItems=['all',...tempSet];
// console.log(tempItems);

const allCategories=['all',...new Set(menu.map((item)=>item.category))];



const App = () => {
  const filterItems=(category)=>{
    if(category==='all'){
      setMenuItems(menu);
      return;
    }

    console.log(category);
    const newItems=menu.filter((item)=>item.category===category);
    setMenuItems(newItems)
    }
  const[menuItems,setMenuItems]=useState(menu);
  const[categories,setCategories]=useState(allCategories);
  
  return (<main>
    <section className='menu'>
    <Title text='our menu'/>
    <Categories categories={categories} filterItems={filterItems}/>
    <Menu items={menuItems}/>
    </section>
  </main>
  )
}

export default App