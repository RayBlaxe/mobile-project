import React, { useState } from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  Button,
  Spacer,
  View,
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
  useToast,
} from "native-base";

import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
const windowWidth = Dimensions.get("window").width;

// You can also use as a promise without 'callback':

function BuildingAFormExample({ navigation }) {
  const [formData, setData] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const toast = useToast();

  const validate = () => {
    const errors = {};

    if (!formData.name || formData.name.length < 3) {
      errors.name = "Mohon isi Nama (minimal 3 karakter)";
    }

    if (!formData.email) {
      errors.email = "Mohon isi Email";
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Mohon isi Password (minimal 6 karakter)";
    }

    if (!formData.role) {
      errors.role = "Mohon isi role";
    }

    if (!formData.lokasi) {
      errors.lokasi = "Mohon isi lokasi";
    }
    if (!formData.tgl_lahir) {
      errors.tgl_lahir = "Mohon isi Tanggal lahir";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onSubmit = () => {
    // Validate the formData
    if (validate()) {
      const form = new FormData();

      form.append("username", formData.name);
      form.append("email", formData.email);
      form.append("password", formData.password);
      form.append("role", formData.role);
      form.append("point", 0);
      form.append("lokasi", formData.lokasi);
      form.append("tgl_lahir", formData.tgl_lahir);

      console.log(form);

      fetch("http://192.168.1.7:8000/api/artikel", {
        method: "POST",
        headers: {
          "Content-Type": "multipart/form-data",
        },
        body: form,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          toast.show({
            title: "Form submitted successfully",
            status: "success",
            duration: 3000,
          });
          navigation.goBack();
        })
        .catch((error) => {
          console.error(error);
        });
      console.log("Submitted");
    } else {
      console.log("Validation Failed");
    }
  };

  return (
    <VStack width="90%" mx="3" maxW="300px">
      <FormControl isRequired isInvalid={"name" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Nama user
        </FormControl.Label>
        <Input
          placeholder="Masukkan nama "
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {"name" in errors ? (
          <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"email" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Email
        </FormControl.Label>
        <Input
          placeholder="Masukkan email"
          onChangeText={(value) => setData({ ...formData, email: value })}
        />
        {"email" in errors ? (
          <FormControl.ErrorMessage>{errors.email}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"password" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Password
        </FormControl.Label>
        <Input
          type="password"
          placeholder="Masukkan password"
          onChangeText={(value) => setData({ ...formData, password: value })}
        />
        {"password" in errors ? (
          <FormControl.ErrorMessage>{errors.password}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"role" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Role user
        </FormControl.Label>
        <Input
          placeholder="Masukkan role user"
          onChangeText={(value) => setData({ ...formData, role: value })}
        />
        {"role" in errors ? (
          <FormControl.ErrorMessage>{errors.role}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"lokasi" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Lokasi
        </FormControl.Label>
        <Input
          placeholder="Masukkan lokasi user"
          onChangeText={(value) => setData({ ...formData, lokasi: value })}
        />
        {"lokasi" in errors ? (
          <FormControl.ErrorMessage>{errors.lokasi}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"tgl_lahir" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Tanggal Lahir
        </FormControl.Label>
        <Input
          placeholder="Masukkan Tanggal lahir user"
          onChangeText={(value) => setData({ ...formData, tgl_lahir: value })}
        />
        {"tgl_lahir" in errors ? (
          <FormControl.ErrorMessage>
            {errors.tgl_lahir}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>

      <Button
        _pressed={{ opacity: 0.5 }}
        onPress={onSubmit}
        mt="4"
        style={{ backgroundColor: "#14532d" }}
      >
        Simpan
      </Button>
    </VStack>
  );
}

export default function TambahUser({ navigation }) {
  return (
    <Box bgColor={"green.900"} w={"full"} h={"full"}>
      <StatusBar barStyle="dark-content" />
      <Box>
        <HStack
          my={"4"}
          mx={"6"}
          alignItems={"center"}
          justifyContent={"center"}
          position={"relative"}
        >
          <Pressable
            tintColor={"white"}
            position={"absolute"}
            left={"0"}
            onPress={() => navigation.goBack()}
            _pressed={{ opacity: 0.5 }}
          >
            <ChevronLeftIcon color="white" />
          </Pressable>

          <Text bold fontSize={"20"} color={"white"} alignItems={"center"}>
            Tambah User
          </Text>
        </HStack>
      </Box>
      <Box
        backgroundColor={"white"}
        mt={"8"}
        roundedTop={"3xl"}
        h={"full"}
        flex={"1"}
        alignItems={"center"}
        pt={"8"}
      >
        <ScrollView w={"full"}>
          <Box alignItems={"center"} pb={"6"}>
            <BuildingAFormExample navigation={navigation} />
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
