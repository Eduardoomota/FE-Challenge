import { TbPencil } from "react-icons/tb";
import MainContent from "components/main-content";
import Avatar from "components/avatar";
import * as S from "./settings.styles";

const Settings = () => {
  return (
    <MainContent title="Setting">
      <S.Container>
        <S.Tabs>
          <button className="active">Edit Profile</button>
          <button>Preferences</button>
          <button>Security</button>
        </S.Tabs>
        <S.Content>
          <S.BoxAvatar>
            <Avatar size="lg" imageSrc="/lorem-2.png" />
            <TbPencil size={30} />
          </S.BoxAvatar>
          <S.Form>
            <S.Row>
              <S.InputGroup>
                <label>Your Name</label>
                <input type="text" placeholder="Charlene Reed" />
              </S.InputGroup>
              <S.InputGroup>
                <label>User Name</label>
                <input type="text" placeholder="Charlene Reed" />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label>Email</label>
                <input type="email" placeholder="charlenereed@gmail.com" />
              </S.InputGroup>
              <S.InputGroup>
                <label>Password</label>
                <input type="password" placeholder="**********" />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label>Date of Birth</label>
                <input type="date" />
              </S.InputGroup>
              <S.InputGroup>
                <label>Present Address</label>
                <input type="text" placeholder="San Jose, California, USA" />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label>Permanent Address</label>
                <input type="text" placeholder="San Jose, California, USA" />
              </S.InputGroup>
              <S.InputGroup>
                <label>City</label>
                <input type="text" placeholder="San Jose" />
              </S.InputGroup>
            </S.Row>
            <S.Row>
              <S.InputGroup>
                <label>Postal Code</label>
                <input type="text" placeholder="45962" />
              </S.InputGroup>
              <S.InputGroup>
                <label>Country</label>
                <input type="text" placeholder="USA" />
              </S.InputGroup>
            </S.Row>
            <S.Footer>
              <S.SaveButton>Save</S.SaveButton>
            </S.Footer>
          </S.Form>
        </S.Content>
      </S.Container>
    </MainContent>
  );
};

export default Settings;
