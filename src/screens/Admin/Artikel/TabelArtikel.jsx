import React, { useState, useEffect } from "react";
import {
  Box,
  StatusBar,
  Text,
  HStack,
  Button,
  Spacer,
  FlatList,
  Center,
  VStack,
  IconButton,
  Pressable,
  Image,
  Heading,
  Input,
  Icon,
  ScrollView,
  ChevronLeftIcon,
  Divider,
} from "native-base";
import {
  Alert,
  BackHandler,
  StatusBar as RNStatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const Tabelartikel = ({ navigation }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const url = "http://192.168.1.7:8000/api/artikel";
  const deleteArtikel = (id) => {
    fetch(url + "/" + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        Alert.alert("Berhasil", json.message);
        showArtikel();
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const confirmDelete = (id) => {
    Alert.alert(
      "Hapus Artikel",
      "Apakah anda yakin ingin menghapus artikel ini?",
      [
        {
          text: "Batal",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        { text: "Hapus", onPress: () => deleteArtikel(id) },
      ]
    );
  };
  useEffect(() => {
    showArtikel();
  }, []);
  const showArtikel = () => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setArticles(json.data))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  return (
    <Box backgroundColor={"green.900"} flex={"1"}>
      <StatusBar barStyle="dark-content" />

      {/* <View style={styles.NavContainer}>
      <View style={styles.NavBar}>
        <Pressable onPress={() => navigation.navigate("home")} style={styles.IconBehave}>

        </Pressable>
      </View>
    </View> */}

      <Box>
        <HStack
          my={"4"}
          mx={"6"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Pressable
            tintColor={"white"}
            onPress={() => navigation.goBack()}
            _pressed={{ opacity: 0.5 }}
          >
            <ChevronLeftIcon color="white" />
          </Pressable>
          <Spacer />
          <Text bold fontSize={"20"} color={"white"}>
            Data artikel
          </Text>
          <Spacer />
          <Pressable
            _pressed={{ opacity: 0.5 }}
            onPress={() => navigation.navigate("TambahArtikel")}
          >
            <Icon
              size="8"
              as={
                <Image
                  source={require("../../../../assets/icons/plus.png")}
                  alt="Gambar"
                  tintColor={"white"}
                />
              }
            />
          </Pressable>
        </HStack>
      </Box>

      <Box
        backgroundColor={"white"}
        mt={"8"}
        roundedTop={"3xl"}
        h={"full"}
        flex={"1"}
        p={"6"}
      >
        <Box w={"full"}>
          <VStack space={6} w={"full"} h={"full"}>
            <HStack space={"4"} alignItems={"center"}>
              <Box flex={"1"}>
                <Text textAlign={"center"} bold fontSize={"14"}>
                  Gambar
                </Text>
              </Box>
              <Box flex={"1"}>
                <Text textAlign={"center"} bold fontSize={"14"}>
                  Judul Artikel
                </Text>
              </Box>
              <Box flex={"1"}>
                <Text textAlign={"center"} bold fontSize={"14"}>
                  Isi Artikel
                </Text>
              </Box>
              <Box flex={"1"}>
                <Text textAlign={"center"} bold fontSize={"14"}>
                  Link Artikel
                </Text>
              </Box>

              <Box flex={"1"} alignItems={"center"}>
                <Text textAlign={"center"} bold fontSize={"14"}>
                  Aksi
                </Text>
              </Box>
            </HStack>
            <Divider />

            <ScrollView flex={"1"}>
              {articles.map((article) => (
                <HStack
                  key={article.id}
                  space={"4"}
                  alignItems={"center"}
                  my={"2"}
                >
                  <Box flex={"1"} alignItems={"center"}>
                    <Image
                      size={"10"}
                      source={{ uri: article.image }}
                      alt="Gambar"
                    />
                  </Box>
                  <Box flex={"1"}>
                    <Text textAlign={"center"} fontSize={"14"}>
                      {article.judul}
                    </Text>
                  </Box>
                  <Box flex={"1"}>
                    <Text textAlign={"center"} fontSize={"14"}>
                      {article.isi}
                    </Text>
                  </Box>
                  <Box flex={"1"}>
                    <Text textAlign={"center"} fontSize={"12"}>
                      {article.link}
                    </Text>
                  </Box>
                  <VStack flex={"1"} alignItems={"center"} space={"1"}>
                    <Pressable
                      _pressed={{ opacity: 0.5 }}
                      bgColor={"green.900"}
                      px={"2"}
                      py={"1"}
                      rounded={"8"}
                      onPress={() => navigation.navigate("EditArtikel", { id: article.id })}
                    >
                      <Text bold fontSize={"14"} color={"white"}>
                        Edit
                      </Text>
                    </Pressable>
                    <Pressable
                      _pressed={{ opacity: 0.5 }}
                      bgColor={"red.900"}
                      px={"2"}
                      py={"1"}
                      rounded={"8"}
                      onPress={() => confirmDelete(article.id)}
                    >
                      <Text bold fontSize={"14"} color={"white"}>
                        Hapus
                      </Text>
                    </Pressable>
                  </VStack>
                </HStack>
              ))}
            </ScrollView>
          </VStack>
        </Box>
      </Box>
    </Box>
  );
};
export default Tabelartikel;
