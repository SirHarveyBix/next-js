import { Form, Control, Label, Input, Action, Button } from './style';

function ProfileForm() {
  return (
    <Form>
      <Control>
        <Label htmlFor="new-password">New Password</Label>
        <Input type="password" id="new-password" />
      </Control>
      <Control>
        <Label htmlFor="old-password">Old Password</Label>
        <Input type="password" id="old-password" />
      </Control>
      <Action>
        <Button>Change Password</Button>
      </Action>
    </Form>
  );
}

export default ProfileForm;
