type NameTagTypes = {
  name: String;
};

const NameTag = ({ name }: NameTagTypes) => {
  return (
    <main className="display-name">
      <p>{name}</p>
    </main>
  );
};

const Application = () => <NameTag name="wilder" />;

export default Application;
