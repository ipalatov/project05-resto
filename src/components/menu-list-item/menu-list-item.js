import React from 'react';
import './menu-list-item.scss';
import saladIcon from '../../assets/icons/salad.png'
import pizzaIcon from '../../assets/icons/pizza.png'
import meatIcon from '../../assets/icons/meat.png'


const MenuListItem = ({ menuItem }) => {
    const { title, price, url, category } = menuItem;
    let img;
    switch (category) {
        case 'salads': img = saladIcon; break;
        case 'pizza': img = pizzaIcon; break;
        case 'meat': img = meatIcon; break;
        default: img = null;
    }



    return (
        <li className="menu__item">
            <div className="menu__title">{title}</div>
            <img className="menu__img" src={url} alt={title}></img>
            <div className="menu__category">Category: <span>{category}</span> <span> <img src={img} alt={''} /> </span> </div>
            <div className="menu__price">Price: <span>{price}$</span></div>
            <button className="menu__btn">Add to cart</button>
        </li>

    )
}

export default MenuListItem;