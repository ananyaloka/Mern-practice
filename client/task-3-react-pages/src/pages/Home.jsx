import Button from "../components/Button";
import Card from "../components/Card";

function Home() {
  function handleClick() {
    alert("Welcome! Button is working.");
  }

  return (
    <div>
      <h1>Welcome to Our Website</h1>
      <p>This is the Home page.</p>

      <Button
        text="Click Me"
        onClick={handleClick}
      />

      <Card
         title="Our Services"
         description="We provide quality services to our customers."
      />
    </div>
  );
}

export default Home;