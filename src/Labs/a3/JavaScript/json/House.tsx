function House() {
    const house = {
      bedrooms: 4,
      bathrooms: 2.5,
      squareFeet: 2000,
      address: {
        street: "Via Roma",
        city: "Roma",
        state: "RM",
        zip: "00100",
        country: "Italy",
      },
      owners: ["Alice", "Bob"],
    };
  
    return (
      <div>
        <h2>House</h2>
        <h3>Bedrooms: {house.bedrooms}</h3>
        <h3>Bathrooms: {house.bathrooms}</h3>
        <h3>Square Feet: {house.squareFeet}</h3>
        <h3>Address:</h3>
        <p>{house.address.street}, {house.address.city}, {house.address.state}, {house.address.zip}, {house.address.country}</p>
        <h3>Owners:</h3>
        <ul>
          {house.owners.map((owner, index) => (
            <li key={index}>{owner}</li>
          ))}
        </ul>
        <h3>Data:</h3>
        <pre>{JSON.stringify(house, null, 2)}</pre>
      </div>
    );
  }
  
  export default House;
  