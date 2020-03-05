import React from 'react';
import './css/CollectionItem.scss'
const CollectionItem = ({ id, name, price, imageUrl }) => {
  // alert(imageUrl)
  return (
    <div className='collection-item'>
      <div
        className="image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">${price}</span>
      </div>
    </div>
  );
}

export default CollectionItem;
