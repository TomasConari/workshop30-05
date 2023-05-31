export const ListedItems = ({ keyProp, srcProp, nameProp, symbolProp, priceProp }) => {

  const elementStyle = {
    display: 'flex',
    flexDirection: 'row',
    border: '1px solid black',
    borderRadius: '4px',
  };

  return(
    <li key={keyProp} style={elementStyle}>
      <img src={srcProp} width="5%" height="5%" alt={`${nameProp} icon`} />
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <p>
          {nameProp}
          <br />
          {symbolProp}
        </p>
      </div>
      <p>${priceProp}</p>
    </li>
  );
};
  