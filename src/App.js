import "./App.css";
import Comment from "./Comment/Comment";

const comment = {
  date: new Date(),
  text: "I hope you enjoy learning React",
  author: {
    name: "Hello Kitty",
    avatarUrl:
      "https://www.humanesociety.org/sites/default/files/styles/1240x698/public/2020-07/kitten-510651.jpg?h=f54c7448&itok=ZhplzyJ9",
  },
};
function App() {
  return (
    <div className="App">
      <Comment data={comment} />
    </div>
  );
}
export default App;
