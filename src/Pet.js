import { Link } from "react-router-dom";

const Pet = (props) => {
  const { name, animal, breed, images, location, id, theme } = props;

  let hero = "http://pets-images.dev-apis.com/pets/none.jpg";
  if (images.length) {
    hero = images[0];
  }

  return (
    <Link to={`/details/${id}`} className="relative block">
      <div>
        <img src={hero} alt={name} />
      </div>
      <div className="absolute bottom-0 left-0 bg-gradient-to-tr from-white to-transparent p-2 w-full">
        <h1 className="text-xl"
        style={{ color: theme }}>{name}</h1>
        <h2 style={{ color: theme }}>{`${animal} — ${breed} — ${location}`}</h2>
      </div>
    </Link>
  );
};

export default Pet;
