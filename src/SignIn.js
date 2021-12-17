import {
  Button,
  Card,
  FormControl,
  Input,
  InputLabel,
  Typography,
} from "@material-ui/core";
import React from "react";
import DividerWithText from "./Divider";
import "./SignIn.css";
function SignIn() {
  return (
    <div className="signin">
      <Card>
        <Typography>Sign-in</Typography>
        <FormControl variant="outlined">
          <InputLabel>Email or mobile phone number</InputLabel>
          <Input className="signin__input" />
          <Button>Continue</Button>
          <Typography>
            By continuing, you agree to Amazon's <span>Conditions of Use</span>{" "}
            and <span>Privacy</span>
            Notice.
          </Typography>
          <Typography></Typography>
        </FormControl>
      </Card>
      <DividerWithText>New to Amazon?</DividerWithText>
      <Button>Create your Amazon account</Button>
    </div>
  );
}

export default SignIn;
