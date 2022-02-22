import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { Usercard } from "./components/organisms/user/UserCard";
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
  return (
    <div className="App">
      <PrimaryButton>テスト</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <Usercard user={user} />
    </div>
  );
}
