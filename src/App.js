import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "犬山 犬男",
  image: "https://source.unsplash.com/NE0XGVKTmcA",
  email: "1234@example.com",
  phone: "090-1111-2222",
  company: {
    name: "テスト株式会社"
  },
  website: "https://github.co.jp/"
};

export default function App() {
  return <Router />;
}
