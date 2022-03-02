import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { SecondaryButton } from "../atoms/button/SecondaryButton";

export const Top = () => {
  const history = useHistory();

  const onCllickAdmin = () =>
    history.push({ pathname: "/users", state: { isAdmin: true } });
  const onCllickGeneral = () =>
    history.push({ pathname: "/users", state: { isAdmin: false } });
  return (
    <SContainer>
      <h2>TOPページ</h2>
      <SecondaryButton onClick={onCllickAdmin}>管理者ユーザー</SecondaryButton>
      <br />
      <br />
      <SecondaryButton onClick={onCllickGeneral}>一般ユーザー</SecondaryButton>
    </SContainer>
  );
};

const SContainer = styled.div`
  text-align: center;
`;
