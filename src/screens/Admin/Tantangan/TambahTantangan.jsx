import React from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  Button,
  Spacer,
  ZStack,
  Center,
  VStack,
  IconButton,
  Pressable,
  Image,
  FormControl,
  Input,
  Icon,
  ScrollView,
  ChevronLeftIcon,
  Divider,
} from "native-base";
import NavBar from "../../../lib/components/Navbar";
import TabBar from "../../../lib/components/TabBar";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;

function BuildingAFormExample() {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});

  const validate = () => {
    if (formData.name === undefined) {
      setErrors({ ...errors, name: "Name is required" });
      return false;
    } else if (formData.name.length < 3) {
      setErrors({ ...errors, name: "Name is too short" });
      return false;
    }

    if (formData.email === undefined) {
      setErrors({ ...errors, email: "Email is required" });
      return false;
    } else if (!isValidEmail(formData.email)) {
      setErrors({ ...errors, email: "Invalid email address" });
      return false;
    }

    if (formData.pass === undefined) {
      setErrors({ ...errors, pass: "Password is required" });
      return false;
    } else if (formData.pass.length < 8) {
      setErrors({ ...errors, pass: "Password should be at least 8 characters long" });
      return false;
    }

    if (formData.birthdate === undefined) {
      setErrors({ ...errors, birthdate: "Birth Date is required" });
      return false;
    } else if (!isValidBirthdate(formData.birthdate)) {
      setErrors({ ...errors, birthdate: "Invalid birth date" });
      return false;
    }

    if (formData.address === undefined) {
      setErrors({ ...errors, address: "Address is required" });
      return false;
    }

    return true;
  };

  const isValidEmail = (email) => {
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const isValidBirthdate = (birthdate) => {
    // You can implement your own birthdate validation logic here
    // For simplicity, let's assume any non-empty string is valid
    return birthdate.trim().length > 0;
  };

  const onSubmit = () => {
    validate() ? console.log("Submitted") : console.log("Validation Failed");
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={"name" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Name
        </FormControl.Label>
        <Input
          placeholder="John"
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {"name" in errors ? (
          <FormControl.ErrorMessage>
            {errors.name}
          </FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>Enter a valid name</FormControl.HelperText>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={"email" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          E-mail
        </FormControl.Label>
        <Input
          placeholder="John@xx.com"
          onChangeText={(value) => setData({ ...formData, email: value })}
        />
        {"email" in errors ? (
          <FormControl.ErrorMessage>
            {errors.email}
          </FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Enter a valid email address
          </FormControl.HelperText>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={"pass" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Password
        </FormControl.Label>
        <Input
          placeholder="**********"
          onChangeText={(value) => setData({ ...formData, pass: value })}
        />
        {"pass" in errors ? (
          <FormControl.ErrorMessage>
            {errors.pass}
          </FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>Need 8 characters</FormControl.HelperText>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={"birthdate" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Birth Date
        </FormControl.Label>
        <Input
          placeholder="20 June 2001"
          onChangeText={(value) => setData({ ...formData, birthdate: value })}
        />
        {"birthdate" in errors ? (
          <FormControl.ErrorMessage>
            {errors.birthdate}
          </FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Enter a valid birth date
          </FormControl.HelperText>
        )}
      </FormControl>
      <FormControl isRequired isInvalid={"address" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Address
        </FormControl.Label>
        <Input
          placeholder="Diamond Street"
          onChangeText={(value) => setData({ ...formData, address: value })}
        />
        {"address" in errors ? (
          <FormControl.ErrorMessage>
            {errors.address}
          </FormControl.ErrorMessage>
        ) : (
          <FormControl.HelperText>
            Enter your valid address
          </FormControl.HelperText>
        )}
      </FormControl>
      <Button onPress={onSubmit} mt="4" colorScheme="emerald">
        Submit
      </Button>
    </VStack>
  );
}

export default function TambahTantangan() {
  return (
    <Center flex={1}>
      <BuildingAFormExample />
    </Center>
  );
}
