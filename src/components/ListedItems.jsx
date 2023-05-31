export const ListedItems = ({ keyProp, srcProp, nameProp, symbolProp, priceProp }) => {

  return(
    <li className="listOutsideElement" key={keyProp} style={{listStyle: "none"}}>
        <div className="listElement">
          <img
            width="50px" 
            height="50px" 
            alt={`${nameProp} icon`}
            src={srcProp}
          />
          <div style={{display: "flex", flexDirection: "column"}}>
            <p>
              {nameProp}
              <br />
              {symbolProp}
            </p>
          </div>
          <p>
            ${priceProp}
          </p>
        </div>
    </li>
  );
};
  