import React, { useState, useEffect } from "react";
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
import NavBar from "../../../lib/components/Navbar";
import TabBar from "../../../lib/components/TabBar";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "expo-image-picker";
const windowWidth = Dimensions.get("window").width;

// You can also use as a promise without 'callback':

function BuildingAFormExample({ navigation, article }) {
  const [formData, setData] = React.useState({
    name: "",
    linkArtikel: "",
    isiArtikel: "",
    
  });
  useEffect(() => {
    if (article) {
      setData({
        name: article.judul,
        linkArtikel: article.link,
        isiArtikel: article.isi,
      });
    }
  }, []);
  console.log(formData)
 
  const [errors, setErrors] = React.useState({});
  const toast = useToast();

  const validate = () => {
    const errors = {};

    if (!formData.name || formData.name.length < 3) {
      errors.name = "Mohon isi Judul Artikel (minimal 3 karakter)";
    }

    if (!formData.linkArtikel) {
      errors.linkArtikel = "Mohon isi link artikel";
    }

    if (!formData.isiArtikel) {
      errors.isiArtikel = "Mohon isi materi artikel";
    }

    if (!image) {
      errors.fotoArtikel = "Mohon pilih foto artikel";
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const onSubmit = () => {
    // Validate the formData
    if (validate()) {
      const form = new FormData();

      form.append("judul", formData.name);
      form.append("link", formData.linkArtikel);
      form.append("isi", formData.isiArtikel);
      form.append("admin_id", 8);

      form.append("image", {
        uri: image,
        type: "image/jpeg",
        name: "fotoArtikel",
      });

      console.log(form);

      fetch("http://192.168.1.11:8000/api/artikel/{id}", {
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
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 0.5,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
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
          Judul Artikel
        </FormControl.Label>
        <Input
          value={formData.name}
          placeholder="Masukkan judul "
          onChangeText={(value) => setData({ ...formData, name: value })}
        />
        {"name" in errors ? (
          <FormControl.ErrorMessage>{errors.name}</FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"linkArtikel" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Link Artikel
        </FormControl.Label>
        <Input
          value={formData.linkArtikel}
          placeholder="Masukkan link artikel"
          onChangeText={(value) => setData({ ...formData, linkArtikel: value })}
        />
        {"linkArtikel" in errors ? (
          <FormControl.ErrorMessage>
            {errors.linkArtikel}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"isiArtikel" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Isi Artikel
        </FormControl.Label>
        <Input
          value={formData.isiArtikel}
          placeholder="Masukkan isi artikel"
          onChangeText={(value) => setData({ ...formData, isiArtikel: value })}
        />
        {"isiArtikel" in errors ? (
          <FormControl.ErrorMessage>
            {errors.isiArtikel}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>
      <FormControl isRequired isInvalid={"fotoArtikel" in errors}>
        <FormControl.Label
          _text={{
            bold: true,
          }}
        >
          Foto Artikel
        </FormControl.Label>
        <Pressable
          rounded={"4"}
          borderColor={"gray.300"}
          borderWidth={"1"}
          onPress={pickImage}
          _pressed={{ opacity: 0.5 }}
        >
          <HStack alignItems={"center"} space={"2"}>
            <Text ml={"2"} color={"gray.400"} fontSize={"12"}>
              Tambah Foto
            </Text>
            <Spacer />
            <Box rounded={"4"} bgColor={"green.900"} size={"12"} padding={"2"}>
              <Image
                source={require("../../../../assets/icons/plus.png")}
                alt="Logo tambah"
                size={"8"}
                tintColor={"white"}
              />
            </Box>
          </HStack>
        </Pressable>
        {"fotoArtikel" in errors ? (
          <FormControl.ErrorMessage>
            {errors.fotoArtikel}
          </FormControl.ErrorMessage>
        ) : null}
      </FormControl>

      {image && (
        <Image
          mt={"4"}
          source={{ uri: image }}
          style={{ width: 200, height: 200 }}
          alt="Foto artikel"
        />
      )}
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

export default function EditArtikel({ navigation, route }) {
  const { id } = route.params;
  const [articles, setArticles] = React.useState({});
  const url = "http://192.168.1.7:8000/api/artikel";

  useEffect(() => {
    showArtikel();
  }, []);
  const showArtikel = () => {
    fetch(url + "/" + id)
      .then((response) => response.json())
      .then((json) => setArticles(json.data))
      .catch((error) => console.error(error))
  };

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
            Edit Artikel
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
            <BuildingAFormExample navigation={navigation} article={articles} />
          </Box>
        </ScrollView>
      </Box>
    </Box>
  );
}
