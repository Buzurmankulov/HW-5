import "./App.css";
import Card from "./components/card/Card";
import CardLayout from "./components/card_layout/CardLayout";
import Title from "./components/title/Title";
import users from "./utls/Data";
function App() {
  return (
    <div className="App">
      <Title />
      <CardLayout>
        {users.map((item) => (
          <Card
            id={item.id}
            username={item.username}
            bgcolor={item.wallpaper}
            userInfo={item.userInfo}
            profilePic={item.profilePic}
            social={item.social}
          ></Card>
        ))}
      </CardLayout>
    </div>
  );
}
export default App;
