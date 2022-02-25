import { useRef } from 'react';
import { Form, Control, Label, Input, Action, Button } from './style';

function ProfileForm(props) {
  const oldPasswordRef = useRef();
  const newPasswordRef = useRef();

  const submitHandmer = (event) => {
    event.preventDefault();

    const enteredOldPassword = oldPasswordRef.current.value;
    const enteredNewPassword = newPasswordRef.current.value;
    //TODO : add validation

    props.onChangePassword({
      oldPassword: enteredOldPassword,
      newPassword: enteredNewPassword,
    });
  };

  return (
    <Form onSubmit={submitHandmer}>
      <Control>
        <Label htmlFor="new-password">New Password</Label>
        <Input type="password" id="new-password" ref={newPasswordRef} />
      </Control>
      <Control>
        <Label htmlFor="old-password">Old Password</Label>
        <Input type="password" id="old-password" ref={oldPasswordRef} />
      </Control>
      <Action>
        <Button>Change Password</Button>
      </Action>
    </Form>
  );
}

export default ProfileForm;
